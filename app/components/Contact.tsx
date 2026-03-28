"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", exam: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mt-2 mb-3">Contact Us / Free Counselling</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Not sure which course to choose? Our expert counsellors will guide you for free!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Thank You!</h3>
                <p className="text-gray-500">Our counsellor will call you within 24 hours. Best wishes for your MPSC preparation!</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Submit Another Query
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-bold text-xl text-blue-900 mb-6">📞 Request a Free Callback</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Rahul Patil"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                      <input
                        required
                        type="tel"
                        placeholder="9876543210"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="rahul@example.com"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Exam Interested In *</label>
                    <select
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 bg-white"
                      value={form.exam}
                      onChange={(e) => setForm({ ...form, exam: e.target.value })}
                    >
                      <option value="">Select an exam</option>
                      <option>MPSC State Services</option>
                      <option>MPSC PSI / STI / ASO</option>
                      <option>MPSC Group B</option>
                      <option>MPSC Group C</option>
                      <option>Talathi Exam</option>
                      <option>Maharashtra Police Bharti</option>
                      <option>Foundation Course</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Your Query (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your preparation background or any specific questions..."
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 resize-none"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 rounded-xl transition-colors shadow-md"
                  >
                    Request Free Counselling →
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    We respect your privacy. Your information will never be shared.
                  </p>
                </form>
              </>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-lg text-blue-900 mb-4">📍 Our Centers</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-gray-800 text-sm">Pune (Main Center)</div>
                  <div className="text-gray-500 text-sm">123, Shivaji Nagar, Near FC Road, Pune - 411005</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm">Mumbai Center</div>
                  <div className="text-gray-500 text-sm">456, Dadar West, Near Shivaji Park, Mumbai - 400028</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm">Nagpur Center</div>
                  <div className="text-gray-500 text-sm">78, Sitabuldi, Main Road, Nagpur - 440012</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="text-2xl mb-2">📞</div>
                <div className="font-bold text-gray-900 text-sm mb-1">Call Us</div>
                <div className="text-orange-600 font-semibold">1800-XXX-XXXX</div>
                <div className="text-gray-400 text-xs mt-1">Mon-Sat, 8am-8pm</div>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="text-2xl mb-2">✉️</div>
                <div className="font-bold text-gray-900 text-sm mb-1">Email Us</div>
                <div className="text-orange-600 font-semibold text-sm">info@mpscguru.in</div>
                <div className="text-gray-400 text-xs mt-1">24hr response</div>
              </div>
              <div className="bg-green-500 rounded-xl p-5 text-white">
                <div className="text-2xl mb-2">💬</div>
                <div className="font-bold text-sm mb-1">WhatsApp</div>
                <div className="font-semibold text-sm">+91 98765-43210</div>
                <div className="text-green-100 text-xs mt-1">Quick replies</div>
              </div>
              <div className="bg-blue-900 rounded-xl p-5 text-white">
                <div className="text-2xl mb-2">📲</div>
                <div className="font-bold text-sm mb-1">Telegram</div>
                <div className="font-semibold text-sm">@MPSCGuruOfficial</div>
                <div className="text-blue-200 text-xs mt-1">Join 50K+ students</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
