"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "white";
}

const sizes = {
  sm:  { width: 90, height: 34 },
  md:  { width: 130, height: 50 },
  lg:  { width: 190, height: 72 },
  xl:  { width: 260, height: 98 },
};

export default function Logo({ className = "", size = "md", variant = "default" }: LogoProps) {
  const { width, height } = sizes[size];

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src="/images/afs_logo-removebg-preview.png"
        alt="AFS Development"
        width={width}
        height={height}
        style={{ objectFit: "contain", filter: variant === "white" ? "brightness(0) invert(1)" : "none" }}
        priority
      />
    </motion.div>
  );
}
