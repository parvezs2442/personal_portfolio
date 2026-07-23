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
          projects: ["ResumePilot", "CodeSync"],
          useCase: "Building highly interactive SPA architectures with optimized virtualized states.",
          responsibility: "Developed custom hooks, managed responsive layout trees, and reduced initial page render cycles."
        },
        {
          name: "Next.js",
          projects: ["TrackHire"],
          useCase: "Server-side rendering (SSR), dynamic App Router pathways, and search indexing optimization.",
          responsibility: "Integrated server actions and layouts to bypass client fetching and ensure secure rendering."
        },
        {
          name: "TypeScript",
          projects: ["TrackHire", "LabourTech"],
          useCase: "Strict type mapping across database clients, API requests, and frontend states.",
          responsibility: "Eliminated compilation errors, engineered modular schemas, and defined request/response interfaces."
        },
        {
          name: "JavaScript",
          projects: ["ResumePilot", "CodeSync"],
          useCase: "Asynchronous runtime loops, dynamic element injection, and standard Web API integration.",
          responsibility: "Scripted websocket payload event listeners, file reader buffers, and client fallback logic."
        },
        {
          name: "Redux Toolkit",
          projects: ["TrackHire"],
          useCase: "Centralized client cache, persistent configurations, and predictable state slices.",
          responsibility: "Configured store dispatch pipelines to sync Kanban board dragging events with DB commits."
        },
        {
          name: "Tailwind CSS",
          projects: ["ResumePilot", "CodeSync", "TrackHire"],
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
          projects: ["ResumePilot", "CodeSync"],
          useCase: "Event-driven, asynchronous server backend handling intensive file streams and persistent networks.",
          responsibility: "Built API endpoints processing large multi-part resume file uploads without thread blockage."
        },
        {
          name: "Express.js",
          projects: ["ResumePilot", "CodeSync"],
          useCase: "Modular REST routing structure, middleware pipelines, CORS guards, and HTTP payload parsers.",
          responsibility: "Configured API routers guarded by rate limiters, validation layers, and authentication controls."
        },
        {
          name: "FastAPI",
          projects: ["AI SQL Assistant"],
          useCase: "Designing high-performance, asynchronous REST APIs with auto-generated OpenAPI documentation.",
          responsibility: "Built Python web backends serving AI pipelines and RAG routes with Pydantic validations."
        },
        {
          name: "REST APIs",
          projects: ["ResumePilot", "CodeSync", "TrackHire"],
          useCase: "Symmetric HTTP contract architecture defining JSON parameters, URL query schemes, and status responses.",
          responsibility: "Built REST interfaces yielding predictable nested data models for complex client requests."
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
          projects: ["AI SQL Assistant"],
          useCase: "Orchestrating multi-step LLM workflows and chaining prompts together for structured reasoning.",
          responsibility: "Developed structured query pipelines integrating OpenAI/Gemini models and managing system prompts."
        },
        {
          name: "LangGraph",
          projects: ["AI SQL Assistant"],
          useCase: "Building stateful, multi-agent AI systems with cycles and conversational routing.",
          responsibility: "Authored graph-based workflow handlers to route user queries based on verification states."
        },
        {
          name: "RAG",
          projects: ["AI SQL Assistant"],
          useCase: "Retrieval-Augmented Generation to ground AI responses in custom, verified business schemas.",
          responsibility: "Engineered document loading, chunking, embedding, and vector-search queries to inject context dynamically."
        },
        {
          name: "Prompt Engineering",
          projects: ["ResumePilot", "AI SQL Assistant"],
          useCase: "Crafting structured, deterministic instructions to align LLM behaviors and JSON outputs.",
          responsibility: "Designed system prompts with zero-shot, few-shot examples, and strict output constraint checks."
        },
        {
          name: "AI Agents",
          projects: ["AI SQL Assistant"],
          useCase: "Autonomous decision-making loops executing tool actions and querying databases dynamically.",
          responsibility: "Engineered tool calling pipelines allowing the LLM to write and run queries with safeguards."
        },
        {
          name: "Embeddings",
          projects: ["AI SQL Assistant"],
          useCase: "Generating high-dimensional semantic vectors of unstructured text for database query lookups.",
          responsibility: "Configured API utility pipelines translating text queries into token vectors in under 150ms."
        },
        {
          name: "Vector DBs (Qdrant)",
          projects: ["AI SQL Assistant"],
          useCase: "High-speed indexed vector storage facilitating similarity searches on semantic document subsets.",
          responsibility: "Designed collection index rules and performed similarity search queries on active session schemas."
        },
        {
          name: "LLM Integration",
          projects: ["ResumePilot", "AI SQL Assistant"],
          useCase: "Direct REST/SDK integration with Gemini API and other models for structured response payloads.",
          responsibility: "Implemented client SDK endpoints handling streaming responses and API retry logic."
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
          projects: ["TrackHire"],
          useCase: "ACID transactions, rigid relational schemas, and complex analytics mapping.",
          responsibility: "Optimized relational indexing keys on critical lookup columns to speed up dashboard charts."
        },
        {
          name: "MongoDB",
          projects: ["ResumePilot", "CodeSync"],
          useCase: "High-throughput unstructured storage caching transient collaboration records and user metrics.",
          responsibility: "Formulated schema rules and optimized compound key lookups on active session rooms."
        },
        {
          name: "MySQL",
          projects: ["TrackHire", "LabourTech"],
          useCase: "Relational persistence, normalized table setups, and complex query join logic.",
          responsibility: "Maintained configuration mapping tables and database normalization structures."
        },
        {
          name: "Prisma ORM",
          projects: ["TrackHire"],
          useCase: "Type-safe database transactions, automated migration scripts, and schema modeling.",
          responsibility: "Engineered database interaction layers with automated foreign key constraints and validation."
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
          projects: ["CodeSync"],
          useCase: "Bundling multi-layer servers with their exact dependencies into sandboxed image templates.",
          responsibility: "Wrote multi-stage configurations, decreasing final compiled node image volumes."
        },
        {
          name: "AWS",
          projects: ["CodeSync"],
          useCase: "Provisioning elastic cloud network hosting infrastructure, image registries, and stateless compute tasks.",
          responsibility: "Configured subnets, target groups, ECS tasks, and ECR registries to support horizontal scaling."
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
          projects: ["CodeSync"],
          useCase: "Scaling service layers horizontally by splitting stateful and stateless connections.",
          responsibility: "Architected microservices that separate WebSockets traffic from standard API endpoints."
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
