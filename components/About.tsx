"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, TrendingUp, Target, Rocket, Shield, Clock, Sparkles } from "lucide-react";

const stats = [
  { icon: Users, value: "200+", label: "Happy Clients", color: "from-primary-500 to-primary-700" },
  { icon: Rocket, value: "500+", label: "Projects Delivered", color: "from-accent-500 to-accent-700" },
  { icon: Award, value: "10+", label: "Years Experience", color: "from-primary-600 to-accent-600" },
  { icon: Target, value: "98%", label: "Success Rate", color: "from-accent-600 to-primary-600" },
];

const highlights = [
  { icon: Shield, text: "100% Satisfaction Guarantee" },
  { icon: Clock, text: "On-Time Delivery" },
  { icon: Award, text: "Award-Winning Team" },
  { icon: TrendingUp, text: "Proven Track Record" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      
      {/* Floating shapes */}
      <motion.div
        animate={{
          y: [0, -50, 0],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 50, 0],
          rotate: [0, -180, -360],
        }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20"
            >
              <Sparkles className="text-accent-300" size={20} />
              <span className="font-bold">About Us</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Building the
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-white">
                Future Together
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              We're not just a development team—we're your strategic technology partner.
              With over a decade of experience, we've helped businesses of all sizes
              transform their ideas into powerful digital solutions.
            </p>
            
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Our commitment to excellence, innovation, and client success sets us apart.
              Every line of code we write, every solution we deliver is backed by
              expertise, passion, and a relentless pursuit of perfection.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20"
                >
                  <highlight.icon className="text-accent-300 flex-shrink-0" size={24} />
                  <span className="text-sm font-semibold">{highlight.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-accent-50 transition-colors"
            >
              Discover Our Story
            </motion.button>
          </motion.div>

          {/* Right - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.08, y: -10 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl text-center overflow-hidden border border-white/20">
                  {/* Hover gradient overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl`}
                    >
                      <stat.icon className="text-white" size={32} />
                    </motion.div>
                    
                    <motion.div
                      initial={{ scale: 1 }}
                      whileInView={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-5xl md:text-6xl font-black mb-2 bg-gradient-to-br from-primary-600 to-accent-600 bg-clip-text text-transparent group-hover:text-white"
                    >
                      {stat.value}
                    </motion.div>
                    
                    <div className="text-sm md:text-base font-bold text-slate-600 group-hover:text-white/90 transition-colors">
                      {stat.label}
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent-400/20 to-transparent rounded-bl-3xl" />
                </div>

                {/* Floating badge for first stat */}
                {index === 0 && (
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-4 -right-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 py-2 rounded-full font-bold shadow-xl text-sm"
                  >
                    🔥 Top Rated
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-black mb-2">🏆</div>
              <div className="text-2xl font-bold mb-1">Industry Leaders</div>
              <div className="text-white/80">Recognized excellence in software development</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">⚡</div>
              <div className="text-2xl font-bold mb-1">Lightning Fast</div>
              <div className="text-white/80">Rapid development without compromising quality</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">💎</div>
              <div className="text-2xl font-bold mb-1">Premium Quality</div>
              <div className="text-white/80">Every project delivered to perfection</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
