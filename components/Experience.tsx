"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    role: "R&D Intern",
    company: "Floramigo.ai",
    companyUrl: null,
    period: "Early 2026",
    location: "Remote",
    summary:
      "Investigated overagreeableness (sycophancy) and conversational context loss in CBT-based therapy agents.",
    detail:
      "Identified and analyzed failure modes in AI therapy agents, specifically how they drift toward sycophantic responses and lose context across long conversations. Experimented with retrieval-augmented generation (RAG), system prompting strategies, and a three-agent architecture to address these behavioral issues. The work contributed to making AI therapy interactions more therapeutically grounded and consistent.",
    icon: "brain",
  },
  {
    role: "Facilitator",
    company: "First LEGO League",
    companyUrl: null,
    period: "2025",
    location: "Rwanda",
    summary:
      "Introduced young students to basic robotics concepts using Python blocks in a LEGO League competition setting.",
    detail:
      "Facilitated hands-on robotics sessions for young learners, guiding them through programming fundamentals using block-based Python. The role involved breaking down complex engineering concepts into accessible, age-appropriate challenges that built problem-solving confidence and early STEM interest.",
    icon: "robot",
  },
];

const icons: Record<string, React.ReactNode> = {
  brain: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M9.5 2a2.5 2.5 0 00-2.45 2H6a3 3 0 00-3 3v1a3 3 0 001.5 2.6V12a3 3 0 003 3h1v1.5a2.5 2.5 0 005 0V15h1a3 3 0 003-3V10.6A3 3 0 0018 8V7a3 3 0 00-3-3h-1.05A2.5 2.5 0 009.5 2z"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  robot: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="11" width="18" height="10" rx="2" stroke="white" strokeWidth="1.6" />
      <path d="M8 11V7a4 4 0 018 0v4" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="9" cy="16" r="1" fill="white" />
      <circle cx="15" cy="16" r="1" fill="white" />
      <path d="M12 3v2" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-[#1a6b45] mb-2">Experience</h2>
          <div className="w-12 h-1 bg-[#1a6b45] rounded mb-10" />
        </motion.div>

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.company}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="bg-white rounded-2xl border border-[#e5e7eb] shadow-sm p-6"
            >
              <div className="flex gap-5 items-start">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-[#1a6b45] flex items-center justify-center mb-2">
                    {icons[exp.icon]}
                  </div>
                  <p className="text-xs text-[#6b7280] whitespace-nowrap">{exp.period}</p>
                  <p className="text-xs text-[#9ca3af]">{exp.location}</p>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold text-[#111827]">{exp.role}</h3>
                      <p className="text-[#1a6b45] font-semibold text-sm mt-0.5">{exp.company}</p>
                    </div>
                  </div>

                  <p className="text-[#6b7280] text-sm mt-2 leading-relaxed">{exp.summary}</p>

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
                          {exp.detail}
                        </p>
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
