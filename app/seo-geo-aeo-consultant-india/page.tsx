import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import StaggerSection from "../../component/StaggerContainer";

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

      <main className="w-full text-gray-900 overflow-x-hidden">

        {/* HERO */}
        <StaggerSection>
          <section className="relative overflow-hidden py-24">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-cyan-50" />

  <div className="relative max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <div>
        <span className="inline-flex rounded-full bg-black text-white px-4 py-2 text-sm mb-6">
          SEO • GEO • AEO • AI Search
        </span>

        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          SEO, GEO & AI Search Optimization Consultant
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Helping businesses improve visibility across Google,
          ChatGPT, Gemini, Perplexity and AI-powered search systems.
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <Link
            href="/contact"
            className="bg-black text-white px-8 py-4 rounded-2xl"
          >
            Book Strategy Call
          </Link>

          <Link
            href="/contact"
            className="border border-gray-300 px-8 py-4 rounded-2xl"
          >
            Free Visibility Audit
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="text-3xl font-bold">SEO</div>
            <p className="text-gray-500">Google Search</p>
          </div>

          <div>
            <div className="text-3xl font-bold">GEO</div>
            <p className="text-gray-500">AI Citations</p>
          </div>

          <div>
            <div className="text-3xl font-bold">AEO</div>
            <p className="text-gray-500">Answer Engines</p>
          </div>
        </div>
      </div>

      <div>
        <img
          src="/images/seo-landing%20page/hero.jfif"
          alt="SEO GEO AI Search Optimization Consultant"
          className="rounded-3xl shadow-2xl w-full"
        />
      </div>

    </div>
  </div>
</section>
</StaggerSection>


 {/* ABOUT SECTION */}

<StaggerSection>
  <section className="py-24">

  <div className="max-w-6xl mx-auto px-6">


<div className="grid lg:grid-cols-3 gap-10 items-start">

  {/* LEFT PROFILE CARD */}

  <div className="lg:sticky lg:top-10">

    <div className="rounded-[32px] bg-black text-white p-10">

      <span className="text-sm uppercase tracking-[0.2em] text-gray-400">
        About
      </span>

      <h2 className="text-4xl font-black mt-4 mb-4">
        Shubham Shonkhlay
      </h2>

      <p className="text-gray-300 text-lg">
        Digital Marketing & AI Search Strategist
      </p>

      <div className="mt-8 space-y-4">

        <div className="border border-white/10 rounded-2xl p-4">
          SEO
        </div>

        <div className="border border-white/10 rounded-2xl p-4">
          GEO
        </div>

        <div className="border border-white/10 rounded-2xl p-4">
          AEO
        </div>

        <div className="border border-white/10 rounded-2xl p-4">
          AI Search Optimization
        </div>

      </div>

    </div>

  </div>

  {/* RIGHT CONTENT */}

  <div className="lg:col-span-2">

    <div className="bg-white border border-gray-200 rounded-[32px] p-10 shadow-sm">

      <h3 className="text-3xl font-bold mb-8">
        Helping Businesses Stay Visible in the Future of Search
      </h3>

      <div className="space-y-8 text-lg text-gray-700 leading-relaxed">

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

  </div>

</div>

  </div>

</section>
</StaggerSection>


{/* SEO GEO AEO SECTION */}

