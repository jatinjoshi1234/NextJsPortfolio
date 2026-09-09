import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/NavBar";
import { siteConfig } from "./data/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.personal.name}`,
  },

  description: siteConfig.seo.description,

  keywords: [...siteConfig.seo.keywords],

  authors: [
    {
      name: siteConfig.personal.name,
    },
  ],

  creator: siteConfig.personal.name,

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Navbar />
      {children}</body>
    </html>
  );
}
