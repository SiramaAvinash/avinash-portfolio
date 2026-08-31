const certifications = [
  {
    title: "Quantum Fundamentals",
    organization: "Amaravati Quantum Valley × Qubitech × WISER",
    year: "2026",
    duration: "4 Weeks",
    category: "Quantum Computing",
    description:
      "Completed a foundational program focused on quantum computing concepts and emerging quantum technologies.",
    file: "/certificates/Quantum_phase1.pdf",
  },
  {
    title: "Quantum Algorithm Fundamentals and Hands-on Training",
    organization: "Amaravati Quantum Valley × Qubitech × WISER",
    year: "2026",
    duration: "6 Weeks",
    category: "Quantum Computing",
    description:
      "Completed hands-on training focused on quantum algorithms, practical quantum computing concepts, and foundational algorithmic techniques.",
    file: "/certificates/Quantum_phase2.pdf",
  },
  {
    title: "Summer Program 2026: What is the Future of Optimization?",
    organization: "WISER",
    year: "2026",
    duration: "Summer Program",
    category: "AI + Quantum",
    description:
      "Explored the future of optimization through classical computing, artificial intelligence, and quantum computing.",
    file: "/certificates/Quantum_phase3.pdf",
  },
  {
  title: "Quantum Systems Engineer Internship",
  organization: "Blackbucks Education Pvt. Ltd.",
  year: "2026",
  duration: "8 Weeks",
  category: "Quantum Computing",
  description:
    "Successfully completed an 8-week Short-Term Internship in Quantum Systems Engineering, involving structured training, practical assignments, and project-based learning.",
  file: "/certificates/Quantum_blackbucks.pdf",
},
];

function Certifications() {
  return (
    <section
      id="Certifications"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        
        {/* Section Heading */}
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
            Certifications
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Continuous learning in AI and quantum computing.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            A collection of certifications and learning programs that represent
            my journey across quantum computing, optimization, artificial
            intelligence, and emerging technologies.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certificate) => (
            <div
              key={certificate.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 transition hover:border-blue-400/30"
            >
              {/* Certificate Preview */}
              <div className="relative h-52 overflow-hidden border-b border-white/10 bg-zinc-950">
                <iframe
                  src={certificate.file}
                  title={certificate.title}
                  className="h-full w-full scale-125 origin-top pointer-events-none"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />

                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-300 backdrop-blur">
                    {certificate.category}
                  </span>
                </div>
              </div>

              {/* Certificate Information */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-zinc-500">
                    {certificate.year}
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                    {certificate.duration}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold leading-snug">
                  {certificate.title}
                </h3>

                <p className="mt-3 text-sm font-medium text-blue-400">
                  {certificate.organization}
                </p>

                <p className="mt-5 text-sm leading-7 text-zinc-400">
                  {certificate.description}
                </p>

                {/* View Certificate Button */}
                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-blue-400/40 hover:bg-blue-400/10"
                >
                  View Certificate
                  <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;