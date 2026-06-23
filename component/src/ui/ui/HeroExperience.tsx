"use client";

import { motion } from "framer-motion";

const platforms = [
  "ChatGPT",
  "Gemini",
  "Perplexity",
  "Claude",
  "Google AI Overviews",
  "Copilot",
];

export default function HeroExperience() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-[#030712] flex items-center justify-center">

        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Horizon Glow */}
        <div className="absolute left-1/2 top-[70%] -translate-x-1/2 w-[1200px] h-[500px] rounded-full bg-[#2779A6]/30 blur-[180px]" />

        {/* Extra Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-500/10 blur-[120px]" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="uppercase tracking-[0.4em] text-blue-400 mb-8 text-sm md:text-base"
          >
            AI SEARCH ARCHITECT
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl xl:text-8xl font-bold leading-tight"
          >
            Rank Beyond
            <br />
            Google.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-4xl md:text-6xl xl:text-7xl font-bold text-[#60A5FA]"
          >
            Get Found By AI.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="max-w-3xl mx-auto mt-10 text-lg md:text-xl text-slate-400"
          >
            Helping brands become discoverable across ChatGPT, Gemini,
            Perplexity, Claude and next-generation search engines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <a
              href="/contact"
              className="bg-[#2779A6] hover:bg-[#3289bb] transition px-8 py-4 rounded-xl font-semibold"
            >
              Work With Me
            </a>

            <a
              href="/ai-search"
              className="border border-white/10 hover:bg-white/5 transition px-8 py-4 rounded-xl"
            >
              Explore AI Search
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-20 flex flex-wrap justify-center gap-3"
          >
            {[
              "Entity SEO",
              "Knowledge Graphs",
              "AI Search",
              "Technical SEO",
              "GEO",
              "AEO",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-sm"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SEARCH ECOSYSTEM */}
      <section className="bg-[#030712] py-28">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Where Your Customers Search
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto">
              Search is no longer limited to Google. Customers now discover
              brands through AI assistants, answer engines and generative search
              experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {platforms.map((platform) => (
              <div
                key={platform}
                className="group bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-blue-500/40 hover:bg-blue-500/[0.05] transition duration-300"
              >
                <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition">
                  {platform}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* AI SEARCH FRAMEWORK */}
      <section className="bg-[#020617] py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How AI Search Finds Brands
          </h2>

          <p className="text-slate-400 mb-20">
            Visibility in AI search is built through structured understanding,
            authority and trust signals.
          </p>

          <div className="flex flex-col items-center gap-6">

            {[
              "Content",
              "Entities",
              "Knowledge Graph",
              "Authority Signals",
              "AI Citations",
            ].map((step, index) => (
              <div key={step} className="flex flex-col items-center">

                <div className="bg-white/[0.04] border border-white/10 rounded-2xl px-10 py-5 text-xl font-medium">
                  {step}
                </div>

                {index !== 4 && (
                  <div className="h-12 w-[2px] bg-blue-500/40" />
                )}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-[#030712] py-32">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Results That Matter
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="border border-white/10 rounded-2xl p-10 bg-white/[0.03]">
              <div className="text-6xl font-bold text-blue-400 mb-4">
                +180%
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Organic Growth
              </h3>
              <p className="text-slate-400">
                Increased organic visibility through technical SEO and content
                strategy.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-10 bg-white/[0.03]">
              <div className="text-6xl font-bold text-blue-400 mb-4">
                Top 3
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Keyword Rankings
              </h3>
              <p className="text-slate-400">
                Improved rankings for high-intent search queries.
              </p>
            </div>

            <div className="border border-white/10 rounded-2xl p-10 bg-white/[0.03]">
              <div className="text-6xl font-bold text-blue-400 mb-4">
                AI
              </div>
              <h3 className="text-2xl font-semibold mb-3">
                Citation Visibility
              </h3>
              <p className="text-slate-400">
                Enhanced discoverability across AI-powered search platforms.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#020617] py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-6">
            Ready To Become Discoverable In AI Search?
          </h2>

          <p className="text-slate-400 text-xl mb-10">
            Let's build your visibility across Google, ChatGPT, Gemini,
            Perplexity and the next generation of search.
          </p>

          <a
            href="/contact"
            className="inline-flex bg-[#2779A6] hover:bg-[#3289bb] transition px-10 py-5 rounded-xl text-lg font-semibold"
          >
            Book A Strategy Call
          </a>

        </div>
      </section>
    </>
  );
}