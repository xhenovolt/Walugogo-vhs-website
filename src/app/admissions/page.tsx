"use client";
import React from "react";
import { motion } from "framer-motion";
import { DollarSign, Building2, BookOpen, Heart, Briefcase, CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdmissionForm from "@/components/AdmissionForm";
import { useLanguage } from "@/i18n/LanguageContext";

export default function AdmissionsPage() {
const { t } = useLanguage();

const containerVariants = {
hidden: { opacity: 0 },
visible: {
opacity: 1,
transition: {
staggerChildren: 0.1,
delayChildren: 0.2,
},
},
};

const itemVariants = {
hidden: { opacity: 0, y: 20 },
visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

return (
<main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
<Navbar />

{/* Hero Section */}
<section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-slate-900 dark:to-blue-900 relative overflow-hidden">
<div className="absolute inset-0 overflow-hidden">
<div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20" />
<div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-400 rounded-full blur-3xl opacity-20" />
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
variants={containerVariants}
className="text-center"
>
<motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-white mb-6">
Admissions & Fees
</motion.h1>
<motion.p
variants={itemVariants}
className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
>
Clear, transparent pricing and comprehensive admission requirements
</motion.p>
</motion.div>
</div>
</section>

{/* Fee Structure Section */}
<section className="py-20 md:py-32 bg-white dark:bg-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.3 }}
variants={containerVariants}
className="text-center mb-16"
>
<motion.span
variants={itemVariants}
className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold mb-4"
>
Financial Information
</motion.span>
<motion.h2
variants={itemVariants}
className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6"
>
2025 Fee Structure
</motion.h2>
<motion.p
variants={itemVariants}
className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
>
Affordable, transparent pricing for quality vocational and academic education
</motion.p>
</motion.div>

{/* Fee Cards Grid */}
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.3 }}
variants={containerVariants}
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
>
{/* Day Students */}
<motion.div
variants={itemVariants}
className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 shadow-lg border-2 border-blue-300 dark:border-blue-700"
>
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center">
<Briefcase className="w-6 h-6" />
</div>
<h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Day Students</h3>
</div>
<p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
220,000 UGX
</p>
<p className="text-sm text-slate-600 dark:text-slate-400 mb-6">Per Term</p>
<ul className="space-y-3 text-slate-700 dark:text-slate-300">
<li className="flex items-center gap-2">
<CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
Tuition included
</li>
<li className="flex items-center gap-2">
<CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
Mainstream subjects
</li>
<li className="flex items-center gap-2">
<CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
School facilities
</li>
</ul>
</motion.div>

{/* Boarding Students */}
<motion.div
variants={itemVariants}
className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-lg border-2 border-slate-300 dark:border-slate-600 relative overflow-hidden"
>
<div className="absolute top-4 right-4 px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full">
POPULAR
</div>
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 rounded-lg bg-slate-700 text-white flex items-center justify-center">
<Briefcase className="w-6 h-6" />
</div>
<h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Boarding Students</h3>
</div>
<p className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4">
420,000 UGX
</p>
<p className="text-sm text-slate-600 dark:text-slate-400 mb-6">Per Term</p>
<ul className="space-y-3 text-slate-700 dark:text-slate-300">
<li className="flex items-center gap-2">
<CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
Tuition included
</li>
<li className="flex items-center gap-2">
<CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
Accommodation
</li>
<li className="flex items-center gap-2">
<CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
Meals included
</li>
</ul>
</motion.div>

{/* Vocational Skilling */}
<motion.div
variants={itemVariants}
className="bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-800/20 rounded-2xl p-8 shadow-lg border-2 border-amber-300 dark:border-amber-700"
>
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 rounded-lg bg-amber-600 text-white flex items-center justify-center">
<Briefcase className="w-6 h-6" />
</div>
<h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
Vocational Skilling
</h3>
</div>
<p className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-4">
20,000 UGX
</p>
<p className="text-sm text-slate-600 dark:text-slate-400 mb-6">Separate Fee</p>
<ul className="space-y-3 text-slate-700 dark:text-slate-300">
<li className="flex items-center gap-2">
<CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
Hands-on training
</li>
<li className="flex items-center gap-2">
<CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
Equipment use
</li>
<li className="flex items-center gap-2">
<CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
Employment skills
</li>
</ul>
</motion.div>
</motion.div>

{/* Uniform Info */}
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.3 }}
variants={containerVariants}
className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-slate-900 rounded-2xl p-8 md:p-12 shadow-xl mb-16"
>
<motion.div
variants={itemVariants}
className="flex flex-col md:flex-row items-center gap-8"
>
<div className="flex-shrink-0">
<div className="flex items-center justify-center w-20 h-20 rounded-full bg-white/20">
<CheckCircle2 className="w-10 h-10 text-white" />
</div>
</div>
<div className="flex-1">
<h3 className="text-2xl font-bold text-white mb-2">School Uniform</h3>
<p className="text-blue-100 mb-4">
Cream shirt with Navy Blue trouser/skirt combo - identifies students as proud members of the Walugogo family
</p>
<div className="text-3xl font-bold text-white">80,000 UGX (One-time)</div>
</div>
</motion.div>
</motion.div>

