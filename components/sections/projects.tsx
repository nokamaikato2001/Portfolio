"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects, projectCategories, type Project } from "@/config/projects";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="container">
        <SectionHeading eyebrow="Featured Work" title="Projects I've built" description="Real applications delivered in production — from live broadcast dashboards to internal tools." />
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {projectCategories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)} className={cn("rounded-full px-4 py-2 text-sm font-medium transition-colors", filter === cat ? "bg-gradient-to-r from-[#00F5D4] to-[#7B61FF] text-white" : "neu-sm text-muted-foreground hover:text-primary")}>
              {cat}
            </button>
          ))}
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <button key={project.id} onClick={() => setSelected(project)} className="neu neu-hover group overflow-hidden p-0 text-left">
              <div className="relative aspect-video overflow-hidden">
                <Image src={project.image} alt={project.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                <Badge variant="glass" className="absolute left-3 top-3">{project.category}</Badge>
                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full glass-strong text-primary"><ArrowUpRight className="h-4 w-4" /></span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold text-white">{project.title}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
                </div>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{project.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-3xl">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle>{selected.title}</DialogTitle>
                <DialogDescription>{selected.longDescription}</DialogDescription>
              </DialogHeader>
              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {selected.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{f}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">{selected.tech.map((t) => <Badge key={t} variant="outline">{t}</Badge>)}</div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
