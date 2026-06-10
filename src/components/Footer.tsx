"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gold-light py-10 px-6 text-center border-t border-[rgba(180,130,40,0.3)] shadow-inner relative z-10">
      <span className="footer-names font-dancing text-[1.8rem] text-[#7a2800] block mb-2">
        Thisal &amp; Vishmi
      </span>
      <p className="font-cormorant text-[0.95rem] text-[#6b3800] tracking-wide leading-relaxed">
        29th October 2026 &nbsp;·&nbsp; Kaduwela River Edge, Sri Lanka
      </p>
      <p className="font-cormorant text-sm text-[#6b3800] italic mt-2 tracking-[2px]">
        🌺 &nbsp; With love and blessings &nbsp; 🌺
      </p>
    </footer>
  );
}
