import Link from "next/link";

export type LegalSection = {
  id: string;
  heading: string;
  body: string[];
  bullets?: string[];
};

export type LegalPageProps = {
  eyebrow?: string;
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

/**
 * Shared layout for legal/policy pages — hero, sticky section navigation,
 * and a readable prose column. Presentational only (server component).
 */
export default function LegalPage({
  eyebrow = "Legal",
  title,
  lastUpdated,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      {/* Hero */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary to-primary-container/60" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-secondary-fixed/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-container-max mx-auto px-6 md:px-margin-desktop pt-36 pb-16 md:pt-44 md:pb-20">
          <span className="font-label-caps text-label-caps text-secondary-fixed font-bold tracking-widest">
            {eyebrow}
          </span>
          <h1 className="font-headline-display text-headline-lg-mobile md:text-headline-display text-white leading-tight font-bold mt-4 mb-6 max-w-3xl">
            {title}
          </h1>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary-fixed" />
            <span className="font-technical-mono text-xs text-white/70">
              Last updated: {lastUpdated}
            </span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-container-max mx-auto px-6 md:px-margin-desktop py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sticky section nav */}
          <aside className="lg:col-span-3">
            <nav aria-label="Sections" className="lg:sticky lg:top-28">
              <p className="font-label-caps text-[10px] text-outline tracking-widest mb-4">
                On this page
              </p>
              <ul className="space-y-2.5 border-l border-outline-variant/40">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="block -ml-px border-l border-transparent pl-4 py-0.5 font-body-md text-sm text-on-surface-variant hover:text-secondary hover:border-secondary transition-colors"
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <div className="lg:col-span-8 lg:col-start-5 max-w-2xl">
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-12">
              {intro}
            </p>

            <div className="space-y-12">
              {sections.map((s) => (
                <div key={s.id} id={s.id} className="scroll-mt-28">
                  <h2 className="font-headline-md text-headline-md text-primary font-bold mb-4">
                    {s.heading}
                  </h2>
                  <div className="space-y-4">
                    {s.body.map((p, i) => (
                      <p
                        key={i}
                        className="font-body-md text-body-md text-on-surface-variant leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                    {s.bullets && (
                      <ul className="space-y-2.5 pl-1 pt-1">
                        {s.bullets.map((b, i) => (
                          <li key={i} className="flex gap-3 text-on-surface-variant">
                            <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                            <span className="font-body-md text-body-md leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact footer */}
            <div className="mt-16 rounded-2xl border border-outline-variant/30 bg-surface-container-low p-8">
              <h3 className="font-headline-md text-headline-md text-primary font-bold mb-2">
                Questions about this policy?
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-5 max-w-md">
                Our legal and data governance team is available to clarify any part
                of this document.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 font-technical-mono text-sm">
                <a
                  href="mailto:legal@stratagreen.com"
                  className="text-secondary font-bold hover:underline"
                >
                  legal@stratagreen.com
                </a>
                <span className="hidden sm:inline text-outline-variant">|</span>
                <Link href="/investors" className="text-on-surface-variant hover:text-secondary transition-colors">
                  Contact Investor Relations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
