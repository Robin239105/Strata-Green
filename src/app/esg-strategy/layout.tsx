import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ESG Strategy",
  description:
    "Our mandate fusing high-technology infrastructure with rigorous ecological stewardship, social prosperity, and radical governance.",
  alternates: { canonical: "/esg-strategy" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
