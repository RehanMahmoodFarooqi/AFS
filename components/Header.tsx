"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/#about" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Contact", href: "/#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/">
          <Logo size="sm" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className={`font-medium transition-colors relative group ${
                isScrolled ? "text-slate-700" : "text-slate-800"
              }`}
            >
              {item.name}
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-bg group-hover:w-full transition-all duration-300"
              />
            </motion.a>
          ))}
        </nav>

        <motion.a
          href="https://api.whatsapp.com/send/?phone=15409340195&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 87, 34, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block gradient-bg text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          Get Started
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-slate-700"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white shadow-lg"
        >
          <nav className="flex flex-col space-y-4 px-4 py-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-700 hover:text-primary-500 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
                href="https://api.whatsapp.com/send/?phone=15409340195&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-500 text-white px-6 py-2 rounded-full hover:bg-primary-600 transition-colors"
              >
                Get Started
              </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
