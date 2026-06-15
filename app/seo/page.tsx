import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "SEO, GEO & AI Search Optimization Consultant in India | Shubham Shonkhlay",
  description:
    "SEO, GEO, AEO and AI Search Optimization consulting to improve visibility across Google, AI Overviews, ChatGPT, Gemini and Perplexity.",
  keywords: [
    "SEO Consultant India",
    "GEO Consultant",
    "Generative Engine Optimization",
    "Answer Engine Optimization",
    "AI Search Optimization",
    "AI Search Visibility",
    "SEO Expert India",
  ],
  alternates: {
    canonical:
      "https://shubhamshonkhlay-github-io.vercel.app/seo",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Generative Engine Optimization (GEO)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generative Engine Optimization improves how AI systems discover, understand and reference content when generating answers.",
      },
    },
    {
      "@type": "Question",
      name: "How is GEO different from SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO focuses on rankings while GEO focuses on visibility inside AI-generated responses.",
      },
    },
    {
      "@type": "Question",
      name: "What is Answer Engine Optimization (AEO)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AEO helps search engines and AI assistants use your content as direct answers.",
      },
    },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shubham Shonkhlay",
  jobTitle: "Digital Marketing & AI Search Strategist",
  url: "https://shubhamshonkhlay-github-io.vercel.app",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO, GEO & AI Search Optimization Consulting",
  provider: {
    "@type": "Person",
    name: "Shubham Shonkhlay",
  },
};

export default function SEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main className="max-w-5xl mx-auto px-6 py-16 text-gray-900">

        {/* HERO */}
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">
            SEO, GEO & AI Search Optimization Consultant in India
          </h1>

          <h2 className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Helping Businesses Improve Visibility Across Google,
            ChatGPT, Gemini, Perplexity & AI Search Platforms
          </h2>

          <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-10">
            Search is evolving. Traditional SEO is no longer enough to maximize
            online visibility. Today, customers discover businesses through
            Google Search, Google AI Overviews, ChatGPT, Gemini, Perplexity,
            Microsoft Copilot and other AI-powered answer engines.
          </p>

          <div className="border rounded-2xl p-8 bg-gray-50">
            <h2 className="text-2xl font-bold mb-4">
              🚀 Get a Free SEO & AI Visibility Assessment
            </h2>

            <p className="mb-6">
              Receive a personalized assessment covering SEO opportunities,
              AI visibility gaps, GEO recommendations and content authority
              improvements.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="mailto:your@email.com"
                className="bg-black text-white px-6 py-3 rounded-xl"
              >
                Book a Free Discovery Call
              </a>

              <a
                href="mailto:your@email.com"
                className="border px-6 py-3 rounded-xl"
              >
                Request Visibility Assessment
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            About Shubham Shonkhlay
          </h2>

          <p className="mb-4">
            I am a{" "}
            <Link href="/" className="font-semibold underline">
              Digital Marketing & AI Search Strategist
            </Link>{" "}
            focused on helping businesses improve visibility across
            traditional search engines and AI-powered answer platforms.
          </p>

          <p className="mb-4">
            My work combines SEO,{" "}
            <Link href="/geo" className="font-semibold underline">
              Generative Engine Optimization (GEO)
            </Link>
            , AEO, content strategy and{" "}
            <Link href="/ai-search" className="font-semibold underline">
              AI Search Optimization
            </Link>
            .
          </p>

          <p>
            Unlike traditional agencies, you'll work directly with me
            throughout the strategy and implementation process.
          </p>
        </section>

        {/* DEFINITIONS */}
        <section className="mb-16 space-y-10">
          <h2 className="text-3xl font-bold">
            What Are SEO, GEO & AEO?
          </h2>

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Search Engine Optimization (SEO)
            </h3>
            <p>
              SEO improves website visibility through technical optimization,
              content quality, authority and user experience.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Generative Engine Optimization (GEO)
            </h3>

            <p>
              <Link href="/geo" className="underline font-semibold">
                Generative Engine Optimization (GEO)
              </Link>{" "}
              helps AI systems discover, understand and reference content.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Answer Engine Optimization (AEO)
            </h3>

            <p>
              AEO helps search engines and AI assistants use your content
              as direct answers.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              AI Search Optimization
            </h3>

            <p>
              <Link href="/ai-search" className="underline font-semibold">
                AI Search Optimization
              </Link>{" "}
              combines SEO, GEO and AEO to improve discoverability across
              modern search experiences.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            How I Help Businesses Improve Search Visibility
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Technical SEO Audits",
              "Keyword Research",
              "Content Strategy",
              "Entity Optimization",
              "Citation Optimization",
              "Structured Data",
              "AI Visibility Audits",
              "AI Search Readiness",
            ].map((item) => (
              <div
                key={item}
                className="border rounded-xl p-5"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* ENTITY SEO */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Why Entity SEO Matters for AI Search
          </h2>

          <p className="mb-4">
            Modern search engines increasingly rely on entities rather than
            keywords alone.
          </p>

          <p>
            Entity SEO helps create stronger relationships between expertise,
            content, services and digital presence, improving discoverability
            across search engines and AI-powered answer systems.
          </p>
        </section>

        {/* AI SEARCH */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            How AI Search Engines Discover and Reference Content
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Content depth</li>
            <li>Expertise signals</li>
            <li>Website trustworthiness</li>
            <li>Structured information</li>
            <li>Citation signals</li>
            <li>Brand mentions</li>
            <li>Entity recognition</li>
          </ul>
        </section>

        {/* FUTURE */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">
            The Future of Search
          </h2>

          <p>
            Google AI Overviews, ChatGPT, Gemini and Perplexity are changing
            how information is discovered and consumed. Businesses that build
            expertise, authority and trust are more likely to remain visible
            as search continues to evolve.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">
                What is Generative Engine Optimization?
              </h3>
              <p>
                GEO improves how AI systems discover and reference content.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Is SEO still important?
              </h3>
              <p>
                Yes. SEO remains the foundation of digital visibility.
              </p>
            </div>
          </div>
        </section>

        {/* AUTHOR */}
        <section className="mb-16 border-t pt-10">
          <h2 className="text-3xl font-bold mb-4">
            About the Author
          </h2>

          <h3 className="text-xl font-semibold mb-2">
            Shubham Shonkhlay
          </h3>

          <p className="mb-4">
            Digital Marketing & AI Search Strategist
          </p>

          <ul className="list-disc ml-6 space-y-1">
            <li>SEO</li>
            <li>GEO</li>
            <li>AEO</li>
            <li>AI Search Visibility</li>
            <li>Entity SEO</li>
          </ul>
        </section>

        {/* FINAL CTA */}
        <section className="bg-black text-white rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Improve Your Visibility Across Google & AI Search?
          </h2>

          <p className="max-w-3xl mx-auto mb-8">
            Get a personalized review of your website and discover SEO,
            GEO and AI visibility opportunities tailored to your business.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="mailto:your@email.com"
              className="bg-white text-black px-6 py-3 rounded-xl"
            >
              Book a Free Discovery Call
            </a>

            <a
              href="mailto:your@email.com"
              className="border border-white px-6 py-3 rounded-xl"
            >
              Request Free Visibility Assessment
            </a>
          </div>
        </section>

      </main>
    </>
  );
}