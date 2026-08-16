# PRD — UI/UX Redesign QA Tester Portfolio

## Friendly, Modern, Human-Centered QA Portfolio

**Version:** 2.0
**Status:** UI/UX Redesign Specification
**Scope:** Existing QA Tester Portfolio
**Primary Objective:** Redesign existing UI/UX without rebuilding the product architecture unnecessarily.

---

# 1. PURPOSE

Redesign website portfolio QA Tester yang saat ini terlalu terlihat seperti:

* enterprise dashboard
* QA monitoring system
* test management platform
* technical admin panel

menjadi:

* personal
* friendly
* modern
* youthful
* Gen Z friendly
* clean
* visually interesting
* recruiter friendly
* technically credible
* human-made

Website tetap harus menunjukkan kemampuan QA, tetapi **QA tidak boleh mendominasi visual sampai menghilangkan personality pemilik portfolio.**

---

# 2. CURRENT UI PROBLEM

UI existing memiliki karakter:

```text
Dark background
+
Large technical typography
+
Monospace labels
+
Test dashboard
+
Metric cards
+
Many bordered boxes
+
Uppercase labels
+
Technical terminology
```

Hasil akhirnya terlihat seperti:

> QA Monitoring Dashboard

bukan:

> Personal QA Tester Portfolio

---

# 3. CORE REDESIGN PRINCIPLE

## BEFORE

```text
QA Dashboard
      ↓
Metrics
      ↓
Cards
      ↓
Technical Data
      ↓
Portfolio
```

## AFTER

```text
Person
  ↓
Story
  ↓
Work
  ↓
Evidence
  ↓
Technical Depth
```

---

# 4. DESIGN POSITIONING

Website harus terasa seperti:

> **A young QA tester showing how they think, work, learn, and test software.**

Bukan:

> A corporate QA dashboard pretending to be a portfolio.

---

# 5. DESIGN PERSONALITY

Gunakan kombinasi:

### Friendly

Website terasa approachable.

### Curious

Menunjukkan rasa ingin tahu terhadap bagaimana software bekerja.

### Technical

Tetap menunjukkan technical competency.

### Playful

Ada sedikit personality.

### Clean

Tidak berantakan.

### Confident

Tidak terlalu humble sampai kehilangan credibility.

---

# 6. DESIGN KEYWORDS

Visual harus mengikuti keywords:

```text
Human
Personal
Minimal
Editorial
Playful
Technical
Modern
Clean
Youthful
Approachable
```

---

# 7. ANTI AI-SLOP DESIGN RULES

Ini merupakan requirement wajib.

## DILARANG

### Excessive Gradient

Jangan menggunakan:

* purple-blue gradient
* pink-purple gradient
* neon gradient
* glowing gradient text

Gradient hanya boleh digunakan jika benar-benar memiliki fungsi visual.

---

### Excessive Glassmorphism

Dilarang membuat seluruh section menjadi:

```text
blur
+
transparent card
+
glowing border
```

---

### Excessive Bento Grid

Jangan membuat setiap section menjadi kumpulan:

```text
┌─────┬─────┐
│     │     │
├─────┼─────┤
│     │     │
└─────┴─────┘
```

Bento hanya boleh digunakan jika informasi memang membutuhkan grouping.

---

### Excessive Rounded Cards

Jangan membuat:

* text card
* skill card
* project card
* metric card
* experience card
* contact card

semuanya rounded box.

Gunakan layout terbuka.

---

### Excessive Monospace

Monospace hanya digunakan untuk:

* code
* test ID
* bug ID
* technical metadata
* small technical labels

Tidak digunakan sebagai font utama seluruh website.

---

### Excessive Uppercase

Jangan membuat semua text:

`TESTING EXPERIENCE`

`QUALITY ASSURANCE`

`PROJECT DETAILS`

Gunakan sentence case.

---

### Fake Metrics

Jangan menampilkan:

```text
87%
99%
120+
500+
```

jika angka tersebut tidak mempunyai evidence nyata.

---

### Fake Dashboard

