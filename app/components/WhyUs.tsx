const features = [
  {
    icon: "🏅",
    title: "Proven Track Record",
    desc: "5000+ successful selections across MPSC, UPSC, Police, Talathi and other Maharashtra government exams since 2010.",
  },
  {
    icon: "👨‍🏫",
    title: "Expert Faculty",
    desc: "Learn from retired IAS/IPS officers, subject matter experts with decades of teaching and administrative experience.",
  },
  {
    icon: "📱",
    title: "Learn Anytime, Anywhere",
    desc: "Access live and recorded lectures from our app. Study on mobile, tablet, or PC at your own pace.",
  },
  {
    icon: "🗣️",
    title: "Marathi Medium Available",
    desc: "All study material, classes, and tests available in Marathi medium to ensure no language barrier for aspirants.",
  },
  {
    icon: "📝",
    title: "Comprehensive Test Series",
    desc: "Regular sectional, full-length and previous-year mock tests with detailed analysis and rank among all students.",
  },
  {
    icon: "🤝",
    title: "Personal Mentorship",
    desc: "One-on-one doubt clearing sessions, individual performance tracking, and customized study plans.",
  },
  {
    icon: "📖",
    title: "Updated Study Material",
    desc: "MPSC-specific notes, printed books, and digital content updated every year as per the latest syllabus and pattern.",
  },
  {
    icon: "💬",
    title: "24×7 Support",
    desc: "Dedicated student support via WhatsApp, Telegram groups and live chat for quick resolution of all queries.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Why MPSC Guru?</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mt-2 mb-3">
            The MPSC Guru Advantage
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Everything you need to crack Maharashtra&apos;s most competitive exams — under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border ${
                i % 2 === 0 ? "bg-blue-900 text-white border-blue-900" : "bg-white text-gray-800 border-gray-100"
              }`}
            >
              <div className={`text-4xl mb-4`}>{f.icon}</div>
              <h3 className={`font-bold text-lg mb-2 ${i % 2 === 0 ? "text-white" : "text-blue-900"}`}>{f.title}</h3>
              <p className={`text-sm leading-relaxed ${i % 2 === 0 ? "text-blue-100" : "text-gray-500"}`}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Achievement banner */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-700 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-3">
            Join Maharashtra&apos;s Most Trusted MPSC Coaching
          </h3>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Over 1 lakh students trust MPSC Guru for their government job preparation.
            Begin your journey today with a free demo class.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#courses" className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-8 py-3 rounded-xl transition-colors shadow">
              Start Free Trial
            </a>
            <a href="#contact" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold px-8 py-3 rounded-xl transition-colors">
              Talk to Counsellor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
