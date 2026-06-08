export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Top CTA banner */}
      <div className="bg-gradient-brand py-14 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-black mb-3">
          Give Your Child the Skills of Tomorrow 🌟
        </h2>
        <p className="text-white/80 mb-6 text-lg">
          Limited spots available each term. Don&apos;t miss out!
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-brand-purple px-10 py-4 rounded-full font-black text-lg hover:bg-brand-yellow transition-colors shadow-xl"
        >
          Enroll Today — Free First Class! 🚀
        </a>
      </div>

      {/* Footer body */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-xl bg-gradient-brand flex items-center justify-center shadow-md">
              <span className="text-white font-black text-lg">S</span>
            </div>
            <span className="font-black text-xl">
              Star<span className="text-brand-yellow">Kiddo</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Cairo&apos;s leading AI & Robotics academy for kids aged 5–16.
            Building the innovators of tomorrow, one class at a time.
          </p>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-black text-sm uppercase tracking-wider text-gray-400 mb-4">Programs</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {["Robot Builders Jr.", "AI Explorer Camp", "Robotics Engineering", "AI & Data Science", "Competition Prep"].map((p) => (
              <li key={p}>
                <a href="#courses" className="hover:text-brand-yellow transition-colors">{p}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-black text-sm uppercase tracking-wider text-gray-400 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              { label: "Why StarKiddo", href: "#why" },
              { label: "Age Groups", href: "#ages" },
              { label: "How It Works", href: "#how" },
              { label: "Testimonials", href: "#testimonials" },
              { label: "Book Free Trial", href: "#contact" },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-brand-yellow transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-black text-sm uppercase tracking-wider text-gray-400 mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2"><span>📍</span> Cairo, Egypt</li>
            <li className="flex items-start gap-2"><span>📧</span> hello@starkiddo.com</li>
            <li className="flex items-start gap-2"><span>📱</span> +20 100 000 0000</li>
            <li className="flex items-start gap-2"><span>🕐</span> Sun–Thu 3–8PM, Fri–Sat 10AM–6PM</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-6 px-4 text-center text-gray-500 text-sm">
        © {year} StarKiddo. All rights reserved. Made with ❤️ in Cairo.
      </div>
    </footer>
  );
}
