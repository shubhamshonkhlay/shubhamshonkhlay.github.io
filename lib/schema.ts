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
