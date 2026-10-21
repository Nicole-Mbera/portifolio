"use client";

import { motion } from "framer-motion";

export default function Ventures() {
  return (
    <section id="ventures" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-[#1a6b45] mb-2">Ventures</h2>
          <div className="w-12 h-1 bg-[#1a6b45] rounded mb-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl border border-[#e5e7eb] overflow-hidden shadow-sm"
        >
          <div className="grid md:grid-cols-5">
            {/* Left — YouMatter site thumbnail mockup */}
            <div className="md:col-span-2 bg-[#f0fdf4] border-b md:border-b-0 md:border-r border-[#e5e7eb] flex flex-col">
              {/* Mock browser bar */}
              <div className="bg-white border-b border-[#e5e7eb] px-4 py-2.5 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#fca5a5]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#fcd34d]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#86efac]" />
                </div>
                <div className="flex-1 bg-[#f3f4f6] rounded-md px-3 py-1 text-xs text-[#9ca3af] font-mono">
                  youmatter.rw
                </div>
              </div>

              {/* Site content preview */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                {/* Nav mock */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-[#1a6b45] flex items-center justify-center">
                      <span className="text-white text-[9px] font-black">YM</span>
                    </div>
                    <span className="text-xs font-bold text-[#111827]">You Matter</span>
                  </div>
                  <div className="hidden md:flex gap-3">
                    <div className="h-2 w-10 rounded bg-[#e5e7eb]" />
                    <div className="h-2 w-8 rounded bg-[#e5e7eb]" />
                    <div className="h-5 w-16 rounded-full bg-[#1a6b45]" />
                  </div>
                </div>

                {/* Hero block mock */}
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-[#111827] leading-tight mb-2">
                    You Don&apos;t Have<br />to Heal Alone.
                  </h3>
                  <p className="text-[#6b7280] text-xs mb-4 leading-relaxed">
                    Connect with licensed mental health professionals anytime, anywhere.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1.5 rounded-full bg-[#1a6b45] text-white text-[10px] font-bold">
                      Find a Therapist
                    </span>
                    <span className="px-3 py-1.5 rounded-full border border-[#1a6b45] text-[#1a6b45] text-[10px] font-bold">
                      I&apos;m a Professional
                    </span>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full border border-[#1a6b45] flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1a6b45]" />
                      </div>
                      <span className="text-[10px] text-[#6b7280]">500+ Licensed Therapists</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full border border-[#1a6b45] flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1a6b45]" />
                      </div>
                      <span className="text-[10px] text-[#6b7280]">100% Confidential</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Description */}
            <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-between bg-white">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#d1fae5] text-[#1a6b45] text-xs font-bold mb-5">
                  Founder & CEO
                </span>
                <h3 className="text-2xl font-black text-[#111827] mb-4">YouMatter.rw</h3>
                <p className="text-[#374151] text-sm leading-relaxed mb-6">
                  Mental health care in Rwanda is underserved — not because people don&apos;t
                  struggle, but because stigma keeps them from seeking help. YouMatter is a
                  teletherapy platform that directly addresses this: connecting users with
                  certified therapists in a private, accessible, and culturally aware environment.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: "Platform", value: "Teletherapy" },
                    { label: "Focus", value: "Mental Health" },
                    { label: "Market", value: "Rwanda" },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-xs font-bold text-[#1a6b45] uppercase tracking-wider mb-1">
                        {item.label}
                      </p>
                      <p className="text-[#111827] font-semibold text-sm">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="https://youmatter.rw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1a6b45] text-white text-sm font-bold hover:bg-[#155538] transition-colors w-fit"
              >
                Visit Platform
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
