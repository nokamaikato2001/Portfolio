import { CheckCircle2, Mail, MapPin, Phone, Briefcase } from "lucide-react";
import { siteConfig } from "@/config/site";
import { stats } from "@/config/achievements";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedCounter } from "@/components/shared/animated-counter";

const highlights = ["Clean, maintainable .NET code", "Reliable SQL Server data layers", "Vizrt & broadcast integrations", "User-friendly UI with jQuery"];

export function About() {
  const info = [
    { icon: Mail, label: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: Phone, label: siteConfig.phone },
    { icon: MapPin, label: siteConfig.location },
    { icon: Briefcase, label: siteConfig.availability },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="container">
        <SectionHeading eyebrow={siteConfig.about.subheading} title={siteConfig.about.heading} />
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="neu p-8">
            <div className="space-y-4">
              {siteConfig.about.paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed text-muted-foreground">{p}</p>
              ))}
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-white">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="neu p-8">
            <h3 className="font-display text-lg font-semibold text-white">Quick facts</h3>
            <div className="mt-5 space-y-3">
              {info.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-3 rounded-xl neu-inset px-4 py-3">
                    <Icon className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                  </div>
                );
                return item.href ? <a key={item.label} href={item.href} className="block">{content}</a> : <div key={item.label}>{content}</div>;
              })}
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="neu neu-hover p-6 text-center">
              <div className="font-display text-4xl font-extrabold text-gradient sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
