const toppers = [
  {
    name: "Priya Sharma",
    rank: "AIR 12 — MPSC State Services 2024",
    exam: "Deputy Collector",
    avatar: "PS",
    avatarBg: "bg-orange-500",
    quote: "MPSC Guru's structured approach and expert faculty made a huge difference. The test series and answer writing practice was invaluable for Mains.",
    batch: "2022-23 Batch",
  },
  {
    name: "Rahul Patil",
    rank: "Rank 3 — MPSC PSI 2024",
    exam: "Police Sub-Inspector",
    avatar: "RP",
    avatarBg: "bg-blue-600",
    quote: "The faculty here understands what MPSC wants. Weekly current affairs sessions and mock tests kept me on track throughout my preparation.",
    batch: "2023 Batch",
  },
  {
    name: "Sneha Deshmukh",
    rank: "Rank 7 — MPSC Group B 2024",
    exam: "Sales Tax Inspector",
    avatar: "SD",
    avatarBg: "bg-purple-600",
    quote: "Being from a Marathi medium background, I was worried. But MPSC Guru's Marathi medium classes and notes made it all accessible and clear.",
    batch: "2022-23 Batch",
  },
  {
    name: "Aniket Kulkarni",
    rank: "Rank 1 — Talathi Exam 2024",
    exam: "Talathi, Nashik District",
    avatar: "AK",
    avatarBg: "bg-green-600",
    quote: "Cleared Talathi in my very first attempt. The specialized coaching for revenue exams at MPSC Guru is unmatched — highly recommended.",
    batch: "2023 Batch",
  },
  {
    name: "Kavita Jadhav",
    rank: "Rank 5 — MPSC STI 2024",
    exam: "Sales Tax Inspector",
    avatar: "KJ",
    avatarBg: "bg-red-500",
    quote: "I tried other institutes before, but MPSC Guru's personal mentorship and updated study material gave me the edge I needed. Forever grateful!",
    batch: "2022-23 Batch",
  },
  {
    name: "Suresh More",
    rank: "Rank 2 — Maharashtra Police 2024",
    exam: "Head Constable",
    avatar: "SM",
    avatarBg: "bg-teal-600",
    quote: "Physical and written test both covered thoroughly. The coaching staff's dedication and regular feedback sessions helped me stay confident.",
    batch: "2023 Batch",
  },
];

const yearStats = [
  { year: "2024", count: "820+" },
  { year: "2023", count: "730+" },
  { year: "2022", count: "650+" },
  { year: "2021", count: "580+" },
];

export default function Toppers() {
  return (
    <section id="toppers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Hall of Fame</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mt-2 mb-3">Our Proud Toppers</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Every success story here is a testament to hard work, dedication, and the right guidance from MPSC Guru
          </p>
        </div>

        {/* Year-wise selection count */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {yearStats.map((s) => (
            <div key={s.year} className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
              <div className="text-orange-500 text-2xl font-extrabold mb-1">{s.count}</div>
              <div className="text-blue-900 font-bold">Selections in {s.year}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toppers.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-14 h-14 rounded-xl ${t.avatarBg} flex items-center justify-center text-white font-extrabold text-lg flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">{t.name}</h3>
                  <p className="text-orange-600 font-semibold text-sm">{t.rank}</p>
                  <p className="text-gray-500 text-xs">{t.exam} • {t.batch}</p>
                </div>
              </div>
              <div className="relative">
                <div className="text-5xl text-orange-200 font-serif absolute -top-2 -left-1 leading-none">&ldquo;</div>
                <p className="text-gray-600 text-sm leading-relaxed pl-5 italic">{t.quote}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-2 text-blue-900 hover:text-orange-600 font-semibold underline underline-offset-4 transition-colors">
            See all 5000+ success stories →
          </a>
        </div>
      </div>
    </section>
  );
}
