"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, 
  Terminal, 
  Code2, 
  Database, 
  ShieldCheck, 
  Layers, 
  Server, 
  Activity, 
  ChevronRight,
  Sparkles,
  Workflow
} from "lucide-react";

interface SkillDetail {
  name: string;
  projects: string[];
  useCase: string;
  responsibility: string;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  skills: SkillDetail[];
}

export default function CoreSkills() {
  const categories: SkillCategory[] = [
    {
      id: "frontend",
      name: "Frontend Tier",
      icon: <Layers className="w-4 h-4" />,
      skills: [
        {
          name: "React.js",
          projects: ["AI Agent Automation Platform", "ResumePilot", "CodeSync"],
          useCase: "Building highly interactive SPA architectures with optimized virtualized states.",
          responsibility: "Developed custom hooks, managed responsive layout trees, and reduced initial page render cycles."
        },
        {
          name: "Next.js",
          projects: ["Enterprise RAG Assistant", "AI-Powered Meeting Intelligence Assistant", "TrackHire"],
          useCase: "Server-side rendering (SSR), dynamic App Router pathways, and search indexing optimization.",
          responsibility: "Integrated server actions and layouts to bypass client fetching and ensure secure rendering."
        },
        {
          name: "TypeScript",
          projects: ["Enterprise RAG Assistant", "TrackHire", "LabourTech"],
          useCase: "Strict type mapping across database clients, API requests, and frontend states.",
          responsibility: "Eliminated compilation errors, engineered modular schemas, and defined request/response interfaces."
        },
        {
          name: "JavaScript (ES6+)",
          projects: ["ResumePilot", "CodeSync"],
          useCase: "Asynchronous runtime loops, dynamic element injection, and standard Web API integration.",
          responsibility: "Scripted websocket payload event listeners, file reader buffers, and client fallback logic."
        },
        {
          name: "Redux Toolkit",
          projects: ["AI Agent Automation Platform", "TrackHire"],
          useCase: "Centralized client store, persistent caching, and deterministic workflow state slices.",
          responsibility: "Configured store dispatch pipelines to sync Kanban board dragging events and agent builder states."
        },
        {
          name: "Tailwind CSS",
          projects: ["Enterprise RAG Assistant", "AI Agent Automation Platform", "TrackHire"],
          useCase: "Responsive utility layout structuring, theme-adaptive design systems, and glassmorphism styling.",
          responsibility: "Formulated global color maps and border animation classes matching premium agency designs."
        },
        {
          name: "HTML5/CSS3",
          projects: ["ResumePilot", "CodeSync", "TrackHire"],
          useCase: "Accessible document schemas (semantic HTML5), custom bezier curve transitions, and style normalization.",
          responsibility: "Optimized viewport layout responsiveness across multiple screens and established screen reader roles."
        }
      ]
    },
    {
      id: "backend",
      name: "Backend Tier",
      icon: <Server className="w-4 h-4" />,
      skills: [
        {
          name: "Node.js",
          projects: ["AI Agent Automation Platform", "ResumePilot", "CodeSync"],
          useCase: "Event-driven, asynchronous server backend handling intensive file streams and persistent networks.",
          responsibility: "Built API endpoints processing large multi-part resume file uploads without thread blockage."
        },
        {
          name: "Express.js",
          projects: ["AI Agent Automation Platform", "ResumePilot", "CodeSync"],
          useCase: "Modular REST routing structure, middleware pipelines, CORS guards, and HTTP payload parsers.",
          responsibility: "Configured API routers guarded by rate limiters, validation layers, and authentication controls."
        },
        {
          name: "FastAPI",
          projects: ["Enterprise RAG Assistant", "AI-Powered Meeting Intelligence Assistant", "AI SQL Assistant"],
          useCase: "Designing high-performance, asynchronous REST APIs with auto-generated OpenAPI documentation.",
          responsibility: "Built Python web backends serving AI pipelines and RAG routes with Pydantic validations."
        },
        {
          name: "REST APIs",
          projects: ["Enterprise RAG Assistant", "ResumePilot", "CodeSync", "TrackHire"],
          useCase: "Symmetric HTTP contract architecture defining JSON parameters, URL query schemes, and status responses.",
          responsibility: "Built REST interfaces yielding predictable nested data models for complex client requests."
        },
        {
          name: "Microservices",
          projects: ["Multi-Agent AI Interview Platform", "CodeSync"],
          useCase: "Decoupled distributed service architecture separating auth, WebSockets, and AI agent workloads.",
          responsibility: "Designed isolated microservice topologies deployed with independent Docker containers on AWS."
        },
        {
          name: "OAuth",
          projects: ["ResumePilot", "TrackHire"],
          useCase: "Delegated identity authorization and token-gated social authentication flows.",
          responsibility: "Engineered secure OAuth 2.0 integration with JWT session minting and refresh token rotation."
        },
        {
          name: "Socket.io",
          projects: ["CodeSync"],
          useCase: "Duplex real-time communication clusters syncing cursor coordinates and Monaco editor states.",
          responsibility: "Structured isolated channel namespaces to avoid overlap during multi-tenant programming rooms."
        },
        {
          name: "WebSockets",
          projects: ["CodeSync"],
          useCase: "Low-overhead, persistent socket connectivity transmitting delta updates below 20ms.",
          responsibility: "Programmed frame validation checks and client ping-pong loops to track client disconnects."
        }
      ]
    },
    {
      id: "generative-ai",
      name: "Generative AI",
      icon: <Sparkles className="w-4 h-4" />,
      skills: [
        {
          name: "LangChain",
          projects: ["Enterprise RAG Assistant", "AI Agent Automation Platform", "AI-Powered Meeting Intelligence Assistant", "AI SQL Assistant"],
          useCase: "Orchestrating multi-step LLM workflows and chaining prompts together for structured reasoning.",
          responsibility: "Developed structured query pipelines, LCEL chains, document ingestion, and multi-step reasoning."
        },
        {
          name: "LangGraph",
          projects: ["AI Agent Automation Platform", "Multi-Agent AI Interview Platform", "AI SQL Assistant"],
          useCase: "Building stateful, multi-agent AI systems with cycles, persistent checkpointers, and routing.",
          responsibility: "Authored graph-based workflow handlers with cycles, human-in-the-loop approvals, and verification loops."
        },
        {
          name: "RAG",
          projects: ["Enterprise RAG Assistant", "AI-Powered Meeting Intelligence Assistant", "AI SQL Assistant"],
          useCase: "Retrieval-Augmented Generation to ground AI responses in custom, verified business documents.",
          responsibility: "Implemented Hybrid Retrieval (BM25 + Vector Search), RRF reranking, and citation guardrails achieving 92% accuracy."
        },
        {
          name: "Model Context Protocol (MCP)",
          projects: ["AI Agent Automation Platform"],
          useCase: "Standardized open protocol connecting autonomous AI agents with live external tools and resources.",
          responsibility: "Integrated 3+ external tools via MCP with dynamic tool calling schemas and human-in-the-loop approvals."
        },
        {
          name: "Prompt Engineering",
          projects: ["Enterprise RAG Assistant", "AI Agent Automation Platform", "ResumePilot"],
          useCase: "Crafting structured, deterministic instructions to align LLM behaviors and JSON outputs.",
          responsibility: "Designed system prompts with zero-shot, few-shot examples, and strict output constraint checks."
        },
        {
          name: "AI Agents",
          projects: ["AI Agent Automation Platform", "Multi-Agent AI Interview Platform"],
          useCase: "Autonomous decision-making loops executing tool actions and querying databases dynamically.",
          responsibility: "Engineered tool calling pipelines and configurable step limits (8 steps/run) allowing LLMs to act with safeguards."
        },
        {
          name: "Embeddings",
          projects: ["Enterprise RAG Assistant", "AI-Powered Meeting Intelligence Assistant", "AI SQL Assistant"],
          useCase: "Generating high-dimensional semantic vectors of unstructured text for database query lookups.",
          responsibility: "Configured API utility pipelines translating text queries into token vectors in under 150ms."
        },
        {
          name: "Vector DBs (Qdrant)",
          projects: ["Enterprise RAG Assistant", "AI-Powered Meeting Intelligence Assistant", "AI SQL Assistant"],
          useCase: "High-speed indexed vector storage facilitating similarity searches on semantic document subsets.",
          responsibility: "Designed collection index rules and performed similarity search queries on Qdrant and ChromaDB."
        },
        {
          name: "LLM Integration",
          projects: ["Enterprise RAG Assistant", "AI Agent Automation Platform", "ResumePilot"],
          useCase: "Direct REST/SDK integration with OpenAI, Gemini, and Mistral models for structured response payloads.",
          responsibility: "Implemented client SDK endpoints handling streaming responses, token budgets, and API retry logic."
        },
        {
          name: "AI-Assisted Tools",
          projects: ["Enterprise RAG Assistant", "AI Agent Automation Platform"],
          useCase: "Accelerating code authoring, automated testing, refactoring, and documentation via Copilot, Claude, and ChatGPT.",
          responsibility: "Applied modern AI-assisted engineering practices across the development lifecycle to elevate product velocity."
        }
      ]
    },
    {
      id: "databases",
      name: "Databases & ORM",
      icon: <Database className="w-4 h-4" />,
      skills: [
        {
          name: "PostgreSQL",
          projects: ["Enterprise RAG Assistant", "TrackHire"],
          useCase: "ACID transactions, rigid relational schemas, and complex analytics mapping.",
          responsibility: "Optimized relational indexing keys on critical lookup columns to speed up dashboard charts."
        },
        {
          name: "MongoDB",
          projects: ["AI Agent Automation Platform", "ResumePilot", "CodeSync"],
          useCase: "High-throughput unstructured storage caching transient collaboration records and user metrics.",
          responsibility: "Formulated schema rules and optimized compound key lookups on active session rooms."
        },
        {
          name: "Redis",
          projects: ["Multi-Agent AI Interview Platform"],
          useCase: "In-memory caching and transient agent state management to eliminate conversational lag.",
          responsibility: "Implemented Redis cache layers between microservices and MongoDB, cutting repeat database lookup latency."
        },
        {
          name: "SQL",
          projects: ["Enterprise RAG Assistant", "TrackHire", "AI SQL Assistant"],
          useCase: "Relational query execution, complex joins, indexing, and schema migrations.",
          responsibility: "Engineered performant SQL queries, foreign key constraints, and relational transaction logic."
        },
        {
          name: "Schema Design & Indexing",
          projects: ["Enterprise RAG Assistant", "TrackHire", "CodeSync"],
          useCase: "Designing normalized relational schemas and high-throughput indexed document structures.",
          responsibility: "Applied compound and B-tree indexing on active session keys, eliminating full-table scans."
        },
        {
          name: "Prisma ORM",
          projects: ["TrackHire"],
          useCase: "Type-safe database transactions, automated migration scripts, and schema modeling.",
          responsibility: "Engineered database interaction layers with automated foreign key constraints and validation."
        },
        {
          name: "MySQL",
          projects: ["TrackHire", "LabourTech"],
          useCase: "Relational persistence, normalized table setups, and complex query join logic.",
          responsibility: "Maintained configuration mapping tables and database normalization structures."
        }
      ]
    },
    {
      id: "security",
      name: "Security & Auth",
      icon: <ShieldCheck className="w-4 h-4" />,
      skills: [
        {
          name: "JWT",
          projects: ["ResumePilot", "CodeSync", "TrackHire"],
          useCase: "Stateless user session authentication using cryptographically signed access tokens.",
          responsibility: "Implemented secure signature validations preventing token tampering at middleware gates."
        },
        {
          name: "RBAC",
          projects: ["ResumePilot", "LabourTech"],
          useCase: "Role-based restriction mapping ensuring users only modify authorized system objects.",
          responsibility: "Designed routing middleware verifying user level tokens before resolving database updates."
        },
        {
          name: "HTTP-only Cookies",
          projects: ["ResumePilot"],
          useCase: "Mitigating XSS attacks by storing authorization tokens inside browsers beyond JS access.",
          responsibility: "Configured secure Cookie flags (HttpOnly, SameSite=Strict) on token refresh gateways."
        },
        {
          name: "Refresh Token Rotation",
          projects: ["ResumePilot"],
          useCase: "Enforcing single-use refresh token schemes where reuse invalidates the entire token family.",
          responsibility: "Engineered token lineage trackers to detect and block malicious session hijack attempts."
        },
        {
          name: "Zod Validation",
          projects: ["ResumePilot", "TrackHire"],
          useCase: "Strict runtime parsing of incoming request structures before they hit controllers.",
          responsibility: "Authored validation models checking input string bounds, format patterns, and nested items."
        }
      ]
    },
    {
      id: "devops",
      name: "DevOps & Cloud",
      icon: <Workflow className="w-4 h-4" />,
      skills: [
        {
          name: "Docker",
          projects: ["CodeSync", "Multi-Agent AI Interview Platform"],
          useCase: "Bundling multi-layer servers with their exact dependencies into sandboxed image templates.",
          responsibility: "Wrote multi-stage configurations, decreasing final compiled node image volumes."
        },
        {
          name: "AWS (EC2, S3, ECS, ECR)",
          projects: ["CodeSync", "Multi-Agent AI Interview Platform"],
          useCase: "Provisioning elastic compute (EC2), S3 bucket storage, container registries (ECR), and container orchestration (ECS).",
          responsibility: "Configured VPC subnets, target groups, ECS tasks, and ECR registries to support horizontal scaling."
        },
        {
          name: "GitHub Actions",
          projects: ["ResumePilot", "CodeSync", "TrackHire"],
          useCase: "Orchestrating workflow runner containers to compile, test, and validate codebase versions.",
          responsibility: "Authored YAML configuration workflows setting up cached Node runtime triggers and dependency installs."
        },
        {
          name: "CI/CD",
          projects: ["ResumePilot", "CodeSync", "TrackHire"],
          useCase: "Automating codebase verification layers to ensure type checking, syntax accuracy, and compilation security before branch merging.",
          responsibility: "Designed and executed automated pipeline controls running lint and production build tests."
        },
        {
          name: "Deployments",
          projects: ["CodeSync", "ResumePilot", "TrackHire"],
          useCase: "Publishing compiled frontend and backend builds to staging/production cloud servers.",
          responsibility: "Configured automated build releases, environment variable setups, and dynamic traffic routing."
        },
        {
          name: "Docker Compose",
          projects: ["CodeSync"],
          useCase: "Orchestrating microservice grids (frontend, api, websocket hubs) inside local virtual subnets.",
          responsibility: "Engineered automated container startup orders and unified host configurations."
        },
        {
          name: "Git",
          projects: ["ResumePilot", "CodeSync", "TrackHire"],
          useCase: "Branch topology tracking, merge reviews, and source control rollback safety.",
          responsibility: "Maintained trunk execution branches, resolving code changes without system disruption."
        }
      ]
    },
    {
      id: "fundamentals",
      name: "CS Fundamentals",
      icon: <Cpu className="w-4 h-4" />,
      skills: [
        {
          name: "Data Structures",
          projects: ["CodeSync", "ResumePilot"],
          useCase: "Efficient runtime memory management using buffers, vectors, and indexed maps.",
          responsibility: "Applied queue arrays to manage user keystrokes chronologically without dropping updates."
        },
        {
          name: "Algorithms",
          projects: ["ResumePilot", "CodeSync"],
          useCase: "Optimized processing pathways to analyze large datasets with minimum time complexity.",
          responsibility: "Designed regex extraction heuristics and text scoring logic for resume screening feeds."
        },
        {
          name: "OOP",
          projects: ["CodeSync", "TrackHire"],
          useCase: "Designing decoupled, reusable system layers using object interfaces and inheritance.",
          responsibility: "Structured base service classes for socket operations, isolating specific room logic."
        },
        {
          name: "DBMS",
          projects: ["TrackHire", "ResumePilot"],
          useCase: "Ensuring ACID properties, database isolation thresholds, and query efficiency.",
          responsibility: "Engineered database normal configurations and tuned connection parameters for high concurrency."
        },
        {
          name: "System Design",
          projects: ["Enterprise RAG Assistant", "Multi-Agent AI Interview Platform", "CodeSync"],
          useCase: "Architecting modular microservices, decoupled queues, stateful graphs, and distributed data pipelines.",
          responsibility: "Engineered scalable system topologies isolating WebSocket connections, API routers, and AI agent worker nodes."
        }
      ]
    }
  ];

  const [activeSkill, setActiveSkill] = useState<SkillDetail>(categories[0].skills[0]);
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].id);

  return (
    <section id="system-blueprint" className="w-full py-24 border-b border-border/40 relative overflow-hidden bg-background">
      {/* Soft Ambient Corner Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-mono font-bold text-accent tracking-widest uppercase">03 SKILLS</span>
            <div className="h-px bg-border flex-grow" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Tools I reach for
          </h2>
          <p className="text-muted-foreground/80 mt-4 text-base md:text-lg max-w-2xl leading-relaxed">
            A comprehensive index of core languages, platforms, and methodologies. Hover or tap on any item to view its telemetry and project applications.
          </p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Skill Groups (Left Column: 7-cols grid of categories) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categories.map((cat) => (
              <div 
                key={cat.id} 
                className="bg-card border border-border rounded-xl p-5 hover:border-accent/15 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3 text-white">
                  <div className="text-accent">
                    {cat.icon}
                  </div>
                  <h3 className="text-xs font-bold font-mono tracking-widest uppercase">{cat.name}</h3>
                </div>

                <div className="flex gap-2 flex-wrap">
                  {cat.skills.map((skill) => {
                    const isActive = activeSkill.name === skill.name;
                    return (
                      <button
                        key={skill.name}
                        onMouseEnter={() => {
                          setActiveSkill(skill);
                          setActiveCategory(cat.id);
                        }}
                        onClick={() => {
                          setActiveSkill(skill);
                          setActiveCategory(cat.id);
                        }}
                        className={`px-3 py-1.5 text-[11px] font-mono rounded-lg border transition-all duration-150 ${
                          isActive
                            ? "bg-accent/10 border-accent text-accent font-medium shadow-glow"
                            : "bg-background/45 border-border/40 text-muted-foreground hover:text-white hover:border-border/80"
                        }`}
                      >
                        {skill.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Telemetry Details Panel (Right Column: 5-cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-premium relative overflow-hidden select-none min-h-[380px] flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between pb-3 mb-6 border-b border-border/45 font-mono text-[10px] text-muted-foreground/80">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-4 h-4 text-accent" />
                    TELEMETRY_INSPECT.LOG
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                    SYSTEM_LINK
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSkill.name}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-5"
                  >
                    <div>
                      <span className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest">
                        Capability Name
                      </span>
                      <h3 className="text-xl font-bold text-white mt-1 tracking-tight">
                        {activeSkill.name}
                      </h3>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest">
                        Production Use Case
                      </span>
                      <p className="text-xs text-foreground/85 font-mono leading-relaxed mt-2 p-3 bg-background/55 border border-border/60 rounded-lg">
                        {activeSkill.useCase}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest">
                        Applied in Projects
                      </span>
                      <div className="flex gap-2 mt-2 flex-wrap">
                        {activeSkill.projects.map((proj) => (
                          <span 
                            key={proj}
                            className="text-[9px] font-mono text-white bg-accent/10 border border-accent/30 px-2 py-0.5 rounded"
                          >
                            {proj}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-accent font-bold uppercase tracking-widest">
                        Engineering Responsibility
                      </span>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-1.5 font-sans">
                        {activeSkill.responsibility}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Informative Footer */}
              <div className="mt-8 pt-4 border-t border-border/40 text-[10px] text-muted-foreground/60 font-mono flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-accent" />
                <span>Verified in production-level tests.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
