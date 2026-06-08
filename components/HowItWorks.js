const steps = [
  {
    step: "01",
    icon: "📋",
    title: "Choose a Course",
    desc: "Browse our programs and pick the right track based on your child's age and interests. Not sure? Contact us for a free consultation.",
  },
  {
    step: "02",
    icon: "🧪",
    title: "Free Trial Class",
    desc: "Your child attends one complimentary session so they can experience the magic of StarKiddo before any commitment.",
  },
  {
    step: "03",
    icon: "🚀",
    title: "Start Learning!",
    desc: "Join a small group class (max 10 kids), get your equipment kit, and start building amazing things from day one.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-pink/10 text-brand-pink px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            🗺️ The Process
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Getting started is simple. Three steps and your child is on their way
            to becoming a tech innovator.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-brand-purple/20" />

          {steps.map((s, i) => (
            <div key={s.step} className="relative text-center">
              {/* Step bubble */}
              <div className="relative inline-block mb-6">
                <div className="w-28 h-28 rounded-full bg-gradient-brand flex flex-col items-center justify-center text-white shadow-xl mx-auto">
                  <span className="text-3xl">{s.icon}</span>
                  <span className="text-xs font-black mt-1 opacity-80">STEP {s.step}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="md:hidden absolute top-1/2 -right-4 text-brand-purple/40 font-black">→</div>
                )}
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-block bg-gradient-brand text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-brand-purple/30 hover:scale-105 transition-all duration-200"
          >
            Book a Free Trial 🎉
          </a>
        </div>
      </div>
    </section>
  );
}
