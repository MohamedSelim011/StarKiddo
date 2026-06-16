export default function SummerCamp() {
  const activities = [
    { icon: "🤖", label: "Robotics" },
    { icon: "🧠", label: "AI Activities" },
    { icon: "💻", label: "Programming" },
    { icon: "🔬", label: "STEM Challenges" },
    { icon: "🎨", label: "Creative Projects" },
    { icon: "🏆", label: "Team Competitions" },
  ];

  return (
    <section id="summer-camp" className="py-0 overflow-hidden">
      {/* Banner strip */}
      <div className="bg-brand-yellow px-4 py-16 relative overflow-hidden">
        {/* Decorative background dots */}
        <div className="absolute inset-0 opacity-10">
          {["top-8 left-1/4", "top-4 right-1/3", "bottom-6 left-1/3", "top-1/2 right-1/4"].map((pos, i) => (
            <span key={i} className={`absolute ${pos} text-brand-purple text-4xl`}>✦</span>
          ))}
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Live badge */}
          <div className="inline-flex items-center gap-2 bg-brand-purple text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-yellow"></span>
            </span>
            LIVE NOW — Enroll Today!
          </div>

          <h2 className="text-5xl sm:text-6xl font-display text-brand-purple mb-3 leading-tight">
            StarKiddo Summer Camp
          </h2>

          <div className="inline-block bg-brand-purple text-white px-8 py-2.5 rounded-full text-xl font-bold mb-6 shadow-md">
            Build. Learn. Create.
          </div>

          <p className="text-brand-purple-dark text-lg font-semibold mb-2">
            🤖 Robotics &nbsp;•&nbsp; AI &nbsp;•&nbsp; Coding &nbsp;•&nbsp; STEM
          </p>

          <p className="text-brand-purple/80 text-base mb-10 max-w-2xl mx-auto leading-relaxed">
            An exciting summer filled with hands-on tech adventures designed to inspire
            the next generation of innovators. For Young Innovators & Future Tech Leaders!
          </p>

          {/* Activity chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {activities.map((a) => (
              <div
                key={a.label}
                className="flex items-center gap-2 bg-white/70 text-brand-purple-dark px-4 py-2 rounded-full text-sm font-bold shadow-sm"
              >
                <span>{a.icon}</span> {a.label}
              </div>
            ))}
          </div>

          {/* Details grid */}
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
            {[
              { icon: "📅", label: "Camp Duration", value: "July 1 – August 15, 2026" },
              { icon: "📍", label: "Venue", value: "Gateway International Montessori School" },
              { icon: "👦👧", label: "For", value: "Young Innovators, Ages 5–16" },
            ].map((d) => (
              <div key={d.label} className="bg-white/60 backdrop-blur rounded-2xl px-4 py-4 text-left shadow-sm">
                <div className="text-2xl mb-1">{d.icon}</div>
                <div className="text-xs font-bold text-brand-purple/60 uppercase tracking-wider mb-0.5">{d.label}</div>
                <div className="text-sm font-bold text-brand-purple">{d.value}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdRB9S-_X-mZt9hT78rVF5I-exOko38JWwUYbvIvMoat15Ugw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-purple text-white px-12 py-5 rounded-full text-xl font-black shadow-xl hover:bg-brand-purple-dark hover:scale-105 transition-all duration-200 mb-4"
          >
            🎟️ Register Now — Limited Seats!
          </a>

          {/* Contact row */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-brand-purple mt-6">
            <a href="tel:+201009959112" className="flex items-center gap-1.5 hover:text-brand-purple-dark transition-colors">
              📞 +20 10 09959112
            </a>
            <a href="mailto:info@starkiddoapp.com" className="flex items-center gap-1.5 hover:text-brand-purple-dark transition-colors">
              📧 info@starkiddoapp.com
            </a>
            <a href="https://instagram.com/StarkiddoApp" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-brand-purple-dark transition-colors">
              📸 @StarkiddoApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
