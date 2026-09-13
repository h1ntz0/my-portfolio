export type Lang = "en" | "id";

/**
 * One vocabulary across every surface: the nav label, the page title, and the
 * section heading for the same thing all use the same word. Keys are grouped by
 * where they appear, not by component.
 */
export const translations = {
  // Navigation and chrome
  nav_work: { en: "Work", id: "Proyek" },
  nav_skills: { en: "Skills", id: "Keahlian" },
  nav_experience: { en: "Experience", id: "Pengalaman" },
  nav_about: { en: "About", id: "Tentang" },
  nav_resume: { en: "CV", id: "CV" },
  nav_contact: { en: "Contact", id: "Kontak" },
  nav_open: { en: "Open menu", id: "Buka menu" },
  nav_close: { en: "Close menu", id: "Tutup menu" },

  // Hero
  hero_role: { en: "QA tester", id: "QA Tester" },
  hero_based: { en: "based in", id: "berdomisili di" },
  hero_hi: { en: "Hey, I'm {name}.", id: "Halo, saya {name}." },
  hero_break: { en: "I break software", id: "Saya uji batas sistem" },
  hero_so: {
    en: "so users don't have to.",
    id: "agar pengguna tidak perlu mengalaminya.",
  },
  hero_desc: {
    en: "I test web apps, APIs, and the data underneath them. Finding the edge case before a user does is the whole job.",
    id: "Saya menguji aplikasi web, API, dan data yang ada di baliknya. Inti pekerjaannya adalah menemukan edge case sebelum pengguna menemukannya.",
  },
  hero_see: { en: "See my work", id: "Lihat proyek" },
  hero_github: { en: "GitHub", id: "GitHub" },
  hero_learning: { en: "Learning next", id: "Sedang dipelajari" },

  // Intro
  intro_title: { en: "How I work", id: "Cara Saya Bekerja" },
  intro_lead: {
    en: "I want to know what happens when software meets a real user.",
    id: "Saya ingin tahu apa yang terjadi ketika software bertemu pengguna sungguhan.",
  },
  intro_body: {
    en: "So I probe the edge cases, follow a flow until it breaks, check what the API actually returned, and query the database to find out why the screen says otherwise. Testing is curiosity with a deadline: ask what if, follow the thread, write down what you find.",
    id: "Karena itu saya menelusuri edge case, mengikuti alur sampai menemukan titik putusnya, memeriksa apa yang sebenarnya dikembalikan API, lalu mengecek database untuk tahu mengapa tampilan berkata lain. Pengujian adalah rasa ingin tahu yang punya tenggat: tanyakan apa yang mungkin gagal, ikuti jejaknya, catat temuannya.",
  },

  // Selected work
  work_title: { en: "Selected work", id: "Proyek Pilihan" },
  work_desc: {
    en: "I build these, then I break them, then I work out why they broke. Every one links to the source.",
    id: "Saya membangunnya, mengujinya sampai rusak, lalu menelusuri penyebabnya. Semua kode sumbernya terbuka.",
  },
  work_view_github: { en: "Source on GitHub", id: "Kode di GitHub" },
  work_view_live: { en: "Open live site", id: "Buka aplikasi" },

  // What I test
  what_title: { en: "What I test", id: "Apa yang Saya Uji" },
  what_desc: {
    en: "The parts of a product that give way under pressure.",
    id: "Bagian produk yang biasanya jebol saat ditekan.",
  },

  // Experience
  exp_title: { en: "Experience", id: "Pengalaman" },
  exp_desc: {
    en: "Where I have done this for real.",
    id: "Tempat saya menjalankan pekerjaan ini secara nyata.",
  },
  exp_what_i_did: { en: "What I did", id: "Yang saya kerjakan" },
  exp_impact: { en: "What changed", id: "Yang berubah" },

  // Tools
  tools_title: { en: "Tools", id: "Perangkat" },
  tools_desc: {
    en: "No percentages and no proficiency bars. Each one names the work it was used in.",
    id: "Tanpa persentase dan tanpa bar kemahiran. Setiap alat menyebut pekerjaan tempat ia dipakai.",
  },
  tools_used: { en: "used in", id: "dipakai di" },
  tools_learning: { en: "Learning next", id: "Sedang dipelajari" },
  tools_browse: { en: "See the work behind these", id: "Lihat proyek di baliknya" },

  // GitHub
  gh_title: { en: "Also on GitHub", id: "Juga di GitHub" },
  gh_desc: {
    en: "The rest of what I build lives here. Some of it is more testing than product.",
    id: "Sisanya ada di sini. Sebagian lebih banyak berisi pengujian daripada produk.",
  },
  gh_view: { en: "Open my GitHub", id: "Buka GitHub saya" },
  gh_all: { en: "See all six", id: "Lihat keenamnya" },

  // Contact
  contact_title: {
    en: "Looking for a QA tester?",
    id: "Sedang mencari QA Tester?",
  },
  contact_desc: {
    en: "I am open to QA roles, contract testing work, and questions about anything on this site.",
    id: "Saya terbuka untuk posisi QA, pekerjaan pengujian lepas, maupun pertanyaan tentang isi situs ini.",
  },
  contact_email: { en: "Email me", id: "Kirim email" },

  // Work page
  projects_title: { en: "Work", id: "Proyek" },
  projects_desc: {
    en: "Real repositories from my GitHub. I build them, test them, and keep the source public so you can read how I actually work.",
    id: "Repositori nyata dari GitHub saya. Saya membangun, menguji, dan membuka kode sumbernya agar cara kerja saya dapat ditinjau langsung.",
  },
  projects_intro: {
    en: "A few are small experiments, a few are complete. All of them are real code with real bugs and real fixes.",
    id: "Sebagian kecil dan eksperimental, sebagian sudah utuh. Semuanya kode nyata dengan bug dan perbaikan yang nyata.",
  },
  projects_featured: { en: "Featured", id: "Unggulan" },
  projects_featured_tool: { en: "QA tool", id: "Alat QA" },
  projects_view_repo: { en: "Open repository", id: "Buka repositori" },

  // Skills page
  skills_eyebrow: { en: "Skills", id: "Keahlian" },
  skills_title: { en: "Skills", id: "Keahlian" },
  skills_desc: {
    en: "Grouped by discipline, and each one names the work it came from. There are no invented percentages here.",
    id: "Dikelompokkan per disiplin, dan setiap keahlian menyebut asal pekerjaannya. Tidak ada persentase buatan di sini.",
  },

  // Experience page
  experience_eyebrow: { en: "Experience", id: "Pengalaman" },
  experience_title: { en: "Experience", id: "Pengalaman" },
  experience_desc: {
    en: "Two roles, and the testing work inside each one.",
    id: "Dua posisi, beserta pekerjaan pengujian di dalamnya.",
  },
  experience_roles: { en: "Roles", id: "Posisi" },
  experience_path: { en: "Where I am heading", id: "Arah berikutnya" },
  experience_path_note: {
    en: "Automation is the part I am pushing on right now.",
    id: "Otomasi adalah bagian yang sedang saya tekuni sekarang.",
  },

  // About page
  about_title: {
    en: "QA tester, Linux user, and the person who reads the error message.",
    id: "QA Tester, pengguna Linux, dan orang yang benar-benar membaca pesan error.",
  },
  about_desc: {
    en: "Interning at PT Wisesa Consulting Indonesia as an application support and QA tester.",
    id: "Magang di PT Wisesa Consulting Indonesia sebagai application support dan QA Tester.",
  },
  about_p1: {
    en: "At WISECON I handle application support, trace the issues users report, and check that a fix really fixed it. Quality is not only finding bugs. It is building the habit that stops them coming back.",
    id: "Di WISECON saya menangani application support, menelusuri kendala yang dilaporkan pengguna, dan memastikan perbaikan benar-benar menyelesaikan masalahnya. Mutu bukan sekadar menemukan bug, melainkan membangun kebiasaan yang mencegahnya kembali.",
  },
  about_p2: {
    en: "I pair manual testing discipline with automation where it earns its keep. Away from testing I run Debian and Ubuntu servers, read source code to understand behaviour, and keep a terminal open.",
    id: "Saya memadukan ketelitian pengujian manual dengan otomasi di tempat yang memang layak diotomasi. Di luar pengujian saya mengelola server Debian dan Ubuntu, membaca kode sumber untuk memahami perilaku sistem, dan hampir selalu membuka terminal.",
  },
  about_focus_heading: { en: "Core skills", id: "Kompetensi utama" },
  about_snapshot: { en: "Profile", id: "Ringkasan profil" },
  about_role: { en: "Role", id: "Peran" },
  about_location: { en: "Location", id: "Lokasi" },
  about_methodology_eyebrow: { en: "Method", id: "Metode" },
  about_methodology_title: { en: "How I test", id: "Cara saya menguji" },
  about_methodology_desc: {
    en: "Five steps, from reading the requirement to signing off on the fix.",
    id: "Lima langkah, dari membaca kebutuhan sampai menyetujui perbaikan.",
  },
  about_creds_eyebrow: { en: "Certifications", id: "Sertifikasi" },
  about_creds_title: { en: "Certifications", id: "Sertifikasi" },
  about_creds_desc: {
    en: "Issuer, year, and what each one covered.",
    id: "Lembaga penerbit, tahun, dan cakupan materinya.",
  },

  // Contact page
  contact_eyebrow: { en: "Contact", id: "Kontak" },
  contact_page_title: { en: "Contact", id: "Kontak" },
  contact_page_desc: {
    en: "Email is the fastest way to reach me. The form below opens your mail client with the message filled in.",
    id: "Email adalah cara tercepat menghubungi saya. Formulir di bawah membuka klien email Anda dengan pesan yang sudah terisi.",
  },
  contact_form_heading: { en: "Send a message", id: "Kirim pesan" },
  contact_send: { en: "Open in mail client", id: "Buka di klien email" },
  contact_name: { en: "Name", id: "Nama" },
  contact_email_label: { en: "Email", id: "Email" },
  contact_subject: { en: "Subject", id: "Subjek" },
  contact_message: { en: "Message", id: "Pesan" },
  contact_placeholder_msg: {
    en: "Which role or project is this about?",
    id: "Posisi atau proyek mana yang Anda maksud?",
  },
  contact_fallback: {
    en: "Prefer LinkedIn? I check it too.",
    id: "Lebih suka LinkedIn? Saya memeriksanya juga.",
  },

  // CV
  resume_title: { en: "CV", id: "CV" },
  resume_subtitle: {
    en: "Preview it here and save a PDF of the same page.",
    id: "Pratinjau di sini, lalu simpan halaman yang sama sebagai PDF.",
  },
  resume_download_btn: { en: "Save as PDF", id: "Simpan sebagai PDF" },
  resume_summary: {
    en: "QA tester working on functional testing, API validation, SQL checks, and automation. Every result gets written down with the evidence behind it.",
    id: "QA Tester yang menangani pengujian fungsional, validasi API, pengecekan SQL, dan otomasi. Setiap hasil dicatat beserta buktinya.",
  },
  resume_exp_heading: { en: "Experience", id: "Pengalaman" },
  resume_skills_heading: { en: "Skills", id: "Keahlian" },
  resume_certs_heading: { en: "Certifications", id: "Sertifikasi" },

  // Footer
  footer_tagline: {
    en: "Built in Jakarta. Every claim on this site is one I can show you.",
    id: "Dibangun di Jakarta. Setiap klaim di situs ini bisa saya buktikan.",
  },
  footer_note: {
    en: "Set in Space Grotesk and Archivo. Built with Next.js, deployed on Vercel.",
    id: "Bertipe Space Grotesk dan Archivo. Dibangun dengan Next.js, dipasang di Vercel.",
  },

  role_full: {
    en: "Quality Assurance Tester Intern & Linux Enthusiast",
    id: "QA Tester Intern & Linux System Enthusiast",
  },
  loader_aria: { en: "Loading page", id: "Memuat halaman" },
} as const;

export type TranslationKey = keyof typeof translations;

export type Locale = Record<TranslationKey, string>;

export const en: Locale = Object.fromEntries(
  Object.entries(translations).map(([k, v]) => [k, v.en])
) as Locale;

export const id: Locale = Object.fromEntries(
  Object.entries(translations).map(([k, v]) => [k, v.id])
) as Locale;

export const dictionaries: Record<Lang, Locale> = { en, id };
