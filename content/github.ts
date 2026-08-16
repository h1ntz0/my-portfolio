// Real GitHub repositories to surface on the site.
// Fill in your actual repos: name, one-line description, topics, and the repo URL.
export interface Repo {
  name: string;
  description: string;
  topics: string[];
  url: string;
}

const GH = "https://github.com/benn";

export const repos: Repo[] = [
  {
    name: "AnimeList",
    description:
      "A full-stack anime catalog app I built and tested end to end (API + web).",
    topics: ["Web testing", "API", "Regression"],
    url: `${GH}/animelist`,
  },
  {
    name: "qa-portfolio",
    description:
      "This portfolio. I treat it as a real product and test it with Playwright.",
    topics: ["QA", "Automation", "Playwright"],
    url: `${GH}/qa-portfolio`,
  },
];

export const githubProfile = GH;
