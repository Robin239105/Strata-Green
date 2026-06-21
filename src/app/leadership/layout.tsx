import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the executive team and board architecting Strata Green's carbon-negative legacy and ESG governance.",
  alternates: { canonical: "/leadership" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
