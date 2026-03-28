const courses = [
  {
    icon: "🏛️",
    title: "MPSC State Services",
    badge: "Most Popular",
    badgeColor: "bg-orange-100 text-orange-700",
    description: "Comprehensive preparation for Deputy Collector, DSP, Sales Tax Inspector and other Group-A & Group-B posts.",
    features: ["Prelims + Mains + Interview", "600+ Hours of Video Content", "Complete Study Material", "30+ Mock Tests"],
    duration: "12 Months",
    mode: "Online / Offline",
    lang: "Marathi & English",
    price: "₹18,999",
    originalPrice: "₹28,000",
    color: "border-orange-500",
    headerBg: "bg-gradient-to-br from-orange-500 to-orange-700",
  },
  {
    icon: "👮",
    title: "PSI / STI / ASO",
    badge: "New Batch",
    badgeColor: "bg-blue-100 text-blue-700",
    description: "Targeted coaching for Police Sub-Inspector, Sales Tax Inspector, and Assistant Section Officer exams.",
    features: ["Subject-wise Classes", "Physical Fitness Guidance", "Previous Year Papers", "Doubt Sessions"],
    duration: "8 Months",
    mode: "Online / Offline",
    lang: "Marathi",
    price: "₹12,999",
    originalPrice: "₹20,000",
    color: "border-blue-600",
    headerBg: "bg-gradient-to-br from-blue-600 to-blue-900",
  },
  {
    icon: "📋",
    title: "MPSC Group B & C",
    badge: "Beginner Friendly",
    badgeColor: "bg-green-100 text-green-700",
    description: "Complete preparation for Group B (Non-Gazetted) and Group C (Clerk-Typist, Tax Assistant) posts.",
    features: ["Basic to Advanced Level", "Typing & Skill Tests", "Sectional Tests", "Interview Preparation"],
    duration: "6 Months",
    mode: "Online",
    lang: "Marathi & English",
    price: "₹8,999",
    originalPrice: "₹14,000",
    color: "border-green-600",
    headerBg: "bg-gradient-to-br from-green-600 to-emerald-800",
  },
  {
    icon: "🌾",
    title: "Talathi & Revenue",
    badge: "Fast Track",
    badgeColor: "bg-yellow-100 text-yellow-700",
    description: "Specialized coaching for Talathi (Gramsevak), Mahsul Vibhag and related revenue department exams.",
    features: ["Land Revenue Act", "Maharashtra GK Focus", "Rapid Revision Series", "Weekly Tests"],
    duration: "4 Months",
    mode: "Online",
    lang: "Marathi",
    price: "₹5,999",
    originalPrice: "₹10,000",
    color: "border-yellow-500",
    headerBg: "bg-gradient-to-br from-yellow-500 to-orange-600",
  },
  {
    icon: "🚔",
    title: "Maharashtra Police Bharti",
    badge: "High Demand",
    badgeColor: "bg-red-100 text-red-700",
    description: "Complete preparation for Constable, Head Constable, and other police recruitment exams.",
    features: ["Physical Test Guidance", "Written Exam Classes", "Maharashtra History & GK", "Model Papers"],
    duration: "3 Months",
    mode: "Online / Offline",
    lang: "Marathi",
    price: "₹4,999",
    originalPrice: "₹8,000",
    color: "border-red-500",
    headerBg: "bg-gradient-to-br from-red-600 to-red-900",
  },
  {
    icon: "📚",
    title: "Foundation Course",
    badge: "Start Here",
    badgeColor: "bg-purple-100 text-purple-700",
    description: "A complete foundation course for fresh graduates to prepare for all competitive exams in Maharashtra.",
    features: ["All Subject Basics", "Aptitude & Reasoning", "General Studies", "Career Counselling"],
    duration: "6 Months",
    mode: "Online",
    lang: "Marathi & English",
    price: "₹6,999",
    originalPrice: "₹12,000",
    color: "border-purple-600",
    headerBg: "bg-gradient-to-br from-purple-600 to-indigo-800",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Our Programs</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mt-2 mb-3">Choose Your MPSC Course</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Expert-designed programs for every Maharashtra government exam — from State Services to Talathi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.title}
              className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 ${course.color} flex flex-col`}
            >
              {/* Header */}
              <div className={`${course.headerBg} p-6 text-white`}>
                <div className="flex items-start justify-between mb-3">
                  <span className="text-4xl">{course.icon}</span>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${course.badgeColor}`}>
                    {course.badge}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold">{course.title}</h3>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{course.description}</p>

                <ul className="space-y-2 mb-5">
                  {course.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-green-500 font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-3 gap-2 mb-5 text-xs">
                  <div className="bg-blue-50 rounded-lg p-2 text-center">
                    <div className="text-blue-900 font-bold">⏱ {course.duration}</div>
                    <div className="text-gray-500">Duration</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-2 text-center">
                    <div className="text-orange-700 font-bold">💻 {course.mode}</div>
                    <div className="text-gray-500">Mode</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2 text-center">
                    <div className="text-green-700 font-bold">🗣 {course.lang}</div>
                    <div className="text-gray-500">Language</div>
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-extrabold text-blue-900">{course.price}</span>
                    <span className="text-gray-400 line-through text-sm">{course.originalPrice}</span>
                    <span className="text-green-600 font-semibold text-xs bg-green-100 px-2 py-0.5 rounded">
                      {Math.round((1 - parseInt(course.price.replace(/[₹,]/g, "")) / parseInt(course.originalPrice.replace(/[₹,]/g, ""))) * 100)}% OFF
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="#contact"
                      className="flex-1 text-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 rounded-lg text-sm transition-colors"
                    >
                      Enroll Now
                    </a>
                    <button className="px-4 py-2.5 border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white rounded-lg text-sm font-semibold transition-colors">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-3.5 rounded-xl transition-colors shadow-lg">
            Can&apos;t decide? Get Free Counselling →
          </a>
        </div>
      </div>
    </section>
  );
}
