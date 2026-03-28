const plans = [
  {
    name: "Free Plan",
    price: "₹0",
    period: "",
    color: "border-gray-200",
    headerColor: "bg-gray-50 text-gray-800",
    features: [
      "5 Free Mock Tests",
      "Basic Performance Report",
      "Marathi & English",
      "Mobile Access",
      null,
      null,
    ],
    cta: "Start Free",
    ctaStyle: "border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white",
  },
  {
    name: "Standard",
    price: "₹1,499",
    period: "/ 6 months",
    color: "border-orange-500",
    headerColor: "bg-gradient-to-br from-orange-500 to-orange-700 text-white",
    badge: "Most Popular",
    features: [
      "100+ Full Length Tests",
      "All Sectional Tests",
      "Detailed Answer Explanation",
      "Rank Among All Students",
      "Previous Year Paper Solutions",
      null,
    ],
    cta: "Enroll Now",
    ctaStyle: "bg-orange-600 hover:bg-orange-700 text-white",
  },
  {
    name: "Premium",
    price: "₹2,999",
    period: "/ 12 months",
    color: "border-blue-800",
    headerColor: "bg-gradient-to-br from-blue-800 to-blue-900 text-white",
    badge: "Best Value",
    features: [
      "200+ Full Length Tests",
      "All Sectional Tests",
      "Detailed Answer Explanation",
      "Rank + Detailed Analytics",
      "Live Discussion Sessions",
      "Personal Performance Mentor",
    ],
    cta: "Get Premium",
    ctaStyle: "bg-blue-900 hover:bg-blue-800 text-white",
  },
];

const testStats = [
  { value: "200+", label: "Total Tests" },
  { value: "10,000+", label: "Questions" },
  { value: "50,000+", label: "Test Takers" },
  { value: "98%", label: "Accuracy Rate" },
];

export default function TestSeries() {
  return (
    <section id="test-series" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Practice & Evaluate</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mt-2 mb-3">MPSC Mock Test Series</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Prepare with Maharashtra&apos;s largest online MPSC test series — designed by toppers and experts
          </p>
        </div>

        {/* Test stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {testStats.map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
              <div className="text-3xl font-extrabold text-orange-600 mb-1">{s.value}</div>
              <div className="text-gray-500 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 ${plan.color} flex flex-col relative`}
            >
              {plan.badge && (
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}
              <div className={`${plan.headerColor} p-6`}>
                <h3 className="text-xl font-extrabold mb-1">{plan.name}</h3>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-extrabold">{plan.price}</span>
                  <span className="text-sm opacity-75 mb-1">{plan.period}</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, i) => (
                    <li key={i} className={`flex items-center gap-2 text-sm ${f ? "text-gray-700" : "text-gray-300"}`}>
                      <span className={f ? "text-green-500 font-bold" : "text-gray-300"}>
                        {f ? "✓" : "✗"}
                      </span>
                      {f || "Not included"}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block w-full text-center font-bold py-3 rounded-xl transition-colors ${plan.ctaStyle}`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center text-gray-500 text-sm">
          All plans include access on mobile app and web browser. No hidden charges.
        </div>
      </div>
    </section>
  );
}
