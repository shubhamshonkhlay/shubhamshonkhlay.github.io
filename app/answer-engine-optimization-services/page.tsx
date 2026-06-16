import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Script from "next/script";




export const metadata: Metadata = {
  title:
    "Answer Engine Optimization (AEO) Services in India | AI Search Visibility",
  description:
    "Get found in Google AI Overviews, ChatGPT, Gemini, Perplexity and AI-powered search engines with Answer Engine Optimization (AEO) services.",
  alternates: {
    canonical:
      "https://shubhamshonkhlay-github-io.vercel.app/answer-engine-optimization-services",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://shubhamshonkhlay-github-io.vercel.app/#organization",
      name: "Shubham Shonkhlay",
      url: "https://shubhamshonkhlay-github-io.vercel.app",
      description:
        "SEO, GEO, AEO and AI Search Visibility Consulting Services in India.",
      logo: {
        "@type": "ImageObject",
        url: "https://shubhamshonkhlay-github-io.vercel.app/favicon.ico"
      }
    },

    {
      "@type": "Person",
      "@id": "https://shubhamshonkhlay-github-io.vercel.app/#person",
      name: "Shubham Shonkhlay",
      url: "https://shubhamshonkhlay-github-io.vercel.app",
      jobTitle: "SEO Consultant, GEO Specialist & AI Search Strategist",
      worksFor: {
        "@id":
          "https://shubhamshonkhlay-github-io.vercel.app/#organization"
      },
      knowsAbout: [
        "Search Engine Optimization",
        "Generative Engine Optimization",
        "Answer Engine Optimization",
        "AI Search",
        "Technical SEO",
        "Schema Markup",
        "Entity SEO",
        "Google AI Overviews",
        "ChatGPT Visibility"
      ]
    },

    {
      "@type": "WebSite",
      "@id": "https://shubhamshonkhlay-github-io.vercel.app/#website",
      url: "https://shubhamshonkhlay-github-io.vercel.app",
      name: "Shubham Shonkhlay",
      publisher: {
        "@id":
          "https://shubhamshonkhlay-github-io.vercel.app/#organization"
      }
    },

    {
      "@type": "WebPage",
      "@id":
        "https://shubhamshonkhlay-github-io.vercel.app/answer-engine-optimization-services/#webpage",
      url:
        "https://shubhamshonkhlay-github-io.vercel.app/answer-engine-optimization-services",
      name:
        "Answer Engine Optimization (AEO) Services in India",
      description:
        "Answer Engine Optimization services helping businesses improve visibility across Google AI Overviews, ChatGPT, Gemini, Claude, Copilot and Perplexity.",
      isPartOf: {
        "@id":
          "https://shubhamshonkhlay-github-io.vercel.app/#website"
      },
      about: {
        "@id":
          "https://shubhamshonkhlay-github-io.vercel.app/answer-engine-optimization-services/#service"
      },
      author: {
        "@id":
          "https://shubhamshonkhlay-github-io.vercel.app/#person"
      }
    },

    {
      "@type": "ProfessionalService",
      "@id":
        "https://shubhamshonkhlay-github-io.vercel.app/answer-engine-optimization-services/#service",
      name: "Answer Engine Optimization Services",
      provider: {
        "@id":
          "https://shubhamshonkhlay-github-io.vercel.app/#person"
      },
      areaServed: {
        "@type": "Country",
        name: "India"
      },
      serviceType: [
        "Answer Engine Optimization",
        "SEO",
        "Generative Engine Optimization",
        "AI Search Visibility"
      ],
      description:
        "Answer Engine Optimization services helping businesses gain visibility across Google AI Overviews, ChatGPT, Gemini, Claude and Perplexity.",
      url:
        "https://shubhamshonkhlay-github-io.vercel.app/answer-engine-optimization-services"
    },

    {
      "@type": "BreadcrumbList",
      "@id":
        "https://shubhamshonkhlay-github-io.vercel.app/answer-engine-optimization-services/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item:
            "https://shubhamshonkhlay-github-io.vercel.app"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Answer Engine Optimization Services",
          item:
            "https://shubhamshonkhlay-github-io.vercel.app/answer-engine-optimization-services"
        }
      ]
    },

    {
      "@type": "ItemList",
      name: "AEO Services",
      itemListElement: [
        {
          "@type": "Service",
          position: 1,
          name: "AEO Strategy Development"
        },
        {
          "@type": "Service",
          position: 2,
          name: "Content Optimization"
        },
        {
          "@type": "Service",
          position: 3,
          name: "FAQ Optimization"
        },
        {
          "@type": "Service",
          position: 4,
          name: "Featured Snippet Optimization"
        },
        {
          "@type": "Service",
          position: 5,
          name: "Schema Markup Implementation"
        },
        {
          "@type": "Service",
          position: 6,
          name: "Entity Optimization"
        },
        {
          "@type": "Service",
          position: 7,
          name: "AI Search Visibility Audits"
        }
      ]
    },

    {
      "@type": "FAQPage",
      "@id":
        "https://shubhamshonkhlay-github-io.vercel.app/answer-engine-optimization-services/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Answer Engine Optimization?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Answer Engine Optimization is the process of structuring content so search engines and AI systems can understand, extract and present it as direct answers."
          }
        },
        {
          "@type": "Question",
          name: "Is AEO replacing SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "No. AEO complements SEO. The strongest visibility strategy combines SEO, GEO and AEO."
          }
        },
        {
          "@type": "Question",
          name: "What is the difference between GEO and AEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "GEO focuses on visibility within AI-generated responses while AEO focuses on becoming the direct answer shown by answer engines."
          }
        },
        {
          "@type": "Question",
          name: "Can AEO help with ChatGPT visibility?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. AEO improves content structure, authority and clarity, increasing the likelihood of being referenced by AI systems."
          }
        },
        {
          "@type": "Question",
          name: "Does Google AI Overview use AEO principles?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Content that is clear, authoritative and well structured is more likely to appear in Google AI Overviews."
          }
        },
        {
          "@type": "Question",
          name: "How long does AEO take?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Results vary depending on competition, authority and content quality, but improvements generally occur over several months."
          }
        }
      ]
    }
  ]
};



