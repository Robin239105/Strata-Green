import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the vanguard of energy architecture and help build the carbon-negative infrastructure of the next century.",
  alternates: { canonical: "/careers" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
