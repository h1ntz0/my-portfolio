// Real GitHub repositories surfaced on the site.
export interface Repo {
  name: string;
  description: string;
  descriptionId?: string;
  topics: string[];
  url: string;
  liveUrl?: string;
  language?: string;
  featured?: boolean;
  image?: string;
  alt?: string;
}

export const githubProfile = "https://github.com/h1ntz0";

export const repos: Repo[] = [
  {
    name: "Ranime",
    description:
      "Anime discovery, catalog, tracking, rating and review platform. Local-first, powered by the AniList GraphQL API, Fastify, Docker, and PostgreSQL.",
    descriptionId:
      "Platform katalog, pelacakan, serta rating dan ulasan anime. Local-first, didukung AniList GraphQL API, Fastify, Docker, dan PostgreSQL.",
    topics: ["TypeScript", "React", "GraphQL", "PostgreSQL", "Fastify", "Docker"],
    language: "TypeScript",
    url: `${githubProfile}/Ranime`,
    liveUrl: "https://ranime-rate.vercel.app/",
    featured: true,
    image: "/images/ranime.webp",
    alt: "Ranime Anime catalog platform screenshot with search, stats and anime cards",
  },
  {
    name: "Agents-Telegram",
    description:
      "Self-hosted AI agent framework on Telegram. Features dynamic model switching, autonomous multi-agent SDLC workflows, proactive cron schedules, and humanizer filtering.",
    descriptionId:
      "Framework agen AI self-hosted berbasis Telegram. Didukung pergantian model dinamis, workflow SDLC multi-agent otonom, penjadwalan cron proaktif, serta pemfilteran humanizer.",
    topics: ["Python", "Telegram", "AI-Agents", "SQLite", "Clean-Architecture"],
    language: "Python",
    url: `${githubProfile}/Agents-Telegram`,
    featured: true,
    image: "/images/agents-telegram.png",
    alt: "Agents Telegram multi-agent orchestrator preview on desktop and mobile",
  },
  {
    name: "Pemangan",
    description:
      "Room and lab reservation system for SMK Negeri 1 Jakarta. Built with React 19, TypeScript, Tailwind CSS v4, dynamic timetable matrix, and Playwright E2E testing.",
    descriptionId:
      "Sistem peminjaman ruang dan laboratorium untuk SMKN 1 Jakarta. Dibangun dengan React 19, TypeScript, Tailwind CSS v4, matriks jadwal dinamis, dan pengujian E2E Playwright.",
    topics: ["React", "TypeScript", "TailwindCSS", "Playwright", "Nginx"],
    language: "TypeScript",
    liveUrl: "https://pemangan.vercel.app/",
    url: `${githubProfile}/Pemangan`,
    featured: true,
    image: "/images/pemangan.png",
    alt: "Pemangan room and laboratory booking web app interface",
  },
  {
    name: "api-contract-regression-tester",
    description:
      "Autonomous OpenAPI Contract & Regression Testing Engine in Python. Auto-generates positive and negative test suites with interactive HTML reporting.",
    descriptionId:
      "Engine otomatis untuk pengujian kontrak OpenAPI dan regresi berbasis Python. Menyusun suite pengujian positif-negatif secara mandiri beserta laporan HTML interaktif.",
    topics: ["Python", "OpenAPI", "API-Testing", "Regression", "QA-Automation"],
    language: "Python",
    url: `${githubProfile}/api-contract-regression-tester`,
    featured: false,
    alt: "API Contract & Regression Testing Engine architecture and automated report preview",
  },
  {
    name: "Todo-cli",
    description:
      "A lightweight, minimalistic command-line ToDo list application built with Go. Manage, complete, and track tasks directly from your terminal.",
    descriptionId:
      "Aplikasi manajemen tugas berbasis command-line yang ringan dan efisien, dikembangkan menggunakan bahasa Go.",
    topics: ["Go", "CLI", "Terminal", "Productivity"],
    language: "Go",
    url: `${githubProfile}/Todo-cli`,
    featured: false,
    image: "/images/todo-cli.webp",
    alt: "Todo CLI actual terminal output and task management workflow in Go",
  },
  {
    name: "telegram-sticker-bot",
    description:
      "Telegram bot that converts any photo into a ready-to-use sticker with automatic resizing and transparent padding. Built with python-telegram-bot, Pillow, and SQLite.",
    descriptionId:
      "Bot Telegram untuk konversi otomatis gambar menjadi stiker dengan penyesuaian dimensi dan padding transparan. Dibangun menggunakan Python, Pillow, dan SQLite.",
    topics: ["Python", "Telegram", "Bot", "SQLite", "Pillow"],
    language: "Python",
    url: `${githubProfile}/telegram-sticker-bot`,
    featured: false,
    image: "/images/telegram-sticker-bot.webp",
    alt: "Telegram Sticker Bot real app preview showing sticker creation and conversation flow",
  },
];