<StaggerSection>
<section className="py-24 bg-gradient-to-b from-gray-50 to-white rounded-[40px] mt-10">
  <div className="max-w-5xl mx-auto px-6">


    <h2 className="text-5xl font-bold text-center mb-6">
      What Are SEO, GEO & AEO?
    </h2>

    <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
      Understanding the relationship between SEO, GEO, AEO and AI Search Optimization.
    </p>

    {/* IMAGE - POSITION UNCHANGED */}
    <div className="mb-12">
      <img
        src="/images/seo-landing%20page/What%20Are%20SEO,%20GEO%20&%20AEO.jfif"
        alt="What Are SEO GEO and AEO"
        className="max-w-4xl w-full mx-auto rounded-2xl my-10 shadow-lg"
      />
    </div>
    
    <div className="grid md:grid-cols-2 gap-6">


  {/* SEO */}
  <div className="group rounded-[32px] border border-gray-200 bg-white p-10 hover:shadow-2xl transition-all duration-300">

    <p className="text-sm uppercase tracking-[0.2em] text-blue-600 font-semibold mb-4">
      Traditional Search
    </p>

    <h3 className="text-5xl font-black mb-6">
      SEO
    </h3>

    <p className="text-lg text-gray-700 leading-relaxed">
      Search Engine Optimization is the process of improving a website's visibility within traditional search engine results.
    </p>

    <p className="text-lg text-gray-700 leading-relaxed mt-4">
      SEO focuses on technical performance, content quality, authority, relevance, user experience, and search intent alignment to improve rankings and organic traffic.
    </p>

  </div>

  {/* GEO */}
  <div className="group rounded-[32px] bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white p-10 hover:shadow-2xl transition-all duration-300">

    <p className="text-sm uppercase tracking-[0.2em] text-purple-200 font-semibold mb-4">
      AI Discovery
    </p>

    <h3 className="text-5xl font-black mb-6">
      GEO
    </h3>

    <p className="text-lg text-purple-100 leading-relaxed">
      <Link
        href="/geo"
        className="font-semibold underline underline-offset-4"
      >
        Generative Engine Optimization (GEO)
      </Link>{" "}
      focuses on improving how AI systems discover, understand,
      interpret, and reference content when generating answers.
    </p>

    <p className="text-lg text-purple-100 leading-relaxed mt-4">
      GEO helps businesses increase the likelihood of being mentioned,
      cited, and recommended within AI-generated responses.
    </p>

    <p className="mt-6">
      <Link
        href="/geo"
        className="font-semibold text-white hover:opacity-80"
      >
        Learn more →
      </Link>
    </p>

  </div>

  {/* AEO */}
  <div className="md:col-span-2 rounded-[32px] bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 p-12 hover:shadow-xl transition-all duration-300">

    <p className="text-sm uppercase tracking-[0.2em] text-green-600 font-semibold mb-4">
      Direct Answers
    </p>

    <h3 className="text-6xl font-black mb-6">
      AEO
    </h3>

    <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
      Answer Engine Optimization focuses on structuring content so search engines and AI assistants can directly use it to answer user questions.
    </p>

    <p className="text-lg text-gray-700 leading-relaxed mt-4 max-w-4xl">
      AEO improves visibility in featured snippets, AI summaries, voice search results, and answer-based search experiences.
    </p>

  </div>

  {/* AI SEARCH HERO CARD */}
  <div className="md:col-span-2 rounded-[40px] overflow-hidden bg-gradient-to-br from-black via-gray-900 to-slate-800 text-white p-14 relative">

    <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

    <p className="text-sm uppercase tracking-[0.2em] text-blue-300 font-semibold mb-4 relative z-10">
      Future of Search
    </p>

    <h3 className="text-6xl md:text-7xl font-black mb-8 relative z-10">
      AI Search
    </h3>

    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/20 mb-8 relative z-10">
      <span>SEO</span>
      <span>+</span>
      <span>GEO</span>
      <span>+</span>
      <span>AEO</span>
    </div>

    <p className="text-xl text-gray-300 leading-relaxed max-w-4xl relative z-10">
      <Link
        href="/ai-search"
        className="font-semibold text-white underline underline-offset-4"
      >
        AI Search Optimization
      </Link>{" "}
      combines SEO, GEO, and AEO strategies to improve discoverability across modern search experiences.
    </p>

    <p className="text-xl text-gray-300 leading-relaxed mt-6 max-w-4xl relative z-10">
      The objective is not simply to rank but to become a trusted source that search engines and AI systems confidently reference.
    </p>

    <p className="mt-8 relative z-10">
      <Link
        href="/ai-search"
        className="inline-flex items-center px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition"
      >
        Learn More About AI Search →
      </Link>
    </p>

  </div>

