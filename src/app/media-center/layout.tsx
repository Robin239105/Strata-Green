import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Center",
  description:
    "Press releases, keynotes, whitepapers, and thought leadership on the future of energy infrastructure.",
  alternates: { canonical: "/media-center" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
