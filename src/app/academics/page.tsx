"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Heart, Zap, Award, TrendingUp, Users, CheckCircle, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function AcademicsPage() {
  const [expandedProgram, setExpandedProgram] = useState<string>("lower");

  const progressionLevels = [
    {
      id: "nursery",
      level: "Nursery",
      badge: "Early Years",
      color: "emerald",
      outcomes: [
        "Social and emotional development",
        "Basic communication skills",
        "Introduction to numbers and letters",
        "Motor skill development"
      ]
    },
    {
      id: "lower",
      level: "Lower Primary (P1-P3)",
      badge: "Foundation",
      color: "blue",
      outcomes: [
        "Foundational numeracy and literacy",
        "English language proficiency",
        "Critical thinking development",
        "Collaborative learning skills"
      ]
    },
    {
      id: "upper",
      level: "Upper Primary (P4-P6)",
      badge: "Intermediate",
      color: "purple",
      outcomes: [
        "Advanced mathematics and science",
        "Research and project skills",
        "Leadership development",
        "Technology integration"
      ]
    },
    {
      id: "primary7",
      level: "Primary Seven",
      badge: "Transition",
      color: "amber",
      outcomes: [
        "National examination readiness",
        "Career guidance and planning",
        "Advanced academic subjects",
        "Independent learning skills"
      ]
    }
  ];

  const graduationOutcomes = [
    { icon: <Award className="w-6 h-6" />, text: "Achieves academic excellence and national recognition" },
    { icon: <TrendingUp className="w-6 h-6" />, text: "Masters practical vocational skills for employment" },
    { icon: <Users className="w-6 h-6" />, text: "Demonstrates strong character and ethical values" },
    { icon: <Target className="w-6 h-6" />, text: "Pursues higher education or professional careers" },
    { icon: <BookOpen className="w-6 h-6" />, text: "Becomes a lifelong learner with critical thinking" },
    { icon: <Heart className="w-6 h-6" />, text: "Contributes positively to society and community" },
  ];

  const academicStandards = [
    "100% pass rate through personalized attention",
    "Modern facilities with technology integration",
    "Small classes ensuring individual support",
    "Qualified and experienced teaching staff",
    "Continuous assessment and progress tracking",
    "Holistic development beyond academics"
  ];

  const programs = [
    {
      id: "mainstream",
      title: "Mainstream Subjects",
      badge: "Core Curriculum",
      description: "Comprehensive academic subjects combining theory with practical application",
      subjects: [
        "Mathematics - Numeracy and advanced problem solving",
        "English - Language, literature, and communication",
        "Science - Biology, chemistry, physics, and environmental studies",
        "Social Studies - History, geography, and civic education",
        "Physical Education - Sport, fitness, and wellness"
      ]
    },
    {
      id: "vocational",
      title: "Vocational Skilling",
      badge: "Practical Training",
      description: "Hands-on technical training preparing students for immediate employment",
      subjects: [
        "Carpentry and woodwork - Building and furniture design",
        "Welding and metal fabrication - Construction and manufacturing",
        "Plumbing and electrical - Essential infrastructure skills",
        "Agriculture - Sustainable farming and agribusiness",
        "Digital skills - IT, coding, and computer literacy"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900">
      <Navbar />
      
      {/* Main Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              Academics & Vocational Skilling
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
              Combining rigorous academics with practical vocational skills for complete student development
            </p>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <ImagePlaceholder width={1000} height={500} className="w-full h-[500px]" />
          </motion.div>
        </div>
      </section>

      {/* Academic Progression */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Academic Progression
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Structured learning journey from early years through primary seven
            </p>
          </motion.div>

          <div className="space-y-6">
            {progressionLevels.map((level, index) => (
              <motion.div
                key={level.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setExpandedProgram(level.id)}
                className="cursor-pointer"
              >
                <div className={`bg-gradient-to-r from-${level.color}-50 to-${level.color}-100 dark:from-gray-700 dark:to-gray-800 rounded-lg p-6 border-l-4 border-${level.color}-600`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {level.level}
                      </h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold text-white bg-${level.color}-600`}>
                        {level.badge}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedProgram === level.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                    </motion.div>
                  </div>
                  
                  {expandedProgram === level.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600"
                    >
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Learning Outcomes:</h4>
                      <ul className="space-y-3">
                        {level.outcomes.map((outcome, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className={`w-5 h-5 text-${level.color}-600 flex-shrink-0 mt-0.5`} />
                            <span className="text-gray-700 dark:text-gray-300">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Graduation Outcomes */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-600 to-blue-600 dark:from-emerald-900 dark:to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Graduation Outcomes
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Every student leaves Walugogo VHS with skills, character, and opportunity for success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {graduationOutcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur rounded-lg p-8 border border-white/20 hover:border-white/40 transition-all"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-white mb-4">
                  {outcome.icon}
                </div>
                <p className="text-white text-lg leading-relaxed">{outcome.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Standards */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Our Academic Standards
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Non-negotiable commitment to excellence at every level
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicStandards.map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 rounded-lg p-6 border border-emerald-200 dark:border-gray-600"
              >
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 dark:text-gray-300">{standard}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Our Programs
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Balanced education combining academics with practical vocational training
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`h-2 bg-gradient-to-r ${index === 0 ? "from-blue-600 to-cyan-600" : "from-emerald-600 to-teal-600"}`} />
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                      {program.title}
                    </h3>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold text-white ${index === 0 ? "bg-blue-600" : "bg-emerald-600"}`}>
                      {program.badge}
                    </span>
                  </div>
                  
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                    {program.description}
                  </p>
                  
                  <div className="space-y-4">
                    {program.subjects.map((subject, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <BookOpen className={`w-5 h-5 ${index === 0 ? "text-blue-600" : "text-emerald-600"} flex-shrink-0 mt-1`} />
                        <span className="text-gray-700 dark:text-gray-300">{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Import ChevronDown icon that was missing
import { ChevronDown } from "lucide-react";
