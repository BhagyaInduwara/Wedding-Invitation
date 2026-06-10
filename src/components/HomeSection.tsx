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

export default function HomeSection() {
  const [petals, setPetals] = useState<PagePetal[]>([]);

  useEffect(() => {
    const pagePetals: PagePetal[] = [
      { id: 1, char: "🌸", left: "8%", duration: "10s", delay: "0s" },
      { id: 2, char: "🌺", left: "20%", duration: "13s", delay: "2s" },
      { id: 3, char: "🌼", left: "38%", duration: "9s", delay: "5s" },
      { id: 4, char: "🌸", left: "60%", duration: "11s", delay: "1s" },
      { id: 5, char: "🌺", left: "75%", duration: "14s", delay: "3s" },
      { id: 6, char: "🌼", left: "88%", duration: "10s", delay: "7s" },
    ];
    setPetals(pagePetals);
  }, []);

  return (
    <section
      id="page1"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-[55px] bg-[#1a0800]"
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
            }}
          >
            {petal.char}
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 py-8 w-full max-w-[680px] flex flex-col items-center justify-center">
        {/* King Figure from uploaded image */}
        <div className="relative w-[min(200px,45vw)] mx-auto mb-6 reveal visible">
          <div className="relative animate-king-float rounded-[12px] overflow-hidden border-3 border-[rgba(180,130,40,0.5)] shadow-[0_8px_40px_rgba(120,60,0,0.3)] after:content-[''] after:absolute after:inset-[-6px] after:rounded-[14px] after:border after:border-[rgba(212,160,50,0.3)] after:animate-king-glow after:pointer-events-none">
            <Image
              src="/images/king.png"
              alt="Traditional Sri Lankan figure — auspicious greeting"
              width={200}
              height={200}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        <div className="reveal visible flex flex-col items-center">
          <div className="flex items-center justify-center gap-4 w-full my-5 max-w-[280px]">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#c8860a]" />
            <span className="text-[#c8860a] text-lg leading-none">🌺</span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#c8860a]" />
          </div>

          <h1 className="home-title shimmer-text font-dancing text-[clamp(2.5rem,8vw,4.5rem)] leading-none">
            Thisal Salinda
          </h1>
          <span className="home-ampersand font-playfair text-[clamp(2rem,6vw,3.5rem)] text-[#c8860a] my-1 block">
            &amp;
          </span>
          <h1 className="home-title shimmer-text font-dancing text-[clamp(2.5rem,8vw,4.5rem)] leading-none">
            Vishmi Kavindya
          </h1>

          <div className="flex items-center justify-center gap-4 w-full my-5 max-w-[280px]">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#c8860a]" />
            <span className="text-[#c8860a] text-lg leading-none">🪷</span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#c8860a]" />
          </div>

          <p className="font-cormorant text-[clamp(0.85rem,2.5vw,1.1rem)] text-[#6b3800] italic tracking-widest leading-relaxed text-center">
            Together with our families,
            <br />
            we joyfully invite you to join us
            <br />
            as we celebrate our union
          </p>

          <p className="font-cinzel text-[clamp(0.65rem,1.8vw,0.85rem)] text-[#8a5500] tracking-[4px] uppercase mt-8">
            ✦ &nbsp; A Sacred Sri Lankan Wedding &nbsp; ✦
          </p>
        </div>
      </div>
    </section>
  );
}
