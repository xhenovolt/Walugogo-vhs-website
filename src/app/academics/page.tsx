"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Heart, Zap, Award, TrendingUp, Users, CheckCircle, Target, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function AcademicsPage() {
  const [expandedProgram, setExpandedProgram] = useState<string>("s1");

  const progressionLevels = [
    {
      id: "s1",
      level: "Senior 1 (Form 1)",
      badge: "O-Level Year 1",
      color: "blue",
      outcomes: [
        "Foundation in advanced sciences and mathematics",
        "English language and literature proficiency",
        "Social sciences and cultural awareness",
        "Introduction to practical vocational skills"
      ]
    },
    {
      id: "s2",
      level: "Senior 2 (Form 2)",
      badge: "O-Level Year 2",
      color: "purple",
      outcomes: [
        "Advanced problem-solving and analytical skills",
        "Specialized subject mastery",
        "Research and presentation skills",
        "Leadership and teamwork development"
      ]
    },
    {
      id: "s3",
      level: "Senior 3 (Form 3)",
      badge: "O-Level Final",
      color: "amber",
      outcomes: [
        "O-Level examination readiness",
        "Comprehensive subject mastery",
        "Career pathway exploration",
        "Advanced critical thinking skills"
      ]
    },
    {
      id: "s4",
      level: "Senior 4 (Form 4)",
      badge: "A-Level Year 1",
      color: "rose",
      outcomes: [
        "Specialized A-Level subject selection",
        "University preparation foundation",
        "Advanced research methodology",
        "Professional skill development"
      ]
    },
    {
      id: "s5",
      level: "Senior 5 (Form 5)",
      badge: "A-Level Year 2",
      color: "cyan",
      outcomes: [
        "In-depth subject specialization",
        "University application preparation",
        "Leadership and mentorship roles",
        "Professional networking opportunities"
      ]
    },
    {
      id: "s6",
      level: "Senior 6 (Form 6)",
      badge: "A-Level Final",
      color: "green",
      outcomes: [
        "A-Level examination excellence",
        "University admission readiness",
        "Career launch preparation",
        "Global citizenship development"
      ]
    }
  ];

  const graduationOutcomes = [
    { icon: <Award className="w-6 h-6" />, text: "Achieves 100% pass rate with distinction-level results" },
    { icon: <TrendingUp className="w-6 h-6" />, text: "Gains admission to top universities in Uganda and globally" },
    { icon: <Users className="w-6 h-6" />, text: "Develops strong character and ethical leadership skills" },
    { icon: <Target className="w-6 h-6" />, text: "Secures meaningful employment or university placement" },
    { icon: <BookOpen className="w-6 h-6" />, text: "Masters advanced critical thinking and research skills" },
    { icon: <Heart className="w-6 h-6" />, text: "Contributes as responsible global leaders and innovators" },
  ];

  const academicStandards = [
    "100% pass rate through rigorous academic support",
    "Modern laboratory and computer facilities",
    "Small class sizes ensuring individual attention",
    "University-qualified and experienced faculty",
    "Continuous formative and summative assessment",
    "Holistic development beyond academic excellence"
  ];

  const programs = [
    {
      id: "mainstream",
      title: "Mainstream Academic Subjects",
      badge: "Secondary Curriculum",
      description: "Comprehensive secondary education combining theory with practical application, preparing students for university",
      subjects: [
        "Mathematics - Advanced problem solving and calculus",
        "English Literature & Language - Critical analysis and communication",
        "Sciences - Biology, Chemistry, Physics with practical laboratory work",
        "Social Sciences - History, Geography, Economics, and civics",
        "Additional subjects - Languages, Computing, Business Studies"
      ]
    },
    {
      id: "vocational",
      title: "Secondary Vocational Skilling",
      badge: "Practical Training",
      description: "Hands-on technical training integrated with secondary education, preparing students for skilled trades and entrepreneurship",
      subjects: [
        "Carpentry and woodwork - Advanced furniture and construction design",
        "Welding and metal fabrication - Professional manufacturing standards",
        "Plumbing and electrical - Building systems and installations",
        "ICT and Digital Skills - Programming, networking, and digital literacy",
        "Entrepreneurship - Business planning and financial management"
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
              Secondary Academics & Vocational Skilling
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
              Combining rigorous secondary academics with practical vocational skills for university and career readiness
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
              Secondary Education Progression
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Structured 6-year journey from Senior 1 through Senior 6 (O-Level and A-Level)
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
              Every graduate leaves Walugogo VHS with university-readiness, practical skills, and character for success
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
              Non-negotiable commitment to excellence in secondary education
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
              Our Secondary Programs
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Balanced secondary education with academics and practical vocational training
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
