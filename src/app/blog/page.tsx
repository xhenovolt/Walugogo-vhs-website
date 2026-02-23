"use client";
import React from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function BlogPage() {
const blogPosts = [
{
title: "Vocational Education Excellence",
excerpt: "Exploring how hands-on vocational training prepares students for immediate employment and career success.",
link: "#",
},
{
title: "Building Tomorrow's Leaders",
excerpt: "The role of character education and leadership development in creating well-rounded graduates.",
link: "#",
},
{
title: "Technology in Vocational Training",
excerpt: "Modern tools and equipment transforming how we teach practical skills in vocational programs.",
link: "#",
},
];
return (
<main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans">
<Navbar />
<div className="pt-24 md:pt-32 max-w-5xl mx-auto px-6">
<section className="text-center mb-12">
<motion.h1
initial={{ opacity: 0, y: -30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7 }}
className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-4"
>
Insights & Innovations
</motion.h1>
<motion.p
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.2 }}
className="text-lg md:text-xl text-gray-700 dark:text-gray-200"
>
Stay updated with the latest trends and insights from Walugogo Vocational High School.
</motion.p>
</section>
<section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
{blogPosts.map((post, i) => (
<motion.div
key={post.title}
whileHover={{ scale: 1.03 }}
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: i * 0.1 }}
className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col"
>
<div className="w-full h-40 rounded-lg overflow-hidden mb-4 bg-gray-200 dark:bg-gray-700">
<ImagePlaceholder width={320} height={160} className="w-full h-full" />
</div>
<h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-2">
{post.title}
</h3>
<p className="text-gray-700 dark:text-gray-200 mb-4">{post.excerpt}</p>
<Link
href={post.link}
className="text-blue-600 dark:text-blue-300 hover:underline mt-auto font-semibold"
>
Read More
</Link>
</motion.div>
))}
</section>
</div>
<Footer />
</main>
);
}
