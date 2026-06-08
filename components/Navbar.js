"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Why StarKiddo", href: "#why" },
    { label: "Courses", href: "#courses" },
    { label: "Age Groups", href: "#ages" },
    { label: "How It Works", href: "#how" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-brand flex items-center justify-center shadow-md">
              <span className="text-white font-black text-lg">S</span>
            </div>
            <span className="font-black text-xl text-brand-purple">
              Star<span className="text-brand-orange">Kiddo</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-gray-600 hover:text-brand-purple transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-brand-purple text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-brand-purple-dark transition-all shadow-md hover:shadow-brand-purple/30 hover:shadow-lg"
            >
              Enroll Now 🚀
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-2 pt-4 space-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-semibold text-gray-700 hover:text-brand-purple"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block bg-brand-purple text-white text-center px-5 py-2.5 rounded-full text-sm font-bold mt-2"
            >
              Enroll Now 🚀
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
