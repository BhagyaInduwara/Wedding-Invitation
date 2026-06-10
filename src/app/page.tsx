"use client";

import React, { useEffect, useState } from "react";
import CinematicIntro from "@/components/CinematicIntro";
import Navigation from "@/components/Navigation";
import HomeSection from "@/components/HomeSection";
import DaySection from "@/components/DaySection";
import ScheduleSection from "@/components/ScheduleSection";
import VenueSection from "@/components/VenueSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    // Disable scrolling when cinematic intro is playing
    if (!introComplete) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [introComplete]);

  useEffect(() => {
    // Scroll reveal logic
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [introComplete]);

  return (
    <div className="min-h-screen flex flex-col relative bg-[#1a0800]">
      {/* Fixed Navigation (only interactive after intro) */}
      {introComplete && <Navigation />}

      {/* Main Page Sections */}
      <main className="flex-grow">
        <HomeSection />
        <DaySection />
        <ScheduleSection />
        <VenueSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cinematic Overlay (Fades out and unmounts) */}
      {!introComplete && (
        <CinematicIntro onComplete={() => setIntroComplete(true)} />
      )}
    </div>
  );
}
