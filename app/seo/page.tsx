import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "SEO, GEO & AI Search Optimization Consultant in India | Shubham Shonkhlay",
  description:
    "SEO, GEO, AEO and AI Search Optimization consulting to improve visibility across Google, ChatGPT, Gemini, Perplexity and AI-powered search platforms.",
  keywords: [
    "SEO Consultant India",
    "GEO Consultant",
    "Generative Engine Optimization",
    "Answer Engine Optimization",
    "AI Search Optimization",
    "ChatGPT SEO",
    "Perplexity SEO",
    "AI Visibility Consultant",
    "SEO Expert India",
  ],
  alternates: {
    canonical: "https://shubhamshonkhlay-github-io.vercel.app/seo-geo-aeo-services",
  },
};

export default function SEOPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-gray-900">
      
      {/* Hero */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          SEO, GEO & AI Search Optimization Consultant in India
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
          Helping Businesses Improve Visibility Across Google, ChatGPT,
          Gemini, Perplexity & AI Search Platforms
        </h2>

        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
          Search is evolving. Traditional SEO is no longer enough to maximize
          online visibility. Today, customers discover businesses through
          Google Search, AI Overviews, ChatGPT, Gemini, Perplexity and other
          AI-powered answer engines.
        </p>

        <div className="bg-gray-50 rounded-2xl p-8 border">
          <h3 className="text-2xl font-semibold mb-4">
            🚀 Get a Free SEO & AI Visibility Assessment
          </h3>

          <p className="mb-6 text-gray-700">
            Receive a personalized assessment covering SEO opportunities,
            AI visibility gaps, GEO recommendations and actionable growth
            opportunities.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-black text-white rounded-xl font-semibold"
            >
              Book a Free Discovery Call
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 border rounded-xl font-semibold"
            >
              Request Free Visibility Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">
          About Shubham Shonkhlay
        </h2>

        <p className="mb-4">
          I am a Digital Marketing & AI Search Strategist focused on helping
          businesses improve visibility across traditional search engines and
          emerging AI-powered answer platforms.
        </p>

        <p className="mb-4">
          My background combines business development experience with hands-on
          research, experimentation and implementation of SEO, GEO, AEO,
          content strategy and AI search optimization.
        </p>

        <p>
          Learn more on my{" "}
          <Link
            href="/"
            className="font-semibold underline"
          >
            personal website
          </Link>.
        </p>
      </section>

      {/* Definitions */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">
          What Are SEO, GEO & AEO?
        </h2>

        <div className="space-y-10">
          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Search Engine Optimization (SEO)
            </h3>
            <p>
              SEO improves website visibility within traditional search engine
              results through technical optimization, content quality,
              authority and user experience improvements.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Generative Engine Optimization (GEO)
            </h3>

            <p>
              GEO improves how AI systems discover, understand and reference
              content when generating answers.
            </p>

            <Link
              href="/geo"
              className="inline-block mt-3 font-semibold underline"
            >
              Learn More About GEO →
            </Link>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Answer Engine Optimization (AEO)
            </h3>

            <p>
              AEO helps search engines and AI assistants identify your content
              as a trusted answer source.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">
              AI Search Optimization
            </h3>

            <p>
              AI Search Optimization combines SEO, GEO and AEO to improve
              discoverability across AI-powered search experiences.
            </p>

            <Link
              href="/ai-search"
              className="inline-block mt-3 font-semibold underline"
            >
              Learn More About AI Search →
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">
          How I Help Businesses Improve Search Visibility
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">
              SEO Services
            </h3>
            <ul className="space-y-2 list-disc ml-5">
              <li>Technical SEO Audits</li>
              <li>Keyword Research</li>
              <li>Content Strategy</li>
              <li>Internal Linking</li>
              <li>On-Page SEO</li>
            </ul>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">
              GEO Services
            </h3>
            <ul className="space-y-2 list-disc ml-5">
              <li>AI Visibility Audits</li>
              <li>Entity Optimization</li>
              <li>Citation Optimization</li>
              <li>Authority Building</li>
              <li>AI-Friendly Content Structures</li>
            </ul>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">
              AEO Services
            </h3>
            <ul className="space-y-2 list-disc ml-5">
              <li>FAQ Development</li>
              <li>Schema Strategy</li>
              <li>Featured Snippets</li>
              <li>Voice Search Optimization</li>
            </ul>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">
              AI Search Visibility
            </h3>
            <ul className="space-y-2 list-disc ml-5">
              <li>ChatGPT Visibility</li>
              <li>Gemini Visibility</li>
              <li>Perplexity Optimization</li>
              <li>AI Search Readiness</li>
            </ul>
          </div>
        </div>
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
              GEO improves how AI systems discover and reference content when
              generating answers.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              How is GEO different from SEO?
            </h3>
            <p>
              SEO focuses on rankings while GEO focuses on AI-generated
              visibility.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Is SEO still important?
            </h3>
            <p>
              Absolutely. SEO remains the foundation of online visibility.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center bg-black text-white rounded-3xl p-12">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Improve Your Visibility Across Google & AI Search?
        </h2>

        <p className="max-w-3xl mx-auto mb-8 text-lg">
          Get a personalized review of your website and discover SEO
          opportunities, AI visibility gaps, GEO recommendations and practical
          next steps for growth.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-black rounded-xl font-semibold"
          >
            Book a Free Discovery Call
          </Link>

          <Link
            href="/contact"
            className="px-8 py-4 border border-white rounded-xl font-semibold"
          >
            Request Free Visibility Assessment
          </Link>
        </div>
      </section>
    </main>
  );
}