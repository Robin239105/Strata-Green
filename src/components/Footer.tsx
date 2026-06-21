"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Linkedin,
  Twitter,
  Youtube,
  MapPin,
  ArrowUp,
} from "lucide-react";
import { LogoMark } from "@/components/Logo";

const linkColumns = [
  {
    title: "Platform",
    links: [
      { name: "Technology", path: "/technology" },
      { name: "Projects", path: "/projects" },
      { name: "Innovation Lab", path: "/innovation-lab" },
      { name: "Case Studies", path: "/case-studies" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Leadership", path: "/leadership" },
      { name: "Careers", path: "/careers" },
      { name: "Media Center", path: "/media-center" },
      { name: "Impact", path: "/impact" },
    ],
  },
  {
    title: "Investors & ESG",
    links: [
      { name: "Investor Portal", path: "/investors" },
      { name: "ESG Strategy", path: "/esg-strategy" },
      { name: "Net Zero Roadmap", path: "/esg-strategy" },
      { name: "Sustainability Report", path: "/esg-strategy" },
    ],
  },
];

const offices = [
  { city: "London", role: "Global HQ", phone: "+44 (0) 20 7946 0123" },
  { city: "Berlin", role: "EU Operations", phone: "+49 30 1234 5678" },
  { city: "Singapore", role: "APAC Hub", phone: "+65 6789 0123" },
];

const socials = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "X", icon: Twitter, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="relative w-full bg-primary text-on-primary overflow-hidden">
      {/* Oversized brand watermark */}
      <LogoMark className="pointer-events-none absolute -right-10 -top-16 h-72 w-72 opacity-[0.04] rotate-12" />
      {/* Top hairline accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-secondary-fixed/40 to-transparent" />

      <div className="relative max-w-container-max mx-auto px-6 md:px-margin-desktop">
        {/* Upper band: brand + newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 pb-14 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" aria-label="Strata Green home" className="group flex items-center gap-2.5 w-fit">
              <LogoMark className="h-9 w-9" />
              <span className="font-headline-md font-bold text-xl tracking-[0.14em] text-white">
                STRATA<span className="text-secondary-fixed">GREEN</span>
              </span>
            </Link>
            <p className="font-body-md text-body-md text-white/60 max-w-sm leading-relaxed">
              Engineering the foundation of a carbon-neutral civilization through
              institutional-grade, decentralized energy infrastructure.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="grid place-items-center h-10 w-10 rounded-full border border-white/15 text-white/70 hover:text-primary hover:bg-secondary-fixed hover:border-secondary-fixed transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-fixed/60"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-7 lg:pl-10 lg:border-l border-white/10">
            <span className="font-label-caps text-label-caps text-secondary-fixed font-bold">
              The Energy Briefing
            </span>
            <h3 className="font-headline-md text-headline-md text-white mt-3 mb-2">
              Quarterly intelligence on infrastructure & ESG markets.
            </h3>
            <p className="font-body-md text-sm text-white/55 mb-6 max-w-md leading-relaxed">
              Join institutional partners receiving our research, project
              milestones, and grid telemetry highlights. No noise.
            </p>

            {submitted ? (
              <div className="flex items-center gap-2 rounded-xl bg-secondary-fixed/10 border border-secondary-fixed/30 px-4 py-3.5 text-secondary-fixed font-label-caps text-xs">
                <span className="h-2 w-2 rounded-full bg-secondary-fixed" />
                You&apos;re subscribed — welcome aboard.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md"
              >
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@institution.com"
                  className="flex-1 rounded-xl bg-white/5 border border-white/15 px-4 py-3.5 text-sm text-white placeholder:text-white/35 outline-none focus:border-secondary-fixed/60 focus:bg-white/[0.07] transition-colors"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-1.5 rounded-xl bg-secondary-fixed text-primary px-6 py-3.5 font-label-caps text-label-caps font-bold hover:brightness-105 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-fixed/60 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  Subscribe
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Middle band: link columns + offices */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12 py-14">
          {linkColumns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="font-label-caps text-label-caps text-secondary-fixed mb-5 font-bold">
                {col.title}
              </h4>
              <ul className="space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="group inline-flex items-center gap-1 font-body-md text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.name}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-secondary-fixed" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Offices */}
          <div className="col-span-2 lg:col-span-6 lg:pl-8 lg:border-l border-white/10">
            <h4 className="font-label-caps text-label-caps text-secondary-fixed mb-5 font-bold">
              Global Offices
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {offices.map((o) => (
                <div key={o.city} className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-white">
                    <MapPin className="h-3.5 w-3.5 text-secondary-fixed shrink-0" />
                    <span className="font-headline-md text-base font-bold">{o.city}</span>
                  </div>
                  <div className="font-label-caps text-[10px] text-white/40 tracking-wider">
                    {o.role}
                  </div>
                  <a
                    href={`tel:${o.phone.replace(/[^+\d]/g, "")}`}
                    className="block font-technical-mono text-xs text-white/55 hover:text-secondary-fixed transition-colors"
                  >
                    {o.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-x-6 gap-y-2 text-center sm:text-left">
            <p className="font-label-caps text-[10px] text-white/40 tracking-widest">
              © {currentYear} Strata Green Holdings PLC
            </p>
            <span className="hidden sm:inline h-3 w-px bg-white/15" />
            <span className="inline-flex items-center gap-1.5 font-label-caps text-[10px] text-white/40 tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-fixed opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary-fixed" />
              </span>
              ALL GRID SYSTEMS OPERATIONAL
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="font-label-caps text-[10px] text-white/40 hover:text-white transition-colors tracking-widest">
              Privacy
            </Link>
            <Link href="/terms" className="font-label-caps text-[10px] text-white/40 hover:text-white transition-colors tracking-widest">
              Terms
            </Link>
            <Link href="/cookies" className="font-label-caps text-[10px] text-white/40 hover:text-white transition-colors tracking-widest">
              Cookies
            </Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="grid place-items-center h-9 w-9 rounded-full border border-white/15 text-white/60 hover:text-primary hover:bg-secondary-fixed hover:border-secondary-fixed transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-fixed/60"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
