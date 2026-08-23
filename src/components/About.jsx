function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
            About Me
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Exploring the intersection of AI and Quantum Computing.
          </h2>
        </div>

        {/* Content */}
        <div className="mt-12 grid gap-12 md:grid-cols-2">

          {/* Left side */}
          <div>
            <p className="text-lg leading-8 text-zinc-400">
              I'm Sirama Avinash, a Computer Science student passionate
              about Artificial Intelligence, Machine Learning, Quantum
              Computing, and optimization.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              I enjoy understanding complex technical concepts and
              transforming them into practical solutions. My goal is to
              build intelligent systems that combine classical computing
              with emerging quantum technologies.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              My current work focuses on AI-driven decision making,
              optimization problems, quantum algorithms, and
              quantum-classical hybrid approaches.
            </p>
          </div>

          {/* Right side */}
          <div className="grid gap-4 sm:grid-cols-2">

            {/* Card 1 */}
            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 transition hover:-translate-y-1 hover:border-blue-500/40">
              <div className="mb-4 text-3xl">
                🤖
              </div>

              <h3 className="text-xl font-semibold">
                Artificial Intelligence
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Machine learning, prediction, data processing, and
                intelligent decision systems.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 transition hover:-translate-y-1 hover:border-blue-500/40">
              <div className="mb-4 text-3xl">
                ⚛️
              </div>

              <h3 className="text-xl font-semibold">
                Quantum Computing
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Quantum algorithms, QUBO, QAOA, and quantum-classical
                hybrid optimization.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 transition hover:-translate-y-1 hover:border-blue-500/40">
              <div className="mb-4 text-3xl">
                📊
              </div>

              <h3 className="text-xl font-semibold">
                Optimization
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Classical and quantum optimization approaches for
                solving complex real-world problems.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-6 transition hover:-translate-y-1 hover:border-blue-500/40">
              <div className="mb-4 text-3xl">
                🚀
              </div>

              <h3 className="text-xl font-semibold">
                Innovation
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Turning research ideas and emerging technologies into
                practical software and prototypes.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;