"use client";

import Link from "next/link";
import { Leaf, Gavel, Satellite, Droplet } from "lucide-react"; // Using custom/Lucide icons

export default function ESGStrategyPage() {
  return (
    <div className="bg-surface font-body-md text-on-surface selection:bg-secondary-container selection:text-on-secondary-container min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          
          <div className="md:col-span-7 z-10 space-y-8">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block uppercase tracking-widest font-bold">
              Our Mandate
            </span>
            <h1 className="font-headline-display text-headline-lg-mobile md:text-headline-display text-primary mb-8">
              Precision <span className="text-split-stroke italic">Ecology.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-xl">
              At Strata Green, we synthesize high-technology infrastructure with ecological stewardship. Our ESG strategy isn&apos;t a policy—it&apos;s the algorithm that drives our global operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-secondary text-white font-label-caps text-label-caps rounded hover:brightness-110 active:scale-95 transition-all font-bold cursor-pointer">
                View 2024 Report
              </button>
              <button className="px-8 py-4 border border-outline font-label-caps text-label-caps rounded hover:bg-surface-container-low transition-all cursor-pointer">
                Governance Framework
              </button>
            </div>
          </div>

          <div className="md:col-span-5 relative">
            <div className="aspect-square bg-surface-container-high rounded-xl overflow-hidden ambient-glow border border-outline-variant/30">
              <img
                alt="Sustainable mountain range landscape"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                src="/images/esg-mountain.jpg"
              />
            </div>
          </div>

        </div>
      </section>

      {/* The Triple Bottom Line - Bento Grid */}
      <section className="py-24 bg-surface-bright border-y border-outline-variant/20">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="mb-16 text-center space-y-4">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">The Strategic Pillars</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Our frameworks are built on three immutable pillars that ensure institutional-grade stability and radical transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Environmental */}
            <div className="glass-card p-10 border border-outline-variant/30 rounded-xl ambient-glow flex flex-col justify-between min-h-[400px]">
              <div>
                <Leaf className="text-secondary h-10 w-10 mb-6" />
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Environmental</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 font-body-md text-on-surface-variant">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    Net-Zero Grid Integration
                  </li>
                  <li className="flex items-center gap-3 font-body-md text-on-surface-variant">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    Adaptive Habitat Restoration
                  </li>
                  <li className="flex items-center gap-3 font-body-md text-on-surface-variant">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    Closed-loop Material Sourcing
                  </li>
                </ul>
              </div>
              <a className="font-label-caps text-label-caps text-secondary flex items-center gap-2 group mt-8 font-bold" href="#">
                Explore Biodiversity Initiatives <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* Social */}
            <div className="bg-primary p-10 rounded-xl flex flex-col justify-between min-h-[400px] text-on-primary">
              <div>
                <div className="text-secondary-fixed mb-6">
                  {/* custom hub icon */}
                  <svg className="h-10 w-10 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.25z"/></svg>
                </div>
                <h3 className="font-headline-md text-headline-md mb-4 text-white font-bold">Social</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 font-body-md opacity-80">
                    <span className="w-1.5 h-1.5 bg-secondary-fixed rounded-full"></span>
                    Community-Led Infrastructure
                  </li>
                  <li className="flex items-center gap-3 font-body-md opacity-80">
                    <span className="w-1.5 h-1.5 bg-secondary-fixed rounded-full"></span>
                    Trans-Global Talent Mobility
                  </li>
                  <li className="flex items-center gap-3 font-body-md opacity-80">
                    <span className="w-1.5 h-1.5 bg-secondary-fixed rounded-full"></span>
                    Human-Centric Safety Protocols
                  </li>
                </ul>
              </div>
              <a className="font-label-caps text-label-caps text-secondary-fixed flex items-center gap-2 group mt-8 font-bold" href="#">
                Social Impact Data <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* Governance */}
            <div className="glass-card p-10 border border-outline-variant/30 rounded-xl ambient-glow flex flex-col justify-between min-h-[400px]">
              <div>
                <Gavel className="text-secondary h-10 w-10 mb-6" />
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Governance</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 font-body-md text-on-surface-variant">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    Algorithmic Compliance Monitoring
                  </li>
                  <li className="flex items-center gap-3 font-body-md text-on-surface-variant">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    Ethical Supply Chain Audit
                  </li>
                  <li className="flex items-center gap-3 font-body-md text-on-surface-variant">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
                    Board-Level ESG Oversight
                  </li>
                </ul>
              </div>
              <a className="font-label-caps text-label-caps text-secondary flex items-center gap-2 group mt-8 font-bold" href="#">
                Audit Reports <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Carbon Neutral Roadmap */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row gap-20 items-start">
          
          <div className="md:w-1/3 sticky top-32 space-y-6">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold">
              Carbon Neutral Roadmap
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              A technical visualization of our path to zero-emissions by 2030, leveraging advanced carbon capture and renewable synthesis.
            </p>
            <div className="p-6 bg-surface-container-low border-l-4 border-secondary rounded-r-lg">
              <p className="font-technical-mono text-technical-mono text-primary font-bold">CURRENT METRIC:</p>
              <p className="font-headline-md text-headline-md text-primary font-bold mt-1">0.42 tCO2e / MWh</p>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm mt-2">Reduction of 12% YoY</p>
            </div>
          </div>

          <div className="md:w-2/3 space-y-12">
            
            {/* Roadmap Item 1 */}
            <div className="relative pl-12 border-l border-outline-variant pb-12">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-secondary ring-8 ring-surface"></div>
              <div className="glass-card p-8 border border-outline-variant/30 rounded-xl shadow-sm">
                <span className="font-label-caps text-label-caps text-secondary mb-2 block font-bold">Phase I: 2024 - 2025</span>
                <h4 className="font-headline-md text-headline-md text-primary mb-4 font-bold">Infrastructure Decentralization</h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Transitioning 80% of regional processing hubs to localized micro-grids powered by onsite hydrogen and solar arrays.
                </p>
              </div>
            </div>

            {/* Roadmap Item 2 */}
            <div className="relative pl-12 border-l border-outline-variant pb-12">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full border-2 border-secondary bg-surface ring-8 ring-surface"></div>
              <div className="glass-card p-8 border border-outline-variant/30 rounded-xl shadow-sm">
                <span className="font-label-caps text-label-caps text-secondary mb-2 block font-bold">Phase II: 2026 - 2028</span>
                <h4 className="font-headline-md text-headline-md text-primary mb-4 font-bold">Supply Chain Synthetization</h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Integrating blockchain-based carbon tracking across all Tier 1 and Tier 2 suppliers to ensure net-zero logistics.
                </p>
              </div>
            </div>

            {/* Roadmap Item 3 */}
            <div className="relative pl-12 border-l border-outline-variant">
              <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full border-2 border-outline-variant bg-surface ring-8 ring-surface"></div>
              <div className="glass-card p-8 border border-outline-variant/30 rounded-xl opacity-60 shadow-sm">
                <span className="font-label-caps text-label-caps text-secondary mb-2 block font-bold">Phase III: 2029 - 2030</span>
                <h4 className="font-headline-md text-headline-md text-primary mb-4 font-bold">Absolute Neutrality</h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Full deployment of direct-air-capture (DAC) facilities to offset unavoidable residual emissions.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Biodiversity & Technical Precision */}
      <section className="py-24 bg-primary text-on-primary">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 rounded-lg overflow-hidden grayscale contrast-125">
                  <img
                    alt="Regenerative forestry"
                    className="w-full h-full object-cover"
                    src="/images/esg-forestry.jpg"
                  />
                </div>
                <div className="h-48 bg-secondary-container rounded-lg p-6 flex flex-col justify-end text-primary shadow-sm">
                  <p className="font-headline-md text-2xl font-bold">1.2M</p>
                  <p className="font-label-caps text-[10px] tracking-wider uppercase font-bold mt-1">Acres Protected</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-48 bg-tertiary-container rounded-lg p-6 flex flex-col justify-end text-white shadow-sm border border-white/5">
                  <p className="font-headline-md text-2xl font-bold">98.4%</p>
                  <p className="font-label-caps text-[10px] tracking-wider uppercase font-bold mt-1">Water Recovery Rate</p>
                </div>
                <div className="h-64 rounded-lg overflow-hidden grayscale contrast-125">
                  <img
                    alt="Technological monitoring"
                    className="w-full h-full object-cover"
                    src="/images/esg-monitoring.jpg"
                  />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <span className="font-label-caps text-label-caps text-secondary-fixed mb-4 block font-bold">
                Conservation Ethics
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold">
                Biodiversity Initiatives
              </h2>
              <p className="font-body-lg text-body-lg opacity-80 leading-relaxed">
                We deploy AI-driven bio-acoustics and satellite telemetry to monitor ecosystem health in real-time. Our commitment extends beyond mitigation to active regeneration of critical wildlife corridors.
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <Satellite className="text-secondary-fixed h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-headline-md text-base font-bold text-white mb-1">Real-time Telemetry</h5>
                    <p className="font-body-md text-sm opacity-60">Automated reporting on soil nitrogen and canopy density.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Droplet className="text-secondary-fixed h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-headline-md text-base font-bold text-white mb-1">Hydrological Restoration</h5>
                    <p className="font-body-md text-sm opacity-60">Revitalizing ancient aquifer systems through precision irrigation.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Governance Data Table */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl space-y-4">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold">
              Corporate Governance
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Our governance structure is designed for accountability, with independent audits conducted quarterly by tier-one partners.
            </p>
          </div>
          <button className="px-6 py-3 border border-outline text-primary font-label-caps text-label-caps rounded hover:bg-surface-container-low transition-all font-bold cursor-pointer whitespace-nowrap">
            Download Governance PDFs
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="py-4 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest font-bold">Metric</th>
                <th className="py-4 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest font-bold">Standard</th>
                <th className="py-4 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest font-bold">2023 Result</th>
                <th className="py-4 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest font-bold">2024 Goal</th>
                <th className="py-4 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest font-bold">Status</th>
              </tr>
            </thead>
            <tbody className="font-body-md text-body-md text-on-surface-variant divide-y divide-outline-variant/10">
              <tr className="hover:bg-surface-container-lowest transition-colors">
                <td className="py-6 font-semibold text-primary">Board Independence</td>
                <td className="py-6">ISO 37000</td>
                <td className="py-6">82%</td>
                <td className="py-6">90%</td>
                <td className="py-6">
                  <span className="px-3 py-1 bg-secondary-container/20 text-on-secondary-container text-xs rounded-full font-label-caps font-bold">
                    ON TRACK
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-surface-container-lowest transition-colors">
                <td className="py-6 font-semibold text-primary">Executive ESG Pay-Link</td>
                <td className="py-6">UN PRI</td>
                <td className="py-6">15%</td>
                <td className="py-6">25%</td>
                <td className="py-6">
                  <span className="px-3 py-1 bg-surface-variant text-on-surface-variant text-xs rounded-full font-label-caps font-bold">
                    IN PROGRESS
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-surface-container-lowest transition-colors">
                <td className="py-6 font-semibold text-primary">Whistleblower Protection</td>
                <td className="py-6">GRI 2-25</td>
                <td className="py-6">100%</td>
                <td className="py-6">100%</td>
                <td className="py-6">
                  <span className="px-3 py-1 bg-secondary-container/20 text-on-secondary-container text-xs rounded-full font-label-caps font-bold">
                    COMPLIANT
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-surface-container-lowest transition-colors">
                <td className="py-6 font-semibold text-primary">Data Privacy Audit</td>
                <td className="py-6">GDPR+</td>
                <td className="py-6">0 Breaches</td>
                <td className="py-6">0 Breaches</td>
                <td className="py-6">
                  <span className="px-3 py-1 bg-secondary-container/20 text-on-secondary-container text-xs rounded-full font-label-caps font-bold">
                    SECURE
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Newsletter / Contact */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant/20">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center space-y-6">
          <h2 className="font-headline-md text-headline-md text-primary font-bold">
            Stay informed on our impact progress.
          </h2>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              className="flex-grow bg-white border-none border-b border-outline focus:ring-0 focus:border-secondary transition-all font-technical-mono text-sm px-4 py-2"
              placeholder="Institutional Email"
              type="email"
            />
            <button className="px-8 py-3 bg-primary text-white font-label-caps text-label-caps hover:opacity-90 transition-all font-bold cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
