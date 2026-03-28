"use client";
import { useState, useEffect } from "react";

const slides = [
  {
    badge: "🏆 Maharashtra's #1 MPSC Coaching",
    title: "Crack MPSC with Expert Guidance",
    subtitle: "Comprehensive preparation for MPSC State Services, Group B, Group C & All Maharashtra Government Exams",
    bg: "from-blue-900 via-blue-800 to-blue-900",
  },
  {
    badge: "📚 New Batch Starting Soon",
    title: "MPSC State Services 2025 Batch",
    subtitle: "Join our flagship program with experienced faculty, live classes, doubt sessions & complete study material",
    bg: "from-orange-700 via-orange-600 to-orange-700",
  },
  {
    badge: "🎯 Proven Results Since 2010",
    title: "5000+ Selections in Government Jobs",
    subtitle: "Our students have secured top ranks in MPSC, UPSC, Talathi, Police and other Maharashtra government exams",
    bg: "from-blue-900 via-indigo-900 to-blue-900",
  },
];

const stats = [
  { value: "5000+", label: "Selections" },
  { value: "50+", label: "Expert Faculty" },
  { value: "15+", label: "Years Experience" },
  { value: "1 Lakh+", label: "Students" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className={`relative bg-gradient-to-br ${slide.bg} transition-all duration-1000 text-white`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-block bg-white/20 backdrop-blur text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/30">
            {slide.badge}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            {slide.title}
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl leading-relaxed">
            {slide.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#courses"
              className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-3.5 rounded-lg transition-all shadow-lg hover:shadow-orange-500/40 text-base"
            >
              Explore Courses
            </a>
            <a
              href="#test-series"
              className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-bold px-8 py-3.5 rounded-lg transition-all text-base"
            >
              Free Mock Test
            </a>
          </div>

          {/* Slide dots */}
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all ${i === current ? "w-8 h-2.5 bg-orange-400" : "w-2.5 h-2.5 bg-white/40"}`}
              />
            ))}
          </div>
        </div>

        {/* Floating card */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-72">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl">🎓</div>
              <div>
                <div className="font-bold text-gray-900 text-sm">Next Batch Starting</div>
                <div className="text-orange-600 font-extrabold text-lg">April 10, 2025</div>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Live + Recorded Classes</div>
              <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Full Study Material (Marathi/English)</div>
              <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Weekly Mock Tests</div>
              <div className="flex items-center gap-2"><span className="text-green-500">✓</span> Personal Mentorship</div>
            </div>
            <a href="#courses" className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 rounded-lg transition-colors text-sm">
              Register Now
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative bg-white/10 backdrop-blur border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl md:text-3xl font-extrabold text-orange-300">{s.value}</div>
              <div className="text-sm text-white/75 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