Jangan membuat:

* fake charts
* fake graphs
* fake activity logs
* fake CI pipelines
* fake test statistics

hanya agar website terlihat technical.

---

### Excessive Animation

Dilarang:

* cursor follower
* floating blobs
* constant particle effects
* excessive parallax
* infinite marquee
* bouncing elements
* unnecessary 3D
* animated gradient backgrounds

---

# 8. DESIGN DIRECTION

## Primary Concept

### "Personal QA Playground"

Website adalah personal portfolio yang memiliki sedikit nuansa:

* testing
* debugging
* developer tooling
* digital workspace

Tetapi tetap terasa seperti **personal website**.

---

# 9. COLOR DIRECTION

Gunakan satu primary accent.

Recommended:

### Background

Dark:

`#111315`

atau

Light:

`#F7F7F5`

Website boleh mendukung dark/light mode jika existing architecture sudah mendukungnya.

---

## Primary Accent

Gunakan satu warna utama.

Recommended:

```text
Blue
#4F8CFF
```

Alternative:

```text
Green
#35C98A
```

Jangan menggunakan lebih dari 2 accent colors secara bersamaan.

---

# 10. COLOR USAGE

Accent hanya digunakan untuk:

* links
* CTA
* active navigation
* important highlights
* selected state
* status

Jangan menjadikan seluruh UI biru.

---

# 11. TYPOGRAPHY

## Primary Font

Recommended:

* Inter
* Geist
* Manrope

Pilih satu.

## Secondary Font

Optional:

* JetBrains Mono

Hanya untuk technical content.

---

# 12. TYPOGRAPHY HIERARCHY

Hero heading:

besar dan expressive.

Contoh:

```text
Hey, I'm Benn.
I break software
so users don't have to.
```

Body:

lebih kecil dan readable.

Technical labels:

monospace kecil.

---

# 13. NAVIGATION REDESIGN

Existing navigation:

```text
Benn.qa
Home
About
Projects
Testing Lab
Skills
Experience
Contact
Resume
```

Secara struktur sudah cukup baik.

Yang diubah adalah presentation.

---

## Desktop

Gunakan navbar:

```text
Benn.qa                         Work  Lab  About  Resume
```

Tidak perlu terlalu banyak menu.

Recommended:

```text
Work
Lab
About
Resume
```

Contact dapat menjadi CTA:

```text
Let's talk
```

---

# 14. NAVBAR STYLE

Navbar:

* minimal
* transparent atau subtle background
* tidak menggunakan giant border
* tidak terlalu tinggi
* tidak menggunakan banyak button

Logo:

```text
Benn.qa
```

`Benn` menggunakan normal text.

`.qa` menggunakan accent color.

---

# 15. NAVBAR ACTIVE STATE

Jangan menggunakan giant blue block.

Gunakan:

```text
Work
────
```

atau accent underline kecil.

---

# 16. HERO REDESIGN

Hero existing harus **dirombak paling besar**.

## REMOVE

Hapus dari hero:

* Test Run Dashboard
* 24 Test Suites
* 21 Passed
* 2 Failed
* 1 Blocked
* 3 Defects
* 87% Automation
* Pass Rate chart

Dashboard tersebut tidak boleh menjadi visual utama.

---

# 17. NEW HERO STRUCTURE

Hero:

```text
small intro
      ↓
large personal headline
      ↓
short description
      ↓
CTA
      ↓
small personality/evidence element
```

---

# 18. HERO COPY

Recommended direction:

### Option A

```text
Hey, I'm Benn.

I break software
so users don't have to.

QA Tester focused on web testing,
API validation, SQL, and automation.
```

### Option B

```text
Hi, I'm Benn —
a QA Tester who likes
finding the weird stuff.
```

### Option C

```text
I test software,
find the bugs,
and figure out why they happen.
```

Copy harus tetap disesuaikan dengan fakta kandidat.

Jangan menggunakan copy corporate yang generik.

---

# 19. HERO CTA

Primary:

```text
See my work →
```

Secondary:

```text
GitHub ↗
```