</div>

</div>
</section>
</StaggerSection>

{/* WHO I WORK WITH */}

<section className="py-28">

  <div className="max-w-7xl mx-auto px-6">


<div className="text-center mb-16">

  <span className="inline-flex px-4 py-2 rounded-full border text-sm font-medium mb-6">
    Ideal Clients
  </span>

  <h2 className="text-5xl font-bold mb-6">
    Who I Help Grow Online
  </h2>

  <p className="max-w-3xl mx-auto text-xl text-gray-600">
    I partner with businesses, founders, consultants, and brands
    looking to improve visibility across Google, AI search engines,
    and modern answer platforms.
  </p>

</div>

<div className="grid md:grid-cols-3 gap-6">

  {[
    { icon: "📍", title: "Local Businesses" },
    { icon: "🏢", title: "Service Businesses" },
    { icon: "🎯", title: "Consultants" },
    { icon: "🚀", title: "Coaches" },
    { icon: "⭐", title: "Personal Brands" },
    { icon: "💻", title: "SaaS Companies" },
    { icon: "🌱", title: "Startups" },
    { icon: "🛒", title: "E-commerce" },
    { icon: "🤝", title: "B2B Organizations" },
  ].map((item) => (
    <div
      key={item.title}
      className="group bg-white border rounded-3xl p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all"
    >
      <div className="text-5xl mb-5">
        {item.icon}
      </div>

      <h3 className="font-semibold text-lg">
        {item.title}
      </h3>
    </div>
  ))}

</div>

<div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[32px] p-10 text-white">

  <h3 className="text-3xl font-bold mb-4">
    Visibility Creates Trust
  </h3>

  <p className="text-lg text-blue-100 max-w-4xl">
    When customers search online, the businesses that appear,
    get cited, or receive recommendations often earn trust before
    competitors even enter the conversation.
  </p>

</div>


  </div>

</section>

{/* HOW I HELP */}

<section className="py-28 bg-slate-950 text-white">

  <div className="max-w-7xl mx-auto px-6">


<div className="text-center mb-20">

  <span className="inline-flex px-4 py-2 rounded-full border border-white/20 text-sm mb-6">
    Services Framework
  </span>

  <h2 className="text-5xl font-bold mb-6">
    How I Improve Search Visibility
  </h2>

  <p className="max-w-3xl mx-auto text-xl text-slate-400">
    Modern search success requires more than rankings. It requires
    visibility across search engines, AI assistants, answer engines,
    and recommendation systems.
  </p>

</div>

<div className="grid lg:grid-cols-2 gap-8">

  {/* SEO */}

  <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

    <div className="text-5xl mb-6">📈</div>

    <h3 className="text-3xl font-bold mb-6">
      SEO
    </h3>

    <ul className="space-y-3 text-slate-300">
      <li>✓ Technical SEO Audits</li>
      <li>✓ Keyword Research</li>
      <li>✓ Content Strategy</li>
      <li>✓ Internal Linking</li>
      <li>✓ Site Architecture</li>
      <li>✓ Search Performance Optimization</li>
    </ul>

  </div>

  {/* GEO */}

  <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

    <div className="text-5xl mb-6">🤖</div>

    <h3 className="text-3xl font-bold mb-6">
      GEO
    </h3>

    <ul className="space-y-3 text-slate-300">
      <li>✓ AI Visibility Audits</li>
      <li>✓ Entity Optimization</li>
      <li>✓ Brand Mentions</li>
      <li>✓ Citation Optimization</li>
      <li>✓ Knowledge Graph Alignment</li>
      <li>✓ AI-Friendly Content Structures</li>
    </ul>

  </div>

  {/* AEO */}

  <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">

    <div className="text-5xl mb-6">🎯</div>

    <h3 className="text-3xl font-bold mb-6">
      AEO
    </h3>

    <ul className="space-y-3 text-slate-300">
      <li>✓ FAQ Optimization</li>
      <li>✓ Featured Snippets</li>
      <li>✓ Structured Data</li>
      <li>✓ Conversational Search</li>
      <li>✓ Voice Search Readiness</li>
    </ul>

  </div>

  {/* AI SEARCH */}

  <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[32px] p-8">

    <div className="text-5xl mb-6">⚡</div>

    <h3 className="text-3xl font-bold mb-6">
      AI Search Visibility
    </h3>

    <ul className="space-y-3 text-blue-100">
      <li>✓ ChatGPT Visibility</li>
      <li>✓ Gemini Optimization</li>
      <li>✓ Perplexity Visibility</li>
      <li>✓ AI Discoverability</li>
      <li>✓ Entity Development</li>
      <li>✓ AI Search Readiness</li>
    </ul>

  </div>

