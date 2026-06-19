"use client";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mqeoqarj");
  const [form, setForm] = useState({ name: "", phone: "", ageRange: "", message: "" });
  const [interests, setInterests] = useState({ AI: false, Coding: false, Robotics: false });

  const toggleInterest = (key) => setInterests((prev) => ({ ...prev, [key]: !prev[key] }));

  const ageRanges = ["5 – 7 years", "8 – 10 years", "11 – 13 years", "14 – 16 years"];
  const interestOptions = [
    { key: "AI", icon: "🧠", label: "AI" },
    { key: "Coding", icon: "💻", label: "Coding" },
    { key: "Robotics", icon: "🤖", label: "Robotics" },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left info */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-purple/10 text-brand-purple px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              📬 Get In Touch
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Ready to Launch Your Child&apos;s{" "}
              <span className="text-gradient">Future?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Fill out the form and our team will reach out within 24 hours to
              schedule your free trial class and answer any questions.
            </p>

            <div className="space-y-5">
              {[
                { icon: "📍", label: "Location", value: "Cairo, Egypt" },
                { icon: "📧", label: "Email", value: "info@starkiddoapp.com" },
                { icon: "📱", label: "WhatsApp", value: "+201200055267" },
                { icon: "🕐", label: "Classes", value: "Weekdays & Weekends" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-brand-purple/10 rounded-2xl flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.label}</div>
                    <div className="font-semibold text-gray-800">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-10 flex gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/starkiddoapp?igsh=bmF3d282d2N0cnZx&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-2xl bg-brand-purple text-white flex items-center justify-center hover:bg-brand-purple-dark transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/message/S72M2EWCR5ACB1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-2xl bg-brand-purple text-white flex items-center justify-center hover:bg-brand-purple-dark transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1BP3PQnn5W/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-2xl bg-brand-purple text-white flex items-center justify-center hover:bg-brand-purple-dark transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#F5F3FF] rounded-3xl p-8 lg:p-10">
            {state.succeeded ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">You&apos;re In!</h3>
                <p className="text-gray-600">
                  Thanks for reaching out! We&apos;ll contact you within 24 hours to schedule your free trial.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-black text-gray-900 mb-6">Book a Free Trial 🚀</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Parent Name *</label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Child&apos;s Age Range *</label>
                    <select
                      required
                      name="ageRange"
                      value={form.ageRange}
                      onChange={(e) => setForm({ ...form, ageRange: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple bg-white"
                    >
                      <option value="">Select age range…</option>
                      {ageRanges.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Email *</label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple bg-white"
                  />
                  <ValidationError field="email" prefix="Email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">WhatsApp / Phone *</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="+20 1XX XXX XXXX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Interests *</label>
                  <div className="grid grid-cols-2 gap-2">
                    {interestOptions.map(({ key, icon, label }) => (
                      <label
                        key={key}
                        className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 cursor-pointer text-sm font-bold transition-all ${
                          interests[key]
                            ? "border-brand-purple bg-brand-purple/10 text-brand-purple"
                            : "border-gray-200 bg-white text-gray-600 hover:border-brand-purple/40"
                        }`}
                      >
                        <input
                          type="checkbox"
                          name={`interest_${key}`}
                          checked={interests[key]}
                          onChange={() => toggleInterest(key)}
                          className="hidden"
                        />
                        <span>{icon}</span> {label}
                        {interests[key] && <span className="ml-auto text-brand-purple">✓</span>}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Message (optional)</label>
                  <textarea
                    rows={3}
                    name="message"
                    placeholder="Any questions or notes…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple bg-white resize-none"
                  />
                </div>

                <ValidationError errors={state.errors} className="text-red-500 text-sm" />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-gradient-brand text-white py-4 rounded-2xl font-black text-base shadow-lg hover:shadow-brand-purple/30 hover:scale-[1.02] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {state.submitting ? "Sending…" : "Book My Free Trial 🎉"}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  No commitment required. We&apos;ll reach out within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
