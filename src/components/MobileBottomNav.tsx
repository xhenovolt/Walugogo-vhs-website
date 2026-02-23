"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Home, BookOpen, UserCheck, Mail, MoreHorizontal, X, MessageCircle } from "lucide-react";

export default function MobileBottomNav() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDrawerOpen]);

  if (!mounted) return null;

  // Primary navigation items for bottom bar (4 items - clean labels)
  const primaryNavItems = [
    { 
      icon: Home, 
      label: "Home",
      href: "/",
      name: "home"
    },
    { 
      icon: BookOpen, 
      label: "Academics",
      href: "/academics",
      name: "academics"
    },
    { 
      icon: UserCheck, 
      label: "Admissions",
      href: "/admissions",
      name: "admissions"
    },
    { 
      icon: Mail, 
      label: "Contact",
      href: "/contact",
      name: "contact"
    },
  ];

  // Secondary navigation items for drawer (More menu)
  const secondaryNavItems = [
    { label: "About Us", href: "/about" },
    { label: "School Life", href: "/school-life" },
    { label: "Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Location", href: "/location" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Welfare", href: "/welfare" },
    { label: "Services", href: "/services" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ];

  const handleNavClick = () => {
    setIsDrawerOpen(false);
  };

  const handleBackdropClick = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      {/* Bottom Navigation Bar - 4 Items + More Button */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-lg border-t-2 border-slate-800 dark:border-slate-700 lg:hidden safe-area-inset-bottom"
      >
        <div className="flex items-center justify-between px-1 py-2 safe-area-inset-left safe-area-inset-right">
          {/* Primary Navigation Items */}
          {primaryNavItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className="flex flex-col items-center py-2 px-2 text-slate-400 hover:text-white active:text-blue-400 dark:text-slate-500 dark:hover:text-slate-300 dark:active:text-blue-300 transition-colors duration-300 flex-1 group min-h-[56px] justify-center touch-target"
                title={item.label}
              >
                <IconComponent className="w-6 h-6 mb-0.5 group-hover:scale-110 group-active:scale-90 transition-transform duration-300 will-change-transform" />
                <span className="text-xs font-semibold text-slate-300 dark:text-slate-400 truncate leading-none">{item.label}</span>
              </Link>
            );
          })}

          {/* More Button - Opens Drawer */}
          <motion.button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center py-2 px-2 text-slate-400 hover:text-white active:text-blue-400 dark:text-slate-500 dark:hover:text-slate-300 dark:active:text-blue-300 transition-colors duration-300 flex-1 min-h-[56px] justify-center touch-target"
            title="More options"
          >
            <MoreHorizontal className="w-6 h-6 mb-0.5 hover:scale-110 active:scale-90 transition-transform duration-300 will-change-transform" />
            <span className="text-xs font-semibold text-slate-300 dark:text-slate-400">More</span>
          </motion.button>
        </div>
      </motion.div>

      {/* More Drawer - Slides from bottom with AI Chat at top */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleBackdropClick}
              className="fixed inset-0 bg-black/40 z-30 lg:hidden"
            />

            {/* Drawer Content */}
            <motion.div
              ref={drawerRef}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-[35] bg-slate-900 dark:bg-slate-950 rounded-t-3xl shadow-2xl max-h-[75vh] overflow-y-auto lg:hidden overscroll-contain border-t border-slate-700"
            >
              {/* Drawer Header */}
              <div className="sticky top-0 bg-slate-900 dark:bg-slate-950 border-b border-slate-700 px-6 py-4 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">More Options</h3>
                <motion.button
                  onClick={handleBackdropClick}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 hover:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors duration-300"
                  aria-label="Close drawer"
                >
                  <X className="w-5 h-5 text-slate-400 dark:text-slate-300" />
                </motion.button>
              </div>

              {/* AI Chat Button - Top of drawer */}
              <div className="px-4 py-3 border-b border-slate-700">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleBackdropClick}
                  className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>AI Chat Support</span>
                </motion.button>
              </div>

              {/* Secondary Navigation Links */}
              <div className="px-4 py-4 space-y-1 pb-8">
                {secondaryNavItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                  >
                    <Link
                      href={item.href}
                      onClick={handleNavClick}
                      className="block px-4 py-3 text-slate-300 dark:text-slate-400 hover:text-white dark:hover:text-slate-100 active:text-blue-400 dark:active:text-blue-300 hover:bg-slate-800 dark:hover:bg-slate-800 rounded-lg transition-all duration-300 font-medium text-sm touch-target"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Spacing for safe area on notch devices */}
              <div className="h-8 safe-area-inset-bottom" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