{/* Banking Section */}
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.3 }}
variants={containerVariants}
>
<motion.div variants={itemVariants} className="text-center mb-12">
<div className="flex items-center justify-center gap-3 mb-4">
<Building2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
<h2 className="text-4xl font-bold text-slate-900 dark:text-slate-50">
Banking Information
</h2>
</div>
<p className="text-lg text-slate-600 dark:text-slate-400">
Easy, secure payment directly to school account
</p>
</motion.div>

<motion.div
variants={itemVariants}
className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-blue-900 dark:to-slate-950 rounded-2xl p-8 md:p-12 text-white shadow-xl"
>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<p className="text-sm opacity-75 mb-2">Bank Name</p>
<p className="text-2xl font-bold mb-6">Bank of Baroda</p>

<p className="text-sm opacity-75 mb-2">Branch</p>
<p className="text-2xl font-bold mb-6">Iganga Branch</p>

<p className="text-sm opacity-75 mb-2">Account Name</p>
<p className="text-2xl font-bold">
Walugogo Vocational High School
</p>
</div>

<div className="bg-white/10 rounded-xl p-6 backdrop-blur">
<p className="text-sm opacity-75 mb-4">Account Number</p>
<p className="text-3xl font-bold font-mono mb-4 break-all">
95060200000801
</p>
<button
onClick={() => {
navigator.clipboard.writeText("95060200000801");
}}
className="w-full px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition"
>
Copy Account Number
</button>
<p className="text-xs opacity-60 mt-4">
Copy this account number to your phone when making payments
</p>
</div>
</div>
</motion.div>
</motion.div>
</div>
</section>

{/* Admission Requirements Section */}
<section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.3 }}
variants={containerVariants}
className="text-center mb-16"
>
<motion.span
variants={itemVariants}
className="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-semibold mb-4"
>
Requirements
</motion.span>
<motion.h2
variants={itemVariants}
className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6"
>
Admission Requirements
</motion.h2>
<motion.p
variants={itemVariants}
className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
>
Organized by category for clarity and convenience
</motion.p>
</motion.div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Stationery */}
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.3 }}
variants={containerVariants}
>
<motion.div
variants={itemVariants}
className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border-l-4 border-blue-600 dark:border-blue-400"
>
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
<BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
</div>
<h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
Stationery
</h3>
</div>
<ul className="space-y-3">
{[
"15 Black Books",
"Rotaatrim Reams",
"Writing materials and pens",
].map((item, idx) => (
<li
key={idx}
className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
>
<ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
<span>{item}</span>
</li>
))}
</ul>
</motion.div>
</motion.div>

{/* Personal Hygiene */}
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.3 }}
variants={containerVariants}
>
<motion.div
variants={itemVariants}
className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border-l-4 border-emerald-600 dark:border-emerald-400"
>
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
<Heart className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
</div>
<h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
Personal Hygiene
</h3>
</div>
<ul className="space-y-3">
{[
"JIK (Bleach)",
"Soap",
"Towels",
"Toothbrush and toothpaste",
].map((item, idx) => (
<li
key={idx}
className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
>
<ArrowRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
<span>{item}</span>
</li>
))}
</ul>
</motion.div>
</motion.div>

{/* Administrative */}
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.3 }}
variants={containerVariants}
>
<motion.div
variants={itemVariants}
className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border-l-4 border-amber-600 dark:border-amber-400"
>
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
<DollarSign className="w-6 h-6 text-amber-600 dark:text-amber-400" />
</div>
<h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
Administrative
</h3>
</div>
<ul className="space-y-3">
{[
"Computer Fees (included)",
"Registration documents",
"ID/Birth Certificate copy",
].map((item, idx) => (
<li
key={idx}
className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
>
<ArrowRight className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
<span>{item}</span>
</li>
))}
</ul>
</motion.div>
</motion.div>
</div>
</div>
</section>

{/* Admission Form Section */}
<AdmissionForm />

<Footer />
</main>
);
}
