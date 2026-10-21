"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// To try different photos, swap the src below:
//   "/images/hero.png"
//   "/images/option-2.png"
//   "/images/Nicole-pp.jpeg"
const HERO_IMAGE = "/images/hero.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col pt-20 px-6 overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto w-full pt-10 pb-6">
        {/* Top row: name (left) + photo (right) */}
        <div className="grid md:grid-cols-[1fr_auto] gap-6 items-end mb-10">

          {/* Large editorial name */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <p className="text-xs font-bold text-[#1a6b45] uppercase tracking-[0.25em] mb-4">
              Hello, I&apos;m
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#111827] leading-tight tracking-tight">
              Nicole Mbera
              <br />
              Umurerwa
            </h1>
          </motion.div>

          {/* Circular photo with green accent circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
            className="relative flex-shrink-0 self-center w-80 h-80 md:w-96 md:h-96"
          >
            {/* Green accent circle offset behind photo */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#1a6b45]/15 top-6 right-6" />
            {/* Circular photo */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl z-10">
              <Image
                src={HERO_IMAGE}
                alt="Nicole Mbera Umurerwa"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Description + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-center gap-6"
        >
          <p className="text-[#6b7280] text-base leading-relaxed max-w-lg">
            Building at the intersection of AI and medicine to make healthcare
            more accurate, efficient, and accessible.
          </p>
          <div className="flex flex-wrap gap-3 flex-shrink-0 md:ml-auto">
            <a
              href="mailto:mberanicole@gmail.com"
              className="px-5 py-2.5 rounded-full bg-[#1a6b45] text-white font-bold text-sm hover:bg-[#155538] transition-colors whitespace-nowrap"
            >
              Get in Touch
            </a>
            <a
              href="/cv"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full border-2 border-[#1a6b45] text-[#1a6b45] font-bold text-sm hover:bg-[#d1fae5] transition-colors whitespace-nowrap"
            >
              Download CV
            </a>
            <a
              href="https://github.com/NicoleMbera"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full border-2 border-[#e5e7eb] text-[#374151] font-bold text-sm hover:border-[#1a6b45] hover:text-[#1a6b45] transition-colors whitespace-nowrap"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Separator + scroll indicator */}
        <div className="border-t border-[#e5e7eb] mt-16 pt-6 flex flex-col items-center gap-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col items-center gap-2 text-[#9ca3af] text-xs"
          >
            <span>Scroll down</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.4 }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 3v10M3 8l5 5 5-5"
                  stroke="#9ca3af"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
