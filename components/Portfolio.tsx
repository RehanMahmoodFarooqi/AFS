"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ArrowRight, Star, Globe, Smartphone } from "lucide-react";

type ProjectCategory = "All" | "Web" | "E-Commerce" | "Mobile" | "WordPress" | "CMS";

const projects: {
  title: string;
  category: ProjectCategory;
  type: string;
  description: string;
  tags: string[];
  url?: string;
  color: string;
  icon: typeof Globe;
}[] = [
  {
    title: "Chemical Guys",
    category: "E-Commerce",
    type: "Shopify Store",
    description: "High-performance Shopify storefront for a globally recognised automotive care brand, built for scale and conversions.",
    tags: ["Shopify", "E-Commerce", "Custom Theme"],
    url: "https://www.chemicalguys.com",
    color: "from-primary-500 to-primary-700",
    icon: Globe,
  },
  {
    title: "Louis XVI Watches",
    category: "E-Commerce",
    type: "Shopify & WooCommerce",
    description: "Luxury watch e-commerce experience with bespoke product pages, Shopify storefront, and immersive brand presentation.",
    tags: ["Shopify", "WooCommerce", "Luxury E-Commerce"],
    url: "https://www.louisxviwatches.com",
    color: "from-accent-500 to-accent-700",
    icon: Globe,
  },
  {
    title: "Impact Dental Designs",
    category: "WordPress",
    type: "WordPress Website",
    description: "Professional dental practice website with appointment booking, service pages, and SEO-optimised content architecture.",
    tags: ["WordPress", "Healthcare", "SEO"],
    url: "https://impactdentaldesigns.com",
    color: "from-primary-600 to-accent-600",
    icon: Globe,
  },
  {
    title: "Karner Blue Capital",
    category: "WordPress",
    type: "WordPress Website",
    description: "Clean, authoritative financial services website built on WordPress with custom post types and compliance-ready design.",
    tags: ["WordPress", "Finance", "Custom Theme"],
    url: "https://www.karnerbluecapital.com",
    color: "from-accent-600 to-primary-600",
    icon: Globe,
  },
  {
    title: "Bargz",
    category: "E-Commerce",
    type: "E-Commerce Platform",
    description: "Full-featured e-commerce marketplace with product catalogue management, search, and streamlined checkout.",
    tags: ["E-Commerce", "Marketplace", "Custom Dev"],
    url: "https://bargz.com",
    color: "from-primary-500 to-primary-700",
    icon: Globe,
  },
  {
    title: "Let's Breathe Better",
    category: "Web",
    type: "Health & Wellness Website",
    description: "Informational and lead-generation website for a respiratory health brand with clean UX and conversion-focused design.",
    tags: ["HTML5", "CSS3", "Health"],
    url: "https://letsbreathebetter.com",
    color: "from-accent-500 to-accent-700",
    icon: Globe,
  },
  {
    title: "Heavy Equipment Transport",
    category: "Web",
    type: "HTML5 Website",
    description: "Logistics and freight services website built in HTML5 with responsive layout and quote request functionality.",
    tags: ["HTML5", "CSS3", "Logistics"],
    url: "https://www.heavyequipmenttransport.com",
    color: "from-primary-600 to-accent-600",
    icon: Globe,
  },
  {
    title: "Victor Espigares",
    category: "WordPress",
    type: "Portfolio Website",
    description: "Creative portfolio website for a professional artist, featuring custom galleries, multilingual support, and fluid animations.",
    tags: ["WordPress", "Portfolio", "Custom Theme"],
    url: "http://www.victorespigares.com",
    color: "from-accent-600 to-primary-600",
    icon: Globe,
  },
  {
    title: "Send It Society",
    category: "E-Commerce",
    type: "E-Commerce Store",
    description: "Action-sports brand online store with bold design, product collections, and seamless checkout experience.",
    tags: ["E-Commerce", "Shopify", "Sports"],
    url: "https://www.senditsociety.com",
    color: "from-primary-500 to-primary-700",
    icon: Globe,
  },
  {
    title: "Boise Window Cleaning",
    category: "WordPress",
    type: "Local Business Website",
    description: "Local service business website with online booking integration, service area pages, and Google Maps embed.",
    tags: ["WordPress", "Local SEO", "Booking"],
    url: "https://goboisewindowcleaning.com",
    color: "from-accent-500 to-accent-700",
    icon: Globe,
  },
  {
    title: "Israel National Bus Tracker",
    category: "Mobile",
    type: "iOS App",
    description: "Native iOS app showing live schedules and routes for buses and trains across Israel, available on the App Store.",
    tags: ["iOS", "Swift", "Maps & Transit"],
    color: "from-primary-600 to-accent-600",
    icon: Smartphone,
  },
  {
    title: "Origami Fun",
    category: "Mobile",
    type: "iOS App",
    description: "Companion app for the world-renowned Origami-Fun.com website — featuring 55+ models with step-by-step diagrams and videos.",
    tags: ["iOS", "Content App", "Educational"],
    color: "from-accent-600 to-primary-600",
    icon: Smartphone,
  },
];

const categories: ProjectCategory[] = ["All", "Web", "E-Commerce", "WordPress", "CMS", "Mobile"];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" ref={ref} className="py-24 relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,64,175,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,87,34,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-accent-100 px-6 py-3 rounded-full mb-6 border border-primary-200"
          >
            <Star className="text-accent-600 fill-accent-600" size={20} />
            <span className="font-bold text-primary-700">Our Work</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-slate-900">Real </span>
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A sample of what we've built across industries, platforms, and technologies
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
                activeCategory === cat
                  ? "gradient-bg text-white shadow-lg"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-primary-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200">
                <motion.div
                  animate={{ scaleX: hoveredIndex === index ? 1 : 0.3 }}
                  transition={{ duration: 0.4 }}
                  className={`h-1.5 bg-gradient-to-r ${project.color} origin-left`}
                />

                <div className="p-7">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-xs font-bold bg-gradient-to-r ${project.color} text-white px-3 py-1.5 rounded-full shadow`}>
                      {project.type}
                    </span>
                    {project.url && (
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        className="text-slate-400 hover:text-accent-600 transition-colors"
                      >
                        <ExternalLink size={22} />
                      </motion.a>
                    )}
                    {!project.url && (
                      <project.icon className="text-slate-300" size={22} />
                    )}
                  </div>

                  <h3 className="text-2xl font-black mb-3 text-slate-900">{project.title}</h3>
                  <p className="text-slate-600 mb-5 leading-relaxed text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.url ? (
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className={`w-full bg-gradient-to-r ${project.color} text-white py-3 rounded-full font-bold flex items-center justify-center space-x-2 shadow`}
                    >
                      <span>Visit Website</span>
                      <ExternalLink size={16} />
                    </motion.a>
                  ) : (
                    <div className={`w-full bg-gradient-to-r ${project.color} text-white py-3 rounded-full font-bold flex items-center justify-center space-x-2 opacity-70`}>
                      <span>App Store Project</span>
                      <Smartphone size={16} />
                    </div>
                  )}
                </div>

                <motion.div
                  animate={{ opacity: hoveredIndex === index ? 0.04 : 0 }}
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <h3 className="text-4xl md:text-5xl font-black mb-4">Ready to Build Your Project?</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of clients who've launched successful products with AFS Development
          </p>
          <motion.a
            href="https://api.whatsapp.com/send/?phone=15409340195&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary-600 px-12 py-5 rounded-full font-black text-lg shadow-2xl inline-flex items-center space-x-3"
          >
            <span>Start Your Project</span>
            <ArrowRight size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
