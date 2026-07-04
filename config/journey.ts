import {
  GraduationCap,
  Briefcase,
  Rocket,
  Code2,
  UserRound,
  type LucideIcon,
} from "lucide-react";

export type JourneyType = "Education" | "Trainee" | "Internship" | "Job" | "Milestone";

export type JourneyMilestone = {
  id: string;
  year: string;
  type: JourneyType;
  title: string;
  organization: string;
  description: string;
  icon: LucideIcon;
};

export const journey: JourneyMilestone[] = [
  {
    id: "bca",
    year: "2019 — 2022",
    type: "Education",
    title: "BCA (Bachelor of Computer Applications)",
    organization: "Himalayan Garhwal University",
    description:
      "Graduated with a foundation in programming, databases, and web development.",
    icon: GraduationCap,
  },
  {
    id: "zee-intern",
    year: "2022 — 2023",
    type: "Internship",
    title: "Intern",
    organization: "Zee News",
    description:
      "Completed an internship supporting web applications and SQL-backed tools for the news team.",
    icon: Code2,
  },
  {
    id: "zee-trainee",
    year: "2022 - 2023",
    type: "Trainee",
    title: "Trainee",
    organization: "Zee News",
    description:
      "Started my career learning .NET development and broadcast technology in a news-media environment.",
    icon: UserRound,
  },
  {
    id: "tv9",
    year: "2023 — 2025",
    type: "Job",
    title: "Software Engineer",
    organization: "TV9 (Associated Broadcasting Company)",
    description:
      "Built and maintained .NET web applications, real-time dashboards, and internal tools for a leading broadcast network.",
    icon: Briefcase,
  },
  {
    id: "ndtv",
    year: "Present",
    type: "Job",
    title: "Software Developer",
    organization: "NDTV Network",
    description:
      "Currently developing and maintaining .NET applications for one of India's premier news networks.",
    icon: Rocket,
  },
];
