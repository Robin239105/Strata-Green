"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Activity, Sun, Wind, Droplets, Home } from "lucide-react";

/**
 * LiveOpsConsole — an interactive, real-time operations panel for the hero.
 *
 * Visitors toggle between energy sources and watch a streaming sparkline
 * redraw live, alongside generation, a "homes powered right now" figure and
 * a ticking CO2-avoided counter. The data is simulated but behaves like a
 * real telemetry feed (drift, momentum, per-source baselines).
 */

type SourceKey = "solar" | "wind" | "hydrogen";

const SOURCES: Record<
  SourceKey,
  { label: string; base: number; color: string; icon: typeof Sun }
> = {
  solar: { label: "Solar", base: 14.2, color: "#b7f569", icon: Sun },
  wind: { label: "Wind", base: 8.6, color: "#34d399", icon: Wind },
  hydrogen: { label: "Hydrogen", base: 2.1, color: "#7dd3fc", icon: Droplets },
};

const POINTS = 40;
const HOMES_PER_GW = 815000; // approximate households served per GW

// Deterministic seed so server and client render identically (no hydration
// mismatch). Live variation comes from the streaming interval after mount.
function seedSeries(base: number) {
  return Array.from({ length: POINTS }, (_, i) => {
    const wave = Math.sin(i / 3) * base * 0.06;
    const ripple = Math.sin(i / 1.7 + base) * base * 0.025;
    return base + wave + ripple;
  });
}

export default function LiveOpsConsole() {
  const [source, setSource] = useState<SourceKey>("solar");
  const [series, setSeries] = useState<Record<SourceKey, number[]>>(() => ({
    solar: seedSeries(SOURCES.solar.base),
    wind: seedSeries(SOURCES.wind.base),
    hydrogen: seedSeries(SOURCES.hydrogen.base),
  }));
  const [co2, setCo2] = useState(12342891);
  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const tick = setInterval(() => {
      setSeries((prev) => {
        const next = { ...prev };
        (Object.keys(SOURCES) as SourceKey[]).forEach((key) => {
          const base = SOURCES[key].base;
          const arr = prev[key];
          const last = arr[arr.length - 1];
          // Mean-reverting random walk so the line wanders but stays believable.
          const drift = (base - last) * 0.08;
          const noise = (Math.random() - 0.5) * base * 0.05;
          const value = Math.max(base * 0.7, last + drift + noise);
          next[key] = [...arr.slice(1), value];
        });
        return next;
      });
      setCo2((c) => c + Math.floor(Math.random() * 3) + 1);
    }, 1400);

    return () => clearInterval(tick);
  }, []);

  const active = SOURCES[source];
  const data = series[source];
  const current = data[data.length - 1];
  const total = useMemo(
    () =>
      (Object.keys(SOURCES) as SourceKey[]).reduce(
        (sum, key) => sum + series[key][series[key].length - 1],
        0
      ),
    [series]
  );
  const homes = Math.round((current * HOMES_PER_GW) / 1000) * 1000;

  // Build the sparkline path in a 0..100 x 0..100 viewBox.
  const { line, area } = useMemo(() => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const pts = data.map((v, i) => {
      const x = (i / (POINTS - 1)) * 100;
      const y = 100 - ((v - min) / range) * 86 - 7; // padded vertically
      return [x, y] as const;
    });
    const line = pts.map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`).join(" ");
    const area = `0,100 ${line} 100,100`;
    return { line, area };
  }, [data]);

  const prevChange = current - data[data.length - 2];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative w-full rounded-2xl border border-white/10 p-6 shadow-2xl bg-white/[0.04] backdrop-blur-xl"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-secondary-fixed animate-pulse" />
          <span className="font-label-caps text-xs text-white/60 tracking-wider">
            LIVE OPS CONSOLE
          </span>
        </div>
        <div className="text-[10px] font-mono text-secondary-fixed font-bold border border-secondary-fixed/30 bg-secondary-fixed/5 px-2 py-0.5 rounded">
          ONLINE
        </div>
      </div>

      {/* Source toggle */}
      <div
        role="tablist"
        aria-label="Energy source"
        className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-black/20 border border-white/5 mb-5"
      >
        {(Object.keys(SOURCES) as SourceKey[]).map((key) => {
          const s = SOURCES[key];
          const Icon = s.icon;
          const selected = key === source;
          return (
            <button
              key={key}
              role="tab"
              aria-selected={selected}
              onClick={() => setSource(key)}
              className={`group flex items-center justify-center gap-1.5 rounded-lg px-2 py-2 cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary-fixed/70 ${
                selected
                  ? "bg-white/10 shadow-inner"
                  : "hover:bg-white/[0.06]"
              }`}
            >
              <Icon
                className="h-3.5 w-3.5 transition-colors"
                style={{ color: selected ? s.color : "rgba(255,255,255,0.45)" }}
              />
              <span
                className={`font-label-caps text-[10px] tracking-wider transition-colors ${
                  selected ? "text-white" : "text-white/45"
                }`}
              >
                {s.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Streaming sparkline */}
      <div className="mb-5">
        <div className="flex justify-between items-baseline mb-2">
          <span className="font-label-caps text-[10px] text-white/40 font-bold tracking-wider">
            {active.label.toUpperCase()} GENERATION
          </span>
          <span
            className="text-[10px] font-mono font-bold"
            style={{ color: active.color }}
          >
            {prevChange >= 0 ? "▲" : "▼"} {Math.abs(prevChange).toFixed(2)} GW/s
          </span>
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="font-headline-md text-4xl text-white font-bold tracking-tight tabular-nums">
            {current.toFixed(2)}
          </span>
          <span className="text-lg font-normal text-white/50">GW</span>
        </div>
        <div className="relative h-20 w-full">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="h-full w-full overflow-visible"
          >
            <defs>
              <linearGradient id="ops-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={active.color} stopOpacity="0.35" />
                <stop offset="100%" stopColor={active.color} stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon points={area} fill="url(#ops-fill)" />
            <polyline
              points={line}
              fill="none"
              stroke={active.color}
              strokeWidth="1.6"
              strokeLinejoin="round"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              className="transition-all duration-700 ease-out"
            />
          </svg>
        </div>
      </div>

      {/* Homes powered — the human number */}
      <div className="flex items-center gap-3 rounded-xl bg-secondary-fixed/[0.07] border border-secondary-fixed/20 px-4 py-3 mb-5">
        <Home className="h-5 w-5 text-secondary-fixed shrink-0" />
        <div className="min-w-0">
          <div className="font-label-caps text-[10px] text-white/50 font-bold tracking-wider">
            HOMES POWERED RIGHT NOW
          </div>
          <div className="font-headline-md text-xl text-white font-bold tabular-nums">
            {homes.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Footer stats */}
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
        <div>
          <span className="block text-[10px] text-white/40 font-label-caps font-bold tracking-wider">
            TOTAL GRID OUTPUT
          </span>
          <span className="text-lg text-secondary-fixed font-bold tabular-nums">
            {total.toFixed(1)} GW
          </span>
        </div>
        <div>
          <span className="block text-[10px] text-white/40 font-label-caps font-bold tracking-wider">
            CO₂ AVOIDED YTD
          </span>
          <span className="text-lg text-white font-bold tabular-nums">
            {co2.toLocaleString()}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
