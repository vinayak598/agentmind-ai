"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useLayoutEffect, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const PRODUCTS = [
  { title: "SupportAI", slug: "/products#supportai", desc: "AI customer support automation" },
  { title: "SalesAI", slug: "/products#salesai", desc: "AI-driven sales automation" },
  { title: "FlowAI", slug: "/products#flowai", desc: "Workflow orchestration & automation" },
  { title: "HealthAI", slug: "/products#healthai", desc: "Healthcare-ready communication AI" },
  { title: "DevSupportAI", slug: "/products#devsupportai", desc: "Developer documentation & triage automation" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  // underline indicator refs
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const indicatorRef = useRef<HTMLDivElement | null>(null);   // ⭐ FIXED (must exist)

  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  // floating effect
  useEffect(() => {
    const scrollHandler = () => setScrolled(window.scrollY > 20);
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  // underline update
  function updateIndicator(key?: string) {
    const active =
      key ?? (pathname === "/" ? "home" : pathname.replace("/", ""));

    const el = linkRefs.current[active];
    if (!el) {
      setIndicator((i) => ({ ...i, opacity: 0 }));
      return;
    }

    const rect = el.getBoundingClientRect();
    const parentRect = el.parentElement!.getBoundingClientRect();

    setIndicator({
      left: rect.left - parentRect.left,
      width: rect.width,
      opacity: 1,
    });
  }

  useLayoutEffect(() => updateIndicator(), [pathname]);

  return (
    <>
      {/* FLOATING NAV */}
      <motion.nav
        initial={false}
        animate={{
          backdropFilter: scrolled ? "blur(18px)" : "blur(0px)",
          backgroundColor: scrolled
            ? "rgba(255,255,255,0.06)"
            : "rgba(255,255,255,0.00)",
          boxShadow: scrolled
            ? "0 8px 28px rgba(0,0,0,0.30)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.25 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-2xl border-none"
      >
        <div className="flex items-center justify-between px-6 py-3 min-w-[92vw] md:min-w-[900px]">

          {/* BRAND */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              width={44}
              height={44}
              alt="logo"
              className="rounded-xl"
            />
            <div>
              <div className="font-bold text-lg leading-tight">AgentMind AI</div>
              <div className="text-xs text-muted">Future-Safe AI Products</div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10 relative">
            <div className="relative flex items-center gap-8">

              {/* HOME */}
              <a
                href="/"
                ref={(el) => (linkRefs.current["home"] = el)}
                onMouseEnter={() => updateIndicator("home")}
                onMouseLeave={() => updateIndicator()}
                className={`cursor-pointer ${
                  pathname === "/" ? "opacity-100" : "opacity-70"
                }`}
              >
                Home
              </a>

              {/* PRODUCTS */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setMegaOpen(true);
                  updateIndicator("products");
                }}
                onMouseLeave={() => {
                  setMegaOpen(false);
                  updateIndicator();
                }}
              >
                <a
                  href="/products"
                  ref={(el) => (linkRefs.current["products"] = el)}
                  className={`inline-flex items-center gap-1 cursor-pointer ${
                    pathname.startsWith("/products")
                      ? "opacity-100"
                      : "opacity-70"
                  }`}
                >
                  Products <ChevronDown size={14} />
                </a>

                {/* MEGA MENU */}
                <AnimatePresence>
                  {megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 14 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full mt-4 left-0 w-[550px] bg-[var(--color-bg)] border border-white/10 rounded-xl p-5 shadow-xl z-50"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        {PRODUCTS.map((p) => (
                          <Link
                            key={p.title}
                            href={p.slug}
                            className="p-3 rounded-md hover:bg-white/5 transition"
                          >
                            <div className="font-semibold">{p.title}</div>
                            <div className="text-sm text-muted">{p.desc}</div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ABOUT */}
              <a
                href="/about"
                ref={(el) => (linkRefs.current["about"] = el)}
                onMouseEnter={() => updateIndicator("about")}
                onMouseLeave={() => updateIndicator()}
                className={`cursor-pointer ${
                  pathname === "/about" ? "opacity-100" : "opacity-70"
                }`}
              >
                About
              </a>

              {/* FOUNDER */}
              <a
                href="/founder"
                ref={(el) => (linkRefs.current["founder"] = el)}
                onMouseEnter={() => updateIndicator("founder")}
                onMouseLeave={() => updateIndicator()}
                className={`cursor-pointer ${
                  pathname === "/founder" ? "opacity-100" : "opacity-70"
                }`}
              >
                Founder
              </a>

              {/* CONTACT */}
              <a
                href="/contact"
                ref={(el) => (linkRefs.current["contact"] = el)}
                onMouseEnter={() => updateIndicator("contact")}
                onMouseLeave={() => updateIndicator()}
                className={`cursor-pointer ${
                  pathname === "/contact" ? "opacity-100" : "opacity-70"
                }`}
              >
                Contact
              </a>

              {/* UNDERLINE INDICATOR */}
              <motion.div
                ref={indicatorRef}
                initial={{ opacity: 0, width: 0 }}
                animate={{
                  x: indicator.left,
                  width: indicator.width,
                  opacity: indicator.opacity,
                }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-[-6px] h-[3px] bg-[var(--color-brand)] rounded-full pointer-events-none"
              />
            </div>

            {/* CTA */}
            <a
              href="https://www.linkedin.com/company/agentmind-ai/"
              target="_blank"
              className="btn btn-primary"
            >
              LinkedIn
            </a>
            <ThemeToggle />
          </div>

          {/* MOBILE */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setOpen(true)}
              className="p-2 bg-white/10 rounded-lg"
            >
              <Menu />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          >
            <motion.div
              initial={{ x: 280 }}
              animate={{ x: 0 }}
              exit={{ x: 280 }}
              transition={{ type: "spring", stiffness: 160 }}
              className="absolute right-0 top-0 w-[280px] h-full bg-[var(--color-bg)] border-l border-white/10 p-6 flex flex-col"
            >
              <div className="flex items-center justify-between">
                <Image
                  src="/logo.jpg"
                  width={40}
                  height={40}
                  alt="logo"
                  className="rounded-lg"
                />
                <button onClick={() => setOpen(false)}>
                  <X size={26} />
                </button>
              </div>

              <nav className="flex flex-col gap-6 mt-10 text-lg">
                <Link href="/products" onClick={() => setOpen(false)}>
                  Products
                </Link>
                <Link href="/about" onClick={() => setOpen(false)}>
                  About
                </Link>
                <Link href="/founder" onClick={() => setOpen(false)}>
                  Founder
                </Link>
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Contact
                </Link>

                <a
                  href="https://www.linkedin.com/company/agentmind-ai/"
                  target="_blank"
                  className="btn btn-primary"
                >
                  LinkedIn
                </a>
              </nav>

              <div className="mt-auto pt-10">
                <ThemeToggle />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
