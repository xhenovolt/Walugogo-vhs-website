"use client";
import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Wrench, Code2, Beaker, Pen, Calculator, Lightbulb } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function AcademicsSection() {
	const { t } = useLanguage();

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.08,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
	};

	const mainstreamsData = [
		{
			icon: <Calculator className="w-8 h-8" />,
			title: "Mathematics",
			description: "Advanced concepts and problem-solving",
		},
		{
			icon: <Beaker className="w-8 h-8" />,
			title: "Physics",
			description: "Experimental and practical applications",
		},
		{
			icon: <Lightbulb className="w-8 h-8" />,
			title: "Biology",
			description: "Life sciences and biological systems",
		},
		{
			icon: <Code2 className="w-8 h-8" />,
			title: "Chemistry",
			description: "Laboratory and industrial applications",
		},
		{
			icon: <Pen className="w-8 h-8" />,
			title: "English Language",
			description: "Communication and professional writing",
		},
	];

	return (
		<section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
			{/* Background elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-10 dark:bg-blue-700/20" />
				<div className="absolute bottom-20 left-10 w-72 h-72 bg-slate-300 rounded-full blur-3xl opacity-10 dark:bg-slate-600/20" />
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
				{/* Header */}
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
						Academic Excellence
					</motion.span>
					<motion.h2
						variants={itemVariants}
						className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6"
					>
						Academics & Vocational Skilling
					</motion.h2>
					<motion.p
						variants={itemVariants}
						className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
					>
						We combine rigorous mainstream academics with practical vocational training to prepare students for immediate employment and further education.
					</motion.p>
				</motion.div>

				{/* Two Column Layout */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
					{/* Mainstream Subjects */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={containerVariants}
					>
						<motion.div
							variants={itemVariants}
							className="mb-8"
						>
							<div className="flex items-center gap-3 mb-4">
								<BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
								<h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50">
									Mainstream Subjects
								</h3>
							</div>
							<p className="text-slate-600 dark:text-slate-400 text-lg">
								Rigorous National Curriculum delivered with academic excellence
							</p>
						</motion.div>

						<motion.div
							variants={containerVariants}
							className="space-y-4"
						>
							{mainstreamsData.map((subject, index) => (
								<motion.div
									key={index}
									variants={itemVariants}
									className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 dark:border-blue-400 hover:translate-x-2"
								>
									<div className="flex items-start gap-4">
										<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
											{subject.icon}
										</div>
										<div>
											<h4 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-1">
												{subject.title}
											</h4>
											<p className="text-slate-600 dark:text-slate-400">
												{subject.description}
											</p>
										</div>
									</div>
								</motion.div>
							))}
						</motion.div>
					</motion.div>

					{/* Vocational Skilling */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.3 }}
						variants={containerVariants}
					>
						<motion.div
							variants={itemVariants}
							className="mb-8"
						>
							<div className="flex items-center gap-3 mb-4">
								<Wrench className="w-8 h-8 text-blue-600 dark:text-blue-400" />
								<h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50">
									Vocational Skilling
								</h3>
							</div>
							<p className="text-slate-600 dark:text-slate-400 text-lg">
								Practical technical training for immediate employment readiness
							</p>
						</motion.div>

						<motion.div
							variants={containerVariants}
							className="space-y-4"
						>
							{/* Vocational Feature Cards */}
							<motion.div
								variants={itemVariants}
								className="group bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-amber-500 dark:border-amber-400 hover:translate-x-2"
							>
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
										<Wrench className="w-6 h-6" />
									</div>
									<div>
										<h4 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-1">
											Hands-On Training
										</h4>
										<p className="text-slate-600 dark:text-slate-400">
											Real-world vocational projects and equipment practice
										</p>
									</div>
								</div>
							</motion.div>

							<motion.div
								variants={itemVariants}
								className="group bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-cyan-500 dark:border-cyan-400 hover:translate-x-2"
							>
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
										<Code2 className="w-6 h-6" />
									</div>
									<div>
										<h4 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-1">
											Industry Standards
										</h4>
										<p className="text-slate-600 dark:text-slate-400">
											Training aligned with current market requirements
										</p>
									</div>
								</div>
							</motion.div>

							<motion.div
								variants={itemVariants}
								className="group bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-emerald-500 dark:border-emerald-400 hover:translate-x-2"
							>
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
										<Lightbulb className="w-6 h-6" />
									</div>
									<div>
										<h4 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-1">
											Employment Ready
										</h4>
										<p className="text-slate-600 dark:text-slate-400">
											Graduates equipped with skills for immediate employment
										</p>
									</div>
								</div>
							</motion.div>

							{/* Vocational Fee Info */}
							<motion.div
								variants={itemVariants}
								className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-blue-900 dark:to-slate-900 rounded-xl p-6 text-white shadow-lg"
							>
								<p className="text-sm font-semibold opacity-90 mb-2">Vocational Skilling</p>
								<p className="text-3xl font-bold mb-2">20,000 UGX</p>
								<p className="text-sm opacity-75">Separate fee - equipment and specialized instruction</p>
							</motion.div>
						</motion.div>
					</motion.div>
				</div>

				{/* CTA Section */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={containerVariants}
					className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-slate-900 rounded-2xl p-8 md:p-12 text-white text-center"
				>
					<motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-4">
						Ready to Start Your Journey?
					</motion.h3>
					<motion.p
						variants={itemVariants}
						className="text-lg opacity-90 mb-8 max-w-2xl mx-auto"
					>
						Combine academic excellence with practical vocational skills. Apply now and take the first step toward your future.
					</motion.p>
					<motion.a
						variants={itemVariants}
						href="/contact"
						className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-slate-100 transition-colors"
					>
						Apply Now
					</motion.a>
				</motion.div>
			</div>
		</section>
	);
}
