"use client";

import { motion } from "framer-motion";

export default function SupportAI() {
  return (
    <section className="space-y-16">
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-5xl font-bold">SupportAI</h1>
        <p className="text-lg text-muted max-w-2xl">
          AI-powered customer support automation designed to resolve queries,
          reduce ticket load, and deliver intelligent conversations — instantly.
        </p>

        <button className="px-6 py-3 bg-[var(--color-brand)] text-black rounded-xl font-semibold hover:opacity-90 transition">
          Get Started
        </button>
      </motion.div>

      {/* FEATURES */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="grid md:grid-cols-3 gap-8"
      >
        <FeatureCard
          title="Instant AI Responses"
          desc="Resolve customer queries in milliseconds with intelligent natural language understanding."
        />
        <FeatureCard
          title="Smart Ticketing"
          desc="Automatically classify, prioritize, and escalate tickets to the right teams."
        />
        <FeatureCard
          title="Multi-Channel Support"
          desc="Deploy across your website, WhatsApp, email, and internal systems."
        />
      </motion.div>

      {/* PREVIEW / PLACEHOLDER */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="border rounded-2xl p-10 bg-[var(--color-card)]"
      >
        <h2 className="text-2xl font-semibold mb-4">Live Demo Coming Soon</h2>
        <p className="text-muted">
          You are building the first version of SupportAI.  
          A full dashboard, chat automation, workflows, and analytics will appear here.
        </p>
      </motion.div>
    </section>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="border rounded-2xl p-6 space-y-3"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted">{desc}</p>
    </motion.div>
  );
}
