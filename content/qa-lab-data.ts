import type { TestCase, ApiEndpoint } from "@/lib/types";

export interface InteractiveBugScenario {
  id: string;
  title: string;
  titleId: string;
  category: "Functional" | "Boundary" | "Security" | "Performance" | "State";
  project: string;
  severity: "Critical" | "High" | "Medium" | "Low";
  reproSteps: string[];
  reproStepsId: string[];
  expected: string;
  expectedId: string;
  actual: string;
  actualId: string;
  fixVerification: string;
  fixVerificationId: string;
  sampleInput: string;
  codeSnippet: string;
}

export const showcaseTestCases: TestCase[] = [
  {
    id: "TC-AUTH-001",
    title: "SQL Injection boundary bypass on Auth Login parameter sanitization",
    type: "Negative",
    status: "Passed",
    project: "Ranime",
    priority: "P0",
    expected: "Input sanitized; returns 400 Bad Request with generic error without DB trace disclosure.",
    executionTimeMs: 42,
  },
  {
    id: "TC-AUTH-002",
    title: "Session token expiry & token revocation on concurrent logout",
    type: "Functional",
    status: "Passed",
    project: "Ranime",
    priority: "P0",
    expected: "Bearer token immediately blacklisted, subsequent GraphQL queries return 401 Unauthorized.",
    executionTimeMs: 85,
  },
  {
    id: "TC-API-003",
    title: "GraphQL rate limiting under 120 req/min burst traffic",
    type: "API",
    status: "Passed",
    project: "Ranime",
    priority: "P1",
    expected: "HTTP 429 Too Many Requests with Retry-After header after 100 requests threshold.",
    executionTimeMs: 112,
  },
  {
    id: "TC-BOT-004",
    title: "Telegram image stream buffer overflow on >20MB uncompressed sticker conversion",
    type: "Boundary",
    status: "Fixed",
    project: "telegram-sticker-bot",
    priority: "P0",
    expected: "Image stream truncated safely to 512x512 with WEBP compression without process crash.",
    executionTimeMs: 340,
  },
  {
    id: "TC-CLI-005",
    title: "Go concurrent task write with dirty file lock race condition",
    type: "Regression",
    status: "Passed",
    project: "Todo-cli",
    priority: "P1",
    expected: "File mutex lock acquired before atomic write to avoid JSON corruption.",
    executionTimeMs: 18,
  },
  {
    id: "TC-E2E-006",
    title: "Automated Axe-Core Accessibility audit (WCAG 2.1 AA) across all viewport tiers",
    type: "Automation",
    status: "Passed",
    project: "Portfolio QA",
    priority: "P1",
    expected: "Zero critical accessibility violations across contrast, labels, and aria roles.",
    executionTimeMs: 950,
  },
];

