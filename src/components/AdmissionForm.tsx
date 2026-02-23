"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, User, School, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export default function AdmissionForm() {
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

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
const { name, value } = e.target;
setFormData((prev) => ({ ...prev, [name]: value }));
setError("");
};

const validateEmail = (email: string) => {
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validatePhone = (phone: string) => {
return /^[\d+\-\s()]{10,}$/.test(phone.replace(/\s/g, ""));
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
setError("");

if (!formData.studentName.trim()) {
setError("Student name is required");
return;
}
if (!formData.parentEmail.trim()) {
setError("Parent email is required");
return;
}
if (!validateEmail(formData.parentEmail)) {
setError("Please enter a valid email address");
return;
}
if (!formData.parentPhone.trim()) {
setError("Parent phone number is required");
return;
}
if (!validatePhone(formData.parentPhone)) {
setError("Please enter a valid phone number");
return;
}

setLoading(true);

try {
const response = await fetch("/api/admission", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(formData),
});

if (!response.ok) throw new Error("Failed to submit form");

setSubmitted(true);
setTimeout(() => {
setFormData({
studentName: "",
formerSchool: "",
grade: "",
parentName: "",
parentPhone: "",
parentEmail: "",
howHeard: "",
});
setSubmitted(false);
}, 3000);
} catch {
setError("Failed to submit form. Please try again.");
} finally {
setLoading(false);
}
};

if (submitted) {
return (
<motion.div
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-300 dark:border-emerald-700 rounded-xl p-8 text-center"
>
<CheckCircle className="w-16 h-16 text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
<h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-200 mb-2">
Application Received!
</h3>
<p className="text-emerald-700 dark:text-emerald-300">
Thank you for applying to Walugogo VHS. We will contact you within 48 hours.
</p>
</motion.div>
);
}

return (
<motion.form
onSubmit={handleSubmit}
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto"
>
<h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
Application Form
</h3>

{error && (
<motion.div
initial={{ opacity: 0, y: -10 }}
animate={{ opacity: 1, y: 0 }}
className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg flex items-center gap-3"
>
<AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
<p className="text-red-800 dark:text-red-300 font-semibold">{error}</p>
</motion.div>
)}

<div className="space-y-6">
{/* Student Information */}
<div>
<h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
<User className="w-5 h-5" />
Student Information
</h4>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input
type="text"
name="studentName"
placeholder="Full Name"
value={formData.studentName}
onChange={handleChange}
className="px-4 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
/>
<input
type="text"
name="formerSchool"
placeholder="Former School"
value={formData.formerSchool}
onChange={handleChange}
className="px-4 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
/>
<select
name="grade"
value={formData.grade}
onChange={handleChange}
className="px-4 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
>
<option value="">Select Grade/Class</option>
<option value="A1">A1</option>
<option value="A2">A2</option>
<option value="S1">Senior 1</option>
<option value="S2">Senior 2</option>
<option value="S3">Senior 3</option>
<option value="S4">Senior 4</option>
<option value="S5">Senior 5</option>
<option value="S6">Senior 6</option>
</select>
</div>
</div>

{/* Parent/Guardian Information */}
<div>
<h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
<User className="w-5 h-5" />
Parent/Guardian Information
</h4>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input
type="text"
name="parentName"
placeholder="Parent/Guardian Name"
value={formData.parentName}
onChange={handleChange}
className="px-4 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
/>
<input
type="tel"
name="parentPhone"
placeholder="WhatsApp/Phone Number"
value={formData.parentPhone}
onChange={handleChange}
className="px-4 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
/>
<input
type="email"
name="parentEmail"
placeholder="Parent Email"
value={formData.parentEmail}
onChange={handleChange}
className="px-4 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 md:col-span-2"
/>
</div>
</div>

{/* Application Details */}
<div>
<h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
<School className="w-5 h-5" />
Application Details
</h4>

<select
name="howHeard"
value={formData.howHeard}
onChange={handleChange}
className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
>
<option value="">How did you hear about us?</option>
<option value="Social Media">Social Media</option>
<option value="Website">Website</option>
<option value="Friend/Referral">Friend or Referral</option>
<option value="School Representative">School Representative</option>
<option value="Newspaper/Local Media">Newspaper or Local Media</option>
<option value="Other">Other</option>
</select>
</div>

{/* Submit Button */}
<motion.button
type="submit"
disabled={loading}
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
>
{loading ? (
<>
<Loader2 className="w-5 h-5 animate-spin" />
Submitting...
</>
) : (
"Submit Application"
)}
</motion.button>
</div>
</motion.form>
);
}
