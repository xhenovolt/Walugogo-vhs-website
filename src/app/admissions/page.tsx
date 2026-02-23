"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, Building2, BookOpen, Heart, Briefcase, CheckCircle2, ArrowRight, Copy, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdmissionForm from "@/components/AdmissionForm";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function AdmissionsPage() {
const [copiedAccount, setCopiedAccount] = useState(false);

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

const copyToClipboard = () => {
navigator.clipboard.writeText("95060200000801");
setCopiedAccount(true);
setTimeout(() => setCopiedAccount(false), 2000);
};

const feeStructure = [
{
icon: <DollarSign className="w-8 h-8" />,
title: "Day Students",
amount: "220,000 UGX",
period: "per term",
description: "Commuting students attending day classes",
color: "from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30",
borderColor: "border-blue-400 dark:border-blue-600",
},
{
icon: <Briefcase className="w-8 h-8" />,
title: "Boarding Students",
amount: "420,000 UGX",
period: "per term",
description: "Residential students with accommodation",
color: "from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30",
borderColor: "border-emerald-400 dark:border-emerald-600",
badge: "POPULAR",
},
{
icon: <BookOpen className="w-8 h-8" />,
title: "Vocational Skilling",
amount: "20,000 UGX",
period: "separate",
description: "Specialized vocational training fee",
color: "from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30",
borderColor: "border-purple-400 dark:border-purple-600",
},
];

const requirements = [
{
category: "Stationery",
icon: <BookOpen className="w-6 h-6" />,
items: [
"15 Black Books (A4)",
"2 Reams of paper",
"Writing materials (pens, pencils)",
"Rulers and geometry set",
],
},
{
category: "Personal Hygiene",
icon: <Heart className="w-6 h-6" />,
items: ["JIK or Bleach", "Laundry soap", "Bath soap and towels", "Toothbrush and toothpaste"],
},
{
category: "Administrative",
icon: <CheckCircle2 className="w-6 h-6" />,
items: ["Registration fee", "Computer lab fee", "ID or Birth Certificate photocopy", "Recent passport photo"],
},
];

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
<motion.p variants={itemVariants} className="text-xl text-blue-100 max-w-2xl mx-auto">
Transparent pricing and simple admission process. Start your vocational journey with us today.
</motion.p>
</motion.div>
</div>
</section>

{/* Fee Structure Section */}
<section className="py-16 md:py-24 bg-white dark:bg-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.3 }}
variants={containerVariants}
className="text-center mb-16"
>
<h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
Fee Structure
</h2>
<p className="text-lg text-slate-600 dark:text-slate-400">
Clear and affordable pricing for all students. Additional uniform cost: 80,000 UGX (one-time)
</p>
</motion.div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{feeStructure.map((fee, index) => (
<motion.div
key={index}
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
variants={itemVariants}
whileHover={{ y: -10 }}
className={`relative bg-gradient-to-br ${fee.color} border-2 ${fee.borderColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all`}
>
{fee.badge && (
<div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold">
{fee.badge}
</div>
)}
<div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-xl flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
{fee.icon}
</div>
<h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{fee.title}</h3>
<p className="text-slate-600 dark:text-slate-400 mb-4 min-h-[60px]">{fee.description}</p>
<div className="border-t border-slate-300 dark:border-slate-600 pt-4">
<p className="text-3xl font-bold text-slate-900 dark:text-white">{fee.amount}</p>
<p className="text-sm text-slate-500 dark:text-slate-400">{fee.period}</p>
</div>
</motion.div>
))}
</div>
</div>
</section>

{/* Banking Section */}
<section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
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
className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border-2 border-blue-200 dark:border-blue-700"
>
<div className="space-y-6">
<div>
<p className="text-sm opacity-75 mb-2">Bank Name</p>
<p className="text-2xl font-bold">Bank of Baroda</p>
</div>

<div>
<p className="text-sm opacity-75 mb-2">Branch</p>
<p className="text-2xl font-bold">Iganga Branch</p>
</div>

<div>
<p className="text-sm opacity-75 mb-2">Account Name</p>
<p className="text-2xl font-bold">Walugogo Vocational High School</p>
</div>

<div>
<p className="text-sm opacity-75 mb-2">Account Number</p>
<div className="flex items-center gap-3">
<p className="text-3xl font-bold font-mono">95060200000801</p>
<motion.button
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
onClick={copyToClipboard}
className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
>
{copiedAccount ? (
<>
<Check className="w-4 h-4" />
Copied
</>
) : (
<>
<Copy className="w-4 h-4" />
Copy
</>
)}
</motion.button>
</div>
</div>
</div>
</motion.div>
</motion.div>
</div>
</section>

{/* Requirements Section */}
<section className="py-16 md:py-24 bg-white dark:bg-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.3 }}
variants={containerVariants}
className="text-center mb-16"
>
<h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
Admission Requirements
</h2>
<p className="text-lg text-slate-600 dark:text-slate-400">
Everything your student needs to bring on their first day
</p>
</motion.div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
{requirements.map((req, index) => (
<motion.div
key={index}
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
variants={itemVariants}
className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-700 dark:to-slate-800 rounded-2xl p-8 shadow-lg"
>
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white">
{req.icon}
</div>
<h3 className="text-xl font-bold text-slate-900 dark:text-white">{req.category}</h3>
</div>
<ul className="space-y-3">
{req.items.map((item, idx) => (
<li key={idx} className="flex items-start gap-3">
<CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
<span className="text-slate-700 dark:text-slate-300">{item}</span>
</li>
))}
</ul>
</motion.div>
))}
</div>

{/* Image Placeholder */}
<ImagePlaceholder width={800} height={400} className="mb-12" />
</div>
</section>

{/* Application Form Section */}
<section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.3 }}
variants={containerVariants}
className="text-center mb-12"
>
<h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
Ready to Apply?
</h2>
<p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
Fill out the form below and join hundreds of students who have transformed their futures at Walugogo VHS
</p>
</motion.div>

<AdmissionForm />
</div>
</section>

<Footer />
</main>
);
}
