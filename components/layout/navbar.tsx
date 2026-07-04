"use client";

import { useEffect, useState } from "react";
import { Command } from "lucide-react";
import { navItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { scrollToSection, cn } from "@/lib/utils";
import { useCommandMenu } from "./command-menu";

export function Navbar() {
  const [active, setActive] = useState("home");
  const { setOpen } = useCommandMenu();

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.href.slice(1))).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); }),
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60] flex items-center justify-between px-5 py-4 sm:px-8">
        <button onClick={() => scrollToSection("#home")} className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#00F5D4] to-[#7B61FF] font-display text-sm font-bold text-white">{siteConfig.initials}</span>
          <span className="hidden font-display text-sm font-semibold text-white sm:block">{siteConfig.name}</span>
        </button>
        <div className="flex items-center gap-2">
          <button onClick={() => setOpen(true)} className="flex items-center gap-2 rounded-full glass px-3.5 py-2 text-xs text-muted-foreground hover:text-white">
            <Command className="h-3.5 w-3.5" /><span className="hidden sm:inline">Menu</span>
          </button>
          <button onClick={() => scrollToSection("#contact")} className="hidden rounded-full bg-gradient-to-r from-[#00F5D4] to-[#7B61FF] px-4 py-2 text-xs font-semibold text-white sm:flex">Let's talk</button>
        </div>
      </header>
      <nav className="fixed inset-x-0 bottom-4 z-[60] flex justify-center px-4">
        <div className="no-scrollbar flex max-w-full items-center gap-1 overflow-x-auto rounded-2xl glass-strong p-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.href.slice(1);
            return (
              <button key={item.href} onClick={() => scrollToSection(item.href)} aria-label={item.label} className={cn("relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl", isActive ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-white")}>
                <Icon className="h-5 w-5" />
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