Resume menjadi secondary action atau navbar action.

Tidak perlu:

```text
Explore My Work
View Resume
Download CV
Let's Connect
Get Started
```

terlalu banyak CTA.

---

# 20. HERO PERSONAL ELEMENT

Di bawah CTA dapat ditampilkan:

```text
Currently learning

Playwright
API Testing
SQL
```

atau:

```text
Based in Jakarta · Open to QA opportunities
```

Gunakan hanya jika faktual.

---

# 21. HERO VISUAL

Jika menggunakan visual:

Jangan menggunakan dashboard.

Gunakan salah satu:

### Option A

Personal photo.

### Option B

Screenshot project.

### Option C

Small browser window.

### Option D

Small testing evidence.

### Option E

Simple illustration.

Prioritas:

**real evidence > decoration.**

---

# 22. HERO LAYOUT

Desktop:

```text
┌─────────────────────────────────────────────────┐
│                                                 │
│  hey, i'm benn.                    [visual]     │
│                                                 │
│  I break software                              │
│  so users don't                                │
│  have to.                                      │
│                                                 │
│  QA Tester focused on...                       │
│                                                 │
│  [ See my work → ] [ GitHub ↗ ]                │
│                                                 │
└─────────────────────────────────────────────────┘
```

Tidak perlu symmetrical dashboard.

---

# 23. HERO HEIGHT

Hero tidak boleh terlalu tinggi.

Target:

Desktop:

`70–85vh`

Mobile:

sekitar `auto / 80vh maximum`

User harus mulai melihat section berikutnya tanpa harus scroll terlalu jauh.

---

# 24. INTRODUCTION SECTION

Setelah hero:

```text
A little about me
```

Layout editorial.

Contoh:

```text
I'm interested in what happens
when software meets real users.

I enjoy exploring edge cases,
breaking flows, checking APIs,
querying databases, and figuring out
why something doesn't behave as expected.
```

Gunakan paragraph pendek.

Jangan menggunakan card.

---

# 25. SELECTED WORK

Section utama:

# Selected Work

Subtext:

```text
A few things I've tested, automated,
broken, and learned from.
```

Ini harus menjadi salah satu section terbesar.

---

# 26. PROJECT DESIGN

Project bukan dashboard card.

Gunakan editorial project layout.

Contoh:

```text
01

E-Commerce Testing

Manual testing · API · Playwright

[PROJECT SCREENSHOT]

I tested authentication, product,
cart and checkout flows...

View case study →
```

---

# 27. PROJECT VISUAL

Setiap project idealnya memiliki:

* screenshot website
* browser frame
* testing evidence
* automation screenshot

Prioritas:

**actual project screenshot.**

---

# 28. PROJECT LAYOUT VARIATION

Jangan semua project identik.

Contoh:

Project 01:

```text
Image Left
Text Right
```

Project 02:

```text
Text Left
Image Right
```

Project 03:

```text
Large Image
Text Below
```

Ini membuat halaman terasa lebih editorial dan human-designed.

---

# 29. PROJECT METADATA

Gunakan compact metadata:

```text
Web Testing
Playwright
API
SQL
```

Bukan:

```text
47 TEST CASES
8 DEFECTS
32 AUTOMATED
```

Metric hanya muncul di case study jika memang berguna.

---

# 30. PROJECT CTA

Gunakan:

```text
Read case study →
```

atau:

```text
View testing process →
```

Jangan:

`Learn More`

karena terlalu generic.

---

# 31. PROJECT CASE STUDY

Case study tetap technical.

Struktur:

```text
Overview
↓
What I tested
↓
Testing approach
↓
Test cases
↓
Bugs found
↓
Evidence
↓
Automation
↓
What I learned
```

Homepage friendly.

Case study technical.

Ini adalah separation of concerns.

---

# 32. "WHAT I TEST" SECTION

Tambahkan section ringan:

# What I like testing

Contoh:

```text
Web applications
API behaviour
Authentication flows
Forms & validation
Edge cases
Responsive layouts
Database behaviour
Regression
```

