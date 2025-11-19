"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <Hero />

      {/* PRODUCTS SECTION */}
      <Section
        title="Products"
        subtitle="Our core AI products are launching soon with next-generation autonomous capabilities."
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-10"
        >
          <ProductCard
            title="SupportAI"
            desc="AI-powered customer support automation."
            comingSoon
          />
          <ProductCard
            title="SalesAI"
            desc="AI-driven sales qualification & outreach."
            comingSoon
          />
          <ProductCard
            title="FlowAI"
            desc="Business workflow & task orchestration automation."
            comingSoon
          />
        </motion.div>
      </Section>
    </>
  );
}
