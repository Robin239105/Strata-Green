import Link from "next/link";

type Action = {
  label: string;
  href: string;
  variant?: "primary" | "ghost";
};

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  /** Optional trailing portion of the title rendered in the lime accent. */
  titleAccent?: string;
  subtitle?: string;
  actions?: Action[];
};

/**
 * Compact, consistent header for interior pages. Clearly identifies the
 * current page (eyebrow + title) without the full-screen cinematic treatment
 * reserved for the home page.
 */
export default function PageHeader({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  actions,
}: PageHeaderProps) {
  return (
    <header className="relative bg-primary text-white overflow-hidden">
      {/* subtle depth + brand glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary to-primary-container/50" />
      <div className="absolute -top-24 right-0 w-[40rem] h-[40rem] bg-secondary-fixed/[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary-fixed/30 to-transparent" />

      <div className="relative max-w-container-max mx-auto px-6 md:px-margin-desktop pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 font-label-caps text-label-caps text-secondary-fixed font-bold tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary-fixed" />
            {eyebrow}
          </span>
          <h1 className="font-headline-display text-headline-lg-mobile md:text-headline-display text-white leading-tight font-bold mt-4">
            {title}
            {titleAccent && (
              <>
                {" "}
                <span className="text-secondary-fixed">{titleAccent}</span>
              </>
            )}
          </h1>
          {subtitle && (
            <p className="font-body-lg text-body-lg text-white/70 max-w-xl leading-relaxed mt-5">
              {subtitle}
            </p>
          )}
          {actions && actions.length > 0 && (
            <div className="flex flex-wrap gap-4 mt-8">
              {actions.map((a) =>
                a.variant === "ghost" ? (
                  <Link
                    key={a.label}
                    href={a.href}
                    className="border border-white/25 text-white px-7 py-3.5 rounded-lg font-label-caps text-label-caps tracking-wider hover:bg-white/10 transition-colors font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-fixed/60"
                  >
                    {a.label}
                  </Link>
                ) : (
                  <Link
                    key={a.label}
                    href={a.href}
                    className="bg-secondary-fixed text-primary px-7 py-3.5 rounded-lg font-label-caps text-label-caps tracking-wider hover:brightness-105 active:scale-95 transition-all font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-fixed/60 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                  >
                    {a.label}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
