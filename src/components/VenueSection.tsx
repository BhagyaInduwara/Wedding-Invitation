"use client";

import React from "react";

export default function VenueSection() {
  return (
    <section
      id="page4"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-16 px-4 bg-[#1a0800]"
    >
      {/* Mandala Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-[0.18]"
        style={{ backgroundImage: "url('/images/background.jpg')" }}
      />
      {/* Golden tint overlay */}
      <div className="absolute inset-0 bg-[rgba(255,240,200,0.18)] pointer-events-none z-[1]" />

      {/* Section Title */}
      <div className="page-title text-center mb-10 relative z-10 reveal visible">
        <h2 className="font-cinzel text-[clamp(1.4rem,5vw,2.2rem)] text-[#7a2800] tracking-[5px] drop-shadow-[0_2px_10px_rgba(212,160,50,0.3)]">
          FIND US HERE
        </h2>
        <div className="flex items-center justify-center gap-4 w-full my-3 max-w-[200px] mx-auto">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#c8860a]" />
          <span className="text-[#c8860a] text-sm leading-none">🗺️</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#c8860a]" />
        </div>
        <p className="font-cormorant text-base text-[#6b3800] italic tracking-widest mt-2">
          Kaduwela River Edge, Sri Lanka
        </p>
      </div>

      {/* Venue Card */}
      <div className="venue-card w-full max-w-[680px] mx-auto bg-[rgba(255,248,220,0.8)] border border-gold-border rounded-[16px] overflow-hidden relative z-10 shadow-[0_8px_40px_rgba(120,60,0,0.15)] reveal visible">
        
        {/* Banner with Animated SVG */}
        <div className="venue-banner relative h-[200px] bg-gradient-to-b from-[#ff8030] via-[#ffb840] to-[#1a3a5a] overflow-hidden">
          <svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <radialGradient id="sunV" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fffde7" stopOpacity="1" />
                <stop offset="100%" stopColor="#ffa000" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="riverV" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1e6090" />
                <stop offset="100%" stopColor="#0d2a3a" />
              </linearGradient>
            </defs>

            {/* Sun Setting */}
            <circle cx="300" cy="70" r="40" fill="url(#sunV)" />
            <circle cx="300" cy="70" r="22" fill="#fffde7" opacity="0.95" />

            {/* Clouds */}
            <ellipse cx="100" cy="55" rx="60" ry="22" fill="#ffcc60" opacity="0.5" />
            <ellipse cx="480" cy="50" rx="70" ry="24" fill="#ffcc60" opacity="0.5" />

            {/* Hills */}
            <ellipse cx="80" cy="120" rx="110" ry="50" fill="#1a4020" opacity="0.8" />
            <ellipse cx="520" cy="115" rx="120" ry="55" fill="#1a4020" opacity="0.8" />

            {/* River */}
            <path d="M0 150 Q150 138 300 145 Q450 152 600 140 L600 200 L0 200Z" fill="url(#riverV)" />

            {/* River Sparkles */}
            <ellipse cx="200" cy="160" rx="25" ry="4" fill="#fffde7" opacity="0.2" />
            <ellipse cx="380" cy="165" rx="20" ry="3" fill="#fffde7" opacity="0.2" />

            {/* Sun Reflection */}
            <ellipse cx="300" cy="158" rx="20" ry="4" fill="#fffde7" opacity="0.25">
              <animate attributeName="rx" values="20;26;20" dur="3s" repeatCount="indefinite" />
            </ellipse>

            {/* Trees */}
            <g>
              <rect x="55" y="90" width="5" height="40" fill="#2d5a20" />
              <ellipse cx="57" cy="85" rx="18" ry="25" fill="#1a4010" />
            </g>
            <g>
              <rect x="530" y="88" width="5" height="40" fill="#2d5a20" />
              <ellipse cx="532" cy="83" rx="20" ry="27" fill="#1a4010" />
            </g>

            {/* Boat */}
            <g transform="translate(295,143)">
              <animate attributeName="transform" type="translate" values="translate(295,143);translate(300,142);translate(295,143)" dur="5s" repeatCount="indefinite" />
              <path d="M-20 0 Q0 -8 20 0 Q15 5 -15 5Z" fill="#5d4037" />
              <line x1="0" y1="-8" x2="0" y2="-26" stroke="#8d6e63" strokeWidth="1.5" />
              <path d="M0 -26 L16 -16 L0 -16Z" fill="#c62828" opacity="0.9" />
              <circle cx="0" cy="-10" r="3" fill="#ffeb3b" opacity="0.9">
                <animate attributeName="opacity" values="0.9;0.4;0.9" dur="1.5s" repeatCount="indefinite" />
              </circle>
            </g>

            {/* Venue Text Plate */}
            <rect x="170" y="72" width="260" height="45" rx="8" fill="rgba(10,20,40,0.75)" stroke="#d4a032" strokeWidth="1.5" />
            <text x="300" y="92" textAnchor="middle" fill="#f5d778" fontFamily="serif" fontSize="13" fontStyle="italic" letterSpacing="1">Kaduwela River Edge</text>
            <text x="300" y="108" textAnchor="middle" fill="#d4a032" fontFamily="serif" fontSize="9" letterSpacing="2.5">KADUWELA · SRI LANKA</text>
          </svg>
        </div>

        {/* Info Grid */}
        <div className="venue-info p-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="venue-detail text-center">
            <div className="vd-icon-wrap w-12 h-12 mx-auto mb-2.5 overflow-hidden flex items-center justify-center">
              <img
                src="/images/icons.jpg"
                alt="Location icon"
                className="w-full h-full object-cover filter sepia saturate-[0.7] hue-rotate-[10deg]"
                style={{ clipPath: "inset(0 0 0 65%)", objectPosition: "95% center" }}
              />
            </div>
            <div className="vd-label font-cinzel text-[10px] tracking-[3px] text-[#8a5500] uppercase mb-1">Location</div>
            <div className="vd-value font-playfair text-[#4a1f00] font-semibold text-base">Kaduwela River Edge</div>
            <div className="vd-sub text-sm text-[#7a4000] italic font-cormorant">Kaduwela, Sri Lanka</div>
          </div>

          <div className="venue-detail text-center">
            <div className="vd-icon-wrap w-12 h-12 mx-auto mb-2.5 overflow-hidden flex items-center justify-center">
              <img
                src="/images/icons.jpg"
                alt="Calendar icon"
                className="w-full h-full object-cover filter sepia saturate-[0.7] hue-rotate-[10deg]"
                style={{ clipPath: "inset(0 65% 0 0)", objectPosition: "5% center" }}
              />
            </div>
            <div className="vd-label font-cinzel text-[10px] tracking-[3px] text-[#8a5500] uppercase mb-1">Wedding Date</div>
            <div className="vd-value font-playfair text-[#4a1f00] font-semibold text-base">29th October 2026</div>
            <div className="vd-sub text-sm text-[#7a4000] italic font-cormorant">Thursday</div>
          </div>

          <div className="venue-detail text-center">
            <div className="vd-icon-wrap w-12 h-12 mx-auto mb-2.5 overflow-hidden flex items-center justify-center">
              <img
                src="/images/icons.jpg"
                alt="Clock icon"
                className="w-full h-full object-cover filter sepia saturate-[0.7] hue-rotate-[10deg]"
                style={{ objectPosition: "50% center" }}
              />
            </div>
            <div className="vd-label font-cinzel text-[10px] tracking-[3px] text-[#8a5500] uppercase mb-1">Ceremony Time</div>
            <div className="vd-value font-playfair text-[#4a1f00] font-semibold text-base">10:14 AM</div>
            <div className="vd-sub text-sm text-[#7a4000] italic font-cormorant">Poruwa begins</div>
          </div>

          <div className="venue-detail text-center">
            <div className="vd-icon-wrap w-12 h-12 mx-auto mb-2.5 flex items-center justify-center text-3xl">
              🗺️
            </div>
            <div className="vd-label font-cinzel text-[10px] tracking-[3px] text-[#8a5500] uppercase mb-1">Directions</div>
            <div className="vd-value font-playfair text-[#4a1f00] font-semibold text-base">Google Maps</div>
            <div className="vd-sub text-sm text-[#7a4000] italic font-cormorant">Click below ↓</div>
          </div>
        </div>

        {/* Google Maps Redirect Button */}
        <a
          href="https://maps.google.com/maps/place//data=!4m2!3m1!1s0x3ae256da57396c4f:0xde95603efb872f47?sa=X&ved=1t:8290&hl=en-lk&ictx=111"
          className="map-btn block mx-8 mb-8 py-3.5 text-center bg-gradient-to-r from-[#7a2800] to-[#c0392b] border border-[#d4a032] rounded-lg font-cinzel text-xs tracking-[3px] text-[#f5d778] uppercase shadow-[0_4px_20px_rgba(120,40,0,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(120,40,0,0.5)]"
          target="_blank"
          rel="noopener noreferrer"
        >
          📍 &nbsp; Open in Google Maps
        </a>
      </div>

      <span className="ornament text-center text-[#c8860a] text-lg mt-8 block relative z-10 tracking-[6px]">
        ✦ ༺ ❧ ༻ ✦
      </span>
    </section>
  );
}
