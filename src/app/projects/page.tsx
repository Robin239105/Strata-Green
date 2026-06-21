"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, Wind, Globe, Cpu, ArrowRight, Activity, MapPin } from "lucide-react";

// Project Data
const initialProjects = [
  {
    id: 1,
    name: "Atacama Solar Hub",
    type: "Solar",
    location: "CHILE // LATAM",
    categoryLabel: "SOLAR HUB",
    desc: "Integrating 850MW of high-efficiency silicon arrays into the Chilean national grid with zero-loss transmission.",
    img: "/images/projects-atacama.jpg",
  },
  {
    id: 2,
    name: "North Sea Wind Project",
    type: "Wind",
    location: "UNITED KINGDOM // EU",
    categoryLabel: "OFFSHORE WIND",
    desc: "A deep-water installation utilizing floating turbine technology to harvest high-velocity gale currents.",
    img: "/images/projects-northsea.jpg",
  },
  {
    id: 3,
    name: "Fjord Hydrogen Plant",
    type: "Hydrogen",
    location: "NORWAY // SCANDINAVIA",
    categoryLabel: "H2 GENERATION",
    desc: "Pioneering electrolyzer systems powered by run-of-river hydro resources for carbon-neutral export.",
    img: "/images/projects-fjord.jpg",
  },
];

