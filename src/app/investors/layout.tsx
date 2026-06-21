import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Relations",
  description:
    "Sustainable growth, precision performance, and superior de-risked returns in green infrastructure for the ESG-conscious investor.",
  alternates: { canonical: "/investors" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
