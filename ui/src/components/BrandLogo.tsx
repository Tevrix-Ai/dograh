import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  inverse = false,
  mark = false,
}: {
  className?: string;
  inverse?: boolean;
  mark?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2 select-none font-bold text-xl", className)}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="6" fill="url(#tevrix-grad)" />
        <path d="M8 14l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="tevrix-grad" x1="0" y1="0" x2="28" y2="28">
            <stop stopColor="#6366f1" />
            <stop offset="1" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
      <span className={inverse ? "text-white" : ""}>Tevrix AI</span>
    </span>
  );
}
