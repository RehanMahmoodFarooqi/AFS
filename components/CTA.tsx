"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Mail, CheckCircle2, X, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" ref={ref} className="py-24 bg-slate-900 text-white relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your{" "}
              <span className="text-primary-400">Next Project?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Lets collaborate and bring your vision to life. Get in touch with our team today.
            </p>
            <div className="space-y-4 mb-8">
              <a
                href="https://mail.google.com/mail/?view=cm&to=info@afsdevelopment.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 hover:text-accent-400 transition-colors group"
              >
                <Mail className="text-primary-400 group-hover:text-accent-400 flex-shrink-0" size={24} />
                <span className="text-slate-300 group-hover:text-accent-400 transition-colors">
                  info@afsdevelopment.com
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-slate-800 p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="name" value={form.name} onChange={handleChange}
                placeholder="Your Name" required
                className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500" />
              <input type="email" name="email" value={form.email} onChange={handleChange}
                placeholder="Your Email" required
                className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500" />
              <textarea rows={4} name="message" value={form.message} onChange={handleChange}
                placeholder="Tell us about your project" required
                className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500" />
              {status === "error" && <p className="text-red-400 text-sm">{errorMsg}</p>}
              <motion.button type="submit" disabled={status === "loading"}
                whileHover={{ scale: status === "loading" ? 1 : 1.03 }}
                whileTap={{ scale: status === "loading" ? 1 : 0.97 }}
                className="w-full bg-primary-500 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-primary-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                {status === "loading" ? (
                  <><Loader2 size={20} className="animate-spin" /><span>Sending</span></>
                ) : (
                  <><span>Send Message</span><ArrowRight size={20} /></>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {status === "success" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
            onClick={() => setStatus("idle")}>
            <motion.div initial={{ scale: 0.8, y: 40, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center relative">
              <button onClick={() => setStatus("idle")}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">
                <X size={22} />
              </button>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
                className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <CheckCircle2 className="text-white" size={40} />
              </motion.div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">Email Sent!</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Thanks for reaching out. Your message has been received and our team will contact you shortly.
              </p>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setStatus("idle")}
                className="gradient-bg text-white px-8 py-3 rounded-full font-bold shadow-lg">
                Got it
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
