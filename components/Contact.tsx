"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-[#1a6b45] mb-2">Contact</h2>
          <div className="w-12 h-1 bg-[#1a6b45] rounded mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-[#111827] mb-4">
              Let&apos;s connect
            </h3>
            <p className="text-[#6b7280] leading-relaxed mb-8">
              Whether you want to collaborate on a project, talk about ML in
              healthcare, or learn more about YouMatter, my inbox is open.
            </p>
            <div className="space-y-4">
              {[
                {
                  label: "Email",
                  href: "mailto:mberanicole@gmail.com",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/nicole-mbera-097458228/",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                },
                {
                  label: "GitHub",
                  href: "https://github.com/NicoleMbera",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                    </svg>
                  ),
                },
                {
                  label: "YouMatter.rw",
                  href: "https://youmatter.rw",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                    </svg>
                  ),
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#374151] hover:text-[#1a6b45] transition-colors group"
                >
                  <span className="w-10 h-10 rounded-xl bg-[#d1fae5] flex items-center justify-center text-[#1a6b45] group-hover:bg-[#1a6b45] group-hover:text-white transition-colors">
                    {link.icon}
                  </span>
                  <span className="font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {status === "success" ? (
              <div className="bg-[#d1fae5] rounded-2xl p-10 text-center">
                <p className="text-2xl font-bold text-[#1a6b45] mb-2">Message sent!</p>
                <p className="text-[#6b7280]">I&apos;ll get back to you soon.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 px-5 py-2 rounded-full border-2 border-[#1a6b45] text-[#1a6b45] text-sm font-semibold hover:bg-[#1a6b45] hover:text-white transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-[#374151] mb-1.5">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name as keyof FormState]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] bg-[#f8f9fc] text-[#111827] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#1a6b45] focus:border-transparent transition"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-[#374151] mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What's on your mind?"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-[#e5e7eb] bg-[#f8f9fc] text-[#111827] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#1a6b45] focus:border-transparent transition resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm">
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3 rounded-full bg-[#1a6b45] text-white font-semibold text-sm hover:bg-[#155538] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
