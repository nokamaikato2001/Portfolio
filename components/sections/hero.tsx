import Image from "next/image";
import Link from "next/link";
import { ArrowDown, FileDown, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/config/social";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center py-28 sm:py-32">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(0,245,212,0.35),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(123,97,255,0.35),transparent_60%),radial-gradient(circle_at_50%_50%,rgba(255,181,71,0.2),transparent_55%)] blur-2xl" />
            <div className="neu p-3">
              <div className="overflow-hidden rounded-[calc(var(--radius)-0.4rem)]">
                <Image src={siteConfig.about.image} alt={siteConfig.name} width={900} height={1125} priority quality={100} className="h-auto w-full object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 flex-wrap justify-center gap-2">
              <span className="rounded-full glass-strong px-4 py-2 text-xs font-semibold text-white">4+ yrs experience</span>
              <span className="rounded-full glass-strong px-4 py-2 text-xs font-semibold text-white">@ {siteConfig.currentCompany}</span>
            </div>
          </div>
        </div>

        <div className="order-2 text-center lg:order-1 lg:text-left">
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full neu-sm px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary glow-teal" />
              {siteConfig.availability}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full neu-sm px-4 py-1.5 text-xs font-semibold text-gradient-teal">
              Currently @ {siteConfig.currentCompany}
            </span>
          </div>
          <p className="mt-6 text-lg text-muted-foreground">{siteConfig.hero.greeting}</p>
          <h1 className="mt-2 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl">
            <span className="text-gradient">{siteConfig.hero.name}</span>
          </h1>
          <p className="mt-4 font-mono text-lg text-white sm:text-xl">
            <span className="text-primary">{"<"}</span>{siteConfig.role}<span className="text-primary">{" />"}</span>
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:mx-0">{siteConfig.hero.description}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Button variant="gradient" size="lg" asChild><Link href={siteConfig.hero.primaryCta.href}>{siteConfig.hero.primaryCta.label}</Link></Button>
            <Button variant="neu" size="lg" asChild><Link href={siteConfig.hero.secondaryCta.href}><Mail className="h-4 w-4" />{siteConfig.hero.secondaryCta.label}</Link></Button>
            <Button variant="ghost" size="lg" asChild><a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer"><FileDown className="h-4 w-4" />Resume</a></Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground lg:justify-start">
            <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4 text-primary" />{siteConfig.email}</a>
            <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4 text-secondary" />{siteConfig.phone}</span>
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[hsl(var(--warm))]" />{siteConfig.location}</span>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="flex h-11 w-11 items-center justify-center rounded-xl neu-sm text-muted-foreground transition-colors hover:text-primary">
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <Link href="#about" aria-label="Scroll to about" className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground sm:bottom-8 sm:flex">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-4 w-4 text-primary" />
      </Link>
    </section>
  );
}
