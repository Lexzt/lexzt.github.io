import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Keith Fong — Resume",
  description:
    "Resume of Keith Fong — Engineering Lead at Wise. Cards, payments, fintech, AI automation, and homelab infrastructure.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