Gunakan typography / small tags.

Tidak perlu card grid besar.

---

# 33. PERSONALITY SECTION

Tambahkan sedikit personality.

Contoh:

```text
Things I enjoy

finding the edge case
breaking the happy path
checking API responses
asking "what if?"
turning bugs into test cases
```

Ini membuat portfolio lebih memorable.

---

# 34. TESTING LAB

Testing Lab tetap dipertahankan.

Tetapi jangan ditampilkan sebagai dashboard.

Heading:

# Want the technical details?

Subtext:

```text
I keep the deeper testing evidence here.
```

CTA:

```text
Enter the QA Lab →
```

---

# 35. TESTING LAB PREVIEW

Gunakan satu visual:

```text
┌─────────────────────────────────────────┐
│ QA LAB                                  │
│                                         │
│ Test Cases        24                    │
│ Bug Reports       08                    │
│ API Tests         32                    │
│ Automation        Playwright            │
│                                         │
│ Explore Lab →                           │
└─────────────────────────────────────────┘
```

Hanya satu card.

Bukan enam metric cards.

---

# 36. TESTING LAB PAGE

Testing Lab boleh lebih technical.

Di halaman ini:

* Test Cases
* Bug Reports
* API
* Automation
* Test Runs
* Evidence

Visual density boleh lebih tinggi.

Karena user sudah **memilih masuk ke technical area**.

---

# 37. SKILLS REDESIGN

Jangan menggunakan:

```text
Playwright 90%
Postman 85%
SQL 80%
```

Angka skill harus dihapus.

---

# 38. NEW SKILLS STRUCTURE

```text
Testing

Functional
Regression
Smoke
Exploratory
UAT


Automation

Playwright
Selenium


API

Postman
REST
JSON
HTTP


Database

SQL
MySQL
SQL Server


Tools

Git
GitHub
Docker
VS Code
```

Typography based.

---

# 39. SKILL EVIDENCE

Setiap skill dapat memiliki reference:

```text
Playwright
Used in → E-Commerce Testing
```

Click menuju project.

Dengan demikian skill bukan sekadar daftar.

---

# 40. EXPERIENCE REDESIGN

Gunakan simple timeline.

Contoh:

```text
2026

QA / Application Support
PT Wisesa Consulting

Application testing
Issue investigation
SQL validation
User support
Troubleshooting
```

Jangan menggunakan giant company cards.

---

# 41. CURRENTLY LEARNING

Section ini cocok untuk portfolio junior/early-career.

Contoh:

```text
Currently learning

Playwright
API automation
CI/CD
Advanced SQL
Test architecture
```

Ini menunjukkan growth mindset.

Isi harus sesuai kondisi sebenarnya.

---

# 42. GITHUB SECTION

Jangan membuat GitHub menjadi dashboard penuh.

Tampilkan:

```text
I build things and keep them on GitHub.

[ Selected repository ]

QA Automation
Web Testing
API Testing

View GitHub ↗
```

Jika menggunakan repository cards, maksimal 3–4.

---

# 43. CONTACT SECTION

Jangan:

```text
Ready to build something amazing?
Let's transform your ideas...
```

Gunakan lebih personal:

# Got a QA opportunity?

atau:

# Want to talk testing?

Subtext:

```text
I'm always open to discussing QA,
testing projects, and opportunities.
```

CTA:

```text
Email me →
LinkedIn ↗
GitHub ↗
```

---

# 44. FOOTER

Minimal.

```text
Benn.qa

Built with curiosity,
tested with intention.

GitHub
LinkedIn
Email

© 2026 Benn
```

Jika kalimat tersebut sesuai personality kandidat.

---

# 45. DARK MODE

Dark mode boleh dipertahankan.

Tetapi jangan membuat dark mode seperti:

```text
#080808
+
neon blue
+
glowing border
```

Gunakan dark neutral.

Contoh:

```text
Background
#111315

Surface
#181A1D

Border
#292D32

Primary Text
#F2F3F5

Secondary Text
#A5A9B0

Accent
#4F8CFF
```

