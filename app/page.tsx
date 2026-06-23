export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-[#2563EB] font-semibold mb-4">
          SEO • GEO • AEO • AI Search
        </p>

        <h1 className="text-6xl font-bold text-[#111827] mb-6">
          Helping Businesses Grow Through SEO, GEO & AI Search
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mb-8">
          I help businesses increase visibility across Google Search and
          AI-powered search engines through SEO, GEO, AEO and modern
          digital marketing strategies.
        </p>

        <div className="flex gap-4">
          <button className="bg-[#2563EB] text-white px-6 py-3 rounded-lg">
            Work With Me
          </button>

          <button className="border border-gray-300 px-6 py-3 rounded-lg">
            Read Articles
          </button>
        </div>
      </section>

{/* Services */}
<section className="bg-[#F8FAFC] py-24">
  <div className="max-w-6xl mx-auto px-6">
    
    <h2 className="text-4xl font-bold text-[#111827] mb-4">
      Services
    </h2>

    <p className="text-gray-600 mb-12">
      Helping businesses grow visibility across Google Search and AI-powered search platforms.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold mb-3">
          SEO Consulting
        </h3>
        <p className="text-gray-600">
          Technical SEO, content strategy, on-page SEO and organic growth.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold mb-3">
          GEO Strategy
        </h3>
        <p className="text-gray-600">
          Optimize content for ChatGPT, Gemini, Perplexity and AI search engines.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold mb-3">
          AEO Optimization
        </h3>
        <p className="text-gray-600">
          Improve visibility in answer engines and featured snippets.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold mb-3">
          AI Search Consulting
        </h3>
        <p className="text-gray-600">
          Future-proof your business for the next generation of search.
        </p>
      </div>

    </div>

  </div>
</section>
{/* Search Intelligence Hub */}
<section className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-[#111827] mb-4">
      Search Intelligence Hub
    </h2>

    <p className="text-gray-600 mb-12 max-w-2xl">
      Explore insights, strategies and experiments across SEO, GEO, AEO and AI-powered search.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      <div className="border rounded-xl p-6 hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold mb-3">SEO</h3>
        <p className="text-gray-600">
          Technical SEO, content strategy, rankings and organic growth.
        </p>
      </div>

      <div className="border rounded-xl p-6 hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold mb-3">GEO</h3>
        <p className="text-gray-600">
          Generative Engine Optimization for ChatGPT, Gemini and Perplexity.
        </p>
      </div>

      <div className="border rounded-xl p-6 hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold mb-3">AEO</h3>
        <p className="text-gray-600">
          Answer Engine Optimization and featured snippet visibility.
        </p>
      </div>

      <div className="border rounded-xl p-6 hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold mb-3">AI Search</h3>
        <p className="text-gray-600">
          Understanding how AI search engines discover and recommend content.
        </p>
      </div>

      <div className="border rounded-xl p-6 hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold mb-3">Google Updates</h3>
        <p className="text-gray-600">
          Analysis of algorithm updates and search trends.
        </p>
      </div>

      <div className="border rounded-xl p-6 hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold mb-3">Search Experiments</h3>
        <p className="text-gray-600">
          Real-world tests, findings and observations from modern search.
        </p>
      </div>

    </div>

  </div>
</section>
{/* Featured Articles */}
<section className="bg-[#F8FAFC] py-24">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-[#111827] mb-4">
      Featured Articles
    </h2>

    <p className="text-gray-600 mb-12">
      Insights and strategies for SEO, GEO, AEO and AI-powered search.
    </p>

    <div className="grid md:grid-cols-3 gap-6">

      <article className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-2xl font-semibold mb-3">
          How AI Overviews Are Changing SEO
        </h3>

        <p className="text-gray-600 mb-4">
          Learn how Google's AI Overviews are impacting rankings, clicks and content strategy.
        </p>

        <button className="text-blue-600 font-medium">
          Read More →
        </button>
      </article>

      <article className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-2xl font-semibold mb-3">
          GEO vs Traditional SEO
        </h3>

        <p className="text-gray-600 mb-4">
          Understand the differences between search engine optimization and generative engine optimization.
        </p>

        <button className="text-blue-600 font-medium">
          Read More →
        </button>
      </article>

      <article className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-2xl font-semibold mb-3">
          How ChatGPT Finds and Cites Sources
        </h3>

        <p className="text-gray-600 mb-4">
          A deep dive into citations, authority signals and AI search visibility.
        </p>

        <button className="text-blue-600 font-medium">
          Read More →
        </button>
      </article>

    </div>

  </div>
</section>
{/* Case Studies */}
<section className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-[#111827] mb-4">
      Case Studies
    </h2>

    <p className="text-gray-600 mb-12">
      Real results, experiments and search visibility improvements.
    </p>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="border rounded-xl p-8">
        <div className="text-5xl font-bold text-blue-600 mb-4">
          +180%
        </div>

        <h3 className="text-2xl font-semibold mb-3">
          Organic Traffic Growth
        </h3>

        <p className="text-gray-600">
          Increased organic visibility through technical SEO and content optimization.
        </p>
      </div>

      <div className="border rounded-xl p-8">
        <div className="text-5xl font-bold text-blue-600 mb-4">
          Top 3
        </div>

        <h3 className="text-2xl font-semibold mb-3">
          Keyword Rankings
        </h3>

        <p className="text-gray-600">
          Improved rankings for high-intent keywords across competitive niches.
        </p>
      </div>

      <div className="border rounded-xl p-8">
        <div className="text-5xl font-bold text-blue-600 mb-4">
          AI
        </div>

        <h3 className="text-2xl font-semibold mb-3">
          Search Visibility
        </h3>

        <p className="text-gray-600">
          Enhanced discoverability across modern AI-powered search platforms.
        </p>
      </div>

    </div>

  </div>
</section>
{/* Final CTA */}
<section className="bg-[#111827] py-24">
  <div className="max-w-4xl mx-auto px-6 text-center">

    <h2 className="text-5xl font-bold text-white mb-6">
      Ready to Grow Your Visibility Across Google & AI Search?
    </h2>

    <p className="text-gray-300 text-xl mb-10">
      Let's discuss your SEO, GEO, AEO and AI Search strategy.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium">
        Book a Strategy Call
      </button>

      <button className="border border-gray-500 text-white px-8 py-4 rounded-lg font-medium">
        View Case Studies
      </button>

    </div>

  </div>
</section>
</main>
  );
}