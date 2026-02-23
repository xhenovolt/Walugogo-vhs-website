"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Heart, BookOpen, Users, Sparkles, CheckCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function AboutPage() {
const values = [
{
icon: <Heart className="w-8 h-8" />,
title: "Islamic Excellence",
description: "Faith-centered education combining academic achievement with Islamic values and character development.",
},
{
icon: <BookOpen className="w-8 h-8" />,
title: "Academic Mastery",
description: "Rigorous curriculum and vocational skilling ensuring students excel in both theory and practical application.",
},
{
icon: <Users className="w-8 h-8" />,
title: "Holistic Development",
description: "Comprehensive growth spanning intellectual, spiritual, physical, and social dimensions of student wellbeing.",
},
{
icon: <Sparkles className="w-8 h-8" />,
title: "Innovation in Education",
description: "Futuristic approaches combined with traditional Islamic values create a unique learning environment.",
}
];

const characteristics = [
"Strongly rooted in Islamic values and character formation",
"Academic excellence across mainstream and vocational programs",
"100% pass rate and zero failure commitment",
"Small class sizes enabling personalized attention",
"Experienced faculty dedicated to student success",
"Modern facilities for practical skill development",
"Holistic development beyond academics",
"Strong community and parental engagement",
"Continuous improvement and student-centered approach",
];

return (
<main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900">
<Navbar />

{/* Hero Section */}
<section className="pt-24 pb-12 md:pt-32 md:pb-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<motion.div
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
className="text-center mb-12"
>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
About Walugogo VHS
</h1>
<p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
Pioneering vocational excellence in Eastern Uganda with 100% student success commitment
</p>
</motion.div>
</div>
</section>

{/* Our Story */}
<section className="py-12 md:py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<motion.div
initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
>
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
Our Story
</h2>
<p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
Walugogo Vocational High School was established to provide high-quality education combining rigorous academics with practical vocational training.
</p>
<p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
We are committed to 100% student success through personalized attention, quality academics, and preparation for immediate employment.
</p>
<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
Our mission extends beyond test scores—we develop well-rounded individuals equipped with skills, character, and values for life success.
</p>
</motion.div>

<motion.div
initial={{ opacity: 0, x: 50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
className="relative"
>
<ImagePlaceholder width={500} height={400} className="w-full h-auto" />
</motion.div>
</div>
</div>
</section>

{/* Mission & Vision */}
<section className="py-12 md:py-20 bg-white/50 dark:bg-gray-800/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<motion.div
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
className="bg-white/80 dark:bg-gray-700/80 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-700"
>
<Target className="w-12 h-12 text-emerald-600 mb-4" />
<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
Our Mission
</h3>
<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
To provide excellent vocational education combining academics with practical skills, ensuring 100% student success and employment readiness.
</p>
</motion.div>

<motion.div
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8, delay: 0.2 }}
className="bg-white/80 dark:bg-gray-700/80 rounded-2xl p-8 border border-blue-200 dark:border-blue-700"
>
<Eye className="w-12 h-12 text-blue-600 mb-4" />
<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
Our Vision
</h3>
<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
To become Eastern Uganda's leading vocational high school, recognized for academic excellence and producing skilled professionals ready for careers.
</p>
</motion.div>
</div>
</div>
</section>

{/* Our Values */}
<section className="py-12 md:py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<motion.div
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="text-center mb-12"
>
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
Core Values
</h2>
<p className="text-gray-600 dark:text-gray-300">
Principles guiding our commitment to student success and institutional excellence
</p>
</motion.div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{values.map((value, index) => (
<motion.div
key={index}
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.1 }}
className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 border border-white/20 dark:border-gray-700/50 hover:shadow-lg transition-all"
>
<div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-xl flex items-center justify-center text-white mb-4">
{value.icon}
</div>
<h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
{value.title}
</h3>
<p className="text-sm text-gray-600 dark:text-gray-400">
{value.description}
</p>
</motion.div>
))}
</div>
</div>
</section>

