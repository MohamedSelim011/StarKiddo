"use client";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mqeoqarj");
  const [form, setForm] = useState({ name: "", phone: "", ageRange: "", message: "" });
  const [interests, setInterests] = useState({ AI: false, Coding: false, Robotics: false, STEM: false });

  const toggleInterest = (key) => setInterests((prev) => ({ ...prev, [key]: !prev[key] }));

  const ageRanges = ["5 – 7 years", "8 – 10 years", "11 – 13 years", "14 – 16 years"];
  const interestOptions = [
    { key: "AI", icon: "🧠", label: "AI" },
    { key: "Coding", icon: "💻", label: "Coding" },
    { key: "Robotics", icon: "🤖", label: "Robotics" },
    { key: "STEM", icon: "🔬", label: "STEM" },
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
              {[
                { label: "Facebook", href: "#", icon: "f" },
                { label: "Instagram", href: "#", icon: "ig" },
                { label: "WhatsApp", href: "#", icon: "wa" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-11 h-11 rounded-2xl bg-brand-purple text-white flex items-center justify-center font-black text-sm hover:bg-brand-purple-dark transition-colors"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
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
