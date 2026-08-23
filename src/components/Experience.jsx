const experiences = [
{
  role: "Quantum Systems Engineer Intern",
  company: "Blackbucks Education Pvt. Ltd.",
  type: "8-Week Internship",
  period: "Jun 2026 – Jul 2026",
  description:
    "Successfully completed an 8-week internship focused on Quantum Systems Engineering, participating in structured training, practical assignments, and project-based learning to develop hands-on, industry-relevant technical skills.",
  technologies: [
    "Quantum Computing",
    "Quantum Systems",
    "Python",
    "Qiskit",
    "Project-Based Learning",
  ],
  featured: true,
},
  {
    role: "AI + Quantum Optimization Program",
    company: "WISER Summer Program 2026",
    type: "Industry Program",
    period: "2026",
    description:
      "Developed a hybrid AI and quantum optimization solution for Distributed Order Management, combining machine learning, classical optimization, QUBO formulation, QAOA, and hybrid quantum solvers.",
    technologies: [
      "AI",
      "Quantum Computing",
      "QUBO",
      "QAOA",
      "Qiskit",
      "PennyLane",
      "Python",
    ],
  },
];

function Experience() {
  return (
    <section
      id="Experience"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
            Experience
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Turning curiosity into practical technical experience.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            My experience spans quantum computing, artificial intelligence,
            optimization, and hands-on technical projects.
          </p>
        </div>

        {/* Experience cards */}
        <div className="mt-12 space-y-6">
          {experiences.map((experience) => (
            <div
              key={`${experience.company}-${experience.role}`}
              className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 transition hover:border-white/20 md:p-10"
            >
              <div className="flex flex-col gap-8 md:flex-row md:justify-between">

                {/* Main information */}
                <div className="max-w-3xl">

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-300">
                      {experience.type}
                    </span>

                    {experience.featured && (
                      <span className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-xs font-medium text-purple-300">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 text-2xl font-bold md:text-3xl">
                    {experience.role}
                  </h3>

                  <div className="mt-2 text-lg font-medium text-blue-400">
                    {experience.company}
                  </div>

                  <p className="mt-6 leading-7 text-zinc-400">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Period */}
                <div className="shrink-0">
                  <span className="text-sm font-medium text-zinc-500">
                    {experience.period}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;