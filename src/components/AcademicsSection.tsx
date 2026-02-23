"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calculator, Beaker, Lightbulb, Code2, Pen, Zap, Users, Target } from "lucide-react";
import Link from "next/link";

export default function AcademicsSection() {
const containerVariants = {
hidden: { opacity: 0 },
visible: {
opacity: 1,
transition: { staggerChildren: 0.1, delayChildren: 0.2 },
},
};

const itemVariants = {
hidden: { opacity: 0, y: 20 },
visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const mainstreamSubjects = [
{ icon: <Calculator className="w-6 h-6" />, name: "Mathematics", desc: "Advanced problem-solving and analytical skills" },
{ icon: <Beaker className="w-6 h-6" />, name: "Physics", desc: "Practical experiments and theory" },
{ icon: <Lightbulb className="w-6 h-6" />, name: "Biology", desc: "Life sciences and practical lab work" },
{ icon: <Code2 className="w-6 h-6" />, name: "Chemistry", desc: "Chemical reactions and industry applications" },
{ icon: <Pen className="w-6 h-6" />, name: "English", desc: "Communication and literature skills" },
];

const vocationalSkills = [
{ icon: <Zap className="w-6 h-6" />, name: "Hands-On Training", desc: "Real-world practical experience in vocational labs" },
{ icon: <Users className="w-6 h-6" />, name: "Industry Standards", desc: "Training aligned with current industry practices" },
{ icon: <Target className="w-6 h-6" />, name: "Employment Ready", desc: "Job-ready skills and certifications" },
];

return (
<section id="academics" className="py-16 md:py-24 bg-white dark:bg-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.3 }}
variants={containerVariants}
className="text-center mb-16"
>
<h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
Academics & Vocational Programs
</h2>
<p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
Combining rigorous academic excellence with practical vocational skills for immediate employment readiness
</p>
</motion.div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
{/* Mainstream Subjects */}
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.3 }}
variants={containerVariants}
>
<h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
Mainstream Subjects
</h3>
<div className="space-y-4">
{mainstreamSubjects.map((subject, index) => (
<motion.div
key={index}
variants={itemVariants}
whileHover={{ x: 10 }}
className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-slate-700 rounded-lg hover:shadow-lg transition-all"
>
<div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
{subject.icon}
</div>
<div>
<h4 className="font-bold text-slate-900 dark:text-white">{subject.name}</h4>
<p className="text-sm text-slate-600 dark:text-slate-300">{subject.desc}</p>
</div>
</motion.div>
))}
</div>
</motion.div>

{/* Vocational Skilling */}
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.3 }}
variants={containerVariants}
>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl blur opacity-20" />
<div className="relative bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-3xl p-10 shadow-xl">
<h3 className="text-2xl font-bold mb-8">
Vocational Skilling Programs
</h3>
<div className="space-y-6">
{vocationalSkills.map((skill, index) => (
<motion.div
key={index}
variants={itemVariants}
className="flex items-start gap-4"
>
<div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white flex-shrink-0">
{skill.icon}
</div>
<div>
<h4 className="font-bold text-lg">{skill.name}</h4>
<p className="text-sm text-blue-100">{skill.desc}</p>
</div>
</motion.div>
))}
</div>

<div className="mt-10 pt-8 border-t border-white/20">
<div className="flex items-center justify-between mb-6">
<span className="text-lg font-semibold">Vocational Fee</span>
<span className="text-2xl font-bold">20,000 UGX</span>
</div>
<motion.div
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
>
<Link
href="/contact"
className="w-full inline-block text-center px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all"
>
Ready to Start Your Journey?
</Link>
</motion.div>
</div>
</div>
</div>
</motion.div>
</div>
</div>
</section>
);
}
