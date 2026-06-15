import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "SEO, GEO & AI Search Optimization Consultant",
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
      "https://shubhamshonkhlay-github-io.vercel.app/seo-geo-aeo-consultant-india",
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
        text: "Generative Engine Optimization (GEO) is the practice of improving how AI systems discover, interpret, and reference content when generating answers.",
      },
    },
    {
      "@type": "Question",
      name: "How is GEO different from SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO focuses on traditional search rankings, while GEO focuses on visibility within AI-generated responses and AI-powered search experiences.",
      },
    },
    {
      "@type": "Question",
      name: "What is Answer Engine Optimization (AEO)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Answer Engine Optimization (AEO) focuses on creating content that can be directly used by search engines and AI assistants when answering user questions.",
      },
    },
    {
      "@type": "Question",
      name: "Can AI platforms recommend my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI platforms may reference businesses when they identify trustworthy, relevant, authoritative, and well-structured information.",
      },
    },
    {
      "@type": "Question",
      name: "Is SEO still important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SEO remains the foundation of digital visibility. GEO and AEO complement SEO rather than replace it.",
      },
    },
    {
      "@type": "Question",
      name: "How long does SEO take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Results vary depending on competition, website authority, content quality, and industry. SEO is generally a long-term investment focused on sustainable growth.",
      },
    },
    {
      "@type": "Question",
      name: "Why is AI search visibility becoming important?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As users increasingly rely on AI-generated answers, businesses that appear within these ecosystems gain additional opportunities for discovery, trust, and lead generation.",
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
        <section className="py-20">
  <div className="max-w-5xl mx-auto text-center">

    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
      SEO, GEO & AI Search Optimization Consultant in India
    </h1>

    <h2 className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
      Helping Businesses Improve Visibility Across Google, ChatGPT,
      Gemini, Perplexity & AI Search Platforms
    </h2>

    <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
      <p>
        Search is evolving.
      </p>

      <p>
        Traditional SEO is no longer enough to maximize online visibility.
        Today, customers discover businesses through Google Search,
        Google AI Overviews, ChatGPT, Gemini, Perplexity, Microsoft
        Copilot, and other AI-powered answer engines.
      </p>

      <p>
        As search behavior changes, businesses need more than rankings.
        They need visibility, authority, trust, and discoverability
        across the entire search ecosystem.
      </p>

      <p>
        I help businesses improve their online presence through Search
        Engine Optimization (SEO), Generative Engine Optimization (GEO),
        Answer Engine Optimization (AEO), and AI Search Optimization
        strategies designed for the future of search.
      </p>
    </div>

<div className="my-12">
  <Image
    src="/images/seo-landing page/SEO-GEO-AI-Search-Optimization-Consultant-in-India.jfif"
    alt="How AI Search is Changing SEO"
    width={1200}
    height={675}
    className="rounded-3xl shadow-lg w-full h-auto"
    priority
  />
</div>

    {/* CTA Box */}

    <div className="mt-14 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-sm">

      <h3 className="text-3xl font-bold mb-4">
        🚀 Get a Free SEO & AI Visibility Assessment
      </h3>

      <p className="text-gray-600 max-w-3xl mx-auto mb-8">
        Want to understand how visible your business is across Google and
        AI-powered search platforms?
      </p>

      <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left mb-8">

        <div className="flex items-start gap-3">
          <span>✓</span>
          <span>SEO opportunities</span>
        </div>

        <div className="flex items-start gap-3">
          <span>✓</span>
          <span>AI Search Visibility gaps</span>
        </div>

        <div className="flex items-start gap-3">
          <span>✓</span>
          <span>GEO optimization recommendations</span>
        </div>

        <div className="flex items-start gap-3">
          <span>✓</span>
          <span>Content authority improvements</span>
        </div>

        <div className="flex items-start gap-3 md:col-span-2">
          <span>✓</span>
          <span>Practical next steps for growth</span>
        </div>

      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">

        <a
          href="/contact"
          className="px-8 py-4 rounded-xl bg-black text-white font-medium hover:opacity-90 transition"
        >
          Schedule a Free Discovery Call
        </a>

        <a
          href="/contact"
          className="px-8 py-4 rounded-xl border border-gray-300 font-medium hover:bg-gray-50 transition"
        >
          Request Your Free Visibility Assessment
        </a>

      </div>

    </div>

  </div>
</section>

 {/* ABOUT SECTION */}

<section className="py-20 border-t border-gray-200">

  <div className="max-w-5xl mx-auto">

    <h2 className="text-4xl font-bold mb-8">
      About Shubham Shonkhlay
    </h2>

    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">

      <p>
        I am a{" "}
        <Link
          href="/"
          className="font-semibold text-black hover:underline"
        >
          Digital Marketing & AI Search Strategist
        </Link>{" "}
        focused on helping businesses improve visibility across traditional
        search engines and emerging AI-powered answer platforms.
      </p>

      <p>
        My background combines business development experience with hands-on
        research, experimentation, and practical implementation of SEO,{" "}
        <Link
          href="/geo"
          className="font-semibold text-black hover:underline"
        >
          Generative Engine Optimization (GEO)
        </Link>
        , AEO, content strategy, and{" "}
        <Link
          href="/ai-search"
          className="font-semibold text-black hover:underline"
        >
          AI Search Optimization
        </Link>
        .
      </p>

      <p>
        I actively study how modern search systems discover, evaluate,
        rank, and reference information. Through continuous experimentation
        and industry research, I help businesses adapt to the changing
        search landscape and build sustainable visibility.
      </p>

      <p>
        Unlike traditional agencies, you'll work directly with me
        throughout the strategy and implementation process.
      </p>

      <p>
        My work focuses on helping businesses create search-friendly
        content, stronger digital authority, improved entity recognition,
        and greater visibility across both traditional and AI-powered
        search experiences.
      </p>

      <p>
        To learn more about my work, visit the{" "}
        <Link
          href="/"
          className="font-semibold text-black hover:underline"
        >
          homepage of Shubham Shonkhlay
        </Link>
        .
      </p>

    </div>
  </div>

</section>

{/* SEO GEO AEO SECTION */}

<section className="py-20 bg-gray-50 rounded-3xl mt-10">

  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-4xl font-bold mb-12">
      What Are SEO, GEO & AEO?
    </h2>

<div className="mb-12">
  <Image
    src="/images/seo-landing page/What Are SEO, GEO & AEO.jfif"
    alt="SEO GEO AEO Evolution"
    width={1200}
    height={675}
    className="rounded-3xl shadow-lg w-full h-auto"
  />
</div>

    <div className="space-y-12">

      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Search Engine Optimization (SEO)
        </h3>

        <p className="text-lg text-gray-700 leading-relaxed">
          Search Engine Optimization is the process of improving a
          website's visibility within traditional search engine results.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          SEO focuses on technical performance, content quality,
          authority, relevance, user experience, and search intent
          alignment to improve rankings and organic traffic.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Generative Engine Optimization (GEO)
        </h3>

        <p className="text-lg text-gray-700 leading-relaxed">
          <Link
            href="/geo"
            className="font-semibold text-black hover:underline"
          >
            Generative Engine Optimization (GEO)
          </Link>{" "}
          focuses on improving how AI systems discover, understand,
          interpret, and reference content when generating answers.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          GEO helps businesses increase the likelihood of being
          mentioned, cited, and recommended within AI-generated
          responses.
        </p>

        <p className="mt-4">
          <Link
            href="/geo"
            className="font-semibold text-black hover:underline"
          >
            Learn more about Generative Engine Optimization →
          </Link>
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Answer Engine Optimization (AEO)
        </h3>

        <p className="text-lg text-gray-700 leading-relaxed">
          Answer Engine Optimization focuses on structuring content so
          search engines and AI assistants can directly use it to answer
          user questions.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          AEO improves visibility in featured snippets, AI summaries,
          voice search results, and answer-based search experiences.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">
          AI Search Optimization
        </h3>

        <p className="text-lg text-gray-700 leading-relaxed">
          <Link
            href="/ai-search"
            className="font-semibold text-black hover:underline"
          >
            AI Search Optimization
          </Link>{" "}
          combines SEO, GEO, and AEO strategies to improve
          discoverability across modern search experiences.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          The objective is not simply to rank but to become a trusted
          source that search engines and AI systems confidently
          reference.
        </p>

        <p className="mt-4">
          <Link
            href="/ai-search"
            className="font-semibold text-black hover:underline"
          >
            Learn more about AI Search Optimization →
          </Link>
        </p>
      </div>

    </div>

  </div>

</section>

{/* WHO I WORK WITH */}

<section className="py-20">

  <div className="max-w-5xl mx-auto">

    <h2 className="text-4xl font-bold mb-8">
      Who I Work With
    </h2>

    <p className="text-lg text-gray-700 mb-10">
      I work directly with businesses and professionals who want to
      improve their visibility across Google, AI search engines,
      and modern answer platforms.
    </p>

    <div className="grid md:grid-cols-3 gap-6">

      {[
        "Local Businesses",
        "Service-Based Businesses",
        "Consultants",
        "Coaches",
        "Personal Brands",
        "SaaS Companies",
        "Startups",
        "E-commerce Businesses",
        "B2B Organizations",
      ].map((item) => (
        <div
          key={item}
          className="border rounded-2xl p-6 text-center bg-white hover:shadow-md transition"
        >
          <p className="font-medium">{item}</p>
        </div>
      ))}

    </div>

    <div className="mt-10 bg-gray-50 rounded-2xl p-6">
      <p className="text-lg text-gray-700">
        If your customers search online before making decisions,
        search visibility matters. The businesses that appear first,
        get cited, or get recommended often earn the trust and attention
        before competitors.
      </p>
    </div>

  </div>

</section>

{/* HOW I HELP */}

<section className="py-20 bg-gray-50 rounded-3xl">

  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold mb-12">
      How I Help Businesses Improve Search Visibility
    </h2>

    <div className="grid lg:grid-cols-2 gap-8">

      {/* SEO */}

      <div className="bg-white rounded-3xl p-8 border">

        <h3 className="text-2xl font-semibold mb-6">
          SEO Services
        </h3>

        <ul className="space-y-3 text-gray-700">
          <li>✓ Technical SEO Audits</li>
          <li>✓ On-Page SEO</li>
          <li>✓ Keyword Research</li>
          <li>✓ Content Strategy</li>
          <li>✓ Internal Linking</li>
          <li>✓ Site Architecture</li>
          <li>✓ Search Performance Optimization</li>
          <li>✓ SEO Content Planning</li>
        </ul>

      </div>

      {/* GEO */}

      <div className="bg-white rounded-3xl p-8 border">

        <h3 className="text-2xl font-semibold mb-4">
          GEO Services
        </h3>

        <p className="text-gray-700 mb-6">
          Improve your visibility through{" "}
          <Link
            href="/geo"
            className="font-semibold hover:underline"
          >
            Generative Engine Optimization (GEO)
          </Link>{" "}
          strategies designed for AI-generated search experiences.
        </p>

        <ul className="space-y-3 text-gray-700">
          <li>✓ AI Visibility Audits</li>
          <li>✓ Entity Optimization</li>
          <li>✓ Brand Mention Strategies</li>
          <li>✓ Citation Optimization</li>
          <li>✓ Authority Building</li>
          <li>✓ Knowledge Graph Alignment</li>
          <li>✓ AI-Friendly Content Structures</li>
        </ul>

      </div>

      {/* AEO */}

      <div className="bg-white rounded-3xl p-8 border">

        <h3 className="text-2xl font-semibold mb-4">
          AEO Services
        </h3>

        <p className="text-gray-700 mb-6">
          Help search engines and AI assistants identify your content
          as a trusted answer source.
        </p>

        <ul className="space-y-3 text-gray-700">
          <li>✓ FAQ Development</li>
          <li>✓ Featured Snippet Optimization</li>
          <li>✓ Structured Data Strategy</li>
          <li>✓ Conversational Search Optimization</li>
          <li>✓ Question-Based Content Architecture</li>
          <li>✓ Voice Search Readiness</li>
        </ul>

      </div>

      {/* AI SEARCH */}

      <div className="bg-white rounded-3xl p-8 border">

        <h3 className="text-2xl font-semibold mb-4">
          AI Search Visibility Consulting
        </h3>

        <p className="text-gray-700 mb-6">
          Prepare your business for the future through{" "}
          <Link
            href="/ai-search"
            className="font-semibold hover:underline"
          >
            AI Search Optimization
          </Link>{" "}
          and AI visibility strategies.
        </p>

        <ul className="space-y-3 text-gray-700">
          <li>✓ ChatGPT Visibility Strategies</li>
          <li>✓ Gemini Visibility Strategies</li>
          <li>✓ Perplexity Optimization</li>
          <li>✓ AI Content Discoverability</li>
          <li>✓ Search Entity Development</li>
          <li>✓ AI Search Readiness Assessments</li>
        </ul>

      </div>

    </div>

  </div>

</section>

{/* CHALLENGES SECTION */}

<section className="py-20">

  <div className="max-w-5xl mx-auto">

    <h2 className="text-4xl font-bold mb-8">
      Common Challenges Businesses Face in Modern Search
    </h2>

    <p className="text-lg text-gray-700 mb-10">
      Many businesses invest in websites, content, and digital marketing
      but still struggle to achieve meaningful visibility.
    </p>

    <div className="grid md:grid-cols-2 gap-5 mb-10">

      {[
        "Low Organic Visibility",
        "Declining Search Traffic",
        "Weak Topical Authority",
        "Limited Brand Recognition",
        "Poor AI Search Discoverability",
        "Lack of Content Strategy",
        "Insufficient Trust Signals",
        "Increasing Competition",
      ].map((item) => (
        <div
          key={item}
          className="flex items-center gap-3 border rounded-xl p-4"
        >
          <span className="text-xl">⚠️</span>
          <span>{item}</span>
        </div>
      ))}

    </div>

    <div className="bg-gray-50 rounded-3xl p-8">

      <p className="text-lg text-gray-700 mb-6">
        As search evolves, businesses need more than rankings alone.
        They need a visibility strategy that helps search engines and AI
        systems understand who they are, what they offer, and why they
        should be trusted.
      </p>

      <p className="text-lg text-gray-700">
        A modern search strategy combines SEO, GEO, AEO, content authority,
        entity optimization, structured information, and AI search
        visibility techniques to improve discoverability across multiple
        search environments.
      </p>

    </div>

  </div>

</section>

{/* PROCESS SECTION */}

<section className="py-20 bg-gray-50 rounded-3xl">

  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-4">
      My SEO, GEO & AI Search Optimization Process
    </h2>

    <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
      Every business is different. My approach combines SEO, GEO, AEO,
      entity optimization, and AI visibility strategies to create a
      customized roadmap for sustainable growth.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          step: "Step 1",
          title: "Discovery & Research",
          desc: "Understand your business, audience, competitors, services, and growth objectives.",
        },
        {
          step: "Step 2",
          title: "SEO & AI Visibility Audit",
          desc: "Identify technical issues, content opportunities, authority gaps, and AI visibility opportunities.",
        },
        {
          step: "Step 3",
          title: "Strategy Development",
          desc: "Create a customized SEO, GEO, and AEO roadmap aligned with your business goals.",
        },
        {
          step: "Step 4",
          title: "Content & Authority Optimization",
          desc: "Improve content quality, topical depth, trust signals, and search relevance.",
        },
        {
          step: "Step 5",
          title: "Entity & Citation Development",
          desc: "Strengthen digital authority, entity recognition, and citation opportunities across the web.",
        },
        {
          step: "Step 6",
          title: "Ongoing Optimization",
          desc: "Monitor performance and continuously improve visibility across traditional and AI-powered search channels.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="bg-white rounded-3xl border p-8 hover:shadow-lg transition"
        >
          <span className="text-sm font-semibold text-gray-500 uppercase">
            {item.step}
          </span>

          <h3 className="text-xl font-bold mt-3 mb-4">
            {item.title}
          </h3>

          <p className="text-gray-700 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}

    </div>

  </div>

</section>

{/* APPROACH SECTION */}

<section className="py-20">

  <div className="max-w-5xl mx-auto">

    <h2 className="text-4xl font-bold mb-8">
      My Approach to Modern Search Optimization
    </h2>

    <p className="text-lg text-gray-700 mb-10">
      Modern search visibility depends on more than rankings. Search
      engines and AI-powered answer systems evaluate multiple trust,
      authority, and relevance signals before deciding what content to
      surface, cite, or recommend.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">

      {[
        "Content Quality",
        "Experience",
        "Expertise",
        "Authoritativeness",
        "Trustworthiness",
        "Entity Recognition",
        "Structured Information",
        "Brand Mentions",
        "Citation Signals",
        "User Experience",
      ].map((item) => (
        <div
          key={item}
          className="border rounded-xl p-4 text-center bg-white"
        >
          {item}
        </div>
      ))}

    </div>

    <div className="bg-gray-50 rounded-3xl p-8">

      <p className="text-lg text-gray-700 mb-6">
        My approach combines traditional SEO principles with{" "}
        <Link
          href="/geo"
          className="font-semibold hover:underline"
        >
          GEO
        </Link>{" "}
        and AEO methodologies to create sustainable visibility across
        both search engines and AI-powered answer systems.
      </p>

      <p className="text-xl font-semibold">
        The objective is simple:
      </p>

      <p className="text-2xl font-bold mt-3">
        Build digital assets that search engines trust and AI systems understand.
      </p>

    </div>

  </div>

</section>

{/* ENTITY SEO SECTION */}

<section className="py-20 bg-gray-50 rounded-3xl">

  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-4xl font-bold mb-8">
      Why Entity SEO Matters for AI Search
    </h2>

<div className="mb-10">
  <Image
    src="/images/seo-landing page/Why Entity SEO Matters for AI Search.jfif"
    alt="Entity SEO and AI Visibility"
    width={1200}
    height={675}
    className="rounded-3xl shadow-lg w-full h-auto"
  />
</div>

    <p className="text-lg text-gray-700 mb-6">
      Modern search engines increasingly rely on entities rather than
      keywords alone.
    </p>

    <p className="text-lg text-gray-700 mb-6">
      An entity can be a person, business, product, service,
      organization, or concept that search engines can clearly
      identify and understand.
    </p>

    <p className="text-lg text-gray-700 mb-10">
      When search engines consistently associate{" "}
      <Link
        href="/"
        className="font-semibold hover:underline"
      >
        Shubham Shonkhlay
      </Link>{" "}
      with topics such as:
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">

      {[
        "Search Engine Optimization (SEO)",
        "Generative Engine Optimization (GEO)",
        "Answer Engine Optimization (AEO)",
        "AI Search Visibility",
        "Content Strategy",
        "Digital Marketing",
      ].map((item) => (
        <div
          key={item}
          className="bg-white border rounded-xl p-5"
        >
          {item}
        </div>
      ))}

    </div>

    <div className="bg-white border rounded-3xl p-8">

      <p className="text-lg text-gray-700 mb-6">
        Search engines become more confident in understanding the
        expertise behind the content.
      </p>

      <p className="text-lg text-gray-700 mb-6">
        Entity SEO helps create stronger relationships between expertise,
        services, content, and digital presence.
      </p>

      <p className="text-xl font-semibold">
        This strengthens discoverability across both search engines and
        AI-powered answer systems.
      </p>

    </div>

  </div>

</section>

{/* AI SEARCH DISCOVERY SECTION */}

<section className="py-20">

  <div className="max-w-5xl mx-auto">

    <h2 className="text-4xl font-bold mb-8">
      How AI Search Engines Discover and Reference Content
    </h2>

    <p className="text-lg text-gray-700 mb-6">
      AI-powered search systems such as ChatGPT, Gemini, Perplexity,
      Microsoft Copilot, and Google AI Overviews evaluate information
      differently than traditional search engines.
    </p>

    <p className="text-lg text-gray-700 mb-10">
      Instead of relying solely on rankings, these systems analyze
      expertise, authority, trust, and content quality to determine
      which sources should be surfaced, cited, or referenced within
      generated responses.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">

      {[
        "Content Depth",
        "Expertise Signals",
        "Website Trustworthiness",
        "Structured Information",
        "Citation Signals",
        "Brand Mentions",
        "Entity Recognition",
        "User Experience",
        "Content Freshness",
      ].map((item) => (
        <div
          key={item}
          className="border rounded-2xl p-5 bg-white hover:shadow-md transition"
        >
          <p className="font-medium">{item}</p>
        </div>
      ))}

    </div>

    <div className="bg-gray-50 rounded-3xl p-8">

      <p className="text-lg text-gray-700 mb-6">
        Although no platform guarantees citations or recommendations,
        authoritative content with strong expertise signals is more
        likely to be referenced.
      </p>

      <p className="text-lg text-gray-700">
        This is why{" "}
        <Link
          href="/geo"
          className="font-semibold hover:underline"
        >
          Generative Engine Optimization (GEO)
        </Link>{" "}
        and{" "}
        <Link
          href="/ai-search"
          className="font-semibold hover:underline"
        >
          AI Search Optimization
        </Link>{" "}
        are becoming increasingly important alongside traditional SEO.
      </p>

    </div>

  </div>

</section>

{/* WHY SEO ALONE IS NOT ENOUGH */}

<section className="py-20 bg-gray-50 rounded-3xl">

  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-4xl font-bold mb-8">
      Why SEO Alone Is No Longer Enough
    </h2>

    <p className="text-lg text-gray-700 mb-10">
      Users increasingly ask questions directly to AI platforms instead
      of browsing multiple websites.
    </p>

    <div className="grid md:grid-cols-2 gap-5 mb-12">

      {[
        "Who is the best SEO consultant in India?",
        "What is Generative Engine Optimization?",
        "How can I improve AI search visibility?",
        "What is the difference between SEO and GEO?",
        "How do businesses appear in ChatGPT responses?",
      ].map((question) => (
        <div
          key={question}
          className="bg-white border rounded-2xl p-5"
        >
          <p className="font-medium">{question}</p>
        </div>
      ))}

    </div>

    <div className="bg-white rounded-3xl border p-8">

      <p className="text-lg text-gray-700 mb-6">
        These systems often generate answers using trusted sources,
        authoritative content, recognized entities, structured
        information, and topical expertise.
      </p>

      <p className="text-lg text-gray-700">
        Businesses that adapt to this shift early have an opportunity
        to improve discoverability across emerging search channels and
        increase their chances of being cited, referenced, and
        recommended.
      </p>

    </div>

  </div>

</section>

{/* INDUSTRIES SECTION */}

<section className="py-20">

  <div className="max-w-5xl mx-auto">

    <h2 className="text-4xl font-bold mb-8">
      Industries I Work With
    </h2>

    <p className="text-lg text-gray-700 mb-10">
      Every industry requires a tailored SEO, GEO, and AEO strategy
      based on competition, audience behavior, search intent, and
      business objectives.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">

      {[
        "Professional Services",
        "Consulting",
        "Marketing & Advertising",
        "SaaS & Technology",
        "E-commerce",
        "Education",
        "Healthcare",
        "Local Businesses",
        "Personal Brands",
        "B2B Organizations",
      ].map((industry) => (
        <div
          key={industry}
          className="border rounded-2xl p-5 text-center bg-white hover:shadow-md transition"
        >
          <p>{industry}</p>
        </div>
      ))}

    </div>

  </div>

</section>

{/* FUTURE OF SEARCH */}

<section className="py-20 bg-gradient-to-br from-gray-50 to-white rounded-3xl">

  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-4xl font-bold mb-8">
      The Future of Search
    </h2>

    <p className="text-lg text-gray-700 mb-6">
      Search is undergoing one of the most significant transformations
      since the introduction of modern search engines.
    </p>

    <p className="text-lg text-gray-700 mb-6">
      Users increasingly expect direct answers rather than lists of
      links.
    </p>

    <p className="text-lg text-gray-700 mb-6">
      Google AI Overviews, ChatGPT, Gemini, Perplexity, and other
      AI-powered platforms are changing how information is discovered,
      evaluated, and consumed.
    </p>

    <p className="text-lg text-gray-700 mb-10">
      Businesses that establish strong expertise, authority, and trust
      signals today are more likely to remain visible as search
      continues to evolve.
    </p>

    <div className="bg-white border rounded-3xl p-8">

      <h3 className="text-2xl font-semibold mb-4">
        Building Visibility for the Next Generation of Search
      </h3>

      <p className="text-lg text-gray-700">
        Investing in SEO,{" "}
        <Link
          href="/geo"
          className="font-semibold hover:underline"
        >
          GEO
        </Link>
        , AEO, and{" "}
        <Link
          href="/ai-search"
          className="font-semibold hover:underline"
        >
          AI Search Optimization
        </Link>{" "}
        creates a foundation for long-term discoverability across both
        traditional and emerging search experiences.
      </p>

    </div>

  </div>

</section>

{/* FAQ SECTION */}

<section className="py-20">

  <div className="max-w-5xl mx-auto">

    <h2 className="text-4xl font-bold text-center mb-4">
      Frequently Asked Questions
    </h2>

    <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
      Common questions about SEO, GEO, AEO, AI Search Visibility,
      and how businesses can improve discoverability across modern
      search platforms.
    </p>

    <div className="space-y-6">

      {[
        {
          question: "What is Generative Engine Optimization (GEO)?",
          answer:
            "Generative Engine Optimization (GEO) is the practice of improving how AI systems discover, interpret, and reference content when generating answers.",
        },
        {
          question: "How is GEO different from SEO?",
          answer:
            "SEO focuses on traditional search rankings, while GEO focuses on visibility within AI-generated responses and AI-powered search experiences.",
        },
        {
          question: "What is Answer Engine Optimization (AEO)?",
          answer:
            "AEO focuses on creating content that can be directly used by search engines and AI assistants when answering user questions.",
        },
        {
          question: "Can AI platforms recommend my business?",
          answer:
            "AI platforms may reference businesses when they identify trustworthy, relevant, authoritative, and well-structured information.",
        },
        {
          question: "Is SEO still important?",
          answer:
            "Yes. SEO remains the foundation of digital visibility. GEO and AEO complement SEO rather than replace it.",
        },
        {
          question: "How long does SEO take?",
          answer:
            "Results vary depending on competition, website authority, content quality, and industry. SEO is generally a long-term investment focused on sustainable growth.",
        },
        {
          question: "Why is AI search visibility becoming important?",
          answer:
            "As users increasingly rely on AI-generated answers, businesses that appear within these ecosystems gain additional opportunities for discovery, trust, and lead generation.",
        },
      ].map((faq) => (
        <div
          key={faq.question}
          className="border rounded-2xl p-6 bg-white"
        >
          <h3 className="text-xl font-semibold mb-3">
            {faq.question}
          </h3>

          <p className="text-gray-700 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      ))}

    </div>

  </div>

</section>

{/* AUTHOR SECTION */}

<section className="py-20 bg-gray-50 rounded-3xl">

  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-4xl font-bold mb-8">
      About the Author
    </h2>

    <div className="bg-white border rounded-3xl p-10">

      <h3 className="text-3xl font-bold mb-2">
        <Link
          href="/"
          className="hover:underline"
        >
          Shubham Shonkhlay
        </Link>
      </h3>

      <p className="text-xl text-gray-600 mb-8">
        Digital Marketing & AI Search Strategist
      </p>

      <h4 className="text-xl font-semibold mb-6">
        Areas of Focus
      </h4>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">

        {[
          "Search Engine Optimization (SEO)",
          "Generative Engine Optimization (GEO)",
          "Answer Engine Optimization (AEO)",
          "AI Search Visibility",
          "Entity SEO",
          "Content Strategy",
          "Digital Authority Building",
        ].map((item) => (
          <div
            key={item}
            className="border rounded-xl p-4 bg-gray-50"
          >
            {item}
          </div>
        ))}

      </div>

      <p className="text-lg text-gray-700 leading-relaxed">
        This content reflects ongoing research, practical experimentation,
        and analysis of how search engines and AI-powered answer systems
        evaluate, retrieve, rank, and reference information.
      </p>

    </div>

  </div>

</section>

{/* FINAL CTA SECTION */}

<section className="py-24">

  <div className="max-w-6xl mx-auto">

    <div className="rounded-3xl bg-black text-white p-10 md:p-16">

      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
        Ready to Improve Your Visibility Across Google & AI Search?
      </h2>

      <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto mb-8">
        Search is no longer limited to traditional rankings.
      </p>

      <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto mb-12">
        Today, customers discover businesses through Google Search,
        AI Overviews, ChatGPT, Gemini, Perplexity, voice assistants,
        and AI-powered recommendation systems.
      </p>

      <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto mb-12">
        If your business is not being discovered, cited, or recommended
        within these ecosystems, you may be missing valuable opportunities
        for growth.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">

        {[
          "Search Engine Optimization (SEO)",
          "Generative Engine Optimization (GEO)",
          "Answer Engine Optimization (AEO)",
          "AI Search Visibility Strategies",
          "Content Authority Development",
          "Entity-Based SEO",
        ].map((item) => (
          <div
            key={item}
            className="border border-gray-700 rounded-xl p-4 text-center"
          >
            ✓ {item}
          </div>
        ))}

      </div>

      <div className="bg-white/10 rounded-3xl p-8 max-w-4xl mx-auto mb-12">

        <h3 className="text-2xl font-bold mb-6 text-center">
          Request Your Free SEO & AI Visibility Assessment
        </h3>

        <p className="text-gray-300 text-center mb-8">
          Get a personalized review of your website and discover:
        </p>

        <div className="grid md:grid-cols-2 gap-4">

          {[
            "SEO opportunities limiting growth",
            "AI search visibility gaps",
            "GEO and AEO recommendations",
            "Content authority opportunities",
            "Practical next steps tailored to your business",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3"
            >
              <span>✓</span>
              <span>{item}</span>
            </div>
          ))}

        </div>

      </div>

      <div className="flex flex-col sm:flex-row gap-5 justify-center">

        <a
          href="/contact"
          className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition"
        >
          Book a Free Discovery Call
        </a>

        <a
          href="/contact"
          className="px-8 py-4 rounded-xl border border-white font-semibold hover:bg-white hover:text-black transition"
        >
          Request Your Free Visibility Assessment
        </a>

      </div>

      <p className="text-center text-gray-400 mt-10 max-w-3xl mx-auto">
        Let's build a search presence that is visible not only on Google
        but across the next generation of AI-powered search platforms.
      </p>

    </div>

  </div>

</section>

      </main>
    </>
  );
}