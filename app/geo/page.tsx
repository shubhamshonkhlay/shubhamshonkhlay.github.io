export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shubham Shonkhlay",
  jobTitle: "SEO Consultant",
  description:
    "SEO Consultant, GEO Specialist, AEO Strategist and AI Search Consultant",
  url: "https://shubhamshonkhlay-github-io.vercel.app/",
};

export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is GEO (Generative Engine Optimization)?",
  description:
    "Comprehensive guide to Generative Engine Optimization (GEO).",
  author: {
    "@type": "Person",
    name: "Shubham Shonkhlay",
  },
  publisher: {
    "@type": "Person",
    name: "Shubham Shonkhlay",
  },
  mainEntityOfPage: "https://shubhamshonkhlay-github-io.vercel.app/geo",
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does GEO stand for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GEO stands for Generative Engine Optimization.",
      },
    },
    {
      "@type": "Question",
      name: "Is GEO replacing SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. GEO complements SEO and helps improve visibility in AI-powered search engines.",
      },
    },
    {
      "@type": "Question",
      name: "Which AI search engines use GEO principles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatGPT, Gemini, Claude and Perplexity use principles related to GEO.",
      },
    },
  ],
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://shubhamshonkhlay-github-io.vercel.app/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "GEO",
      item: "https://shubhamshonkhlay-github-io.vercel.app/geo",
    },
  ],
};
export default function GEOPage() {
  return (
    <main className="bg-white min-h-screen">
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqSchema),
  }}
/>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(articleSchema),
  }}
/>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(personSchema),
  }}
/>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(breadcrumbSchema),
  }}
/>
      <section className="max-w-5xl mx-auto px-6 py-24">

        <p className="text-blue-600 font-semibold mb-4">
          Generative Engine Optimization
        </p>

        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          What Is GEO (Generative Engine Optimization)?
        </h1>

        <p className="text-xl text-gray-600">
          GEO is the process of optimizing content so it can be discovered,
          cited and recommended by AI-powered search engines such as ChatGPT,
          Gemini, Claude and Perplexity.
        </p>

      </section>
      {/* What Is GEO */}
<section className="max-w-5xl mx-auto px-6 py-16">

  <h2 className="text-4xl font-bold text-gray-900 mb-6">
    What Is GEO?
  </h2>

  <p className="text-lg text-gray-600 mb-6">
    Generative Engine Optimization (GEO) is the practice of optimizing
    websites and content so they can be discovered, understood and cited
    by AI-powered search engines and answer engines.
  </p>

  <p className="text-lg text-gray-600 mb-6">
    Unlike traditional SEO, which focuses on rankings in search engine
    results pages, GEO focuses on increasing visibility inside AI-generated
    answers from platforms such as ChatGPT, Gemini, Claude and Perplexity.
  </p>

  <p className="text-lg text-gray-600">
    GEO combines technical SEO, content quality, topical authority,
    entity optimization and trust signals to improve the likelihood of
    being referenced by AI systems.
  </p>

</section>
{/* Why GEO Matters */}
<section className="bg-[#F8FAFC] py-16">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-gray-900 mb-6">
      Why GEO Matters
    </h2>

    <p className="text-lg text-gray-600 mb-6">
      Millions of users are now using AI-powered search tools to find
      answers, recommendations and business information.
    </p>

    <p className="text-lg text-gray-600 mb-6">
      Instead of clicking through multiple websites, users increasingly
      rely on AI-generated responses that summarize information from
      trusted sources.
    </p>

    <p className="text-lg text-gray-600">
      Businesses that optimize for GEO have a better chance of being
      discovered, cited and recommended within these AI-generated answers.
    </p>

  </div>
</section>
{/* How AI Search Works */}
<section className="py-16">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-gray-900 mb-6">
      How AI Search Works
    </h2>

    <p className="text-lg text-gray-600 mb-6">
      AI-powered search engines use large language models to understand,
      organize and generate answers from information available across the web.
    </p>

    <p className="text-lg text-gray-600 mb-6">
      Instead of simply displaying a list of links, AI systems analyze
      content, identify trusted sources and generate direct responses to
      user questions.
    </p>

    <p className="text-lg text-gray-600 mb-6">
      These systems evaluate factors such as content quality, topical
      authority, source credibility, entity relationships and overall
      usefulness when selecting information for answers.
    </p>

    <div className="bg-[#F8FAFC] p-8 rounded-xl mt-8">
      <h3 className="text-2xl font-semibold mb-4">
        Simplified Process
      </h3>

      <ol className="space-y-4 text-gray-700">
        <li>1. User asks a question</li>
        <li>2. AI finds relevant sources</li>
        <li>3. AI evaluates source quality</li>
        <li>4. AI generates an answer</li>
        <li>5. AI may cite or recommend sources</li>
      </ol>
    </div>

  </div>
