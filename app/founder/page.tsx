"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section className="max-w-4xl mx-auto space-y-10">
      
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl md:text-5xl font-bold"
      >
        Founder — <span className="text-[var(--color-brand)]">J.V.R. Vinayak</span>
      </motion.h1>

      {/* Founder Row */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="flex flex-col md:flex-row items-center md:items-start gap-10"
      >
        {/* PHOTO */}
        <div className="w-[200px] md:w-[260px]">
          <Image
            src="/founder.jpg"
            width={500}
            height={500}
            alt="Founder — J V R Vinayak"
            className="w-full h-auto rounded-2xl object-cover shadow-lg border border-white/10"
            priority
          />
        </div>

        {/* TEXT */}
        <div className="space-y-5 flex-1">
          <p className="text-muted text-lg leading-relaxed">
            J.V.R. Vinayak is the Founder & CEO of <strong>AgentMind AI</strong>,
            building the next generation of intelligent autonomous AI agents to
            automate Support, Sales, Operations, Healthcare, and Developer
            workflows.
          </p>

          <p className="text-muted text-lg leading-relaxed">
            His mission is to create <strong>future-safe AI products</strong> that
            scale reliably and transform how businesses operate.
          </p>

          <a
            href="https://www.linkedin.com/in/jvr-vinayak-31617625a/"
            target="_blank"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--color-brand)] text-black font-semibold rounded-xl shadow-sm hover:opacity-90 transition"
          >
            Connect on LinkedIn
          </a>
        </div>
      </motion.div>

      {/* Footer paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.2 }}
        className="text-lg text-muted leading-relaxed max-w-3xl"
      >
        Under his leadership, AgentMind AI is building long-term, reliable AI
        automation systems designed to scale with the future.
      </motion.p>
    </section>
  );
}