// Interactive map spots
const mapSpots = [
  { id: 1, name: "Nevada Arid Solar", region: "NORTH AMERICA", x: "20%", y: "35%" },
  { id: 2, name: "North Sea Wind Hub", region: "EUROPE", x: "48%", y: "45%" },
  { id: 3, name: "Pilbara Hydrogen Network", region: "AUSTRALIA", x: "80%", y: "60%" },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [hoveredSpot, setHoveredSpot] = useState<typeof mapSpots[0] | null>(null);

  const filteredProjects = filter === "All"
    ? initialProjects
    : initialProjects.filter(p => p.type === filter);

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden min-h-screen">
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-margin-desktop">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          
          <div className="z-10 space-y-6">
            <span className="font-label-caps text-label-caps text-secondary block">
              GLOBAL INFRASTRUCTURE
            </span>
            <h1 className="font-headline-display text-headline-lg-mobile md:text-headline-display text-primary leading-tight">
              A Global Grid of <br />
              <span className="text-secondary">Innovation.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Explore our active and upcoming projects across six continents, driving the transition to decentralized green energy through precision engineering.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-secondary text-white px-8 py-4 rounded font-label-caps text-label-caps tracking-widest hover:brightness-110 transition-all font-bold shadow-sm shadow-secondary/10 cursor-pointer">
                VIEW ACTIVE PROJECTS
              </button>
              <button className="border border-outline px-8 py-4 rounded font-label-caps text-label-caps tracking-widest hover:bg-surface-container-low transition-all cursor-pointer">
                DATA REPORTS
              </button>
            </div>
          </div>

          <div className="relative lg:h-[600px] w-full rounded-xl overflow-hidden glass-card ambient-glow border border-outline-variant/30 shadow-lg">
            <img
              alt="Strata Green Map Overview"
              className="w-full h-full object-cover grayscale-[0.2] brightness-[0.8]"
              src="/images/projects-map.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end bg-black/30 backdrop-blur-md p-4 rounded-lg border border-white/10 text-white">
              <div>
                <div className="font-technical-mono text-technical-mono opacity-70 mb-1 uppercase tracking-tighter">
                  Live Network Status
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  <span className="font-label-caps text-label-caps">
                    99.98% Operational Efficiency
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Interactive Project Explorer */}
      <section className="py-24 md:py-32 bg-surface-container-lowest border-y border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop space-y-16">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-outline-variant/20 pb-8">
            <div className="space-y-4">
              <h2 className="font-headline-lg text-headline-lg text-primary">Project Explorer</h2>
              <div className="flex flex-wrap gap-3">
                {["All", "Solar", "Wind", "Hydrogen"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-1.5 rounded-full font-label-caps text-label-caps transition-all cursor-pointer ${
                      filter === cat
                        ? "bg-secondary text-white font-bold"
                        : "bg-surface-container-high text-on-surface-variant hover:bg-secondary/15"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bento-style Map Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Map Canvas */}
            <div className="lg:col-span-8 relative rounded-xl bg-primary h-[600px] overflow-hidden border border-outline/10 ambient-glow">
              <div className="absolute inset-0 opacity-40">
                <img
                  className="w-full h-full object-cover mix-blend-luminosity"
                  alt="Stylized world map graphic"
                  src="/images/projects-map.jpg"
                />
              </div>

              {/* Pulsing spots */}
              {mapSpots.map((spot) => (
                <div
                  key={spot.id}
                  style={{ left: spot.x, top: spot.y }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
                  onMouseEnter={() => setHoveredSpot(spot)}
                  onMouseLeave={() => setHoveredSpot(null)}
                >
                  <div className="w-4 h-4 bg-secondary rounded-full relative z-10 shadow-md"></div>
                  <div className="absolute -inset-2 bg-secondary/30 rounded-full map-pulse"></div>
                  
                  {hoveredSpot?.id === spot.id && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white p-3 rounded-lg shadow-xl min-w-[160px] border border-outline-variant/30 text-left z-50">
                      <p className="font-label-caps text-[9px] text-secondary font-bold">{spot.region}</p>
                      <p className="font-bold text-primary text-xs mt-0.5">{spot.name}</p>
                    </div>
                  )}
                </div>
              ))}

              {/* Overlay data */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-6 rounded-lg border border-outline-variant/30 w-64 shadow-lg">
                <div className="mb-4">
                  <p className="font-label-caps text-[10px] text-primary/60 mb-1 font-bold">GLOBAL CAPACITY</p>
                  <p className="font-headline-md text-primary font-bold">4.5 <span className="text-body-md font-normal">TW</span></p>
                </div>
                <div className="horizontal-hairline mb-4"></div>
                <div>
                  <p className="font-label-caps text-[10px] text-primary/60 mb-1 font-bold">CO2 AVOIDED</p>
                  <p className="font-headline-md text-secondary font-bold">12.3 <span className="text-body-md font-normal">GT</span></p>
                </div>
              </div>
            </div>

            {/* Technical Details Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="glass-card p-6 rounded-xl border border-outline-variant/30 flex-1 flex flex-col justify-between shadow-sm">
                <div>
                  <h3 className="font-label-caps text-label-caps text-primary mb-6 font-bold">REGIONAL ALLOCATION</h3>
                  <div className="space-y-6">
                    {[
                      { label: "EU/UK Cluster", pct: "38%", w: "w-[38%]" },
                      { label: "Americas Hub", pct: "29%", w: "w-[29%]" },
                      { label: "APAC Network", pct: "21%", w: "w-[21%]" },
                    ].map((item, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between font-technical-mono text-technical-mono text-xs text-on-surface-variant">
                          <span>{item.label}</span>
                          <span>{item.pct}</span>
                        </div>
                        <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                          <div className={`h-full bg-secondary ${item.w}`}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-primary p-6 rounded-xl text-white space-y-3 shadow-md mt-6">
                  <Cpu className="h-6 w-6 text-secondary-fixed" />
                  <h4 className="font-headline-md text-lg font-bold">Real-time Feed</h4>
                  <p className="text-white/60 font-body-md text-xs leading-relaxed">
                    Precision monitoring of 2,400+ sensor nodes across the global infrastructure layer.
                  </p>
                  <button className="text-secondary-fixed font-label-caps text-[12px] flex items-center gap-1 hover:translate-x-1 transition-transform font-bold cursor-pointer">
                    <span>ACCESS TERMINAL</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="mb-16">
            <span className="font-label-caps text-label-caps text-secondary mb-4 block">PORTFOLIO SPOTLIGHT</span>
            <h2 className="font-headline-lg text-headline-lg text-primary">Strategic Installations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="group flex flex-col bg-surface-bright border border-outline-variant/30 rounded-lg overflow-hidden ambient-glow transition-all duration-300 hover:-translate-y-2 shadow-sm"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={proj.name}
                    src={proj.img}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded font-label-caps text-[10px] shadow-sm font-bold text-primary">
                    {proj.categoryLabel}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-2">{proj.name}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{proj.desc}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="horizontal-hairline"></div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-technical-mono text-technical-mono text-outline font-bold">{proj.location}</span>
                      <ArrowRight className="text-primary group-hover:text-secondary group-hover:translate-x-1.5 transition-all" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <button className="border-b-2 border-primary text-primary font-label-caps text-label-caps pb-2 hover:text-secondary hover:border-secondary transition-all font-bold cursor-pointer">
              EXPLORE FULL PIPELINE (40+ PROJECTS)
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
