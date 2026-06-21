"use client";

import Link from "next/link";
import { Mail, ArrowRight, Play, Download, Palette, Camera } from "lucide-react";

export default function MediaCenterPage() {
  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-secondary-container selection:text-on-secondary-container min-h-screen">
      
      <main className="pt-32 pb-24">
        {/* Hero Header */}
        <header className="px-6 md:px-margin-desktop max-w-container-max mx-auto mb-20 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <span className="font-label-caps text-label-caps text-secondary tracking-[0.2em] block uppercase font-bold">
                Press & Media
              </span>
              <h1 className="font-headline-display text-headline-display text-primary font-bold">Media Center</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Precision reporting on our journey toward a decarbonized industrial future. Access our latest announcements, official media assets, and executive insights.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 border border-outline px-6 py-3 rounded hover:bg-surface-container transition-colors duration-200 font-bold font-label-caps text-label-caps cursor-pointer">
                <Mail className="h-4.5 w-4.5" />
                <span>Subscribe to Alerts</span>
              </button>
            </div>
          </div>
          <div className="mt-12 horizontal-line"></div>
        </header>

        {/* Featured News Section */}
        <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto mb-32 space-y-12">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold">Latest News</h2>
            <Link href="#" className="font-label-caps text-label-caps text-secondary flex items-center gap-2 hover:translate-x-1 transition-transform font-bold">
              <span>View Archive</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            
            {/* Primary Featured Article */}
            <div className="md:col-span-8 group cursor-pointer space-y-6">
              <div className="relative overflow-hidden rounded-lg aspect-[16/9] border border-outline-variant/30 shadow-sm">
                <img
                  alt="Green Hydrogen Announcement"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="/images/media-solar-farm.jpg"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-secondary text-white px-3 py-1 rounded font-label-caps text-label-caps font-bold">
                    Breaking
                  </span>
                </div>
              </div>
              <div className="max-w-2xl space-y-4">
                <div className="flex gap-4 items-center font-technical-mono text-technical-mono text-xs">
                  <time className="text-on-surface-variant">OCT 24, 2024</time>
                  <span className="w-1.5 h-1.5 bg-outline-variant rounded-full"></span>
                  <span className="text-secondary font-bold">FINANCE</span>
                </div>
                <h3 className="font-headline-lg text-2xl md:text-3xl font-bold text-primary group-hover:text-secondary transition-colors leading-tight">
                  Strata Green Secures $2B Green Hydrogen Round
                </h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed text-sm">
                  The Series D round, led by institutional energy partners, accelerates our roadmap for the next generation of electrolyzer infrastructure across the EMEA region.
                </p>
              </div>
            </div>

            {/* Side News Column */}
            <div className="md:col-span-4 flex flex-col justify-between">
              
              <div className="group cursor-pointer py-4 space-y-2 border-b border-outline-variant/30">
                <time className="font-technical-mono text-technical-mono text-on-surface-variant text-xs block">OCT 20, 2024</time>
                <h4 className="font-headline-md text-base font-bold text-primary group-hover:text-secondary transition-colors">
                  Q3 2024 ESG Impact Report Published
                </h4>
                <p className="font-body-md text-on-surface-variant text-xs leading-relaxed line-clamp-2">
                  Detailed analysis of carbon abatement metrics across our primary operational sectors.
                </p>
              </div>

              <div className="group cursor-pointer py-4 space-y-2 border-b border-outline-variant/30">
                <time className="font-technical-mono text-technical-mono text-on-surface-variant text-xs block">OCT 15, 2024</time>
                <h4 className="font-headline-md text-base font-bold text-primary group-hover:text-secondary transition-colors">
                  Architecting the Grid: AI Integration in Wind Storage
                </h4>
                <p className="font-body-md text-on-surface-variant text-xs leading-relaxed line-clamp-2">
                  New whitepaper explores the role of predictive modeling in stabilizing renewable energy loads.
                </p>
              </div>

              <div className="group cursor-pointer py-4 space-y-2">
                <time className="font-technical-mono text-technical-mono text-on-surface-variant text-xs block">OCT 08, 2024</time>
                <h4 className="font-headline-md text-base font-bold text-primary group-hover:text-secondary transition-colors">
                  Global Partnerships with Nordic Energy Consortium
                </h4>
                <p className="font-body-md text-on-surface-variant text-xs leading-relaxed line-clamp-2">
                  Expanding offshore operations with strategic state-level cooperation agreements.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Executive Keynotes */}
        <section className="bg-surface-container-low py-32 mb-32 border-y border-outline-variant/20 overflow-hidden">
          <div className="px-6 md:px-margin-desktop max-w-container-max mx-auto mb-16 space-y-4">
            <span className="font-label-caps text-label-caps text-on-surface-variant tracking-[0.2em] block font-bold">
              Thought Leadership
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold">Executive Keynotes</h2>
          </div>

          <div className="flex gap-gutter px-6 md:px-margin-desktop max-w-container-max mx-auto overflow-x-auto pb-8 snap-x no-scrollbar">
            
            {/* Keynote 1 */}
            <div className="min-w-[320px] md:min-w-[420px] snap-start glass-card p-8 rounded-xl border border-outline-variant/30 flex flex-col justify-between h-[480px]">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-outline-variant/30 shadow-sm">
                  <img
                    alt="CEO Headshot"
                    className="w-full h-full object-cover"
                    src="/images/leader-ceo.jpg"
                  />
                </div>
                <h3 className="font-headline-md text-xl font-bold text-primary">The Architecture of Decarbonization</h3>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                  A perspective on why precision engineering is the only viable path to Net Zero by 2040.
                </p>
              </div>
              <div className="space-y-4 pt-4 border-t border-outline-variant/10">
                <div>
                  <p className="font-label-caps text-label-caps text-secondary font-bold">Marcus Vane</p>
                  <p className="font-technical-mono text-technical-mono text-on-surface-variant text-[11px] uppercase mt-0.5">Chief Executive Officer</p>
                </div>
                <button className="flex items-center gap-2 font-label-caps text-label-caps text-primary hover:text-secondary transition-colors font-bold cursor-pointer">
                  <Play className="h-4 w-4" />
                  <span>Watch Keynote</span>
                </button>
              </div>
            </div>

            {/* Keynote 2 */}
            <div className="min-w-[320px] md:min-w-[420px] snap-start glass-card p-8 rounded-xl border border-outline-variant/30 flex flex-col justify-between h-[480px]">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-outline-variant/30 shadow-sm">
                  <img
                    alt="CTO Headshot"
                    className="w-full h-full object-cover"
                    src="/images/leader-cto.jpg"
                  />
                </div>
                <h3 className="font-headline-md text-xl font-bold text-primary">Bridging the Physics Gap</h3>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                  Breaking down the thermodynamic breakthroughs in high-density hydrogen storage systems.
                </p>
              </div>
              <div className="space-y-4 pt-4 border-t border-outline-variant/10">
                <div>
                  <p className="font-label-caps text-label-caps text-secondary font-bold">Dr. Elena Thorne</p>
                  <p className="font-technical-mono text-technical-mono text-on-surface-variant text-[11px] uppercase mt-0.5">Chief Technology Officer</p>
                </div>
                <button className="flex items-center gap-2 font-label-caps text-label-caps text-primary hover:text-secondary transition-colors font-bold cursor-pointer">
                  <Play className="h-4 w-4" />
                  <span>Watch Keynote</span>
                </button>
              </div>
            </div>

            {/* Keynote 3 */}
            <div className="min-w-[320px] md:min-w-[420px] snap-start glass-card p-8 rounded-xl border border-outline-variant/30 flex flex-col justify-between h-[480px]">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-outline-variant/30 shadow-sm">
                  <img
                    alt="CFO Headshot"
                    className="w-full h-full object-cover"
                    src="/images/leader-cfo.jpg"
                  />
                </div>
                <h3 className="font-headline-md text-xl font-bold text-primary">The Capital of Clean</h3>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                  How institutional capital is shifting from speculative tech to infrastructure-backed assets.
                </p>
              </div>
              <div className="space-y-4 pt-4 border-t border-outline-variant/10">
                <div>
                  <p className="font-label-caps text-label-caps text-secondary font-bold">Adrian Chen</p>
                  <p className="font-technical-mono text-technical-mono text-on-surface-variant text-[11px] uppercase mt-0.5">Chief Financial Officer</p>
                </div>
                <button className="flex items-center gap-2 font-label-caps text-label-caps text-primary hover:text-secondary transition-colors font-bold cursor-pointer">
                  <Play className="h-4 w-4" />
                  <span>Watch Keynote</span>
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* Brand Identity Kit */}
        <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden glass-card p-12 flex flex-col justify-center relative z-10 border border-outline-variant/30 shadow-sm">
                <div className="flex flex-col gap-8">
                  <div className="flex items-baseline gap-4">
                    <span className="text-4xl font-bold text-primary">Strata</span>
                    <span className="text-4xl font-bold text-secondary">Green</span>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="h-12 bg-primary rounded"></div>
                    <div className="h-12 bg-secondary rounded"></div>
                    <div className="h-12 bg-surface-variant rounded"></div>
                    <div className="h-12 bg-outline rounded opacity-20"></div>
                  </div>
                  <div className="font-technical-mono text-xs text-on-surface-variant space-y-2 font-semibold">
                    <p>PRIMARY: #00190D</p>
                    <p>ACCENT: #416900</p>
                    <p>TYPEFACE: MONTSERRAT / INTER</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-secondary/5 rounded-full blur-[80px]"></div>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="space-y-8">
              <span className="font-label-caps text-label-caps text-secondary tracking-[0.2em] block font-bold">Resources</span>
              <h2 className="font-headline-lg text-headline-lg text-primary font-bold">Brand Identity Kit</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Download our comprehensive media toolkit including vector logos, executive portraits, and our official brand guidelines. Designed for partners, media outlets, and industrial collaborators.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
                  <div className="flex items-center gap-3">
                    <Palette className="text-secondary h-5 w-5" />
                    <span className="font-body-md text-primary text-sm font-semibold">Logo & Mark Assets (EPS, PNG)</span>
                  </div>
                  <button className="text-primary hover:text-secondary transition-colors cursor-pointer">
                    <Download className="h-4.5 w-4.5" />
                  </button>
                </li>
                <li className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
                  <div className="flex items-center gap-3">
                    <Palette className="text-secondary h-5 w-5" />
                    <span className="font-body-md text-primary text-sm font-semibold">Visual Style Guidelines (PDF)</span>
                  </div>
                  <button className="text-primary hover:text-secondary transition-colors cursor-pointer">
                    <Download className="h-4.5 w-4.5" />
                  </button>
                </li>
                <li className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
                  <div className="flex items-center gap-3">
                    <Camera className="text-secondary h-5 w-5" />
                    <span className="font-body-md text-primary text-sm font-semibold">Executive Headshot Gallery</span>
                  </div>
                  <button className="text-primary hover:text-secondary transition-colors cursor-pointer">
                    <Download className="h-4.5 w-4.5" />
                  </button>
                </li>
              </ul>

              <button className="bg-secondary text-primary px-8 py-4 rounded font-label-caps text-label-caps hover:bg-secondary-fixed transition-colors inline-flex items-center gap-2 font-bold shadow-sm shadow-secondary/15 cursor-pointer mt-4">
                <span>Download Full Kit (1.4 GB)</span>
                <Download className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>
        </section>

        {/* Media Contact Section */}
        <section className="px-6 md:px-margin-desktop max-w-container-max mx-auto border border-outline-variant/20 rounded-xl p-12 md:p-20 text-center space-y-8 shadow-sm">
          <h2 className="font-headline-md text-2xl font-bold text-primary">Media Inquiries</h2>
          <p className="font-body-md text-on-surface-variant max-w-xl mx-auto text-sm leading-relaxed">
            Need specific assets or an interview with our leadership team? Our global media relations team is available for urgent inquiries.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 pt-4">
            <div className="space-y-1">
              <p className="font-label-caps text-label-caps text-secondary uppercase font-bold text-xs">Email</p>
              <a className="font-headline-md text-xl font-bold text-primary hover:text-secondary transition-colors" href="mailto:press@stratagreen.com">
                press@stratagreen.com
              </a>
            </div>
            <div className="hidden md:block w-px h-12 bg-outline-variant/30 self-center"></div>
            <div className="space-y-1">
              <p className="font-label-caps text-label-caps text-secondary uppercase font-bold text-xs">Phone</p>
              <a className="font-headline-md text-xl font-bold text-primary hover:text-secondary transition-colors" href="tel:+1800STRATAG">
                +1 800-STRATA-G
              </a>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}
