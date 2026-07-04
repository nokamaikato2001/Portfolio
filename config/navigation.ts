import {
  Home,
  User,
  Sparkles,
  Briefcase,
  FolderGit2,
  GraduationCap,
  Mail,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Sparkles },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Contact", href: "#contact", icon: Mail },
];
