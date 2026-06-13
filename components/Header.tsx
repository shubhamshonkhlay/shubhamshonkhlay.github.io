export default function Header() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <h2 className="text-xl font-bold text-[#111827]">
          Shubham Shonkhlay
        </h2>

        <div className="flex gap-6 items-center">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>

          <button className="bg-[#2563EB] text-white px-5 py-2 rounded-lg">
            Hire SEO Expert
          </button>
        </div>

      </div>
    </nav>
  );
}