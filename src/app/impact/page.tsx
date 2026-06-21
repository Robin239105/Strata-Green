"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Award, Users, Shield, ArrowUpRight, Play, Bolt } from "lucide-react";
import PageHeader from "@/components/PageHeader";

function Counter({ value, duration = 1.5 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const steps = Math.min(end, 60);
    const stepTime = (duration * 1000) / steps;
    const increment = Math.ceil(end / steps);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, duration, isInView]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function ImpactPage() {
  return (
    <div className="bg-surface text-on-surface font-body-md selection:bg-secondary-container selection:text-on-secondary-container overflow-x-hidden min-h-screen">
      
      {/* Page Header */}
      <PageHeader
        eyebrow="Annual Impact Report 2024"
        title="Measurable Impact."
        titleAccent="Meaningful Change."
        subtitle="Transparency in energy. Precision in ESG reporting. See how Strata Green is powering a greener globe through architectural infrastructure and advanced computational efficiency."
        actions={[
          { label: "View Live Grid Data", href: "/projects", variant: "primary" },
          { label: "Download ESG PDF", href: "/esg-strategy", variant: "ghost" },
        ]}
      />

      {/* Main Content */}
      <main className="relative z-10">
        
        {/* ESG Dashboard Section */}
        <section className="py-24 md:py-40 max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold">ESG Real-Time Metrics</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-lg">
                Our proprietary monitoring system provides audited, high-fidelity data on every kilowatt generated and every ton of carbon mitigated.
              </p>
            </div>
          </div>

          {/* Dashboard Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            
            {/* CO2 Reduction Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="md:col-span-8 glass-card p-8 rounded-xl flex flex-col h-[400px] justify-between border border-outline-variant/30 shadow-sm"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-1 font-bold">Carbon Mitigation</p>
                  <h3 className="font-headline-md text-xl font-bold text-primary">CO2 Reduction (Metric Tons)</h3>
                </div>
                <span className="bg-primary/5 text-primary px-3 py-1 rounded font-technical-mono text-technical-mono text-xs font-bold">Monthly Trend</span>
              </div>
              <div className="flex-grow flex items-end gap-3 md:gap-6 h-40">
                <div className="flex-grow flex items-end gap-2 h-full">
                  {[40, 55, 45, 70, 60, 85, 95].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: i * 0.1 }}
                      className={`w-full ${
                        i === 6
                          ? "bg-secondary-fixed hover:brightness-110"
                          : "bg-primary/10 hover:bg-primary"
                      } transition-colors rounded-t`}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-4 flex justify-between font-technical-mono text-[12px] text-on-surface-variant border-t border-outline-variant/20 pt-4">
                <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span><span className="font-bold text-primary">JUL (LIVE)</span>
              </div>
            </motion.div>

            {/* Circular Stat Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="md:col-span-4 glass-card p-8 rounded-xl flex flex-col justify-between items-center text-center border border-outline-variant/30 shadow-sm"
            >
              <div className="w-full text-left">
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-1 font-bold">Grid Portfolio</p>
                <h3 className="font-headline-md text-xl font-bold text-primary">Energy Mix</h3>
              </div>
              <div className="relative w-40 h-40 flex items-center justify-center my-6">
                <svg className="w-full h-full transform -rotate-90">
                  <circle className="text-surface-container-high" cx="80" cy="80" fill="transparent" r="64" stroke="currentColor" strokeWidth="10"></circle>
                  <motion.circle
                    className="text-secondary"
                    cx="80"
                    cy="80"
                    fill="transparent"
                    r="64"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeDasharray="402"
                    initial={{ strokeDashoffset: 402 }}
                    whileInView={{ strokeDashoffset: 120 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="font-headline-lg text-3xl font-bold text-primary leading-none">
                    <Counter value={72} />%
                  </span>
                  <span className="font-label-caps text-[9px] text-on-surface-variant mt-1 font-bold">Solar PV</span>
                </div>
              </div>
              <div className="w-full grid grid-cols-2 gap-2 text-left">
                <div className="p-2 rounded bg-surface-container-low border border-outline-variant/10">
                  <p className="font-technical-mono text-[9px] text-on-surface-variant uppercase font-bold">Wind</p>
                  <p className="font-headline-md text-primary text-base font-bold">24%</p>
                </div>
                <div className="p-2 rounded bg-surface-container-low border border-outline-variant/10">
                  <p className="font-technical-mono text-[9px] text-on-surface-variant uppercase font-bold">Hydro</p>
                  <p className="font-headline-md text-primary text-base font-bold">4%</p>
                </div>
              </div>
            </motion.div>

            {/* Big Number Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-4 glass-card p-8 rounded-xl border-t-4 border-t-secondary-fixed border-x border-b border-outline-variant/30 shadow-sm"
            >
              <Bolt className="text-secondary h-6 w-6 mb-4" />
              <p className="font-label-caps text-label-caps text-on-surface-variant mb-2 font-bold">Total Power Generated</p>
              <div className="flex items-baseline gap-2">
                <h4 className="font-headline-lg text-4xl font-bold text-primary">
                  <Counter value={1482} />
                </h4>
                <span className="font-headline-md text-lg text-on-surface-variant">TWh</span>
              </div>
              <div className="mt-6 flex items-center gap-2 text-secondary font-bold text-sm">
                <span>↑</span>
                <span className="font-technical-mono text-technical-mono">12.4% vs LY</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-4 glass-card p-8 rounded-xl border border-outline-variant/30 shadow-sm"
            >
              <Users className="text-primary h-6 w-6 mb-4" />
              <p className="font-label-caps text-label-caps text-on-surface-variant mb-2 font-bold">Communities Empowered</p>
              <div className="flex items-baseline gap-2">
                <h4 className="font-headline-lg text-4xl font-bold text-primary">
                  <Counter value={42} />
                </h4>
                <span className="font-headline-md text-lg text-on-surface-variant">Regions</span>
              </div>
              <div className="mt-6 text-on-surface-variant font-technical-mono text-xs leading-relaxed">
                Last connected: <span className="text-primary font-bold">Western Highlands Cluster</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="md:col-span-4 p-8 rounded-xl bg-primary text-on-primary shadow-md border border-primary/20 flex flex-col justify-between"
            >
              <Award className="text-secondary-fixed h-6 w-6 mb-4" />
              <p className="font-label-caps text-label-caps text-white/60 mb-2 font-bold">ESG Verification Score</p>
              <div className="flex items-baseline gap-2">
                <h4 className="font-headline-lg text-4xl font-bold text-white">AA+</h4>
              </div>
              <p className="mt-4 font-body-md text-white/70 text-xs leading-relaxed">
                Top 2% of global energy infrastructure providers by Carbon Trust.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sustainability Commitment */}
        <section className="bg-primary py-24 md:py-40 text-on-primary overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(#416900_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div className="space-y-8">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg leading-tight font-bold text-white animate-fade-in">
                Our Commitment to <br /><span className="text-secondary-fixed">Environmental Stewardship</span>
              </h2>
              <p className="font-body-lg text-body-lg text-white/80 leading-relaxed">
                At Strata Green, sustainability is not a secondary goal; it is the core architectural principle of our engineering. We believe that true impact requires a marriage of high-performance technology and ecological empathy.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed mt-3 flex-shrink-0"></span>
                  <div className="space-y-1">
                    <h4 className="font-headline-md text-lg font-bold text-white">Carbon Neutral Operations by 2026</h4>
                    <p className="text-white/60 font-body-md text-sm leading-relaxed">Reducing scope 1 and 2 emissions through direct electrification and asset retrofitting.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed mt-3 flex-shrink-0"></span>
                  <div className="space-y-1">
                    <h4 className="font-headline-md text-lg font-bold text-white">Biodiversity-First Land Management</h4>
                    <p className="text-white/60 font-body-md text-sm leading-relaxed">Implementing regenerative grazing and local flora restoration around every solar installation.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed mt-3 flex-shrink-0"></span>
                  <div className="space-y-1">
                    <h4 className="font-headline-md text-lg font-bold text-white">Circular Infrastructure Lifecycle</h4>
                    <p className="text-white/60 font-body-md text-sm leading-relaxed">Targeting 98% material recovery for end-of-life photovoltaic systems and turbine components.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative group">
              <div className="aspect-square bg-gradient-to-tr from-secondary-fixed to-primary-fixed-dim rounded-2xl overflow-hidden shadow-2xl relative border border-white/5">
                <img
                  alt="Sustainability biodiversity landscape"
                  className="w-full h-full object-cover mix-blend-multiply opacity-80"
                  src="/images/impact-forest.jpg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white/10 backdrop-blur-xl border border-white/20 w-24 h-24 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 cursor-pointer">
                    <Play className="h-10 w-10 text-white fill-white ml-1" />
                  </button>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-lg text-primary hidden md:block max-w-[240px] border border-outline-variant/30">
                <p className="font-technical-mono text-[9px] uppercase mb-1 font-bold">Efficiency Metric</p>
                <p className="font-headline-md text-lg font-bold text-secondary">0.02g CO2e/kWh</p>
                <p className="font-body-md text-xs opacity-70 leading-relaxed">Lifecycle average across entire Strata Green portfolio.</p>
              </div>
            </div>

          </div>
      </section>

      {/* Investor CTA Section */}
      <section className="py-24 max-w-container-max mx-auto px-6 md:px-margin-desktop text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-bold">Ready to invest in the horizon?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Our platform provides institutional grade data for the modern ESG investor. Gain direct access to our asset performance metrics and strategic growth plans.
          </p>
          <div className="pt-4">
            <Link href="/investors" className="bg-secondary-fixed text-primary px-12 py-5 rounded-lg font-headline-md text-xl hover:shadow-lg hover:shadow-secondary/20 transition-all duration-200 font-bold border border-secondary-fixed shadow-md shadow-secondary-fixed/20">
              Access Investor Portal
            </Link>
          </div>
        </div>
      </section>

      </main>

    </div>
  );
}
