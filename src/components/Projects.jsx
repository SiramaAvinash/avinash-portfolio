const projects = [
  {
    title: "Quantum Optimization for Distributed Order Management",
    category: "AI + Quantum Computing",
    description:
      "A hybrid AI and quantum optimization system designed to improve distribution-center assignment and order fulfillment decisions under inventory, capacity, throughput, shipping-cost, and business constraints.",
    highlights: [
      "AI demand and inventory prediction",
      "Classical optimization benchmarking",
      "QUBO formulation",
      "QAOA-based quantum optimization",
      "Qiskit + PennyLane + hybrid solvers",
      "Business and performance evaluation",
    ],
    technologies: [
      "Python",
      "Qiskit",
      "PennyLane",
      "QUBO",
      "QAOA",
      "Scikit-learn",
      "Streamlit",
    ],
    featured: true,
  },
];

function Projects() {
  return (
    <section
      id="Projects"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
            Featured Project
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Building intelligent systems with AI and quantum optimization.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            A selection of projects exploring artificial intelligence,
            optimization, quantum computing, and real-world problem solving.
          </p>
        </div>

        {/* Featured project */}
        {projects.map((project) => (
          <div
            key={project.title}
            className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50"
          >
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">

              {/* Project visual */}
              <div className="relative min-h-[420px] overflow-hidden border-b border-white/10 bg-gradient-to-br from-blue-950/40 via-zinc-950 to-purple-950/30 p-8 lg:border-b-0 lg:border-r">
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute left-10 top-16 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
                  <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl" />
                </div>

                <div className="relative flex h-full flex-col justify-between">

                  <div>
                    <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-300">
                      Featured Project
                    </span>

                    <div className="mt-12">
                      <p className="text-sm uppercase tracking-widest text-zinc-500">
                        AI → Optimization → Quantum
                      </p>

                      <h3 className="mt-4 text-3xl font-bold md:text-4xl">
                        Nestlé Quantum DOM
                      </h3>
                    </div>
                  </div>

                  {/* Architecture visualization */}
                  <div className="mt-12 grid grid-cols-3 gap-3 text-center text-xs">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="text-lg">AI</div>
                      <p className="mt-1 text-zinc-500">
                        Prediction
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="text-lg">QUBO</div>
                      <p className="mt-1 text-zinc-500">
                        Formulation
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="text-lg">QAOA</div>
                      <p className="mt-1 text-zinc-500">
                        Optimization
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Project information */}
              <div className="p-8 md:p-10">

                <p className="text-sm font-medium text-blue-400">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold leading-tight">
                  {project.title}
                </h3>

                <p className="mt-6 leading-7 text-zinc-400">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mt-8">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                    What I built
                  </h4>

                  <ul className="mt-4 space-y-3">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm text-zinc-400"
                      >
                        <span className="mt-1 text-blue-400">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/SiramaAvinash/nestle-quantum-dom-wiser-2026"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
                  >
                    View GitHub →
                  </a>

                  <a
                    href="#contact"
                    className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
                  >
                    Discuss Project
                  </a>
                </div>

              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;