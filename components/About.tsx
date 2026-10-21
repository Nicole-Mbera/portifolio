"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="pt-10 pb-24 px-6 relative overflow-hidden">
      {/* Watermark */}
      <div
        aria-hidden
        className="absolute -top-4 right-0 text-[10rem] md:text-[14rem] font-black text-[#111827]/[0.04] leading-none select-none pointer-events-none"
      >
        ABOUT
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-[#9ca3af] tracking-[0.2em] font-mono mb-10"
        >
          Some words to say...
        </motion.p>

        {/* Card + overlapping photo */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="relative"
        >
          {/* Circle photo — overlaps top-left corner of card */}
          <div className="absolute -top-10 -left-4 md:-left-6 w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white shadow-xl z-20">
            <Image
              src="/images/Nicole-pp.jpeg"
              alt="Nicole Mbera Umurerwa"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Green card */}
          <div className="ml-20 md:ml-28 bg-[#1a6b45] rounded-2xl md:rounded-3xl p-8 md:p-12 text-white">
            <div className="max-w-2xl">
              <p className="text-white/90 text-sm leading-relaxed mb-5">
                I started in medicine, learning how the body works, how diseases present,
                and how clinicians make decisions under uncertainty. Then I discovered
                machine learning, and something clicked: the same pattern recognition that
                makes a good doctor could be taught to a model, and scaled to reach millions.
              </p>
              <p className="text-white/90 text-sm leading-relaxed mb-5">
                Today I work at that intersection. I build classifiers that read ECGs, detect
                malaria from microscopy images, and interpret X-rays, with a focus on extending
                diagnostic access far beyond hospital walls.
              </p>
              <p className="text-white/90 text-sm leading-relaxed">
                Outside of research, I&apos;m the founder of{" "}
                <a
                  href="https://youmatter.rw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 text-white hover:text-white/80 transition-colors"
                >
                  YouMatter.rw
                </a>
                , a teletherapy platform working to dismantle the stigma around mental health
                care in Rwanda.
              </p>

              <div className="mt-8 flex items-center gap-2 text-white/50 text-sm">
                <a href="#projects" className="hover:text-white/80 transition-colors">
                  See my projects
                </a>
                <span>···</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
