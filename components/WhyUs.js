const reasons = [
  {
    icon: "🎮",
    title: "Learn by Playing",
    desc: "Every lesson is project-based. Kids build real robots and AI apps — not just watch videos.",
    color: "bg-brand-purple/10 text-brand-purple",
  },
  {
    icon: "👩‍🏫",
    title: "Expert Instructors",
    desc: "Our teachers are engineers & educators who specialize in making complex ideas simple and fun.",
    color: "bg-brand-cyan/10 text-brand-cyan-dark",
  },
  {
    icon: "🏆",
    title: "Competition Ready",
    desc: "We prepare kids for national and international robotics & AI competitions and olympiads.",
    color: "bg-brand-yellow/20 text-yellow-700",
  },
  {
    icon: "📍",
    title: "In-Person in Cairo",
    desc: "Real classroom energy. Kids collaborate face-to-face, building teamwork alongside tech skills.",
    color: "bg-brand-pink/10 text-brand-pink",
  },
  {
    icon: "🔬",
    title: "Real Equipment",
    desc: "Hands-on with actual robotics kits, sensors, and microcontrollers — not simulations.",
    color: "bg-brand-orange/10 text-brand-orange",
  },
  {
    icon: "📈",
    title: "Progress Tracking",
    desc: "Parents receive regular updates on their child's progress, projects, and achievements.",
    color: "bg-green-100 text-green-700",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="bg-[#F5F3FF] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-purple/10 text-brand-purple px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            💡 Why Choose Us
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Why StarKiddo?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re not just another coding class. We build confident, creative,
            future-ready kids through real technology education.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-white rounded-3xl p-8 card-hover border border-gray-100 shadow-sm"
            >
              <div className={`w-14 h-14 rounded-2xl ${r.color} flex items-center justify-center text-2xl mb-5`}>
                {r.icon}
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">{r.title}</h3>
              <p className="text-gray-600 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
