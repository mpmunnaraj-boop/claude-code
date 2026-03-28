const faculty = [
  {
    name: "Dr. Rajesh Sawant",
    role: "Director & Founder",
    subject: "Indian Polity & Governance",
    exp: "20+ Years",
    bg: "bg-blue-900",
    initials: "RS",
    qualifications: "IAS (Retd.), M.A. Political Science, Ph.D.",
    highlights: ["Ex-Joint Secretary, GoM", "UPSC Interview Expert", "Author of 3 MPSC books"],
  },
  {
    name: "Prof. Meena Kale",
    role: "Senior Faculty",
    subject: "Maharashtra History & Culture",
    exp: "18+ Years",
    bg: "bg-orange-600",
    initials: "MK",
    qualifications: "M.A. History, SET Qualified",
    highlights: ["MPSC Paper Setter (2015-18)", "500+ Selections under guidance", "Marathi Medium Expert"],
  },
  {
    name: "Dr. Amit Bhosale",
    role: "Faculty",
    subject: "Economy & Agriculture",
    exp: "15+ Years",
    bg: "bg-green-700",
    initials: "AB",
    qualifications: "Ph.D. Economics, IES Qualified",
    highlights: ["Ex-NABARD Officer", "Maharashtra Economy Expert", "Published Researcher"],
  },
  {
    name: "CA Sunita Pawar",
    role: "Faculty",
    subject: "Indian Economy & Finance",
    exp: "12+ Years",
    bg: "bg-purple-700",
    initials: "SP",
    qualifications: "Chartered Accountant, MBA Finance",
    highlights: ["Budget Analysis Sessions", "Banking & Finance Expert", "ClearIAS Contributor"],
  },
  {
    name: "Sunil Rathod",
    role: "Faculty",
    subject: "Science & Technology / Environment",
    exp: "10+ Years",
    bg: "bg-teal-700",
    initials: "SR",
    qualifications: "M.Sc. Physics, NET Qualified",
    highlights: ["ISRO Collaborator", "Environment & Biodiversity Notes", "Science Simplified Series"],
  },
  {
    name: "Adv. Priti Shinde",
    role: "Faculty",
    subject: "Law, Ethics & Case Studies",
    exp: "14+ Years",
    bg: "bg-red-700",
    initials: "PS",
    qualifications: "L.L.M., Bar Council Member",
    highlights: ["Constitutional Law Expert", "Mains Answer Writing Coach", "Legal Reasoning Series"],
  },
];

export default function Faculty() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Learn from the Best</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mt-2 mb-3">Our Expert Faculty</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Ex-IAS officers, subject-matter experts, and veteran educators who&apos;ve helped thousands crack Maharashtra&apos;s toughest exams.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((f) => (
            <div
              key={f.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              {/* Header */}
              <div className={`${f.bg} p-6 text-white`}>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center text-2xl font-extrabold">
                    {f.initials}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-tight">{f.name}</h3>
                    <p className="text-white/75 text-sm">{f.role}</p>
                    <div className="mt-1 bg-white/20 px-2 py-0.5 rounded text-xs inline-block">
                      {f.exp} Experience
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <div className="text-orange-600 font-semibold text-sm mb-2">📚 {f.subject}</div>
                <div className="text-gray-500 text-xs mb-3">{f.qualifications}</div>
                <ul className="space-y-1.5">
                  {f.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-orange-500 mt-0.5 flex-shrink-0">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
