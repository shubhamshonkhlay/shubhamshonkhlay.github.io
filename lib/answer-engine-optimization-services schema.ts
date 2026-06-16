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