---

# 46. LIGHT MODE

Jika existing website sudah mempunyai toggle, light mode harus benar-benar didesain.

Contoh:

```text
Background
#F7F7F5

Surface
#FFFFFF

Border
#E5E5E2

Primary Text
#18191B

Secondary Text
#666A70

Accent
#356FE8
```

Jangan sekadar invert warna dark mode.

---

# 47. CARD USAGE

Cards hanya digunakan ketika terdapat logical grouping.

Allowed:

* project preview
* testing lab preview
* selected repository
* evidence preview

Avoid cards untuk:

* paragraph
* skill list
* experience
* navigation
* every section

---

# 48. BORDER USAGE

Border:

`1px`

Subtle.

Gunakan untuk:

* project image frame
* technical panel
* buttons
* interactive elements

Jangan membuat border di seluruh section.

---

# 49. BORDER RADIUS

Recommended:

Small:

`8px`

Medium:

`12px`

Large:

`16px`

Jangan menggunakan:

`9999px`

untuk hampir semua element.

Pill hanya untuk tags/status.

---

# 50. BUTTON DESIGN

Primary:

solid accent.

Secondary:

transparent / subtle border.

Example:

```text
[ See my work → ]

[ GitHub ↗ ]
```

Buttons harus terlihat clickable tanpa glowing effect.

---

# 51. INTERACTION DESIGN

Hover:

* slight color change
* subtle translation
* underline
* image zoom 1–2%

Tidak boleh:

* massive scaling
* glow explosion
* bounce
* spinning

Transition:

`150–250ms`

---

# 52. IMAGE TREATMENT

Project screenshot:

Gunakan:

* subtle border
* slight radius
* natural screenshot ratio

Optional:

browser chrome.

Jangan menambahkan:

* fake shadow besar
* neon glow
* floating 3D effect

---

# 53. SCROLL EXPERIENCE

Scroll harus terasa natural.

Section spacing:

gunakan whitespace besar.

Recommended:

`96–160px`

antara major sections desktop.

Mobile:

`64–96px`.

---

# 54. RESPONSIVE DESIGN

## Desktop

Gunakan asymmetric layout.

## Tablet

Kurangi horizontal spacing.

## Mobile

Single column.

Project image:

full width.

Text:

left aligned.

Jangan center-align seluruh website.

---

# 55. MOBILE HERO

Contoh:

```text
hey, i'm benn.

I break software
so users don't have to.

QA Tester focused on
web, API & automation.

[ See my work ]

[ GitHub ↗ ]
```

Kemudian visual.

Tidak perlu dashboard.

---

# 56. MOBILE NAVIGATION

Mobile menu:

```text
Work
Lab
About
Resume

Let's talk →
```

Menu harus clean.

---

# 57. ACCESSIBILITY

Redesign tidak boleh mengorbankan accessibility.

Requirement:

* semantic HTML
* keyboard navigation
* focus state
* proper contrast
* readable font size
* alt text
* reduced motion
* accessible buttons
* accessible mobile navigation

---

# 58. PERFORMANCE

Jangan menggunakan animation library besar hanya untuk animasi kecil.

Prioritas:

```text
HTML
CSS
Minimal JS
Optimized images
```

---

# 59. SEO

Redesign harus mempertahankan:

* metadata
* title
* description
* OpenGraph
* semantic headings

Contoh:

```text
Benn — QA Tester & Software Testing
```

---

# 60. EXISTING FUNCTIONALITY PRESERVATION

Redesign UI **tidak boleh merusak functionality yang sudah berjalan.**

Pertahankan:

* routing
* project data
* testing lab
* resume link
* contact
* theme switch
* responsive behavior
* existing integrations

Jika tidak ada requirement untuk mengubah logic:

**jangan ubah logic.**

---

# 61. REFACTOR RULE

Jangan melakukan:

* full rewrite
* architecture migration
* database migration
* unnecessary dependency replacement

hanya karena redesign UI.

Prioritas:

**UI refactor > architecture refactor.**

