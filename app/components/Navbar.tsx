"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  {
    label: "Courses",
    href: "#courses",
    children: [
      { label: "MPSC State Services", href: "#courses" },
      { label: "MPSC Group B (Non-Gazetted)", href: "#courses" },
      { label: "MPSC Group C (Clerk)", href: "#courses" },
      { label: "MPSC PSI / STI / ASO", href: "#courses" },
    ],
  },
  { label: "Study Material", href: "#study-material" },
  { label: "Test Series", href: "#test-series" },
  { label: "Current Affairs", href: "#current-affairs" },
  { label: "Toppers", href: "#toppers" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-blue-900 text-white text-sm py-2 px-4 hidden md:flex justify-between items-center">
        <span>📞 1800-XXX-XXXX &nbsp;|&nbsp; ✉️ info@mpscguru.in</span>
        <span className="flex gap-4">
          <a href="#" className="hover:text-orange-400 transition-colors">Login</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Register Free</a>
        </span>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-xl text-blue-900">MPSC Guru</div>
              <div className="text-xs text-orange-600 font-medium -mt-1">Maharashtra&apos;s Premier IAS/MPSC Academy</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className="px-3 py-2 text-sm font-semibold text-gray-700 hover:text-orange-600 rounded-md transition-colors flex items-center gap-1"
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#courses" className="bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow">
              Enroll Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-orange-600"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2.5 text-sm font-semibold text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <a href="#courses" className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors">
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
