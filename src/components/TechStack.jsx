const skillGroups = [
  {
    title: "Programming",
    description: "Core programming and problem-solving foundations.",
    skills: ["Python", "C", "C++", "JavaScript", "SQL"],
  },
  {
    title: "AI & Machine Learning",
    description: "Building predictive and intelligent systems.",
    skills: [
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Random Forest",
      "Feature Engineering",
      "Data Processing",
    ],
  },
  {
    title: "Quantum Computing",
    description: "Exploring quantum algorithms and optimization.",
    skills: [
      "Qiskit",
      "PennyLane",
      "QUBO",
      "QAOA",
      "Quantum Algorithms",
      "Hybrid Optimization",
    ],
  },
  {
    title: "Optimization",
    description: "Classical and quantum approaches to complex problems.",
    skills: [
      "Linear Programming",
      "Constraint Optimization",
      "Combinatorial Optimization",
      "Classical Solvers",
      "Quantum Optimization",
    ],
  },
  {
    title: "Development",
    description: "Tools and technologies used to build applications.",
    skills: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Streamlit",
      "REST APIs",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Tools & Platforms",
    description: "Platforms used for experimentation and deployment.",
    skills: [
      "VS Code",
      "Jupyter",
      "Qiskit Aer",
      "Vercel",
      "Linux",
      "Google Colab",
    ],
  },
];

function TechStack() {
  return (
    <section
      id="Skills"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
            Tech Stack
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Technologies I use to build and experiment.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            A combination of programming, artificial intelligence,
            quantum computing, optimization, and modern development
            technologies.
          </p>
        </div>

        {/* Skill groups */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group rounded-2xl border border-white/10 bg-zinc-900/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-zinc-900/70"
            >

              <h3 className="text-xl font-semibold">
                {group.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-zinc-300 transition group-hover:border-blue-500/20 group-hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default TechStack;