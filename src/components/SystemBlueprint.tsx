"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Monitor, 
  ShieldAlert, 
  Cpu, 
  Radio, 
  Database, 
  Cloud,
  ChevronRight,
  Sparkles
} from "lucide-react";

interface TechNode {
  id: string;
  name: string;
  description: string;
  skills: string[];
  role: string;
  icon: React.ReactNode;
  color: string;
  appliedIn: string;
  engineeringDecisions: string;
  metrics: string;
}

export default function SystemBlueprint() {
  const [activeNode, setActiveNode] = useState<string>("frontend");

  const nodes: TechNode[] = [
    {
      id: "frontend",
      name: "Frontend Client Tier",
      role: "User Interface & Client State",
      description: "Responsive layouts, fast initial load via SSR/ISR, and low-latency client-side interaction state management.",
      skills: ["React.js", "Next.js (App Router)", "TypeScript", "Redux Toolkit", "Tailwind CSS", "HTML5/CSS3"],
      icon: <Monitor className="w-5 h-5" />,
      color: "from-indigo-500 to-cyan-400",
      appliedIn: "TrackHire (Next.js), CodeSync (React.js), ResumePilot (MERN)",
      engineeringDecisions: "Decoupled state management from rendering layers, managing application route paths dynamically and optimizing viewport hydration to maintain active frames.",
      metrics: "Sub-1.2s First Contentful Paint (FCP) via static optimization techniques."
    },
    {
      id: "security",
      name: "Security & Middleware Gate",
      role: "Session Integrity & Validation",
      description: "Securing routes, checking RBAC access permissions, verifying data payload schemas, and keeping sessions stateless.",
      skills: ["JWT Authentication", "Http-Only Cookie Rotation", "Zod Validation Schema", "Role-Based Access Control (RBAC)"],
      icon: <ShieldAlert className="w-5 h-5" />,
      color: "from-rose-500 to-indigo-500",
      appliedIn: "ResumePilot (Auth Core), TrackHire (Endpoint Guards)",
      engineeringDecisions: "Engineered single-use refresh token schemes with immediate invalidation upon reuse detection to prevent replay attacks. Guarded API routing requests using strict schema boundaries.",
      metrics: "100% protection against client-side token reads and session hijacking."
    },
    {
      id: "backend",
      name: "API Controllers & Logic",
      role: "Server execution & Integration",
      description: "Restful API development, server-side data processing, integration with LLM APIs, and headless browsers for report PDF generation.",
      skills: ["Node.js", "Express.js", "Gemini API Integration", "RESTful APIs", "Puppeteer PDF Engine", "MVC Design Patterns"],
      icon: <Cpu className="w-5 h-5" />,
      color: "from-amber-400 to-orange-500",
      appliedIn: "ResumePilot (Gemini Engine/Puppeteer), CodeSync (Express API Core)",
      engineeringDecisions: "Offloaded CPU-intensive resume parsing and automated report styling to server-side headless background compilers, preventing main thread event loop blockage.",
      metrics: "99.8% request resolve rate under concurrent candidate scanning runs."
    },
    {
      id: "realtime",
      name: "Real-Time Broadcast Engine",
      role: "Bidirectional Synchronization",
      description: "Low-latency state broadcasting, room-based websocket communication channels, and concurrent editing streams.",
      skills: ["Socket.io WebSockets", "Node.js cluster events", "Bidirectional state sync", "Concurrent session lock"],
      icon: <Radio className="w-5 h-5" />,
      color: "from-cyan-400 to-emerald-400",
      appliedIn: "CodeSync (Monaco Collaborative IDE)",
      engineeringDecisions: "Isolated room-based event loops inside separate WebSockets connections, avoiding processing collision during simultaneous candidate keystrokes.",
      metrics: "Sub-15ms broadcast synchronization loops across active sessions."
    },
    {
      id: "database",
      name: "Persistence & Data Models",
      role: "Query performance & persistence",
      description: "Relational database structuring, complex schema design, indexing, and query plan optimization to handle concurrent traffic.",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Prisma ORM", "NoSQL / Schema design", "Query performance & Indexing"],
      icon: <Database className="w-5 h-5" />,
      color: "from-emerald-400 to-teal-600",
      appliedIn: "TrackHire (PostgreSQL Core), CodeSync (MongoDB Session Caches)",
      engineeringDecisions: "Configured foreign key constraints and compound search indices on lookup paths. Tuned connection pool thresholds to guarantee resource availability.",
      metrics: "Relational data lookups completed in under 2ms via Prisma indexing."
    },
    {
      id: "devops",
      name: "Infrastructure & DevOps",
      role: "Orchestration & Deployments",
      description: "Containerized environments, continuous container registry pushes, cloud container hosting, and code reviews.",
      skills: ["Docker", "Docker Compose", "AWS ECS", "Amazon ECR", "Git / GitHub version control", "API Testing (Postman)"],
      icon: <Cloud className="w-5 h-5" />,
      color: "from-sky-400 to-indigo-600",
      appliedIn: "CodeSync (Orchestrated container cluster deployments)",
      engineeringDecisions: "Engineered multi-stage Docker builds to compile assets cleanly inside lightweight target containers. Managed private registry tags deployed to AWS ECS.",
      metrics: "62% container size reduction through Alpine Linux compilation."
    }
  ];

  const activeTech = nodes.find(n => n.id === activeNode) || nodes[0];

  return (
    <section id="system-blueprint" className="w-full py-24 border-b border-border/40 relative overflow-hidden bg-background">
      {/* Background Subtle Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.25] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full text-indigo-400 text-xs font-semibold font-mono mb-4 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Skills & Architecture
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            System Blueprint
          </h2>
          <p className="text-muted-foreground/80 mt-4 text-base md:text-lg max-w-2xl leading-relaxed">
            I approach technical skills not as isolated keywords, but as layers in a production-grade infrastructure. Click each layer to inspect details and connections.
          </p>
        </div>

        {/* Blueprint Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Flow Visualizer (Left Column) */}
          <div className="lg:col-span-7 bg-card/40 border border-border/70 rounded-2xl p-6 md:p-8 backdrop-blur-sm relative shadow-premium min-h-[460px] flex flex-col justify-between">
            
            {/* SVG Flow connections */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Horizontal flow lines */}
                <path d="M 120 100 L 400 100 L 400 200 L 120 200" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M 400 200 L 400 320 L 120 320" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="5,5" />
                
                {/* Active path glowing line */}
                {activeNode === "frontend" && (
                  <motion.path 
                    d="M 120 100 L 400 100" 
                    fill="none" 
                    stroke="rgb(99, 102, 241)" 
                    strokeWidth="2.5" 
                    initial={{ strokeDashoffset: 100, strokeDasharray: "10,10" }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  />
                )}
                {activeNode === "security" && (
                  <motion.path 
                    d="M 400 100 L 400 200" 
                    fill="none" 
                    stroke="rgb(244, 63, 94)" 
                    strokeWidth="2.5" 
                    initial={{ strokeDashoffset: 100, strokeDasharray: "10,10" }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  />
                )}
                {activeNode === "backend" && (
                  <motion.path 
                    d="M 400 200 L 120 200" 
                    fill="none" 
                    stroke="rgb(251, 191, 36)" 
                    strokeWidth="2.5" 
                    initial={{ strokeDashoffset: 100, strokeDasharray: "10,10" }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  />
                )}
                {activeNode === "realtime" && (
                  <motion.path 
                    d="M 120 200 L 400 200" 
                    fill="none" 
                    stroke="rgb(34, 211, 238)" 
                    strokeWidth="2.5" 
                    initial={{ strokeDashoffset: 100, strokeDasharray: "10,10" }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  />
                )}
                {activeNode === "database" && (
                  <motion.path 
                    d="M 400 200 L 400 320" 
                    fill="none" 
                    stroke="rgb(52, 211, 153)" 
                    strokeWidth="2.5" 
                    initial={{ strokeDashoffset: 100, strokeDasharray: "10,10" }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  />
                )}
                {activeNode === "devops" && (
                  <motion.path 
                    d="M 400 320 L 120 320" 
                    fill="none" 
                    stroke="rgb(56, 189, 248)" 
                    strokeWidth="2.5" 
                    initial={{ strokeDashoffset: 100, strokeDasharray: "10,10" }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  />
                )}
              </svg>
            </div>

            {/* Architecture node buttons */}
            <div className="relative space-y-6 z-10 w-full">
              <span className="text-[10px] font-mono text-muted-foreground/80 tracking-widest uppercase mb-4 block">
                SYSTEM TOPOLOGY MAP
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {nodes.map((node) => {
                  const isActive = activeNode === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setActiveNode(node.id)}
                      className={`flex items-center gap-4 px-4 py-3.5 rounded-xl border text-left transition-all duration-300 ${
                        isActive
                          ? "bg-indigo-500/10 border-indigo-500/60 shadow-premium"
                          : "bg-background/45 border-border/40 hover:bg-card hover:border-border/80"
                      }`}
                    >
                      <div className={`p-2.5 rounded-lg bg-background/80 border ${
                        isActive ? "border-indigo-500/40 text-indigo-400" : "border-border/30 text-muted-foreground"
                      } transition-colors`}>
                        {node.icon}
                      </div>
                      <div className="truncate">
                        <h4 className={`text-sm font-semibold transition-colors ${
                          isActive ? "text-white" : "text-foreground/85"
                        }`}>
                          {node.name}
                        </h4>
                        <p className="text-[11px] text-muted-foreground/75 truncate mt-0.5 font-mono">
                          {node.role}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Static visual blueprint labels */}
            <div className="mt-8 pt-6 border-t border-border/30 flex items-center justify-between text-[11px] font-mono text-muted-foreground/60 z-10">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> Active Connection: {activeTech.name}
              </span>
              <span>Layer: {activeTech.id.toUpperCase()}</span>
            </div>
          </div>

          {/* Details / Skill Grid (Right Column) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full min-h-[460px]">
            <motion.div
              key={activeTech.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-card/45 border border-border/80 rounded-2xl p-6 md:p-8 shadow-premium flex-grow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${activeTech.color} text-white`}>
                      {activeTech.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-widest">
                        Tier Details
                      </span>
                      <h3 className="text-xl font-bold text-white mt-0.5">
                        {activeTech.name}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed font-sans mb-6">
                  {activeTech.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-4 border-t border-b border-border/30 py-4 font-mono text-[10px] leading-relaxed">
                    <div>
                      <span className="text-indigo-400 font-bold block uppercase">Applied In</span>
                      <span className="text-white mt-1 block">{activeTech.appliedIn}</span>
                    </div>
                    <div>
                      <span className="text-indigo-400 font-bold block uppercase">Telemetry Metrics</span>
                      <span className="text-white mt-1 block">{activeTech.metrics}</span>
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-widest block mb-1.5">Engineering Decision</span>
                    <p className="text-xs text-muted-foreground font-sans leading-relaxed">{activeTech.engineeringDecisions}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[11px] font-mono text-muted-foreground/80 tracking-widest uppercase border-b border-border/30 pb-2">
                    TECHNOLOGIES & PROTOCOLS
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeTech.skills.map((skill, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-2 text-xs font-mono text-foreground/85 bg-background/50 border border-border/40 px-3 py-2 rounded-lg"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Informative Footer Tag */}
              <div className="mt-8 pt-6 border-t border-border/30 flex items-center justify-between text-[11px] text-muted-foreground/60 font-mono">
                <span>Directly mapping deployments</span>
                <span>Production-ready</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
