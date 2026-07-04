import { journey } from "@/config/journey";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";

export function Journey() {
  return (
    <section id="education" className="relative py-24 sm:py-28">
      <div className="container">
        <SectionHeading eyebrow="Education & Journey" title="My path so far" description="From a computer applications degree to building production software in news media." />
        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="absolute left-6 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary via-secondary to-[hsl(var(--warm))] opacity-60" />
          <div className="space-y-6">
            {journey.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="relative flex gap-6">
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full neu-sm text-primary glow-teal"><Icon className="h-5 w-5" /></span>
                  <div className="neu neu-hover flex-1 p-6">
                    <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                      <Badge variant="glass">{item.type}</Badge>
                      <span className="font-mono text-xs text-gradient-teal">{item.year}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm font-medium text-muted-foreground">{item.organization}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
