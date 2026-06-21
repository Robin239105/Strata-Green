import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Innovation Lab",
  description:
    "Incubating the next epoch of clean energy: ocean thermal, quantum photovoltaics, autonomous micro-grids, and synthetic fuels.",
  alternates: { canonical: "/innovation-lab" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
