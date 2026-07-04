import { Briefcase, MapPin, Trophy, ListChecks } from "lucide-react";
import { experiences } from "@/config/experience";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="container">
        <SectionHeading eyebrow="Experience" title="Where I've worked" description="Professional experience building and maintaining production .NET applications." />
        <div className="mx-auto mt-14 max-w-4xl space-y-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="neu p-7 sm:p-9">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl neu-sm text-primary"><Briefcase className="h-5 w-5" /></span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-xl font-bold text-white">{exp.role}</h3>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2.5 py-0.5 text-[10px] font-semibold text-primary">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />Current
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-gradient-teal">{exp.company}</p>
                  </div>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <p className="font-mono">{exp.duration}</p>
                  <p className="mt-1 flex items-center justify-end gap-1"><MapPin className="h-3.5 w-3.5" />{exp.location}</p>
                </div>
              </div>
              <p className="mt-5 text-muted-foreground">{exp.summary}</p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl neu-inset p-5">
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white"><ListChecks className="h-4 w-4 text-primary" />Responsibilities</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{r}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl neu-inset p-5">
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white"><Trophy className="h-4 w-4 text-secondary" />Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-muted-foreground"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">{exp.tech.map((t) => <Badge key={t} variant="glass">{t}</Badge>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
