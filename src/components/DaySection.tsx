"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface PagePetal {
  id: number;
  char: string;
  left: string;
  duration: string;
  delay: string;
  color?: string;
}

export default function DaySection() {
  const [petals, setPetals] = useState<PagePetal[]>([]);

  useEffect(() => {
    const pagePetals: PagePetal[] = [
      { id: 1, char: "🌸", left: "5%", duration: "12s", delay: "1s", color: "#c8860a" },
      { id: 2, char: "🌺", left: "85%", duration: "9s", delay: "4s" },
    ];
    setPetals(pagePetals);
  }, []);

  return (
    <section
      id="page2"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-16 px-4 bg-[#1a0800]"
    >
      {/* Mandala Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-[0.18]"
        style={{ backgroundImage: "url('/images/background.jpg')" }}
      />
      {/* Golden tint overlay */}
      <div className="absolute inset-0 bg-[rgba(255,240,200,0.18)] pointer-events-none z-[1]" />

      {/* Floating Petals */}
      <div className="absolute inset-0 pointer-events-none z-[2]">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className="absolute -top-[10px] select-none animate-petal-fall"
            style={{
              left: petal.left,
              animationDuration: petal.duration,
              animationDelay: petal.delay,
              color: petal.color,
            }}
          >
            {petal.char}
          </div>
        ))}
      </div>

      {/* Section Title */}
      <div className="page-title text-center mb-10 relative z-10 reveal visible">
        <h2 className="font-cinzel text-[clamp(1.4rem,5vw,2.2rem)] text-[#7a2800] tracking-[5px] drop-shadow-[0_2px_10px_rgba(212,160,50,0.3)]">
          THE WEDDING DAY
        </h2>
        <div className="flex items-center justify-center gap-4 w-full my-3 max-w-[200px] mx-auto">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#c8860a]" />
          <span className="text-[#c8860a] text-sm leading-none">🌺</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#c8860a]" />
        </div>
        <p className="font-cormorant text-base text-[#6b3800] italic tracking-widest mt-2">
          29th October 2026 &nbsp;·&nbsp; Kaduwela River Edge
        </p>
      </div>

      {/* Couple Scene SVG (JSX) */}
      <div className="couple-scene-wrap w-full max-w-[700px] mx-auto mb-10 relative z-10 reveal visible shadow-[0_8px_30px_rgba(120,60,0,0.15)] rounded-2xl overflow-hidden">
        <svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto block">
          <defs>
            <radialGradient id="sunsetGrad2" cx="50%" cy="40%" r="70%">
              <stop offset="0%" stopColor="#ffe0a0" />
              <stop offset="40%" stopColor="#ffc060" />
              <stop offset="70%" stopColor="#ff8030" />
              <stop offset="100%" stopColor="#c04000" />
            </radialGradient>
            <radialGradient id="sunGlow2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fffde7" stopOpacity="1" />
              <stop offset="60%" stopColor="#ffcc02" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ff8000" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="groundGold" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e8c060" />
              <stop offset="100%" stopColor="#a06820" />
            </linearGradient>
            <linearGradient id="sareeRed" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c0392b" />
              <stop offset="50%" stopColor="#922b21" />
              <stop offset="100%" stopColor="#e74c3c" />
            </linearGradient>
            <linearGradient id="suitGreen2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a3a2a" />
              <stop offset="100%" stopColor="#0d2015" />
            </linearGradient>
          </defs>

          {/* Sunset Sky */}
          <rect width="700" height="280" fill="url(#sunsetGrad2)" />

          {/* Sun */}
          <circle cx="350" cy="60" r="50" fill="url(#sunGlow2)" opacity="0.7" />
          <circle cx="350" cy="60" r="30" fill="#fffde7" opacity="0.9" />

          {/* Clouds */}
          <ellipse cx="120" cy="50" rx="70" ry="28" fill="#ffd080" opacity="0.55" />
          <ellipse cx="90" cy="58" rx="50" ry="20" fill="#ffb840" opacity="0.5" />
          <ellipse cx="580" cy="45" rx="80" ry="30" fill="#ffd080" opacity="0.55" />
          <ellipse cx="620" cy="55" rx="55" ry="22" fill="#ffb840" opacity="0.5" />
          <ellipse cx="200" cy="90" rx="60" ry="20" fill="#ffc060" opacity="0.4" />
          <ellipse cx="500" cy="85" rx="65" ry="22" fill="#ffc060" opacity="0.4" />

          {/* Floral Arch */}
          <path d="M230 240 Q230 140 350 120 Q470 140 470 240" fill="none" stroke="#c8860a" strokeWidth="4" strokeLinecap="round" />
          <circle cx="260" cy="185" r="10" fill="#fff0f0" /><circle cx="255" cy="177" r="7" fill="#ffc8c8" />
          <circle cx="440" cy="185" r="10" fill="#fff0f0" /><circle cx="445" cy="177" r="7" fill="#ffc8c8" />
          <circle cx="350" cy="122" r="12" fill="#fff0f0" /><circle cx="350" cy="113" r="8" fill="#ffc8c8" />
          <circle cx="295" cy="148" r="9" fill="white" /><circle cx="290" cy="141" r="6" fill="#f0f0f0" />
          <circle cx="405" cy="148" r="9" fill="white" /><circle cx="410" cy="141" r="6" fill="#f0f0f0" />
          <circle cx="242" cy="218" r="13" fill="#fde8f0" /><circle cx="236" cy="210" r="9" fill="#f9c8dc" />
          <circle cx="458" cy="218" r="13" fill="#fde8f0" /><circle cx="464" cy="210" r="9" fill="#f9c8dc" />
          <ellipse cx="350" cy="138" rx="3" ry="5" fill="#d0f0ff" opacity="0.9" />
          <ellipse cx="335" cy="134" rx="2" ry="4" fill="#d0f0ff" opacity="0.7" />
          <ellipse cx="365" cy="134" rx="2" ry="4" fill="#d0f0ff" opacity="0.7" />

          {/* Ground */}
          <path d="M0 230 Q350 218 700 228 L700 280 L0 280Z" fill="url(#groundGold)" />
          {/* Lotuses */}
          <g transform="translate(160,228)">
            <ellipse cx="0" cy="0" rx="5" ry="2.5" fill="#e91e63" transform="rotate(-35)" />
            <ellipse cx="0" cy="0" rx="5" ry="2.5" fill="#e91e63" transform="rotate(35)" />
            <ellipse cx="0" cy="-4" rx="3.5" ry="6" fill="#f06292" />
            <circle cx="0" cy="-4" r="2.5" fill="#ffd54f" />
          </g>
          <g transform="translate(540,226)">
            <ellipse cx="0" cy="0" rx="5" ry="2.5" fill="#e91e63" transform="rotate(-35)" />
            <ellipse cx="0" cy="0" rx="5" ry="2.5" fill="#e91e63" transform="rotate(35)" />
            <ellipse cx="0" cy="-4" rx="3.5" ry="6" fill="#f06292" />
            <circle cx="0" cy="-4" r="2.5" fill="#ffd54f" />
          </g>

          {/* Lanterns */}
          <g transform="translate(200,90)">
            <animate attributeName="transform" type="translate" values="translate(200,90);translate(203,82);translate(200,90)" dur="4s" repeatCount="indefinite" />
            <ellipse cx="0" cy="0" rx="10" ry="14" fill="#ff6f00" opacity="0.9" />
            <ellipse cx="0" cy="-2" rx="7" ry="9" fill="#ffd54f" opacity="0.8" />
            <line x1="0" y1="14" x2="0" y2="26" stroke="#c8860a" strokeWidth="1" />
          </g>
          <g transform="translate(500,80)">
            <animate attributeName="transform" type="translate" values="translate(500,80);translate(497,88);translate(500,80)" dur="5s" repeatCount="indefinite" />
            <ellipse cx="0" cy="0" rx="10" ry="14" fill="#c62828" opacity="0.9" />
            <ellipse cx="0" cy="-2" rx="7" ry="9" fill="#ff8a80" opacity="0.8" />
            <line x1="0" y1="14" x2="0" y2="26" stroke="#c8860a" strokeWidth="1" />
          </g>

          {/* Groom */}
          <rect x="289" y="170" width="26" height="65" rx="4" fill="url(#suitGreen2)" />
          <rect x="289" y="170" width="2" height="65" fill="#d4a032" opacity="0.8" />
          <rect x="313" y="170" width="2" height="65" fill="#d4a032" opacity="0.8" />
          <rect x="293" y="158" width="9" height="14" rx="4" fill="#c8956c" />
          <circle cx="297" cy="148" r="15" fill="#c8956c" />
          <ellipse cx="297" cy="137" rx="15" ry="8" fill="#1a1008" />
          <circle cx="293" cy="148" r="1.5" fill="#6d3320" /><circle cx="302" cy="148" r="1.5" fill="#6d3320" />
          <path d="M294 155 Q297 159 301 155" stroke="#6d3320" strokeWidth="1.2" fill="none" />
          <rect x="291" y="233" width="9" height="22" rx="3" fill="#1a2a1a" />
          <rect x="304" y="233" width="9" height="22" rx="3" fill="#1a2a1a" />

          {/* Bride */}
          <path d="M365 168 Q388 170 393 198 Q396 218 388 238 L365 238 Q360 218 362 198Z" fill="url(#sareeRed)" />
          <path d="M365 238 Q376 241 388 238" stroke="#d4a032" strokeWidth="2.5" fill="none" />
          <path d="M376 171 Q396 163 406 178 Q411 193 397 198 Q388 194 383 183Z" fill="#c0392b" opacity="0.8" />
          <path d="M376 171 Q396 163 406 178" stroke="#d4a032" strokeWidth="1.5" fill="none" />
          <rect x="364" y="166" width="27" height="20" rx="3" fill="#922b21" />
          <rect x="371" y="156" width="9" height="14" rx="4" fill="#c8956c" />
          <circle cx="375" cy="146" r="15" fill="#c8956c" />
          <ellipse cx="375" cy="135" rx="13" ry="7" fill="#1a1008" />
          <circle cx="382" cy="131" r="5" fill="#2a1a08" />
          <circle cx="385" cy="127" r="3" fill="#ff6090" /><circle cx="380" cy="125" r="2.5" fill="#ffeb3b" />
          <circle cx="370" cy="146" r="1.5" fill="#6d3320" /><circle cx="380" cy="146" r="1.5" fill="#6d3320" />
          <path d="M371 153 Q375 157 379 153" stroke="#6d3320" strokeWidth="1.2" fill="none" />
          <ellipse cx="375" cy="161" rx="5" ry="1.5" fill="#d4a032" opacity="0.9" />
          <rect x="366" y="236" width="9" height="22" rx="3" fill="#c0392b" />
          <rect x="378" y="236" width="9" height="22" rx="3" fill="#c0392b" />

          {/* Joined Hands */}
          <path d="M312 205 Q326 202 335 204 Q344 206 351 204" stroke="#c8956c" strokeWidth="4" fill="none" strokeLinecap="round" />
          <circle cx="330" cy="203" r="2" fill="#d4a032" opacity="0.9">
            <animate attributeName="opacity" values="0.9;0.2;0.9" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="341" cy="204" r="2" fill="#d4a032" opacity="0.9">
            <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2.5s" repeatCount="indefinite" />
          </circle>

          {/* Sparkles */}
          <circle cx="260" cy="160" r="3" fill="#ffd54f" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.1;0.8" dur="1.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="430" cy="155" r="3" fill="#ffd54f" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="320" cy="130" r="2" fill="#fff" opacity="0.9">
            <animate attributeName="opacity" values="0.9;0.1;0.9" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="375" cy="125" r="2.5" fill="#fff" opacity="0.9">
            <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite" />
          </circle>

          {/* Birds */}
          <path d="M90 50 Q95 46 100 50 Q105 46 110 50" stroke="#8a4000" strokeWidth="1.5" fill="none" opacity="0.6" />
          <path d="M580 40 Q585 36 590 40 Q595 36 600 40" stroke="#8a4000" strokeWidth="1.5" fill="none" opacity="0.6" />
        </svg>
      </div>

      {/* Date, Time, Location Cards */}
      <div className="detail-cards-wrap w-full max-w-[680px] mx-auto relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-5 reveal visible">
        {/* Date Card */}
        <div className="relative bg-[rgba(255,248,220,0.75)] backdrop-blur-[6px] border border-gold-border rounded-[16px] p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(120,60,0,0.2)] shadow-[0_4px_20px_rgba(120,60,0,0.1)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-[#c8860a] before:via-[#f5d778] before:to-[#c8860a]">
          <div className="w-[60px] h-[60px] mx-auto mb-4 relative overflow-hidden">
            <img
              src="/images/icons.jpg"
              alt="Calendar"
              className="w-full h-full object-cover filter sepia saturate-[0.8]"
              style={{ objectPosition: "-5% 10%", clipPath: "inset(0 65% 0 0)" }}
            />
          </div>
          <div className="font-cinzel text-[10px] tracking-[3px] text-[#8a5500] uppercase mb-2">Date</div>
          <div className="font-playfair text-[1.1rem] font-semibold text-[#4a1f00] leading-snug">
            October 29<br />2026
          </div>
          <div className="font-cormorant text-sm text-[#7a4000] italic mt-1.5">🗓 Thursday</div>
        </div>

        {/* Time Card */}
        <div className="relative bg-[rgba(255,248,220,0.75)] backdrop-blur-[6px] border border-gold-border rounded-[16px] p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(120,60,0,0.2)] shadow-[0_4px_20px_rgba(120,60,0,0.1)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-[#c8860a] before:via-[#f5d778] before:to-[#c8860a]">
          <div className="w-[60px] h-[60px] mx-auto mb-4 relative overflow-hidden">
            <img
              src="/images/icons.jpg"
              alt="Clock"
              className="w-full h-full object-cover filter sepia saturate-[0.8]"
              style={{ objectPosition: "50% 10%" }}
            />
          </div>
          <div className="font-cinzel text-[10px] tracking-[3px] text-[#8a5500] uppercase mb-2">Time</div>
          <div className="font-playfair text-[1.1rem] font-semibold text-[#4a1f00] leading-snug">
            9:15 AM<br />— 5:00 PM
          </div>
          <div className="font-cormorant text-sm text-[#7a4000] italic mt-1.5">⏰ Full day</div>
        </div>

        {/* Venue Card */}
        <div className="relative bg-[rgba(255,248,220,0.75)] backdrop-blur-[6px] border border-gold-border rounded-[16px] p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(120,60,0,0.2)] shadow-[0_4px_20px_rgba(120,60,0,0.1)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-[#c8860a] before:via-[#f5d778] before:to-[#c8860a]">
          <div className="w-[60px] h-[60px] mx-auto mb-4 relative overflow-hidden">
            <img
              src="/images/icons.jpg"
              alt="Location"
              className="w-full h-full object-cover filter sepia saturate-[0.8]"
              style={{ objectPosition: "95% 10%", clipPath: "inset(0 0 0 65%)" }}
            />
          </div>
          <div className="font-cinzel text-[10px] tracking-[3px] text-[#8a5500] uppercase mb-2">Venue</div>
          <div className="font-playfair text-[1.1rem] font-semibold text-[#4a1f00] leading-snug">
            Kaduwela<br />River Edge
          </div>
          <div className="font-cormorant text-sm text-[#7a4000] italic mt-1.5">📍 Sri Lanka</div>
        </div>
      </div>

      <span className="ornament text-center text-[#c8860a] text-lg mt-8 block relative z-10 tracking-[6px]">
        ✦ ༺ ❧ ༻ ✦
      </span>
    </section>
  );
}