</div>


  </div>

</section>

{/* CHALLENGES SECTION */}

<section className="py-28">

  <div className="max-w-7xl mx-auto px-6">


<div className="text-center mb-16">

  <span className="inline-flex px-4 py-2 rounded-full border text-sm font-medium mb-6">
    Common Problems
  </span>

  <h2 className="text-5xl font-bold mb-6">
    Why Many Businesses Struggle
  </h2>

  <p className="max-w-3xl mx-auto text-xl text-gray-600">
    Most visibility issues stem from missing authority, weak content
    strategy, poor entity recognition, or lack of AI search readiness.
  </p>

</div>

<div className="grid lg:grid-cols-2 gap-8">

  {/* Problems */}

  <div className="bg-red-50 border border-red-100 rounded-[32px] p-10">

    <h3 className="text-2xl font-bold mb-8">
      Common Challenges
    </h3>

    <div className="space-y-4">

      {[
        "Low Organic Visibility",
        "Declining Search Traffic",
        "Weak Topical Authority",
        "Poor Brand Recognition",
        "Poor AI Discoverability",
        "Insufficient Trust Signals",
        "Increasing Competition",
      ].map((item) => (
        <div
          key={item}
          className="flex items-center gap-3"
        >
          <span>❌</span>
          <span>{item}</span>
        </div>
      ))}

    </div>

  </div>

  {/* Solutions */}

  <div className="bg-green-50 border border-green-100 rounded-[32px] p-10">

    <h3 className="text-2xl font-bold mb-8">
      Strategic Solutions
    </h3>

    <div className="space-y-4">

      {[
        "SEO & Technical Optimization",
        "Authority Building",
        "Entity Development",
        "Content Strategy",
        "Structured Data",
        "AI Search Optimization",
        "Citation & Trust Signals",
      ].map((item) => (
        <div
          key={item}
          className="flex items-center gap-3"
        >
          <span>✅</span>
          <span>{item}</span>
        </div>
      ))}

    </div>

  </div>

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

<section className="py-28">

  <div className="max-w-7xl mx-auto px-6">


{/* Header */}

<div className="text-center mb-16">

  <span className="inline-flex items-center px-4 py-2 rounded-full border text-sm font-medium mb-6">
    Visibility Framework
  </span>

  <h2 className="text-5xl font-bold tracking-tight mb-6">
    My Approach to
    <span className="block text-blue-600">
      Modern Search Optimization
    </span>
  </h2>

  <p className="text-xl text-gray-600 max-w-4xl mx-auto">
    Modern search visibility depends on much more than rankings.
    Search engines and AI-powered answer systems evaluate trust,
    authority, expertise, entities, and relevance signals before
    deciding what content to surface, cite, or recommend.
  </p>

</div>




{/* Signal Cards */}

