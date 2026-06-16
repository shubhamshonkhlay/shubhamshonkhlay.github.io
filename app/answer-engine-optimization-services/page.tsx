import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Answer Engine Optimization (AEO) Services in India | AI Search Visibility",
  description:
    "Get found in Google AI Overviews, ChatGPT, Gemini, Perplexity and AI-powered search engines with Answer Engine Optimization (AEO) services.",
  alternates: {
    canonical:
      "https://yourdomain.com/answer-engine-optimization-services",
  },
};

export default function AEOPage() {
  return (
    <main className="w-full">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

          <div className="max-w-4xl">

            <span className="inline-flex items-center rounded-full border bg-white px-4 py-2 text-sm font-medium shadow-sm">
              AI Search Optimization • AEO Services India
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-7xl">
              Answer Engine Optimization (AEO) Services in India
            </h1>

            <h2 className="mt-6 text-xl font-medium text-gray-600 lg:text-2xl">
              Get Found in Google Answers, ChatGPT, Gemini,
              Perplexity & AI Search
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-700">
              The way people search online is changing rapidly.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Instead of browsing through multiple websites, users are now
              asking questions directly to AI-powered search engines and
              answer engines such as ChatGPT, Google AI Overviews, Gemini,
              Perplexity AI, Claude, Copilot, and other conversational
              search platforms.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              If your business is not appearing in these AI-generated
              answers, you are missing a growing source of visibility,
              traffic, leads, and brand authority.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Our Answer Engine Optimization (AEO) services help businesses
              become discoverable, understandable, and reference-worthy
              across both traditional search engines and modern AI search
              platforms.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-black px-8 py-4 text-base font-semibold text-white transition hover:opacity-90"
              >
                Book a Free AEO Strategy Consultation
              </Link>

              <Link
                href="#what-is-aeo"
                className="inline-flex items-center justify-center rounded-xl border px-8 py-4 text-base font-semibold hover:bg-gray-50"
              >
                Learn More
              </Link>

            </div>

            <p className="mt-6 text-sm text-gray-500">
              Discover how your website can earn visibility in Google AI
              Overviews, ChatGPT recommendations, Gemini responses, and
              other AI-powered answer engines.
            </p>

          </div>
        </div>
      </section>

      {/* WHAT IS AEO */}
      <section
        id="what-is-aeo"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-8"
      >
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">

          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              AEO Fundamentals
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 lg:text-5xl">
              What is Answer Engine Optimization (AEO)?
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-700">
              Answer Engine Optimization (AEO) is the process of optimizing
              website content so that search engines and AI systems can
              easily understand, extract, and present your information as
              direct answers to user questions.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              Unlike traditional SEO, which focuses primarily on rankings
              and clicks, AEO focuses on becoming the answer itself.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              AEO ensures your content is structured in a way that answer
              engines can confidently use when responding to user queries.
            </p>
          </div>

          <div>
            <div className="rounded-3xl border bg-white p-8 shadow-sm">

              <h3 className="text-xl font-semibold text-gray-900">
                Modern Search Prioritizes
              </h3>

              <div className="mt-8 grid gap-4">

                {[
                  "Direct Answers",
                  "AI-Generated Summaries",
                  "Featured Snippets",
                  "Voice Search Responses",
                  "Knowledge Panels",
                  "AI Citations",
                  "Conversational Search Results",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center rounded-xl border p-4"
                  >
                    <span className="mr-3 text-lg">✓</span>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}

              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}

