export type Lang = "en" | "id";

export const translations = {
  // Navbar
  nav_home: { en: "Home", id: "Beranda" },
  nav_work: { en: "Work", id: "Project" },
  nav_about: { en: "About", id: "Tentang" },
  nav_resume: { en: "CV", id: "CV" },
  nav_talk: { en: "Let's talk", id: "Ngobrol yuk" },
  nav_open: { en: "Open menu", id: "Buka menu" },
  nav_close: { en: "Close menu", id: "Tutup menu" },

  // Hero
  hero_role: { en: "QA tester", id: "QA tester" },
  hero_based: { en: "based in", id: "di" },
  hero_hi: { en: "Hey, I'm {name}.", id: "Halo, aku {name}." },
  hero_break: { en: "I break software", id: "Aku bikin software error" },
  hero_so: { en: "so users don't have to.", id: "biar user nggak perlu ngerasain bug-nya." },
  hero_desc: {
    en: "QA tester focused on web testing, API validation, SQL, and automation. I like finding the edge cases, breaking the happy path, and turning bugs into test cases.",
    id: "QA tester yang fokus di web testing, API, SQL, dan test automation. Suka ngulik edge case, ngetes skenario aneh, dan nyatet bug biar gampang ditracking.",
  },
  hero_see: { en: "See my work", id: "Lihat project" },
  hero_github: { en: "GitHub", id: "GitHub" },
  hero_learning: { en: "Currently learning", id: "Lagi belajar" },

  // Intro
  intro_num: { en: "01", id: "01" },
  intro_title: { en: "A little about me", id: "Sekilas tentang saya" },
  intro_lead: {
    en: "I'm interested in what happens when software meets real users.",
    id: "Penasaran gimana jadinya pas software beneran dipakai sama user.",
  },
  intro_body: {
    en: "I enjoy exploring edge cases, breaking flows, checking APIs, querying databases, and figuring out why something doesn't behave the way it should. For me, testing is less about a checklist and more about curiosity: asking \"what if?\" and following the thread until I understand the actual cause.",
    id: "Suka ngulik edge case, ngetes alur aplikasi, ngecek API, query database, dan nyari tahu kenapa fiturnya nggak jalan semestinya. Buat saya, testing bukan cuma checklist, tapi rasa penasaran buat nemuin penyebab aslinya.",
  },

  // Selected work
  work_title: { en: "Selected work", id: "Project pilihan" },
  work_desc: {
    en: "These are the real projects I work on. I treat them like little QA labs: I build them, I break them, and then I figure out why they broke. Each one links to the source on GitHub.",
    id: "Project nyata yang aku bikin dan tes sendiri, fungsinya sekalian buat lab QA. Ada yang aku rusak dulu baru kucari kenapa errornya, biar bisa dipelajari. Semuanya ada link ke repo GitHub-nya.",
  },
  work_view_github: { en: "View on GitHub", id: "Lihat di GitHub" },
  work_view_live: { en: "Live Site", id: "Coba aplikasi" },

  // What I test
  what_num: { en: "03", id: "03" },
  what_title: { en: "What I like testing", id: "Hal yang suka aku tes" },
  what_desc: {
    en: "I like looking for the edge cases and the small details that trip people up. A few of the things I enjoy poking at:",
    id: "Biasanya aku cari edge case dan detail kecil yang sering bikin orang tersandung. Beberapa hal yang suka aku ulik:",
  },

  // Experience
  exp_num: { en: "04", id: "04" },
  exp_title: { en: "Experience", id: "Pengalaman" },
  exp_desc: { en: "Where I've built quality so far.", id: "Tempat aku belajar bikin software lebih berkualitas." },
  exp_what_i_did: { en: "What I did", id: "Yang aku kerjakan" },
  exp_impact: { en: "Impact", id: "Hasilnya" },

  // Tools
  tools_num: { en: "05", id: "05" },
  tools_title: { en: "Tools I use", id: "Tools yang kupakai" },
  tools_desc: {
    en: "No invented percentages. Just the tools and the work they were used in.",
    id: "Nggak ada angka persentase karangan. Cuma tools asli dan tempat kerja nyata pemakaiannya.",
  },
  tools_used: { en: "used in", id: "dipakai di" },
  tools_browse: { en: "Browse the projects", id: "Intip project-nya" },
  tools_every: {
    en: "Every skill is tied to real work.",
    id: "Semua skill di sini ada bukti pakainya di project nyata.",
  },

  // Currently learning
  learn_num: { en: "07", id: "07" },
  learn_title: { en: "Currently learning", id: "Lagi dipelajari" },
  learn_desc: {
    en: "I'm always trying to get better at the parts of testing that are hardest to do well.",
    id: "Nggak pernah berhenti ngasah bagian testing yang paling susah dikerjain dengan bener.",
  },

  // GitHub
  gh_num: { en: "06", id: "06" },
  gh_title: {
    en: "I build things and keep them on GitHub",
    id: "Bikin hal-hal & nyimpennya di GitHub",
  },
  gh_desc: {
    en: "A few real projects I've worked on. Some are more testing-heavy than others, but they're all real.",
    id: "Beberapa project nyata yang pernah kukerjakan. Ada yang lebih banyak sisi testing-nya, tapi semuanya jalan beneran.",
  },
  gh_view: { en: "View GitHub", id: "Buka GitHub" },

  // Contact
  contact_num: { en: "08", id: "08" },
  contact_title: { en: "Got a QA opportunity?", id: "Ada project atau peluang QA?" },
  contact_desc: {
    en: "I'm always open to discussing QA, testing projects, and opportunities.",
    id: "Buka banget buat ngobrolin QA, project testing, atau peluang kerja sama.",
  },
  contact_email: { en: "Email me", id: "Email aku" },
  contact_send: { en: "Send Message", id: "Kirim pesan" },
  contact_name: { en: "Name", id: "Nama" },
  contact_email_label: { en: "Email", id: "Email" },
  contact_subject: { en: "Subject", id: "Subjek" },
  contact_message: { en: "Message", id: "Pesan" },
  contact_placeholder_msg: { en: "Tell me about the role or project...", id: "Ceritain detail role atau project-nya..." },
  contact_location_prefix: { en: "Based in", id: "Lokasi" },

  // Projects Page
  projects_eyebrow: { en: "Work", id: "Project" },
  projects_title: { en: "Things I've built", id: "Yang pernah kubuat" },
  projects_desc: {
    en: "Real projects straight from my GitHub. I build these, I test them, and I keep the source public so you can look at how I actually work.",
    id: "Project asli langsung dari GitHub-ku. Kubangun, kutes, dan kode-nya kubuka biar bisa dilihat langsung cara kerjaku.",
  },
  projects_intro: {
    en: "A few of these are small and experimental, a few are more complete. What they have in common is that they're real: real code, real bugs, and real lessons. Click any repo to open the source on GitHub.",
    id: "Ada yang masih eksperimen kecil, ada yang udah lumayan matang. Yang bikin sama: semuanya nyata, kode nyata, bug nyata, pelajaran nyata. Klik repo mana aja buat buka source-nya di GitHub.",
  },

  // About Page
  about_eyebrow: { en: "About", id: "Tentang" },
  about_title: {
    en: "Quality Assurance Tester with a passion for Linux systems and AI-driven automation.",
    id: "QA Tester yang suka ngulik sistem Linux dan otomatisasi berbasis AI.",
  },
  about_desc: {
    en: "Interning at PT Wisesa Consulting Indonesia (WISECON) · Application Support & QA Tester.",
    id: "Lagi magang di PT Wisesa Consulting Indonesia (WISECON) · Application Support & QA Tester.",
  },
  about_p1: {
    en: "Currently interning at PT Wisesa Consulting Indonesia, where I handle application support, troubleshoot technical issues, and ensure smooth daily system operations. I believe quality isn't just about finding bugs, it's about building processes that prevent them.",
    id: "Sekarang lagi magang di PT Wisesa Consulting Indonesia (WISECON), megang application support, troubleshoot issue teknis, dan mastiin sistem jalan lancar tiap hari. Buatku, kualitas bukan cuma nyari bug, tapi bikin proses biar bug nggak kejadian lagi.",
  },
  about_p2: {
    en: "That's why I combine manual testing discipline with AI automation tools to deliver faster, more reliable results. When I'm not testing, you'll find me deep in the Linux terminal, configuring servers, exploring open-source tools, and pushing the boundaries of what automation can do.",
    id: "Makanya aku gabungin ketelitian manual testing bareng tools AI biar hasilnya lebih cepat dan solid. Di luar testing, biasanya aku asyik di terminal Linux, konfigurasi server Debian/Ubuntu, atau ngulik tools open-source.",
  },
  about_focus_heading: { en: "Core Skills", id: "Keahlian Utama" },
  about_snapshot: { en: "Profile Snapshot", id: "Sekilas tentang aku" },
  about_role: { en: "Role", id: "Peran" },
  about_location: { en: "Location", id: "Lokasi" },
  about_methodology_eyebrow: { en: "Daily Workflow", id: "Alur kerja harian" },
  about_methodology_title: { en: "How I Test in Practice", id: "Cara aku ngetes aplikasi" },
  about_methodology_desc: {
    en: "A straightforward, hands-on QA workflow from requirements to regression verification.",
    id: "Alur testing praktis dan terarah: dari bedah requirement sampai verifikasi regression.",
  },

  // Resume Page
  resume_title: { en: "CV", id: "CV" },
  resume_subtitle: {
    en: "Preview, then download it as a PDF with one click.",
    id: "Lihat preview atau langsung download versi PDF-nya.",
  },
  resume_download_btn: { en: "Download PDF", id: "Download PDF" },

  // Footer
  footer_tagline: {
    en: "Built with curiosity, tested with intention.",
    id: "Dibuat dengan rasa penasaran, diuji dengan teliti.",
  },
  footer_copyright: {
    en: "QA tester focused on software quality and test engineering.",
    id: "QA tester yang fokus di kualitas software dan test engineering.",
  },
  // Extra UI strings (formerly hardcoded)
  projects_featured: { en: "Featured", id: "Pilihan" },
  projects_featured_tool: { en: "Featured QA Tool", id: "Tool QA Pilihan" },
  projects_view_repo: { en: "View Repository", id: "Buka Repo" },
  about_creds_eyebrow: { en: "Credentials", id: "Sertifikasi" },
  about_creds_title: { en: "Certifications", id: "Sertifikasi Resmi" },
  about_creds_desc: { en: "Compact list with issuer, year, and credential.", id: "Daftar sertifikasi resmi lengkap dengan penerbit dan tahunnya." },
  resume_summary: {
    en: "QA Tester focused on functional testing, API validation, automation, and finding defects before users do. Documents every result with evidence.",
    id: "QA Tester yang fokus di functional testing, validasi API, otomasi, dan nemuin defect sebelum ketemu user. Selalu mendokumentasikan setiap hasil uji lengkap dengan buktinya.",
  },
  resume_skills_heading: { en: "Skills", id: "Keahlian" },
  resume_exp_heading: { en: "Experience", id: "Pengalaman" },
  resume_certs_heading: { en: "Certifications", id: "Sertifikasi" },
  qa_executing: { en: "Executing Test Suite", id: "Menjalankan Test Suite" },
  role_full: {
    en: "Quality Assurance Tester Intern & Linux Enthusiast",
    id: "QA Tester Intern & Penggemar Linux",
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
