export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-brand-purple/10 text-brand-purple px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <span>✨</span> Cairo&apos;s #1 Kids Tech Academy
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6">
            <span className="text-gradient">Unlock</span> Your{" "}
            <span className="text-gradient-yellow">Child&apos;s</span>
            <br />
            Superpower 🤖
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Fun, hands-on <strong>AI & Robotics</strong> courses for kids aged 5–16 in Cairo.
            We turn curious kids into tomorrow&apos;s innovators — no experience needed!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="bg-gradient-brand text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-brand-purple/40 hover:scale-105 transition-all duration-200 text-center"
            >
              Start the Journey 🚀
            </a>
            <a
              href="#courses"
              className="bg-white border-2 border-brand-purple text-brand-purple px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-purple/5 transition-all text-center"
            >
              View Courses
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-12 flex gap-8 justify-center lg:justify-start">
            {[
              { value: "500+", label: "Kids Enrolled" },
              { value: "12+", label: "Courses" },
              { value: "5–16", label: "Age Range" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-black text-brand-purple">{s.value}</div>
                <div className="text-xs font-semibold text-gray-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Illustration */}
        <div className="relative flex justify-center items-center">
          {/* Main robot SVG */}
          <div className="animate-float">
            <svg viewBox="0 0 400 420" className="w-72 sm:w-96 drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
              {/* Body */}
              <rect x="110" y="180" width="180" height="160" rx="30" fill="#7C3AED" />
              {/* Belly screen */}
              <rect x="140" y="210" width="120" height="80" rx="12" fill="#A78BFA" />
              <circle cx="165" cy="240" r="8" fill="#FCD34D" />
              <circle cx="200" cy="240" r="8" fill="#06B6D4" />
              <circle cx="235" cy="240" r="8" fill="#EC4899" />
              <rect x="150" y="265" width="100" height="12" rx="6" fill="#7C3AED" />
              {/* Head */}
              <rect x="130" y="90" width="140" height="110" rx="28" fill="#5B21B6" />
              {/* Eyes */}
              <circle cx="170" cy="135" r="22" fill="white" />
              <circle cx="230" cy="135" r="22" fill="white" />
              <circle cx="175" cy="135" r="12" fill="#06B6D4" />
              <circle cx="235" cy="135" r="12" fill="#06B6D4" />
              <circle cx="179" cy="131" r="5" fill="#0C0C0C" />
              <circle cx="239" cy="131" r="5" fill="#0C0C0C" />
              <circle cx="183" cy="128" r="2" fill="white" />
              <circle cx="243" cy="128" r="2" fill="white" />
              {/* Mouth */}
              <path d="M 175 168 Q 200 185 225 168" stroke="#FCD34D" strokeWidth="4" fill="none" strokeLinecap="round" />
              {/* Antenna */}
              <line x1="200" y1="90" x2="200" y2="55" stroke="#FCD34D" strokeWidth="4" strokeLinecap="round" />
              <circle cx="200" cy="48" r="10" fill="#FCD34D" />
              <circle cx="200" cy="48" r="5" fill="#F59E0B" />
              {/* Ears */}
              <rect x="88" y="115" width="42" height="50" rx="12" fill="#5B21B6" />
              <rect x="270" y="115" width="42" height="50" rx="12" fill="#5B21B6" />
              <rect x="96" y="125" width="26" height="30" rx="8" fill="#A78BFA" />
              <rect x="278" y="125" width="26" height="30" rx="8" fill="#A78BFA" />
              {/* Arms */}
              <rect x="55" y="185" width="55" height="30" rx="15" fill="#7C3AED" />
              <circle cx="55" cy="200" r="18" fill="#5B21B6" />
              <rect x="290" y="185" width="55" height="30" rx="15" fill="#7C3AED" />
              <circle cx="345" cy="200" r="18" fill="#5B21B6" />
              {/* Legs */}
              <rect x="135" y="330" width="50" height="70" rx="18" fill="#5B21B6" />
              <rect x="215" y="330" width="50" height="70" rx="18" fill="#5B21B6" />
              <rect x="128" y="380" width="64" height="20" rx="10" fill="#4C1D95" />
              <rect x="208" y="380" width="64" height="20" rx="10" fill="#4C1D95" />
            </svg>
          </div>

          {/* Floating badges */}
          <div className="absolute top-4 right-4 bg-brand-yellow text-gray-800 px-4 py-2 rounded-2xl font-black text-sm shadow-lg animate-float-slow">
            🤖 Robotics
          </div>
          <div className="absolute bottom-16 left-0 bg-brand-cyan text-white px-4 py-2 rounded-2xl font-black text-sm shadow-lg animate-float" style={{ animationDelay: "1s" }}>
            🧠 AI Skills
          </div>
          <div className="absolute top-1/2 right-0 bg-brand-pink text-white px-4 py-2 rounded-2xl font-black text-sm shadow-lg animate-float-slow" style={{ animationDelay: "0.5s" }}>
            💻 Coding
          </div>

          {/* Stars */}
          <div className="absolute top-12 left-8 text-brand-yellow text-3xl animate-spin-slow">⭐</div>
          <div className="absolute bottom-8 right-8 text-brand-purple text-2xl animate-spin-slow" style={{ animationDelay: "2s" }}>✦</div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#F5F3FF" />
        </svg>
      </div>
    </section>
  );
}