export default function AEOPage() {
  return (
    <>
      {/* ✅ SEO SCHEMA */}
      <Script
  id="aeo-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(schema),
  }}
/>  

    <main className="w-full">

     {/* HERO SECTION */}
<section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_40%)]" />

  <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">

    <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.15fr]">

      {/* LEFT CONTENT */}
      <div>

        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
          AI Search Visibility Services
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Answer Engine Optimization (AEO) Services in India
        </h1>

        <p className="mt-6 text-xl leading-8 text-gray-600">
          Get discovered in Google AI Overviews, ChatGPT, Gemini,
          Perplexity and the next generation of AI-powered search engines.
        </p>

        <p className="mt-6 text-lg leading-8 text-gray-700">
          We help businesses structure content, improve authority signals,
          earn AI citations and increase visibility across answer engines.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-blue-700"
          >
            Book Free Consultation
          </Link>

          <Link
            href="#what-is-aeo"
            className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-8 py-4 text-base font-semibold text-gray-900 hover:bg-gray-50"
          >
            Learn More
          </Link>

        </div>

        {/* TRUST BADGES */}
        <div className="mt-10 flex flex-wrap gap-3">

          {[
            "Google AI Overviews",
            "ChatGPT",
            "Gemini",
            "Perplexity",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
            >
              {item}
            </span>
          ))}

        </div>

      </div>

      {/* RIGHT VISUAL */}
      <div className="relative">

        <img
          src="/images/aeo-landing page/hero section.jfif"
          alt="Answer Engine Optimization Services"
          className="h-[350px] w-full rounded-[32px] object-cover shadow-2xl lg:h-[550px]"
        />

        {/* Floating Card */}
        <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-white p-6 shadow-xl">

          <div className="grid grid-cols-3 gap-4 text-center">

            <div>
              <div className="text-2xl font-bold text-blue-600">
                SEO
              </div>

              <p className="mt-1 text-sm text-gray-500">
                Rankings
              </p>
            </div>

            <div>
              <div className="text-2xl font-bold text-blue-600">
                GEO
              </div>

              <p className="mt-1 text-sm text-gray-500">
                AI Citations
              </p>
            </div>

            <div>
              <div className="text-2xl font-bold text-blue-600">
                AEO
              </div>

              <p className="mt-1 text-sm text-gray-500">
                Answers
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>

    {/* WHAT IS AEO */}
