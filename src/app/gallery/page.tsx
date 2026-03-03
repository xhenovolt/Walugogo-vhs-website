"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryCategories = [
    {
      name: "Library & Learning Spaces",
      description: "Our state-of-the-art library and academic facilities",
      images: [
        "/Walugogo/Library1.JPG",
        "/Walugogo/Library2.JPG",
        "/Walugogo/Library3.JPG",
        "/Walugogo/Library4.JPG",
        "/Walugogo/Library5.JPG",
        "/Walugogo/Library6.JPG",
        "/Walugogo/Library7.JPG",
        "/Walugogo/Library8.JPG"
      ]
    },
    {
      name: "Learners in the Library",
      description: "Students engaged in focused learning and research",
      images: [
        "/Walugogo/LearnersInTheLibrary1.JPG",
        "/Walugogo/LearnersInTheLibrary2.JPG",
        "/Walugogo/LearnersInTheLibrary3.JPG",
        "/Walugogo/LearnersInTheLibrary4.JPG",
        "/Walugogo/LearnersInTheLibrary5.JPG",
        "/Walugogo/LearnersInTheLibrary6.JPG",
        "/Walugogo/LearnersInTheLibrary7.JPG"
      ]
    },
    {
      name: "Learning Sessions",
      description: "Active classroom learning and engagement",
      images: [
        "/Walugogo/Learning Session1.JPG",
        "/Walugogo/Learning Session2.JPG",
        "/Walugogo/Learning Session3.JPG",
        "/Walugogo/Learning Session4.JPG"
      ]
    },
    {
      name: "Classroom Infrastructure",
      description: "Our modern classroom blocks and facilities",
      images: [
        "/Walugogo/ClassBlock1.JPG",
        "/Walugogo/ClassBlock2.JPG",
        "/Walugogo/ClassBlock3.JPG"
      ]
    },
    {
      name: "Campus Signage & Landmarks",
      description: "Navigation and campus infrastructure",
      images: [
        "/Walugogo/Signpost1.JPG",
        "/Walugogo/Signpost2.JPG",
        "/Walugogo/Signpost3.JPG",
        "/Walugogo/Signpost4.JPG",
        "/Walugogo/Signpost5.JPG",
        "/Walugogo/Signpost6.JPG",
        "/Walugogo/Signpost7.JPG"
      ]
    },
    {
      name: "Achievements & Recognition",
      description: "Awards and badge of excellence",
      images: [
        "/Walugogo/badge.JPG"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900">
      <Navbar />
      
      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Campus Gallery
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our state-of-the-art facilities, learning environments, and student life at Walugogo VHS
            </p>
          </motion.div>

          {/* Gallery Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            {galleryCategories.map((category, categoryIdx) => (
              <div key={categoryIdx} className="mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIdx * 0.1 }}
                  className="mb-8"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {category.name}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.images.map((image, imgIdx) => (
                    <motion.div
                      key={imgIdx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: imgIdx * 0.05 }}
                      onClick={() => setSelectedImage(image)}
                      className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group aspect-square"
                    >
                      <Image
                        src={image}
                        alt={`${category.name} - Image ${imgIdx + 1}`}
                        fill
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Image Modal */}
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative max-w-4xl w-full max-h-[90vh]"
              >
                <Image
                  src={selectedImage}
                  alt="Gallery image"
                  width={1200}
                  height={800}
                  className="object-contain w-full h-auto rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl font-bold"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <p className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">40+</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Campus Photos</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">6</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Categories</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-cyan-600 dark:text-cyan-400">300+</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Students</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-600 dark:text-purple-400">100%</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Success Rate</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
