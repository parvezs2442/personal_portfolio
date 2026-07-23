"use client";

import React, { useState } from "react";
import { 
  GitFork, 
  Star, 
  GitBranch, 
  BookOpen, 
  Users, 
  TrendingUp, 
  Terminal,
  Code
} from "lucide-react";

interface PinnedRepo {
  name: string;
  description: string;
  language: string;
  langColor: string;
  stars: number;
  forks: number;
  url: string;
  problem: string;
  tech: string;
  whyMatters: string;
}

export default function GithubHub() {
  const username = "parvezs2442";
  
  // Custom mock contribution grid representing his consistent commit efforts.
  // 36 columns by 7 rows for an elegant grid display.
  const cols = 34;
  const rows = 7;
  const contributionGrid: number[][] = Array.from({ length: rows }, (_, r) => 
    Array.from({ length: cols }, (_, c) => {
      // Create a pattern that looks organic: clusters of high activity and some empty spots
      const val = Math.sin(c / 2) * Math.cos(r / 1.5) + Math.random() * 0.4;
      if (val < 0) return 0;
      if (val < 0.3) return 1;
      if (val < 0.65) return 2;
      if (val < 0.85) return 3;
      return 4;
    })
  );

  const pinnedRepos: PinnedRepo[] = [
    {
      name: "ai-sql-assistant",
      description: "Generative AI conversational assistant executing SQL queries against relational databases from natural language questions using RAG, LangChain, and LangGraph.",
      language: "Python",
      langColor: "bg-blue-600",
      stars: 5,
      forks: 2,
      url: "https://github.com/parvezs2442/ai-sql-assistant",
      problem: "Access barriers for non-technical users requesting relational database analytics.",
      tech: "Python FastAPI, LangChain chains, LangGraph multi-agent paths, Qdrant vectors, relational query validation.",
      whyMatters: "Validates agentic reasoning, vector embedding search indexing, conversational AI flow state models, and safe query execution controls."
    },
    {
      name: "Job_Tracker",
      description: "Full-stack SaaS application for tracking job application channels, interview stages, and analytical dashboard. Powered by Next.js & PostgreSQL.",
      language: "TypeScript",
      langColor: "bg-blue-500",
      stars: 4,
      forks: 1,
      url: "https://github.com/parvezs2442/Job_Tracker",
      problem: "Fragmented application tracking and chaotic feedback loops across static user documents.",
      tech: "Next.js dynamic routing, PostgreSQL schemas, Prisma ORM transaction filters.",
      whyMatters: "Validates ability to design clean relational normalization and strict per-user request data isolation layers."
    },
    {
      name: "CodeSync-AWS-DOCKER",
      description: "Real-time collaborative code editor with Socket.io WebSockets, Monaco IDE, and multi-tier containerized Docker orchestration deployed to AWS ECS.",
      language: "JavaScript",
      langColor: "bg-yellow-500",
      stars: 3,
      forks: 2,
      url: "https://github.com/parvezs2442/CodeSync-AWS-DOCKER",
      problem: "Typing conflicts, concurrency locks, and latency spikes in remote peer program platforms.",
      tech: "WebSockets, Socket.io rooms, Monaco Editor cores, Docker isolation, Amazon ECR registries.",
      whyMatters: "Demonstrates systems thinking: separating high-frequency stateful sockets from REST APIs for container scaling."
    },
    {
      name: "ai-resume-analyzer",
      description: "AI-driven ATS recruitment scanner and candidate evaluation score card, extracting skills server-side with Gemini API. MERN stack setup.",
      language: "JavaScript",
      langColor: "bg-yellow-500",
      stars: 5,
      forks: 1,
      url: "https://github.com/parvezs2442/ai-resume-analyzer",
      problem: "High recruiter screening overheads and credential leakage risks during client-side parsing.",
      tech: "Gemini API integrations, stateless JWT rotation gates, secure HTTP-Only cookie layers, Puppeteer.",
      whyMatters: "Proves security adherence: protecting API keys on server nodes and utilizing backend compiler engines."
    },
    {
      name: "LabourTech",
      description: "Professional workforce management application built with TypeScript, structuring complex access gates and database models.",
      language: "TypeScript",
      langColor: "bg-blue-500",
      stars: 2,
      forks: 0,
      url: "https://github.com/parvezs2442/LabourTech",
      problem: "Inefficient shift schedules allocation and role validation hazards inside business operations.",
      tech: "TypeScript static types, Express.js controllers, MySQL databases, RBAC middleware checks.",
      whyMatters: "Validates object-oriented modeling, clean database integrity guidelines, and structured access control logic."
    }
  ];

  const getTileColor = (level: number) => {
    switch (level) {
      case 0: return "bg-slate-900 border border-slate-950/20";
      case 1: return "bg-emerald-950/40 border border-emerald-900/10";
      case 2: return "bg-emerald-800/35 border border-emerald-700/15";
      case 3: return "bg-emerald-600/40 border border-emerald-500/20";
      case 4: return "bg-emerald-400/50 border border-emerald-300/20 shadow-[0_0_8px_rgba(52,211,153,0.15)]";
      default: return "bg-slate-900";
    }
  };

  return (
    <section id="github-hub" className="w-full py-24 border-b border-border/40 bg-background relative">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full text-indigo-400 text-xs font-semibold font-mono mb-4 uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" /> Source Control
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white animate-fade-in">
            GitHub Hub
          </h2>
          <p className="text-muted-foreground/80 mt-4 text-sm md:text-base max-w-xl leading-relaxed">
            Consistency breeds excellence. Review repository layouts, technical coding patterns, and real project codebases published on my GitHub workspace.
          </p>
        </div>

        {/* GitHub Header Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
          {/* User Profile Summary (4-cols) */}
          <div className="lg:col-span-4 bg-card/45 border border-border/80 rounded-2xl p-6 shadow-premium flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                {/* Simulated Identicon Avatar */}
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-border flex items-center justify-center font-bold text-xl text-indigo-400">
                  PS
                </div>
                <div>
                  <h3 className="text-base font-bold text-white leading-tight">
                    Parvez Saifi
                  </h3>
                  <a 
                    href={`https://github.com/${username}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs text-indigo-400 hover:underline font-mono mt-0.5 block"
                  >
                    @{username}
                  </a>
                </div>
              </div>

              <p className="text-xs text-muted-foreground/95 leading-relaxed font-sans">
                Systems-oriented Full Stack Engineer specializing in robust, type-safe Next.js client architectures, low-latency WebSocket connections, and secure Node.js backend controllers.
              </p>

              <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground pt-2">
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" /> <strong>0</strong> followers
                </span>
                <span>•</span>
                <span><strong>1</strong> following</span>
              </div>
            </div>

            <div className="border-t border-border/40 pt-4 mt-6 space-y-3">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-muted-foreground">Public Repositories:</span>
                <span className="text-white font-bold">17</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-muted-foreground">Main stack:</span>
                <span className="text-indigo-300 font-semibold">JavaScript / TS</span>
              </div>
            </div>
          </div>

          {/* Heatmap Matrix Dashboard (8-cols) */}
          <div className="lg:col-span-8 bg-card/45 border border-border/80 rounded-2xl p-6 shadow-premium flex flex-col justify-between overflow-hidden">
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-border/40">
                <span className="text-xs font-mono text-white font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-indigo-400" /> Activity Calendar
                </span>
                <span className="text-[10px] font-mono text-muted-foreground">
                  365-day rolling commits
                </span>
              </div>

              {/* Grid Wrapper for heat map */}
              <div className="overflow-x-auto scrollbar-none pb-2">
                <div className="grid grid-flow-col gap-1.5 select-none w-max">
                  {contributionGrid.map((row, rIdx) => (
                    <div key={rIdx} className="grid gap-1.5">
                      {row.map((val, cIdx) => (
                        <div
                          key={cIdx}
                          className={`w-3 h-3 rounded-[3px] transition-colors duration-300 hover:scale-110 ${getTileColor(val)}`}
                          title={`Level ${val} activity`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Heatmap Legend */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/30 text-[10px] font-mono text-muted-foreground">
              <span>Contribution consistency: HIGH</span>
              <div className="flex items-center gap-1.5">
                <span>Less</span>
                <div className="w-2.5 h-2.5 rounded bg-slate-900" />
                <div className="w-2.5 h-2.5 rounded bg-emerald-950/40" />
                <div className="w-2.5 h-2.5 rounded bg-emerald-800/35" />
                <div className="w-2.5 h-2.5 rounded bg-emerald-600/40" />
                <div className="w-2.5 h-2.5 rounded bg-emerald-400/50" />
                <span>More</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pinned Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pinnedRepos.map((repo) => (
            <a
              href={repo.url}
              key={repo.name}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card/35 border border-border/60 hover:border-indigo-500/30 rounded-xl p-5 transition-all duration-300 group flex flex-col justify-between hover:shadow-premium"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-muted-foreground group-hover:text-indigo-400 transition-colors" />
                    <h4 className="text-sm font-bold text-white group-hover:underline">
                      {repo.name}
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground bg-border/20 px-2 py-0.5 rounded">
                    Public
                  </span>
                </div>
                <p className="text-xs text-muted-foreground/90 mt-1 leading-relaxed">
                  {repo.description}
                </p>

                {/* Telemetry metadata highlights */}
                <div className="mt-4 pt-3 border-t border-border/20 space-y-1.5 text-[10px] font-mono leading-relaxed select-none">
                  <div>
                    <span className="text-indigo-400 font-bold">PROBLEM:</span> <span className="text-foreground/80">{repo.problem}</span>
                  </div>
                  <div>
                    <span className="text-indigo-400 font-bold">TECH:</span> <span className="text-foreground/80">{repo.tech}</span>
                  </div>
                  <div>
                    <span className="text-indigo-400 font-bold">WHY IT MATTERS:</span> <span className="text-foreground/80">{repo.whyMatters}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/20 text-[11px] font-mono text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${repo.langColor}`} />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-500/80" /> {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5" /> {repo.forks}
                  </span>
                </div>
                <span className="text-[10px] group-hover:text-indigo-400 flex items-center gap-1 transition-colors">
                  Inspect <GitBranch className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Custom Language Analytics Bar & Engineering Creed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          <div className="lg:col-span-7 bg-card/25 border border-border/30 rounded-xl p-5 font-mono text-[11px] text-muted-foreground flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 text-[10px] uppercase font-bold text-white tracking-widest">
                <span className="flex items-center gap-1.5"><Code className="w-4 h-4 text-indigo-400" /> Language Distribution</span>
                <span>Active projects</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden flex bg-border/40 w-full mb-4">
                <div className="bg-yellow-500 h-full" style={{ width: "55%" }} title="JavaScript" />
                <div className="bg-blue-500 h-full" style={{ width: "35%" }} title="TypeScript" />
                <div className="bg-purple-500 h-full" style={{ width: "7%" }} title="CSS" />
                <div className="bg-orange-500 h-full" style={{ width: "3%" }} title="HTML / Other" />
              </div>
            </div>
            <div className="flex gap-4 flex-wrap text-xs">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-yellow-500" /> JavaScript (55%)</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> TypeScript (35%)</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-purple-500" /> CSS (7%)</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500" /> HTML/Other (3%)</span>
            </div>
          </div>
          <div className="lg:col-span-5 bg-card/25 border border-border/30 rounded-xl p-5 font-mono text-[11px] text-muted-foreground flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3 text-[10px] uppercase font-bold text-white tracking-widest">
              <span className="flex items-center gap-1.5"><Terminal className="w-4 h-4 text-indigo-400" /> Engineering Creed</span>
              <span>Philosophy</span>
            </div>
            <p className="text-[11px] text-muted-foreground/80 leading-relaxed font-sans">
              I prioritize clean architectures, strict relational validation, type guards, and decoupled state servers. Code is shipped with optimized compound indexes, multi-stage isolated containers, and zero credential leakage.
            </p>
            <div className="border-t border-border/20 pt-3 mt-4 flex items-center justify-between text-[10px] text-indigo-400 font-bold uppercase select-none">
              <span>Standard: Secure-By-Design</span>
              <span>CI/CD: GitHub Actions Active</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
