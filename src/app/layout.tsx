import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keith Fong — Engineering Lead",
  description:
    "Engineering Lead at Wise. Building cards products, automating things, and occasionally playing pool.",
  other: {
    "google-site-verification": "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
