"use client";

import Link from "next/link";
import { ArrowRight, Wind, Activity } from "lucide-react";

export default function CaseStudiesPage() {
  return (
    <div className="pt-32">
      
      {/* Hero Section */}
      <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end">
          <div className="lg:col-span-8 space-y-6">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block tracking-widest">
              PORTFOLIO
            </span>
            <h1 className="font-headline-display text-headline-lg-mobile md:text-headline-display text-on-surface leading-none">
              Engineering the <br />
              <span className="text-primary italic">Global Transition.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              A curated look at how Strata Green integrates precision infrastructure with ecological stewardship to deliver high-yield sustainable energy systems.
            </p>
          </div>
          <div className="lg:col-span-4 hidden lg:block pb-4">
            <div className="flex flex-col gap-4 border-l border-outline-variant/30 pl-8 font-label-caps">
              <div className="flex items-center gap-2">
                <span className="font-technical-mono text-technical-mono text-secondary">03</span>
                <span className="uppercase opacity-60">Featured Stories</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-technical-mono text-technical-mono text-secondary">1.2GW</span>
                <span className="uppercase opacity-60">Combined Capacity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 1: North Sea */}
      <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative group">
            <div className="aspect-[16/10] overflow-hidden rounded-xl shadow-2xl relative">
              <img
                alt="Powering the North Sea Grid"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/images/case-wind.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute -bottom-8 -right-8 hidden lg:block bg-secondary text-on-secondary p-8 rounded-xl shadow-xl max-w-xs space-y-2">
              <span className="font-technical-mono text-technical-mono text-xs block opacity-80">METRIC: EFFICIENCY</span>
              <h4 className="font-headline-md text-headline-md font-bold">+24% Grid Stability</h4>
            </div>
          </div>
          
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-surface-container-high text-primary rounded-full font-label-caps text-label-caps">
                OFFSHORE
              </span>
              <span className="px-3 py-1 bg-surface-container-high text-primary rounded-full font-label-caps text-label-caps">
                UK WATERS
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary leading-tight">
              Powering the North Sea Grid
            </h2>
            <div className="space-y-10">
              <div className="space-y-1">
                <h3 className="font-label-caps text-label-caps text-secondary">THE CHALLENGE</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">
                  Intermittent supply from offshore wind sources causing destabilization in the UK&apos;s regional power grid during high-velocity weather patterns.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="font-label-caps text-label-caps text-secondary">THE ENGINEERING</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">
                  Implementation of a proprietary AI-driven predictive load balancer and cryogenic energy storage buffers at the landing substation.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="font-label-caps text-label-caps text-secondary">THE IMPACT</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">
                  Reduced grid volatility by 24% and enabled consistent 400MW supply to the coastal manufacturing cluster regardless of weather variability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 2: Andes - Asymmetric Layout */}
      <section className="bg-surface-container-low py-32 mb-40">
        <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-primary text-on-primary rounded-full font-label-caps text-label-caps">
                  HYDROGEN
                </span>
                <span className="px-3 py-1 bg-primary text-on-primary rounded-full font-label-caps text-label-caps">
                  CHILE
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary leading-tight">
                Hydrogen Hub in the Andes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card p-6 rounded-lg ambient-glow space-y-2">
                  <h3 className="font-label-caps text-label-caps text-primary">THE CHALLENGE</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Extreme altitude and remote terrain hindered traditional electrolysis infrastructure deployment and transport logistics.
                  </p>
                </div>
                <div className="glass-card p-6 rounded-lg ambient-glow space-y-2">
                  <h3 className="font-label-caps text-label-caps text-primary">THE ENGINEERING</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Modular, low-oxygen-optimized PEM electrolyzers designed for decentralized deployment with zero-waste water recycling systems.
                  </p>
                </div>
                <div className="md:col-span-2 glass-card p-6 rounded-lg border-l-4 border-secondary ambient-glow space-y-2">
                  <h3 className="font-label-caps text-label-caps text-secondary">THE IMPACT</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Successful establishment of the world&apos;s highest green hydrogen production site, fueling regional mining fleets with net-zero carbon output.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="aspect-square rounded-full overflow-hidden border-[16px] border-white shadow-2xl">
                <img
                  alt="Hydrogen Hub in the Andes"
                  className="w-full h-full object-cover"
                  src="/images/case-hydrogen.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 3: APAC Bento Grid */}
      <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto mb-40 space-y-12">
        <div className="text-center space-y-4">
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">
            URBAN RESILIENCE
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary leading-tight">
            Solar Decentralization in APAC
          </h2>
          <p className="max-w-2xl mx-auto text-on-surface-variant font-body-md leading-relaxed">
            Transforming high-density urban corridors into self-sustaining energy micro-grids using integrated photovoltaic skins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          {/* Main Large Bento */}
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-xl min-h-[350px]">
            <img
              alt="Solar Decentralization"
              className="w-full h-full object-cover"
              src="/images/case-solar.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-8 flex flex-col justify-end">
              <h3 className="text-white font-headline-md text-headline-md mb-2">The Impact</h3>
              <p className="text-white/80 max-w-md text-sm leading-relaxed">
                Eliminated reliance on centralized coal-fired power for over 50,000 households across 4 major metropolitan districts.
              </p>
            </div>
          </div>

          {/* Secondary Bento Info */}
          <div className="md:col-span-2 bg-surface-container-high p-8 rounded-xl flex flex-col justify-center space-y-4">
            <h3 className="font-label-caps text-label-caps text-primary">THE CHALLENGE</h3>
            <p className="text-on-surface-variant font-body-md text-sm leading-relaxed">
              Urban land scarcity prevented traditional solar farm utility-scale deployment in rapidly growing APAC mega-cities.
            </p>
          </div>

          {/* Tertiary Bento Stat 1 */}
          <div className="md:col-span-1 bg-primary text-on-primary p-8 rounded-xl flex flex-col justify-center items-center text-center space-y-2">
            <Wind className="h-9 w-9 text-secondary-fixed" />
            <h3 className="font-label-caps text-label-caps text-white">PRECISION</h3>
            <p className="text-[10px] opacity-70">Custom BIPV modules</p>
          </div>

          {/* Tertiary Bento Stat 2 */}
          <div className="md:col-span-1 bg-secondary text-on-secondary p-8 rounded-xl flex flex-col justify-center items-center text-center space-y-2">
            <Activity className="h-9 w-9 text-white" />
            <h3 className="font-label-caps text-label-caps text-on-secondary">ANALYSIS</h3>
            <p className="text-[10px] opacity-70">Real-time edge computing</p>
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto mb-40">
        <div className="bg-primary-container text-on-primary-container rounded-2xl p-12 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="flex flex-col gap-4 border-l border-on-primary-container/20 pl-8">
              <span className="font-technical-mono text-headline-md text-white">99.98%</span>
              <p className="font-label-caps text-label-caps tracking-widest opacity-80">UPTIME RELIABILITY</p>
            </div>
            <div className="flex flex-col gap-4 border-l border-on-primary-container/20 pl-8">
              <span className="font-technical-mono text-headline-md text-white">1.2M</span>
              <p className="font-label-caps text-label-caps tracking-widest opacity-80">TONS CO₂ OFFSET</p>
            </div>
            <div className="flex flex-col gap-4 border-l border-on-primary-container/20 pl-8">
              <span className="font-technical-mono text-headline-md text-white">$4.2B</span>
              <p className="font-label-caps text-label-caps tracking-widest opacity-80">INVESTMENT UNDER MGMT</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-40 text-center px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface leading-tight">
            Ready to architect your <br />
            <span className="text-secondary italic">sustainable future?</span>
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/investors" className="bg-secondary text-on-secondary px-10 py-4 rounded-lg font-label-caps text-label-caps hover:scale-105 transition-transform cursor-pointer">
              Inquire About Projects
            </Link>
            <button className="border border-outline text-on-surface px-10 py-4 rounded-lg font-label-caps text-label-caps hover:bg-surface-container transition-colors cursor-pointer">
              Download Portfolio PDF
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