<section
  id="what-is-aeo"
  className="py-24 bg-gradient-to-b from-white to-slate-50"
>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    <div className="mx-auto max-w-4xl text-center">

      <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
        Understanding AEO
      </span>

      <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
        What is Answer Engine Optimization (AEO)?
      </h2>

      <p className="mt-8 text-lg leading-8 text-gray-600">
        Answer Engine Optimization (AEO) is the process of structuring
        content so search engines and AI systems can understand,
        extract and present it as direct answers to user questions.
      </p>

    </div>

    {/* FEATURE CARDS */}
    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-5 text-4xl">🤖</div>
        <h3 className="text-xl font-bold text-gray-900">
          AI Answers
        </h3>
        <p className="mt-3 text-gray-600">
          Become a source used by AI platforms when generating answers.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-5 text-4xl">📌</div>
        <h3 className="text-xl font-bold text-gray-900">
          Featured Snippets
        </h3>
        <p className="mt-3 text-gray-600">
          Increase visibility in Google's answer boxes and snippets.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-5 text-4xl">🎙️</div>
        <h3 className="text-xl font-bold text-gray-900">
          Voice Search
        </h3>
        <p className="mt-3 text-gray-600">
          Optimize content for voice assistants and conversational search.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-5 text-4xl">🔗</div>
        <h3 className="text-xl font-bold text-gray-900">
          AI Citations
        </h3>
        <p className="mt-3 text-gray-600">
          Improve the chances of being referenced by AI systems.
        </p>
      </div>

    </div>

    {/* CONTENT BLOCK */}
    <div className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 lg:p-12">

      <p className="text-lg leading-8 text-gray-700">
        AEO works alongside{" "}
        <Link
          href="/seo-geo-aeo-consultant-india"
          className="font-semibold text-blue-600 hover:underline"
        >
          SEO, GEO and AI Search Optimization
        </Link>{" "}
        to improve visibility across Google AI Overviews, ChatGPT,
        Gemini, Claude, Copilot and Perplexity.
      </p>

      <p className="mt-6 text-lg leading-8 text-gray-700">
        Unlike traditional SEO, which focuses primarily on rankings,
        AEO focuses on becoming the answer itself. Modern search engines
        increasingly prioritize direct responses, summaries, citations
        and conversational results.
      </p>

      <p className="mt-6 text-lg leading-8 text-gray-700">
        Businesses that structure content for answer engines are better
        positioned to gain visibility as search continues to evolve from
        links to AI-generated answers.
      </p>

    </div>

  </div>
</section>


{/* WHY AEO MATTERS */}
<section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 via-white to-blue-50/30">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

      {/* LEFT CONTENT */}
      <div>

        
        <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 lg:text-6xl">
          Why AEO Matters in 2026 and Beyond
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Search is evolving from a list of links to direct answers generated
          by AI systems. Businesses that adapt early gain visibility where
          customers are increasingly searching.
        </p>

        <div className="mt-10 space-y-5">

          {[
            "Google AI Overviews are replacing traditional clicks",
            "Users increasingly ask ChatGPT and Gemini for recommendations",
            "AI assistants summarize information instead of listing websites",
            "Brands cited by AI gain authority and trust",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-4"
            >
              <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white text-sm">
                ✓
              </div>

              <p className="text-gray-700">
                {item}
              </p>
            </div>
          ))}

        </div>

        {/* STATS */}
        <div className="mt-10 grid grid-cols-2 gap-4">

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="text-3xl font-bold text-blue-600">
              AI
            </div>

            <p className="mt-2 text-sm text-gray-600">
              Search-driven discovery is growing rapidly.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="text-3xl font-bold text-blue-600">
              24/7
            </div>

            <p className="mt-2 text-sm text-gray-600">
              AI assistants answer customer questions anytime.
            </p>
          </div>

        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div>

        <img
          src="/images/aeo-landing page/Why AEO Matters Section.jfif"
          alt="Why Answer Engine Optimization Matters"
          className="w-full rounded-[32px] shadow-2xl object-cover"
        />

      </div>

    </div>

