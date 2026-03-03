"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Users, Briefcase, Award, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SuccessPanel from "../components/SuccessPanel";
import AcademicsSection from "../components/AcademicsSection";
import ImagePlaceholder from "../components/ImagePlaceholder";

export default function HomePage() {
const [carouselIndex, setCarouselIndex] = useState(0);
const carouselImages = [
{ src: "/Walugogo/Library5.JPG", alt: "Modern library learning spaces" },
{ src: "/Walugogo/Library6.JPG", alt: "Student research and reading area" },
{ src: "/Walugogo/Library7.JPG", alt: "Knowledge resources and facilities" },
];

useEffect(() => {
const interval = setInterval(() => {
setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
}, 5000);
return () => clearInterval(interval);
}, []);

const nextSlide = () => setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
const prevSlide = () => setCarouselIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

const features = [
{
icon: <CheckCircle2 className="w-8 h-8" />,
title: "Academic Excellence",
description: "Exceptional teaching quality with 100% pass rate demonstrates our commitment to rigorous educational standards",
},
{
icon: <Briefcase className="w-8 h-8" />,
title: "Vocational Mastery",
description: "Advanced technical training in welding, carpentry, plumbing, and electronics—ensuring immediate career readiness",
},
{
icon: <Users className="w-8 h-8" />,
title: "Personalized Development",
description: "Intimate learning environments with dedicated mentorship enable each student to achieve their full potential",
},
{
icon: <Award className="w-8 h-8" />,
title: "World-Class Infrastructure",
description: "State-of-the-art facilities and technology create an optimal environment for both theoretical and practical excellence",
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

{/* Learning Spaces Section */}
<section className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
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
World-Class Learning Spaces
</h2>
<p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
Our state-of-the-art library and learning facilities provide the perfect environment for academic excellence
</p>
</motion.div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
{/* Carousel - Featured Library Images */}
<motion.div
initial={{ opacity: 0, x: -30 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
className="relative group"
>
<div className="relative overflow-hidden rounded-3xl shadow-2xl h-[400px]">
<AnimatePresence mode="wait">
<motion.div
key={carouselIndex}
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
transition={{ duration: 0.8 }}
className="absolute inset-0"
>
<Image
src={carouselImages[carouselIndex].src}
alt={carouselImages[carouselIndex].alt}
fill
className="object-cover"
priority
/>
</motion.div>
</AnimatePresence>

{/* Gradient Overlay */}
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

{/* Navigation Buttons */}
<button
onClick={prevSlide}
className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white dark:bg-black/80 dark:hover:bg-black rounded-full p-2 transition-all shadow-lg opacity-0 group-hover:opacity-100"
aria-label="Previous slide"
>
<ChevronLeft className="w-6 h-6 text-slate-900 dark:text-white" />
</button>

<button
onClick={nextSlide}
className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white dark:bg-black/80 dark:hover:bg-black rounded-full p-2 transition-all shadow-lg opacity-0 group-hover:opacity-100"
aria-label="Next slide"
>
<ChevronRight className="w-6 h-6 text-slate-900 dark:text-white" />
</button>

{/* Dot Indicators */}
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
{carouselImages.map((_, index) => (
<button
key={index}
onClick={() => setCarouselIndex(index)}
className={`transition-all duration-300 rounded-full ${
index === carouselIndex
? "bg-white w-8 h-2"
: "bg-white/50 w-2 h-2 hover:bg-white/70"
}`}
aria-label={`Go to slide ${index + 1}`}
/>
))}
</div>

{/* Info Section */}
<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
<motion.div
key={carouselIndex}
initial={{ opacity: 0, y: 10 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: 0.2 }}
>
<h3 className="text-2xl font-bold mb-2">
{carouselIndex === 0 && "Modern Library Learning Spaces"}
{carouselIndex === 1 && "Student Research & Reading Area"}
{carouselIndex === 2 && "Knowledge Resources & Facilities"}
</h3>
<p className="text-white/90 text-sm">
{carouselIndex === 0 && "Inspiring learning environments designed for academic excellence"}
{carouselIndex === 1 && "Dedicated spaces for focused study and research"}
{carouselIndex === 2 && "Rich collection of resources supporting student success"}
</p>
</motion.div>
</div>
</div>
</motion.div>

{/* Right Side: 2 Smaller Library Images */}
<div className="grid grid-cols-1 gap-4">
<motion.div
initial={{ opacity: 0, x: 30 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8, delay: 0.1 }}
className="relative overflow-hidden rounded-2xl shadow-lg h-[190px]"
>
<Image
src="/Walugogo/LearnersInTheLibrary1.JPG"
alt="Students engaged in learning"
fill
className="object-cover hover:scale-110 transition-transform duration-300"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
<div className="text-white">
<p className="font-semibold">Focused Study Environment</p>
</div>
</div>
</motion.div>

<motion.div
initial={{ opacity: 0, x: 30 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8, delay: 0.2 }}
className="relative overflow-hidden rounded-2xl shadow-lg h-[190px]"
>
<Image
src="/Walugogo/Library7.JPG"
alt="Library resources and books"
fill
className="object-cover hover:scale-110 transition-transform duration-300"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
<div className="text-white">
<p className="font-semibold">Rich Knowledge Resources</p>
</div>
</div>
</motion.div>
</div>
</div>

{/* Key Features of Learning Spaces */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: 0.3 }}
className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-md border-l-4 border-emerald-600"
>
<h4 className="font-bold text-slate-900 dark:text-white mb-2">Research Hub</h4>
<p className="text-slate-600 dark:text-slate-300 text-sm">Comprehensive collection of books, journals, and digital resources for student research</p>
</motion.div>

<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: 0.4 }}
className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-md border-l-4 border-blue-600"
>
<h4 className="font-bold text-slate-900 dark:text-white mb-2">Quiet Study Spaces</h4>
<p className="text-slate-600 dark:text-slate-300 text-sm">Dedicated areas for concentrated learning and preparation for examinations</p>
</motion.div>

<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: 0.5 }}
className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-md border-l-4 border-cyan-600"
>
<h4 className="font-bold text-slate-900 dark:text-white mb-2">Digital Access</h4>
<p className="text-slate-600 dark:text-slate-300 text-sm">Computer terminals and internet access for research and online learning resources</p>
</motion.div>
</div>
</div>
</section>

