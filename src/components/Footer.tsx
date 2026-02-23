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
      { name: "Admissions & Fees", href: "/admissions" },
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
    <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-t border-white/20 dark:border-gray-700/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
                Walugogo Vocational High School
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                A premier vocational high school dedicated to combining rigorous academics with practical vocational skilling, preparing students for successful careers.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-600 dark:text-gray-300">Walugogo Estate, Behind Ntinda Valley Resort</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Iganga Municipality, Uganda</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">0°35'21.5"N 33°30'03.7"E</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-600" />
                  <a href="tel:+256707153422" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 transition-colors">
                    +256 707 153 422
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-600" />
                  <a href="mailto:info@walugogo.ug" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 transition-colors">
                    info@walugogo.ug
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2 group"
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
          className="bg-gradient-to-r from-emerald-600 via-blue-600 to-cyan-500 rounded-2xl p-8 mb-12"
        >
          <div className="text-center text-white">
            <h4 className="text-2xl font-bold mb-4">Stay Connected</h4>
            <p className="mb-6 opacity-90">
              Subscribe to get updates on admissions, school events, and academic achievements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-6 py-3 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0 text-sm">
            <span className="block">
              © {new Date().getFullYear()} Walugogo Vocational High School. Ministry Registered.
            </span>
            <span className="block mt-1 text-xs text-gray-500 dark:text-gray-500 italic">
              Designed by{" "}
              <a
                href="https://xhenvolt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
              >
                Xhenvolt
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