{/* OLD SEARCH VS AI SEARCH */}
<div className="mt-20 grid gap-8 lg:grid-cols-2">

  <div className="rounded-3xl border bg-white p-8 shadow-sm">

    <div className="mb-4 text-5xl">🔎</div>

    <h3 className="text-2xl font-bold text-gray-900">
      Traditional Search
    </h3>

    <p className="mt-3 text-gray-600">
      Users searched, scanned multiple websites, and compared results.
    </p>

    <ul className="mt-8 space-y-4 text-gray-700">
      <li>✓ Browse multiple links</li>
      <li>✓ Compare websites manually</li>
      <li>✓ Click through search results</li>
      <li>✓ Research information independently</li>
    </ul>

  </div>

  <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8 shadow-sm">

    <div className="mb-4 text-5xl">🤖</div>

    <h3 className="text-2xl font-bold text-gray-900">
      AI-Powered Search
    </h3>

    <p className="mt-3 text-gray-600">
      Users ask questions and receive direct answers instantly.
    </p>

    <ul className="mt-8 space-y-4 text-gray-700">
      <li>✓ AI-generated answers</li>
      <li>✓ Conversational search</li>
      <li>✓ Instant recommendations</li>
      <li>✓ Fewer website visits before decisions</li>
    </ul>

  </div>

</div>

{/* USER QUESTIONS */}
<div className="mt-20">

  <h3 className="text-center text-2xl font-bold text-gray-900">
    Questions People Ask AI Search Engines
  </h3>

  <div className="mt-10 flex flex-wrap justify-center gap-3">

    {[
      "How does AEO work?",
      "How can my business appear in ChatGPT?",
      "How do I rank in Google AI Overview?",
      "What is Generative Engine Optimization?",
      "How do AI search engines find websites?",
      "How can I get cited by AI tools?",
      "How do I optimize content for AI search?",
    ].map((item) => (
      <span
        key={item}
        className="rounded-full border bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm"
      >
        {item}
      </span>
    ))}

  </div>

</div>

{/* IMPACT BOX */}
<div className="mt-20 rounded-3xl border border-blue-100 bg-blue-50 p-8 lg:p-10">

  <h3 className="text-2xl font-bold text-gray-900">
    What This Means for Businesses
  </h3>

  <p className="mt-4 text-lg leading-8 text-gray-700">
    Businesses that rely only on traditional SEO risk losing visibility
    as AI assistants increasingly become the first source of information.
    AEO helps your content become easier for answer engines to understand,
    extract, reference, and recommend.
  </p>

  <div className="mt-8 flex flex-wrap gap-3">

    <span className="rounded-full bg-white px-4 py-2 text-sm font-medium">
      Google AI Overviews
    </span>

    <span className="rounded-full bg-white px-4 py-2 text-sm font-medium">
      ChatGPT
    </span>

    <span className="rounded-full bg-white px-4 py-2 text-sm font-medium">
      Gemini
    </span>

    <span className="rounded-full bg-white px-4 py-2 text-sm font-medium">
      Perplexity
    </span>

    <span className="rounded-full bg-white px-4 py-2 text-sm font-medium">
      AI Search
    </span>

  </div>

</div>


  </div>
</section>


