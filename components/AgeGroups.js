const groups = [
  {
    range: "5–8",
    label: "Little Explorers",
    emoji: "🌱",
    color: "bg-green-50 border-green-200",
    accent: "text-green-700",
    badge: "bg-green-100 text-green-700",
    desc: "First steps into technology. Block-based coding, simple robots, and screen-free activities that spark curiosity and creativity.",
    skills: ["Block Coding", "Basic Robots", "Creative Thinking", "Screen-Free STEM"],
  },
  {
    range: "9–12",
    label: "Young Builders",
    emoji: "⚙️",
    color: "bg-blue-50 border-blue-200",
    accent: "text-blue-700",
    badge: "bg-blue-100 text-blue-700",
    desc: "Getting serious about tech. Introduction to Python, AI tools, electronics, and building their first real projects.",
    skills: ["Python Basics", "AI Tools", "Electronics", "Project Building"],
  },
  {
    range: "13–16",
    label: "Future Innovators",
    emoji: "🚀",
    color: "bg-purple-50 border-purple-200",
    accent: "text-purple-700",
    badge: "bg-purple-100 text-purple-700",
    desc: "Advanced engineering mindset. Machine learning, autonomous systems, competition prep, and real-world problem solving.",
    skills: ["Machine Learning", "Autonomous Robots", "Data Science", "Competitions"],
  },
];

export default function AgeGroups() {
  return (
    <section id="ages" className="py-24 px-4 bg-[#F5F3FF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            🎯 Age Tracks
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            A Path for Every Age
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our curriculum grows with your child — from playful first experiments
            to competition-ready engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {groups.map((g) => (
            <div
              key={g.range}
              className={`rounded-3xl border-2 ${g.color} p-8 card-hover relative overflow-hidden`}
            >
              <div className="text-5xl mb-4">{g.emoji}</div>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${g.badge} mb-3`}>
                Ages {g.range}
              </span>
              <h3 className={`text-2xl font-black ${g.accent} mb-3`}>{g.label}</h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">{g.desc}</p>

              <div className="space-y-2">
                {g.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <span className="text-brand-purple">✓</span> {skill}
                  </div>
                ))}
              </div>

              {/* Decorative */}
              <div className="absolute -bottom-6 -right-6 text-6xl opacity-10 font-black">{g.range}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