---

# 62. COMPONENT REFACTOR

Component existing boleh direfactor jika:

* terlalu coupled dengan visual lama
* sulit responsive
* duplicate
* tidak reusable

Tetapi perubahan harus tetap scoped ke UI redesign.

---

# 63. DESIGN TOKENS

Buat centralized design tokens:

```text
colors
typography
spacing
radius
shadows
breakpoints
transitions
```

Contoh:

```text
--color-bg
--color-surface
--color-text
--color-muted
--color-accent

--space-xs
--space-sm
--space-md
--space-lg
--space-xl

--radius-sm
--radius-md
--radius-lg
```

Tujuan:

memudahkan konsistensi seluruh website.

---

# 64. INFORMATION HIERARCHY

Prioritas:

### 1

Personality

### 2

Projects

### 3

QA capability

### 4

Evidence

### 5

Experience

### 6

Tools

### 7

Supporting information

Jangan membalik prioritas menjadi:

```text
Metrics
Metrics
Metrics
Metrics
Person
```

---

# 65. HOMEPAGE FINAL STRUCTURE

```text
NAVBAR
│
├── HERO
│
├── ABOUT / INTRO
│
├── SELECTED WORK
│
├── WHAT I TEST
│
├── QA LAB
│
├── EXPERIENCE
│
├── SKILLS / TOOLS
│
├── CURRENTLY LEARNING
│
├── CONTACT
│
└── FOOTER
```

---

# 66. VISUAL FLOW

Homepage harus memiliki rhythm:

```text
Big typography
        ↓
Whitespace
        ↓
Project image
        ↓
Text
        ↓
Small technical detail
        ↓
Whitespace
        ↓
Interactive technical section
```

Bukan:

```text
Card
Card
Card
Card
Card
Card
```

---

# 67. RECOMMENDED HOMEPAGE WIREFRAME

```text
┌──────────────────────────────────────────────────────┐
│ Benn.qa                    Work Lab About Resume     │
├──────────────────────────────────────────────────────┤
│                                                      │
│ hey, i'm benn.                         [photo /      │
│                                        project       │
│ I break software                      visual]       │
│ so users don't have to.                            │
│                                                      │
│ QA Tester focused on web,                            │
│ API & automation testing.                           │
│                                                      │
│ [ See my work → ]  [ GitHub ↗ ]                     │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ A little about me                                   │
│                                                      │
│ I'm interested in what happens                      │
│ when software meets real users...                   │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ Selected work                                       │
│                                                      │
│ [ PROJECT SCREENSHOT ]                              │
│ E-Commerce Testing                                  │
│ Manual · API · Playwright                           │
│                                                      │
│                         [ PROJECT SCREENSHOT ]       │
│                         AnimeList Testing            │
│                         Web · UI · Regression        │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ What I like testing                                 │
│                                                      │
│ Web apps · APIs · Forms · Edge cases                │
│ Authentication · SQL · Regression                  │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ Want the technical details?                         │
│                                                      │
│                    ┌────────────────────┐            │
│                    │ QA LAB             │            │
│                    │ Test Cases         │            │
│                    │ Bug Reports        │            │
│                    │ Automation         │            │
│                    │                    │            │
│                    │ Explore Lab →      │            │
│                    └────────────────────┘            │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ Experience                                           │
│                                                      │
│ 2026 ─ QA / Application Support                     │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ Tools I use                                          │
│                                                      │
│ Playwright · Postman · SQL · Git · GitHub           │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ Currently learning                                  │
│                                                      │
│ Playwright · API Automation · CI/CD                 │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ Got a QA opportunity?                               │
│                                                      │
│ [ Email me → ] [ LinkedIn ↗ ] [ GitHub ↗ ]          │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

# 68. WHAT TO REMOVE FROM CURRENT SCREEN

Elemen berikut harus dihapus dari hero:

* [ ] TEST RUN #QA-024
* [ ] Application / E-Commerce Platform dashboard
* [ ] Test Suites metric
* [ ] Passed metric
* [ ] Failed metric
* [ ] Blocked metric
* [ ] Defects metric
* [ ] Automation percentage
* [ ] Pass Rate bar

Elemen tersebut boleh dipindahkan ke:

**Testing Lab / Project Case Study**

---

# 69. WHAT TO KEEP

Tetap pertahankan:

* [ ] Benn.qa branding
* [ ] Home navigation
* [ ] About
* [ ] Projects
* [ ] Testing Lab
* [ ] Skills
* [ ] Experience
* [ ] Contact
* [ ] Resume
* [ ] Dark/light mode jika sudah tersedia
* [ ] QA positioning
* [ ] project data
* [ ] technical evidence

---

# 70. WHAT TO CHANGE

### Navbar

Corporate → Personal

### Hero

Dashboard → Human introduction

### Projects

Cards → Editorial showcase

### Skills

Progress bars → Categorized skills

### Experience

Cards → Timeline

### Testing Lab

Dashboard → Technical playground

### Contact

Corporate CTA → Personal CTA

### Visual

Dense → Spacious

### Typography

Technical-heavy → Human-first

---

# 71. CONTENT PRINCIPLE

Setiap section harus mempunyai alasan keberadaan.

Jika section tidak menjawab salah satu:

* Who am I?
* What can I do?
* What have I built/tested?
* How do I think?
* What evidence do I have?
* How can you contact me?

maka section tersebut harus dipertimbangkan untuk dihapus.

---

# 72. QA TECHNICAL DEPTH RULE

Technical depth tidak dihilangkan.

Technical depth dipindahkan ke tempat yang tepat.

```text
Homepage
↓
Friendly