</section>
{/* GEO vs SEO */}
<section className="bg-[#F8FAFC] py-16">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-gray-900 mb-8">
      GEO vs SEO
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      <div className="bg-white p-8 rounded-xl">
        <h3 className="text-2xl font-semibold mb-4">
          SEO
        </h3>

        <ul className="space-y-3 text-gray-600">
          <li>Focuses on search rankings</li>
          <li>Optimizes for Google and Bing</li>
          <li>Targets clicks and traffic</li>
          <li>Improves SERP visibility</li>
        </ul>
      </div>

      <div className="bg-white p-8 rounded-xl">
        <h3 className="text-2xl font-semibold mb-4">
          GEO
        </h3>

        <ul className="space-y-3 text-gray-600">
          <li>Focuses on AI visibility</li>
          <li>Optimizes for answer engines</li>
          <li>Targets citations and recommendations</li>
          <li>Improves AI-generated visibility</li>
        </ul>
      </div>

    </div>

  </div>
</section>
{/* How AI Systems Choose Sources */}
<section className="py-16">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-gray-900 mb-6">
      How AI Systems Choose Sources
    </h2>

    <p className="text-lg text-gray-600 mb-6">
      AI search engines do not randomly select websites. They evaluate
      content quality, authority, trustworthiness and relevance before
      using information in generated answers.
    </p>

    <div className="grid md:grid-cols-2 gap-6 mt-10">

      <div className="border rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-3">
          Topical Authority
        </h3>

        <p className="text-gray-600">
          Websites that consistently publish expert content on a topic
          are more likely to be trusted.
        </p>
      </div>

      <div className="border rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-3">
          Content Quality
        </h3>

        <p className="text-gray-600">
          Accurate, detailed and well-structured content performs better.
        </p>
      </div>

      <div className="border rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-3">
          Entity Signals
        </h3>

        <p className="text-gray-600">
          Recognized people, brands and organizations help establish trust.
        </p>
      </div>

      <div className="border rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-3">
          Trust Signals
        </h3>

        <p className="text-gray-600">
          Citations, mentions, reviews and backlinks strengthen credibility.
        </p>
      </div>

    </div>

  </div>
</section>
{/* GEO Best Practices */}
<section className="bg-[#F8FAFC] py-16">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-gray-900 mb-8">
      GEO Best Practices
    </h2>

    <div className="space-y-6">

      <div className="bg-white p-6 rounded-xl">
        <h3 className="text-2xl font-semibold mb-2">
          Build Topical Authority
        </h3>

        <p className="text-gray-600">
          Publish comprehensive content around a focused topic cluster.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl">
        <h3 className="text-2xl font-semibold mb-2">
          Use Clear Structure
        </h3>

        <p className="text-gray-600">
          Use headings, FAQs, tables and organized content sections.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl">
        <h3 className="text-2xl font-semibold mb-2">
          Strengthen Entity Signals
        </h3>

        <p className="text-gray-600">
          Clearly define authors, brands and expertise throughout the website.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl">
        <h3 className="text-2xl font-semibold mb-2">
          Earn Citations
        </h3>

        <p className="text-gray-600">
          Create original research, frameworks and resources worth referencing.
        </p>
      </div>

    </div>

  </div>
</section>
{/* GEO Checklist */}
<section className="py-16">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-gray-900 mb-8">
      GEO Checklist
    </h2>

    <div className="space-y-4">

      <div className="border rounded-xl p-5">
        ✅ Create topic clusters around your expertise
      </div>

      <div className="border rounded-xl p-5">
        ✅ Publish original research and insights
      </div>

      <div className="border rounded-xl p-5">
        ✅ Add structured data and schema markup
      </div>

      <div className="border rounded-xl p-5">
        ✅ Strengthen author and brand entities
      </div>

      <div className="border rounded-xl p-5">
        ✅ Build authoritative backlinks and mentions
      </div>

      <div className="border rounded-xl p-5">
        ✅ Keep content updated and factually accurate
      </div>

    </div>

  </div>
</section>
{/* FAQs */}
<section className="bg-[#F8FAFC] py-16">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-gray-900 mb-8">
      Frequently Asked Questions
    </h2>

    <div className="space-y-6">

      <div className="bg-white p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-2">
          What does GEO stand for?
        </h3>

        <p className="text-gray-600">
          GEO stands for Generative Engine Optimization.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-2">
          Is GEO replacing SEO?
        </h3>

        <p className="text-gray-600">
          No. GEO complements SEO. Strong SEO foundations help improve GEO performance.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-2">
          Which AI search engines use GEO principles?
        </h3>

        <p className="text-gray-600">
          ChatGPT, Gemini, Claude, Perplexity and AI-powered search experiences.
        </p>
      </div>

    </div>

  </div>
</section>
{/* GEO CTA */}
<section className="bg-[#111827] py-20">
  <div className="max-w-4xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-bold text-white mb-6">
      Need Help Improving Your AI Search Visibility?
    </h2>

    <p className="text-gray-300 text-xl mb-8">
      Let's discuss how GEO can help your business get discovered across AI-powered search engines.
    </p>

    <button className="bg-blue-600 text-white px-8 py-4 rounded-lg">
      Book a Strategy Call
    </button>

  </div>
</section>
    </main>
  );
}