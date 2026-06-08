const courses = [
  {
    emoji: "🤖",
    title: "Robot Builders Jr.",
    ages: "5–8 yrs",
    level: "Beginner",
    levelColor: "bg-green-100 text-green-700",
    desc: "Kids assemble their first robot, learn basic sensors, and program simple movements using visual block coding.",
    duration: "8 weeks",
    gradient: "from-brand-purple to-brand-purple-light",
  },
  {
    emoji: "🧠",
    title: "AI Explorer Camp",
    ages: "9–12 yrs",
    level: "Intermediate",
    levelColor: "bg-blue-100 text-blue-700",
    desc: "Discover how AI sees, hears, and thinks. Build mini AI projects using machine learning tools and Python basics.",
    duration: "10 weeks",
    gradient: "from-brand-cyan-dark to-brand-cyan",
  },
  {
    emoji: "🚀",
    title: "Robotics Engineering",
    ages: "10–14 yrs",
    level: "Intermediate",
    levelColor: "bg-blue-100 text-blue-700",
    desc: "Design, build, and program advanced robots. Covers motors, sensors, Arduino, and autonomous navigation.",
    duration: "12 weeks",
    gradient: "from-brand-orange to-brand-yellow-dark",
  },
  {
    emoji: "💡",
    title: "AI & Data Science",
    ages: "13–16 yrs",
    level: "Advanced",
    levelColor: "bg-purple-100 text-purple-700",
    desc: "Dive deep into neural networks, data analysis, and real-world AI applications using Python and popular ML libraries.",
    duration: "14 weeks",
    gradient: "from-brand-pink to-brand-purple",
  },
  {
    emoji: "🌟",
    title: "Innovation Bootcamp",
    ages: "10–16 yrs",
    level: "All Levels",
    levelColor: "bg-yellow-100 text-yellow-700",
    desc: "An intensive project sprint where teams design and build an AI or robotics product from scratch — startup style.",
    duration: "4 weeks",
    gradient: "from-green-500 to-brand-cyan",
  },
  {
    emoji: "🎓",
    title: "Competition Prep",
    ages: "11–16 yrs",
    level: "Advanced",
    levelColor: "bg-red-100 text-red-700",
    desc: "Structured training for WRO, FLL, and national AI olympiads. Strategy, practice rounds, and technical mastery.",
    duration: "8 weeks",
    gradient: "from-brand-purple-dark to-brand-pink",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-cyan/10 text-brand-cyan-dark px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            📚 Our Programs
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Courses Built for Every Kid
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From first-time coders to future engineers — we have a track designed
            for every age and skill level.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <div
              key={c.title}
              className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm card-hover bg-white"
            >
              {/* Card header */}
              <div className={`bg-gradient-to-r ${c.gradient} p-6 text-white relative overflow-hidden`}>
                <div className="text-5xl mb-3">{c.emoji}</div>
                <h3 className="text-xl font-black mb-1">{c.title}</h3>
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <span>👶 Ages {c.ages}</span>
                  <span>•</span>
                  <span>⏱ {c.duration}</span>
                </div>
                {/* decorative circle */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full" />
              </div>

              {/* Card body */}
              <div className="p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${c.levelColor} mb-3`}>
                  {c.level}
                </span>
                <p className="text-gray-600 leading-relaxed text-sm">{c.desc}</p>
                <a
                  href="#contact"
                  className="mt-5 block text-center bg-gray-50 hover:bg-brand-purple hover:text-white text-gray-700 font-bold py-3 rounded-2xl text-sm transition-all duration-200"
                >
                  Enroll Now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