<div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 mb-16">

  {[
    { icon: "📝", title: "Content Quality" },
    { icon: "🏆", title: "Experience" },
    { icon: "🧠", title: "Expertise" },
    { icon: "⭐", title: "Authority" },
    { icon: "🔒", title: "Trust" },
    { icon: "🔗", title: "Entity Recognition" },
    { icon: "📊", title: "Structured Data" },
    { icon: "📣", title: "Brand Mentions" },
    { icon: "📚", title: "Citation Signals" },
    { icon: "⚡", title: "User Experience" },
  ].map((item) => (
    <div
      key={item.title}
      className="group bg-white border rounded-2xl p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all"
    >
      <div className="text-3xl mb-3">
        {item.icon}
      </div>

      <p className="font-medium text-gray-800">
        {item.title}
      </p>
    </div>
  ))}

</div>

{/* Framework Card */}

<div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[36px] p-10 lg:p-14 text-white">

  <div className="max-w-4xl">

    <h3 className="text-3xl font-bold mb-6">
      Traditional SEO + GEO + AEO = Modern Search Visibility
    </h3>

    <p className="text-lg text-slate-300 leading-relaxed mb-8">
      My approach combines proven SEO principles with GEO and AEO
      methodologies to create sustainable visibility across search
      engines, AI assistants, answer engines, and emerging search
      experiences.
    </p>

    <div className="border-l-4 border-blue-500 pl-6">

      <p className="text-lg text-slate-300 mb-3">
        The objective is simple:
      </p>

      <p className="text-3xl font-bold leading-tight">
        Build digital assets that search engines trust and AI systems understand.
      </p>

    </div>

  </div>

</div>


  </div>

</section>


{/* ENTITY SEO SECTION */}

<section className="py-28 bg-gradient-to-b from-gray-50 to-white rounded-[40px]">

  <div className="max-w-7xl mx-auto px-6">


{/* Header */}

<div className="text-center mb-12">

  <span className="inline-flex items-center px-4 py-2 rounded-full border text-sm font-medium mb-6">
    Entity SEO
  </span>

  <h2 className="text-5xl font-bold tracking-tight mb-6">
    Why Entity SEO Matters
    <span className="block text-blue-600">
      For AI Search
    </span>
  </h2>

  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
    AI search engines rely on entities and relationships to understand
    expertise, authority, and relevance across the web.
  </p>

</div>

{/* KEEP IMAGE IN SAME POSITION */}

<div className="mb-16">

  <img
    src="/images/seo-landing%20page/Why%20Entity%20SEO%20Matters%20for%20AI%20Search.jfif"
    alt="Why Entity SEO Matters for AI Search"
    className="max-w-5xl w-full mx-auto rounded-[32px] shadow-2xl"
  />

</div>

{/* Content */}

<div className="max-w-4xl mx-auto text-center mb-16">

  <p className="text-lg text-gray-700 mb-6">
    Modern search engines increasingly rely on entities rather than
    keywords alone.
  </p>

  <p className="text-lg text-gray-700">
    An entity can be a person, business, service, organization,
    product, or concept that search engines can clearly identify,
    categorize, and connect to other information.
  </p>

</div>

{/* Topic Associations */}

<div className="bg-slate-900 rounded-[36px] p-10 text-white mb-16">

  <h3 className="text-3xl font-bold text-center mb-6">
    Building Strong Topic Associations
  </h3>

  <p className="text-slate-300 text-center max-w-3xl mx-auto mb-10">
    When search engines consistently associate
    <span className="font-semibold text-white">
      {" "}Shubham Shonkhlay{" "}
    </span>
    with specific topics, confidence in expertise and authority grows.
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

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
        className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur"
      >
        {item}
      </div>
    ))}

  </div>

</div>

{/* Conclusion Card */}

<div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[36px] p-10 text-white">

  <h3 className="text-3xl font-bold mb-6">
    Why Entity SEO Is Important
  </h3>

  <div className="space-y-5 text-lg text-blue-100">

    <p>
      Search engines become more confident in understanding the
      expertise behind your content.
    </p>

    <p>
      Entity SEO creates stronger relationships between your brand,
      services, content, expertise, and digital presence.
    </p>

    <p className="text-2xl font-bold text-white pt-2">
      Strong entities improve discoverability across both search
      engines and AI-powered answer systems.
    </p>

  </div>

