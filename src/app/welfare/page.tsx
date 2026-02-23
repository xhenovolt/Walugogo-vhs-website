"use client";
import React from "react";
import { motion } from "framer-motion";
import { Heart, Shield, Users, Utensils, BookOpen, Smile } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function WelfarePage() {
  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Student Health & Counseling",
      description: "School health officer, counselling services, and medical support ensuring student wellness"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety & Security",
      description: "24/7 security personnel and safeguarding protocols prioritizing student and staff safety"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Pastoral Care",
      description: "Dedicated pastoral staff providing emotional support and guidance to every student"
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Nutrition & Meals",
      description: "Balanced, nutritious meals in clean dining facilities supporting student health and development"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Academic Support",
      description: "Tutorial programs and remedial classes ensuring no student is left behind academically"
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Recreation & Wellness",
      description: "Sports facilities, recreation spaces, and wellness programs supporting holistic student life"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50 dark:from-gray-900 dark:to-pink-900">
      <Navbar />

      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-600 via-red-600 to-rose-600 bg-clip-text text-transparent mb-6">
              Student Welfare
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive support systems ensuring student wellbeing, safety, and holistic development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Campus Life Image */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <ImagePlaceholder width={1000} height={500} className="w-full h-[500px]" />
          </motion.div>
        </div>
      </section>

      {/* Welfare Services */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Welfare Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 border border-pink-200 dark:border-pink-700/50 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-red-600 rounded-xl flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supervisory Structure */}
      <section className="py-12 md:py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Supervisory Structure & Safeguarding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-pink-200 dark:border-pink-700/50"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                24/7 Supervision
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Dedicated supervisors ensure safe, secure learning environment with proper monitoring of student activities both during school hours and in residential facilities.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>✓ Trained supervisory staff on all premises</li>
                <li>✓ Security patrols and CCTV monitoring</li>
                <li>✓ Duty schedules covering all hours</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-red-200 dark:border-red-700/50"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Child Protection Policy
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Strong safeguarding protocols protect every student with clear procedures, trained staff, and zero-tolerance for misconduct.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>✓ Child protection officer appointed</li>
                <li>✓ Incident reporting and investigation</li>
                <li>✓ Staff vetting and clearance</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Discipline & Character */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Discipline & Character Formation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Positive Discipline Approach
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We emphasize character development through positive reinforcement, counselling, and restorative practices rather than punitive measures.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Islamic Values Foundation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                All discipline policies are grounded in Islamic values, promoting ethical behavior, respect, and moral responsibility in all students.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
