const articles = [
  {
    category: "Maharashtra",
    date: "Mar 27, 2025",
    title: "Maharashtra Budget 2025-26 Highlights: Key Points for MPSC Aspirants",
    excerpt: "State budget allocates ₹6,000 crore for rural development, key schemes for agriculture and infrastructure with focus on Vidarbha and Marathwada regions.",
    readTime: "5 min read",
    tag: "Important",
    tagColor: "bg-red-100 text-red-700",
  },
  {
    category: "Economy",
    date: "Mar 26, 2025",
    title: "RBI Monetary Policy Committee — MPSC Exam Relevant Summary",
    excerpt: "Key decisions by RBI's MPC including repo rate, reverse repo rate and their implications for inflation control and economic growth.",
    readTime: "4 min read",
    tag: "Economy",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    category: "Polity",
    date: "Mar 25, 2025",
    title: "73rd & 74th Constitutional Amendment — Panchayati Raj in Maharashtra",
    excerpt: "Detailed notes on Panchayati Raj implementation in Maharashtra, District Planning Committees, and their relevance for MPSC Mains.",
    readTime: "8 min read",
    tag: "Polity",
    tagColor: "bg-purple-100 text-purple-700",
  },
  {
    category: "History",
    date: "Mar 24, 2025",
    title: "Role of Maharashtra in India's Freedom Movement — Exam Notes",
    excerpt: "Key events, personalities and movements from Maharashtra in the Indian independence struggle — a high-weightage topic for MPSC.",
    readTime: "6 min read",
    tag: "History",
    tagColor: "bg-yellow-100 text-yellow-700",
  },
  {
    category: "Science & Tech",
    date: "Mar 23, 2025",
    title: "ISRO's Recent Achievements and Space Policy 2023 — MPSC Perspective",
    excerpt: "India's space milestones including Chandrayaan-3, Aditya-L1, and the new Space Policy 2023 — curated notes for competitive exams.",
    readTime: "5 min read",
    tag: "S&T",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    category: "Environment",
    date: "Mar 22, 2025",
    title: "Western Ghats Biodiversity — Maharashtra's Role and MPSC Relevance",
    excerpt: "Western Ghats ecology, flora, fauna, and recent developments in environmental protection affecting Maharashtra — must-read for MPSC.",
    readTime: "7 min read",
    tag: "Environment",
    tagColor: "bg-teal-100 text-teal-700",
  },
];

export default function CurrentAffairs() {
  return (
    <section id="current-affairs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Stay Updated</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mt-2 mb-2">Current Affairs for MPSC</h2>
            <p className="text-gray-500 text-lg max-w-xl">
              Daily curated current affairs in Marathi & English — focused on what MPSC actually asks
            </p>
          </div>
          <a href="#" className="flex-shrink-0 bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors shadow">
            View All Articles →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a) => (
            <article
              key={a.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full">
                    {a.category}
                  </span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${a.tagColor}`}>
                    {a.tag}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-snug group-hover:text-orange-600 transition-colors line-clamp-2">
                  {a.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{a.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>📅 {a.date}</span>
                  <span>⏱ {a.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-xl font-extrabold mb-2">📱 Get Daily MPSC Current Affairs on WhatsApp</h3>
          <p className="text-blue-200 text-sm mb-5">Join 50,000+ aspirants who receive free daily current affairs digests</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="tel"
              placeholder="Enter your WhatsApp number"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 text-sm focus:outline-none"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-colors whitespace-nowrap">
              📩 Subscribe Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