</div>


  </div>

</section>


{/* AI SEARCH DISCOVERY SECTION */}

<section className="py-24 relative overflow-hidden">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 blur-[120px]" />
    <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 blur-[120px]" />
  </div>

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <span className="inline-flex items-center px-4 py-2 rounded-full border text-sm font-medium mb-6">
        AI Search Visibility
      </span>

      <h2 className="text-5xl font-bold tracking-tight mb-6">
        How AI Search Engines Decide
        <span className="block text-blue-600">
          What Content Gets Referenced
        </span>
      </h2>

      <p className="max-w-3xl mx-auto text-lg text-gray-600">
        Modern AI systems don't simply rank pages. They evaluate trust,
        expertise, authority, structured information, and brand signals
        before surfacing content in generated answers.
      </p>

    </div>

    {/* Process Flow */}

    <div className="grid lg:grid-cols-3 gap-8 mb-16">

      <div className="bg-white border rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all">
        <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl mb-5">
          📚
        </div>

        <h3 className="text-xl font-semibold mb-3">
          Content Analysis
        </h3>

        <p className="text-gray-600">
          AI evaluates depth, accuracy, comprehensiveness, and topical
          coverage to understand subject expertise.
        </p>
      </div>

      <div className="bg-white border rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all">
        <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-2xl mb-5">
          🧠
        </div>

        <h3 className="text-xl font-semibold mb-3">
          Entity Understanding
        </h3>

        <p className="text-gray-600">
          Brands, people, organizations, and topics are connected through
          semantic relationships and knowledge graphs.
        </p>
      </div>

      <div className="bg-white border rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all">
        <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-2xl mb-5">
          🔗
        </div>

        <h3 className="text-xl font-semibold mb-3">
          Citation Selection
        </h3>

        <p className="text-gray-600">
          Sources with stronger trust and authority signals are more
          likely to appear in AI-generated responses.
        </p>
      </div>

    </div>

    {/* Ranking Factors */}

    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[32px] p-10 text-white">

      <div className="flex items-center gap-3 mb-8">
        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        <h3 className="text-2xl font-bold">
          Signals AI Systems Commonly Evaluate
        </h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

        {[
          "Content Depth",
          "Expertise Signals",
          "Website Authority",
          "Structured Data",
          "Citation Potential",
          "Brand Mentions",
          "Entity Recognition",
          "User Experience",
          "Content Freshness",
        ].map((item) => (
          <div
            key={item}
            className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur hover:bg-white/10 transition"
          >
            <span className="text-green-400 mr-2">✓</span>
            {item}
          </div>
        ))}

      </div>

      <div className="mt-10 border-t border-white/10 pt-8">

        <p className="text-slate-300 leading-relaxed">
          No AI platform guarantees citations or recommendations.
          However, content demonstrating strong expertise, authority,
          trustworthiness, and entity relevance is significantly more
          likely to be referenced.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">

          <Link
            href="/geo"
            className="inline-flex items-center px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-slate-100 transition"
          >
            Learn GEO →
          </Link>

          <Link
            href="/ai-search"
            className="inline-flex items-center px-5 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            Explore AI Search Optimization
          </Link>

        </div>

      </div>

    </div>

  </div>

</section>

{/* WHY SEO ALONE IS NOT ENOUGH */}

<section className="py-28 relative overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">


{/* Header */}

<div className="text-center mb-16">

  <span className="inline-flex items-center px-4 py-2 rounded-full border text-sm font-medium mb-6">
    Search Behavior Is Changing
  </span>

  <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
    Why Traditional SEO
    <span className="block text-blue-600">
      Is No Longer Enough
    </span>
  </h2>

  <p className="max-w-3xl mx-auto text-xl text-gray-600">
    Searchers are increasingly bypassing search result pages and
    asking AI assistants directly for answers, recommendations,
    comparisons, and expert opinions.
  </p>

