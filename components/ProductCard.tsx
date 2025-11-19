"use client";

import { motion } from "framer-motion";

export default function ProductCard({
  title,
  desc,
  comingSoon = true,
}: {
  title: string;
  desc: string;
  comingSoon?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="card p-6 space-y-3 relative"
    >
      {comingSoon && (
        <span className="absolute top-3 right-3 text-xs bg-[var(--color-brand)] text-black px-2 py-1 rounded-md font-semibold">
          Coming Soon
        </span>
      )}

      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted">{desc}</p>
    </motion.div>
  );
}
