import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4", align === "center" ? "items-center text-center" : "items-start", className)}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full neu-sm px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gradient-teal">
          <span className="h-1.5 w-1.5 rounded-full bg-primary glow-teal" />
          {eyebrow}
        </span>
      )}
      <h2 className="max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">{description}</p>}
    </div>
  );
}
