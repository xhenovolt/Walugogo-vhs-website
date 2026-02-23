"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, User, School, CheckCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function AdmissionForm() {
	const { t } = useLanguage();
	const [formData, setFormData] = useState({
		studentName: "",
		formerSchool: "",
		grade: "",
		parentName: "",
		parentPhone: "",
		parentEmail: "",
		howHeard: "",
	});

	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const validateForm = () => {
		if (!formData.studentName.trim()) {
			setError("Student name is required");
			return false;
		}
		if (!formData.formerSchool.trim()) {
			setError("Former school is required");
			return false;
		}
		if (!formData.grade) {
			setError("Grade/Class is required");
			return false;
		}
		if (!formData.parentName.trim()) {
			setError("Parent/Guardian name is required");
			return false;
		}
		if (!formData.parentPhone.trim()) {
			setError("Phone number is required");
			return false;
		}
		if (!formData.parentEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.parentEmail)) {
			setError("Valid email address is required");
			return false;
		}
		if (!formData.howHeard) {
			setError("Please tell us how you heard about us");
			return false;
		}
		return true;
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError("");

		if (!validateForm()) {
			return;
		}

		setLoading(true);

		try {
			const response = await fetch("/api/admission", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setSubmitted(true);
				setFormData({
					studentName: "",
					formerSchool: "",
					grade: "",
					parentName: "",
					parentPhone: "",
					parentEmail: "",
					howHeard: "",
				});
				setTimeout(() => setSubmitted(false), 5000);
			} else {
				setError("Failed to submit form. Please try again.");
			}
		} catch (err) {
			setError("Error submitting form. Please try again.");
			console.error("Form submission error:", err);
		} finally {
			setLoading(false);
		}
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.05,
				delayChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
	};

	return (
		<section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-900 dark:to-slate-800">
			<div className="max-w-2xl mx-auto px-4 sm:px-6">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={containerVariants}
				>
					{/* Header */}
					<motion.div variants={itemVariants} className="text-center mb-12">
						<h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-4">
							Online Admission Form
						</h2>
						<p className="text-lg text-slate-600 dark:text-slate-400">
							Complete your application below. We'll contact you within 48 hours.
						</p>
					</motion.div>

					{/* Success Message */}
					{submitted && (
						<motion.div
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							className="mb-8 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-300 dark:border-emerald-700 rounded-lg p-6 flex items-start gap-3"
						>
							<CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-1" />
							<div>
								<h3 className="text-lg font-bold text-emerald-900 dark:text-emerald-100 mb-1">
									Success!
								</h3>
								<p className="text-emerald-800 dark:text-emerald-200">
									Your application has been submitted successfully. We will contact you within 48 hours.
								</p>
							</div>
						</motion.div>
					)}

					{/* Error Message */}
					{error && (
						<motion.div
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							className="mb-8 bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg p-6 flex items-start gap-3"
						>
							<AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
							<div>
								<h3 className="text-lg font-bold text-red-900 dark:text-red-100 mb-1">
									Error
								</h3>
								<p className="text-red-800 dark:text-red-200">{error}</p>
							</div>
						</motion.div>
					)}

					{/* Form */}
					<motion.form
						variants={containerVariants}
						onSubmit={handleSubmit}
						className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12"
					>
						{/* Student Information Section */}
						<motion.div variants={itemVariants} className="mb-8">
							<h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-2">
								<User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
								Student Information
							</h3>

							<div className="space-y-4">
								<motion.div variants={itemVariants}>
									<label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
										Student Full Name *
									</label>
									<input
										type="text"
										name="studentName"
										value={formData.studentName}
										onChange={handleInputChange}
										placeholder="Enter student's full name"
										className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
										disabled={loading}
									/>
								</motion.div>

								<motion.div variants={itemVariants}>
									<label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
										Former School *
									</label>
									<input
										type="text"
										name="formerSchool"
										value={formData.formerSchool}
										onChange={handleInputChange}
										placeholder="Name of previous school"
										className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
										disabled={loading}
									/>
								</motion.div>

								<motion.div variants={itemVariants}>
									<label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
										Grade/Class Applying For *
									</label>
									<select
										name="grade"
										value={formData.grade}
										onChange={handleInputChange}
										className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
										disabled={loading}
									>
										<option value="">Select grade level</option>
										<option value="S1">Senior 1</option>
										<option value="S2">Senior 2</option>
										<option value="S3">Senior 3</option>
										<option value="S4">Senior 4</option>
										<option value="S5">Senior 5</option>
										<option value="S6">Senior 6</option>
									</select>
								</motion.div>
							</div>
						</motion.div>

						{/* Parent/Guardian Information Section */}
						<motion.div variants={itemVariants} className="mb-8">
							<h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-2">
								<Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
								Parent/Guardian Information
							</h3>

							<div className="space-y-4">
								<motion.div variants={itemVariants}>
									<label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
										Parent/Guardian Name *
									</label>
									<input
										type="text"
										name="parentName"
										value={formData.parentName}
										onChange={handleInputChange}
										placeholder="Full name of parent or guardian"
										className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
										disabled={loading}
									/>
								</motion.div>

								<motion.div variants={itemVariants}>
									<label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
										WhatsApp/Phone Number *
									</label>
									<input
										type="tel"
										name="parentPhone"
										value={formData.parentPhone}
										onChange={handleInputChange}
										placeholder="e.g., +256 772 123 456"
										className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
										disabled={loading}
									/>
								</motion.div>

								<motion.div variants={itemVariants}>
									<label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
										Email Address *
									</label>
									<input
										type="email"
										name="parentEmail"
										value={formData.parentEmail}
										onChange={handleInputChange}
										placeholder="your@email.com"
										className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
										disabled={loading}
									/>
								</motion.div>
							</div>
						</motion.div>

						{/* Application Details Section */}
						<motion.div variants={itemVariants} className="mb-8">
							<h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-6 flex items-center gap-2">
								<School className="w-5 h-5 text-blue-600 dark:text-blue-400" />
								Application Details
							</h3>

							<motion.div variants={itemVariants}>
								<label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
									How did you hear about us? *
								</label>
								<select
									name="howHeard"
									value={formData.howHeard}
									onChange={handleInputChange}
									className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
									disabled={loading}
								>
									<option value="">Select an option</option>
									<option value="website">Website</option>
									<option value="social-media">Social Media</option>
									<option value="friend">Friend/Family Referral</option>
									<option value="local-community">Local Community</option>
									<option value="advertisement">Advertisement</option>
									<option value="school-visit">School Visit</option>
									<option value="other">Other</option>
								</select>
							</motion.div>
						</motion.div>

						{/* Submit Button */}
						<motion.div variants={itemVariants}>
							<button
								type="submit"
								disabled={loading || submitted}
								className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed"
							>
								{loading ? "Submitting..." : submitted ? "Submitted Successfully!" : "Submit Application"}
							</button>
						</motion.div>

						{/* Info Text */}
						<motion.p
							variants={itemVariants}
							className="text-center text-sm text-slate-600 dark:text-slate-400 mt-4"
						>
							We'll contact you within 48 hours to confirm your application.
						</motion.p>
					</motion.form>
				</motion.div>
			</div>
		</section>
	);
}
