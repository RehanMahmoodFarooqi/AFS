"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Code, Smartphone, Globe, Database, ShoppingCart, Search,
  ArrowRight, CheckCircle, Sparkles, Layers, PenTool, TrendingUp, Languages
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Full-stack web solutions from simple landing pages to complex enterprise portals using modern frameworks and CMS platforms.",
    features: ["Custom HTML5 / CSS3 / JS", "React & Next.js", "WordPress & Multisite", "PHP / CodeIgniter / Laravel"],
    color: "from-primary-500 to-primary-700",
    bgColor: "bg-primary-50",
    borderColor: "border-primary-500",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    description: "End-to-end online store development on the leading platforms, from product pages to checkout and payment integration.",
    features: ["Shopify", "WooCommerce", "Magento", "Custom Storefronts"],
    color: "from-accent-500 to-accent-700",
    bgColor: "bg-accent-50",
    borderColor: "border-accent-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform apps for iOS and Android — from concept through App Store submission.",
    features: ["iOS (Swift / Objective-C)", "Android (Java / Kotlin)", "React Native", "Flutter"],
    color: "from-primary-600 to-accent-600",
    bgColor: "bg-gradient-to-br from-primary-50 to-accent-50",
    borderColor: "border-primary-400",
  },
  {
    icon: Layers,
    title: "CMS Development",
    description: "Custom theme and plugin development on every major CMS platform, including migrations and multilingual builds.",
    features: ["WordPress", "Drupal", "Joomla", "PSD-to-CMS Conversion"],
    color: "from-primary-500 to-primary-700",
    bgColor: "bg-primary-50",
    borderColor: "border-primary-500",
  },
  {
    icon: Database,
    title: "Backend & Custom Systems",
    description: "Robust server-side systems, APIs, and bespoke business applications including ERP, CRM, and booking platforms.",
    features: ["RESTful & GraphQL APIs", "ERP / CRM Systems", "ASP.NET & Node.js", "MySQL / PostgreSQL / MSSQL"],
    color: "from-accent-500 to-accent-700",
    bgColor: "bg-accent-50",
    borderColor: "border-accent-500",
  },
  {
    icon: PenTool,
    title: "UI/UX & PSD Conversion",
    description: "Pixel-perfect conversion of design files to responsive, accessible HTML/CSS and CMS templates.",
    features: ["PSD to HTML5", "PSD to WordPress", "PSD to Shopify", "Responsive & Mobile-First"],
    color: "from-primary-600 to-accent-600",
    bgColor: "bg-gradient-to-br from-primary-50 to-accent-50",
    borderColor: "border-accent-400",
  },
  {
    icon: Search,
    title: "SEO/Content Writing Services",
    description: "Data-driven search engine optimisation strategies that put your website on Google's first page — guaranteed.",
    features: ["Keyword Research & Strategy", "On-Page Optimisation", "Link Building", "Performance Reporting"],
    color: "from-primary-500 to-primary-700",
    bgColor: "bg-primary-50",
    borderColor: "border-primary-500",
  },
  {
    icon: TrendingUp,
    title: "Affiliate & Digital Marketing",
    description: "Revenue-generating affiliate marketing campaigns across top platforms, driving qualified traffic and conversions.",
    features: ["ClickBank", "JVZoo & WarriorPlus", "Ad Network Management", "Conversion Optimisation"],
    color: "from-accent-500 to-accent-700",
    bgColor: "bg-accent-50",
    borderColor: "border-accent-500",
  },
  {
    icon: Code,
    title: "Web Scraping & Automation",
    description: "Custom data extraction tools, browser automation, and API integrations to streamline workflows.",
    features: ["Structured Data Extraction", "API Integrations", "Process Automation", "Reporting Dashboards"],
    color: "from-primary-600 to-accent-600",
    bgColor: "bg-gradient-to-br from-primary-50 to-accent-50",
    borderColor: "border-accent-400",
  },
  {
    icon: Languages,
    title: "Translation Services",
    description: "Professional human translation across 50+ languages for websites, apps, legal documents, and marketing content — accurate, fast, and culturally precise.",
    features: ["50+ Languages Supported", "Website & App Localisation", "Legal & Technical Translation", "Certified & Proofreaded Translations"],
    color: "from-primary-500 to-accent-500",
    bgColor: "bg-gradient-to-br from-primary-50 to-accent-50",
    borderColor: "border-primary-400",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(30,64,175,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(255,87,34,0.05),transparent_50%)]" />

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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-accent-100 px-6 py-3 rounded-full mb-6 border border-primary-200"
          >
            <Sparkles className="text-accent-600" size={20} />
            <span className="font-bold text-primary-700">What We Do</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-slate-900">Our </span>
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From concept to launch — comprehensive digital services that grow your business
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.07 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative"
            >
              <div className={`relative h-full ${service.bgColor} p-8 rounded-3xl border-2 ${service.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden`}>
                {/* Animated bg on hover */}
                <motion.div
                  animate={{ opacity: hoveredIndex === index ? 1 : 0, scale: hoveredIndex === index ? 1 : 0.8 }}
                  transition={{ duration: 0.4 }}
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0`}
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}
                  >
                    <service.icon className="text-white" size={36} />
                  </motion.div>

                  <h3 className={`text-2xl font-black mb-3 transition-colors ${hoveredIndex === index ? "text-white" : "text-slate-900"}`}>
                    {service.title}
                  </h3>

                  <p className={`text-base mb-5 leading-relaxed transition-colors ${hoveredIndex === index ? "text-white/90" : "text-slate-600"}`}>
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <CheckCircle className={`flex-shrink-0 transition-colors ${hoveredIndex === index ? "text-white" : "text-accent-600"}`} size={18} />
                        <span className={`text-sm font-medium transition-colors ${hoveredIndex === index ? "text-white" : "text-slate-700"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href="/services"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 px-6 rounded-full font-bold flex items-center justify-center space-x-2 transition-all shadow-lg ${
                      hoveredIndex === index ? "bg-white text-primary-600" : `bg-gradient-to-r ${service.color} text-white`
                    }`}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="/services"
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(255, 87, 34, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="gradient-bg text-white px-12 py-5 rounded-full font-bold text-lg shadow-2xl inline-flex items-center space-x-3"
          >
            <span>View All Services</span>
            <ArrowRight size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
