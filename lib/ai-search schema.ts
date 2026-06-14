export const personSchema = {
"@context": "https://schema.org",
"@type": "Person",
name: "Shubham Shonkhlay",
jobTitle: "AI Search Consultant",
description:
"SEO Consultant, GEO Specialist, AEO Strategist and AI Search Consultant",
url: "https://shubhamshonkhlay-github-io.vercel.app/",
};

export const articleSchema = {
"@context": "https://schema.org",
"@type": "Article",
headline:
"AI Search Optimization: How People Actually Search Using AI Tools in 2026",
description:
"Learn how AI Search Optimization, GEO, AEO, ChatGPT, Gemini, Claude, Perplexity and Google AI Overviews are changing search visibility.",
author: {
"@type": "Person",
name: "Shubham Shonkhlay",
},
publisher: {
"@type": "Person",
name: "Shubham Shonkhlay",
},
mainEntityOfPage:
"https://shubhamshonkhlay-github-io.vercel.app/ai-search",
};

export const faqSchema = {
"@context": "https://schema.org",
"@type": "FAQPage",
mainEntity: [
{
"@type": "Question",
name: "What is AI Search Optimization?",
acceptedAnswer: {
"@type": "Answer",
text: "AI Search Optimization is the process of structuring content so AI systems can extract, understand and cite it as answers.",
},
},
{
"@type": "Question",
name: "What is GEO?",
acceptedAnswer: {
"@type": "Answer",
text: "GEO stands for Generative Engine Optimization and focuses on improving visibility inside AI-generated responses.",
},
},
{
"@type": "Question",
name: "What is AEO?",
acceptedAnswer: {
"@type": "Answer",
text: "AEO stands for Answer Engine Optimization and helps content become direct answers in AI systems and voice search.",
},
},
{
"@type": "Question",
name: "How do AI systems choose content?",
acceptedAnswer: {
"@type": "Answer",
text: "AI systems prioritize structured, authoritative, trustworthy and easily extractable information.",
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
name: "AI Search",
item: "https://shubhamshonkhlay-github-io.vercel.app/ai-search",

},
],
};

export const webpageSchema = {
"@context": "https://schema.org",
"@type": "WebPage",
name: "AI Search Optimization",
url: "https://shubhamshonkhlay-github-io.vercel.app/ai-search",
description:
"Guide to AI Search Optimization, GEO, AEO and AI Overviews.",
inLanguage: "en",
author: {
"@type": "Person",
name: "Shubham Shonkhlay",
},
};
