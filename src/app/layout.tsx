import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import SiteHeader from "@/components/SiteHeader";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Harsh Vishnoi — AI Software Engineer & Full-Stack Developer",
  description:
    "AI Software Engineer & Full-Stack Developer building intelligent, production-ready software that scales. LangGraph, RAG, AWS Bedrock, React, Next.js, FastAPI.",
  keywords: [
    "Harsh Vishnoi",
    "AI Software Engineer",
    "Full Stack Developer",
    "LangGraph",
    "RAG",
    "Next.js Developer",
  ],
  authors: [{ name: "Harsh Vishnoi" }],
  openGraph: {
    title: "Harsh Vishnoi — AI Software Engineer & Full-Stack Developer",
    description: "Building intelligent software that scales.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        {/* Force BMW theme as default on every visit */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(!t){localStorage.setItem('theme','aurora');}})();`,
          }}
        />
        <Providers>
          <Preloader />
          <ScrollProgress />
          <CustomCursor />
          <div className="ambient-glow" />
          <div className="grain" />
          <SiteHeader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
