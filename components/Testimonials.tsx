"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    text: "AFS Development delivered our platform on time and beyond expectations. Their attention to detail and communication throughout was outstanding.",
    rating: 5,
  },
  {
    name: "Marcus Williams",
    role: "Founder, ShopEasy",
    text: "Our e-commerce sales increased 3x after AFS rebuilt our store. The team truly understood our business goals, not just the technical requirements.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "CTO, HealthBridge",
    text: "We needed a complex mobile app built fast. AFS pulled it off without cutting corners. I would recommend them to any serious startup.",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our <span className="text-primary-500">Clients Say</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Trusted by startups and enterprises worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-bold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
