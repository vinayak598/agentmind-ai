"use client";

import Hero from "@/components/Hero";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Home() {
  const controls = useAnimation();
  const scrollRef = useRef<HTMLDivElement>(null);
  let timeout: any = null;

  // Smooth infinite auto-scroll
  const startAutoScroll = () => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        duration: 22,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  // Stop and restart auto-scroll
  const stopAutoScroll = () => {
    controls.stop();
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      startAutoScroll();
    }, 2000); // Resume after 2s
  };

  useEffect(() => {
    startAutoScroll();
    const el = scrollRef.current;
    if (!el) return;

    // Detect any user interaction
    const events = ["wheel", "touchstart", "touchmove", "mousedown", "scroll"];

    events.forEach((evt) => {
      el.addEventListener(evt, stopAutoScroll, { passive: true });
    });

    return () => {
      events.forEach((evt) =>
        el.removeEventListener(evt, stopAutoScroll)
      );
    };
  }, []);

  return (
    <>
      <Hero />

      <section className="mt-20 space-y-6">
        <h2 className="text-3xl font-bold">Next — What We Are Building</h2>
        <p className="text-muted">Upcoming AgentMind AI capabilities.</p>

        <div
          ref={scrollRef}
          className="overflow-hidden relative py-4 cursor-grab active:cursor-grabbing touch-pan-x"
        >
          <motion.div
            className="flex gap-6"
            animate={controls}
            drag="x"
            dragConstraints={{ left: -500, right: 0 }}
            dragElastic={0.1}
            onDragStart={stopAutoScroll}
            onDragEnd={startAutoScroll}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-6">
                <RoadmapCard
                  title="Autonomous Support Agent"
                  desc="AI that resolves customer issues end-to-end."
                />
                <RoadmapCard
                  title="Workflow Orchestration"
                  desc="AI agents collaborating on complex tasks."
                />
                <RoadmapCard
                  title="Knowledge Engine"
                  desc="Automatic syncing of documents and apps."
                />
                <RoadmapCard
                  title="Human-in-Loop"
                  desc="Approve or supervise AI tasks easily."
                />
                <RoadmapCard
                  title="Performance Dashboard"
                  desc="Real-time metrics for intelligent agents."
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

function RoadmapCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="min-w-[250px] md:min-w-[280px] border rounded-2xl p-6 bg-[var(--color-card)]">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted mt-2">{desc}</p>
    </div>
  );
}

