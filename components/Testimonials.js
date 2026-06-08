const testimonials = [
  {
    quote:
      "My daughter was so shy before StarKiddo. Now she confidently presents her robot projects and talks about AI like a pro. Best decision we made!",
    name: "Nour's Mom",
    role: "Parent of 10-year-old student",
    avatar: "N",
    color: "bg-brand-purple text-white",
  },
  {
    quote:
      "My son built a line-following robot in just 3 weeks. He wakes up excited for class every Saturday. The instructors make everything so fun and clear.",
    name: "Omar's Dad",
    role: "Parent of 8-year-old student",
    avatar: "O",
    color: "bg-brand-cyan text-white",
  },
  {
    quote:
      "I love building things with my hands and learning about AI. My favorite project was training a model to recognize my drawings!",
    name: "Lena",
    role: "StarKiddo student, age 13",
    avatar: "L",
    color: "bg-brand-pink text-white",
  },
  {
    quote:
      "StarKiddo prepared our team for WRO. We qualified for nationals in our first year! The competition prep course is incredibly well-structured.",
    name: "Karim's Parent",
    role: "Parent of competition student",
    avatar: "K",
    color: "bg-brand-orange text-white",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 bg-[#F5F3FF]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-yellow/30 text-yellow-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            ⭐ Happy Families
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            What Parents & Kids Say
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Don&apos;t just take our word for it — hear from the StarKiddo community.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 card-hover"
            >
              <div className="text-4xl text-brand-purple/30 font-black mb-4">&ldquo;</div>
              <p className="text-gray-700 leading-relaxed mb-6 text-base">{t.quote}</p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center font-black text-lg`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-black text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Star rating */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-white border border-gray-100 shadow-sm px-6 py-3 rounded-full">
            <div className="flex text-brand-yellow text-xl">{"⭐".repeat(5)}</div>
            <span className="font-black text-gray-800">4.9/5</span>
            <span className="text-gray-500 text-sm">from 120+ parent reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
