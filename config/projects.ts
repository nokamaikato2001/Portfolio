export type Project = {
  id: string;
  title: string;
  category: "Web App" | "Dashboard" | "Desktop" | "Internal Tool" | "Broadcast" | "Media Tool";
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  image: string;
  github?: string;
  demo?: string;
  featured?: boolean;
  year: number;
};

export const projects: Project[] = [
  {
    id: "election-dashboard",
    title: "Election Dashboard",
    category: "Dashboard",
    description:
      "Real-time election results dashboard with manual and automatic data updates, integrated with on-air Vizrt graphics.",
    longDescription:
      "A real-time election results dashboard built for live broadcast that supports both manual and automatic data updates. It integrates Vizrt graphics, TL logic base templates, and SQL Server backend sync for reliable on-air election coverage.",
    tech: ["C#", "ASP.NET", "WebForms", "SQL Server", "Vizrt", "Template Wizard", "jQuery"],
    features: [
      "Real-time results with auto & manual updates",
      "Vizrt + Template Wizard on-air integration",
      "TL logic base template-driven graphics",
      "Election data sync via C# and SQL Server",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    year: 2024,
  },
  {
    id: "ticker-application",
    title: "Ticker Application",
    category: "Broadcast",
    description:
      "On-air ticker management system for breaking news, headlines, and scroll text with live broadcast integration.",
    longDescription:
      "A broadcast ticker application used to create, schedule, and push scrolling news text to on-air graphics. Built with .NET and integrated with Vizrt and template workflows so producers can update tickers quickly during live shows.",
    tech: ["C#", "VB.NET", "WebForms", "SQL Server", "Vizrt", "jQuery"],
    features: [
      "Create & push breaking-news ticker text",
      "Live on-air ticker updates during broadcasts",
      "Vizrt graphics integration",
      "SQL-backed ticker history & scheduling",
    ],
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    year: 2024,
  },
  {
    id: "fpc-frontend",
    title: "FPC Frontend",
    category: "Web App",
    description:
      "Frontend control panel web application for managing broadcast playout, templates, and on-air content workflows.",
    longDescription:
      "FPC Frontend is a .NET web application that gives broadcast teams a clean UI to manage playout controls, template selection, and on-air content. It connects to backend services and Vizrt workflows for smooth live production.",
    tech: ["C#", "ASP.NET", "WebForms", "HTML", "CSS", "Bootstrap", "jQuery", "SQL Server"],
    features: [
      "Broadcast playout control UI",
      "Template & content workflow management",
      "Responsive frontend with Bootstrap",
      "Backend integration via ADO.NET & APIs",
    ],
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    year: 2025,
  },
  {
    id: "template-wizard-manager",
    title: "Template Wizard Manager",
    category: "Media Tool",
    description:
      ".NET web app for managing Vizrt Template Wizard assets, TL logic base templates, and on-air graphic presets.",
    longDescription:
      "An internal .NET web application to organize, preview, and deploy Template Wizard graphics and TL logic base templates. Helps the graphics team maintain consistent on-air looks and push updates without manual rework.",
    tech: ["C#", "WebForms", "SQL Server", "Vizrt", "Template Wizard", "ADO.NET"],
    features: [
      "Template Wizard asset management",
      "TL logic base template configuration",
      "On-air graphic preset library",
      "Version control for broadcast templates",
    ],
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    year: 2024,
  },
  {
    id: "newsroom-portal",
    title: "Newsroom Data Portal",
    category: "Web App",
    description:
      "Central .NET web portal for newsroom teams to manage stories, metadata, and broadcast-ready data feeds.",
    longDescription:
      "A newsroom-facing .NET web application that centralizes story data, metadata, and feeds used by on-air systems. Built with WebForms, SQL Server, and jQuery for a reliable internal workflow used daily by editorial and graphics teams.",
    tech: ["C#", "VB.NET", "WebForms", "SQL Server", "jQuery", "Bootstrap"],
    features: [
      "Story & metadata management",
      "Broadcast-ready data feeds",
      "Role-based internal access",
      "SQL Server backed reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    year: 2023,
  },
  {
    id: "broadcast-ops-panel",
    title: "Broadcast Operations Panel",
    category: "Web App",
    description:
      ".NET web application for monitoring live show status, election modules, and on-air system health.",
    longDescription:
      "A broadcast operations panel built in .NET that gives producers a single view of live show status, election module readiness, ticker state, and integration health — reducing downtime during high-pressure live events.",
    tech: ["C#", "ASP.NET", "WebForms", "SQL Server", "Vizrt", "jQuery"],
    features: [
      "Live show & module status monitoring",
      "Election workflow readiness checks",
      "Ticker & graphics system overview",
      "Internal ops dashboard for live TV",
    ],
    image:
      "https://images.unsplash.com/photo-1478737270239-2f02ba77b235?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    year: 2025,
  },
  {
    id: "ticketing-system",
    title: "Internal Ticketing System",
    category: "Internal Tool",
    description:
      "IT ticketing platform with Create/Assign/Log modules and a tracking dashboard.",
    longDescription:
      "An internal ticketing system that streamlines the workflow between employees and the IT team with create, assign, and log modules plus an IT dashboard for ticket tracking.",
    tech: ["C#", "WebForms", "SQL Server", "jQuery", "ADO.NET"],
    features: [
      "Create Ticket, Assign Ticket & Log Issues modules",
      "IT dashboard for ticket-status tracking",
      "Smooth employee ↔ IT workflow",
      "Improved visibility & record management",
    ],
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    year: 2024,
  },
  {
    id: "video-merger",
    title: "Video Merging & Conversion Software",
    category: "Desktop",
    description:
      "A desktop tool that merges multiple video files and converts them into a common format.",
    longDescription:
      "A desktop application that merges multiple video files and converts them into a common format with core logic implemented in C#.",
    tech: ["C#", ".NET", "File I/O"],
    features: [
      "Merge multiple video files into one",
      "Convert videos to a common format",
      "Core logic in C# with file handling",
      "Simple, focused desktop workflow",
    ],
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    year: 2023,
  },
];

export const projectCategories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
] as const;
