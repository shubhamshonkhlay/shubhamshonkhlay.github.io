export const metadata = {
  title: "AI Search Optimization 2026",
  description: "GEO, AEO, AI Overviews SEO strategy guide",
  keywords: [
    "AI search",
    "GEO SEO",
    "AEO optimization",
    "ChatGPT SEO",
    "AI Overviews ranking"
  ],
};

export default function AISearchPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold">
        AI Search Optimization: How People Actually Search Using AI Tools in 2026
      </h1>

      <div className="mt-4 text-blue-600">
        <a href="/">Home</a> |{" "}
        <a href="/geo">GEO Strategy Page</a>
      </div>

      {/* IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
        alt="AI Search Ecosystem"
        className="rounded-xl mt-8"
      />

      {/* SECTION 1 */}
      <h2 className="text-2xl font-semibold mt-10">What is AI Search?</h2>

      <p className="mt-3">
        AI Search is a new discovery system where users ask questions directly to AI tools like ChatGPT,
        Perplexity, Gemini, Claude, and Google AI Overviews instead of typing keywords into traditional search engines.
      </p>

      <p className="mt-3">
        Unlike traditional SEO where users search “best AI tools for SEO”, in AI Search users ask:
        “What are the best AI tools for SEO in 2026, and which one should I use for my business?”
      </p>

      <p className="mt-3">
        This shift has created three optimization systems: SEO (Search Engine Optimization),
        AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization).
      </p>

      {/* SECTION 2 */}
      <h2 className="text-2xl font-semibold mt-10">How AI Search Works</h2>

      <ul className="list-disc pl-6 mt-3">
        <li>Understand user intent</li>
        <li>Break query into sub-questions</li>
        <li>Retrieve multiple sources</li>
        <li>Filter based on authority and clarity</li>
        <li>Generate a unified answer</li>
        <li>Optionally cite trusted sources</li>
      </ul>

      <p className="mt-3">
        AI systems prioritize structured content, direct answers, author credibility (E-E-A-T),
        clear entity signals, and fresh factual information.
      </p>

      {/* SECTION 3 */}
      <h2 className="text-2xl font-semibold mt-10">
        Real AI Search Queries People Actually Use
      </h2>

      <h3 className="text-xl mt-4">AI Tool Discovery Queries</h3>
      <ul className="list-disc pl-6">
        <li>best AI tools for marketing 2026</li>
        <li>ChatGPT alternatives free</li>
        <li>Perplexity vs ChatGPT comparison</li>
        <li>best AI search engine</li>
      </ul>

      <h3 className="text-xl mt-4">AI How-To Queries</h3>
      <ul className="list-disc pl-6">
        <li>how to use AI for SEO</li>
        <li>how to write prompts for ChatGPT</li>
        <li>how to build website using AI tools</li>
        <li>how to automate business with AI</li>
      </ul>

      <h3 className="text-xl mt-4">AI Money & Career Queries</h3>
      <ul className="list-disc pl-6">
        <li>how to make money with AI tools</li>
        <li>AI freelancing ideas 2026</li>
        <li>passive income using AI automation</li>
        <li>AI tools for digital marketing jobs</li>
      </ul>

      {/* TABLE */}
      <h2 className="text-2xl font-semibold mt-10">
        AI Search vs Traditional Search
      </h2>

      <div className="overflow-x-auto mt-4">
        <table className="w-full border">
          <thead>
            <tr>
              <th className="border p-2">Factor</th>
              <th className="border p-2">Traditional SEO</th>
              <th className="border p-2">AI Search</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Output</td>
              <td className="border p-2">Ranked links</td>
              <td className="border p-2">Generated answers</td>
            </tr>
            <tr>
              <td className="border p-2">Behavior</td>
              <td className="border p-2">Keyword-based</td>
              <td className="border p-2">Conversational</td>
            </tr>
            <tr>
              <td className="border p-2">Goal</td>
              <td className="border p-2">Clicks</td>
              <td className="border p-2">Citations</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* GEO SECTION */}
      <h2 className="text-2xl font-semibold mt-10">What is GEO and AEO?</h2>

      <p className="mt-3">
        Generative Engine Optimization (GEO) focuses on improving how content appears inside AI-generated responses.
        Answer Engine Optimization (AEO) focuses on making content appear as direct answers.
      </p>

      <p className="mt-3">
        SEO = ranking pages, AEO = becoming the answer, GEO = being cited in AI responses.
      </p>

      {/* AUTHOR SECTION */}
      <h2 className="text-2xl font-semibold mt-10">About the Author</h2>

      <p className="mt-3">
        Shubham Shonkhlay — Digital Marketing & AI Search Strategist specializing in GEO, AEO, and AI Search systems.
      </p>

      {/* CTA */}
      <div className="mt-10 p-6 bg-gray-100 rounded-xl">
        <h3 className="text-xl font-semibold">
          Want your website to rank in AI Search?
        </h3>
        <p className="mt-2">
          Learn GEO + AEO strategy to appear in ChatGPT, Perplexity, and Google AI Overviews.
        </p>

        <a href="/geo" className="text-blue-600 mt-3 block">
          Go to GEO Strategy →
        </a>
      </div>

    </main>
  );
}