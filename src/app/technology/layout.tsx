import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Advanced solar capture, deepwater floating offshore wind, and PEM green hydrogen systems engineered for gigawatt-scale clean energy.",
  alternates: { canonical: "/technology" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