Project
↓
Detailed

Testing Lab
↓
Technical

Case Study
↓
Deep Technical
```

Ini adalah prinsip utama redesign.

---

# 73. ACCEPTANCE CRITERIA — VISUAL

UI redesign dianggap berhasil jika:

* [ ] Homepage tidak terlihat seperti dashboard
* [ ] Hero terasa personal
* [ ] Hero tidak menggunakan fake metrics
* [ ] Tidak ada excessive gradient
* [ ] Tidak ada excessive glassmorphism
* [ ] Tidak semua section berupa cards
* [ ] Typography memiliki hierarchy yang jelas
* [ ] Monospace digunakan secara terbatas
* [ ] Website terasa friendly
* [ ] Website tetap professional
* [ ] QA identity tetap terlihat
* [ ] Project menjadi visual focus
* [ ] Real screenshot/evidence digunakan jika tersedia
* [ ] Whitespace cukup
* [ ] Mobile layout natural

---

# 74. ACCEPTANCE CRITERIA — UX

Recruiter harus dapat:

1. mengetahui siapa kandidat dalam <10 detik
2. menemukan project dalam <15 detik
3. membuka case study maksimal 2 clicks
4. menemukan resume maksimal 2 clicks
5. menemukan contact maksimal 2 clicks

QA Lead harus dapat:

1. menemukan Testing Lab
2. melihat test cases
3. melihat bug evidence
4. melihat automation
5. melihat technical project details

---

# 75. ACCEPTANCE CRITERIA — ANTI AI-SLOP

Reviewer harus menjawab **NO** untuk:

* [ ] Apakah terlihat seperti SaaS dashboard?
* [ ] Apakah semua section berupa cards?
* [ ] Apakah terlalu banyak gradient?
* [ ] Apakah terlalu banyak neon?
* [ ] Apakah terlalu banyak glassmorphism?
* [ ] Apakah typography terlihat seperti AI-generated landing page?
* [ ] Apakah terdapat fake statistics?
* [ ] Apakah animation terlalu banyak?
* [ ] Apakah website terasa seperti template?
* [ ] Apakah personality kandidat hilang?

Jika beberapa jawabannya YES:

**redesign belum selesai.**

---

# 76. ACCEPTANCE CRITERIA — TECHNICAL

* [ ] Existing functionality tidak rusak
* [ ] No console errors
* [ ] No broken links
* [ ] Responsive 360px+
* [ ] Keyboard navigation berfungsi
* [ ] Accessibility tidak menurun
* [ ] Lighthouse Performance ≥ 90
* [ ] Lighthouse Accessibility ≥ 95
* [ ] Lighthouse SEO ≥ 95
* [ ] E2E tests tetap pass
* [ ] No unnecessary dependency
* [ ] No unnecessary architecture changes

---

# 77. IMPLEMENTATION PRIORITY

## P0 — Critical

### Milestone 1

* [ ] Redesign design tokens
* [ ] Redesign navbar
* [ ] Redesign hero
* [ ] Remove dashboard from hero
* [ ] Redesign typography
* [ ] Redesign spacing
* [ ] Redesign buttons

### Milestone 2

* [ ] Redesign projects
* [ ] Add project screenshots
* [ ] Redesign project metadata
* [ ] Redesign About

### Milestone 3

* [ ] Redesign Testing Lab preview
* [ ] Redesign Skills
* [ ] Redesign Experience
* [ ] Redesign Contact

---

# 78. P1 — Important

* [ ] Improve micro interactions
* [ ] Improve project hover
* [ ] Improve image treatment
* [ ] Improve mobile navigation
* [ ] Improve dark/light mode
* [ ] Improve accessibility
* [ ] Responsive QA

---

# 79. P2 — Optional

* [ ] Recruiter Mode
* [ ] More project interactions
* [ ] GitHub integration
* [ ] Advanced Testing Lab interactions
* [ ] Subtle scroll animations

P2 tidak boleh dikerjakan sebelum P0 dan P1 stabil.

---

# 80. IMPLEMENTATION RULE FOR AI CODING AGENT

AI coding agent **tidak boleh langsung melakukan full rewrite.**

Workflow:

```text
Analyze Existing UI
        ↓
