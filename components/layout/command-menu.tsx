"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Search, CornerDownLeft, FileDown, type LucideIcon } from "lucide-react";
import { navItems } from "@/config/navigation";
import { socialLinks } from "@/config/social";
import { siteConfig } from "@/config/site";
import { scrollToSection, cn } from "@/lib/utils";

const CommandMenuContext = createContext({ open: false, setOpen: (_: boolean) => {} });
export const useCommandMenu = () => useContext(CommandMenuContext);

type CommandAction = { id: string; label: string; group: string; icon: LucideIcon; perform: () => void };

export function CommandMenuProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [highlight, setHighlight] = useState(0);

  const actions: CommandAction[] = useMemo(() => {
    const nav = navItems.map((item) => ({ id: item.href, label: `Go to ${item.label}`, group: "Navigation", icon: item.icon, perform: () => scrollToSection(item.href) }));
    const social = socialLinks.map((s) => ({ id: s.label, label: s.label, group: "Social", icon: s.icon, perform: () => window.open(s.href, "_blank") }));
    const utility = [{ id: "resume", label: "Download Resume", group: "Actions", icon: FileDown, perform: () => window.open(siteConfig.resumeUrl, "_blank") }];
    return [...nav, ...utility, ...social];
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return actions;
    const q = query.toLowerCase();
    return actions.filter((a) => a.label.toLowerCase().includes(q));
  }, [actions, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setOpen((o) => !o); }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => { if (!open) { setQuery(""); setHighlight(0); } }, [open]);
  useEffect(() => setHighlight(0), [query]);

  const run = (action?: CommandAction) => {
    if (!action) return;
    setOpen(false);
    setTimeout(() => action.perform(), 60);
  };

  return (
    <CommandMenuContext.Provider value={{ open, setOpen }}>
      {children}
      {open && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center px-4 pt-[15vh]">
          <div className="absolute inset-0 bg-background/70 backdrop-blur-md" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-xl overflow-hidden rounded-2xl glass-strong shadow-glass">
            <div className="flex items-center gap-3 border-b border-border px-4">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search or jump to..." className="h-14 flex-1 bg-transparent text-sm outline-none" />
            </div>
            <div className="max-h-[50vh] overflow-y-auto p-2">
              {filtered.map((action, i) => {
                const Icon = action.icon;
                return (
                  <button key={action.id} onMouseEnter={() => setHighlight(i)} onClick={() => run(action)} className={cn("flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm", highlight === i ? "bg-primary/15 text-foreground" : "text-muted-foreground")}>
                    <Icon className="h-4 w-4 text-primary" /><span className="flex-1">{action.label}</span>{highlight === i && <CornerDownLeft className="h-3.5 w-3.5" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </CommandMenuContext.Provider>
  );
}
