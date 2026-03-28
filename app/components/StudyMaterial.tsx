const materials = [
  {
    icon: "📗",
    title: "Complete MPSC Notes",
    desc: "Subject-wise comprehensive notes covering entire MPSC syllabus — Polity, History, Geography, Economy, Science, Environment",
    type: "PDF + Print",
    lang: "Marathi & English",
    badge: "Updated 2025",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    icon: "📹",
    title: "Video Lecture Library",
    desc: "600+ hours of recorded lectures organized by subject and topic. Accessible on mobile and web with lifetime access.",
    type: "Video",
    lang: "Marathi & English",
    badge: "600+ Hours",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    icon: "📰",
    title: "Daily Current Affairs",
    desc: "Daily, weekly, and monthly current affairs digests with MPSC-specific analysis and notes in Marathi & English.",
    type: "PDF + App",
    lang: "Marathi & English",
    badge: "Daily Updated",
    badgeColor: "bg-orange-100 text-orange-700",
  },
  {
    icon: "📝",
    title: "Previous Year Papers",
    desc: "10 years of MPSC question papers with detailed solutions and analysis — Prelims and Mains for all exams.",
    type: "PDF + Online",
    lang: "Marathi & English",
    badge: "10 Years",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    icon: "🗺️",
    title: "Maharashtra GK Handbook",
    desc: "Comprehensive handbook covering Maharashtra geography, history, culture, economy, and polity — must-have for MPSC.",
    type: "Print + PDF",
    lang: "Marathi",
    badge: "Exclusive",
    badgeColor: "bg-red-100 text-red-700",
  },
  {
    icon: "✍️",
    title: "Mains Answer Writing",
    desc: "Structured answer writing modules with model answers, evaluation checklists, and expert feedback for MPSC Mains.",
    type: "Practice + Feedback",
    lang: "Marathi & English",
    badge: "Expert Feedback",
    badgeColor: "bg-yellow-100 text-yellow-700",
  },
];

export default function StudyMaterial() {
  return (
    <section id="study-material" className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Study Resources</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2 mb-3">Comprehensive Study Material</h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            MPSC-specific, syllabus-aligned material in Marathi and English — everything you need in one place
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((m) => (
            <div
              key={m.title}
              className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/15 hover:border-orange-400/50 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{m.icon}</span>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${m.badgeColor}`}>{m.badge}</span>
              </div>
              <h3 className="font-bold text-lg text-white mb-2">{m.title}</h3>
              <p className="text-blue-200 text-sm mb-4 leading-relaxed">{m.desc}</p>
              <div className="flex items-center gap-3 text-xs text-blue-300">
                <span className="flex items-center gap-1">💾 {m.type}</span>
                <span>•</span>
                <span className="flex items-center gap-1">🗣 {m.lang}</span>
              </div>
              <button className="mt-4 w-full text-center border border-orange-400 text-orange-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 text-sm font-semibold py-2 rounded-lg transition-all">
                Download Sample
              </button>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-2xl p-6 border border-white/10">
            <h3 className="font-bold text-xl mb-3">📱 MPSC Guru App</h3>
            <p className="text-blue-200 text-sm mb-4">Access all study material, live classes, test series, and current affairs on your phone — anytime, anywhere.</p>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-white text-blue-900 font-semibold px-4 py-2.5 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                🍎 App Store
              </button>
              <button className="flex items-center gap-2 bg-white text-blue-900 font-semibold px-4 py-2.5 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                🤖 Google Play
              </button>
            </div>
          </div>
          <div className="bg-orange-600/80 rounded-2xl p-6 border border-orange-500">
            <h3 className="font-bold text-xl mb-3">📦 Get All Materials Free for 7 Days</h3>
            <p className="text-orange-100 text-sm mb-4">Try all premium study materials and test series for 7 days absolutely free. No credit card required.</p>
            <a href="#contact" className="inline-block bg-white text-orange-600 font-bold px-6 py-2.5 rounded-lg text-sm hover:bg-orange-50 transition-colors">
              Start Free Trial →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
