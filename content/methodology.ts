export interface WorkflowStep {
  title: string;
  titleId?: string;
  category: string;
  description: string;
  descriptionId?: string;
  practicalTasks: string[];
  practicalTasksId?: string[];
}

export const practicalWorkflow: WorkflowStep[] = [
  {
    title: "Requirement & Acceptance Criteria Analysis",
    titleId: "Analisis Requirement & Kriteria Penerimaan",
    category: "Step 01",
    description:
      "Review user stories and features, clarifying expected behavior before drafting tests.",
    descriptionId:
      "Evaluasi user story dan alur fitur untuk memastikan perilaku sistem yang diharapkan sebelum penyusunan test case.",
    practicalTasks: [
      "Understand happy path and negative boundary conditions",
      "Identify high-risk workflows (auth, data mutation, forms)",
      "Clarify ambiguous acceptance criteria with team",
    ],
    practicalTasksId: [
      "Identifikasi happy path beserta batas skenario negatif",
      "Petakan alur berisiko tinggi (autentikasi, mutasi data, form)",
      "Klarifikasi kriteria penerimaan yang ambigu bersama tim",
    ],
  },
  {
    title: "Test Case & Scenario Design",
    titleId: "Perancangan Test Case & Skenario Uji",
    category: "Step 02",
    description:
      "Draft structured, repeatable manual test cases with clear expected results.",
    descriptionId:
      "Susun test case manual yang terstruktur dan terukur dengan hasil yang diharapkan secara jelas.",
    practicalTasks: [
      "Write step-by-step reproduction steps and expected outcomes",
      "Prepare realistic test data and edge cases",
      "Map test cases into functional and regression suites",
    ],
    practicalTasksId: [
      "Dokumentasikan langkah pengujian bertahap beserta hasil yang diharapkan",
      "Siapkan data uji realistis dengan variasi edge case",
      "Kategorikan skenario ke dalam test suite fungsional dan regresi",
    ],
  },
  {
    title: "Manual, API & Exploratory Execution",
    titleId: "Eksekusi Manual, API & Exploratory",
    category: "Step 03",
    description:
      "Execute test cases and conduct unscripted exploratory testing across browsers and devices.",
    descriptionId:
      "Eksekusi test case terencana beserta exploratory testing lintas browser dan perangkat.",
    practicalTasks: [
      "Validate web UI responsiveness and form field constraints",
      "Perform REST API testing using Postman (payloads, status codes, headers)",
      "Query SQL databases (MySQL/PostgreSQL) to verify data integrity",
    ],
    practicalTasksId: [
      "Validasi responsivitas UI web dan batasan input form",
      "Uji endpoint REST API menggunakan Postman (payload, status code, header)",
      "Verifikasi integritas data melalui query SQL (MySQL/PostgreSQL)",
    ],
  },
  {
    title: "Bug Documentation & Defect Tracking",
    titleId: "Dokumentasi Bug & Pelacakan Defect",
    category: "Step 04",
    description:
      "Log detailed defect tickets with clear severity, steps to reproduce, and evidence.",
    descriptionId:
      "Dokumentasikan tiket defect secara detail disertai tingkat severity, langkah reproduksi, dan bukti pendukung.",
    practicalTasks: [
      "Document actual vs expected behavior with screenshots/logs",
      "Assign severity and priority (Critical, Major, Minor)",
      "Provide developers with exact payloads and network trace details",
    ],
    practicalTasksId: [
      "Dokumentasikan hasil aktual versus ekspektasi dengan screenshot/log",
      "Tetapkan tingkat severity dan prioritas (Critical, Major, Minor)",
      "Sediakan payload akurat beserta detail network trace kepada developer",
    ],
  },
  {
    title: "Bug Verification & Regression Testing",
    titleId: "Verifikasi Bug & Regression Testing",
    category: "Step 05",
    description:
      "Retest resolved defects and execute regression test suites to safeguard unaffected areas.",
    descriptionId:
      "Uji ulang bug yang telah diperbaiki serta jalankan suite pengujian regresi guna memastikan stabilitas area sistem lainnya.",
    practicalTasks: [
      "Verify bug fixes across staging environments",
      "Run regression suites manually or via Playwright automated tests",
      "Provide sign-off for release readiness",
    ],
    practicalTasksId: [
      "Verifikasi perbaikan bug pada lingkungan staging",
      "Eksekusi regression suite secara manual maupun terotomasi via Playwright",
      "Memberikan sign-off kesiapan rilis setelah seluruh kriteria terpenuhi",
    ],
  },
];

export interface CompetencyItem {
  title: string;
  titleId?: string;
  badge: string;
  badgeId?: string;
  points: string[];
  pointsId?: string[];
}

export const testingCompetencies: CompetencyItem[] = [
  {
    title: "Manual & Functional Testing",
    titleId: "Pengujian Manual & Fungsional",
    badge: "Utama",
    badgeId: "Utama",
    points: [
      "Executing end-to-end user workflows",
      "Exploratory testing for edge-case defects",
      "Form validation and negative input boundary checks",
      "Cross-browser and responsive layout inspection",
    ],
    pointsId: [
      "Eksekusi alur user lengkap ujung ke ujung",
      "Exploratory testing buat cari defect edge-case",
      "Validasi form dan pengecekan batas input negatif",
      "Pemeriksaan lintas browser dan layout responsif",
    ],
  },
  {
    title: "API Testing & Validation",
    titleId: "Pengujian & Validasi API",
    badge: "Hands-on",
    badgeId: "Praktik",
    points: [
      "REST API endpoint validation with Postman",
      "Status code verification (200, 201, 400, 401, 404, 500)",
      "JSON response schema and field type checks",
      "Authentication token and header verification",
    ],
    pointsId: [
      "Validasi endpoint REST API pakai Postman",
      "Pengecekan status code (200, 201, 400, 401, 404, 500)",
      "Cek tipe field dan skema response JSON",
      "Verifikasi header dan token autentikasi",
    ],
  },
  {
    title: "Automation Testing (Playwright)",
    titleId: "Otomasi Pengujian (Playwright)",
    badge: "Automation",
    badgeId: "Otomasi",
    points: [
      "Building E2E browser test suites with TypeScript",
      "Automating critical user flows and form submissions",
      "Automated regression checks to prevent escaped defects",
      "CI/CD and local headless test execution",
    ],
    pointsId: [
      "Bikin suite test browser E2E pakai TypeScript",
      "Otomasi alur kritis dan pengiriman form",
      "Pengecekan regresi otomatis pencegah defect lolos",
      "Eksekusi headless test lokal dan pipeline CI/CD",
    ],
  },
  {
    title: "Database & Backend Validation",
    titleId: "Validasi Database & Backend",
    badge: "Investigation",
    badgeId: "Investigasi",
    points: [
      "Querying MySQL & PostgreSQL with SQL",
      "Verifying data mutations (INSERT, UPDATE, DELETE)",
      "Investigating data anomalies reported by application support",
      "Checking referential integrity and null constraints",
    ],
    pointsId: [
      "Query data di MySQL & PostgreSQL pakai SQL",
      "Verifikasi mutasi data (INSERT, UPDATE, DELETE)",
      "Investigasi keanehan data dari laporan support",
      "Pengecekan integritas relasi dan batasan null",
    ],
  },
];
