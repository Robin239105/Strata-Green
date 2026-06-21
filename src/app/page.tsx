"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Activity, Leaf, Users, Landmark } from "lucide-react";
import LiveOpsConsole from "@/components/LiveOpsConsole";

export default function Home() {
  return (
    <div className="bg-background text-on-background min-h-screen">
      {/* Section 1: Hero — "The Living Grid" (interactive energy field + live ops console) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with subtle Ken Burns zoom effect */}
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 14, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            alt="Strata Green cinematic clean energy wind farm at sunset"
            className="w-full h-full object-cover"
            src="/images/projects-hero-real.jpg"
          />
        </motion.div>

        {/* Gradient Overlays for legibility + depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/95 via-primary/80 to-primary/40 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/30 z-0" />
        <div className="absolute inset-0 bg-black/30 z-0" />

        <div className="relative z-10 w-full max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-20">

          {/* Left Column: Premium Typography & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-fixed opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-fixed"></span>
              </span>
              <span className="font-label-caps text-xs text-secondary-fixed font-bold tracking-widest">
                GIGAWATT SCALE ESG PLATFORM
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-headline-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight font-bold tracking-tight"
            >
              Engineering a <br />
              <span className="bg-gradient-to-r from-secondary-fixed via-emerald-300 to-[#a2e84c] bg-clip-text text-transparent">
                Sustainable Civilization.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body-lg text-base md:text-lg text-white/80 max-w-xl leading-relaxed"
            >
              Institutional-grade renewable infrastructure designed for a carbon-negative future. Leveraging advanced thermodynamic cycles and planetary-scale strategic assets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link
                href="/projects"
                className="group relative bg-secondary text-white px-8 py-4 rounded-lg font-label-caps text-label-caps text-sm tracking-wider font-bold hover:brightness-110 hover:shadow-lg hover:shadow-secondary/20 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Explore Ecosystem</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/investors"
                className="bg-white/5 backdrop-blur-md border border-white/15 text-white px-8 py-4 rounded-lg font-label-caps text-label-caps text-sm tracking-wider hover:bg-white/10 hover:border-white/20 transition-all text-center"
              >
                Download Prospectus
              </Link>
            </motion.div>

            {/* Inline trust strip */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-4 text-white/55"
            >
              {[
                { value: "24.9 GW", label: "Installed Capacity" },
                { value: "4 Continents", label: "Active Operations" },
                { value: "$4.2B", label: "Infrastructure CapEx" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-2">
                  <span className="font-headline-md text-lg text-white font-bold tabular-nums">
                    {stat.value}
                  </span>
                  <span className="font-label-caps text-[10px] tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Interactive Live Ops Console */}
          <div className="lg:col-span-5 relative">
            <LiveOpsConsole />
          </div>

        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="font-label-caps text-[10px] text-white/40 tracking-widest">
            SCROLL
          </span>
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
            <motion.span
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full bg-secondary-fixed"
            />
          </span>
        </motion.div>
      </section>

      {/* Section 2: Tech Ecosystem */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-32 px-6 md:px-margin-desktop max-w-container-max mx-auto"
        id="technology"
      >
        <div className="mb-16">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block">01. TECHNOLOGY REVOLUTION</span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Advanced Generation Hubs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Solar */}
          <Link
            href="/technology"
            className="group relative overflow-hidden rounded-xl h-96 bg-primary cursor-pointer hover:shadow-2xl transition-all duration-500"
          >
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
              alt="A vast expanse of high-efficiency solar panels angled toward a golden sunset in a pristine desert landscape."
              src="/images/tech-solar-farm.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
            <div className="absolute bottom-0 p-8 w-full">
              <h3 className="font-headline-md text-headline-md text-white mb-2">Solar Photovoltaics</h3>
              <p className="text-white/70 font-body-md text-sm mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                Ultra-dense tracking arrays with integrated AI-optimization for 40% higher yield.
              </p>
              <ArrowRight className="h-5 w-5 text-secondary-fixed group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
          {/* Wind */}
          <Link
            href="/technology"
            className="group relative overflow-hidden rounded-xl h-96 bg-primary cursor-pointer hover:shadow-2xl transition-all duration-500"
          >
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
              alt="Massive wind turbines standing atop misty rolling hills during an atmospheric blue hour dawn."
              src="/images/tech-wind-turbines.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
            <div className="absolute bottom-0 p-8 w-full">
              <h3 className="font-headline-md text-headline-md text-white mb-2">Offshore Wind</h3>
              <p className="text-white/70 font-body-md text-sm mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                Floating deep-water turbines harvesting consistent high-velocity currents.
              </p>
              <ArrowRight className="h-5 w-5 text-secondary-fixed group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
          {/* Hydrogen */}
          <Link
            href="/technology"
            className="group relative overflow-hidden rounded-xl h-96 bg-primary cursor-pointer hover:shadow-2xl transition-all duration-500"
          >
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
              alt="Highly technical green hydrogen electrolysis facility with polished steel pipes and glowing blue liquid tanks."
              src="/images/tech-hydrogen.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
            <div className="absolute bottom-0 p-8 w-full">
              <h3 className="font-headline-md text-headline-md text-white mb-2">Green Hydrogen</h3>
              <p className="text-white/70 font-body-md text-sm mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                Industrial-scale electrolysis powered by surplus wind and solar generation.
              </p>
              <ArrowRight className="h-5 w-5 text-secondary-fixed group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        </div>
      </motion.section>

      {/* Section 3: Global Footprint */}
      <section className="py-32 bg-primary text-white" id="impact">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-label-caps text-label-caps text-secondary-fixed mb-4 block">02. GLOBAL NETWORK</span>
            <h2 className="font-headline-lg text-headline-lg text-white mb-8">Strategic Planetary Expansion</h2>
            <p className="font-body-lg text-body-lg text-on-primary-container mb-12 opacity-80">
              Our assets are strategically positioned across 4 continents, interconnected via a private high-voltage direct current (HVDC) backbone to balance global energy loads in real-time.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-secondary-fixed">24.5 GW</div>
                <div className="font-label-caps text-label-caps text-on-primary-container opacity-60 mt-1">Installed Capacity</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary-fixed">12.3 GT</div>
                <div className="font-label-caps text-label-caps text-on-primary-container opacity-60 mt-1">CO2 Displaced Annually</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 ambient-glow"
          >
            <img
              className="w-full rounded-xl opacity-90 grayscale hover:grayscale-0 transition-all duration-1000"
              alt="A stylized global digital map illuminated with glowing green and blue node networks on a dark background."
              src="/images/projects-map.jpg"
            />
            <div className="absolute -top-4 -right-4 bg-secondary text-white px-6 py-4 rounded-lg shadow-xl flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-secondary-fixed animate-pulse" />
              <span className="font-label-caps text-label-caps text-[11px] font-bold tracking-widest">LIVE FEED: ACTIVE</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Institutional Trust */}
      <section className="py-32 px-6 md:px-margin-desktop max-w-container-max mx-auto" id="investors">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <img
              className="rounded-2xl shadow-2xl w-full object-cover"
              alt="A group of diverse, professional institutional investors in a bright, modern glass-walled boardroom discussing ESG strategy."
              src="/images/investors-boardroom.jpg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2"
          >
            <span className="font-label-caps text-label-caps text-secondary mb-4 block">03. INVESTOR RELATIONS</span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-8">Unparalleled Capital Reliability</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
              Strata Green provides institutional partners with de-risked exposure to green infrastructure through a diversified portfolio of Tier-1 strategic assets.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 border border-outline-variant/30 rounded-xl hover:bg-surface-container-low transition-colors">
                <Shield className="h-6 w-6 text-secondary p-1 bg-secondary-container/20 rounded-lg shrink-0" />
                <div>
                  <h4 className="font-headline-md text-headline-md text-primary mb-1">ESG Alpha+ Framework</h4>
                  <p className="text-on-surface-variant text-sm">Proprietary scoring system for hyper-transparent impact reporting.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 border border-outline-variant/30 rounded-xl hover:bg-surface-container-low transition-colors">
                <Activity className="h-6 w-6 text-secondary p-1 bg-secondary-container/20 rounded-lg shrink-0 animate-pulse" />
                <div>
                  <h4 className="font-headline-md text-headline-md text-primary mb-1">Predictive Yield Models</h4>
                  <p className="text-on-surface-variant text-sm">Real-time asset monitoring and algorithmic performance hedging.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: The Lab (Innovation) */}
      <section className="py-32 bg-surface-container-low" id="innovation">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop text-center">
          <span className="font-label-caps text-label-caps text-secondary mb-4 block">04. INNOVATION LAB</span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-16">Incubating the Next Epoch</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Link
              href="/innovation-lab"
              className="bg-white/80 backdrop-blur-md p-8 rounded-xl border border-outline-variant/20 hover:-translate-y-2 hover:shadow-lg transition-all text-left block"
            >
              <div className="font-technical-mono text-technical-mono text-secondary mb-4 text-xs tracking-wider font-bold">PROTO_01</div>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">Ocean Thermal</h3>
              <p className="text-sm text-on-surface-variant">Harnessing heat gradients in equatorial waters.</p>
            </Link>
            <Link
              href="/innovation-lab"
              className="bg-white/80 backdrop-blur-md p-8 rounded-xl border border-outline-variant/20 hover:-translate-y-2 hover:shadow-lg transition-all text-left block"
            >
              <div className="font-technical-mono text-technical-mono text-secondary mb-4 text-xs tracking-wider font-bold">PROTO_02</div>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">Quantum PV</h3>
              <p className="text-sm text-on-surface-variant">Theoretical 60% efficiency multi-junction cells.</p>
            </Link>
            <Link
              href="/innovation-lab"
              className="bg-white/80 backdrop-blur-md p-8 rounded-xl border border-outline-variant/20 hover:-translate-y-2 hover:shadow-lg transition-all text-left block"
            >
              <div className="font-technical-mono text-technical-mono text-secondary mb-4 text-xs tracking-wider font-bold">PROTO_03</div>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">Micro-Grid AI</h3>
              <p className="text-sm text-on-surface-variant">Fully autonomous energy distribution mesh.</p>
            </Link>
            <Link
              href="/innovation-lab"
              className="bg-white/80 backdrop-blur-md p-8 rounded-xl border border-outline-variant/20 hover:-translate-y-2 hover:shadow-lg transition-all text-left block"
            >
              <div className="font-technical-mono text-technical-mono text-secondary mb-4 text-xs tracking-wider font-bold">PROTO_04</div>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">Syn-Fuel Lab</h3>
              <p className="text-sm text-on-surface-variant">Carbon-neutral aviation fuel from atmospheric CO2.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6 & 7: Growth & Stats (Bento Grid) */}
      <section className="py-32 px-6 md:px-margin-desktop max-w-container-max mx-auto" id="esg">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 bg-primary rounded-2xl p-12 text-white relative overflow-hidden group min-h-[350px] flex flex-col justify-between"
          >
            <div className="relative z-10">
              <span className="font-label-caps text-label-caps text-secondary-fixed mb-4 block">05. STRATEGIC GROWTH</span>
              <h2 className="font-headline-lg text-headline-lg mb-8 max-w-lg">Join the Vanguard of Energy Architecture</h2>
              <Link
                href="/careers"
                className="bg-secondary-fixed text-primary px-8 py-4 rounded-lg font-label-caps text-label-caps font-bold hover:brightness-110 active:scale-95 transition-all inline-block"
              >
                View Careers
              </Link>
            </div>
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000"
              alt="A minimal, architectural office interior with large glass windows overlooking a sustainable city of the future."
              src="/images/careers-office.jpg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-4 bg-secondary-container rounded-2xl p-12 flex flex-col justify-between"
          >
            <h3 className="font-headline-md text-headline-md text-primary mb-6">Real-Time Impact</h3>
            <div className="space-y-8">
              <div>
                <div className="text-4xl font-bold text-primary">99.8%</div>
                <p className="text-on-secondary-container text-sm mt-1">Asset Uptime Across Grid</p>
                <div className="w-full bg-primary/10 h-1 mt-3 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[99.8%]" />
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">$4.2B</div>
                <p className="text-on-secondary-container text-sm mt-1">Active Infrastructure CapEx</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 8: Portfolio Spotlight */}
      <section className="py-32 bg-white" id="projects">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="flex justify-between items-end mb-16 border-b border-outline-variant/20 pb-6">
            <div>
              <span className="font-label-caps text-label-caps text-secondary mb-4 block">06. PORTFOLIO SPOTLIGHT</span>
              <h2 className="font-headline-lg text-headline-lg text-primary">Featured Projects</h2>
            </div>
            <Link
              className="font-label-caps text-label-caps text-primary border-b border-primary pb-1 font-bold hover:text-secondary hover:border-secondary transition-colors"
              href="/case-studies"
            >
              All Case Studies
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Link href="/case-studies" className="group cursor-pointer block">
              <div className="overflow-hidden rounded-2xl mb-6 aspect-video bg-surface-container-low">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="An expansive aerial view of an offshore wind farm in the North Sea."
                  src="/images/projects-northsea.jpg"
                />
              </div>
              <h4 className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-secondary transition-colors">North Sea Wind Hub Alpha</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">2.4 GW offshore installation powering 1.8 million households in Northern Europe.</p>
            </Link>
            <Link href="/case-studies" className="group cursor-pointer block">
              <div className="overflow-hidden rounded-2xl mb-6 aspect-video bg-surface-container-low">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Sophisticated hydrogen storage facility at night, illuminated with vibrant electric lime glow lights."
                  src="/images/projects-atacama.jpg"
                />
              </div>
              <h4 className="font-headline-md text-headline-md text-primary mb-2 group-hover:text-secondary transition-colors">The Atacama Hydrogen Cluster</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">Integrated solar-to-hydrogen facility producing 500,000 tons of green ammonia annually.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 9: Media Hub */}
      <section className="py-32 px-6 md:px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant/20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 flex flex-col justify-between">
            <div>
              <span className="font-label-caps text-label-caps text-secondary mb-4 block">07. MEDIA CENTER</span>
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Insights &amp; Keynotes</h2>
              <p className="text-on-surface-variant leading-relaxed">Stay updated with our latest thought leadership on the future of energy infrastructure.</p>
            </div>
            <Link
              href="/media-center"
              className="flex items-center gap-2 font-label-caps text-label-caps text-secondary font-bold hover:text-primary transition-colors mt-8"
            >
              <span>GO TO PRESS ROOM</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/media-center"
              className="p-6 bg-white border border-outline-variant/20 rounded-xl shadow-sm hover:shadow-md transition-shadow block"
            >
              <div className="font-technical-mono text-technical-mono text-secondary mb-4 text-xs font-bold">OCT 24, 2024</div>
              <h4 className="font-headline-md text-headline-md text-primary mb-3">Thermodynamic Limits in High-Density PV Tracking</h4>
              <p className="text-sm text-on-surface-variant">Whitepaper published in Global Energy Review.</p>
            </Link>
            <Link
              href="/media-center"
              className="p-6 bg-white border border-outline-variant/20 rounded-xl shadow-sm hover:shadow-md transition-shadow block"
            >
              <div className="font-technical-mono text-technical-mono text-secondary mb-4 text-xs font-bold">SEP 18, 2024</div>
              <h4 className="font-headline-md text-headline-md text-primary mb-3">CEO Keynote: The Decoupling of Growth and Carbon</h4>
              <p className="text-sm text-on-surface-variant">Watch the full presentation from COP29.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 10: ESG Commitment */}
      <section className="py-32 bg-tertiary text-white">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop text-center">
          <span className="font-label-caps text-label-caps text-secondary-fixed mb-4 block">08. ESG STRATEGY</span>
          <h2 className="font-headline-lg text-headline-lg mb-16 text-white">The Three Pillars of Permanence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Link href="/esg-strategy" className="group block">
              <div className="w-16 h-16 bg-secondary-fixed text-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="font-headline-md text-headline-md mb-3 text-white">Ecological Restoration</h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto">Projects designed to enhance local biodiversity and soil health during operations.</p>
            </Link>
            <Link href="/esg-strategy" className="group block">
              <div className="w-16 h-16 bg-secondary-fixed text-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-headline-md text-headline-md mb-3 text-white">Social Prosperity</h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto">Equitable job creation and energy democratization for developing grid regions.</p>
            </Link>
            <Link href="/esg-strategy" className="group block">
              <div className="w-16 h-16 bg-secondary-fixed text-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Landmark className="h-8 w-8" />
              </div>
              <h3 className="font-headline-md text-headline-md mb-3 text-white">Radical Governance</h3>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto">Real-time public ledgers for carbon displacement and ethical fund management.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 11: Final CTA */}
      <section className="relative py-48 overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-secondary),_transparent)]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-headline-display text-4xl md:text-5xl text-primary mb-8 font-bold leading-tight tracking-tight">
            Architect the Future With Us
          </h2>
          <p className="font-body-lg text-lg text-on-surface-variant mb-12 leading-relaxed">
            Whether you are an institutional partner looking for stable ESG returns or a visionary engineer ready to build the infrastructure of a century, Strata Green is the foundation.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/investors"
              className="bg-primary text-white px-10 py-5 rounded-lg font-label-caps text-label-caps text-sm tracking-wider font-bold hover:scale-105 active:scale-95 transition-all text-center min-w-[200px]"
            >
              Contact Advisory
            </Link>
            <Link
              href="/careers"
              className="bg-secondary text-white px-10 py-5 rounded-lg font-label-caps text-label-caps text-sm tracking-wider font-bold hover:scale-105 active:scale-95 transition-all text-center min-w-[200px]"
            >
              Explore Careers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

