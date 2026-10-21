"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Cardiac Arrhythmia Classifier",
    tag: "Deep Learning · Healthcare",
    summary:
      "Classifies cardiac arrhythmias from ECG segments using deep learning, enabling automated rhythm detection that could support clinicians in low-resource settings.",
    detail:
      "Built a neural network trained on labeled ECG time-series segments to distinguish between arrhythmia types. The pipeline handles signal preprocessing, feature extraction, and classification, with a focus on clinical interpretability.",
    tech: ["Python", "TensorFlow", "NumPy", "Pandas"],
    link: "https://github.com/NicoleMbera/ecg-arrythmia-classification",
    linkLabel: "GitHub",
  },
  {
    title: "Malaria Cell Classifier (CNN)",
    tag: "Computer Vision · Healthcare",
    summary:
      "Inception-based custom CNN that classifies microscopy cell images as infected or uninfected, achieving high accuracy on the NIH malaria dataset.",
    detail:
      "Implemented and fine-tuned an InceptionV3-inspired architecture trained on cell image data. Experimented with data augmentation, custom CNN blocks, and transfer learning to maximize sensitivity on infected samples.",
    tech: ["Python", "TensorFlow", "Kaggle", "NumPy"],
    link: "https://www.kaggle.com/code/nicoleumurerwambera/inception-custom-cnn-nicole-v2",
    linkLabel: "Kaggle Notebook",
  },
  {
    title: "X-Ray Image Interpretation",
    tag: "Computer Vision · Radiology",
    summary:
      "A deep learning model for interpreting chest X-ray images, targeting pathology detection to assist diagnosis in resource-constrained environments.",
    detail:
      "Designed a CNN pipeline for chest X-ray classification, focusing on pathology detection. Addressed class imbalance common in medical imaging datasets and evaluated model performance using clinically relevant metrics.",
    tech: ["Python", "TensorFlow", "Pandas", "NumPy"],
    link: null,
    linkLabel: null,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-[#1a6b45] mb-2">Projects</h2>
          <div className="w-12 h-1 bg-[#1a6b45] rounded mb-10" />
        </motion.div>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="bg-[#f8f9fc] rounded-2xl border border-[#e5e7eb] overflow-hidden"
            >
              <div className="p-6 flex flex-col md:flex-row md:items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#1a6b45] flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold text-[#1a6b45] mb-1">{project.tag}</p>
                      <h3 className="text-lg font-bold text-[#111827]">{project.title}</h3>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 text-[#1a6b45] hover:text-[#155538] transition-colors"
                        aria-label={`Open ${project.linkLabel}`}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                  <p className="text-[#6b7280] text-sm mt-2 leading-relaxed">{project.summary}</p>

                  <AnimatePresence>
                    {expanded === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-[#374151] text-sm mt-3 leading-relaxed">
                          {project.detail}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1 rounded-full bg-[#d1fae5] text-[#1a6b45] text-xs font-medium"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    className="mt-3 text-xs font-semibold text-[#1a6b45] hover:text-[#155538] flex items-center gap-1 transition-colors"
                  >
                    {expanded === i ? "Show less" : "Show more"}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`transition-transform ${expanded === i ? "rotate-180" : ""}`}
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