{/* Success Panel - 2025 Results */}
<SuccessPanel />

{/* Academics & Vocational Section */}
<AcademicsSection />

{/* Gallery Placeholder */}
<section className="py-16 md:py-24 bg-white dark:bg-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center mb-12">
<h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
Campus Life
</h2>
<p className="text-xl text-slate-600 dark:text-slate-400">
Experience the vibrant community and modern facilities at Walugogo VHS
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<motion.div
initial={{ opacity: 0, scale: 0.9 }}
whileInView={{ opacity: 1, scale: 1 }}
viewport={{ once: true }}
transition={{ delay: 0 }}
className="relative overflow-hidden rounded-lg shadow-lg h-[250px] col-span-1 md:col-span-1"
>
<Image
src="/Walugogo/Library2.JPG"
alt="Library facilities"
fill
className="object-cover hover:scale-110 transition-transform duration-300"
/>
</motion.div>
<motion.div
initial={{ opacity: 0, scale: 0.9 }}
whileInView={{ opacity: 1, scale: 1 }}
viewport={{ once: true }}
transition={{ delay: 0.1 }}
className="relative overflow-hidden rounded-lg shadow-lg h-[250px] col-span-1 md:col-span-1"
>
<Image
src="/Walugogo/LearnersInTheLibrary2.JPG"
alt="Students studying"
fill
className="object-cover hover:scale-110 transition-transform duration-300"
/>
</motion.div>
<motion.div
initial={{ opacity: 0, scale: 0.9 }}
whileInView={{ opacity: 1, scale: 1 }}
viewport={{ once: true }}
transition={{ delay: 0.2 }}
className="relative overflow-hidden rounded-lg shadow-lg h-[250px] col-span-1 md:col-span-1"
>
<Image
src="/Walugogo/Learning Session2.JPG"
alt="Classroom engagement"
fill
className="object-cover hover:scale-110 transition-transform duration-300"
/>
</motion.div>
<motion.div
initial={{ opacity: 0, scale: 0.9 }}
whileInView={{ opacity: 1, scale: 1 }}
viewport={{ once: true }}
transition={{ delay: 0.3 }}
className="relative overflow-hidden rounded-lg shadow-lg h-[250px] col-span-1 md:col-span-2"
>
<Image
src="/Walugogo/ClassBlock1.JPG"
alt="Modern classroom blocks"
fill
className="object-cover hover:scale-110 transition-transform duration-300"
/>
</motion.div>
</div>
<div className="text-center mt-8">
<Link
href="/gallery"
className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
>
View Full Gallery
<ArrowRight className="w-5 h-5" />
</Link>
</div>
</div>
</section>

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
