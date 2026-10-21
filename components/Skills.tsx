"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "ML & AI",
    skills: ["Python", "TensorFlow", "Pandas", "NumPy", "R"],
    learning: [],
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1a6b45" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <line x1="12" y1="7" x2="5" y2="17" />
        <line x1="12" y1="7" x2="19" y2="17" />
        <line x1="5" y1="19" x2="19" y2="19" />
        <circle cx="12" cy="13" r="1.5" />
        <line x1="12" y1="7" x2="12" y2="11.5" />
      </svg>
    ),
  },
  {
    category: "Web Dev",
    skills: ["JavaScript", "React", "Node.js", "HTML", "CSS"],
    learning: [],
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1a6b45" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="15" y1="4" x2="9" y2="20" />
      </svg>
    ),
  },
  {
    category: "Data & Cloud",
    skills: ["SQL", "AWS", "S3", "DynamoDB"],
    learning: ["AWS", "S3", "DynamoDB"],
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1a6b45" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    category: "Tools",
    skills: ["Git", "Bash"],
    learning: [],
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#1a6b45" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <polyline points="8 10 12 14 16 10" />
        <line x1="12" y1="14" x2="12" y2="17" />
        <line x1="8" y1="21" x2="16" y2="21" />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-[#1a6b45] mb-2">Skills</h2>
          <div className="w-12 h-1 bg-[#1a6b45] rounded mb-12" />
        </motion.div>

        <div className="bg-white rounded-3xl border border-[#e5e7eb] shadow-sm overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#e5e7eb]">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center text-center px-6 py-10 gap-4"
              >
                {/* Line-art icon */}
                <div className="w-16 h-16 rounded-full border border-[#d1fae5] bg-[#f0fdf4] flex items-center justify-center">
                  {group.icon}
                </div>

                {/* Category */}
                <p className="font-bold text-[#1a6b45] text-sm uppercase tracking-wider">
                  {group.category}
                </p>

                {/* Divider */}
                <div className="w-8 h-px bg-[#d1fae5]" />

                {/* Skill list */}
                <ul className="space-y-1.5">
                  {group.skills.map((skill) => {
                    const isLearning = group.learning.includes(skill);
                    return (
                      <li
                        key={skill}
                        className="text-sm text-[#374151]"
                      >
                        {skill}
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
