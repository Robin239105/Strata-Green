"use client";

import Link from "next/link";
import { Share2, ShieldAlert } from "lucide-react";

export default function LeadershipPage() {
  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-secondary-container selection:text-on-secondary-container min-h-screen">
      
      {/* Hero Section */}
      <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-8 space-y-6">
            <span className="font-label-caps text-label-caps text-secondary tracking-widest block uppercase font-bold">
              Governance & Stewardship
            </span>
            <h1 className="font-headline-display text-headline-lg-mobile md:text-headline-display text-primary leading-tight font-bold">
              Architects of a Carbon-Negative Legacy.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              At Strata Green, leadership is more than management; it is the synthesis of visionary engineering and rigorous ESG oversight. We are building the infrastructure of the next century.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Leadership Bento */}
      <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto mb-40">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold">Executive Team</h2>
            <div className="w-16 h-1 bg-secondary mt-2"></div>
          </div>
          <div className="hidden md:block font-technical-mono text-technical-mono text-outline uppercase tracking-tighter font-bold">
            [ Executive Board / Alpha Division ]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* CEO Card */}
          <div className="md:col-span-2 group relative overflow-hidden glass-card rounded-xl border border-outline-variant/30 shadow-sm ambient-glow">
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/2 aspect-square md:aspect-auto overflow-hidden">
                <img
                  alt="Marcus Thorne"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="/images/leader-ceo.jpg"
                />
              </div>
              <div className="p-12 flex flex-col justify-center space-y-4 md:w-1/2">
                <span className="font-technical-mono text-secondary font-bold text-xs">CHIEF EXECUTIVE OFFICER</span>
                <h3 className="font-headline-md text-2xl font-bold text-primary">Marcus Thorne</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed text-sm">
                  Marcus bridges the gap between traditional energy finance and high-precision sustainable engineering.
                </p>
                <div className="flex gap-4 pt-2">
                  <button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-full text-outline hover:text-secondary hover:border-secondary transition-all cursor-pointer">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CTO Card */}
          <div className="group glass-card rounded-xl border border-outline-variant/30 shadow-sm ambient-glow overflow-hidden flex flex-col justify-between">
            <div className="aspect-[4/3] md:aspect-[4/5] overflow-hidden">
              <img
                alt="Dr. Elena Vance"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/images/leader-cto.jpg"
              />
            </div>
            <div className="p-8 space-y-2">
              <span className="font-technical-mono text-secondary block uppercase font-bold text-xs">CTO / Visionary Eng.</span>
              <h3 className="font-headline-md text-xl font-bold text-primary">Dr. Elena Vance</h3>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                Pioneered Carbon-Capture Fluidics at MIT. Oversees the Strata Green R&D lab.
              </p>
            </div>
          </div>

          {/* CFO Card */}
          <div className="group glass-card rounded-xl border border-outline-variant/30 shadow-sm ambient-glow overflow-hidden flex flex-col justify-between">
            <div className="aspect-[4/3] md:aspect-[4/5] overflow-hidden">
              <img
                alt="Julian Sterling"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/images/leader-cfo.jpg"
              />
            </div>
            <div className="p-8 space-y-2">
              <span className="font-technical-mono text-secondary block uppercase font-bold text-xs">CFO / ESG Oversight</span>
              <h3 className="font-headline-md text-xl font-bold text-primary">Julian Sterling</h3>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                Architect of the Green Bond Framework used by 14 sovereign funds globally.
              </p>
            </div>
          </div>

          {/* COO Card */}
          <div className="md:col-span-2 group relative overflow-hidden glass-card rounded-xl border border-outline-variant/30 shadow-sm ambient-glow">
            <div className="flex flex-col md:flex-row-reverse h-full">
              <div className="md:w-1/2 aspect-square md:aspect-auto overflow-hidden">
                <img
                  alt="Sarah Jenkins"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="/images/leader-coo.jpg"
                />
              </div>
              <div className="p-12 flex flex-col justify-center space-y-4 md:w-1/2">
                <span className="font-technical-mono text-secondary font-bold text-xs">CHIEF OPERATIONS OFFICER</span>
                <h3 className="font-headline-md text-2xl font-bold text-primary">Sarah Jenkins</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed text-sm">
                  Specializing in multi-continental logistics and zero-waste supply chains, Sarah ensures our vision translates to operational reality.
                </p>
                <div className="flex gap-4 pt-2">
                  <button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-full text-outline hover:text-secondary hover:border-secondary transition-all cursor-pointer">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="bg-primary py-32 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(#416900_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto relative z-10 space-y-20">
          
          <div className="text-center md:text-left space-y-4">
            <span className="font-label-caps text-label-caps text-secondary-fixed-dim block font-bold">GLOBAL PERSPECTIVE</span>
            <h2 className="font-headline-lg text-headline-lg text-on-primary font-bold">The Advisory Board</h2>
            <p className="font-body-lg text-body-lg text-on-primary/70 max-w-2xl leading-relaxed">
              Our strategic decisions are informed by an elite circle of global energy experts, policy makers, and climate scientists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            
            {/* Advisor 1 */}
            <div className="space-y-4">
              <div className="h-px w-12 bg-secondary-fixed"></div>
              <h4 className="font-headline-md text-xl font-bold text-on-primary">Lord Alistair Gray</h4>
              <span className="font-technical-mono text-xs text-on-primary/50 block">Former UN Energy Envoy</span>
              <p className="font-body-md text-on-primary/70 text-sm leading-relaxed">
                Advising on transnational energy treaties and cross-border regulatory frameworks.
              </p>
            </div>

            {/* Advisor 2 */}
            <div className="space-y-4">
              <div className="h-px w-12 bg-secondary-fixed"></div>
              <h4 className="font-headline-md text-xl font-bold text-on-primary">Dr. Sanya Mehta</h4>
              <span className="font-technical-mono text-xs text-on-primary/50 block">Lead Scientist, IPCC</span>
              <p className="font-body-md text-on-primary/70 text-sm leading-relaxed">
                Ensuring our carbon capture metrics exceed current scientific standards.
              </p>
            </div>

            {/* Advisor 3 */}
            <div className="space-y-4">
              <div className="h-px w-12 bg-secondary-fixed"></div>
              <h4 className="font-headline-md text-xl font-bold text-on-primary">Anders Holm</h4>
              <span className="font-technical-mono text-xs text-on-primary/50 block">Architect of Nordic Grid</span>
              <p className="font-body-md text-on-primary/70 text-sm leading-relaxed">
                Specialist in grid-balancing for intermittent renewable sources.
              </p>
            </div>

            {/* Advisor 4 */}
            <div className="space-y-4">
              <div className="h-px w-12 bg-secondary-fixed"></div>
              <h4 className="font-headline-md text-xl font-bold text-on-primary">Beatrice Wu</h4>
              <span className="font-technical-mono text-xs text-on-primary/50 block">Director, Green FinTech Hub</span>
              <p className="font-body-md text-on-primary/70 text-sm leading-relaxed">
                Integrating blockchain for transparent, immutable ESG reporting.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Visionary Engineering Statement */}
      <section className="py-40 px-6 md:px-margin-desktop max-w-container-max mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <span className="font-label-caps text-label-caps text-outline block uppercase tracking-[0.2em] font-bold">Our Philosophy</span>
          <h2 className="font-headline-display text-4xl sm:text-5xl leading-tight font-bold text-primary">
            Engineering as an Act of Conservation.
          </h2>
          <div className="flex justify-center gap-16">
            <div className="text-left max-w-[240px] space-y-1">
              <span className="font-headline-md text-3xl font-bold text-secondary">12.4M</span>
              <p className="font-technical-mono text-xs text-outline leading-relaxed">
                Tonnes of CO2 sequestered under current leadership strategy.
              </p>
            </div>
            <div className="text-left max-w-[240px] space-y-1">
              <span className="font-headline-md text-3xl font-bold text-secondary">80+</span>
              <p className="font-technical-mono text-xs text-outline leading-relaxed">
                Institutional partners committed to our 2030 roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
