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
  githubUrl?: string;
  liveUrl?: string;
  inProgress?: boolean;
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
      id: "aivideoassistant",
      name: "AI Video Assistant",
      tagline: "Multilingual Meeting Intelligence & RAG",
      impactBadge: "Multilingual Whisper & Sarvam AI",
      problem: "Users waste hours transcribing meetings and extracting structured action items from media files manually.",
      challenge: "Integrating local Whisper and Sarvam AI APIs for transcription, while managing token limits for long meetings.",
      solution: "Built a multilingual meeting intelligence system using Whisper/Sarvam AI, LangChain LCEL, and ChromaDB transcript RAG.",
      techStack: ["Python", "FastAPI", "LangChain LCEL", "Mistral AI", "RAG", "ChromaDB", "HuggingFace Embeddings", "Whisper", "Sarvam AI"],
      githubUrl: "https://github.com/parvezs2442/AI-Video_Assistant",
      architectureNodes: {
        frontend: ["YouTube URL & video uploaders", "Transcript interactive viewer", "PDF/TXT report exporter"],
        backend: ["FastAPI Application Server", "LangChain LCEL Pipeline", "Local Whisper Engine"],
        database: ["ChromaDB Vector Store", "HuggingFace Embeddings Index"],
        special: ["Sarvam AI Transcription Gateway", "RAG conversational QA engine"]
      },
      features: [
        "Multilingual STT: Whisper (EN) & Sarvam AI (HI/Hinglish) transcription.",
        "LCEL Summarizer: Parallel chains extract action items and decisions.",
        "ChromaDB RAG: Conversational QA over meeting transcripts.",
        "Report Exporter: Exports summaries to PDF/TXT format."
      ],
      engineeringDecisions: [
        {
          title: "Hybrid Speech Translation Pipeline",
          text: "To optimize cost and accuracy, local OpenAI Whisper processes English media, while Sarvam AI API is selected for Hindi/Hinglish calls, producing clean unified transcripts."
        },
        {
          title: "LangChain LCEL Chain Design",
          text: "Leveraged LangChain Expression Language (LCEL) to construct a streamable summary generation graph. This allows faster response times by chunking transcripts and generating structured outputs in parallel."
        },
        {
          title: "Embeddings Cache & ChromaDB RAG",
          text: "Utilized HuggingFace local embeddings cached in ChromaDB to retrieve relevant context. This minimizes token consumption by querying only relevant portions of long meetings."
        }
      ]
    },
    {
      id: "multiagentinterview",
      name: "Multi-Agent AI Interview Platform",
      tagline: "Orchestrated Mock Interviews & Candidate Analytics",
      impactBadge: "LangGraph Agentic Orchestration",
      problem: "Traditional mock interview prep tools lack context-aware follow-up questioning and customized feedback roadmaps.",
      challenge: "Coordinating multiple specialized AI agents statefully without causing context losses or chat lag.",
      solution: "Architected a multi-agent platform using LangGraph, Next.js, and Node.js/Express microservices backend on AWS.",
      techStack: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "LangChain", "LangGraph", "Redis", "Docker", "Firebase", "AWS"],
      githubUrl: "https://github.com/parvezs2442/multi-agent-interview-platform",
      architectureNodes: {
        frontend: ["Next.js App client", "Analytics dashboard layout", "Firebase Auth integration"],
        backend: ["Node.js Microservices", "Express.js API Router", "LangGraph Orchestrator", "Redis Caching"],
        database: ["MongoDB Document Store", "Firebase Auth Profiles"],
        devops: ["Docker Containerization", "AWS Deployment Hub"]
      },
      features: [
        "LangGraph Orchestration: Dedicated agents manage interview mock flows.",
        "Microservices Core: Express.js APIs containerized with Docker on AWS.",
        "Redis Cache: Caches agent states to accelerate chat loops.",
        "Candidate Dashboard: Visual performance analytics with Firebase Auth."
      ],
      engineeringDecisions: [
        {
          title: "LangGraph Stateful Coordination",
          text: "Orchestrated specialized agents in a stateful directed graph. This prevents chat context loss, allowing one agent to lead mock questions while another rates response matches in real-time."
        },
        {
          title: "Redis Caching in Microservices",
          text: "Configured Redis caches between the AI service and MongoDB database layer. This reduces repeated database lookup overhead and shortens API query response latencies during active session chat loops."
        },
        {
          title: "Dockerized AWS ECS Scaling",
          text: "Isolated services into Docker containers deployed onto AWS. Isolating authentication, analytics, and LangGraph engine runs allows scaling specific endpoints based on current load."
        }
      ]
    },
    {
      id: "trackhire",
      name: "TrackHire",
      tagline: "Job Application Tracking SaaS",
      impactBadge: "Kanban Board & Analytical Dashboard",
      problem: "Managing application timelines, journal logs, and analytics across scattered spreadsheets is disorganized.",
      challenge: "Structuring complex relational database schemas for rapid indexing and query parsing.",
      solution: "Developed a full-stack SaaS with Next.js/TypeScript and PostgreSQL/Prisma, with Kanban-based boards.",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "REST APIs", "JWT", "RBAC"],
      githubUrl: "https://github.com/parvezs2442/Job_Tracker",
      architectureNodes: {
        frontend: ["Next.js App Views", "Tailwind CSS Kanban", "Analytics Dashboard Layout"],
        backend: ["REST API Endpoints", "Next.js Server Tiers", "JWT/RBAC Auth Guards"],
        database: ["PostgreSQL Instance", "Prisma ORM Schemas", "Indexed User Records"]
      },
      features: [
        "Kanban Board: Interactive board for application stage tracking.",
        "Prisma Schemas: Normalized relational database tables with indexes.",
        "Auth & RBAC: Custom middleware verifying user sessions and roles.",
        "Search & Filters: Advanced analytical views and journals."
      ],
      engineeringDecisions: [
        {
          title: "PostgreSQL Database Normalization",
          text: "Designed a clean relational database with Prisma ORM. Indexes were strategically applied to foreign keys like user IDs and application statuses to accelerate queries during peak multi-user access."
        },
        {
          title: "Kanban State Sync",
          text: "Integrated Next.js state management with API routing, enabling real-time local updates on the Kanban board while saving changes asynchronously."
        },
        {
          title: "JWT Auth with Role-Based Access",
          text: "Implemented secure state validation via JWTs containing RBAC scopes. Middlewares intercept routes to verify permissions, enforcing absolute data isolation."
        }
      ]
    },
    {
      id: "ledgerx",
      name: "LedgerX",
      tagline: "Digital Wallet & Transaction Processing Platform",
      impactBadge: "Financial Transaction Backend",
      inProgress: true,
      problem: "Ensuring transaction consistency, preventing double-spend errors, and managing ledgers requires high reliability.",
      challenge: "Implementing ACID-like safety in MongoDB and processing parallel updates without race conditions.",
      solution: "Developing a secure transaction backend with Node.js, Express, and MongoDB, emphasizing ledger tracking.",
      techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Cookies", "REST APIs", "Nodemailer"],
      githubUrl: "https://github.com/parvezs2442/banking-backend-system",
      architectureNodes: {
        frontend: ["API testing client configs", "Interactive backend documentation endpoints"],
        backend: ["Node.js Server Tiers", "Express Router Middleware", "Nodemailer Transactional Alerts"],
        database: ["MongoDB Cluster Store", "Mongoose Strict Schemas", "Idempotency Ledger Records"]
      },
      features: [
        "Idempotency Guard: Unique request verification keys prevent double charges.",
        "Ledger Accounting: Computes real-time balances from immutable transaction logs.",
        "Secure Sessions: Stateful cookies with JWT validation and route security.",
        "Alerting Pipeline: Dispatches transaction notifications via Nodemailer."
      ],
      engineeringDecisions: [
        {
          title: "Strict Idempotency Layer",
          text: "To prevent double-spending or duplicate charges under network jitter, we process transaction requests against unique idempotency keys cached and checked before DB writes."
        },
        {
          title: "Transactional Ledger Integrity",
          text: "Utilizing MongoDB schema hooks and aggregation to maintain an immutable log of accounts. Dynamic balance queries sum historic ledger lines rather than updating a single mutable field to prevent state corruption."
        },
        {
          title: "Secure Cookie Auth & Nodemailer",
          text: "Configured JWT sessions stored within HTTP-Only secure cookies to block cross-site scripting attacks, paired with Nodemailer alerts to verify transaction flows."
        }
      ]
    },
    {
      id: "resumepilot",
      name: "ResumePilot",
      tagline: "AI-Powered ATS Candidate Screening Platform",
      impactBadge: "~80% HR Screening Overhead Reduction",
      problem: "Traditional candidate screening is slow, inconsistent, and manually parsing resumes wastes time.",
      challenge: "Building a secure server pipeline to parse resumes safely via Gemini API without key exposure.",
      solution: "Architected a full-stack MERN app parsing, analyzing, and scoring resumes via Gemini API.",
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
        "AI ATS Screen: Gemini API parses and scores match criteria.",
        "Stateless Auth: Secure JWT cookie authorization and token rotation.",
        "Puppeteer PDF: Headless engine parses and compiles styling server-side.",
        "Request Guards: Zod middleware shields backend APIs at all entry points."
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
      id: "aisqlassistant",
      name: "AI SQL Assistant",
      tagline: "Natural Language Database Assistant",
      impactBadge: "Conversational Relational Query Interface",
      problem: "Non-technical stakeholders struggle to write SQL queries directly, delaying business data extraction.",
      challenge: "Building a schema lookup RAG pipeline with high context accuracy and query sandboxing.",
      solution: "Engineered a Python/FastAPI conversational assistant converting natural queries to SQL via LangGraph.",
      techStack: ["Python", "FastAPI", "LangChain", "LangGraph", "Gemini API", "RAG", "Embeddings", "Vector Database", "SQL"],
      githubUrl: "https://github.com/parvezs2442/ai-sql-assistant",
      liveUrl: undefined,
      architectureNodes: {
        frontend: ["Dynamic CLI Console", "Response stream viewer", "Interactive schema visualizer"],
        backend: ["FastAPI Application Server", "LangChain Reasoning Engine", "LangGraph Agent Workflow Router"],
        database: ["Qdrant Vector DB", "PostgreSQL / MySQL Schema Store"],
        special: ["RAG Context Extraction Pipeline", "Secured DB Execution Gateway"]
      },
      features: [
        "NL to SQL: Translates user questions to SQL dynamically.",
        "LangGraph Workflow: Stateful graph directs self-correcting query verification.",
        "Schema RAG: semantic table lookup mapped to Qdrant vectors.",
        "Sandbox Execution: Safely queries read-only database structures."
      ],
      engineeringDecisions: [
        {
          title: "Multi-Agent Graph Workflows",
          text: "Utilized LangGraph to construct a stateful multi-agent system. The workspace defines a workflow graph where one node validates inputs, another searches schema embeddings, a third compiles SQL, and a fourth verifies execution results, ensuring self-correcting loops."
        },
        {
          title: "Context-Aware Schema RAG",
          text: "Instead of injecting the entire database schema into the LLM prompt (which blows up token budgets and causes confusion), I built a semantic schema-lookup. Schema tables and schemas are stored in a Qdrant vector database, enabling precise RAG retrieval of only relevant columns and joins."
        },
        {
          title: "Sanitized Sandbox Execution Guard",
          text: "To mitigate injection risks, the FastAPI backend routes generated queries through a read-only sandboxed schema container. It parses commands for unsafe drop or update statements before executing, returning user-friendly data visualizations."
        }
      ]
    },
    {
      id: "codesync",
      name: "CodeSync",
      tagline: "Real-Time Collaborative Coding IDE & Execution Sandbox",
      impactBadge: "Low-Latency Synchronized Editor State",
      problem: "Peer programming tools demand low-latency, real-time concurrent typing synchronization without race conditions.",
      challenge: "Propagating Monaco editor states in real-time while persisting room structures cleanly.",
      solution: "Engineered a Socket.io-driven collaborative hub containerized with Docker on AWS ECS.",
      techStack: ["React.js", "Node.js", "Express.js", "Socket.io", "MongoDB", "Docker", "AWS (ECS/ECR)", "Monaco Editor"],
      githubUrl: "https://github.com/parvezs2442/CodeSync-AWS-DOCKER",
      architectureNodes: {
        frontend: ["React.js Client", "Monaco Editor IDE Integration", "Socket.io Client Listener"],
        backend: ["Node.js WebSocket Hub", "Express REST Controllers", "Namespace session pools"],
        database: ["MongoDB Session Collection", "Index-backed room search schemas"],
        devops: ["Docker Isolation", "Amazon ECR Registry", "AWS ECS Task Orchestration"]
      },
      features: [
        "WebSocket Sync: Concurrent state sharing via Socket.io channels.",
        "Monaco IDE: Embedded Monaco editor with customized syntax styling.",
        "Optimized Schema: Decouples socket traffic from MongoDB persistence.",
        "Docker Devops: Multi-stage Docker Compose setup scaled on AWS ECS."
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
            <div key={proj.id} className="bg-card border border-border rounded-2xl p-5 md:p-6 flex flex-col justify-between hover:border-accent/20 transition-all duration-300 shadow-premium">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight flex items-center justify-between gap-2 flex-wrap">
                  <span>{proj.name}</span>
                  {proj.inProgress && (
                    <span className="inline-flex items-center bg-amber-500/10 border border-amber-500/20 text-amber-500 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest animate-pulse font-semibold">
                      In Progress
                    </span>
                  )}
                </h3>
                <p className="text-xs font-mono text-accent mt-2 leading-relaxed font-semibold">
                  {proj.tagline}
                </p>
                <div className="inline-flex items-center gap-1.5 bg-accent/5 border border-accent/15 px-2.5 py-0.5 rounded-full text-accent/80 text-[10px] font-mono mt-3">
                  {proj.impactBadge}
                </div>
                
                {/* Descriptive content */}
                <div className="mt-4 text-xs text-muted-foreground/90 leading-relaxed space-y-1.5">
                  <p><strong className="text-white/80 font-sans">Problem:</strong> {proj.problem}</p>
                  <p><strong className="text-accent/90 font-mono">Solution:</strong> {proj.solution}</p>
                </div>

                {/* Key features as bullet points with teal diamonds */}
                <ul className="mt-4 space-y-1.5">
                  {proj.features.map((feature, i) => (
                    <li key={i} className="text-xs text-muted-foreground/80 leading-relaxed flex items-start gap-2">
                      <span className="text-accent shrink-0 mt-1.5 font-sans text-[8px]">◆</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer info: tags & links */}
              <div className="mt-6 pt-4 border-t border-border/40">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="text-[9px] font-mono text-muted-foreground/85 bg-background/50 border border-border px-1.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Action Links */}
                <div className="flex items-center gap-4 text-xs font-mono">
                  {proj.githubUrl && (
                    <a 
                      href={proj.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:text-accent transition-colors flex items-center gap-1"
                    >
                      github ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
