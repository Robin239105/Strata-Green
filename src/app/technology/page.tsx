"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Wind, Globe, Leaf, Settings } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export default function TechnologyPage() {
  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden min-h-screen">
      
      {/* Page Header */}
      <PageHeader
        eyebrow="Technical Architecture"
        title="The Engineering of a"
        titleAccent="Sustainable Future"
        subtitle="From micro-tracking solar arrays to deepwater floating wind turbines and PEM green hydrogen cells, we are redefining global clean energy through precision engineering."
        actions={[
          { label: "Explore Technology", href: "#technology", variant: "primary" },
          { label: "View Specs", href: "/investors", variant: "ghost" },
        ]}
      />

      {/* Content Section: Solar Innovation */}
      <section className="py-40 bg-surface">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
              <span className="font-technical-mono text-technical-mono text-secondary-container bg-primary-container px-3 py-1 inline-block uppercase tracking-widest">
                Innovation Alpha
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Solar Innovation: High-Yield Photovoltaic Arrays
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Our next-generation solar arrays utilize multi-junction cell technology to achieve spectral efficiency exceeding 38%. Integrated micro-tracking hardware ensures optimal photon capture from dawn until dusk.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-4 pb-4">
                <div className="space-y-2">
                  <p className="font-technical-mono text-technical-mono text-outline uppercase tracking-tighter">Capture Efficiency</p>
                  <p className="font-headline-md text-headline-md text-primary">38.4%</p>
                </div>
                <div className="space-y-2">
                  <p className="font-technical-mono text-technical-mono text-outline uppercase tracking-tighter">Lifespan Rating</p>
                  <p className="font-headline-md text-headline-md text-primary">40+ Years</p>
                </div>
              </div>

              <div className="horizontal-hairline mb-6" />

              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-secondary h-5 w-5 mt-1 flex-shrink-0" />
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    Self-cleaning graphene coating for maintenance-free operation.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="text-secondary h-5 w-5 mt-1 flex-shrink-0" />
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    Modular rack system for rapid institutional deployment.
                  </span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-secondary-fixed/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative glass-card technical-border p-1 rounded-xl">
                  <img
                    className="w-full h-[500px] object-cover rounded-lg"
                    alt="A high-angle view of a state-of-the-art solar farm"
                    src="/images/tech-solar-farm.jpg"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Content Section: Wind Power */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            
            <div className="lg:col-span-7">
              <div className="technical-border glass-card p-1 rounded-xl">
                <img
                  className="w-full h-[500px] object-cover rounded-lg"
                  alt="Three massive white offshore wind turbines"
                  src="/images/tech-wind-turbines.jpg"
                />
              </div>
            </div>

            <div className="lg:col-span-5 pl-0 lg:pl-12 space-y-6">
              <span className="font-technical-mono text-technical-mono text-on-secondary-container bg-secondary-fixed/20 px-3 py-1 inline-block uppercase tracking-widest">
                Aero Dynamics
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Wind Power: High-Efficiency Turbines
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Our helical turbine blades are precision-engineered using carbon-fiber composites to maximize torque at low wind speeds. Designed for both offshore and onshore environments, they represent the pinnacle of kinetic energy conversion.
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="p-6 technical-border hover:bg-surface-container-low transition-all duration-300 group rounded-xl">
                  <div className="flex justify-between items-center mb-4">
                    <Wind className="h-9 w-9 text-primary group-hover:text-secondary transition-colors" />
                    <span className="font-technical-mono text-technical-mono text-outline">001-ALPHA</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-2 text-primary">Offshore Hybrid</h3>
                  <p className="font-body-md text-on-surface-variant text-sm">
                    Deep-sea floating platforms for un-tethered energy generation in high-current zones.
                  </p>
                </div>
                
                <div className="p-6 technical-border hover:bg-surface-container-low transition-all duration-300 group rounded-xl">
                  <div className="flex justify-between items-center mb-4">
                    <Globe className="h-9 w-9 text-primary group-hover:text-secondary transition-colors" />
                    <span className="font-technical-mono text-technical-mono text-outline">002-TERRA</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-2 text-primary">Onshore Modular</h3>
                  <p className="font-body-md text-on-surface-variant text-sm">
                    Compact footprint with high-density output, ideal for micro-grid integration.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Content Section: Hydrogen Electrolysis (Bento Grid) */}
      <section className="py-40 bg-surface">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Hydrogen Electrolysis: The Future of Zero-Emission Fuel
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Converting surplus renewable energy into liquid hydrogen for global transport and heavy industrial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-gutter md:h-[800px]">
            {/* Main Bento Card */}
            <div className="md:col-span-2 md:row-span-2 technical-border bg-white overflow-hidden group flex flex-col justify-between rounded-xl shadow-sm">
              <div className="h-1/2 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Hydrogen Electrolyzer Unit"
                  src="/images/tech-hydrogen.jpg"
                />
              </div>
              <div className="p-8 h-1/2 flex flex-col justify-between">
                <div>
                  <p className="font-technical-mono text-technical-mono text-secondary uppercase mb-2">Core Technology</p>
                  <h3 className="font-headline-md text-headline-md mb-4 text-primary">PEM Electrolyzer Unit</h3>
                  <p className="font-body-md text-on-surface-variant text-sm">
                    Our Proton Exchange Membrane (PEM) technology allows for rapid response to fluctuating energy inputs, perfect for solar and wind balancing.
                  </p>
                </div>
                <div className="space-y-2 pt-4">
                  <div className="w-full bg-surface-container h-1">
                    <div className="bg-secondary-fixed w-3/4 h-full" />
                  </div>
                  <p className="font-technical-mono text-[10px] text-outline">CURRENT EFFICIENCY: 82%</p>
                </div>
              </div>
            </div>

            {/* Secondary Bento Card */}
            <div className="md:col-span-2 technical-border glass-card p-8 flex items-center justify-between rounded-xl shadow-sm">
              <div className="max-w-[70%] space-y-2">
                <h3 className="font-headline-md text-headline-md text-primary">Zero Carbon Logistics</h3>
                <p className="font-body-md text-on-surface-variant text-sm">
                  Closed-loop systems ensuring that every gram of hydrogen is produced using 100% green electrons.
                </p>
              </div>
              <Leaf className="h-16 w-16 text-secondary-fixed-dim" />
            </div>

            {/* Tertiary Bento Cards */}
            <div className="technical-border bg-primary p-8 flex flex-col justify-end rounded-xl shadow-md text-white">
              <p className="font-headline-md text-3xl font-bold text-on-primary">24/7</p>
              <p className="font-technical-mono text-technical-mono text-on-primary/60 uppercase">Operational Uptime</p>
            </div>
            
            <div className="technical-border bg-secondary-fixed p-8 flex flex-col justify-end rounded-xl shadow-md text-primary">
              <p className="font-headline-md text-3xl font-bold text-primary">10x</p>
              <p className="font-technical-mono text-technical-mono text-primary/60 uppercase">Energy Density</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-white">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop text-center space-y-8">
          <h2 className="font-headline-lg text-headline-lg text-on-primary">
            Ready to transition to the next era of energy?
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/investors" className="bg-secondary-fixed text-primary px-12 py-5 font-label-caps text-label-caps hover:brightness-110 transition-all font-bold shadow-md shadow-secondary-fixed/20 border border-secondary-fixed">
              INVEST IN STRATA
            </Link>
            <Link href="mailto:tech@stratagreen.io" className="border border-on-primary/30 text-on-primary px-12 py-5 font-label-caps text-label-caps hover:bg-on-primary/10 transition-all">
              CONTACT ENGINEERING
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
