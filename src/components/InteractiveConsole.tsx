"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Terminal, 
  Mail, 
  Phone, 
  CornerDownLeft, 
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

interface LogLine {
  text: string;
  type: "input" | "output" | "error" | "system";
}

export default function InteractiveConsole() {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<LogLine[]>([
    { text: "System connection established securely.", type: "system" },
    { text: "Type 'help' to review console operations or click buttons below.", type: "system" }
  ]);
  const [contactStep, setContactStep] = useState<number>(0);
  const [messageData, setMessageData] = useState({ name: "", email: "", msg: "" });

  const consoleEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (consoleEndRef.current) {
      consoleEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs]);

  const focusInput = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    // Append user input
    setLogs(prev => [...prev, { text: `parvezsaifi@portfolio:~$ ${cmd}`, type: "input" }]);
    setInput("");

    // Contact Flow active
    if (contactStep > 0) {
      processContactFlow(cmd);
      return;
    }

    const command = cmd.toLowerCase().split(" ")[0];

    switch (command) {
      case "help":
        setLogs(prev => [
          ...prev,
          { text: "Available commands:", type: "output" },
          { text: "  about     - Describe Parvez's technical summary", type: "output" },
          { text: "  skills    - List core programming languages & databases", type: "output" },
          { text: "  projects  - Summarize the shipped software trilogy", type: "output" },
          { text: "  contact   - Start interactive portal to send a message", type: "output" },
          { text: "  socials   - Display LinkedIn and GitHub endpoints", type: "output" },
          { text: "  clear     - Wipe command terminal cache", type: "output" }
        ]);
        break;

      case "clear":
        setLogs([]);
        break;

      case "about":
        setLogs(prev => [
          ...prev,
          { text: "Candidate Profile: Parvez Saifi", type: "output" },
          { text: "Role: Full Stack Engineer & Systems Architect (B.Tech IT 2026)", type: "output" },
          { text: "Status: Open to Full-Time Roles, Internships, Freelance, & Open Source Collaboration", type: "output" },
          { text: "Summary: Specializes in React/Next.js client systems and secure, backend integrations via Node.js/Express APIs. Experienced with Socket.io clusters, stateless JWT session safety (refresh token rotation), and containerization (Docker, AWS ECS). Driven by computer science fundamentals.", type: "output" }
        ]);
        break;

      case "skills":
        setLogs(prev => [
          ...prev,
          { text: "Core Stack Metrics:", type: "output" },
          { text: "  Frontend: React.js, Next.js, TypeScript, Redux Toolkit, Tailwind CSS", type: "output" },
          { text: "  Backend: Node.js, Express.js, REST APIs, Socket.io WebSockets", type: "output" },
          { text: "  Databases: PostgreSQL, MongoDB, MySQL, Prisma ORM", type: "output" },
          { text: "  DevOps: Docker, Docker Compose, AWS ECS, Amazon ECR, Git", type: "output" },
          { text: "  Security: JWT (HTTP-Only cookies, token rotation), RBAC, Zod validation", type: "output" }
        ]);
        break;

      case "projects":
        setLogs(prev => [
          ...prev,
          { text: "Shipped Portfolio Trilogy:", type: "output" },
          { text: "  1. ResumePilot - AI ATS recruitment scanner (MERN, Gemini API, Puppeteer).", type: "output" },
          { text: "  2. CodeSync    - Collaborative IDE sync room (WebSockets, Monaco Editor, Docker, AWS).", type: "output" },
          { text: "  3. TrackHire   - Job Tracking SaaS dashboard (Next.js, TypeScript, PostgreSQL, Prisma).", type: "output" }
        ]);
        break;

      case "socials":
        setLogs(prev => [
          ...prev,
          { text: "Social Endpoints:", type: "output" },
          { text: "  LinkedIn: linkedin.com/in/parvez-saifi", type: "output" },
          { text: "  GitHub: github.com/parvezs2442", type: "output" },
          { text: "  Email: parvezsaifi2258@gmail.com", type: "output" }
        ]);
        break;

      case "contact":
        setLogs(prev => [
          ...prev,
          { text: "Initializing messaging sequence...", type: "system" },
          { text: "Step 1/3: Please enter your name:", type: "output" }
        ]);
        setContactStep(1);
        break;

      default:
        setLogs(prev => [
          ...prev,
          { text: `Command not recognized: '${command}'. Type 'help' to review options.`, type: "error" }
        ]);
    }
  };

  const processContactFlow = (val: string) => {
    if (contactStep === 1) {
      setMessageData(prev => ({ ...prev, name: val }));
      setLogs(prev => [...prev, { text: `Step 2/3: Enter your email address:`, type: "output" }]);
      setContactStep(2);
    } else if (contactStep === 2) {
      if (!val.includes("@") || !val.includes(".")) {
        setLogs(prev => [...prev, { text: "Error: Invalid email format. Try again:", type: "error" }]);
        return;
      }
      setMessageData(prev => ({ ...prev, email: val }));
      setLogs(prev => [...prev, { text: `Step 3/3: Write your message text:`, type: "output" }]);
      setContactStep(3);
    } else if (contactStep === 3) {
      const finalData = { ...messageData, msg: val };
      setLogs(prev => [
        ...prev,
        { text: `Sending payload to Parvez Saifi...`, type: "system" },
        { text: `Message from ${finalData.name} (${finalData.email}) sent successfully!`, type: "system" },
        { text: "Thank you, I will respond to your inquiry shortly.", type: "output" }
      ]);
      setContactStep(0);
      setMessageData({ name: "", email: "", msg: "" });
      
      // Open mail link fallback
      const mailto = `mailto:parvezsaifi2258@gmail.com?subject=Contact from Portfolio (${finalData.name})&body=${encodeURIComponent(finalData.msg + "\n\nReply to: " + finalData.email)}`;
      setTimeout(() => {
        window.open(mailto);
      }, 800);
    }
  };

  return (
    <section id="contact" className="w-full py-24 bg-background relative">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full text-indigo-400 text-xs font-semibold font-mono mb-4 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Communications
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Get in Touch
          </h2>
          <p className="text-muted-foreground/80 mt-4 text-sm md:text-base max-w-xl leading-relaxed">
            Execute terminal commands to inspect metadata, or trigger the messaging console script. Open to opportunities including Full-Time Roles, Internships, Freelance Work, and Open Source Collaborations.
          </p>
        </div>

        {/* Console Box & Fast Buttons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Terminal (8-cols) */}
          <div 
            onClick={focusInput}
            className="lg:col-span-8 bg-card/50 border border-border/80 rounded-2xl p-4 md:p-6 shadow-premium font-mono text-xs flex flex-col justify-between min-h-[380px] cursor-text relative overflow-hidden"
          >
            
            {/* Terminal Top tab */}
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-border/40 text-muted-foreground/75 text-[10px]">
                <span className="flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-indigo-400" />
                  INTERACTIVE_SHELL.SH
                </span>
                <span>UTC_MODE</span>
              </div>

              {/* Logs */}
              <div className="space-y-2 max-h-[250px] overflow-y-auto pr-1">
                {logs.map((log, index) => {
                  let color = "text-muted-foreground";
                  if (log.type === "input") color = "text-white font-bold";
                  if (log.type === "error") color = "text-rose-400";
                  if (log.type === "system") color = "text-indigo-400 font-semibold";
                  if (log.type === "output") color = "text-foreground/90";
                  
                  return (
                    <div key={index} className={`leading-relaxed whitespace-pre-wrap ${color}`}>
                      {log.text}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Input Line */}
            <form onSubmit={handleCommand} className="flex items-center gap-1 mt-4 pt-3 border-t border-border/30 z-10 relative">
              <span className="text-indigo-400 shrink-0 font-bold">parvezsaifi@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={contactStep > 0 ? "Type response here..." : "Type 'help'..."}
                className="w-full bg-transparent border-0 outline-0 text-white font-mono placeholder-muted-foreground/30 text-xs py-0.5"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
              <button 
                type="submit"
                className="p-1 text-muted-foreground hover:text-white rounded hover:bg-border/30 transition-colors"
                title="Execute Command"
              >
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Quick Details (4-cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            
            {/* Direct Connect Grid */}
            <div className="bg-card/45 border border-border/80 rounded-2xl p-6 shadow-premium flex-grow flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-sm font-mono text-white font-bold uppercase tracking-widest border-b border-border/30 pb-2">
                  Direct Ledger
                </h3>
                
                <div className="space-y-3.5">
                  <a 
                    href="mailto:parvezsaifi2258@gmail.com" 
                    className="flex items-center justify-between p-3 bg-background/50 border border-border/40 rounded-xl hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono text-muted-foreground">EMAIL ADDRESS</div>
                        <div className="text-xs font-semibold text-white mt-0.5">parvezsaifi2258@gmail.com</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                  </a>

                  <a 
                    href="https://linkedin.com/in/parvez-saifi" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-between p-3 bg-background/50 border border-border/40 rounded-xl hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono text-muted-foreground">LINKEDIN PROFILE</div>
                        <div className="text-xs font-semibold text-white mt-0.5">linkedin.com/in/parvez-saifi</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                  </a>

                  <a 
                    href="https://github.com/parvezs2442" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-between p-3 bg-background/50 border border-border/40 rounded-xl hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
                        <Github className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono text-muted-foreground">GITHUB WORKSPACE</div>
                        <div className="text-xs font-semibold text-white mt-0.5">github.com/parvezs2442</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                  </a>

                  <a 
                    href="tel:+919639052258" 
                    className="flex items-center justify-between p-3 bg-background/50 border border-border/40 rounded-xl hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono text-muted-foreground">PHONE CONTACT</div>
                        <div className="text-xs font-semibold text-white mt-0.5">+91 9639052258</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>

              <div className="text-[10px] text-muted-foreground/60 font-mono mt-6 pt-4 border-t border-border/30">
                <span>Location: New Delhi Area, India</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
