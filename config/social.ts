import { Github, Linkedin, Mail, Phone, type LucideIcon } from "lucide-react";

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
  icon: LucideIcon;
};

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/pawan-negi007",
    handle: "in/pawan-negi007",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:npawan221@gmail.com",
    handle: "npawan221@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    href: "tel:+918178498674",
    handle: "+91 81784 98674",
    icon: Phone,
  },
  {
    label: "GitHub",
    href: "https://github.com/pawansinghnegi",
    handle: "@pawansinghnegi",
    icon: Github,
  },
];

export const githubUsername = "pawansinghnegi";
