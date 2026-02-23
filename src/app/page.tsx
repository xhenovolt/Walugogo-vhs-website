"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, Briefcase, Award, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SuccessPanel from "../components/SuccessPanel";
import AcademicsSection from "../components/AcademicsSection";
import { useLanguage } from "../i18n/LanguageContext";

export default function HomePage() {
const { t } = useLanguage();

const features = [
{
icon: <CheckCircle2 className="w-8 h-8" />,
title: "100% Pass Rate",
description: "Every single student achieves pass-level grades or better—100% quality focus",
},
{
icon: <Briefcase className="w-8 h-8" />,
title: "Vocational Skilling",
description: "Hands-on training in technical disciplines preparing students for immediate employment",
},
{
icon: <Users className="w-8 h-8" />,
title: "Personal Attention",
description: "Small classes ensure every student receives individualized support and mentoring",
},
{
icon: <Award className="w-8 h-8" />,
title: "Modern Facilities",
description: "Contemporary vocational labs and well-equipped classrooms for optimal learning",
},
];

return (
<main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
<Navbar />

{/* Hero Section */}
<section className="pt-24 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-slate-900 dark:to-blue-950 relative overflow-hidden">
<div className="absolute inset-0 overflow-hidden">
<div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20" />
<div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-400 rounded-full blur-3xl opacity-20" />
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
<motion.div
initial={{ opacity: 0, x: -50 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
>
<motion.div
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="inline-block px-4 py-2 bg-white/20 backdrop-blur rounded-full text-white/90 text-sm font-semibold mb-6"
>
Ministry Registered • Vocational Excellence
</motion.div>

<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
Vocational Excellence in Eastern Uganda
</h1>

<p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
Combine rigorous academics with hands-on vocational training. 100% pass rate. Zero failure rate. Where every student succeeds.
</p>

<div className="flex flex-col sm:flex-row gap-4">
<motion.div
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
className="w-full sm:w-auto"
>
<Link
href="/admissions"
className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 gap-2"
>
Apply Now
<ArrowRight className="w-5 h-5" />
</Link>
</motion.div>
<motion.div
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
className="w-full sm:w-auto"
>
<Link
href="#academics"
className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-300"
>
Learn More
</Link>
</motion.div>
</div>
</motion.div>

{/* Stats Card */}
<motion.div
initial={{ opacity: 0, x: 50 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8, delay: 0.2 }}
className="relative"
>
<div className="bg-white/10 dark:bg-slate-800/30 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-2xl">
<div className="grid grid-cols-2 gap-4 mb-8">
<motion.div
whileHover={{ scale: 1.05 }}
className="bg-gradient-to-br from-white/20 to-white/10 p-4 rounded-xl text-center backdrop-blur"
>
<div className="text-3xl font-bold text-white mb-1">17</div>
<p className="text-white/80 text-sm font-semibold">Students (2025)</p>
</motion.div>
<motion.div
whileHover={{ scale: 1.05 }}
className="bg-gradient-to-br from-white/20 to-white/10 p-4 rounded-xl text-center backdrop-blur"
>
<div className="text-3xl font-bold text-emerald-300 mb-1">100%</div>
<p className="text-white/80 text-sm font-semibold">Pass Rate</p>
</motion.div>
</div>

<div className="space-y-4">
<div className="flex items-center gap-3">
<CheckCircle2 className="w-5 h-5 text-emerald-300 flex-shrink-0" />
<span className="text-white text-sm">2A's, 3B's, 12C's Performance</span>
</div>
<div className="flex items-center gap-3">
<CheckCircle2 className="w-5 h-5 text-emerald-300 flex-shrink-0" />
<span className="text-white text-sm">Zero Failure Rate Achievement</span>
</div>
<div className="flex items-center gap-3">
<CheckCircle2 className="w-5 h-5 text-emerald-300 flex-shrink-0" />
<span className="text-white text-sm">Personal Attention to Every Student</span>
</div>
<div className="flex items-center gap-3">
<CheckCircle2 className="w-5 h-5 text-emerald-300 flex-shrink-0" />
<span className="text-white text-sm">Modern Vocational Facilities</span>
</div>
</div>
</div>
</motion.div>
</div>
</div>
</section>

{/* Features Section */}
<section className="py-16 md:py-24 bg-white dark:bg-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.3 }}
variants={{
hidden: { opacity: 0 },
visible: {
opacity: 1,
transition: { staggerChildren: 0.1 },
},
}}
className="text-center mb-16"
>
<h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
Why Walugogo VHS?
</h2>
<p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
We're committed to 100% student success through personalized attention, quality academics, and practical vocational training
</p>
</motion.div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{features.map((feature, index) => (
<motion.div
key={index}
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.1 }}
whileHover={{ scale: 1.05, y: -10 }}
className="bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-700 dark:to-slate-800 rounded-2xl p-8 shadow-lg border border-blue-100 dark:border-slate-600 hover:shadow-xl transition-all"
>
<div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 darkfrom-blue-700 rounded-lg flex items-center justify-center text-white mb-4">
{feature.icon}
</div>
<h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
{feature.title}
</h3>
<p className="text-slate-600 dark:text-slate-400">
{feature.description}
</p>
</motion.div>
))}
</div>
</div>
</section>

{/* Success Panel - 2025 Results */}
<SuccessPanel />

{/* Academics & Vocational Section */}
<AcademicsSection />

{/* CTA Section */}
<section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-slate-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
<motion.h2
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="text-3xl md:text-5xl font-bold text-white mb-6"
>
Ready to Transform Your Future?
</motion.h2>
<motion.p
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto"
>
Join Walugogo Vocational High School where 100% of students succeed. Combine academic excellence with practical vocational skills for immediate employment readiness.
</motion.p>
<motion.div
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
>
<Link
href="/admissions"
className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-slate-100 transition-all shadow-lg"
>
Apply Today
<ArrowRight className="w-5 h-5" />
</Link>
</motion.div>
</div>
</section>

<Footer />
</main>
);
}
