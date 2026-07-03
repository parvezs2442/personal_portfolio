import { 
  Cpu, 
  Terminal, 
  Mail, 
  Download, 
  GraduationCap, 
  Briefcase,
  ExternalLink,
  ChevronRight,
  Code
} from "lucide-react";
import { Github, Linkedin } from "@/components/icons";
import CommandCenter from "@/components/CommandCenter";
import CoreSkills from "@/components/CoreSkills";
import SystemBlueprint from "@/components/SystemBlueprint";
import ProjectShowcase from "@/components/ProjectShowcase";
import GithubHub from "@/components/GithubHub";
import InteractiveConsole from "@/components/InteractiveConsole";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative selection:bg-indigo-500/20 selection:text-indigo-200">
      
      {/* Floating Header */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-border/25 bg-background/55 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="#" className="font-mono text-xs tracking-widest text-white hover:text-indigo-400 transition-colors flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
            PARVEZ_SAIFI
          </a>
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-mono tracking-wider text-muted-foreground">
            <a href="#system-blueprint" className="hover:text-white transition-colors">BLUEPRINT</a>
            <a href="#project-showcase" className="hover:text-white transition-colors">PROJECTS</a>
            <a href="#github-hub" className="hover:text-white transition-colors">GITHUB</a>
            <a href="#credentials" className="hover:text-white transition-colors">LEDGER</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/parvez-saifi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/parvezs2442"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="mailto:parvezsaifi2258@gmail.com?subject=Resume Request"
              className="hidden sm:inline-flex items-center gap-1 bg-indigo-500/10 border border-indigo-500/25 px-2.5 py-1 rounded text-[10px] font-mono text-indigo-300 hover:bg-indigo-500/20 hover:text-white transition-all shadow-glow"
            >
              <Download className="w-3 h-3" /> REQUEST CV
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 border-b border-border/40 overflow-hidden">
        {/* Soft Radial Ambient Glow */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 relative text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full text-indigo-400 text-xs font-semibold font-mono mb-6 uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" /> Full Stack Systems Engineer
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.05] mb-6">
            Engineering resilient <br className="hidden sm:block" />
            production systems <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-sky-400">optimized for scale.</span>
          </h1>

          <p className="text-muted-foreground/90 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed mb-8">
            Hi, I&apos;m Parvez Saifi. I design and build production-grade web applications, secure high-throughput backend services, and automated cloud environments—translating complex product logic into clean, structured codebase realities.
          </p>

          {/* Minimal Trust Signals Banner */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-[11px] font-mono text-muted-foreground/80 mb-10 max-w-2xl mx-auto border-t border-b border-border/25 py-3.5 select-none">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
              <span>3 Production Projects</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
              <span>17+ GitHub Repositories</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
              <span>30+ Core Technical Capabilities</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span>Open to Roles / Collaborations</span>
            </span>
          </div>

          <CommandCenter />
        </div>
      </section>

      {/* Core Skills Section */}
      <CoreSkills />

      {/* Skills Section (System Blueprint) */}
      <SystemBlueprint />
      

      {/* Projects Showcase Section */}
      <ProjectShowcase />

      {/* GitHub Hub Section */}
      <GithubHub />

      {/* Credentials & Work Experience Ledger */}
      <section id="credentials" className="w-full py-24 border-b border-border/40 bg-background relative">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full text-indigo-400 text-xs font-semibold font-mono mb-4 uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5" /> Credentials
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
            <div className="bg-card/45 border border-border/80 rounded-2xl p-6 md:p-8 shadow-premium flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-mono text-white font-bold uppercase tracking-widest border-b border-border/30 pb-3 mb-6 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-indigo-400" /> DEPLOYMENT RECORD & OWNERSHIP
                </h3>

                <div className="space-y-6">
                  {/* Item 1 */}
                  <div className="relative pl-5 border-l border-border/60">
                    <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-indigo-500/40 border border-indigo-400/80" />
                    <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-1">
                      <span>CodeSync (Collaborative Sandbox)</span>
                      <span>2026 - PRESENT (7 MOS)</span>
                    </div>
                    <h4 className="text-sm font-bold text-white">Full Stack & Systems Developer</h4>
                    <p className="text-xs text-muted-foreground/80 mt-2 leading-relaxed">
                      Architected a low-latency collaborative sandbox. Designed room state models on MongoDB, programmed persistent WebSocket events via Socket.io, and isolated microservice containers. Built multi-stage Docker builds deployed onto AWS ECS through ECR registry tags. Resolved key concurrency and synchronization challenges.
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="relative pl-5 border-l border-border/60">
                    <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-indigo-500/40 border border-indigo-400/80" />
                    <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-1">
                      <span>ResumePilot (Recruitment Screening SaaS)</span>
                      <span>2026 - PRESENT (7 MOS)</span>
                    </div>
                    <h4 className="text-sm font-bold text-white">Full Stack Security Engineer</h4>
                    <p className="text-xs text-muted-foreground/80 mt-2 leading-relaxed">
                      Designed a secure, automated candidate screening platform. Engineered a server-side parser integration using Gemini API to protect keys. Implemented token authorization gates with Http-Only cookie refresh token rotation and RBAC verification. Orchestrated server-side report compilation using Puppeteer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-border/30 text-[10px] font-mono text-muted-foreground/50">
                <span>Verified technical implementations</span>
              </div>
            </div>

            {/* Academic Ledger */}
            <div className="bg-card/45 border border-border/80 rounded-2xl p-6 md:p-8 shadow-premium flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-mono text-white font-bold uppercase tracking-widest border-b border-border/30 pb-3 mb-6 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-indigo-400" /> ACADEMIC FOUNDATIONS
                </h3>

                <div className="space-y-6">
                  <div className="relative pl-5 border-l border-border/60">
                    <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-indigo-500/40 border border-indigo-400/80" />
                    <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-1">
                      <span>Sharda University, Greater Noida</span>
                      <span>CLASS OF 2026</span>
                    </div>
                    <h4 className="text-sm font-bold text-white">B.Tech in Information Technology</h4>
                    <p className="text-xs text-muted-foreground/80 mt-2 leading-relaxed">
                      Applying core computer science fundamentals directly to real-world codebases. Academic tracking at <strong>76%</strong> with research-level focus on database normalization, system topology, and algorithmic complexity limits.
                    </p>
                    
                    <div className="mt-4 grid grid-cols-2 gap-2 text-[10px] font-mono">
                      <div className="bg-background/55 px-2 py-1 rounded border border-border/40">Data Structures & Algo</div>
                      <div className="bg-background/55 px-2 py-1 rounded border border-border/40">Database Management</div>
                      <div className="bg-background/55 px-2 py-1 rounded border border-border/40">Distributed Systems</div>
                      <div className="bg-background/55 px-2 py-1 rounded border border-border/40">Object-Oriented Design</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-border/30 text-[10px] font-mono text-muted-foreground/50">
                <span>Verified academic transcript</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Contact / Console Section */}
      <InteractiveConsole />

      {/* Footer */}
      <footer className="bg-background border-t border-border/20 py-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-mono text-muted-foreground">
          <div>
            <span>© {new Date().getFullYear()} Parvez Saifi. All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping" />
            <span>Handcrafted by design agency standards. Built in Next.js.</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/in/parvez-saifi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LINKEDIN</a>
            <a href="https://github.com/parvezs2442" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GITHUB</a>
            <a href="mailto:parvezsaifi2258@gmail.com" className="hover:text-white transition-colors">EMAIL</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
