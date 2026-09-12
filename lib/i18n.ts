export type Lang = "en" | "id";

export const translations = {
  // Navbar
  nav_home: { en: "Home", id: "Beranda" },
  nav_work: { en: "Work", id: "Project" },
  nav_about: { en: "About", id: "Tentang" },
  nav_resume: { en: "CV", id: "CV" },
  nav_talk: { en: "Let's talk", id: "Hubungi Saya" },
  nav_open: { en: "Open menu", id: "Buka menu" },
  nav_close: { en: "Close menu", id: "Tutup menu" },

  // Hero
  hero_role: { en: "QA tester", id: "QA Tester" },
  hero_based: { en: "based in", id: "berdomisili di" },
  hero_hi: { en: "Hey, I'm {name}.", id: "Halo, saya {name}." },
  hero_break: { en: "I break software", id: "Saya menguji batas sistem" },
  hero_so: { en: "so users don't have to.", id: "agar pengguna terbebas dari kendala teknis." },
  hero_desc: {
    en: "QA tester focused on web testing, API validation, SQL, and automation. I like finding the edge cases, breaking the happy path, and turning bugs into test cases.",
    id: "QA Tester yang berfokus pada web testing, validasi API, database SQL, dan test automation. Terbiasa menelusuri edge case, menguji skenario batas, serta mendokumentasikan setiap temuan secara sistematis.",
  },
  hero_see: { en: "See my work", id: "Lihat Project" },
  hero_github: { en: "GitHub", id: "GitHub" },
  hero_learning: { en: "Currently learning", id: "Fokus Pengembangan" },

  // Intro
  intro_num: { en: "01", id: "01" },
  intro_title: { en: "A little about me", id: "Sekilas Tentang Saya" },
  intro_lead: {
    en: "I'm interested in what happens when software meets real users.",
    id: "Fokus utama saya adalah memastikan keandalan software saat digunakan oleh pengguna nyata.",
  },
  intro_body: {
    en: "I enjoy exploring edge cases, breaking flows, checking APIs, querying databases, and figuring out why something doesn't behave the way it should. For me, testing is less about a checklist and more about curiosity: asking \"what if?\" and following the thread until I understand the actual cause.",
    id: "Saya terbiasa mengeksplorasi edge case, memvalidasi alur sistem, memeriksa endpoint API, menelusuri data via SQL, serta mengidentifikasi akar masalah di balik perilaku aplikasi yang tidak sesuai. Bagi saya, pengujian software bukan sekadar centang daftar checklist, melainkan investigasi analitis untuk menjaga kualitas produk.",
  },

  // Selected work
  work_title: { en: "Selected work", id: "Project Pilihan" },
  work_desc: {
    en: "These are the real projects I work on. I treat them like little QA labs: I build them, I break them, and then I figure out why they broke. Each one links to the source on GitHub.",
    id: "Proyek nyata yang saya kembangkan sekaligus jadikan lingkungan uji QA mandiri. Setiap implementasi dirancang, diuji secara menyeluruh, dan dilengkapi tautan ke repositori GitHub.",
  },
  work_view_github: { en: "View on GitHub", id: "Lihat di GitHub" },
  work_view_live: { en: "Live Site", id: "Buka Aplikasi" },

  // What I test
  what_num: { en: "03", id: "03" },
  what_title: { en: "What I like testing", id: "Fokus Pengujian" },
  what_desc: {
    en: "I like looking for the edge cases and the small details that trip people up. A few of the things I enjoy poking at:",
    id: "Area pengujian dan validasi teknis yang biasa saya tangani dalam siklus penjaminan kualitas:",
  },

  // Experience
  exp_num: { en: "04", id: "04" },
  exp_title: { en: "Experience", id: "Pengalaman Kerja" },
  exp_desc: { en: "Where I've built quality so far.", id: "Rekam jejak kontribusi dalam penjaminan mutu software." },
  exp_what_i_did: { en: "What I did", id: "Tanggung Jawab" },
  exp_impact: { en: "Impact", id: "Dampak & Hasil" },

  // Tools
  tools_num: { en: "05", id: "05" },
  tools_title: { en: "Tools I use", id: "Tools & Teknologi" },
  tools_desc: {
    en: "No invented percentages. Just the tools and the work they were used in.",
    id: "Tanpa metrik persentase buatan. Murni kumpulan alat kerja dan proyek implementasinya.",
  },
  tools_used: { en: "used in", id: "diterapkan pada" },
  tools_browse: { en: "Browse the projects", id: "Lihat daftar project" },
  tools_every: {
    en: "Every skill is tied to real work.",
    id: "Setiap kompetensi terhubung langsung dengan implementasi proyek nyata.",
  },

  // Currently learning
  learn_num: { en: "07", id: "07" },
  learn_title: { en: "Currently learning", id: "Fokus Pembelajaran" },
  learn_desc: {
    en: "I'm always trying to get better at the parts of testing that are hardest to do well.",
    id: "Terus memperdalam aspek penjaminan mutu tingkat lanjut: otomasi modern, arsitektur pengujian, dan integrasi CI/CD.",
  },

  // GitHub
  gh_num: { en: "06", id: "06" },
  gh_title: {
    en: "I build things and keep them on GitHub",
    id: "Proyek Terbuka di GitHub",
  },
  gh_desc: {
    en: "A few real projects I've worked on. Some are more testing-heavy than others, but they're all real.",
    id: "Koleksi proyek perangkat lunak nyata yang saya bangun, uji, dan kelola kodenya secara terbuka.",
  },
  gh_view: { en: "View GitHub", id: "Buka GitHub" },

  // Contact
  contact_num: { en: "08", id: "08" },
  contact_title: { en: "Got a QA opportunity?", id: "Tertarik Berdiskusi atau Berkolaborasi?" },
  contact_desc: {
    en: "I'm always open to discussing QA, testing projects, and opportunities.",
    id: "Saya terbuka untuk mendiskusikan peluang kerja sama, proyek QA, maupun inisiatif teknis lainnya.",
  },
  contact_email: { en: "Email me", id: "Kirim Email" },
  contact_send: { en: "Send Message", id: "Kirim Pesan" },
  contact_name: { en: "Name", id: "Nama Lengkap" },
  contact_email_label: { en: "Email", id: "Alamat Email" },
  contact_subject: { en: "Subject", id: "Subjek" },
  contact_message: { en: "Message", id: "Isi Pesan" },
  contact_placeholder_msg: { en: "Tell me about the role or project...", id: "Tuliskan detail peran, proyek, atau kebutuhan Anda..." },
  contact_location_prefix: { en: "Based in", id: "Lokasi" },

  // Projects Page
  projects_eyebrow: { en: "Work", id: "Project" },
  projects_title: { en: "Things I've built", id: "Daftar Project" },
  projects_desc: {
    en: "Real projects straight from my GitHub. I build these, I test them, and I keep the source public so you can look at how I actually work.",
    id: "Koleksi proyek nyata langsung dari GitHub. Seluruh kode dipublikasikan secara transparan agar metodologi serta standar kerja saya dapat ditinjau langsung.",
  },
  projects_intro: {
    en: "A few of these are small and experimental, a few are more complete. What they have in common is that they're real: real code, real bugs, and real lessons. Click any repo to open the source on GitHub.",
    id: "Mencakup aplikasi web fungsional, otomasi bot, pengujian kontrak API, hingga tool berbasis command-line. Setiap repositori dilengkapi implementasi kode nyata dan evaluasi bug.",
  },

  // About Page
  about_eyebrow: { en: "About", id: "Tentang" },
  about_title: {
    en: "Quality Assurance Tester with a passion for Linux systems and AI-driven automation.",
    id: "Quality Assurance Tester dengan fokus pada sistem Linux dan otomatisasi pengujian.",
  },
  about_desc: {
    en: "Interning at PT Wisesa Consulting Indonesia (WISECON) · Application Support & QA Tester.",
    id: "Application Support & QA Tester Intern di PT Wisesa Consulting Indonesia (WISECON).",
  },
  about_p1: {
    en: "Currently interning at PT Wisesa Consulting Indonesia, where I handle application support, troubleshoot technical issues, and ensure smooth daily system operations. I believe quality isn't just about finding bugs, it's about building processes that prevent them.",
    id: "Saat ini menjalani program magang di PT Wisesa Consulting Indonesia (WISECON), bertanggung jawab atas application support, troubleshooting isu teknis, serta memastikan stabilitas operasional harian. Bagi saya, mutu software berakar dari proses preventif yang terstruktur, bukan sekadar menemukan bug di akhir tahap.",
  },
  about_p2: {
    en: "That's why I combine manual testing discipline with AI automation tools to deliver faster, more reliable results. When I'm not testing, you'll find me deep in the Linux terminal, configuring servers, exploring open-source tools, and pushing the boundaries of what automation can do.",
    id: "Oleh karena itu, saya mengombinasikan ketelitian pengujian manual dengan efisiensi alat otomatisasi untuk menghadirkan hasil uji yang cepat dan akurat. Di luar pengujian, saya aktif mengelola sistem Linux (Debian/Ubuntu), administrasi server, serta mengeksplorasi ekosistem open-source.",
  },
  about_focus_heading: { en: "Core Skills", id: "Kompetensi Utama" },
  about_snapshot: { en: "Profile Snapshot", id: "Ringkasan Profil" },
  about_role: { en: "Role", id: "Peran" },
  about_location: { en: "Location", id: "Lokasi" },
  about_methodology_eyebrow: { en: "Daily Workflow", id: "Metodologi Kerja" },
  about_methodology_title: { en: "How I Test in Practice", id: "Standar & Alur Pengujian" },
  about_methodology_desc: {
    en: "A straightforward, hands-on QA workflow from requirements to regression verification.",
    id: "Alur kerja pengujian terstruktur dari analisis kebutuhan hingga verifikasi regresi pasca-perbaikan.",
  },

  // Resume Page
  resume_title: { en: "CV", id: "Curriculum Vitae" },
  resume_subtitle: {
    en: "Preview, then download it as a PDF with one click.",
    id: "Pratinjau CV profesional atau unduh langsung dalam format PDF.",
  },
  resume_download_btn: { en: "Download PDF", id: "Unduh PDF" },

  // Footer
  footer_tagline: {
    en: "Built with curiosity, tested with intention.",
    id: "Dibangun dengan ketelitian, diuji dengan standar kualitas tinggi.",
  },
  footer_copyright: {
    en: "QA tester focused on software quality and test engineering.",
    id: "QA Tester yang berfokus pada rekayasa pengujian dan keandalan perangkat lunak.",
  },

  // Extra UI strings (formerly hardcoded)
  projects_featured: { en: "Featured", id: "Unggulan" },
  projects_featured_tool: { en: "Featured QA Tool", id: "Tool QA Unggulan" },
  projects_view_repo: { en: "View Repository", id: "Buka Repositori" },
  about_creds_eyebrow: { en: "Credentials", id: "Sertifikasi" },
  about_creds_title: { en: "Certifications", id: "Sertifikasi Resmi" },
  about_creds_desc: {
    en: "Compact list with issuer, year, and credential.",
    id: "Daftar sertifikasi resmi lengkap dengan lembaga penerbit dan tahun kelulusan.",
  },
  resume_summary: {
    en: "QA Tester focused on functional testing, API validation, automation, and finding defects before users do. Documents every result with evidence.",
    id: "QA Tester dengan spesialisasi functional testing, validasi API, otomasi pengujian, dan penanganan defect preventif. Seluruh hasil uji didokumentasikan secara sistematis berbasis bukti teknis.",
  },
  resume_skills_heading: { en: "Skills", id: "Keahlian Teknis" },
  resume_exp_heading: { en: "Experience", id: "Pengalaman Kerja" },
  resume_certs_heading: { en: "Certifications", id: "Sertifikasi" },
  loader_aria: { en: "Loading page", id: "Memuat halaman" },
  role_full: {
    en: "Quality Assurance Tester Intern & Linux Enthusiast",
    id: "QA Tester Intern & Linux System Enthusiast",
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
