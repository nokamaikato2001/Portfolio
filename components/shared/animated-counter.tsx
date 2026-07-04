export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  return (
    <span className={className}>
      {prefix}{value.toLocaleString("en-US")}{suffix}
    </span>
  );
}
