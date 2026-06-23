"use client";

import { motion } from "framer-motion";

export default function HeroExperience() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Horizon Glow */}
      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-[60%] -translate-x-1/2 w-[1200px] h-[500px] rounded-full bg-blue-500/20 blur-[180px]" />

        <div className="absolute left-1/2 top-[65%] -translate-x-1/2 w-[800px] h-[2px] bg-blue-400" />

      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="uppercase tracking-[0.4em] text-blue-400 mb-6"
        >
          AI Search Architect
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-6xl md:text-8xl font-bold leading-tight"
        >
          Rank Beyond
          <br />
          Google.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
          className="text-blue-400 text-4xl md:text-6xl font-bold mt-4"
        >
          Get Found By AI.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-slate-400 text-xl max-w-3xl mx-auto"
        >
          Helping brands become discoverable across
          ChatGPT, Gemini, Perplexity, Claude and
          next-generation search engines.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <button className="bg-[#2779A6] px-8 py-4 rounded-xl font-medium hover:scale-105 transition">
            View Case Studies
          </button>

          <button className="border border-white/20 px-8 py-4 rounded-xl hover:bg-white/5 transition">
            Work With Me
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-20 flex flex-wrap justify-center gap-4"
        >
          {[
            "Entity SEO",
            "Knowledge Graphs",
            "AI Search",
            "Technical SEO",
            "GEO",
            "AEO",
          ].map((item) => (
            <div
              key={item}
              className="px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}