export type Experience = {
  id: string;
  company: string;
  role: string;
  duration: string;
  start: string;
  end: string;
  location: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  tech: string[];
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    id: "ndtv",
    company: "NDTV Network",
    role: "Software Developer",
    duration: "April 2026 — Present",
    start: "2026",
    end: "Present",
    location: "India",
    summary:
      "Currently developing and maintaining .NET web applications for one of India's leading news networks.",
    responsibilities: [
      "Build and maintain web applications using C#, VB.NET, WebForms, and SQL Server.",
      "Work with broadcast media tools including Vizrt, Template Wizard, tickers, and TL logic base templates.",
      "Support election graphics workflows and on-air integrations for live news production.",
      "Collaborate with cross-functional teams on broadcast and digital product requirements.",
    ],
    achievements: [
      "Contributing to reliable, production-grade applications for a major media network.",
      "Supporting ticker systems, template workflows, and on-air graphics for live broadcasts.",
      "Applying broadcast-domain experience from TV9 and Zee News to NDTV workflows.",
    ],
    tech: [
      "C#",
      "VB.NET",
      "WebForms",
      "ASP.NET",
      "SQL Server",
      "ADO.NET",
      "Vizrt",
      "Template Wizard",
      "Ticker Systems",
      "jQuery",
    ],
    current: true,
  },
  {
    id: "tv9",
    company: "Associated Broadcasting Company Pvt. Ltd. (TV9)",
    role: "Software Engineer",
    duration: "Jan 2023 — May 2025",
    start: "2023",
    end: "2025",
    location: "India",
    summary:
      "Developed and maintained web applications for a leading broadcast network, including real-time on-air dashboards and internal tools.",
    responsibilities: [
      "Developed and maintained web applications using VB.NET, C#, WebForms, SQL Server, and ADO.NET.",
      "Built election dashboards, ticker applications, and FPC frontend panels for live broadcast.",
      "Worked with Vizrt, Template Wizard, TL logic base templates, and on-air graphics integration.",
      "Designed and consumed APIs to integrate with in-house and third-party systems.",
      "Built interactive UI components using HTML, CSS, and jQuery to enhance user experience.",
    ],
    achievements: [
      "Delivered a real-time election results dashboard with Vizrt on-air integration.",
      "Built ticker application and FPC frontend for live newsroom workflows.",
      "Managed Template Wizard and TL logic base template workflows for on-air graphics.",
      "Built an internal ticketing system that streamlined the employee ↔ IT workflow.",
      "Created a video merging & conversion desktop tool used internally.",
    ],
    tech: [
      "VB.NET",
      "C#",
      "WebForms",
      "SQL Server",
      "ADO.NET",
      "jQuery",
      "Vizrt",
      "Template Wizard",
      "Ticker Systems",
      "TL Logic Templates",
    ],
    current: false,
  },
  {
    id: "zee-trainee",
    company: "Zee News",
    role: "Trainee",
    duration: "2022 - 2023",
    start: "2022",
    end: "2023",
    location: "India",
    summary:
      "Started my professional journey as a trainee, learning .NET development and broadcast technology fundamentals.",
    responsibilities: [
      "Learned VB.NET, C#, and WebForms under mentorship from senior engineers.",
      "Supported maintenance of existing web applications and internal tools.",
      "Observed and assisted with SQL Server and ADO.NET data access patterns.",
    ],
    achievements: [
      "Successfully transitioned from academic projects to production software.",
      "Developed core skills that led to an internship and full-time roles.",
    ],
    tech: ["C#", "VB.NET", "WebForms", "SQL Server", "HTML", "CSS"],
    current: false,
  },
  {
    id: "zee-intern",
    company: "Zee News",
    role: "Intern",
    duration: "2022 — 2023",
    start: "2022",
    end: "2023",
    location: "India",
    summary:
      "Completed an internship in software development, supporting web applications and learning broadcast IT workflows.",
    responsibilities: [
      "Assisted in developing and maintaining .NET web applications under senior developer guidance.",
      "Worked with SQL Server for data queries and basic database tasks.",
      "Supported UI updates using HTML, CSS, and JavaScript/jQuery.",
    ],
    achievements: [
      "Gained hands-on experience in a live news-media environment.",
      "Built a strong foundation in .NET, SQL, and team-based software delivery.",
    ],
    tech: ["C#", "VB.NET", "WebForms", "SQL Server", "HTML", "CSS", "jQuery"],
    current: false,
  },
];
