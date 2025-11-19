"use client";

import { Linkedin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-32">

      {/* Top Gradient Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--color-brand)] to-transparent opacity-60" />


      {/* Soft Glow Behind (works in both themes) */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[480px] h-[110px] bg-[var(--color-brand)] blur-[85px] opacity-[0.12] pointer-events-none dark:opacity-[0.08]" />


      <div className="container py-20 grid md:grid-cols-3 gap-16 relative z-10">

        {/* BRAND */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">
            AgentMind AI
          </h3>

          <p className="text-muted max-w-md leading-relaxed dark:text-muted text-black/70">
            Future-safe AI agents engineered for enterprise Support, Sales,
            Healthcare and Developer operations — designed for long-term reliability.
          </p>
        </div>

        {/* COMPANY */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">
            Company
          </h3>

          <ul className="text-muted max-w-md leading-relaxed dark:text-muted text-black/70">
            <li><Link href="/products" className="hover:text-[var(--color-brand)] transition">Products</Link></li>
            <li><Link href="/about" className="hover:text-[var(--color-brand)] transition">About</Link></li>
            <li><Link href="/founder" className="hover:text-[var(--color-brand)] transition">Founder</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--color-brand)] transition">Contact</Link></li>
          </ul>
        </div>

        {/* CONNECT */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">
            Connect
          </h3>

          <ul className="text-muted max-w-md leading-relaxed dark:text-muted text-black/70">

            <li>
              <a 
                href="https://www.linkedin.com/company/agentmind-ai/"
                target="_blank"
                className="flex items-center gap-2 hover:text-[var(--color-brand)] transition"
              >
                <Linkedin size={18} />
                Company LinkedIn
                <ArrowUpRight size={16} />
              </a>
            </li>

            <li>
              <a 
                href="https://www.linkedin.com/in/jvr-vinayak-31617625a/"
                target="_blank"
                className="flex items-center gap-2 hover:text-[var(--color-brand)] transition"
              >
                <Linkedin size={18} />
                Founder LinkedIn
                <ArrowUpRight size={16} />
              </a>
            </li>

          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="text-muted max-w-md leading-relaxed dark:text-muted text-black/70 text-center ">
        © {new Date().getFullYear()} AgentMind AI — All rights reserved.
      </div>

    </footer>
  );
}
