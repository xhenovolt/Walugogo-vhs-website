"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Award } from "lucide-react";

export default function SuccessPanel() {
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

const counterVariants = {
hidden: { scale: 0.8, opacity: 0 },
visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

return (
<section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 relative overflow-hidden">
{/* Background decoration */}
<div className="absolute inset-0 overflow-hidden">
<div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 dark:bg-blue-700/20" />
<div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200 rounded-full blur-3xl opacity-20 dark:bg-slate-700/20" />
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.3 }}
variants={containerVariants}
className="text-center mb-16"
>
<motion.h2
variants={itemVariants}
className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4"
>
2025 Results - 100% Pass Rate
</motion.h2>
<motion.p
variants={itemVariants}
className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
>
With small classes and personalized attention, every student receives the support they need
</motion.p>
</motion.div>

{/* Success Stats Grid */}
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.3 }}
variants={containerVariants}
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12"
>
{/* Total Candidates */}
<motion.div
variants={itemVariants}
className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 text-center border-2 border-blue-200 dark:border-blue-700"
>
<motion.div
variants={counterVariants}
className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2"
>
17
</motion.div>
<p className="text-slate-600 dark:text-slate-300 font-semibold">
Total Candidates
</p>
</motion.div>

{/* A's */}
<motion.div
variants={itemVariants}
className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 rounded-2xl shadow-lg p-8 text-center border-2 border-emerald-400 dark:border-emerald-600"
>
<motion.div
variants={counterVariants}
className="text-5xl font-bold text-emerald-600 dark:text-emerald-400 mb-2"
>
2
</motion.div>
<p className="text-slate-600 dark:text-slate-300 font-semibold">Grade A</p>
</motion.div>

{/* B's */}
<motion.div
variants={itemVariants}
className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-2xl shadow-lg p-8 text-center border-2 border-blue-400 dark:border-blue-600"
>
<motion.div
variants={counterVariants}
className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2"
>
3
</motion.div>
<p className="text-slate-600 dark:text-slate-300 font-semibold">Grade B</p>
</motion.div>

{/* C's */}
<motion.div
variants={itemVariants}
className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/30 rounded-2xl shadow-lg p-8 text-center border-2 border-amber-400 dark:border-amber-600"
>
<motion.div
variants={counterVariants}
className="text-5xl font-bold text-amber-600 dark:text-amber-400 mb-2"
>
12
</motion.div>
<p className="text-slate-600 dark:text-slate-300 font-semibold">Grade C</p>
</motion.div>

{/* Zero Failure */}
<motion.div
variants={itemVariants}
className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-800/30 rounded-2xl shadow-lg p-8 text-center border-2 border-red-400 dark:border-red-600"
>
<motion.div
variants={counterVariants}
className="text-5xl font-bold text-red-600 dark:text-red-400 mb-2"
>
0
</motion.div>
<p className="text-slate-600 dark:text-slate-300 font-semibold">Failures (D/E)</p>
</motion.div>
</motion.div>

{/* Key Metrics */}
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.3 }}
variants={containerVariants}
className="grid grid-cols-1 md:grid-cols-3 gap-6"
>
{/* Pass Rate */}
<motion.div
variants={itemVariants}
className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 flex items-center gap-4"
>
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center flex-shrink-0">
<CheckCircle2 className="w-8 h-8 text-white" />
</div>
<div>
<p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
100%
</p>
<p className="text-slate-600 dark:text-slate-300 font-semibold">
Pass Rate
</p>
</div>
</motion.div>

{/* Zero Failure Rate */}
<motion.div
variants={itemVariants}
className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 flex items-center gap-4"
>
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center flex-shrink-0">
<TrendingUp className="w-8 h-8 text-white" />
</div>
<div>
<p className="text-3xl font-bold text-blue-600 dark:text-blue-400">0%</p>
<p className="text-slate-600 dark:text-slate-300 font-semibold">
Failure Rate
</p>
</div>
</motion.div>

{/* Quality Commitment */}
<motion.div
variants={itemVariants}
className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 flex items-center gap-4"
>
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center flex-shrink-0">
<Award className="w-8 h-8 text-white" />
</div>
<div>
<p className="text-3xl font-bold text-slate-600 dark:text-slate-400">
100%
</p>
<p className="text-slate-600 dark:text-slate-300 font-semibold">
Quality Focus
</p>
</div>
</motion.div>
</motion.div>
</div>
</section>
);
}