</div>

{/* AI Questions */}

<div className="bg-slate-900 rounded-[36px] p-10 lg:p-14 text-white mb-16">

  <div className="flex items-center gap-3 mb-8">
    <div className="w-3 h-3 rounded-full bg-green-400" />
    <h3 className="text-2xl font-bold">
      Questions People Ask AI Platforms
    </h3>
  </div>

  <div className="grid md:grid-cols-2 gap-4">

    {[
      "Who is the best SEO consultant in India?",
      "What is Generative Engine Optimization?",
      "How can I improve AI search visibility?",
      "What is the difference between SEO and GEO?",
      "How do businesses appear in ChatGPT responses?",
      "What companies are leading AI search optimization?"
    ].map((question) => (
      <div
        key={question}
        className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur"
      >
        <span className="text-blue-400 mr-2">→</span>
        {question}
      </div>
    ))}

  </div>

</div>

{/* Three Pillars */}

<div className="grid lg:grid-cols-3 gap-8 mb-16">

  <div className="bg-white border rounded-3xl p-8 hover:shadow-xl transition">

    <div className="text-5xl mb-5">🏆</div>

    <h3 className="text-2xl font-semibold mb-4">
      Authority
    </h3>

    <p className="text-gray-600">
      AI systems favor trusted sources with strong expertise,
      industry recognition, and topical authority.
    </p>

  </div>

  <div className="bg-white border rounded-3xl p-8 hover:shadow-xl transition">

    <div className="text-5xl mb-5">🧠</div>

    <h3 className="text-2xl font-semibold mb-4">
      Entity Recognition
    </h3>

    <p className="text-gray-600">
      Brands, people, products, and organizations need clear
      entity signals to improve AI discoverability.
    </p>

  </div>

  <div className="bg-white border rounded-3xl p-8 hover:shadow-xl transition">

    <div className="text-5xl mb-5">📊</div>

    <h3 className="text-2xl font-semibold mb-4">
      Structured Knowledge
    </h3>

    <p className="text-gray-600">
      AI platforms rely on structured information, citations,
      semantic relevance, and contextual understanding.
    </p>

  </div>

</div>

{/* Opportunity Card */}

<div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[36px] p-10 text-white">

  <h3 className="text-3xl font-bold mb-5">
    Early Adopters Gain Visibility Advantages
  </h3>

  <p className="text-lg text-blue-100 max-w-4xl leading-relaxed">
    Organizations that combine SEO, GEO, AEO, entity optimization,
    and AI Search strategies today position themselves to earn
    citations, recommendations, and visibility across emerging AI
    search experiences.
  </p>

</div>


  </div>

</section>

{/* INDUSTRIES SECTION */}

<section className="py-28">

  <div className="max-w-7xl mx-auto px-6">


<div className="text-center mb-16">

  <span className="inline-flex items-center px-4 py-2 rounded-full border text-sm font-medium mb-6">
    Industries Served
  </span>

  <h2 className="text-5xl font-bold mb-6">
    Industries I Help Grow
  </h2>

  <p className="max-w-3xl mx-auto text-xl text-gray-600">
    Every industry has unique search behavior, competition levels,
    customer journeys, and AI visibility challenges.
  </p>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

  {[
    { icon: "💼", name: "Professional Services" },
    { icon: "🎯", name: "Consulting" },
    { icon: "📣", name: "Marketing" },
    { icon: "💻", name: "SaaS & Technology" },
    { icon: "🛒", name: "E-commerce" },
    { icon: "🎓", name: "Education" },
    { icon: "🏥", name: "Healthcare" },
    { icon: "📍", name: "Local Businesses" },
    { icon: "⭐", name: "Personal Brands" },
    { icon: "🏢", name: "B2B Organizations" }
  ].map((industry) => (
    <div
      key={industry.name}
      className="group bg-white border rounded-3xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all"
    >
      <div className="text-4xl mb-4">
        {industry.icon}
      </div>

      <p className="font-medium">
        {industry.name}
      </p>
    </div>
  ))}

