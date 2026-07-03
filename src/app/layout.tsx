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
  title: "Parvez Saifi | Full Stack Engineer & Systems Architect",
  description: "B.Tech IT engineer building production-grade, containerized full-stack platforms end-to-end. Specialized in Next.js, Node.js, WebSockets, MongoDB, PostgreSQL, and AWS ECS.",
  keywords: [
    "Parvez Saifi",
    "Full Stack Developer",
    "Software Engineer",
    "Systems Architect",
    "Next.js",
    "Node.js",
    "Express.js",
    "Socket.io",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS",
    "ResumePilot",
    "CodeSync",
    "TrackHire"
  ],
  authors: [{ name: "Parvez Saifi" }],
  creator: "Parvez Saifi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/parvezs2442",
    title: "Parvez Saifi | Full Stack Engineer & Systems Architect",
    description: "B.Tech IT graduate building production-grade full-stack applications. Focused on secure authentication, real-time systems, and clean API design.",
    siteName: "Parvez Saifi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parvez Saifi | Full Stack Engineer & Systems Architect",
    description: "B.Tech IT graduate building production-grade full-stack applications. Focused on secure authentication, real-time systems, and clean API design.",
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

