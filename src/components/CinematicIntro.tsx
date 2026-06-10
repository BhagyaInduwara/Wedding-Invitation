"use client";

import React, { useEffect, useState } from "react";

interface CinematicIntroProps {
  onComplete: () => void;
}

interface Cloud {
  id: number;
  left: string;
  top: string;
  width: string;
  height: string;
  background: string;
  opacity: number;
  duration: string;
  delay: string;
}

interface Petal {
  id: number;
  char: string;
  left: string;
  fontSize: string;
  duration: string;
  delay: string;
}

interface Spark {
  id: number;
  left: string;
  top: string;
  width: string;
  height: string;
  duration: string;
  delay: string;
  background: string;
}

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [clouds, setClouds] = useState<Cloud[]>([]);
  const [petals, setPetals] = useState<Petal[]>([]);
  const [sparks, setSparks] = useState<Spark[]>([]);
  const [gateOpen, setGateOpen] = useState(false);
  const [archVisible, setArchVisible] = useState(false);
  const [welcomeVisible, setWelcomeVisible] = useState(false);
  const [enterBtnVisible, setEnterBtnVisible] = useState(false);
  const [fadeout, setFadeout] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // 1. Generate Clouds
    const cloudColors = ["#ffe0a0", "#ffd080", "#ffb840", "#ffc870", "#fff0c0"];
    const generatedClouds: Cloud[] = [];
    for (let i = 0; i < 14; i++) {
      generatedClouds.push({
        id: i,
        left: `${Math.random() * 110 - 5}%`,
        top: `${Math.random() * 75}%`,
        width: `${120 + Math.random() * 220}px`,
        height: `${50 + Math.random() * 80}px`,
        background: cloudColors[Math.floor(Math.random() * cloudColors.length)],
        opacity: 0.25 + Math.random() * 0.35,
        duration: `${8 + Math.random() * 12}s`,
        delay: `${Math.random() * 6}s`,
      });
    }
    setClouds(generatedClouds);

    // 2. Generate Petals
    const petalChars = ["🌸", "🌺", "🌼", "🌷", "✿"];
    const generatedPetals: Petal[] = [];
    for (let i = 0; i < 22; i++) {
      generatedPetals.push({
        id: i,
        char: petalChars[Math.floor(Math.random() * petalChars.length)],
        left: `${Math.random() * 100}%`,
        fontSize: `${0.8 + Math.random() * 0.8}rem`,
        duration: `${7 + Math.random() * 10}s`,
        delay: `${Math.random() * 8}s`,
      });
    }
    setPetals(generatedPetals);

    // 3. Generate Sparks
    const sparkColors = ["#fff", "#ffd54f", "#ffcc02", "#fff9c4"];
    const generatedSparks: Spark[] = [];
    for (let i = 0; i < 30; i++) {
      generatedSparks.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 80}%`,
        width: `${2 + Math.random() * 4}px`,
        height: `${2 + Math.random() * 4}px`,
        duration: `${1.5 + Math.random() * 3}s`,
        delay: `${Math.random() * 4}s`,
        background: sparkColors[Math.floor(Math.random() * sparkColors.length)],
      });
    }
    setSparks(generatedSparks);

    // 4. Gate Open Timing Sequence
    const gateTimer = setTimeout(() => {
      setGateOpen(true);
      
      const archTimer = setTimeout(() => {
        setArchVisible(true);
        setWelcomeVisible(true);
        setEnterBtnVisible(true);
      }, 400);

      return () => clearTimeout(archTimer);
    }, 2200);

    return () => clearTimeout(gateTimer);
  }, []);

  const handleEnter = () => {
    setFadeout(true);
    setTimeout(() => {
      setIsDone(true);
      onComplete();
    }, 1200);
  };

  if (isDone) return null;

  return (
    <div
      id="cinematic-overlay"
      className={`fixed inset-0 z-[9999] overflow-hidden bg-[#ffd68a] select-none transition-opacity duration-[1200ms] ${
        fadeout ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Sky Canvas Gradient */}
      <div
        id="sky-canvas"
        className="absolute inset-0 bg-gradient-to-b from-[#ff9a3c] via-[#ffcd6b] via-[#ffe9a0] via-[#fff4d0] to-[#fffbe8]"
      />

      {/* Sun Rays Visuals */}
      <div className="sun-rays absolute top-[30%] left-[1/2] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[1]">
        <svg
          className="animate-[rayRotate_20s_linear_infinite]"
          width="900"
          height="900"
          viewBox="0 0 900 900"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="rayGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff9c4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ffcc02" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g transform="translate(450,450)">
            <line x1="0" y1="-430" x2="0" y2="430" stroke="url(#rayGrad)" strokeWidth="40" opacity="0.15" />
            <line x1="-430" y1="0" x2="430" y2="0" stroke="url(#rayGrad)" strokeWidth="40" opacity="0.15" />
            <line x1="-304" y1="-304" x2="304" y2="304" stroke="url(#rayGrad)" strokeWidth="30" opacity="0.12" />
            <line x1="304" y1="-304" x2="-304" y2="304" stroke="url(#rayGrad)" strokeWidth="30" opacity="0.12" />
            <line x1="-163" y1="-404" x2="163" y2="404" stroke="url(#rayGrad)" strokeWidth="22" opacity="0.1" />
            <line x1="163" y1="-404" x2="-163" y2="404" stroke="url(#rayGrad)" strokeWidth="22" opacity="0.1" />
            <line x1="-404" y1="-163" x2="404" y2="163" stroke="url(#rayGrad)" strokeWidth="22" opacity="0.1" />
            <line x1="404" y1="-163" x2="-404" y2="163" stroke="url(#rayGrad)" strokeWidth="22" opacity="0.1" />
          </g>
        </svg>
      </div>

      {/* Cloud Layers */}
      <div id="clouds-wrap" className="absolute inset-0 pointer-events-none">
        {clouds.map((cloud) => (
          <div
            key={cloud.id}
            className="absolute rounded-full blur-[22px] animate-cloud-drift"
            style={{
              left: cloud.left,
              top: cloud.top,
              width: cloud.width,
              height: cloud.height,
              background: cloud.background,
              opacity: cloud.opacity,
              animationDuration: cloud.duration,
              animationDelay: cloud.delay,
            }}
          />
        ))}
      </div>

      {/* Falling Petals and Sparkles */}
      <div id="particles-wrap" className="absolute inset-0 pointer-events-none">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className="absolute -top-[30px] select-none pointer-events-none animate-petal-fall"
            style={{
              left: petal.left,
              fontSize: petal.fontSize,
              animationDuration: petal.duration,
              animationDelay: petal.delay,
            }}
          >
            {petal.char}
          </div>
        ))}
        {sparks.map((spark) => (
          <div
            key={spark.id}
            className="absolute rounded-full select-none pointer-events-none animate-spark-anim"
            style={{
              left: spark.left,
              top: spark.top,
              width: spark.width,
              height: spark.height,
              background: spark.background,
              animationDuration: spark.duration,
              animationDelay: spark.delay,
            }}
          />
        ))}
      </div>

      {/* Gates (Perspective Wrapper) */}
      <div
        id="gate-wrap"
        className="absolute inset-0 flex items-end justify-center pointer-events-none"
        style={{ perspective: "1200px" }}
      >
        {/* Left Gate */}
        <div
          id="gate-left"
          className="absolute bottom-0 left-0 w-1/2 h-[90%] transition-transform duration-[2400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transformOrigin: "left center",
            background: "linear-gradient(135deg, #7a4f00 0%, #c8860a 25%, #f5d778 50%, #c8860a 75%, #7a4f00 100%)",
            transform: gateOpen ? "rotateY(-120deg)" : "rotateY(0deg)",
          }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 300 700"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="20" y="0" width="8" height="700" fill="rgba(245,215,100,0.4)" />
              <rect x="272" y="0" width="8" height="700" fill="rgba(245,215,100,0.4)" />
              <rect x="0" y="80" width="300" height="6" fill="rgba(245,215,100,0.35)" />
              <rect x="0" y="200" width="300" height="4" fill="rgba(245,215,100,0.3)" />
              <rect x="0" y="350" width="300" height="4" fill="rgba(245,215,100,0.3)" />
              <rect x="0" y="500" width="300" height="4" fill="rgba(245,215,100,0.3)" />
              <polygon points="150,50 165,80 150,110 135,80" fill="rgba(255,240,120,0.5)" />
              <polygon points="150,160 162,185 150,210 138,185" fill="rgba(255,240,120,0.4)" />
              <polygon points="150,280 162,305 150,330 138,305" fill="rgba(255,240,120,0.4)" />
              <polygon points="150,430 162,455 150,480 138,455" fill="rgba(255,240,120,0.4)" />
              <ellipse cx="150" cy="35" rx="18" ry="8" fill="rgba(255,220,100,0.5)" />
              <ellipse cx="133" cy="42" rx="12" ry="7" fill="rgba(255,200,80,0.4)" transform="rotate(-20,133,42)" />
              <ellipse cx="167" cy="42" rx="12" ry="7" fill="rgba(255,200,80,0.4)" transform="rotate(20,167,42)" />
              <circle cx="150" cy="32" r="6" fill="rgba(255,240,150,0.7)" />
            </svg>
          </div>
        </div>

        {/* Right Gate */}
        <div
          id="gate-right"
          className="absolute bottom-0 right-0 w-1/2 h-[90%] transition-transform duration-[2400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transformOrigin: "right center",
            background: "linear-gradient(225deg, #7a4f00 0%, #c8860a 25%, #f5d778 50%, #c8860a 75%, #7a4f00 100%)",
            transform: gateOpen ? "rotateY(120deg)" : "rotateY(0deg)",
          }}
        >
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ transform: "scaleX(-1)" }}
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 300 700"
              preserveAspectRatio="xMidYMid meet"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="20" y="0" width="8" height="700" fill="rgba(245,215,100,0.4)" />
              <rect x="272" y="0" width="8" height="700" fill="rgba(245,215,100,0.4)" />
              <rect x="0" y="80" width="300" height="6" fill="rgba(245,215,100,0.35)" />
              <rect x="0" y="200" width="300" height="4" fill="rgba(245,215,100,0.3)" />
              <rect x="0" y="350" width="300" height="4" fill="rgba(245,215,100,0.3)" />
              <rect x="0" y="500" width="300" height="4" fill="rgba(245,215,100,0.3)" />
              <polygon points="150,50 165,80 150,110 135,80" fill="rgba(255,240,120,0.5)" />
              <polygon points="150,160 162,185 150,210 138,185" fill="rgba(255,240,120,0.4)" />
              <polygon points="150,280 162,305 150,330 138,305" fill="rgba(255,240,120,0.4)" />
              <polygon points="150,430 162,455 150,480 138,455" fill="rgba(255,240,120,0.4)" />
              <ellipse cx="150" cy="35" rx="18" ry="8" fill="rgba(255,220,100,0.5)" />
              <ellipse cx="133" cy="42" rx="12" ry="7" fill="rgba(255,200,80,0.4)" transform="rotate(-20,133,42)" />
              <ellipse cx="167" cy="42" rx="12" ry="7" fill="rgba(255,200,80,0.4)" transform="rotate(20,167,42)" />
              <circle cx="150" cy="32" r="6" fill="rgba(255,240,150,0.7)" />
            </svg>
          </div>
        </div>

        {/* Floral Arch (revealed after gates open) */}
        <div
          id="floral-arch"
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[min(500px,90vw)] transition-opacity duration-[1200ms] delay-[2600ms] ${
            archVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M30 300 Q30 80 250 40 Q470 80 470 300"
              fill="none"
              stroke="#c8860a"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M55 300 Q55 100 250 65 Q445 100 445 300"
              fill="none"
              stroke="#f5d778"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.7"
            />
            {/* Rose Clusters Left */}
            <circle cx="80" cy="200" r="18" fill="#fff0f0" />
            <circle cx="68" cy="192" r="13" fill="#ffe0e0" />
            <circle cx="78" cy="183" r="10" fill="#ffc8c8" />
            <circle cx="94" cy="188" r="12" fill="#fff0f0" />
            <circle cx="85" cy="175" r="8" fill="#ffd0d0" />
            {/* Peony Left */}
            <circle cx="55" cy="240" r="22" fill="#fde8f0" />
            <circle cx="45" cy="228" r="16" fill="#f9c8dc" />
            <circle cx="62" cy="225" r="14" fill="#fde0ec" />
            <circle cx="52" cy="215" r="10" fill="#f5b0cc" />
            {/* Crystals Left */}
            <polygon points="45,170 50,155 55,170 50,175" fill="#e8f8ff" opacity="0.8" />
            <polygon points="105,160 110,145 115,160 110,165" fill="#e8f8ff" opacity="0.7" />
            {/* Rose Clusters Right */}
            <circle cx="420" cy="200" r="18" fill="#fff0f0" />
            <circle cx="432" cy="192" r="13" fill="#ffe0e0" />
            <circle cx="422" cy="183" r="10" fill="#ffc8c8" />
            <circle cx="406" cy="188" r="12" fill="#fff0f0" />
            <circle cx="415" cy="175" r="8" fill="#ffd0d0" />
            {/* Peony Right */}
            <circle cx="445" cy="240" r="22" fill="#fde8f0" />
            <circle cx="455" cy="228" r="16" fill="#f9c8dc" />
            <circle cx="438" cy="225" r="14" fill="#fde0ec" />
            <circle cx="448" cy="215" r="10" fill="#f5b0cc" />
            {/* Crystals Right */}
            <polygon points="455,170 460,155 465,170 460,175" fill="#e8f8ff" opacity="0.8" />
            <polygon points="385,160 390,145 395,160 390,165" fill="#e8f8ff" opacity="0.7" />
            {/* Top Arch Flowers */}
            <circle cx="250" cy="45" r="20" fill="#fff0f0" />
            <circle cx="238" cy="35" r="14" fill="#ffc8c8" />
            <circle cx="262" cy="35" r="14" fill="#ffc8c8" />
            <circle cx="250" cy="28" r="10" fill="#ffd0d0" />
            {/* White Roses on Arch */}
            <circle cx="160" cy="105" r="14" fill="white" opacity="0.9" />
            <circle cx="154" cy="97" r="9" fill="#f8f8f8" />
            <circle cx="167" cy="97" r="9" fill="#f8f8f8" />
            <circle cx="160" cy="90" r="7" fill="white" />
            <circle cx="340" cy="105" r="14" fill="white" opacity="0.9" />
            <circle cx="334" cy="97" r="9" fill="#f8f8f8" />
            <circle cx="347" cy="97" r="9" fill="#f8f8f8" />
            <circle cx="340" cy="90" r="7" fill="white" />
            {/* Greenery */}
            <ellipse cx="130" cy="140" rx="12" ry="6" fill="#4a8040" opacity="0.6" transform="rotate(-30,130,140)" />
            <ellipse cx="115" cy="155" rx="10" ry="5" fill="#3a7030" opacity="0.5" transform="rotate(-45,115,155)" />
            <ellipse cx="370" cy="140" rx="12" ry="6" fill="#4a8040" opacity="0.6" transform="rotate(30,370,140)" />
            <ellipse cx="385" cy="155" rx="10" ry="5" fill="#3a7030" opacity="0.5" transform="rotate(45,385,155)" />
            {/* Crystal Drops */}
            <ellipse cx="250" cy="68" rx="4" ry="7" fill="#d0f0ff" opacity="0.8" />
            <ellipse cx="230" cy="75" rx="3" ry="5" fill="#d0f0ff" opacity="0.6" />
            <ellipse cx="270" cy="75" rx="3" ry="5" fill="#d0f0ff" opacity="0.6" />
            {/* Gold Dots */}
            <circle cx="200" cy="78" r="4" fill="#d4a032" />
            <circle cx="300" cy="78" r="4" fill="#d4a032" />
            <circle cx="140" cy="120" r="3" fill="#d4a032" />
            <circle cx="360" cy="120" r="3" fill="#d4a032" />
          </svg>
        </div>

        {/* Welcome Text */}
        <div
          id="gate-welcome"
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 pointer-events-none w-4/5 transition-opacity duration-1000 delay-[3000ms] ${
            welcomeVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="shimmer-text font-dancing text-[clamp(2rem,6vw,3.5rem)] text-[#7a2800] leading-snug drop-shadow-[0_2px_20px_rgba(255,200,80,0.9)]">
            Thisal &amp; Vishmi
          </h1>
          <p className="font-cormorant text-[clamp(0.85rem,2.5vw,1.1rem)] text-[#5a3000] italic tracking-widest mt-2 uppercase">
            You are warmly invited to witness our union
          </p>
        </div>
      </div>

      {/* Skip Button */}
      <button
        id="skip-btn"
        onClick={handleEnter}
        className="absolute top-[70px] right-6 z-[10001] px-5 py-2 bg-[rgba(180,130,40,0.2)] border border-[rgba(180,130,40,0.5)] text-[#7a4f00] font-cinzel text-[0.65rem] tracking-[2px] cursor-pointer rounded transition-colors duration-300 hover:bg-[rgba(180,130,40,0.4)]"
      >
        SKIP INTRO
      </button>

      {/* Enter Button */}
      <button
        id="enter-btn"
        onClick={handleEnter}
        className={`absolute bottom-[10%] left-1/2 -translate-x-1/2 z-[10002] px-10 py-3.5 bg-gradient-to-r from-[#7a2800] to-[#c0392b] border-2 border-[#d4a032] text-[#f5d778] font-cinzel text-xs tracking-[3px] cursor-pointer rounded shadow-[0_4px_20px_rgba(120,40,0,0.4)] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(120,40,0,0.6)] ${
          enterBtnVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ transitionDelay: "3500ms" }}
      >
        Enter the Celebration ✦
      </button>
    </div>
  );
}
