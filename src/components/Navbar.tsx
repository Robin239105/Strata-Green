"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Logo, { LogoMark } from "@/components/Logo";

const mainNavItems = [
  { name: "Projects", path: "/projects" },
  { name: "Technology", path: "/technology" },
  { name: "ESG Strategy", path: "/esg-strategy" },
  { name: "Investors", path: "/investors" },
  { name: "Impact", path: "/impact" },
];

const secondaryNavItems = [
  { name: "Case Studies", path: "/case-studies" },
  { name: "Innovation Lab", path: "/innovation-lab" },
  { name: "Leadership", path: "/leadership" },
  { name: "Careers", path: "/careers" },
  { name: "Media Center", path: "/media-center" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsOpen(false);
    setDropdownOpen(false);
  }

  // Lock body scroll while the mobile drawer is open, and close on Escape.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header>
      {/* Floating glass "island" navbar */}
      <div
        className={`fixed inset-x-0 top-0 z-50 px-3 sm:px-4 transition-all duration-300 ${
          scrolled ? "pt-2 sm:pt-3" : "pt-3 sm:pt-5"
        }`}
      >
        <nav
          aria-label="Primary"
          className={`max-w-container-max mx-auto flex items-center justify-between gap-4 rounded-2xl border backdrop-blur-xl transition-all duration-300 pl-5 pr-3 sm:pr-3.5 ${
            scrolled
              ? "py-2 bg-surface/85 border-outline-variant/40 shadow-lg shadow-primary/5"
              : "py-2.5 bg-surface/65 border-white/40 shadow-xl shadow-primary/10"
          }`}
        >
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation (lg and up) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative font-label-caps text-label-caps transition-colors duration-200 py-1 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 rounded-sm ${
                    isActive
                      ? "text-secondary"
                      : "text-on-surface-variant hover:text-secondary"
                  }`}
                >
                  {item.name}
                  <span
                    className={`pointer-events-none absolute -bottom-1 left-0 h-0.5 rounded-full bg-secondary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Dropdown for More */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-haspopup="menu"
                aria-expanded={dropdownOpen}
                className={`flex items-center gap-1 font-label-caps text-label-caps transition-colors duration-200 py-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 rounded-sm ${
                  dropdownOpen || secondaryNavItems.some((item) => pathname === item.path)
                    ? "text-secondary"
                    : "text-on-surface-variant hover:text-secondary"
                }`}
              >
                <span>More</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-300 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-0"
                      aria-hidden="true"
                      onClick={() => setDropdownOpen(false)}
                    />
                    <motion.div
                      role="menu"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-3 w-56 rounded-xl bg-surface-container-lowest border border-outline-variant/30 p-2 shadow-xl z-10"
                    >
                      {secondaryNavItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                          <Link
                            key={item.name}
                            href={item.path}
                            role="menuitem"
                            className={`block px-4 py-2.5 rounded-lg font-label-caps text-[11px] transition-colors duration-200 ${
                              isActive
                                ? "bg-surface-container-low text-secondary font-bold"
                                : "text-on-surface-variant hover:bg-surface-container-low hover:text-secondary"
                            }`}
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Invest Button */}
            <Link
              href="/investors"
              className="group/cta relative overflow-hidden bg-gradient-to-r from-secondary-fixed to-emerald-400 text-primary px-5 xl:px-6 py-2.5 rounded-full font-label-caps text-label-caps hover:shadow-lg hover:shadow-secondary-fixed/30 active:scale-95 transition-all duration-200 flex items-center gap-1.5 font-bold whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
            >
              <span className="relative z-10">INVEST NOW</span>
              <ArrowRight className="relative z-10 h-3.5 w-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5" />
              {/* sheen sweep on hover */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover/cta:translate-x-full" />
            </Link>
          </div>

          {/* Mobile/Tablet Menu Toggle (below lg) */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-drawer"
            className="lg:hidden grid place-items-center h-10 w-10 rounded-xl text-primary hover:bg-surface-container-low transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60 cursor-pointer"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-primary/30 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-surface-container-lowest border-l border-outline-variant/30 shadow-2xl z-50 flex flex-col lg:hidden"
            >
              {/* Drawer header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-outline-variant/20">
                <span className="flex items-center gap-2.5">
                  <LogoMark className="h-7 w-7" />
                  <span className="font-headline-md font-bold text-primary text-lg tracking-[0.14em]">
                    STRATA<span className="text-secondary">GREEN</span>
                  </span>
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="grid place-items-center h-10 w-10 -mr-2 rounded-lg text-primary hover:bg-surface-container-low transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60 cursor-pointer"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Scrollable links */}
              <nav
                aria-label="Mobile"
                className="flex-1 overflow-y-auto px-6 py-6 space-y-7"
              >
                <div>
                  <p className="font-label-caps text-[10px] text-outline tracking-widest mb-3">
                    Explore
                  </p>
                  <div className="flex flex-col">
                    {mainNavItems.map((item) => {
                      const isActive = pathname === item.path;
                      return (
                        <Link
                          key={item.name}
                          href={item.path}
                          aria-current={isActive ? "page" : undefined}
                          className={`font-label-caps text-label-caps py-2.5 border-b border-outline-variant/10 transition-colors ${
                            isActive
                              ? "text-secondary font-bold"
                              : "text-on-surface-variant hover:text-secondary"
                          }`}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <p className="font-label-caps text-[10px] text-outline tracking-widest mb-3">
                    Company
                  </p>
                  <div className="flex flex-col">
                    {secondaryNavItems.map((item) => {
                      const isActive = pathname === item.path;
                      return (
                        <Link
                          key={item.name}
                          href={item.path}
                          aria-current={isActive ? "page" : undefined}
                          className={`font-label-caps text-[11px] py-2.5 border-b border-outline-variant/10 transition-colors ${
                            isActive
                              ? "text-secondary font-bold"
                              : "text-on-surface-variant hover:text-secondary"
                          }`}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </nav>

              {/* Sticky CTA */}
              <div className="px-6 py-5 border-t border-outline-variant/20">
                <Link
                  href="/investors"
                  className="w-full bg-secondary-fixed text-primary px-6 py-3.5 rounded-full font-label-caps text-label-caps hover:brightness-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm shadow-secondary-fixed/20 font-bold"
                >
                  <span>INVEST NOW</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
