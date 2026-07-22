"use client";

import { motion } from "framer-motion";
import {
  Globe, ShoppingCart, Smartphone, Layers, Database, PenTool,
  Search, TrendingUp, Code, CheckCircle, ArrowRight, Sparkles, Languages,
} from "lucide-react";

const serviceCategories = [
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    tagline: "From landing pages to enterprise portals",
    description:
      "We build fast, secure, and fully responsive websites for every business need. Whether it's a sleek marketing site or a complex multi-tenant platform, our team handles it end to end.",
    color: "from-primary-500 to-primary-700",
    bgColor: "bg-primary-50",
    borderColor: "border-primary-400",
    offerings: [
      "Custom HTML5 / CSS3 / JavaScript",
      "React & Next.js Applications",
      "PHP & CodeIgniter Systems",
      "ASP.NET Web Applications",
      "API & Third-Party Integrations (Ticket Network, TravelPort, etc.)",
      "Multilingual & Multi-site Builds",
      "Web Scraping & Data Extraction",
      "Responsive Mobile-First Design",
    ],
    projects: [
      { name: "Heavy Equipment Transport", url: "https://www.heavyequipmenttransport.com/" },
      { name: "Let's Breathe Better", url: "https://letsbreathebetter.com" },
      { name: "Bargz", url: "https://bargz.com/" },
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-Commerce Development",
    tagline: "Stores that convert visitors into customers",
    description:
      "We specialise in building high-converting online stores on every major platform. From product catalogues to payment gateways, we deliver complete e-commerce ecosystems.",
    color: "from-accent-500 to-accent-700",
    bgColor: "bg-accent-50",
    borderColor: "border-accent-400",
    offerings: [
      "Shopify Store Development & Custom Themes",
      "WooCommerce (WordPress) Stores",
      "Magento Development",
      "Custom Cart & Checkout Flows",
      "Payment Gateway Integration",
      "Product Import & Inventory Management",
      "Abandoned Cart & Upsell Funnels",
      "PSD to E-Commerce Conversion",
    ],
    projects: [
      { name: "Chemical Guys", url: "https://www.chemicalguys.com/" },
      { name: "Louis XVI Watches", url: "https://www.louisxviwatches.com/" },
      { name: "Send It Society", url: "https://www.senditsociety.com/" },
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    tagline: "iOS & Android apps users love",
    description:
      "From native Swift/Kotlin apps to cross-platform React Native and Flutter projects, we build mobile experiences that feel great on every device and get approved by app stores first time.",
    color: "from-primary-600 to-accent-600",
    bgColor: "bg-gradient-to-br from-primary-50 to-accent-50",
    borderColor: "border-primary-400",
    offerings: [
      "Native iOS Development (Swift / Objective-C)",
      "Native Android Development (Java / Kotlin)",
      "React Native Cross-Platform Apps",
      "Flutter Cross-Platform Apps",
      "App Store & Google Play Submission",
      "Push Notifications & In-App Messaging",
      "API Integration & Backend Connectivity",
      "App Maintenance & Updates",
    ],
    projects: [
      { name: "Israel National Bus Tracker (iOS)" },
      { name: "Origami Fun (iOS)" },
      { name: "Urdu Newspaper (Android)" },
    ],
  },
  {
    id: "cms",
    icon: Layers,
    title: "CMS Development",
    tagline: "Manage your content with ease",
    description:
      "We build on every major CMS platform, including custom plugins, theme development, migrations, and multilingual setups so your team can manage content without touching code.",
    color: "from-primary-500 to-primary-700",
    bgColor: "bg-primary-50",
    borderColor: "border-primary-400",
    offerings: [
      "WordPress Theme & Plugin Development",
      "WordPress Multisite Networks",
      "Drupal Module & Theme Development",
      "Joomla Development",
      "CMS Migrations (e.g. Joomla → Drupal)",
      "PSD to WordPress / Drupal / Joomla",
      "Custom Post Types & Advanced Custom Fields",
      "Multilingual CMS (WPML, Polylang)",
    ],
    projects: [
      { name: "Karner Blue Capital", url: "https://www.karnerbluecapital.com" },
      { name: "Impact Dental Designs", url: "https://impactdentaldesigns.com/" },
      { name: "Victor Espigares", url: "http://www.victorespigares.com/" },
    ],
  },
  {
    id: "backend",
    icon: Database,
    title: "Backend & Custom Systems",
    tagline: "Robust systems that power your operations",
    description:
      "When off-the-shelf software doesn't cut it, we build custom. ERP systems, CRM platforms, booking engines, fintech solutions — complex problems solved with clean, maintainable code.",
    color: "from-accent-500 to-accent-700",
    bgColor: "bg-accent-50",
    borderColor: "border-accent-400",
    offerings: [
      "ERP Systems (GL, Payroll, Inventory, Warehouse)",
      "Custom CRM for Call Centres & Sales Teams",
      "School & Clinic Management Systems",
      "Flight Reservation & Travel API Integration",
      "Fintech & Bitcoin Exchange Platforms",
      "RESTful & GraphQL APIs",
      "MySQL / PostgreSQL / MS SQL Server",
      "Microservices & Scalable Architectures",
    ],
    projects: [
      { name: "Knowledge Tester (CodeIgniter)" },
      { name: "Ticket Network API Integration" },
      { name: "Bitlish Bitcoin Exchange" },
    ],
  },
  {
    id: "design",
    icon: PenTool,
    title: "UI/UX & PSD Conversion",
    tagline: "Designs that look great and work perfectly",
    description:
      "We turn design files into pixel-perfect, accessible, and responsive front-end code. Whether it's HTML, a WordPress theme, or a Shopify template — we match every detail.",
    color: "from-primary-600 to-accent-600",
    bgColor: "bg-gradient-to-br from-primary-50 to-accent-50",
    borderColor: "border-accent-400",
    offerings: [
      "PSD / Figma / XD to HTML5",
      "PSD to WordPress Theme",
      "PSD to Shopify Theme",
      "PSD to Drupal / Joomla",
      "CSS3 Animations & Interactions",
      "Accessibility (WCAG) Considerations",
      "Cross-Browser Compatibility",
      "Performance Optimisation",
    ],
    projects: [
      { name: "NRSoft HTML Conversions", url: "http://nrsoft.in/swopsmart/" },
      { name: "TakeLessons", url: "https://takelessons.com/" },
    ],
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO/Content Writing Services",
    tagline: "First-page rankings, guaranteed",
    description:
      "Our SEO team crafts data-driven strategies tailored to your business. We research your market, target the right keywords, and use proven techniques to get you ranking — and keep you there.",
    color: "from-primary-500 to-primary-700",
    bgColor: "bg-primary-50",
    borderColor: "border-primary-400",
    offerings: [
      "Keyword Research & Competitive Analysis",
      "On-Page SEO & Technical Audits",
      "Content Strategy & Optimisation",
      "Link Building & Off-Page SEO",
      "Local SEO & Google Business Profile",
      "SEO for E-Commerce",
      "Monthly Reporting & Analytics",
      "Google First-Page Placement (Guaranteed)",
    ],
    projects: [],
  },
  {
    id: "marketing",
    icon: TrendingUp,
    title: "Affiliate & Digital Marketing",
    tagline: "Revenue channels beyond your main product",
    description:
      "We set up and manage affiliate marketing campaigns on major networks, helping you generate passive revenue streams and drive qualified traffic through proven digital channels.",
    color: "from-accent-500 to-accent-700",
    bgColor: "bg-accent-50",
    borderColor: "border-accent-400",
    offerings: [
      "ClickBank Campaign Management",
      "JVZoo & WarriorPlus Promotions",
      "Ad Network Management (Adengage, etc.)",
      "Conversion Funnel Optimisation",
      "Re-bill & Upsell Campaign Setup",
      "Email Marketing Integration",
      "Analytics & ROI Tracking",
      "Affiliate Partner Recruitment",
    ],
    projects: [],
  },
  {
    id: "scraping",
    icon: Code,
    title: "Web Scraping & Automation",
    tagline: "Data at your fingertips, automatically",
    description:
      "We build custom scrapers and automation tools that extract structured data from any website and feed it into your systems — saving hours of manual work every day.",
    color: "from-primary-600 to-accent-600",
    bgColor: "bg-gradient-to-br from-primary-50 to-accent-50",
    borderColor: "border-accent-400",
    offerings: [
      "Custom Web Scraper Development",
      "Scheduled Data Extraction Jobs",
      "API Data Aggregation",
      "Browser Automation (Puppeteer, Playwright)",
      "Proxy & Anti-Bot Handling",
      "Data Cleaning & Structuring",
      "Dashboard & Reporting Integration",
      "E-Sports & Live Data Feeds",
    ],
    projects: [
      { name: "E-Sports Data Scraper", url: "https://carinait.net/projects/esports/" },
    ],
  },
  {
    id: "translation",
    icon: Languages,
    title: "Translation Services",
    tagline: "Breaking language barriers worldwide",
    description:
      "We provide professional human translation across 50+ languages for websites, mobile apps, legal contracts, marketing content, and technical documentation. Every translation is reviewed by a native speaker for cultural accuracy and natural flow.",
    color: "from-primary-500 to-accent-500",
    bgColor: "bg-gradient-to-br from-primary-50 to-accent-50",
    borderColor: "border-primary-400",
    offerings: [
      "Website & App Localisation (50+ Languages)",
      "Legal & Contract Translation",
      "Technical & Software Documentation",
      "Marketing & Advertising Copy",
      "Certified Translation (for official use)",
      "Proofreading & Editing of Existing Translations",
      "Multilingual SEO & Keyword Adaptation",
      "Fast Turnaround & Confidential Handling",
    ],
    projects: [],
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-24 pb-0">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-orange-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,64,175,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,87,34,0.12),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-accent-100 px-6 py-3 rounded-full mb-6 border border-primary-200"
          >
            <Sparkles className="text-accent-600" size={20} />
            <span className="font-bold text-primary-700">Everything We Offer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6"
          >
            <span className="text-slate-900">Our </span>
            <span className="gradient-text">Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            From a single web page to a full enterprise system — we've got the skills, the experience, and the track record to deliver.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {serviceCategories.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-full text-sm font-bold hover:border-primary-400 hover:text-primary-600 transition-all shadow-sm"
              >
                {s.title}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Portfolio CTA ── */}
      <section className="py-16 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4"
        >
          <p className="text-xl md:text-2xl text-slate-600 mb-6 font-medium">
            To see all of our work and projects
          </p>
          <motion.a
            href="/AFS_Profile.docx"
            download="AFS_Profile.docx"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,87,34,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="gradient-bg text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl inline-flex items-center gap-3"
          >
            <ArrowRight size={22} />
            View Portfolio
          </motion.a>
        </motion.div>
      </section>

      {/* Service Sections */}
      {serviceCategories.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
        >
          <div className="container mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-16 items-start ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              {/* Left: info */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon className="text-white" size={30} />
                </div>

                <p className="text-sm font-bold text-accent-600 uppercase tracking-widest mb-2">
                  {service.tagline}
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5">
                  {service.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {service.description}
                </p>

                {service.projects.length > 0 && (
                  <div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
                      Featured Projects
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.projects.map((p) =>
                        "url" in p && p.url ? (
                          <a
                            key={p.name}
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-sm font-semibold bg-gradient-to-r ${service.color} text-white px-4 py-2 rounded-full shadow hover:opacity-90 transition-opacity inline-flex items-center gap-1.5`}
                          >
                            {p.name}
                            <ArrowRight size={13} />
                          </a>
                        ) : (
                          <span
                            key={p.name}
                            className="text-sm font-semibold bg-slate-100 text-slate-700 border border-slate-200 px-4 py-2 rounded-full"
                          >
                            {p.name}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Right: offerings */}
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`${service.bgColor} border-2 ${service.borderColor} rounded-3xl p-8 shadow-lg`}
              >
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-5">
                  What's Included
                </p>
                <ul className="space-y-3">
                  {service.offerings.map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      <CheckCircle className="text-accent-600 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="/#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`mt-8 w-full bg-gradient-to-r ${service.color} text-white py-4 rounded-full font-bold flex items-center justify-center space-x-2 shadow-lg`}
                >
                  <span>Get a Quote</span>
                  <ArrowRight size={20} />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=")`
        }} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-5"
          >
            Not sure which service you need?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/85 mb-10 max-w-2xl mx-auto"
          >
            Tell us your goal and we'll recommend the right solution — no jargon, no pressure.
          </motion.p>
          <motion.a
            href="/#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white text-primary-600 px-12 py-5 rounded-full font-black text-lg shadow-2xl inline-flex items-center space-x-3"
          >
            <span>Talk to Us</span>
            <ArrowRight size={24} />
          </motion.a>
        </div>
      </section>
    </main>
  );
}
