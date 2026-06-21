import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "In-depth case studies of Strata Green's flagship renewable installations and their measurable energy and ESG outcomes.",
  alternates: { canonical: "/case-studies" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
