const education = [
  {
    degree: "B.Tech",
    institution: "KKR and KSR Institute of Technology and Sciences",
    location: "Guntur, Andhra Pradesh",
    period: "Expected 2027",
    status: "Currently Pursuing",
    featured: true,
  },
  {
    degree: "Intermediate",
    institution: "Sri Chaitanya Jr. College",
    location: "Guntur, Andhra Pradesh",
    period: "2023",
    status: "Completed",
    featured: false,
  },
  {
    degree: "SSC",
    institution: "Sarojini Vidyalayam",
    location: "Guntur, Andhra Pradesh",
    period: "2021",
    status: "Completed",
    featured: false,
  },
];

function Education() {
  return (
    <section
      id="Education"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
            Education
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl">
            Building a strong foundation for technology and innovation.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            My academic journey and the educational foundation supporting my
            interests in artificial intelligence, quantum computing, and
            emerging technologies.
          </p>
        </div>

        {/* Education timeline */}
        <div className="mt-14 space-y-6">
          {education.map((item) => (
            <div
              key={`${item.degree}-${item.institution}`}
              className="group rounded-3xl border border-white/10 bg-zinc-900/50 p-8 transition hover:border-white/20 md:p-10"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                
                {/* Main information */}
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        item.featured
                          ? "border border-blue-400/20 bg-blue-400/10 text-blue-300"
                          : "border border-white/10 bg-white/5 text-zinc-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-bold md:text-3xl">
                    {item.degree}
                  </h3>

                  <p className="mt-2 text-lg font-medium text-blue-400">
                    {item.institution}
                  </p>

                  <p className="mt-2 text-sm text-zinc-500">
                    {item.location}
                  </p>
                </div>

                {/* Year */}
                <div className="shrink-0">
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300">
                    {item.period}
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

export default Education;