import { 
  Cpu, 
  Terminal, 
  Mail, 
  Download, 
  GraduationCap, 
  Briefcase,
  ExternalLink,
  ChevronRight,
  Code,
  ArrowRight
} from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import CommandCenter from "@/components/CommandCenter";
import CoreSkills from "@/components/CoreSkills";
import ProjectShowcase from "@/components/ProjectShowcase";
import InteractiveConsole from "@/components/InteractiveConsole";
import Avatar from "@/components/Avatar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative selection:bg-accent/20 selection:text-accent">
      
      {/* Floating Header */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-border/40 bg-background/60 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="#" className="font-mono text-xs tracking-wider text-white hover:text-accent transition-colors flex items-center gap-1.5">
            <span className="text-accent font-bold">~/</span>parvez_saifi
          </a>
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-mono tracking-wider text-muted-foreground">
            <a href="#project-showcase" className="hover:text-white transition-colors">WORK</a>
            <a href="#credentials" className="hover:text-white transition-colors">ABOUT</a>
            <a href="#system-blueprint" className="hover:text-white transition-colors">SKILLS</a>
            <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold hover:bg-accent/90 transition-all shadow-glow"
            >
              <Download className="w-3 h-3" /> DOWNLOAD RESUME
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 border-b border-border/40 overflow-hidden">
        {/* Soft Radial Ambient Glow */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 relative flex flex-col md:flex-row items-center justify-between gap-12 text-left">
          
          {/* Left Column (Content) */}
          <div className="flex-1 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-3 py-1 rounded-full text-accent text-xs font-semibold font-mono mb-6 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              Full Stack & Generative AI Developer
            </div>
            
            <div className="text-[10px] font-bold font-mono tracking-widest text-accent mb-3 uppercase">
              Full Stack & Generative AI Developer · New Delhi, India
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Parvez Saifi
            </h1>

            <p className="text-muted-foreground max-w-xl text-sm sm:text-base leading-relaxed mb-8">
              Hi, I&apos;m Parvez Saifi. I am a Full Stack Developer and AI &amp; Generative AI Developer with a B.Tech in Information Technology (2026), skilled in React.js, Next.js, TypeScript, Node.js, Express.js, Python, and FastAPI. I build REST APIs, database-driven applications, and LLM-powered systems using Retrieval-Augmented Generation (RAG), LangChain, LangGraph, and Prompt Engineering — including an enterprise RAG assistant with 92% citation accuracy. Experienced with Microservices, System Design, AWS, Docker, CI/CD, and Model Context Protocol (MCP).
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a 
                href="#project-showcase" 
                className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-xs font-semibold hover:bg-accent/90 transition-all font-sans"
              >
                View work <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://github.com/parvezs2442"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-border/80 bg-card/40 text-muted-foreground hover:text-white px-4 py-2 rounded-lg text-xs font-semibold transition-all font-sans"
              >
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/parvezsaifi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-border/80 bg-card/40 text-muted-foreground hover:text-white px-4 py-2 rounded-lg text-xs font-semibold transition-all font-sans"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
            </div>

            {/* CLI Snippet */}
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground bg-card/50 border border-border/60 rounded-lg px-4 py-2.5 w-full max-w-xs select-all">
              <span className="text-accent font-bold">$</span>
              <span>npm i codesync-sandbox</span>
              <span className="w-1.5 h-3 bg-accent animate-pulse" />
            </div>
          </div>

          {/* Right Column (Avatar with Teal Glow) */}
          <div className="relative flex-shrink-0 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            <Avatar />
          </div>

        </div>
        
        {/* Soft layout separator */}
        <div className="max-w-6xl mx-auto px-4 mt-16">
          <CommandCenter />
        </div>
      </section>

      {/* Projects Showcase Section (Work) */}
      <ProjectShowcase />

      {/* Credentials & Work Experience Ledger (About) */}
      <section id="credentials" className="w-full py-24 border-b border-border/40 bg-background relative">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-mono font-bold text-accent tracking-widest uppercase">02 ABOUT</span>
              <div className="h-px bg-border flex-grow" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Professional Ledger
            </h2>
            <p className="text-muted-foreground/80 mt-4 text-sm md:text-base max-w-xl leading-relaxed">
              Academic credentials and product deployment history. Verified against LinkedIn and institutional records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Experience Ledger */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-premium">
              <div>
                <h3 className="text-xs font-mono text-white font-bold uppercase tracking-widest border-b border-border/40 pb-3 mb-6 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-accent" /> DEPLOYMENT RECORD & OWNERSHIP
                </h3>

                <div className="relative border-l border-border/80 pl-6 ml-2 space-y-8">
                  {/* Item 1 */}
                  <div className="relative">
                    <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-background border border-accent shadow-[0_0_8px_rgba(10,219,181,0.4)]" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono text-muted-foreground mb-1.5">
                      <span className="font-semibold text-accent">Enterprise RAG &amp; AI Agent Platforms</span>
                      <span>2026 - PRESENT</span>
                    </div>
                    <h4 className="text-sm font-bold text-white">Generative AI &amp; Full Stack Systems Developer</h4>
                    <p className="text-xs text-muted-foreground/80 mt-2 leading-relaxed">
                      Engineered enterprise RAG systems using Python, FastAPI, LangChain, Qdrant, and PostgreSQL with Hybrid Retrieval (BM25 + Vector Search), RRF reranking, and hallucination guardrails (92% citation accuracy). Architected full-stack AI Agent automation platforms with LangGraph orchestration, MCP tool calling, and human-in-the-loop approvals.
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="relative">
                    <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-background border border-accent shadow-[0_0_8px_rgba(10,219,181,0.4)]" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono text-muted-foreground mb-1.5">
                      <span className="font-semibold text-accent">CodeSync (Collaborative Sandbox)</span>
                      <span>2026 - PRESENT (7 MOS)</span>
                    </div>
                    <h4 className="text-sm font-bold text-white">Full Stack & Systems Developer</h4>
                    <p className="text-xs text-muted-foreground/80 mt-2 leading-relaxed">
                      Architected a low-latency collaborative sandbox. Designed room state models on MongoDB, programmed persistent WebSocket events via Socket.io, and isolated microservice containers. Built multi-stage Docker builds deployed onto AWS ECS through ECR registry tags. Resolved key concurrency and synchronization challenges.
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div className="relative">
                    <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-background border border-accent shadow-[0_0_8px_rgba(10,219,181,0.4)]" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono text-muted-foreground mb-1.5">
                      <span className="font-semibold text-accent">ResumePilot (Recruitment Screening SaaS)</span>
                      <span>2026 - PRESENT (7 MOS)</span>
                    </div>
                    <h4 className="text-sm font-bold text-white">Full Stack Security Engineer</h4>
                    <p className="text-xs text-muted-foreground/80 mt-2 leading-relaxed">
                      Designed a secure, automated candidate screening platform. Engineered a server-side parser integration using Gemini API to protect keys. Implemented token authorization gates with Http-Only cookie refresh token rotation and RBAC verification. Orchestrated server-side report compilation using Puppeteer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-border/40 text-[10px] font-mono text-muted-foreground/50">
                <span>Verified technical implementations</span>
              </div>
            </div>

            {/* Academic Ledger */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-premium">
              <div>
                <h3 className="text-xs font-mono text-white font-bold uppercase tracking-widest border-b border-border/40 pb-3 mb-6 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-accent" /> ACADEMIC FOUNDATIONS
                </h3>

                <div className="relative border-l border-border/80 pl-6 ml-2 space-y-8">
                  <div className="relative">
                    <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-background border border-accent shadow-[0_0_8px_rgba(10,219,181,0.4)]" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono text-muted-foreground mb-1.5">
                      <span className="font-semibold text-accent">Sharda University, Greater Noida, India</span>
                      <span>CLASS OF 2026</span>
                    </div>
                    <h4 className="text-sm font-bold text-white">B.Tech in Information Technology</h4>
                    <p className="text-xs text-muted-foreground/80 mt-2 leading-relaxed">
                      Applying core computer science fundamentals directly to real-world codebases. Academic tracking at <strong>76%</strong> with focus on algorithms, database design, system topology, and AI engineering.
                    </p>
                    
                    <div className="mt-4 grid grid-cols-2 gap-2 text-[10px] font-mono">
                      <div className="bg-background/80 px-2.5 py-1 rounded border border-border/60 text-muted-foreground">Data Structures &amp; Algo</div>
                      <div className="bg-background/80 px-2.5 py-1 rounded border border-border/60 text-muted-foreground">Object-Oriented Design (OOP)</div>
                      <div className="bg-background/80 px-2.5 py-1 rounded border border-border/60 text-muted-foreground">System Design</div>
                      <div className="bg-background/80 px-2.5 py-1 rounded border border-border/60 text-muted-foreground">SQL &amp; DBMS</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-border/40 text-[10px] font-mono text-muted-foreground/50">
                <span>Verified academic transcript</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Skills Section (Skills) */}
      <CoreSkills />

      {/* Interactive Contact / Console Section (Contact) */}
      <InteractiveConsole />

      {/* Footer */}
      <footer className="bg-background border-t border-border/20 py-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-mono text-muted-foreground">
          <div>
            <span>© {new Date().getFullYear()} Parvez Saifi. All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-ping" />
            <span>Handcrafted by design agency standards. Built in Next.js.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/parvezsaifi/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LINKEDIN</a>
            <a href="https://github.com/parvezs2442" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GITHUB</a>
            <a href="mailto:parvezsaifi2258@gmail.com" className="hover:text-accent transition-colors">EMAIL</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