export const showcaseBugScenarios: InteractiveBugScenario[] = [
  {
    id: "BUG-RNM-001",
    title: "GraphQL search query pagination offset crash on negative integer input",
    titleId: "Crash pada offset paginasi query GraphQL saat menerima input integer negatif",
    category: "Boundary",
    project: "Ranime",
    severity: "High",
    sampleInput: `query { searchAnime(page: -1, perPage: 20) { id title } }`,
    codeSnippet: `// Vulnerable Code:
const offset = (page - 1) * perPage; // produces negative offset (-40) in PostgreSQL query

// Verified Fix:
const safePage = Math.max(1, Number.isInteger(page) ? page : 1);
const offset = (safePage - 1) * perPage;`,
    reproSteps: [
      "Navigate to the Explore / Search anime view",
      "Intercept the GraphQL POST payload via network proxy or DevTools",
      "Inject negative value into query variable: { page: -1 }",
      "Send request and observe database exception in server response",
    ],
    reproStepsId: [
      "Buka halaman eksplorasi / pencarian anime",
      "Intercept payload request POST GraphQL",
      "Ubah variabel query menjadi nilai negatif: { page: -1 }",
      "Kirim request dan periksa respons error exception database",
    ],
    expected: "Validation layer rejects negative page with HTTP 400 'Page must be an integer >= 1'.",
    expectedId: "Lapisan validasi menolak nilai negatif dengan HTTP 400 'Page must be an integer >= 1'.",
    actual: "Unhandled PostgreSQL error syntax at OFFSET -40 returning HTTP 500 with stack disclosure.",
    actualId: "Database PostgreSQL melemparkan error sintaks OFFSET -40 dan mengembalikan status HTTP 500.",
    fixVerification: "Automated API test added in regression test suite; returns HTTP 400 Bad Request.",
    fixVerificationId: "Test case otomatis ditambahkan ke regression suite; memverifikasi respons HTTP 400 Bad Request.",
  },
  {
    id: "BUG-BOT-002",
    title: "Transparent alpha channel loss during Pillow WEBP conversion on RGBA images",
    titleId: "Hilangnya alpha channel transparansi saat konversi WEBP menggunakan Pillow pada gambar RGBA",
    category: "Functional",
    project: "telegram-sticker-bot",
    severity: "Medium",
    sampleInput: `Image: transparent_character.png (32-bit RGBA) -> /convert_sticker`,
    codeSnippet: `// Vulnerable Code:
img = Image.open(photo_path).convert('RGB') # Strips transparent alpha channel!

// Verified Fix:
if img.mode != 'RGBA':
    img = img.convert('RGBA')
# Preserve alpha channel during transparent padding & export`,
    reproSteps: [
      "Send a PNG photo with transparent background to the Telegram bot",
      "Trigger sticker processing command",
      "Download generated sticker sticker.webp and inspect background",
    ],
    reproStepsId: [
      "Kirim file PNG berlatar transparan ke bot Telegram",
      "Jalankan proses pembuatan sticker otomatis",
      "Unduh file sticker.webp hasil konversi dan periksa latar belakang",
    ],
    expected: "Sticker output maintains 100% transparency padding with smooth alpha anti-aliasing.",
    expectedId: "Output sticker mempertahankan transparansi latar belakang 100% tanpa artefak hitam.",
    actual: "Transparent pixels rendered as opaque black background.",
    actualId: "Piksel transparan berubah menjadi warna hitam pekat akibat konversi RGB paksa.",
    fixVerification: "Added unit tests verifying RGBA image channels and transparency alpha bounds.",
    fixVerificationId: "Unit test ditambahkan untuk memvalidasi channel RGBA dan preservasi alpha.",
  },
  {
    id: "BUG-CLI-003",
    title: "Truncation of UTF-8 emoji and multibyte characters in terminal todo table output",
    titleId: "Pemotongan karakter emoji dan multibyte UTF-8 pada rendering tabel CLI",
    category: "State",
    project: "Todo-cli",
    severity: "Low",
    sampleInput: `todo-cli add "🚀 Release v1.0 & test automation"`,
    codeSnippet: `// Vulnerable Code:
len(taskTitle) // returns byte length (32 bytes), misaligning terminal string width

// Verified Fix:
import "github.com/mattn/go-runewidth"
runewidth.StringWidth(taskTitle) // accurately calculates display columns in terminal`,
    reproSteps: [
      "Execute `todo-cli add '🚀 Release testing'` in terminal",
      "Execute `todo-cli list` to display table view",
      "Inspect border columns alignment",
    ],
    reproStepsId: [
      "Jalankan command `todo-cli add '🚀 Release testing'` di terminal",
      "Jalankan `todo-cli list` untuk menampilkan daftar tugas",
      "Periksa kerapian dan alignment border tabel terminal",
    ],
    expected: "Table borders align uniformly regardless of unicode glyph width.",
    expectedId: "Border tabel terminal sejajar sempurna terlepas dari lebar karakter unicode/emoji.",
    actual: "Byte-length calculation caused table borders to shift and break formatting.",
    actualId: "Perhitungan byte murni menyebabkan garis border tabel bergeser dan berantakan.",
    fixVerification: "Verified on bash, zsh, and PowerShell with unicode test strings.",
    fixVerificationId: "Diverifikasi pada bash, zsh, dan PowerShell menggunakan string unicode komprehensif.",
  },
];