</div>


  </div>

</section>


{/* FUTURE OF SEARCH */}

<section className="py-28 relative overflow-hidden">

{/* Background Effects */}

  <div className="absolute inset-0 -z-10">
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 blur-[140px]" />
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 blur-[140px]" />
  </div>

  <div className="max-w-7xl mx-auto px-6">


{/* Header */}

<div className="text-center mb-20">

  <span className="inline-flex px-4 py-2 rounded-full border text-sm font-medium mb-6">
    Search Evolution
  </span>

  <h2 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
    The Future of
    <span className="block text-blue-600">
      Search & Discovery
    </span>
  </h2>

  <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
    Search is evolving from link-based results to AI-generated
    answers, personalized recommendations, and conversational
    experiences.
  </p>

</div>

{/* Evolution Timeline */}

<div className="grid lg:grid-cols-3 gap-8 mb-20">

  <div className="group bg-white border rounded-3xl p-8 hover:shadow-xl transition-all">

    <div className="text-5xl mb-5">🔍</div>

    <h3 className="text-2xl font-semibold mb-4">
      Traditional Search
    </h3>

    <p className="text-gray-600">
      Users searched keywords and explored pages of links to
      discover information.
    </p>

  </div>

  <div className="group bg-white border rounded-3xl p-8 hover:shadow-xl transition-all">

    <div className="text-5xl mb-5">🤖</div>

    <h3 className="text-2xl font-semibold mb-4">
      AI-Powered Search
    </h3>

    <p className="text-gray-600">
      Platforms now summarize information, provide direct answers,
      and surface trusted sources automatically.
    </p>

  </div>

  <div className="group bg-white border rounded-3xl p-8 hover:shadow-xl transition-all">

    <div className="text-5xl mb-5">⚡</div>

    <h3 className="text-2xl font-semibold mb-4">
      Intelligent Discovery
    </h3>

    <p className="text-gray-600">
      Future systems will anticipate intent, personalize responses,
      and recommend information before users actively search.
    </p>

  </div>

</div>

{/* Platforms */}

<div className="bg-slate-900 rounded-[36px] p-10 lg:p-14 text-white mb-12">

  <div className="max-w-4xl">

    <h3 className="text-3xl font-bold mb-6">
      Search Is No Longer Just Google
    </h3>

    <p className="text-slate-300 text-lg leading-relaxed mb-10">
      Users now discover information through AI assistants,
      conversational search engines, and answer-generation
      platforms. Visibility increasingly depends on authority,
      expertise, entity recognition, and trust signals.
    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">

    {[
      "Google AI Overviews",
      "ChatGPT",
      "Gemini",
      "Perplexity",
      "Microsoft Copilot",
    ].map((platform) => (
      <div
        key={platform}
        className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur"
      >
        {platform}
      </div>
    ))}

  </div>

</div>

{/* CTA Card */}

<div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[32px] p-10 text-white">

  <h3 className="text-3xl font-bold mb-4">
    Build Visibility Before the Shift Happens
  </h3>

  <p className="text-lg text-blue-100 mb-8 max-w-3xl">
    Organizations investing in SEO, GEO, AEO, and AI Search
    Optimization today are positioning themselves for long-term
    visibility across both traditional search engines and emerging
    AI-powered discovery systems.
  </p>

  <div className="flex flex-wrap gap-4">

    <Link
      href="/geo"
      className="bg-white text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition"
    >
      Explore GEO
    </Link>

    <Link
      href="/ai-search"
      className="border border-white/30 px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition"
    >
      Learn AI Search Optimization
    </Link>

  </div>

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