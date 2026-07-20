"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Star, CheckCircle2, Zap, Trophy, Users, ExternalLink } from "lucide-react";
import Logo from "./Logo";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-orange-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,64,175,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,87,34,0.15),transparent_50%)]" />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgzMCw2NCwxNzUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-3xl blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 80, 0],
            x: [0, -60, 0],
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 right-20 w-40 h-40 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-full blur-2xl"
        />

        {/* Geometric shapes */}
        {([...Array(8)] as undefined[]).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -50 * (i % 2 ? 1 : -1), 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className={`absolute ${i % 2 === 0 ? 'border-primary-300' : 'border-accent-300'} border-2 rounded-lg`}
            style={{
              width: 30 + i * 10,
              height: 30 + i * 10,
              top: `${10 + i * 10}%`,
              left: `${5 + i * 12}%`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-accent-100 px-6 py-3 rounded-full mb-6 border border-primary-200/50 shadow-lg"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Star className="text-accent-600 fill-accent-600" size={20} />
              </motion.div>
              <span className="font-bold text-primary-700">
                #1 Development Partner
              </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Trophy className="text-primary-600" size={20} />
              </motion.div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
            >
              <span className="text-slate-900">Transform</span>
              <br />
              <span className="text-slate-900">Ideas Into</span>
              <br />
              <motion.span
                className="gradient-text inline-block"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Reality
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed max-w-2xl"
            >
              Award-winning software development that drives real business results.
              <span className="font-semibold gradient-text"> Fast. Reliable. Exceptional.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.a
                href="https://api.whatsapp.com/send/?phone=15409340195&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(255, 87, 34, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="gradient-bg text-white px-10 py-5 rounded-full font-bold text-lg flex items-center space-x-3 shadow-2xl group"
              >
                <span>Start Your Project</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 64, 175, 0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border-2 border-primary-600 text-primary-600 px-10 py-5 rounded-full font-bold text-lg flex items-center space-x-3 shadow-xl hover:shadow-2xl transition-all"
              >
                <Play size={24} className="fill-current" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { icon: Users, number: "200+", label: "Happy Clients" },
                { icon: CheckCircle2, number: "500+", label: "Projects Done" },
                { icon: Zap, number: "98%", label: "Success Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-slate-100"
                >
                  <stat.icon className="text-accent-600 mx-auto mb-2" size={28} />
                  <div className="text-2xl md:text-3xl font-black gradient-text">{stat.number}</div>
                  <div className="text-xs md:text-sm text-slate-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Card Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block h-[600px]"
          >
            {/* Main showcase card */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotateY: [0, 5, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-30"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-200">

                {/* ── Row 1: Logo + AFS Development ── */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <Logo size="sm" />
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-3 h-3 bg-slate-300 rounded-full" />
                    ))}
                  </div>
                </div>

                {/* ── Row 2: About Us animated text (same animation as the lines) ── */}
                <div className="space-y-3 mb-6 overflow-hidden">
                  {[
                    { text: "Building world-class digital products", pct: "100%", delay: 0, grad: "linear-gradient(90deg,#1e40af,#ff5722)" },
                    { text: "Web • Mobile • E-Commerce • SEO", pct: "82%",  delay: 0.2, grad: "#1e40af" },
                    { text: "10+ years · 500+ projects · 200+ clients", pct: "66%", delay: 0.4, grad: "#ff5722" },
                  ].map((row, i) => (
                    <div key={i} className="relative">
                      {/* animated bar (same back-and-forth as original lines) */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: [0, row.pct, 0] }}
                        transition={{ duration: 3, delay: row.delay, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
                        className="absolute inset-0 h-full rounded-full opacity-15"
                        style={{ background: row.grad }}
                      />
                      {/* text on top */}
                      <motion.div
                        animate={{ x: [0, 6, 0] }}
                        transition={{ duration: 3, delay: row.delay, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
                        className="relative flex items-center h-9 px-3 rounded-full"
                        style={{ background: `${row.grad}18` }}
                      >
                        <span
                          className="text-xs font-bold tracking-wide"
                          style={{
                            background: row.grad,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          {row.text}
                        </span>
                      </motion.div>
                    </div>
                  ))}
                </div>

                {/* ── Row 3: 6 project tiles ── */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { name: "Chemical Guys",  bg: "from-red-500 to-red-700",        icon: "🚗", url: "https://www.chemicalguys.com" },
                    { name: "Louis XVI",      bg: "from-slate-700 to-slate-900",    icon: "⌚", url: "https://www.louisxviwatches.com" },
                    { name: "Impact Dental",  bg: "from-blue-500 to-blue-700",      icon: "🦷", url: "https://impactdentaldesigns.com" },
                    { name: "Bargz",          bg: "from-primary-500 to-primary-700",icon: "🛒", url: "https://bargz.com" },
                    { name: "Let's Breathe",  bg: "from-teal-500 to-teal-700",      icon: "🌿", url: "https://letsbreathebetter.com" },
                    { name: "Karner Blue",    bg: "from-accent-500 to-accent-700",  icon: "💼", url: "https://www.karnerbluecapital.com" },
                  ].map((proj) => (
                    <motion.a
                      key={proj.name}
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08, y: -4 }}
                      className={`h-20 bg-gradient-to-br ${proj.bg} rounded-xl flex flex-col items-center justify-center shadow-md gap-1 relative group overflow-hidden`}
                    >
                      <span className="text-xl">{proj.icon}</span>
                      <span className="text-white text-[9px] font-bold text-center leading-tight px-1">{proj.name}</span>
                      {/* hover overlay */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                        <ExternalLink size={18} className="text-white" />
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* ── Row 4: avatars + View Projects → #portfolio ── */}
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-3">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 border-2 border-white"
                      />
                    ))}
                  </div>
                  <motion.a
                    href="#portfolio"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="gradient-bg text-white px-6 py-2 rounded-full font-bold shadow-lg flex items-center gap-2"
                  >
                    View Projects
                    <ExternalLink size={14} />
                  </motion.a>
                </div>

              </div>
            </motion.div>

            {/* Floating badges */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [2, -2, 2],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-8 -right-8 gradient-bg text-white p-6 rounded-2xl shadow-2xl z-40"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Trophy size={32} />
              </motion.div>
              <div className="text-3xl font-black mt-2">Top 1%</div>
              <div className="text-sm opacity-90">Developers</div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border-4 border-accent-500 z-40"
            >
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="text-accent-600" size={36} />
                </motion.div>
                <div>
                  <div className="text-2xl font-black gradient-text">24/7</div>
                  <div className="text-sm text-slate-600 font-bold">Support</div>
                </div>
              </div>
            </motion.div>

            {/* Orbiting elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 w-96 h-96 -ml-48 -mt-48 pointer-events-none"
            >
              {[0, 90, 180, 270].map((angle, i) => (
                <motion.div
                  key={angle}
                  className="absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${angle}deg) translateY(-180px)`,
                  }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], rotate: [-360, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    className={`w-4 h-4 rounded-full ${
                      i % 2 === 0 ? 'bg-primary-500' : 'bg-accent-500'
                    } shadow-lg`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute bottom-8 left-1/2 -ml-6 z-20"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2"
        >
          <div className="w-8 h-14 border-3 border-primary-500 rounded-full flex justify-center pt-3">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-3 gradient-bg rounded-full"
            />
          </div>
          <span className="text-sm text-slate-600 font-medium">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
