"use client";

import React from "react";
import { Github } from "@/components/icons";

interface ProjectDetails {
  id: string;
  name: string;
  tagline: string;
  impactBadge: string;
  problem: string;
  challenge: string;
  solution: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  architectureNodes: {
    frontend: string[];
    backend: string[];
    database: string[];
    devops?: string[];
    special?: string[];
  };
  features: string[];
  engineeringDecisions: {
    title: string;
    text: string;
  }[];
}

export default function ProjectShowcase() {

  const projects: ProjectDetails[] = [
    {
      id: "resumepilot",
      name: "ResumePilot",
      tagline: "AI-Powered ATS Candidate Screening Platform",
      impactBadge: "~80% HR Screening Overhead Reduction",
      problem: "Traditional HR screening workflows waste thousands of developer-hours parsing resumes manually, yielding inconsistent keyword metrics and slow mock validation loops.",
      challenge: "Building a secure server-side pipeline to parse, analyze, and score resumes via Gemini API, preventing API key exposure and securing candidate-sensitive documents during extraction.",
      solution: "Architected a full-stack MERN application that handles file uploads, processes text extracts server-side, simulates mock interviews, and creates automated match-fit reports.",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "JWT", "RBAC", "Puppeteer", "Zod"],
      githubUrl: "https://github.com/parvezs2442/ai-resume-analyzer",
      liveUrl: "https://parvez-portfolio1.netlify.app",
      architectureNodes: {
        frontend: ["React.js SPA client", "Tailwind CSS Layouts", "Stateful upload controls"],
        backend: ["Node.js Server", "Express API Router", "Gemini Extraction Engine", "Puppeteer PDF Compiler"],
        database: ["MongoDB Document Store", "Indexed Candidate Profiles"],
        special: ["Refresh Token Rotation", "Zod Guard Validation"]
      },
      features: [
        "AI ATS Screen: Server-side Gemini engine analyzes candidate keywords and scores match criteria.",
        "Secure Session Layer: JWT authentication with RBAC, HTTP-Only cookies, and refresh token rotation.",
        "Puppeteer Reports: Automated, downloadable PDF fit-reports compiled server-side.",
        "Request Guard: Strong validation schema with Zod at every API endpoint."
      ],
      engineeringDecisions: [
        {
          title: "Secure Server-Side AI Pipelines",
          text: "To eliminate the risk of client-side API key leakage and reduce raw document size overhead, candidate resumes are parsed directly in the Node.js backend. This shields the Gemini LLM credentials, optimizes data payload size, and formats JSON outputs before persisting candidate profiles."
        },
        {
          title: "Robust JWT Rotation & RBAC",
          text: "Configured secure stateless authentication via JWTs inside HTTP-Only cookies. The authentication layer enforces Refresh Token Rotation. If any refresh token is reused, the security middleware automatically invalidates the entire token family session to prevent cookie-jacking. Database routes are guarded by strict role-based access checks."
        },
        {
          title: "Isolated PDF Compilation Engine",
          text: "Instead of compiling resumes and reports client-side, the system offloads parsing and layout rendering to a server-side headless Puppeteer compiler. This outputs optimized binary PDF streams, guaranteeing consistent report styling while keeping frontend bundles light."
        }
      ]
    },
    {
      id: "codesync",
      name: "CodeSync",
      tagline: "Real-Time Collaborative Coding IDE & Execution Sandbox",
      impactBadge: "Low-Latency Synchronized Editor State",
      problem: "Remote technical screening and collaborative peer programming demand low-latency, real-time shared workspace systems. Designing such systems requires solving race conditions and handling concurrent typing without data losses.",
      challenge: "Designing a schema and WebSocket event pipeline that propagates Monaco Editor states in real-time, avoiding race conditions during concurrent typing while persisting rooms securely.",
      solution: "Engineered a Socket.io-driven system that synchronizes code blocks bidirectionally, supports custom room keys, and containerizes services using Docker for clean hosting on AWS ECS.",
      techStack: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB", "Docker", "AWS (ECS/ECR)", "Monaco Editor"],
      githubUrl: "https://github.com/parvezs2442/CodeSync-AWS-DOCKER",
      architectureNodes: {
        frontend: ["React.js Client", "Monaco Editor IDE Integration", "Socket.io Client Listener"],
        backend: ["Node.js WebSocket Hub", "Express REST Controllers", "Namespace session pools"],
        database: ["MongoDB Session Collection", "Index-backed room search schemas"],
        devops: ["Docker Isolation", "Amazon ECR Registry", "AWS ECS Task Orchestration"]
      },
      features: [
        "Bidirectional WebSocket Sync: Real-time, concurrent document synchronization via Socket.io channels.",
        "Embedded IDE: Integrates Monaco Editor with custom language highlighting and themes.",
        "Optimized MongoDB Schema: Highly indexed collection strategies designed for high-frequency room writes.",
        "Containerization: Multi-tier Docker Compose setup separating client, socket server, and API logic."
      ],
      engineeringDecisions: [
        {
          title: "Indexed MongoDB Persistence Strategy",
          text: "With real-time editors causing rapid session save spikes, standard DB write schemes would saturate threads. I decoupled socket updates from database persistence, leveraging MongoDB compound indexing on active room keys. This allowed rapid retrieval without querying disk memory for every keystroke."
        },
        {
          title: "Decoupled WebSockets & REST Tiers",
          text: "To support independent scaling and prevent socket connections from exhausting web service threads, I separated the stateless API routing from the stateful Socket.io network node. This ensures that socket reconnections do not impact HTTP API route throughput."
        },
        {
          title: "Multi-Stage Docker & AWS ECS Deployment",
          text: "Docker container configurations compile the client, server, and socket processes independently into isolated layers. Pushing these image targets to Amazon ECR allows AWS ECS to scale container nodes dynamically, optimizing infrastructure costs."
        }
      ]
    },
    {
      id: "trackhire",
      name: "TrackHire",
      tagline: "Job Application Tracking SaaS & Relational Dashboard",
      impactBadge: "Highly Optimized Relational Prisma/PostgreSQL Core",
      problem: "Managing multiple job application timelines, interviews, contacts, and logs across unstructured spreadsheets leads to data fragmentation and lack of workflow analytics.",
      challenge: "Providing a performant dashboard that tracks hundreds of applications, renders activity logs, updates Kanban boards, and offers advanced analytics without latency degradation.",
      solution: "Developed a full-stack SaaS utilizing Next.js App Router for frontend caching, connected to a PostgreSQL relational database structured via Prisma ORM for quick lookups.",
      techStack: ["Next.js (App Router)", "TypeScript", "PostgreSQL", "Prisma ORM", "JWT", "REST APIs", "Tailwind CSS"],
      githubUrl: "https://github.com/parvezs2442/Job_Tracker",
      architectureNodes: {
        frontend: ["Next.js App Client", "Tailwind CSS Dashboard", "Kanban interactive state"],
        backend: ["Next.js Server Actions", "Node.js REST Controllers", "JWT middleware guards"],
        database: ["PostgreSQL Database", "Prisma ORM Models", "Index query optimization"],
        special: ["Data isolation middleware", "Analytical data filters"]
      },
      features: [
        "Kanban Tracking Board: Drag-and-drop workflow updates job application states instantly.",
        "Relational Schema: Rich links connecting job applications, interview timelines, and journal notes.",
        "Query Optimization: Customized queries using Prisma ORM to keep multi-user lookups responsive.",
        "Role-Based Data Isolation: Direct validation logic preventing data leakage between user datasets."
      ],
      engineeringDecisions: [
        {
          title: "Prisma Schema Normalization & Indexing",
          text: "Structured database tables in PostgreSQL with clear foreign keys and indices mapped to user IDs. Normalizing the relations across job applications, interview dates, and contacts prevented record duplication while indexing query fields reduced database read times."
        },
        {
          title: "Next.js App Router Caching and Layouts",
          text: "Leveraged Next.js App Router layout features and server-side request caching. By fetching data server-side within specific page segments, we minimized client-side JavaScript execution overhead, keeping load speeds extremely responsive."
        },
        {
          title: "Strict Role-Based User Isolation",
          text: "To ensure multi-tenant security, I programmed database interceptors via Prisma. Every dynamic transaction is filtered by the requesting user's verified token ID, making database routes completely immune to IDOR (Insecure Direct Object Reference) vulnerabilities."
        }
      ]
    }
  ];

  return (
    <section id="project-showcase" className="w-full py-24 border-b border-border/40 bg-background relative">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-mono font-bold text-accent tracking-widest uppercase">01 SELECTED WORK</span>
            <div className="h-px bg-border flex-grow" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Things I built and shipped
          </h2>
          <p className="text-muted-foreground/80 mt-4 text-sm md:text-base max-w-xl leading-relaxed">
            Explore production-grade projects. Designed to solve real bottlenecks, engineered with strict security standards, and containerized for global scaling.
          </p>
        </div>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projects.map((proj) => (
            <div key={proj.id} className="bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-accent/20 transition-all duration-300 shadow-premium">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  {proj.name}
                </h3>
                <p className="text-xs font-mono text-accent mt-2 leading-relaxed font-semibold">
                  {proj.tagline}
                </p>
                <div className="inline-flex items-center gap-1.5 bg-accent/5 border border-accent/15 px-2.5 py-0.5 rounded-full text-accent/80 text-[10px] font-mono mt-3">
                  {proj.impactBadge}
                </div>
                
                {/* Descriptive content */}
                <div className="mt-5 text-xs text-muted-foreground/90 leading-relaxed space-y-2.5">
                  <p><strong className="text-white/80 font-sans">Problem:</strong> {proj.problem}</p>
                  <p><strong className="text-accent/90 font-mono">Solution:</strong> {proj.solution}</p>
                </div>

                {/* Key features as bullet points with teal diamonds */}
                <ul className="mt-6 space-y-2.5">
                  {proj.features.map((feature, i) => (
                    <li key={i} className="text-xs text-muted-foreground/80 leading-relaxed flex items-start gap-2">
                      <span className="text-accent shrink-0 mt-1.5 font-sans text-[8px]">◆</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer info: tags & links */}
              <div className="mt-8 pt-6 border-t border-border/40">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {proj.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="text-[9px] font-mono text-muted-foreground bg-background/50 border border-border px-2 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Action Links */}
                <div className="flex items-center gap-4 text-xs font-mono">
                  <a 
                    href={proj.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-accent transition-colors flex items-center gap-1"
                  >
                    github ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
