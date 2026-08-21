// Real GitHub repositories surfaced on the site.
export interface Repo {
  name: string;
  description: string;
  topics: string[];
  url: string;
  featured?: boolean;
  image?: string;
  alt?: string;
}

export const githubProfile = "https://github.com/h1ntz0";

export const repos: Repo[] = [
  {
    name: "Ranime",
    description:
      "Anime discovery, catalog, tracking, rating and review platform. Local-first, powered by the AniList GraphQL API and PostgreSQL.",
    topics: ["TypeScript", "React", "PostgreSQL", "API", "Web"],
    url: `${githubProfile}/Ranime`,
    featured: true,
    image: "/images/ranime.webp",
    alt: "Ranime Anime catalog platform screenshot with search, stats and anime cards",
  },
  {
    name: "telegram-sticker-bot",
    description:
      "Telegram bot that converts any photo into a ready-to-use sticker with automatic resizing and transparent padding. Built with python-telegram-bot, Pillow, and SQLite.",
    topics: ["Python", "Telegram", "Bot", "SQLite"],
    url: `${githubProfile}/telegram-sticker-bot`,
    featured: true,
    image: "/images/telegram-sticker-bot.webp",
    alt: "Telegram Sticker Bot real app preview showing sticker creation and conversation flow",
  },
  {
    name: "Todo-cli",
    description:
      "A lightweight command-line ToDo list app built with Go. Add, view, complete, or delete tasks straight from the terminal.",
    topics: ["Go", "CLI", "Terminal"],
    url: `${githubProfile}/Todo-cli`,
    featured: true,
    image: "/images/todo-cli.svg",
    alt: "Todo CLI terminal output showing task commands and interactive task table",
  },
  {
    name: "Temperature_Converter_SIC",
    description:
      "A temperature unit converter (Kelvin, Celsius, Fahrenheit), built as part of a Dibimbing.id task.",
    topics: ["Python", "CLI", "Learning"],
    url: `${githubProfile}/Temperature_Converter_SIC`,
    image: "/images/temperature-converter.svg",
    alt: "Temperature Converter Python CLI terminal interface with conversion options and results",
  },
  {
    name: "Tic-Tac-Toe-ReactJs",
    description:
      "A Tic-Tac-Toe game built with React to practice component state and interaction.",
    topics: ["React", "JavaScript", "Web"],
    url: `${githubProfile}/Tic-Tac-Toe-ReactJs`,
    image: "/images/tic-tac-toe.svg",
    alt: "React Tic-Tac-Toe game board UI with 3x3 grid, winning line highlight, and move history",
  },
];
