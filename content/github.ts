// Real GitHub repositories surfaced on the site.
export interface Repo {
  name: string;
  description: string;
  topics: string[];
  url: string;
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
    topics: ["TypeScript", "React", "GraphQL", "PostgreSQL", "Fastify", "Docker"],
    language: "TypeScript",
    url: `${githubProfile}/Ranime`,
    featured: true,
    image: "/images/ranime.webp",
    alt: "Ranime Anime catalog platform screenshot with search, stats and anime cards",
  },
  {
    name: "telegram-sticker-bot",
    description:
      "Telegram bot that converts any photo into a ready-to-use sticker with automatic resizing and transparent padding. Built with python-telegram-bot, Pillow, and SQLite.",
    topics: ["Python", "Telegram", "Bot", "SQLite", "Pillow"],
    language: "Python",
    url: `${githubProfile}/telegram-sticker-bot`,
    featured: true,
    image: "/images/telegram-sticker-bot.webp",
    alt: "Telegram Sticker Bot real app preview showing sticker creation and conversation flow",
  },
  {
    name: "my-portfolio",
    description:
      "Digital QA Command Center portfolio built with Next.js 15, React 19, TypeScript, Tailwind CSS v4, and comprehensive Playwright automated test suites.",
    topics: ["Next.js", "React", "TypeScript", "Playwright", "TailwindCSS"],
    language: "TypeScript",
    url: `${githubProfile}/my-portfolio`,
    featured: true,
    image: "/images/my-portfolio.webp",
    alt: "Digital QA Command Center portfolio UI preview and automated testing platform",
  },
  {
    name: "api-contract-regression-tester",
    description:
      "Autonomous OpenAPI Contract & Regression Testing Engine in Python. Auto-generates positive and negative test suites with interactive HTML reporting.",
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
    topics: ["Go", "CLI", "Terminal", "Productivity"],
    language: "Go",
    url: `${githubProfile}/Todo-cli`,
    featured: false,
    image: "/images/todo-cli.webp",
    alt: "Todo CLI actual terminal output and task management workflow in Go",
  },
  {
    name: "Temperature_Converter_SIC",
    description:
      "Temperature unit converter CLI (Kelvin, Celsius, Fahrenheit) built in Python with input boundary validation.",
    topics: ["Python", "CLI", "Validation"],
    language: "Python",
    url: `${githubProfile}/Temperature_Converter_SIC`,
    featured: false,
    image: "/images/temperature-converter.svg",
    alt: "Temperature Converter Python CLI terminal interface with conversion options and results",
  },
  {
    name: "Tic-Tac-Toe-ReactJs",
    description:
      "Interactive Tic-Tac-Toe game built with React to practice deterministic state machines, move history, and UI event flows.",
    topics: ["React", "JavaScript", "State-Machine"],
    language: "JavaScript",
    url: `${githubProfile}/Tic-Tac-Toe-ReactJs`,
    featured: false,
    image: "/images/tic-tac-toe.svg",
    alt: "React Tic-Tac-Toe game board UI with 3x3 grid, winning line highlight, and move history",
  },
];
