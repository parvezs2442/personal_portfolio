import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parvez Saifi | Full Stack Developer & AI / Generative AI Developer",
  description: "Full Stack Developer and AI & Generative AI Developer with a B.Tech in Information Technology (2026). Skilled in React.js, Next.js, TypeScript, Node.js, Express.js, Python, FastAPI, LangChain, LangGraph, RAG, and Model Context Protocol (MCP).",
  keywords: [
    "Parvez Saifi",
    "Full Stack Developer",
    "AI Developer",
    "Generative AI Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "Node.js",
    "Express.js",
    "LangChain",
    "LangGraph",
    "RAG",
    "Model Context Protocol",
    "MCP",
    "Qdrant",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "AWS",
    "Enterprise RAG Assistant",
    "AI Agent Automation Platform",
    "ResumePilot",
    "CodeSync",
    "TrackHire"
  ],
  authors: [{ name: "Parvez Saifi" }],
  creator: "Parvez Saifi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://parvezsaifi.vercel.app",
    title: "Parvez Saifi | Full Stack Developer & AI / Generative AI Developer",
    description: "Full Stack Developer and AI & Generative AI Developer (B.Tech IT 2026). Specializing in React, Next.js, Python, FastAPI, LangChain, LangGraph, RAG, and MCP.",
    siteName: "Parvez Saifi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parvez Saifi | Full Stack Developer & AI / Generative AI Developer",
    description: "Full Stack Developer and AI & Generative AI Developer (B.Tech IT 2026). Specializing in React, Next.js, Python, FastAPI, LangChain, LangGraph, RAG, and MCP.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground font-sans selection:bg-indigo-500/20 selection:text-indigo-200">
        {children}
      </body>
    </html>
  );
}

