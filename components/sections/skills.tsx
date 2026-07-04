import { skillCategories } from "@/config/skills";
import { SectionHeading } from "@/components/shared/section-heading";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="container">
        <SectionHeading eyebrow="Skills & Expertise" title="My technical toolbox" description="The .NET stack, media toolbox, databases, and tools I use to build and ship reliable software." />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div key={category.id} className="neu neu-hover p-7">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-10 w-1.5 rounded-full" style={{ background: `linear-gradient(180deg, ${category.accent}, #FFB547)`, boxShadow: `0 0 20px -2px ${category.accent}` }} />
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 w-full rounded-full neu-inset p-[3px]">
                      <div className="h-full rounded-full" style={{ width: `${skill.level}%`, background: `linear-gradient(90deg, ${category.accent}, #FFB547)`, boxShadow: `0 0 14px -2px ${category.accent}` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
