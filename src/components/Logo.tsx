import Link from "next/link";

/**
 * Strata Green brand mark + wordmark.
 *
 * The mark is three ascending chevrons — reading as layered geological
 * "strata" and upward energy/growth — in a lime→emerald gradient. The top
 * chevron lifts subtly on hover. Pass `markOnly` to render just the glyph.
 */

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="sg-mark" x1="8" y1="32" x2="32" y2="6" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3f8a2f" />
          <stop offset="0.55" stopColor="#5bbf3a" />
          <stop offset="1" stopColor="#b7f569" />
        </linearGradient>
      </defs>
      {/* bottom strata — deepest */}
      <path
        d="M7 29 L20 19 L33 29"
        stroke="#1d4d2a"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
      {/* middle strata */}
      <path
        d="M9 22.5 L20 14 L31 22.5"
        stroke="url(#sg-mark)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      {/* top strata — lifts on hover */}
      <path
        d="M11 16 L20 9 L29 16"
        stroke="url(#sg-mark)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="origin-center transition-transform duration-300 group-hover:-translate-y-[1.5px]"
      />
    </svg>
  );
}

export default function Logo({
  className = "",
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Strata Green home"
      className={`group flex items-center gap-2.5 shrink-0 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${className}`}
    >
      <LogoMark className="h-8 w-8 shrink-0" />
      <span
        className={`font-headline-md font-bold text-lg sm:text-xl tracking-[0.14em] whitespace-nowrap ${
          invert ? "text-white" : "text-primary"
        }`}
      >
        STRATA<span className="text-secondary">GREEN</span>
      </span>
    </Link>
  );
}
