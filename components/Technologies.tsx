"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Sparkles } from "lucide-react";

const technologies = [
  { name: "React", category: "Frontend", icon: "⚛️", color: "from-blue-400 to-blue-600" },
  { name: "Next.js", category: "Framework", icon: "▲", color: "from-slate-700 to-slate-900" },
  { name: "TypeScript", category: "Language", icon: "TS", color: "from-blue-500 to-blue-700" },
  { name: "Node.js", category: "Backend", icon: "🟢", color: "from-green-500 to-green-700" },
  { name: "Python", category: "Backend", icon: "🐍", color: "from-yellow-500 to-blue-600" },
  { name: "AWS", category: "Cloud", icon: "☁️", color: "from-orange-400 to-orange-600" },
  { name: "Docker", category: "DevOps", icon: "🐳", color: "from-blue-400 to-blue-600" },
  { name: "MongoDB", category: "Database", icon: "🍃", color: "from-green-600 to-green-800" },
  { name: "PostgreSQL", category: "Database", icon: "🐘", color: "from-blue-600 to-indigo-700" },
  { name: "React Native", category: "Mobile", icon: "📱", color: "from-primary-500 to-primary-700" },
  { name: "GraphQL", category: "API", icon: "◆", color: "from-pink-500 to-purple-600" },
  { name: "Kubernetes", category: "DevOps", icon: "☸️", color: "from-blue-500 to-indigo-600" },
  { name: "Vue.js", category: "Frontend", icon: "V", color: "from-green-500 to-teal-600" },
  { name: "Django", category: "Backend", icon: "🎸", color: "from-green-700 to-green-900" },
  { name: "Flutter", category: "Mobile", icon: "🦋", color: "from-blue-400 to-cyan-500" },
  { name: "Redis", category: "Cache", icon: "🔴", color: "from-red-500 to-red-700" },
  { name: "TensorFlow", category: "AI/ML", icon: "🧠", color: "from-accent-500 to-accent-700" },
  { name: "Firebase", category: "Backend", icon: "🔥", color: "from-yellow-500 to-orange-600" },
];

export default function Technologies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
      </div>

      {/* Floating orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-20 w-64 h-64 bg-primary-500 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20"
          >
            <Sparkles className="text-accent-400" size={20} />
            <span className="font-bold text-white">Tech Stack</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white">
            Powered by
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-primary-400 to-accent-400">
              Cutting-Edge Tech
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We leverage the most advanced technologies to build fast, scalable, and secure solutions
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              whileHover={{ 
                scale: 1.15, 
                y: -10,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-white/30 hover:shadow-2xl hover:shadow-accent-500/20">
                {/* Gradient overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl`}
                />

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon/Emoji */}
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl mb-3"
                  >
                    {tech.icon}
                  </motion.div>

                  {/* Tech name */}
                  <div className="text-base md:text-lg font-black text-white mb-1">
                    {tech.name}
                  </div>

                  {/* Category badge */}
                  <div className="text-xs font-semibold text-accent-400">
                    {tech.category}
                  </div>
                </div>

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-br ${tech.color} opacity-20 rounded-bl-2xl rounded-tr-2xl`} />
              </div>

              {/* Glow effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-2xl blur-xl -z-10 opacity-0 group-hover:opacity-50 transition-opacity`}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            { icon: "🚀", title: "Always Up-to-Date", desc: "Latest tech stack and best practices" },
            { icon: "⚡", title: "Peak Performance", desc: "Optimized for speed and efficiency" },
            { icon: "🔒", title: "Enterprise Security", desc: "Bank-level security standards" },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all hover:border-white/30"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                className="text-5xl mb-4"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-2xl font-black text-white mb-2">{item.title}</h3>
              <p className="text-slate-300">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Code Icon */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-10 right-10 opacity-10"
        >
          <Code2 size={120} className="text-white" />
        </motion.div>
      </div>
    </section>
  );
}
