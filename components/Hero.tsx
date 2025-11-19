"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative py-32">

      {/* Light / Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Autonomous AI Agents
          <span className="block text-[var(--color-brand)] mt-1">
            Built for Real Business Operations
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-muted mt-6 text-lg md:text-xl leading-relaxed">
          Support, Sales, Healthcare, Workflows and Developer Operations —
          automated with future-safe LLM agents and enterprise-grade orchestration.
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <Link href="/products">
            <Button size="lg" className="hover:scale-[1.03] transition">
              Explore Products
            </Button>
          </Link>

          <Link href="/contact">
            <Button variant="outline" size="lg" className="hover:scale-[1.03] transition">
              Talk to Us
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
