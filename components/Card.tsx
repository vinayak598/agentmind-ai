"use client";
import { motion } from "framer-motion";

export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 160 }}
      className={`card ${className}`}
    >
      {children}
    </motion.div>
  );
}
