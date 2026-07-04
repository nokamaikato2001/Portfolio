export type Skill = {
  name: string;
  level: number;
  note?: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  accent: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages & .NET",
    description: "Core languages and the .NET stack I build on.",
    accent: "#00F5D4",
    skills: [
      { name: "C#", level: 92 },
      { name: "VB.NET", level: 90 },
      { name: "ASP.NET (3.5 / 4.0)", level: 88 },
      { name: "WebForms", level: 90 },
      { name: "MVC", level: 78 },
      { name: "Classic ASP", level: 72 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Interactive UI with markup, styling and scripting.",
    accent: "#7B61FF",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 86 },
      { name: "Bootstrap", level: 85 },
      { name: "JavaScript", level: 82 },
      { name: "jQuery", level: 86 },
    ],
  },
  {
    id: "database",
    title: "Database",
    description: "Relational data with SQL Server and ADO.NET.",
    accent: "#FFB547",
    skills: [
      { name: "SQL Server (2019 / 2022)", level: 88 },
      { name: "Queries & Joins", level: 88 },
      { name: "Stored Procedures", level: 84 },
      { name: "ADO.NET", level: 86 },
    ],
  },
  {
    id: "media",
    title: "Media Toolbox",
    description: "Broadcast graphics, tickers, templates, and on-air election workflows.",
    accent: "#FF6B9D",
    skills: [
      { name: "Vizrt (3.3 / 5.1)", level: 85, note: "On-air graphics" },
      { name: "Template Wizard", level: 82, note: "Graphics templates" },
      { name: "Ticker Systems", level: 88, note: "Breaking news tickers" },
      { name: "TL Logic Base Templates", level: 84, note: "Template logic" },
      { name: "Election Graphics & Data", level: 90, note: "Live results" },
      { name: "On-Air Integration", level: 86, note: "Broadcast sync" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Integration",
    description: "Development tooling and API integrations.",
    accent: "#00F5D4",
    skills: [
      { name: "Visual Studio (2017–2022)", level: 90 },
      { name: "REST APIs", level: 82 },
      { name: "Git", level: 78 },
      { name: "ADO.NET Data Layers", level: 86 },
    ],
  },
];
