export type Lang = "en" | "id";

export const translations = {
  // Navbar
  nav_home: { en: "Home", id: "Beranda" },
  nav_work: { en: "Work", id: "Karya" },
  nav_about: { en: "About", id: "Tentang" },
  nav_resume: { en: "CV", id: "CV" },
  nav_talk: { en: "Let's talk", id: "Hubungi saya" },
  nav_open: { en: "Open menu", id: "Buka menu" },
  nav_close: { en: "Close menu", id: "Tutup menu" },

  // Hero
  hero_role: { en: "QA tester", id: "QA tester" },
  hero_based: { en: "based in", id: "berbasis di" },
  hero_hi: { en: "Hey, I'm {name}.", id: "Halo, saya {name}." },
  hero_break: { en: "I break software", id: "Saya menguji software" },
  hero_so: { en: "so users don't have to.", id: "agar pengguna tidak menemukan bug." },
  hero_desc: {
    en: "QA tester focused on web testing, API validation, SQL, and automation. I like finding the edge cases, breaking the happy path, and turning bugs into test cases.",
    id: "QA tester yang berfokus pada web testing, validasi API, SQL, dan otomatisasi pengujian. Terbiasa mencari edge case, menguji batasan sistem, dan menyusun dokumentasi defect yang rapi.",
  },
  hero_see: { en: "See my work", id: "Lihat karya saya" },
  hero_github: { en: "GitHub", id: "GitHub" },
  hero_learning: { en: "Currently learning", id: "Sedang dipelajari" },

  // Intro
  intro_num: { en: "01", id: "01" },
  intro_title: { en: "A little about me", id: "Sekilas tentang saya" },
  intro_lead: {
    en: "I'm interested in what happens when software meets real users.",
    id: "Saya tertarik dengan apa yang terjadi ketika sistem software digunakan oleh pengguna nyata.",
  },
  intro_body: {
    en: "I enjoy exploring edge cases, breaking flows, checking APIs, querying databases, and figuring out why something doesn't behave the way it should. For me, testing is less about a checklist and more about curiosity: asking \"what if?\" and following the thread until I understand the actual cause.",
    id: "Saya terbiasa mengeksplorasi edge cases, menguji ketahanan flow aplikasi, validasi API endpoint, query database SQL, serta mencari akar penyebab bug. Bagi saya, pengujian software bukan sekadar checklist, melainkan analisis kritis dan pemastian kualitas.",
  },

  // Selected work
  work_title: { en: "Selected work", id: "Karya pilihan" },
  work_desc: {
    en: "These are the real projects I work on. I treat them like little QA labs: I build them, I break them, and then I figure out why they broke. Each one links to the source on GitHub.",
    id: "Project nyata yang saya kembangkan dan uji secara menyeluruh sebagai pembuktian teknis. Setiap project dilengkapi link repositori GitHub.",
  },
  work_view_github: { en: "View on GitHub", id: "Lihat di GitHub" },

  // What I test
  what_num: { en: "03", id: "03" },
  what_title: { en: "What I like testing", id: "Fokus pengujian" },
  what_desc: {
    en: "I like looking for the edge cases and the small details that trip people up. A few of the things I enjoy poking at:",
    id: "Area pengujian dan validasi yang biasa saya tangani dalam siklus Quality Assurance:",
  },

  // Experience
  exp_num: { en: "04", id: "04" },
  exp_title: { en: "Experience", id: "Pengalaman Kerja" },
  exp_desc: { en: "Where I've built quality so far.", id: "Rekam jejak profesional dalam memastikan kualitas sistem." },
  exp_what_i_did: { en: "What I did", id: "Aktivitas Pengujian" },
  exp_impact: { en: "Impact", id: "Dampak & Hasil" },

  // Tools
  tools_num: { en: "05", id: "05" },
  tools_title: { en: "Tools I use", id: "Tools & Keahlian" },
  tools_desc: {
    en: "No invented percentages. Just the tools and the work they were used in.",
    id: "Daftar tools nyata yang digunakan dalam proyek dan pengujian riil.",
  },
  tools_used: { en: "used in", id: "digunakan pada" },
  tools_browse: { en: "Browse the projects", id: "Lihat semua project" },
  tools_every: {
    en: "Every skill is tied to real work.",
    id: "Setiap keahlian terhubung langsung dengan project nyata.",
  },

  // Currently learning
  learn_num: { en: "07", id: "07" },
  learn_title: { en: "Currently learning", id: "Sedang dipelajari" },
  learn_desc: {
    en: "I'm always trying to get better at the parts of testing that are hardest to do well.",
    id: "Terus memperdalam otomasi pengujian modern, CI/CD pipeline, dan arsitektur test.",
  },

  // GitHub
  gh_num: { en: "06", id: "06" },
  gh_title: {
    en: "I build things and keep them on GitHub",
    id: "Project Terbuka di GitHub",
  },
  gh_desc: {
    en: "A few real projects I've worked on. Some are more testing-heavy than others, but they're all real.",
    id: "Koleksi project open source yang saya bangun, uji, dan kelola di GitHub.",
  },
  gh_view: { en: "View GitHub", id: "Buka GitHub" },

  // Contact
  contact_num: { en: "08", id: "08" },
  contact_title: { en: "Got a QA opportunity?", id: "Membuka Peluang QA?" },
  contact_desc: {
    en: "I'm always open to discussing QA, testing projects, and opportunities.",
    id: "Saya selalu terbuka untuk diskusi mengenai Quality Assurance, project testing, dan peluang karir.",
  },
  contact_email: { en: "Email me", id: "Kirim Email" },
  contact_send: { en: "Send Message", id: "Kirim Pesan" },
  contact_name: { en: "Name", id: "Nama" },
  contact_email_label: { en: "Email", id: "Email" },
  contact_subject: { en: "Subject", id: "Subjek" },
  contact_message: { en: "Message", id: "Pesan" },
  contact_placeholder_msg: { en: "Tell me about the role or project...", id: "Tuliskan detail project atau peluang QA..." },
  contact_location_prefix: { en: "Based in", id: "Berdomisili di" },

  // Projects Page
  projects_eyebrow: { en: "Work", id: "Karya" },
  projects_title: { en: "Things I've built", id: "Project & Hasil Karya" },
  projects_desc: {
    en: "Real projects straight from my GitHub. I build these, I test them, and I keep the source public so you can look at how I actually work.",
    id: "Project nyata dari GitHub saya. Saya bangun, saya uji, dan kodenya terbuka agar Anda bisa melihat langsung standar kerja saya.",
  },
  projects_intro: {
    en: "A few of these are small and experimental, a few are more complete. What they have in common is that they're real: real code, real bugs, and real lessons. Click any repo to open the source on GitHub.",
    id: "Kombinasi project backend, frontend, bot automation, dan CLI tool yang diuji dengan berbagai skenario. Klik kartu repo untuk membuka source code di GitHub.",
  },

  // About Page
  about_eyebrow: { en: "About", id: "Tentang" },
  about_title: { en: "A QA engineer who treats testing as engineering.", id: "QA Engineer yang mengedepankan presisi & rekayasa sistem." },
  about_desc: {
    en: "I do not just claim to know quality. I show the process, the evidence, and the result.",
    id: "Bukan sekadar klaim kualitas, melainkan proses pengujian terstruktur, bukti defect, dan verifikasi nyata.",
  },
  about_p1: {
    en: "I test software to find problems early, document them clearly, and verify that fixes actually work. My work covers functional and regression testing, API validation, database checks, and building automation that runs in CI.",
    id: "Saya menguji software untuk mendeteksi defect sedini mungkin, menyusun bug report terstruktur, dan memverifikasi bug fix. Lingkup kerja saya mencakup functional testing, regression, API validation, database validation, hingga otomasi testing.",
  },
  about_p2: {
    en: "Every claim on this site points to evidence: a test case, a bug report, an API check, or a test run. If a number is a demo execution, I say so. That is how I want my own quality to be judged.",
    id: "Setiap implementasi pengujian didasari bukti nyata: test case, laporan defect, validasi endpoint, atau hasil test suite eksekusi.",
  },
  about_focus_heading: { en: "What I focus on", id: "Fokus Utama" },
  about_snapshot: { en: "Snapshot", id: "Ringkasan" },
  about_role: { en: "Role", id: "Peran" },
  about_location: { en: "Location", id: "Lokasi" },
  about_methodology_eyebrow: { en: "How I Test", id: "Metodologi" },
  about_methodology_title: { en: "My methodology", id: "Alur & Metodologi Pengujian" },
  about_methodology_desc: {
    en: "A repeatable process from understanding requirements to improving the process.",
    id: "Proses terstruktur dari analisa requirement, test design, eksekusi, pelaporan defect, hingga evaluasi.",
  },

  // Resume Page
  resume_title: { en: "CV", id: "Curriculum Vitae" },
  resume_subtitle: {
    en: "Preview, then download it as a PDF with one click.",
    id: "Tinjau CV dan unduh versi PDF dalam satu klik.",
  },
  resume_download_btn: { en: "Download PDF", id: "Unduh PDF" },

  // Footer
  footer_tagline: {
    en: "Built with curiosity, tested with intention.",
    id: "Dibangun dengan presisi, diuji dengan integritas.",
  },
  footer_copyright: {
    en: "QA tester focused on software quality and test engineering.",
    id: "QA tester yang berfokus pada kualitas software dan otomasi pengujian.",
  },
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
