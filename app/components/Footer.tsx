const footerLinks = {
  "Courses": [
    "MPSC State Services",
    "PSI / STI / ASO",
    "MPSC Group B & C",
    "Talathi & Revenue",
    "Maharashtra Police",
    "Foundation Course",
  ],
  "Resources": [
    "Study Material",
    "Current Affairs",
    "Mock Test Series",
    "Previous Year Papers",
    "MPSC Syllabus",
    "Exam Calendar",
  ],
  "Company": [
    "About MPSC Guru",
    "Our Faculty",
    "Success Stories",
    "Careers",
    "Blog",
    "Contact Us",
  ],
};

const socialLinks = [
  { label: "YouTube", icon: "▶", color: "hover:text-red-500", href: "#" },
  { label: "Telegram", icon: "✈", color: "hover:text-blue-400", href: "#" },
  { label: "Instagram", icon: "📷", color: "hover:text-pink-400", href: "#" },
  { label: "Facebook", icon: "f", color: "hover:text-blue-500", href: "#" },
  { label: "Twitter", icon: "𝕏", color: "hover:text-gray-400", href: "#" },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <div className="font-extrabold text-xl text-white">MPSC Guru</div>
                <div className="text-xs text-orange-500 font-medium -mt-1">Maharashtra&apos;s Premier IAS/MPSC Academy</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-xs">
              Empowering Maharashtra&apos;s youth to serve the state through expert coaching, comprehensive study material and proven results since 2010.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  title={s.label}
                  className={`w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-sm transition-colors ${s.color}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-bold mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-gray-800 rounded-2xl p-6 mb-10">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1">
              <h4 className="text-white font-bold text-lg mb-1">📬 Subscribe to MPSC Newsletter</h4>
              <p className="text-gray-400 text-sm">Get exam notifications, current affairs and study tips directly in your inbox</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
              />
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
          <div>© 2025 MPSC Guru. All rights reserved. | Maharashtra, India</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
