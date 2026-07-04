"use client";

import { ArrowUp, FileDown, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/config/social";
import { navItems } from "@/config/navigation";
import { scrollToSection } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border/60 pb-24 pt-16">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <button onClick={() => scrollToSection("#home")} className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#00F5D4] to-[#7B61FF] font-display text-sm font-bold text-white">{siteConfig.initials}</span>
              <span className="font-display text-lg font-semibold text-white">{siteConfig.name}</span>
            </button>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">{siteConfig.tagline}</p>
          </div>
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-gradient-teal">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}><button onClick={() => scrollToSection(item.href)} className="text-muted-foreground hover:text-primary">{item.label}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-gradient-teal">Connect</h3>
            <ul className="space-y-2 text-sm">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.label}>
                    <a href={social.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary"><Icon className="h-4 w-4" />{social.label}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-gradient-teal">Get in touch</h3>
            <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><Mail className="h-4 w-4" />{siteConfig.email}</a>
            <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 rounded-full neu-sm px-4 py-2 text-sm text-white"><FileDown className="h-4 w-4 text-primary" />Download Resume</a>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">© {year} {siteConfig.name}. All rights reserved.</p>
          <button onClick={() => scrollToSection("#home")} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#00F5D4] to-[#7B61FF] px-4 py-2 text-sm font-medium text-white">Back to top <ArrowUp className="h-4 w-4" /></button>
        </div>
      </div>
    </footer>
  );
}