export const interactiveApiEndpoints: (ApiEndpoint & {
  requestBody?: string;
  responseBody: string;
  description: string;
  descriptionId: string;
})[] = [
  {
    id: "API-01",
    method: "POST",
    path: "/api/v1/auth/login",
    status: 200,
    responseTimeMs: 64,
    assertions: 5,
    passed: 5,
    scenario: "Valid credentials with JWT return and secure httpOnly cookie flags",
    project: "Ranime",
    description: "Authenticates QA test user and issues signed token.",
    descriptionId: "Otentikasi user pengujian QA dan penerbitan token JWT terverifikasi.",
    requestBody: JSON.stringify(
      {
        email: "qa.tester@arrofi.qa",
        password: "••••••••••••",
      },
      null,
      2
    ),
    responseBody: JSON.stringify(
      {
        status: "success",
        data: {
          user: { id: "usr_qa_982", email: "qa.tester@arrofi.qa", role: "qa_engineer" },
          accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
          expiresIn: 3600,
        },
      },
      null,
      2
    ),
  },
  {
    id: "API-02",
    method: "GET",
    path: "/api/v1/anime/search?q=cyberpunk&limit=10",
    status: 200,
    responseTimeMs: 118,
    assertions: 6,
    passed: 6,
    scenario: "Search query with pagination and field schema assertions",
    project: "Ranime",
    description: "Fetches anime collection with verified schema validations.",
    descriptionId: "Pengambilan koleksi anime dengan validasi skema data dan tipe atribut.",
    responseBody: JSON.stringify(
      {
        data: {
          results: [
            { id: 1091, title: "Cyberpunk: Edgerunners", score: 8.6, episodes: 10, status: "FINISHED" },
            { id: 2489, title: "Ghost in the Shell", score: 8.3, episodes: 1, status: "FINISHED" },
          ],
          pagination: { page: 1, total: 2, hasMore: false },
        },
      },
      null,
      2
    ),
  },
  {
    id: "API-03",
    method: "POST",
    path: "/api/v1/bot/sticker/process",
    status: 201,
    responseTimeMs: 245,
    assertions: 4,
    passed: 4,
    scenario: "Image buffer conversion to WEBP sticker with alpha dimension bounds",
    project: "telegram-sticker-bot",
    description: "Transforms image payload into Telegram sticker standard format.",
    descriptionId: "Mengubah payload gambar ke format standar sticker Telegram 512x512 WEBP.",
    requestBody: JSON.stringify(
      {
        file_id: "BAACAgUAAxkBAAI...",
        output_format: "webp",
        max_dimension: 512,
        preserve_alpha: true,
      },
      null,
      2
    ),
    responseBody: JSON.stringify(
      {
        status: "processed",
        sticker_file_id: "CAACAgUAAxk...",
        width: 512,
        height: 512,
        format: "image/webp",
        size_bytes: 64210,
      },
      null,
      2
    ),
  },
  {
    id: "API-04",
    method: "DELETE",
    path: "/api/v1/tasks/task_4092",
    status: 204,
    responseTimeMs: 22,
    assertions: 3,
    passed: 3,
    scenario: "Atomic task deletion with database consistency validation",
    project: "Todo-cli",
    description: "Removes completed task and validates atomic disk sync.",
    descriptionId: "Menghapus tugas selesai dan memvalidasi sinkronisasi disk aman.",
    responseBody: "/* HTTP 204 No Content - Resource deleted successfully */",
  },
];
