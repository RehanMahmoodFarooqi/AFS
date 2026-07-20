"use client";

import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "white";
}

const sizes = {
  sm:  { width: 140, height: 52 },
  md:  { width: 190, height: 72 },
  lg:  { width: 260, height: 98 },
  xl:  { width: 340, height: 128 },
};

export default function Logo({ className = "", size = "md", variant = "default" }: LogoProps) {
  const { width, height } = sizes[size];
  const blue   = variant === "white" ? "#ffffff" : "#1e3a9e";
  const orange = variant === "white" ? "#cccccc" : "#ff5722";

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`inline-flex items-center ${className}`}
    >
      {/*
        This SVG is a faithful recreation of your AFS Development logo:
        - A: bold blue, italic slant with crossbar
        - F: solid orange block with internal cut-outs
        - S: thick rounded blue S
        - DEVELOPMENT: orange spaced caps below

        TO USE YOUR ACTUAL LOGO IMAGE instead:
        1. Save your logo as public/logo.png
        2. Replace this entire <svg> block with:
           <img src="/logo.png" alt="AFS Development" width={width} height={height} style={{ objectFit: "contain" }} />
      */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 520 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── A (blue, italic/bold, with crossbar) ── */}
        {/* Left diagonal stroke */}
        <polygon points="8,155  50,8  82,8  40,155" fill={blue} />
        {/* Right vertical stroke */}
        <rect x="90" y="8" width="34" height="147" fill={blue} />
        {/* Connect top of left slash to right stroke */}
        <polygon points="50,8  82,8  124,8  90,8" fill={blue} />
        {/* Crossbar */}
        <rect x="34" y="92" width="90" height="24" fill={blue} />

        {/* ── F (orange, solid block with cut-outs) ── */}
        {/* Vertical stem */}
        <rect x="152" y="8"  width="42"  height="147" fill={orange} />
        {/* Top horizontal bar */}
        <rect x="152" y="8"  width="130" height="40"  fill={orange} />
        {/* Middle horizontal bar */}
        <rect x="152" y="100" width="110" height="34"  fill={orange} />

        {/* ── S (blue, thick and rounded) ── */}
        <path
          d={`
            M 502,40
            C 488,18 462,8 434,10
            C 400,13 374,34 372,60
            C 370,84 386,100 412,110
            L 452,122
            C 472,130 482,142 480,158
            C 478,174 462,184 440,184
            C 416,184 394,172 384,152
            L 360,168
            C 374,192 402,204 440,202
            C 478,200 504,182 508,156
            C 512,130 494,114 466,104
            L 426,92
            C 408,86 396,74 398,56
            C 400,42 416,30 438,28
            C 460,26 480,36 494,54
            Z
          `}
          fill={blue}
        />

        {/* ── DEVELOPMENT (orange, spaced) ── */}
        <text
          x="258"
          y="197"
          textAnchor="middle"
          fontFamily="'Arial Black', 'Impact', Arial, sans-serif"
          fontWeight="900"
          fontSize="26"
          fill={orange}
          letterSpacing="9"
        >
          DEVELOPMENT
        </text>
      </svg>
    </motion.div>
  );
}
