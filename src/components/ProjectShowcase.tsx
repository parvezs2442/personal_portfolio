"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  Server, 
  Cpu, 
  Database, 
  Lock, 
  Zap, 
  Terminal, 
  ArrowRight,
  HelpCircle,
  Activity,
  Layers
} from "lucide-react";
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
  const [activeProject, setActiveProject] = useState<string>("resumepilot");
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "decisions" | "features">("overview");

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

  const currentProject = projects.find(p => p.id === activeProject) || projects[0];

  return (
    <section id="project-showcase" className="w-full py-24 border-b border-border/40 bg-background relative">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full text-indigo-400 text-xs font-semibold font-mono mb-4 uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 animate-pulse" /> Shipped Projects
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              The Shipped Trilogy
            </h2>
            <p className="text-muted-foreground/80 mt-4 text-sm md:text-base max-w-xl leading-relaxed">
              Explore 3 production-grade projects. Designed to solve real bottlenecks, engineered with strict security standards, and containerized for global scaling.
            </p>
          </div>

          {/* Project Selector Tabs */}
          <div className="flex gap-2 mt-8 md:mt-0 bg-card/60 p-1.5 rounded-xl border border-border/50 overflow-x-auto scrollbar-none">
            {projects.map((proj) => (
              <button
                key={proj.id}
                onClick={() => {
                  setActiveProject(proj.id);
                  setActiveTab("overview");
                }}
                className={`px-4 py-2 rounded-lg text-xs font-semibold font-mono tracking-wide transition-all ${
                  activeProject === proj.id
                    ? "bg-indigo-500 text-white shadow-premium"
                    : "text-muted-foreground hover:text-white"
                }`}
              >
                {proj.name}
              </button>
            ))}
          </div>
        </div>

        {/* Project Card Grid (Custom Storytelling Panel) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details Column (Left: 7-cols) */}
          <div className="lg:col-span-7 bg-card/40 border border-border/70 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-premium flex flex-col justify-between">
            
            {/* Top Name & Tagline */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {currentProject.name}
                  </h3>
                  <p className="text-sm text-indigo-400 font-mono mt-1">
                    {currentProject.tagline}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full text-indigo-300 text-xs font-mono font-semibold self-start sm:self-center shadow-glow">
                  <Activity className="w-3.5 h-3.5" />
                  {currentProject.impactBadge}
                </div>
              </div>

              {/* Sub tabs for Details */}
              <div className="flex gap-2 border-b border-border/30 pb-3 mb-6 overflow-x-auto scrollbar-none">
                {(["overview", "architecture", "decisions", "features"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 rounded-md text-[11px] font-mono uppercase tracking-wider transition-all border ${
                      activeTab === tab
                        ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-400 font-bold"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content Display */}
              <div className="min-h-[220px] mb-6">
                <AnimatePresence mode="wait">
                  {activeTab === "overview" && (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="space-y-4"
                    >
                      <div>
                        <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                          Problem Statement
                        </h4>
                        <p className="text-sm text-foreground/80 mt-1.5 leading-relaxed">
                          {currentProject.problem}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                          Engineering Challenge
                        </h4>
                        <p className="text-sm text-foreground/80 mt-1.5 leading-relaxed">
                          {currentProject.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                          Implemented Solution
                        </h4>
                        <p className="text-sm text-indigo-200/90 mt-1.5 leading-relaxed">
                          {currentProject.solution}
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "architecture" && (
                    <motion.div
                      key="architecture"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="space-y-4"
                    >
                      <p className="text-xs text-muted-foreground font-sans">
                        Here is the architectural block breakdown designed by Parvez for this system:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                        <div className="bg-background/45 p-3 rounded-lg border border-border/40">
                          <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5" /> Frontend / Client
                          </span>
                          <ul className="text-xs font-mono text-foreground/85 mt-2 space-y-1 list-disc pl-3">
                            {currentProject.architectureNodes.frontend.map((node, i) => (
                              <li key={i}>{node}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-background/45 p-3 rounded-lg border border-border/40">
                          <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                            <Server className="w-3.5 h-3.5" /> API / Server Logic
                          </span>
                          <ul className="text-xs font-mono text-foreground/85 mt-2 space-y-1 list-disc pl-3">
                            {currentProject.architectureNodes.backend.map((node, i) => (
                              <li key={i}>{node}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-background/45 p-3 rounded-lg border border-border/40">
                          <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                            <Database className="w-3.5 h-3.5" /> Database Layer
                          </span>
                          <ul className="text-xs font-mono text-foreground/85 mt-2 space-y-1 list-disc pl-3">
                            {currentProject.architectureNodes.database.map((node, i) => (
                              <li key={i}>{node}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-background/45 p-3 rounded-lg border border-border/40">
                          <span className="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                            <Cpu className="w-3.5 h-3.5" /> Integration / DevOps
                          </span>
                          <ul className="text-xs font-mono text-foreground/85 mt-2 space-y-1 list-disc pl-3">
                            {(currentProject.architectureNodes.devops || currentProject.architectureNodes.special || []).map((node, i) => (
                              <li key={i}>{node}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "decisions" && (
                    <motion.div
                      key="decisions"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="space-y-4"
                    >
                      {currentProject.engineeringDecisions.map((decision, i) => (
                        <div key={i} className="bg-background/30 border border-border/30 p-4 rounded-xl">
                          <h4 className="text-xs font-mono text-white font-bold uppercase tracking-widest flex items-center gap-1.5">
                            <Lock className="w-3.5 h-3.5 text-indigo-400" /> {decision.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                            {decision.text}
                          </p>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === "features" && (
                    <motion.div
                      key="features"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="space-y-3"
                    >
                      <h4 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
                        Key Architecture Details
                      </h4>
                      {currentProject.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 bg-background/25 border border-border/20 px-3 py-2 rounded-lg">
                          <Zap className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                          <span className="text-xs text-foreground/90 font-mono leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Links and Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-border/30 mt-auto">
              <div className="flex gap-2 flex-wrap">
                {currentProject.techStack.map((tech) => (
                  <span 
                    key={tech}
                    className="text-[10px] font-mono text-muted-foreground bg-border/20 border border-border/30 px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 justify-end">
                <a
                  href={currentProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-border/40 hover:bg-border border border-border/60 text-xs font-semibold text-foreground/90 hover:text-white transition-all"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                {currentProject.liveUrl && (
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 shadow-glow text-xs font-semibold text-white transition-all"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                )}
              </div>
            </div>

          </div>

          {/* Interactive Console Screen Column (Right: 5-cols) */}
          <div className="lg:col-span-5 bg-card/65 border border-border/70 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative shadow-premium overflow-hidden select-none">
            
            {/* Soft Ambient Glow */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Terminal Header */}
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-border/40 font-mono text-[10px] text-muted-foreground/80">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-indigo-400" />
                  SERVICE_MAP.SH
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping" />
                  STABLE_BUILD
                </span>
              </div>

              {/* Dynamic Console diagram */}
              <div className="bg-background/80 p-4 rounded-xl border border-border/50 font-mono text-[10px] space-y-4 text-muted-foreground min-h-[260px] flex flex-col justify-center">
                
                {/* Node visualization matching the project */}
                <div className="flex flex-col items-center gap-4 py-2">
                  <div className="flex items-center justify-center gap-2 w-full">
                    <div className="border border-border/80 px-2.5 py-1.5 rounded bg-card/85 text-white shadow-sm flex items-center gap-1 text-[9px] shrink-0">
                      <span className="w-1 h-1 bg-cyan-400 rounded-full" /> CLIENT
                    </div>
                    <div className="flex-grow border-b border-dashed border-border/80 h-0 flex items-center justify-center relative">
                      <span className="text-[7px] text-muted-foreground/50 absolute -top-3">HTTP / WSS</span>
                      <motion.div 
                        className="w-1 h-1 bg-indigo-400 rounded-full absolute"
                        animate={{ x: [-45, 45] }}
                        transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
                      />
                    </div>
                    <div className="border border-indigo-500/40 px-2.5 py-1.5 rounded bg-indigo-500/5 text-indigo-300 shadow-sm flex items-center gap-1 text-[9px] shrink-0">
                      <span className="w-1 h-1 bg-indigo-400 rounded-full" /> GATEWAY
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 w-full">
                    <div className="w-[12%] flex justify-center text-border/60">│</div>
                    <div className="w-[50%]"></div>
                    <div className="w-[38%] flex justify-center text-border/60">│</div>
                  </div>

                  <div className="flex items-center justify-center gap-2 w-full">
                    <div className="w-[30%]"></div>
                    <div className="border border-border/80 px-2.5 py-1.5 rounded bg-card/85 text-white shadow-sm flex items-center gap-1 text-[9px] shrink-0 self-center">
                      <span className="w-1 h-1 bg-amber-400 rounded-full" /> API ROUTE
                    </div>
                    <div className="flex-grow border-b border-dashed border-border/80 h-0 flex items-center justify-center relative">
                      <motion.div 
                        className="w-1 h-1 bg-indigo-400 rounded-full absolute"
                        animate={{ x: [20, -20] }}
                        transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                      />
                    </div>
                    <div className="border border-border/80 px-2.5 py-1.5 rounded bg-card/85 text-white shadow-sm flex items-center gap-1 text-[9px] shrink-0">
                      <span className="w-1 h-1 bg-emerald-400 rounded-full" /> STORAGE
                    </div>
                  </div>
                </div>

                <div className="border-t border-border/40 pt-4 space-y-1 text-[9px] leading-relaxed">
                  <div>$ tail -n 3 server.log</div>
                  <div className="text-white/80">&gt; Incoming request verified at auth gateway.</div>
                  {activeProject === "resumepilot" && (
                    <>
                      <div className="text-indigo-300/80">&gt; Gemini extraction completed: 96% match.</div>
                      <div className="text-muted-foreground/60">&gt; Puppeteer output buffer generated. [200 OK]</div>
                    </>
                  )}
                  {activeProject === "codesync" && (
                    <>
                      <div className="text-indigo-300/80">&gt; WebSocket synchronization room active: room-id.</div>
                      <div className="text-muted-foreground/60">&gt; Code synced (lat: 14ms). Monaco layout refresh.</div>
                    </>
                  )}
                  {activeProject === "trackhire" && (
                    <>
                      <div className="text-indigo-300/80">&gt; PostgreSQL index match: users(id) matched.</div>
                      <div className="text-muted-foreground/60">&gt; Prisma query executed. 12 rows returned in 2ms.</div>
                    </>
                  )}
                </div>

              </div>
            </div>

            {/* Quick architectural tip */}
            <div className="mt-6 pt-4 border-t border-border/30 text-[10px] text-muted-foreground/70 font-mono flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-indigo-500/60" />
              <span>Click on the tabs to inspect specific database, security, and interface designs.</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
