export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center">

          <div>
            <h3 className="text-white text-xl font-semibold mb-2">
              Shubham Shonkhlay
            </h3>

            <p>
              SEO Consultant • GEO Specialist • AI Search Strategist
            </p>
          </div>

          <div className="flex gap-6 mt-6 md:mt-0">
            <a href="/seo">SEO</a>
            <a href="/geo">GEO</a>
            <a href="/aeo">AEO</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
          </div>

        </div>

      </div>
    </footer>
  );
}