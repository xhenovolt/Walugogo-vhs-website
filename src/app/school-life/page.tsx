"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function SchoolLifePage() {
  const activities = [
    {
      title: "Sports & Recreation",
      description: "Football, volleyball, athletics, and team sports fostering fitness and camaraderie",
      color: "from-emerald-600 to-green-600"
    },
    {
      title: "Academic Clubs",
      description: "Debate, science, mathematics, and subject-specific clubs for deep learning",
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Arts & Culture",
      description: "Music, drama, dance, and creative expression celebrating diverse talents",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Community Service",
      description: "Outreach programs and social responsibility building compassionate citizens",
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "Leadership Programs",
      description: "Student government and prefect system developing future leaders",
      color: "from-red-600 to-pink-600"
    },
    {
      title: "Spiritual Development",
      description: "Prayers, Quran study, and character formation for holistic growth",
      color: "from-indigo-600 to-blue-600"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900">
      <Navbar />
      
      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              School Life
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Beyond academics—vibrant activities building character, confidence, and community
            </p>
          </motion.div>

          {/* School Facilities Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Nursery Block */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImagePlaceholder width={500} height={350} className="w-full h-[350px]" />
                <div className="p-6 bg-white dark:bg-gray-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Early Childhood</h2>
                  <p className="text-gray-600 dark:text-gray-300">Nurturing small learners with care and early development programs</p>
                </div>
              </div>
              {/* Classroom Block */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImagePlaceholder width={500} height={350} className="w-full h-[350px]" />
                <div className="p-6 bg-white dark:bg-gray-800">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Academic Excellence</h2>
                  <p className="text-gray-600 dark:text-gray-300">Interactive learning and scholarly engagement in modern classrooms</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Student Activities Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Student Activities & Moments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-2xl overflow-hidden shadow-lg"
                >
                  <ImagePlaceholder width={400} height={250} className="w-full h-[250px]" />
                  <div className="p-4 bg-white dark:bg-gray-800">
                    <p className="text-gray-600 dark:text-gray-300">Student activities during school moments</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Activities Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Our Activities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map((activity, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-gradient-to-br ${activity.color} rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-all`}
                >
                  <h3 className="text-2xl font-bold mb-3">{activity.title}</h3>
                  <p className="text-white/90">{activity.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Featured Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-gray-800 dark:to-emerald-900/30 rounded-3xl p-6 md:p-10 border border-emerald-200 dark:border-emerald-700/50"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Campus Life Media
            </h2>
            <ImagePlaceholder width={800} height={450} className="w-full h-[450px] mx-auto" />
          </motion.div>

          {/* Cultural Celebration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/50 dark:bg-gray-800/50 rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Student Life Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Inclusive Community</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our school celebrates diversity and builds an inclusive community where every student feels valued and supported.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  From sports competitions to cultural celebrations, students develop lasting friendships and memories.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Personal Growth</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Beyond passing exams, students develop confidence, leadership skills, and social responsibility.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Co-curricular activities complement academics, creating well-rounded graduates prepared for success.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
