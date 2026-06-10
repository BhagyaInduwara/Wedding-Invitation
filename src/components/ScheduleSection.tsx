"use client";

import React from "react";

interface TimelineEvent {
  time: string;
  name: string;
  desc: string;
  icon: string;
}

const events: TimelineEvent[] = [
  {
    time: "9:15 AM",
    name: "Guests Arrive",
    desc: "Welcome & reception begins",
    icon: "🌸",
  },
  {
    time: "10:14 AM",
    name: "Poruwa Ceremony",
    desc: "Sacred traditional union under the Poruwa",
    icon: "🪷",
  },
  {
    time: "4:00 PM",
    name: "Departure of Bride & Groom",
    desc: "The couple departs on their new journey",
    icon: "💒",
  },
];

function EventContent({ event }: { event: TimelineEvent }) {
  return (
    <div>
      <p className="font-playfair text-[1.05rem] font-semibold text-[#4a1f00] leading-snug">
        {event.name}
      </p>
      <p className="font-cinzel text-[11px] tracking-[2px] text-[#8a5500] mt-1">
        ⏰ {event.time}
      </p>
      <p className="font-cormorant text-[0.9rem] text-[#7a4000] italic mt-1 leading-relaxed">
        {event.desc}
      </p>
    </div>
  );
}

export default function ScheduleSection() {
  return (
    <section
      id="page3"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20 px-4 bg-[#1a0800]"
    >
      {/* Mandala Background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-[0.18]"
        style={{ backgroundImage: "url('/images/background.jpg')" }}
      />
      <div className="absolute inset-0 bg-[rgba(255,240,200,0.1)] pointer-events-none z-[1]" />

      {/* Section Title */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="font-cinzel text-[clamp(1.4rem,5vw,2.2rem)] text-[#7a2800] tracking-[5px] drop-shadow-[0_2px_10px_rgba(212,160,50,0.3)]">
          ORDER OF EVENTS
        </h2>
        <div className="gold-divider">
          <span className="text-[#c8860a] text-sm">🌺</span>
        </div>
        <p className="font-cormorant text-base text-[#6b3800] italic tracking-widest">
          The journey of our sacred day
        </p>
      </div>

      {/* Timeline */}
      <div className="relative z-10 w-full max-w-[620px] mx-auto px-4">

        {/* Vertical centre line — hidden on mobile, shown on sm+ */}
        <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#c8860a] to-transparent" />

        {events.map((event, index) => {
          const isEven = index % 2 === 1;

          return (
            <div key={index} className="relative flex items-center mb-12">

              {/* ── DESKTOP LAYOUT (sm+): 3-column grid ── */}

              {/* Left text cell — visible sm+ — shows content only on ODD items */}
              <div className="hidden sm:block w-[calc(50%-30px)] pr-8 text-right">
                {!isEven && <EventContent event={event} />}
              </div>

              {/* Centre icon */}
              <div className="hidden sm:flex flex-shrink-0 w-[60px] h-[60px] items-center justify-center z-10">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl bg-gradient-to-br from-[#c8860a] via-[#f5d778] to-[#c8860a] border-2 border-[#7a4f00] shadow-[0_0_20px_rgba(200,134,10,0.5)] animate-dot-pulse">
                  {event.icon}
                </div>
              </div>

              {/* Right text cell — visible sm+ — shows content only on EVEN items */}
              <div className="hidden sm:block w-[calc(50%-30px)] pl-8 text-left">
                {isEven && <EventContent event={event} />}
              </div>

              {/* ── MOBILE LAYOUT (<sm): single row [icon] [text] ── */}
              <div className="flex sm:hidden items-start gap-5 w-full">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl bg-gradient-to-br from-[#c8860a] via-[#f5d778] to-[#c8860a] border-2 border-[#7a4f00] shadow-[0_0_20px_rgba(200,134,10,0.5)] animate-dot-pulse">
                  {event.icon}
                </div>
                <div className="flex-1 pt-1">
                  <EventContent event={event} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <span className="relative z-10 text-center text-[#c8860a] text-lg mt-4 tracking-[6px] block">
        ✦ ༺ ❧ ༻ ✦
      </span>
    </section>
  );
}
