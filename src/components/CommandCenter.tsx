"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Terminal, 
  Code2, 
  GitBranch, 
  ArrowRight, 
  Cpu, 
  ShieldCheck, 
  Database,
  Layers,
  Sparkles
} from "lucide-react";

interface CommandItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Navigation" | "Action" | "Diagnostics";
  shortcut?: string;
  icon: React.ReactNode;
  action: () => void;
}

export default function CommandCenter() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [isRunningDiagnostics, setIsRunningDiagnostics] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const categories = ["All", "Navigation", "Action", "Diagnostics"];

  const runDiagnostics = () => {
    if (isRunningDiagnostics) return;
    setIsRunningDiagnostics(true);
    setLogs([]);
    
    const messages = [
      "Initializing Parvez Saifi's portfolio diagnostics...",
      "Connecting to AWS ECS & ECR microservices... [OK]",
      "Auditing JWT Security Layer (Http-Only cookies, Refresh Token Rotation, RBAC)... [SECURE]",
      "Verifying database indexes for PostgreSQL, MongoDB & Redis... [OPTIMIZED]",
      "Auditing Hybrid Retrieval (BM25 + Vector Search & RRF)... [82% RECALL@5]",
      "Evaluating source citation guardrails... [92% ACCURACY]",
      "Validating Model Context Protocol (MCP) tool calling & LangGraph agent state... [READY]",
      "Testing Socket.io bidirectional connection latency... [14ms]",
      "Checking container health: 9 services active.",
      "Enterprise RAG Assistant (FastAPI/LangChain/Qdrant) ──> Online",
      "AI Agent Automation Platform (LangGraph/MCP/MERN) ──> Online",
      "AI-Powered Meeting Intelligence Assistant (Whisper/Sarvam AI/ChromaDB) ──> Online",
      "Multi-Agent AI Interview Platform (LangGraph/Docker/AWS ECS) ──> Online",
      "TrackHire (Next.js/PostgreSQL) ──> Online",
      "CodeSync (Docker/Express/WebSockets) ──> Online",
      "ResumePilot (MERN/Gemini AI) ──> Online",
      "AI SQL Assistant (FastAPI/LangChain/LangGraph) ──> Online",
      "LedgerX (Node.js/Express/MongoDB) ──> Online",
      "Diagnostics completed. All systems operating at production-grade efficiency."
    ];

    let delay = 0;
    messages.forEach((msg, idx) => {
      setTimeout(() => {
        setLogs(prev => [...prev, msg]);
        if (idx === messages.length - 1) {
          setIsRunningDiagnostics(false);
        }
      }, delay);
      delay += 350 + Math.random() * 200;
    });
  };

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const commands: CommandItem[] = [
    {
      id: "nav-blueprint",
      title: "Inspect System Blueprint",
      subtitle: "Jump to technical skill mapping",
      category: "Navigation",
      shortcut: "G S",
      icon: <Layers className="w-4 h-4" />,
      action: () => scrollTo("system-blueprint")
    },
    {
      id: "nav-projects",
      title: "View Shipped Products",
      subtitle: "Explore Enterprise RAG Assistant, AI Agent Automation Platform, and Shipped Software",
      category: "Navigation",
      shortcut: "G P",
      icon: <Code2 className="w-4 h-4" />,
      action: () => scrollTo("project-showcase")
    },
    {
      id: "nav-github",
      title: "Inspect GitHub Activity",
      subtitle: "View commit history & pinned repositories",
      category: "Navigation",
      shortcut: "G G",
      icon: <GitBranch className="w-4 h-4" />,
      action: () => scrollTo("github-hub")
    },
    {
      id: "nav-credentials",
      title: "Verify Experience & Education",
      subtitle: "Sharda University B.Tech IT & Project Work",
      category: "Navigation",
      shortcut: "G E",
      icon: <Cpu className="w-4 h-4" />,
      action: () => scrollTo("credentials")
    },
    {
      id: "action-resume",
      title: "Download Resume PDF",
      subtitle: "Get a copy of the formal CV",
      category: "Action",
      shortcut: "⌘ D",
      icon: <ShieldCheck className="w-4 h-4" />,
      action: () => window.open("/resume.pdf", "_blank")
    },
    {
      id: "action-linkedin",
      title: "Open LinkedIn Profile",
      subtitle: "Connect on professional network",
      category: "Action",
      shortcut: "⌘ L",
      icon: <ArrowRight className="w-4 h-4 animate-pulse" />,
      action: () => window.open("https://www.linkedin.com/in/parvezsaifi/", "_blank")
    },
    {
      id: "diag-run",
      title: "Run Infrastructure Audit",
      subtitle: "Simulate container, database, and auth checks",
      category: "Diagnostics",
      shortcut: "⌘ R",
      icon: <Terminal className="w-4 h-4" />,
      action: runDiagnostics
    }
  ];

  const filteredCommands = commands.filter(cmd => {
    const matchesQuery = cmd.title.toLowerCase().includes(query.toLowerCase()) ||
                         cmd.subtitle.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === "All" || cmd.category === selectedCategory;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="w-full max-w-2xl mx-auto bg-card/65 backdrop-blur-xl border border-border/85 rounded-2xl overflow-hidden shadow-premium transition-all duration-300 hover:border-accent/30">
      {/* Top Search Bar */}
      <div className="flex items-center gap-3 px-4 py-4 border-b border-border/50">
        <Search className="w-5 h-5 text-muted-foreground/60 shrink-0" />
        <input
          type="text"
          placeholder="Search commands, navigate sections, or run diagnostics..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-transparent border-0 outline-0 text-foreground text-[15px] placeholder-muted-foreground/50 font-sans"
        />
        <div className="hidden sm:flex items-center gap-1 bg-border/40 px-2 py-0.5 rounded text-[11px] font-mono text-muted-foreground/80 border border-border/50">
          <span>ESC</span>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 px-4 py-2 bg-background/30 border-b border-border/30 overflow-x-auto scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat === "All" ? null : cat)}
            className={`px-3 py-1 rounded-full text-xs font-medium font-mono transition-colors shrink-0 ${
              (cat === "All" && !selectedCategory) || selectedCategory === cat
                ? "bg-accent/10 text-accent border border-accent/20"
                : "text-muted-foreground hover:text-foreground hover:bg-border/20 border border-transparent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-border/30 h-[280px]">
        {/* Command List Area */}
        <div className="md:col-span-3 overflow-y-auto px-2 py-2 space-y-1">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd) => (
              <button
                key={cmd.id}
                onClick={cmd.action}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-all duration-150 hover:bg-accent/10 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-md bg-border/40 flex items-center justify-center text-muted-foreground group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                    {cmd.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground/90 group-hover:text-white transition-colors">
                      {cmd.title}
                    </h4>
                    <p className="text-xs text-muted-foreground/80 mt-0.5">
                      {cmd.subtitle}
                    </p>
                  </div>
                </div>
                {cmd.shortcut && (
                  <span className="text-[10px] font-mono text-muted-foreground/60 bg-border/20 group-hover:bg-accent/15 group-hover:text-accent px-1.5 py-0.5 rounded border border-border/30 transition-colors">
                    {cmd.shortcut}
                  </span>
                )}
              </button>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center p-4">
              <p className="text-sm text-muted-foreground">No commands matching query.</p>
            </div>
          )}
        </div>

        {/* Live Diagnostics Log / Info Panel */}
        <div className="md:col-span-2 bg-background/50 p-4 font-mono text-[11px] overflow-y-auto flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-border/40 text-[10px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5 text-accent" />
                CONSOLE.LOG
              </span>
              {isRunningDiagnostics && (
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              )}
            </div>

            {logs.length > 0 ? (
              <div className="space-y-1.5 leading-relaxed max-h-[170px] overflow-y-auto pr-1">
                {logs.map((log, index) => (
                  <div
                    key={index}
                    className={`${
                      log.includes("[OK]") || log.includes("[SECURE]") || log.includes("[100% SUCCESS]") || log.includes("──>")
                        ? "text-accent"
                        : log.includes("operating")
                        ? "text-emerald-400 font-bold"
                        : "text-muted-foreground"
                    }`}
                  >
                    {log.startsWith("Parvez") ? "" : "> "}{log}
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-[140px] text-center text-muted-foreground/75">
                <Sparkles className="w-5 h-5 mb-2 text-accent/30" />
                <p>Run standard diagnostics to review microservice orchestration, token schemas, and container metrics.</p>
                <button
                  onClick={runDiagnostics}
                  className="mt-3 px-3 py-1 bg-accent/10 border border-accent/20 text-accent rounded-md hover:bg-accent/20 text-xs transition-colors flex items-center gap-1.5"
                >
                  <Cpu className="w-3.5 h-3.5" /> Execute Audit
                </button>
              </div>
            )}
          </div>

          {logs.length > 0 && (
            <button
              onClick={() => setLogs([])}
              className="mt-2 text-left text-muted-foreground hover:text-white transition-colors underline underline-offset-2 decoration-border"
            >
              Clear Console
            </button>
          )}
        </div>
      </div>

      {/* Footer Info */}
      <div className="bg-background/20 px-4 py-2.5 border-t border-border/30 flex items-center justify-between text-[11px] text-muted-foreground font-mono">
        <span className="flex items-center gap-1">
          <Database className="w-3.5 h-3.5" /> Latency: 14ms (AWS us-east-1)
        </span>
        <span>Press <kbd className="bg-border/30 px-1 py-0.5 rounded text-[10px] border border-border/30">Tab</kbd> to change category</span>
      </div>
    </div>
  );
}