Identify Existing Components
        ↓
Identify Existing Routes
        ↓
Identify Existing Data
        ↓
Create UI Redesign Plan
        ↓
Update Design Tokens
        ↓
Redesign Navbar
        ↓
Redesign Hero
        ↓
Redesign Sections
        ↓
Responsive Pass
        ↓
Accessibility Pass
        ↓
Visual QA
        ↓
Regression Test
```

---

# 81. IMPORTANT IMPLEMENTATION CONSTRAINT

Jangan mengubah:

* database
* API
* routing architecture
* testing data
* backend

kecuali benar-benar diperlukan untuk UI.

Fokus:

**Presentation Layer.**

---

# 82. FINAL DESIGN TEST

Setelah implementasi, buka homepage selama 5 detik.

Kemudian tanyakan:

> “Apakah ini terasa seperti portfolio seseorang?”

Jika jawabannya:

> “Kayak dashboard QA.”

**FAIL.**

Jika jawabannya:

> “Oh, ini portfolio Benn. Dia QA dan kelihatannya memang suka testing.”

**PASS.**

---

# 83. FINAL DESIGN TARGET

Target visual akhir:

```text
Personal
     +
Friendly
     +
Gen Z
     +
Minimal
     +
Technical
     +
Professional
     +
Real Evidence
```

Bukan:

```text
Enterprise Dashboard
+
Neon
+
Gradient
+
Glassmorphism
+
Fake Metrics
```

---

# 84. FINAL UX PHILOSOPHY

Homepage harus membuat pengunjung berpikir:

> “Oh, ini orangnya.”

Lalu:

> “Oh, dia pernah ngetes project ini.”

Lalu:

> “Oh, ternyata dia ngerti testing cukup dalam.”

Lalu:

> “Menarik. Gue mau lihat case study-nya.”

Dan akhirnya:

> “Kayaknya kandidat ini worth contacting.”

---

# 85. FINAL DESIGN STATEMENT

**The portfolio should feel like a person who happens to be good at QA — not a QA dashboard that happens to belong to a person.**

Ini adalah prinsip paling penting untuk seluruh redesign.

**Do not make the website look impressive by adding more UI.
Make it memorable by showing the person, the work, and the evidence.**