{/* AEO VS SEO */}
<section className="py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    <div className="text-center">
      

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
        AEO vs SEO: What's the Difference?
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
  While SEO and AEO work together, they serve different objectives.
  The strongest visibility strategy combines{" "}
  <Link
    href="/seo-geo-aeo-consultant-india"
    className="font-semibold text-blue-600 hover:underline"
  >
    SEO
  </Link>
  ,{" "}
  <Link
    href="/geo"
    className="font-semibold text-blue-600 hover:underline"
  >
    GEO
  </Link>
  , and AEO into a unified AI search visibility framework.
</p>
    </div>

    <div className="mt-16 grid gap-8 lg:grid-cols-2">

      {/* SEO CARD */}
      <div className="rounded-3xl border bg-white p-10 shadow-sm">
        <div className="mb-6 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Traditional SEO
        </div>

        <h3 className="text-2xl font-bold text-gray-900">
          SEO Focuses On
        </h3>

        <div className="mt-8 space-y-4">

          {[
            "Search Rankings",
            "Organic Traffic",
            "Keywords",
            "Backlinks",
            "Technical Optimization",
            "SERP Visibility",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span>✓</span>
              <span>{item}</span>
            </div>
          ))}

        </div>
      </div>

      {/* AEO CARD */}
      <div className="rounded-3xl border bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-white shadow-xl">

        <div className="mb-6 inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
          Modern AEO
        </div>

        <h3 className="text-2xl font-bold">
          AEO Focuses On
        </h3>

        <div className="mt-8 space-y-4">

          {[
            "Direct Answers",
            "AI-Generated Responses",
            "Featured Snippets",
            "Voice Search Results",
            "Knowledge Extraction",
            "Entity Recognition",
            "Structured Information",
            "AI Citations",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span>✓</span>
              <span>{item}</span>
            </div>
          ))}

        </div>
      </div>

    </div>

    <div className="mt-12 text-center">
      <p className="mx-auto max-w-4xl text-lg text-gray-600">
        The most effective digital marketing strategy today combines
        SEO, GEO, and AEO into a unified search visibility system.
      </p>
    </div>

  </div>
</section>

