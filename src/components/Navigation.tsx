"use client";

import React, { useEffect, useState } from "react";

const NAV_LINKS = [
  { id: "page1", label: "Home" },
  { id: "page2", label: "The Day" },
  { id: "page3", label: "Schedule" },
  { id: "page4", label: "Venue" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("page1");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (const { id } of NAV_LINKS) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[2000] flex justify-center gap-6 sm:gap-10 py-3.5 px-8
                 border-b-2 border-[#b48228]/40 shadow-sm
                 bg-[rgba(255,245,220,0.95)] backdrop-blur-[10px]"
    >
      {NAV_LINKS.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => scrollTo(e, id)}
          className={`font-cinzel text-[10px] sm:text-[11px] tracking-[3px] uppercase font-semibold
                      transition-colors duration-300
                      ${
                        activeSection === id
                          ? "text-[#c8860a] border-b border-[#c8860a] pb-0.5"
                          : "text-[#7a4f00] hover:text-[#c8860a]"
                      }`}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
