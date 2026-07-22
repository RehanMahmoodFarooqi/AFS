"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Facebook, Linkedin, Mail, Phone, MapPin, ArrowRight, Heart, MessageCircle } from "lucide-react";
import Logo from "./Logo";

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/afsdevelopment?rdid=ir0RB4VaQqSgT4uI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F179QdRZg3G%2F",
    color: "hover:bg-blue-600",
    label: "Facebook",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/daniel-morris-396965187",
    color: "hover:bg-blue-700",
    label: "LinkedIn",
  },
  {
    icon: MessageCircle,
    href: "https://api.whatsapp.com/send/?phone=15409340195&text&type=phone_number&app_absent=0",
    color: "hover:bg-green-600",
    label: "WhatsApp",
  },
];

const footerLinks = {
  Services: [
    { name: "Web Development", href: "/services#web" },
    { name: "E-Commerce", href: "/services#ecommerce" },
    { name: "Mobile Apps", href: "/services#mobile" },
    { name: "CMS Development", href: "/services#cms" },
    { name: "SEO Services", href: "/services#seo" },
    { name: "UI/UX & PSD Conversion", href: "/services#design" },
  ],
  Company: [
    { name: "About Us", href: "/#about" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/#contact" },
  ],
  Technologies: [
    { name: "WordPress & WooCommerce", href: "/services#cms" },
    { name: "Shopify & Magento", href: "/services#ecommerce" },
    { name: "React & Next.js", href: "/services#web" },
    { name: "iOS & Android", href: "/services#mobile" },
    { name: "PHP & CodeIgniter", href: "/services#backend" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    const msg = encodeURIComponent(`New Newsletter Subscriber: ${email}`);
    window.open(
      `https://api.whatsapp.com/send/?phone=15409340195&text=${msg}&type=phone_number&app_absent=0`,
      "_blank"
    );
    setEmail("");
  }
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-primary-900/20 to-slate-900" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-4xl md:text-5xl font-black mb-4">
                Stay <span className="gradient-text">Connected</span>
              </h3>
              <p className="text-xl text-white/70">
                Subscribe to our newsletter for the latest updates, tips, and exclusive offers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
            >
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm text-white placeholder-white/50 focus:outline-none border-2 border-white/20 focus:border-accent-500 transition-all"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 87, 34, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary-500 to-accent-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 shadow-xl whitespace-nowrap"
                >
                  <span>Subscribe</span>
                  <ArrowRight size={20} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="mb-6">
                  <Logo size="md" />
                </div>
                <p className="text-white/70 leading-relaxed mb-6">
                  Building innovative digital solutions that transform businesses and
                  create lasting impact. Your success is our mission.
                </p>
              </motion.div>

              {/* Social Links — Facebook, LinkedIn, WhatsApp only */}
              <div className="flex space-x-3 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -5 }}
                    className={`w-12 h-12 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 transition-all ${social.color}`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>

              {/* Quick Contact */}
              <div className="space-y-3">
                {[
                  { icon: Mail, text: "contact@afsdevelopment.com", href: "https://mail.google.com/mail/?view=cm&to=contact@afsdevelopment.com" },
                  { icon: Phone, text: "+1 (540) 934-0195", href: "https://api.whatsapp.com/send/?phone=15409340195&text&type=phone_number&app_absent=0" },
                  { icon: MapPin, text: "18276 Waterloo Road, Amissville, VA 20106", href: "https://maps.google.com/?q=18276+Waterloo+Road+Amissville+VA+20106" },
                ].map((contact, i) => (
                  <motion.a
                    key={i}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 text-white/70 hover:text-accent-400 transition-colors"
                  >
                    <contact.icon size={18} />
                    <span className="text-sm">{contact.text}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([title, links], columnIndex) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + columnIndex * 0.1 }}
              >
                <h4 className="text-white font-black text-lg mb-6 relative inline-block">
                  {title}
                  <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full" />
                </h4>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + linkIndex * 0.05 }}
                    >
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5, color: "#ff5722" }}
                        className="text-white/70 hover:text-accent-400 transition-all text-sm block"
                      >
                        {link.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/60 text-sm text-center md:text-left"
            >
              © {new Date().getFullYear()} AFS Development. All rights reserved.
              <span className="mx-2">•</span>
              Crafted with <Heart className="inline text-red-500 fill-red-500 mx-1" size={14} /> by our team
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm"
            >
              {["Privacy", "Terms", "Cookies"].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ y: -2, color: "#ff5722" }}
                  className="text-white/60 hover:text-accent-400 transition-all"
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Achievement Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pb-8 flex flex-wrap justify-center gap-6 text-white/40 text-xs"
        >
          {["🏆 Top Rated 2024", "⭐ 4.9/5 Average Rating", "🎖️ ISO Certified", "🔒 SOC 2 Compliant", "💎 Award Winner"].map((badge) => (
            <motion.div
              key={badge}
              whileHover={{ scale: 1.1, color: "#ff5722" }}
              className="transition-all cursor-default"
            >
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500" />
    </footer>
  );
}
