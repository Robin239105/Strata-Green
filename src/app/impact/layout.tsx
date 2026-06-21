import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Transparent, measurable environmental and social impact across Strata Green's global clean energy infrastructure.",
  alternates: { canonical: "/impact" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