{/* Institutional Highlights Photo Gallery */}
<section className="py-12 md:py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<motion.div
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="text-center mb-12"
>
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
Excellence in Every Detail
</h2>
<p className="text-gray-600 dark:text-gray-300">
From world-class facilities to disciplined learning environments
</p>
</motion.div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="rounded-2xl overflow-hidden shadow-lg"
>
<ImagePlaceholder width={400} height={280} className="w-full h-[280px]" />
<div className="p-4 bg-white dark:bg-gray-800">
<h3 className="font-bold text-gray-900 dark:text-white">Modern Infrastructure</h3>
</div>
</motion.div>

<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: 0.1 }}
className="rounded-2xl overflow-hidden shadow-lg"
>
<ImagePlaceholder width={400} height={280} className="w-full h-[280px]" />
<div className="p-4 bg-white dark:bg-gray-800">
<h3 className="font-bold text-gray-900 dark:text-white">Academic Excellence</h3>
</div>
</motion.div>

<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: 0.2 }}
className="rounded-2xl overflow-hidden shadow-lg"
>
<ImagePlaceholder width={400} height={280} className="w-full h-[280px]" />
<div className="p-4 bg-white dark:bg-gray-800">
<h3 className="font-bold text-gray-900 dark:text-white">Holistic Development</h3>
</div>
</motion.div>

<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: 0.3 }}
className="rounded-2xl overflow-hidden shadow-lg"
>
<ImagePlaceholder width={400} height={280} className="w-full h-[280px]" />
<div className="p-4 bg-white dark:bg-gray-800">
<h3 className="font-bold text-gray-900 dark:text-white">Nurturing Care</h3>
</div>
</motion.div>

<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: 0.4 }}
className="rounded-2xl overflow-hidden shadow-lg"
>
<ImagePlaceholder width={400} height={280} className="w-full h-[280px]" />
<div className="p-4 bg-white dark:bg-gray-800">
<h3 className="font-bold text-gray-900 dark:text-white">Student Wellness</h3>
</div>
</motion.div>

<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: 0.5 }}
className="rounded-2xl overflow-hidden shadow-lg"
>
<ImagePlaceholder width={400} height={280} className="w-full h-[280px]" />
<div className="p-4 bg-white dark:bg-gray-800">
<h3 className="font-bold text-gray-900 dark:text-white">Advanced Facilities</h3>
</div>
</motion.div>
</div>
</div>
</section>

{/* Why Walugogo Learners Are Different */}
<section className="py-12 md:py-20 bg-gradient-to-r from-emerald-600 via-blue-600 to-cyan-500">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<motion.div
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="text-center mb-12"
>
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
Why Walugogo Learners Are Different
</h2>
<p className="text-white/90 text-lg">
What sets our graduates apart from the rest
</p>
</motion.div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{characteristics.map((characteristic, idx) => (
<motion.div
key={idx}
initial={{ opacity: 0, scale: 0.9 }}
whileInView={{ opacity: 1, scale: 1 }}
viewport={{ once: true }}
transition={{ delay: idx * 0.05 }}
className="flex items-center gap-3 text-white"
>
<CheckCircle className="w-6 h-6 flex-shrink-0" />
<span>{characteristic}</span>
</motion.div>
))}
</div>
</div>
</section>

{/* Call to Action */}
<section className="py-12 md:py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<motion.div
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 md:p-12 text-center border border-emerald-200 dark:border-emerald-700/50"
>
<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
Ready to Join Walugogo?
</h2>
<p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
Experience the difference of personalized education with 100% student success commitment
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a href="/admissions" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition">
Apply Now
<ArrowRight className="w-5 h-5" />
</a>
<a href="/location" className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition">
Visit Us
</a>
</div>
</motion.div>
</div>
</section>

<Footer />
</main>
);
}