{/* HOW ANSWER ENGINES CHOOSE CONTENT */}
<section className="bg-slate-50 py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    <div className="mx-auto max-w-3xl text-center">
      

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
        How Answer Engines Choose Content
      </h2>

      <p className="mt-6 text-lg text-gray-600">
        AI systems and answer engines evaluate content differently than
        traditional search engines.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          title: "Clear Information Architecture",
          desc: "Content should be logically organized with headings, sections, and semantic structure.",
          icon: "🏗️",
        },
        {
          title: "Question-Based Content",
          desc: "Pages that directly answer user questions perform better in AI-driven search environments.",
          icon: "❓",
        },
        {
          title: "Topical Authority",
          desc: "Answer engines favor websites that demonstrate expertise and depth on a subject.",
          icon: "🎯",
        },
        {
          title: "Structured Data",
          desc: "Schema markup helps AI systems understand content relationships and context.",
          icon: "📊",
        },
        {
          title: "Trust Signals",
          desc: "Author expertise, citations, brand mentions, and authority indicators improve credibility.",
          icon: "🛡️",
        },
        {
          title: "Entity Recognition",
          desc: "AI systems identify people, businesses, services, locations, products, and concepts as entities.",
          icon: "🧠",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="text-4xl">{item.icon}</div>

          <h3 className="mt-6 text-xl font-bold text-gray-900">
            {item.title}
          </h3>

          <p className="mt-4 leading-7 text-gray-600">
            {item.desc}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>


{/* OUR AEO SERVICES */}
<section className="py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    <div className="mx-auto max-w-3xl text-center">
      

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
        Our AEO Services
      </h2>

      <p className="mt-6 text-lg text-gray-600">
        We help businesses optimize their websites for both traditional
        search engines and AI answer systems, improving visibility across
        Google Search, AI Overviews, ChatGPT, Gemini, and Perplexity.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {[
        {
          title: "AEO Strategy Development",
          desc: "We identify opportunities for visibility in answer engines and AI-powered search experiences.",
          icon: "🎯",
        },
        {
          title: "Content Optimization",
          desc: "We restructure content to improve answer extraction and AI readability.",
          icon: "✍️",
        },
        {
          title: "FAQ Optimization",
          desc: "We create high-quality question-and-answer content aligned with real user searches.",
          icon: "❓",
        },
        {
          title: "Featured Snippet Optimization",
          desc: "We improve content formatting to increase eligibility for answer boxes and snippets.",
          icon: "📌",
        },
        {
          title: "Schema Markup Implementation",
          desc: "We implement structured data that helps search engines and AI systems interpret your content.",
          icon: "⚙️",
        },
        {
          title: "Entity Optimization",
          desc: "We strengthen topical relevance and improve how your brand is recognized across the web.",
          icon: "🧠",
        },
        {
          title: "AI Search Visibility Audits",
          desc: "We evaluate how AI platforms currently understand and reference your website.",
          icon: "🔍",
        },
      ].map((service) => (
        <div
          key={service.title}
          className="group rounded-3xl border bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="text-4xl">{service.icon}</div>

          <h3 className="mt-6 text-xl font-bold text-gray-900">
            {service.title}
          </h3>

          <p className="mt-4 leading-7 text-gray-600">
            {service.desc}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>

{/* HOW AEO SUPPORTS GEO & SEO */}
<section className="py-24 bg-white">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    <div className="mx-auto max-w-3xl text-center">

      
      <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
        How SEO, GEO & AEO Work Together
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        Modern search visibility is no longer driven by SEO alone.
        Businesses need a strategy that covers traditional search,
        AI-generated responses, and answer engines.
      </p>

    </div>

    {/* CONNECTED FRAMEWORK */}

    <div className="mt-20">

      <div className="grid gap-8 lg:grid-cols-3">

        {/* SEO */}

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

          <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
            📈
          </div>

          <h3 className="text-2xl font-bold text-gray-900">
            SEO
          </h3>

          <p className="mt-2 font-medium text-blue-700">
            Search Engine Optimization
          </p>

          <p className="mt-5 leading-7 text-gray-600">
            Improves rankings, organic traffic, crawlability,
            and visibility across traditional search engines.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Google Rankings",
              "Keywords",
              "Backlinks",
              "Technical SEO",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm"
              >
                {item}
              </span>
            ))}
          </div>

        </div>

        {/* GEO */}

        <div className="rounded-3xl border border-blue-200 bg-blue-50 p-8 shadow-sm">

          <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-2xl text-white">
            🤖
          </div>

          <h3 className="text-2xl font-bold text-gray-900">
            GEO
          </h3>

          <p className="mt-2 font-medium text-blue-700">
            Generative Engine Optimization
          </p>

          <p className="mt-5 leading-7 text-gray-600">
            Improves visibility inside AI-generated responses across
            ChatGPT, Gemini, Claude, Perplexity, and future AI systems.
          </p>

          <div className="mt-6">
            <Link
              href="/geo"
              className="font-semibold text-blue-700 hover:underline"
            >
              Learn More About GEO →
            </Link>
          </div>

        </div>

        {/* AEO */}

        <div className="rounded-3xl border border-indigo-200 bg-indigo-50 p-8 shadow-sm">

          <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-2xl text-white">
            ⚡
          </div>

          <h3 className="text-2xl font-bold text-gray-900">
            AEO
          </h3>

          <p className="mt-2 font-medium text-indigo-700">
            Answer Engine Optimization
          </p>

          <p className="mt-5 leading-7 text-gray-600">
            Helps content become the direct answer shown by
            AI assistants, voice search, snippets, and answer engines.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Featured Snippets",
              "AI Answers",
              "Voice Search",
              "FAQ Content",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-white px-3 py-1 text-sm border"
              >
                {item}
              </span>
            ))}
          </div>

        </div>

      </div>

    </div>

    {/* UNIFIED SYSTEM */}

    <div className="mt-20 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 lg:p-12">

      <div className="text-center">

        <h3 className="text-3xl font-bold text-gray-900">
          One Unified Search Visibility System
        </h3>

        <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-700">
          SEO helps people find you in search results.
          GEO helps AI platforms understand and reference your brand.
          AEO helps your content become the answer itself.
        </p>

        <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-gray-700">
          Together they create a future-ready visibility strategy
          for Google Search, AI Overviews, ChatGPT, Gemini,
          Perplexity, and emerging AI-powered discovery systems.
        </p>

        <div className="mt-8">

          <Link
            href="/seo-geo-aeo-consultant-india"
            className="inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Explore SEO + GEO + AEO Strategy
          </Link>

        </div>

      </div>

    </div>

  </div>
