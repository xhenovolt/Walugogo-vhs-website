"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    "Quick Links": [
      { name: "About Us", href: "/about" },
      { name: "Academics", href: "/academics" },
      { name: "Admissions", href: "/admissions" },
      { name: "Contact", href: "/location" }
    ],
    "Programs": [
      { name: "Mainstream Subjects", href: "/academics#mainstream" },
      { name: "Vocational Skilling", href: "/academics#vocational" },
      { name: "School Life", href: "/school-life" },
      { name: "Welfare", href: "/welfare" }
    ],
    "Resources": [
      { name: "Gallery", href: "/gallery" },
      { name: "Testimonials", href: "/testimonials" },
      { name: "Frequently Asked Questions", href: "/faq" },
      { name: "Blog", href: "/blog" }
    ],
    "Legal": [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Cookie Policy", href: "#" },
      { name: "Sitemap", href: "#" }
    ]
  };

  return (
    <footer className="bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-lg border-t-2 border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        
        {/* Main Footer Content - 2 Column Grid on Mobile, 4 on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          
          {/* Company Info Card - Full Width on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-800/50 dark:to-slate-950/50 rounded-2xl p-6 md:p-8 border border-slate-700/50"
          >
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-3 md:mb-4">
              Walugogo VHS
            </h3>
            <p className="text-slate-400 dark:text-slate-500 mb-6 leading-relaxed text-sm md:text-base">
              Premier vocational high school combining rigorous academics with practical vocational skilling. Preparing leaders for success.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <div className="flex items-start gap-2 md:gap-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-500 flex-shrink-0 mt-1" />
                <span className="text-slate-300 dark:text-slate-400">Walugogo Estate, Behind Ntinda Valley Resort, Iganga, Uganda</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-blue-500 flex-shrink-0" />
                <a href="tel:+256707153422" className="text-slate-300 dark:text-slate-400 hover:text-blue-400 transition-colors">
                  +256 707 153 422
                </a>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-500 flex-shrink-0" />
                <a href="mailto:info@walugogo.ug" className="text-slate-300 dark:text-slate-400 hover:text-blue-400 transition-colors">
                  info@walugogo.ug
                </a>
              </div>
            </div>
          </motion.div>

          {/* Footer Link Cards */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (categoryIndex + 1) * 0.1 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-800/50 dark:to-slate-950/50 rounded-2xl p-6 border border-slate-700/50"
            >
              <h4 className="text-lg md:text-xl font-bold text-white mb-4">{category}</h4>
              <ul className="space-y-2 md:space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-slate-400 dark:text-slate-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 flex items-center gap-2 group text-sm md:text-base"
                    >
                      {link.name}
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 dark:from-blue-700 dark:via-purple-700 dark:to-blue-800 rounded-2xl p-8 md:p-12 mb-12 border border-blue-500/30"
        >
          <div className="text-center text-white">
            <h4 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Stay Connected</h4>
            <p className="mb-6 md:mb-8 opacity-95 text-sm md:text-base">
              Subscribe to get updates on admissions, school events, and academic achievements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm md:text-base"
              />
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 text-sm md:text-base whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar - Creator Credit with Professional Styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 md:pt-12 border-t border-slate-700"
        >
          <div className="text-slate-400 dark:text-slate-500 mb-6 md:mb-0 text-xs md:text-sm">
            <span className="block">
              © {new Date().getFullYear()} Walugogo Vocational High School. Ministry Registered.
            </span>
          </div>

          {/* Creator Credit - Professional & Prominent */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
          >
            <span className="text-base md:text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Made with ❤️ by
            </span>
            <a
              href="https://xhenvolt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue-400 hover:text-blue-300 transition-colors"
            >
              Xhenvolt
            </a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
