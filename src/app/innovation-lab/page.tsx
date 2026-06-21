"use client";

import Link from "next/link";
import { Beaker, Wind, Layers, Settings, Map, ArrowRight } from "lucide-react"; // Using Beaker for science/chemistry

export default function InnovationLabPage() {
  return (
    <div className="bg-surface text-on-surface selection:bg-secondary-fixed selection:text-on-secondary-fixed min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden blueprint-grid">
        <div className="absolute inset-0 z-0"></div>
        <div className="relative z-10 px-6 md:px-margin-desktop max-w-container-max mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/20 border border-secondary/20 text-secondary rounded-full">
              <Beaker className="h-4 w-4" />
              <span className="font-label-caps text-label-caps font-bold">Innovation Lab 01</span>
            </div>
            <h1 className="font-headline-display text-headline-display text-primary leading-tight font-bold">
              Architectural <br />
              <span className="text-secondary">Nature</span>.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Where precision engineering meets ecological stewardship. We are developing the high-density infrastructure required for a zero-emission global economy.
            </p>
            <div className="flex gap-4 pt-2">
              <button className="bg-primary text-white px-8 py-4 rounded-[8px] font-label-caps text-label-caps transition-all hover:opacity-90 font-bold cursor-pointer">
                View Blueprint
              </button>
              <button className="border border-outline px-8 py-4 rounded-[8px] font-label-caps text-label-caps hover:bg-surface-container transition-all cursor-pointer">
                Lab Documentation
              </button>
            </div>
          </div>

          <div className="md:col-span-5 relative">
            <div className="glass-card p-8 rounded-xl border-l-4 border-l-secondary shadow-md border-y border-r border-outline-variant/20">
              <div className="flex justify-between items-start mb-12 font-technical-mono text-technical-mono">
                <span className="text-on-surface-variant uppercase tracking-widest font-bold">Active Systems</span>
                <span className="text-secondary font-bold">04:42:00</span>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-outline-variant pb-4 text-sm">
                  <span className="font-body-md text-on-surface-variant">Thermal Efficiency</span>
                  <span className="font-technical-mono text-technical-mono text-secondary font-bold">98.4%</span>
                </div>
                <div className="flex justify-between items-center border-b border-outline-variant pb-4 text-sm">
                  <span className="font-body-md text-on-surface-variant">Grid Synchronization</span>
                  <span className="font-technical-mono text-technical-mono text-secondary font-bold">Active</span>
                </div>
                <div className="flex justify-between items-center pb-2 text-sm">
                  <span className="font-body-md text-on-surface-variant">Carbon Extraction</span>
                  <span className="font-technical-mono text-technical-mono text-secondary font-bold">2.4kt/yr</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Research Bento Grid */}
      <section className="py-[120px] px-6 md:px-margin-desktop max-w-container-max mx-auto bg-white relative border-y border-outline-variant/20">
        <div className="mb-20 space-y-4">
          <h2 className="font-headline-lg text-headline-lg text-primary font-bold">Precision R&amp;D Projects</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Our portfolio focuses on high-impact energy transition technologies, developed with the rigor of institutional infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          
          {/* Project 1: Large Span */}
          <div className="md:col-span-2 group overflow-hidden rounded-xl glass-card ambient-glow relative h-[500px] border border-outline-variant/30">
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Electrolyzer cells research"
              src="/images/lab-electrolyzers.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
            <div className="absolute bottom-0 p-10 text-white space-y-4">
              <div className="flex gap-2">
                <span className="bg-secondary px-3 py-1 rounded-full font-label-caps text-[10px] font-bold text-white">Next-Gen Electrolyzers</span>
                <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full font-label-caps text-[10px] font-bold text-white">Phase 04</span>
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-white">Scaling Hydrogen Infrastructure</h3>
              <p className="font-body-md text-white/80 max-w-lg text-sm">
                Achieving 20% higher efficiency than current industry standards through proprietary catalyst membranes.
              </p>
            </div>
          </div>

          {/* Project 2: Square */}
          <div className="group overflow-hidden rounded-xl glass-card border border-outline-variant/30 ambient-glow relative h-[500px]">
            <div className="absolute inset-0 bg-primary/5 blueprint-grid z-0 opacity-50"></div>
            <div className="relative z-10 p-10 flex flex-col h-full justify-between">
              <div>
                <svg className="h-10 w-10 fill-current text-secondary mb-8" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2-1.1 0-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.25z"/></svg>
                <h3 className="font-headline-md text-xl font-bold text-primary mb-4">AI Grid Optimization</h3>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                  Predictive modeling for nation-scale renewable distribution, reducing curtailment by 15%.
                </p>
              </div>
              <div className="pt-8 border-t border-outline-variant/30">
                <div className="font-technical-mono text-technical-mono text-secondary mb-2 text-xs font-bold">NETWORK LATENCY: 0.2ms</div>
                <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full w-3/4"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: Square */}
          <div className="group overflow-hidden rounded-xl glass-card border border-outline-variant/30 ambient-glow relative h-[500px]">
            <img
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Floating wind turbine prototype"
              src="/images/lab-floating-wind.jpg"
            />
            <div className="absolute inset-0 bg-primary/40"></div>
            <div className="absolute inset-0 p-10 flex flex-col justify-end text-white space-y-2">
              <h3 className="font-headline-md text-xl font-bold text-white">Floating Wind Prototypes</h3>
              <p className="font-body-md text-white/95 text-xs leading-relaxed">
                Deep-sea stabilization tech for high-yield offshore zones.
              </p>
            </div>
          </div>

          {/* Project 4: Wide Span */}
          <div className="md:col-span-2 group overflow-hidden rounded-xl border border-outline-variant/40 relative h-[500px] flex shadow-sm">
            <div className="w-1/2 p-12 flex flex-col justify-center bg-surface-bright space-y-6">
              <span className="font-label-caps text-label-caps text-on-tertiary-container block uppercase tracking-[0.2em] font-bold">Material Science</span>
              <h3 className="font-headline-lg text-2xl font-bold text-primary">Carbon-Negative Concrete</h3>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                Developing structural materials that sequester CO2 during the curing process, redefining the footprint of infrastructure.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span className="font-body-md text-on-surface-variant text-xs font-semibold">80% CO2 reduction vs Portland</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span className="font-body-md text-on-surface-variant text-xs font-semibold">Institutional certification in progress</span>
                </li>
              </ul>
            </div>
            <div className="w-1/2 relative">
              <img
                className="w-full h-full object-cover"
                alt="Material testing concrete"
                src="/images/lab-concrete.jpg"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Technical Specs Divider */}
      <section className="py-20 bg-primary overflow-hidden relative text-white">
        <div className="absolute inset-0 bg-[radial-gradient(#416900_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10 flex flex-wrap justify-between gap-10">
          <div className="space-y-1">
            <div className="font-technical-mono text-3xl sm:text-4xl font-bold leading-none">1.2GW</div>
            <div className="font-label-caps text-label-caps opacity-60 uppercase font-bold text-xs">System Capacity</div>
          </div>
          <div className="space-y-1">
            <div className="font-technical-mono text-3xl sm:text-4xl font-bold leading-none">99.9%</div>
            <div className="font-label-caps text-label-caps opacity-60 uppercase font-bold text-xs">Reliability Index</div>
          </div>
          <div className="space-y-1">
            <div className="font-technical-mono text-3xl sm:text-4xl font-bold leading-none">$2.4B</div>
            <div className="font-label-caps text-label-caps opacity-60 uppercase font-bold text-xs">R&amp;D Commitment</div>
          </div>
          <div className="space-y-1">
            <div className="font-technical-mono text-3xl sm:text-4xl font-bold leading-none">142</div>
            <div className="font-label-caps text-label-caps opacity-60 uppercase font-bold text-xs">Patent Filings</div>
          </div>
        </div>
      </section>

      {/* Lab Facilities */}
      <section className="py-[120px] bg-surface">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="max-w-xl space-y-4">
              <h2 className="font-headline-lg text-headline-lg text-primary font-bold">World-Class Facilities</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Our labs are strategic nodes located in global tech hubs, fostering collaboration with academic and industry partners.
              </p>
            </div>
            <button className="bg-secondary text-primary px-8 py-3 font-label-caps text-label-caps rounded-[8px] flex items-center gap-2 hover:bg-secondary-fixed transition-colors font-bold shadow-sm shadow-secondary/15 cursor-pointer">
              <Map className="h-4 w-4" />
              <span>Explore Locations</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Facility 1 */}
            <div className="group cursor-pointer space-y-4">
              <div className="aspect-[16/9] rounded-xl overflow-hidden relative shadow-sm border border-outline-variant/30">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  alt="Industrial research facility"
                  src="/images/lab-emerald-foundry.jpg"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full font-label-caps text-[9px] font-bold text-primary">
                  SGP-01 HUB
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-headline-md text-xl font-bold text-primary">The Emerald Foundry</h4>
                  <p className="font-body-md text-on-surface-variant text-sm">Singapore • Energy Material Testing</p>
                </div>
                <ArrowRight className="text-secondary group-hover:translate-x-1 transition-transform h-5 w-5 mt-1" />
              </div>
            </div>

            {/* Facility 2 */}
            <div className="group cursor-pointer space-y-4">
              <div className="aspect-[16/9] rounded-xl overflow-hidden relative shadow-sm border border-outline-variant/30">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  alt="Clean room laboratory"
                  src="/images/lab-clean-room.jpg"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full font-label-caps text-[9px] font-bold text-primary">
                  NO-2 CORE
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-headline-md text-xl font-bold text-primary">Boreal Data Center</h4>
                  <p className="font-body-md text-on-surface-variant text-sm">Oslo • AI &amp; Grid Intelligence</p>
                </div>
                <ArrowRight className="text-secondary group-hover:translate-x-1 transition-transform h-5 w-5 mt-1" />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