</section>

{/* BENEFITS OF AEO */}
<section className="py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    <div className="mx-auto max-w-3xl text-center">
     

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
        Benefits of Answer Engine Optimization
      </h2>

      <p className="mt-6 text-lg text-gray-600">
        AEO helps businesses remain visible as search engines evolve into
        AI-powered answer systems.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-5">

      {[
        {
          title: "Increased AI Visibility",
          desc: "Appear in AI-generated responses and answer summaries.",
          icon: "🚀",
        },
        {
          title: "Better User Experience",
          desc: "Deliver clear, concise, and useful information.",
          icon: "😊",
        },
        {
          title: "More Qualified Traffic",
          desc: "Attract visitors with stronger search intent.",
          icon: "🎯",
        },
        {
          title: "Enhanced Brand Authority",
          desc: "Build trust through AI citations and mentions.",
          icon: "🏆",
        },
        {
          title: "Future-Proof Strategy",
          desc: "Prepare for the future of AI-powered search.",
          icon: "🔮",
        },
      ].map((benefit) => (
        <div
          key={benefit.title}
          className="rounded-3xl border bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="text-5xl">{benefit.icon}</div>

          <h3 className="mt-6 font-bold text-gray-900">
            {benefit.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            {benefit.desc}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>

{/* INDUSTRIES THAT BENEFIT FROM AEO */}
<section className="bg-slate-50 py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    <div className="mx-auto max-w-3xl text-center">
      

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
        Industries That Benefit from AEO
      </h2>

      <p className="mt-6 text-lg text-gray-600">
        Answer Engine Optimization is valuable for any business that depends
        on online visibility, customer acquisition, and digital authority.
      </p>
    </div>

    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      {[
        "Professional Services",
        "Healthcare",
        "SaaS Companies",
        "Technology Startups",
        "E-commerce Businesses",
        "Consultants",
        "Educational Platforms",
        "Local Businesses",
        "Financial Services",
        "Marketing Agencies",
        "Personal Brands",
      ].map((industry) => (
        <div
          key={industry}
          className="rounded-2xl border bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
        >
          <p className="font-semibold text-gray-900">
            {industry}
          </p>
        </div>
      ))}

    </div>

    <div className="mx-auto mt-12 max-w-4xl text-center">
      <p className="text-lg text-gray-600">
        Any organization that relies on online visibility can benefit from
        implementing Answer Engine Optimization strategies.
      </p>
    </div>

  </div>
</section>

{/* FAQ SECTION */}
<section className="py-24">
  <div className="mx-auto max-w-5xl px-6 lg:px-8">

    <div className="text-center">
      

      <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
        Frequently Asked Questions About AEO
      </h2>
    </div>

    <div className="mt-16 space-y-6">

      {[
        {
          q: "What is Answer Engine Optimization?",
          a: "Answer Engine Optimization is the practice of structuring and optimizing content so search engines and AI systems can directly use it to answer user questions.",
        },
        {
          q: "Is AEO replacing SEO?",
          a: "No. AEO complements SEO rather than replacing it. Businesses need both strategies to maximize visibility.",
        },
        {
          q: "What is the difference between GEO and AEO?",
          a: "GEO focuses on improving visibility in AI-generated responses, while AEO focuses on becoming the direct answer provided by answer engines.",
        },
        {
          q: "Can AEO help with ChatGPT visibility?",
          a: "Yes. Properly structured content increases the likelihood that AI systems can understand, reference, and utilize your information.",
        },
        {
          q: "Does Google AI Overview use AEO principles?",
          a: "Yes. Content optimized for clarity, structure, authority, and direct answers aligns with how AI Overviews process information.",
        },
        {
          q: "How long does AEO take?",
          a: "Results vary depending on competition, authority, content quality, and implementation depth. Most businesses see gradual improvements over several months.",
        },
      ].map((faq) => (
        <details
          key={faq.q}
          className="group rounded-2xl border bg-white p-6 shadow-sm"
        >
          <summary className="cursor-pointer list-none text-lg font-semibold text-gray-900">
            {faq.q}
          </summary>

          <p className="mt-4 leading-7 text-gray-600">
            {faq.a}
          </p>
        </details>
      ))}

    </div>

  </div>
</section>

{/* WHY WORK WITH US */}
<section className="py-24 bg-gradient-to-b from-white to-slate-50">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">

    <div className="mx-auto max-w-3xl text-center">
    
      <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
        Why Work With Us?
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        We combine traditional SEO expertise with next-generation AI search
        optimization to help businesses stay visible across Google,
        ChatGPT, Gemini, Perplexity, AI Overviews, and future search platforms.
      </p>
    </div>

    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          title: "SEO Expertise",
          icon: "📈",
          desc: "Build sustainable organic visibility in traditional search engines."
        },
        {
          title: "Generative Engine Optimization",
          icon: "🤖",
          desc: "Improve brand visibility across AI-generated responses."
        },
        {
          title: "Answer Engine Optimization",
          icon: "⚡",
          desc: "Increase eligibility for direct answers and AI summaries."
        },
        {
          title: "AI Search Strategy",
          icon: "🧠",
          desc: "Create future-ready search visibility frameworks."
        },
        {
          title: "Technical SEO & Schema",
          icon: "⚙️",
          desc: "Strengthen crawlability, structure, and machine understanding."
        },
        {
          title: "Entity & Authority Building",
          icon: "🏆",
          desc: "Improve brand recognition, trust, and AI citation potential."
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="text-4xl">
            {item.icon}
          </div>

          <h3 className="mt-5 text-xl font-bold text-gray-900">
            {item.title}
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            {item.desc}
          </p>
        </div>
      ))}

    </div>

    <div className="mt-16 rounded-3xl border border-blue-100 bg-blue-50 p-8 lg:p-10">
      <p className="text-center text-lg leading-8 text-gray-700">
        Our approach combines{" "}
        <Link
          href="/seo-geo-aeo-consultant-india"
          className="font-semibold text-blue-700 hover:underline"
        >
          SEO
        </Link>
        ,{" "}
        <Link
          href="/geo"
          className="font-semibold text-blue-700 hover:underline"
        >
          GEO
        </Link>
        , and{" "}
        <Link
          href="/answer-engine-optimization-services"
          className="font-semibold text-blue-700 hover:underline"
        >
          AEO
        </Link>{" "}
        into a unified visibility strategy that helps businesses adapt as
        search evolves from links to answers and AI-generated recommendations.
      </p>
    </div>

  </div>
</section>

{/* FINAL CTA */}
<section className="py-20 bg-slate-50">
  <div className="mx-auto max-w-5xl px-6 lg:px-8">

    <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm lg:p-12">

      <div className="text-center">



        <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 lg:text-5xl">
          Start Building AI Search Visibility Today
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Improve your visibility across Google AI Overviews, ChatGPT,
          Gemini, Perplexity, and emerging AI-powered search platforms.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Book Free Consultation
          </Link>

          <Link
            href="/seo-geo-aeo-consultant-india"
            className="inline-flex items-center justify-center rounded-xl border px-8 py-4 font-semibold text-gray-700 hover:bg-gray-50"
          >
            Explore SEO + GEO + AEO
          </Link>

        </div>

      </div>

    </div>

  </div>
</section>

    </main>

    </>
  );
}


