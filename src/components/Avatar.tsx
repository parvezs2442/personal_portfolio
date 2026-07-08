"use client";

import React, { useState } from "react";

export default function Avatar() {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border border-accent/20 bg-card flex items-center justify-center shadow-[0_0_50px_rgba(10,219,181,0.15)] group transition-all duration-500 hover:border-accent/40">
      {/* Glowing aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,219,181,0.1)_0%,transparent_70%)] animate-[pulse_4s_infinite_ease-in-out]" />
      
      {/* Profile Image */}
      {!hasError && (
        // eslint-disable-next-line @next/next/no-img-element
        <img 
          src="/profile.jpg" 
          alt="Parvez Saifi" 
          className="absolute inset-0 w-full h-full object-cover z-10 rounded-full"
          onError={() => setHasError(true)}
        />
      )}

      {/* Backup avatar elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Futuristic SVG background graphic */}
        <svg className="w-48 h-48 text-accent/20 absolute" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="animate-[spin_120s_linear_infinite]" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
          <path d="M 50 10 L 50 90 M 10 50 L 90 50" stroke="currentColor" strokeWidth="0.25" />
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1.5" className="animate-[pulse_3s_infinite_ease-in-out]" />
        </svg>

        {/* Centered stylized initials */}
        <div className="relative font-mono text-4xl md:text-5xl font-extrabold tracking-tight text-white select-none drop-shadow-[0_0_15px_rgba(10,219,181,0.5)]">
          <span className="text-accent">P</span>S
        </div>
      </div>
    </div>
  );
}
