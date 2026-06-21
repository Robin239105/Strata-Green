"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, Lightbulb, Leaf, ArrowRight, ShieldCheck } from "lucide-react";

const allRoles = [
  {
    id: 1,
    title: "Senior Grid Systems Engineer",
    department: "Engineering",
    type: "Full-Time",
    location: "Berlin, DE",
    desc: "Designing resilient micro-grid infrastructures for urban environments.",
  },
  {
    id: 2,
    title: "Lead ML Scientist (Energy Forecasting)",
    department: "Engineering", // mapped to Engineering filter
    type: "Remote Friendly",
    location: "Singapore, SG",
    desc: "Building predictive models for variable renewable energy loads.",
  },
  {
    id: 3,
    title: "Director of Global Impact Strategy",
    department: "Strategy",
    type: "Executive",
    location: "London, UK",
    desc: "Liaising with institutional partners to scale carbon-neutral initiatives.",
  },
];

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState("All");

  const filteredRoles = selectedDept === "All"
    ? allRoles
    : allRoles.filter(role => role.department === selectedDept);

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-margin-desktop">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 z-10 space-y-8">
            <span className="font-label-caps text-label-caps text-secondary block uppercase tracking-widest font-bold">
              Career Opportunities
            </span>
            <h1 className="font-headline-display text-headline-lg-mobile md:text-headline-display text-primary leading-tight font-bold">
              Join the <span className="text-secondary">Vanguard</span> of Energy Engineering.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              We are building the architecture of a sustainable civilization. Join a team of physicists, data scientists, and engineers redefining the global energy landscape through precision and vision.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#roles" className="px-8 py-4 bg-primary text-white font-label-caps text-label-caps rounded hover:opacity-90 transition-all font-bold cursor-pointer">
                View Openings
              </a>
              <a href="#philosophy" className="px-8 py-4 border border-outline font-label-caps text-label-caps rounded hover:bg-surface-container-low transition-all cursor-pointer">
                Our Philosophy
              </a>
            </div>
          </div>

          {/* Right Visual Box */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="aspect-square rounded-xl overflow-hidden shadow-2xl ambient-glow transform rotate-3 border border-outline-variant/30">
              <img
                alt="Strata Green Lab"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                src="/images/careers-office.jpg"
              />
            </div>
            
            <div className="absolute -bottom-10 -left-10 glass-card p-8 rounded-lg shadow-xl max-w-xs border border-outline-variant/30 hidden md:block space-y-4">
              <ShieldCheck className="h-6 w-6 text-secondary" />
              <p className="font-technical-mono text-technical-mono text-primary text-xs leading-relaxed">
                Precision tracking: +42% efficiency gains in localized grid distribution models for Q3.
              </p>
            </div>
          </div>

        </div>

        {/* Background Gradient */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-fixed/10 to-transparent -z-10 pointer-events-none" />
      </section>

      {/* Culture Section */}
      <section className="py-32 bg-surface-container-low border-y border-outline-variant/20" id="philosophy">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop space-y-24">
          <div className="text-center space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold">Our Culture</h2>
            <div className="h-1 w-20 bg-secondary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            
            {/* Precision */}
            <div className="flex flex-col p-8 glass-card border border-outline-variant/30 rounded-xl shadow-sm space-y-6">
              <div className="w-12 h-12 flex items-center justify-center bg-secondary-container/20 rounded-full text-secondary">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="font-headline-md text-xl font-bold text-primary">Precision</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed text-sm">
                We believe that ecological stewardship requires surgical precision. Every watt measured, every system optimized, no detail overlooked.
              </p>
            </div>

            {/* Innovation */}
            <div className="flex flex-col p-8 glass-card border border-outline-variant/30 rounded-xl shadow-sm space-y-6">
              <div className="w-12 h-12 flex items-center justify-center bg-primary-fixed/20 rounded-full text-primary">
                <Lightbulb className="h-5 w-5" />
              </div>
              <h3 className="font-headline-md text-xl font-bold text-primary">Innovation</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed text-sm">
                The status quo is our only competitor. We cultivate an environment where radical ideas meet rigorous engineering to create the impossible.
              </p>
            </div>

            {/* Purpose */}
            <div className="flex flex-col p-8 glass-card border border-outline-variant/30 rounded-xl shadow-sm space-y-6">
              <div className="w-12 h-12 flex items-center justify-center bg-tertiary-fixed/20 rounded-full text-secondary">
                <Leaf className="h-5 w-5" />
              </div>
              <h3 className="font-headline-md text-xl font-bold text-primary">Purpose</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed text-sm">
                Our work isn&apos;t just professional; it&apos;s existential. We are driven by the singular goal of securing a sustainable future for the next generation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="py-32 px-6 md:px-margin-desktop" id="roles">
        <div className="max-w-container-max mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-outline-variant/20 pb-8">
            <div className="space-y-4">
              <h2 className="font-headline-lg text-headline-lg text-primary font-bold">Open Roles</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Filter by department to find your place in our global mission.
              </p>
            </div>
            <div className="flex gap-2">
              {["All", "Engineering", "Strategy"].map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-1.5 rounded-full font-label-caps text-label-caps transition-all cursor-pointer ${
                    (selectedDept === "All" && dept === "All") || selectedDept === dept
                      ? "bg-secondary text-white font-bold"
                      : "bg-surface-container-high text-on-surface-variant hover:bg-secondary/15"
                  }`}
                >
                  {dept === "All" ? "All Roles" : dept}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredRoles.map((role) => (
              <div
                key={role.id}
                className="group flex flex-col md:flex-row md:items-center justify-between p-8 border border-outline-variant/30 rounded-xl hover:border-secondary hover:bg-surface-bright transition-all duration-300 cursor-pointer shadow-sm"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="font-label-caps text-[10px] font-bold bg-primary-fixed/30 text-on-primary-fixed-variant px-3 py-1 rounded">
                      {role.department}
                    </span>
                    <span className="font-label-caps text-[10px] text-outline font-bold">
                      {role.type}
                    </span>
                  </div>
                  <h4 className="font-headline-md text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                    {role.title}
                  </h4>
                  <p className="font-body-md text-on-surface-variant text-sm">
                    {role.desc}
                  </p>
                </div>
                <div className="flex items-center gap-8 pt-4 md:pt-0">
                  <span className="font-technical-mono text-technical-mono text-on-surface-variant hidden lg:block">
                    {role.location}
                  </span>
                  <ArrowRight className="text-outline group-hover:text-secondary group-hover:translate-x-2 transition-all h-5 w-5" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center space-y-6">
            <p className="font-body-md text-body-md text-on-surface-variant">
              Don&apos;t see your role? We&apos;re always looking for exceptional talent.
            </p>
            <button className="text-secondary font-label-caps text-label-caps border-b border-secondary pb-1 hover:text-primary hover:border-primary transition-all font-bold cursor-pointer">
              Submit a General Application
            </button>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-32 bg-primary text-on-primary overflow-hidden">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            
            <div className="space-y-12">
              <h2 className="font-headline-lg text-headline-lg text-white font-bold">Global Footprint</h2>
              
              <div className="space-y-12">
                <div className="space-y-2">
                  <h5 className="font-label-caps text-label-caps text-secondary-fixed font-bold">London HQ</h5>
                  <p className="font-body-lg text-body-lg text-on-primary/70 leading-relaxed">
                    The historic heart of finance meets the frontier of ESG engineering. 12 Baker St, Marylebone.
                  </p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-label-caps text-label-caps text-secondary-fixed font-bold">Berlin Hub</h5>
                  <p className="font-body-lg text-body-lg text-on-primary/70 leading-relaxed">
                    Our technical engine room, located in the epicenter of European innovation. Rosenthaler Straße.
                  </p>
                </div>
                <div className="space-y-2">
                  <h5 className="font-label-caps text-label-caps text-secondary-fixed font-bold">Singapore Office</h5>
                  <p className="font-body-lg text-body-lg text-on-primary/70 leading-relaxed">
                    Driving sustainable transitions across the Asia-Pacific corridor. Marina Bay Financial Centre.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/5">
              <img
                alt="World Map Distribution"
                className="w-full h-full object-cover opacity-60"
                src="/images/careers-map.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
