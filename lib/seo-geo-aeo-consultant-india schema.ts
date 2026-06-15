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