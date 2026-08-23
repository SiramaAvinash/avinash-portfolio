function Contact() {
  return (
    <section
      id="Contact"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50">

          <div className="relative px-8 py-16 text-center md:px-16 md:py-24">

            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="absolute bottom-0 left-1/4 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-3xl">

              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
                Contact
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Let's build something interesting.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                I'm interested in opportunities, collaborations, and projects
                involving artificial intelligence, quantum computing,
                optimization, and emerging technologies.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap justify-center gap-4">

                <a
                 href="mailto:23jr1a05i2@gmail.com"
                    className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
                >
                Send an Email →
                </a>

                <a
                  href="https://www.linkedin.com/in/avinash-sirama-187052389"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="https://github.com/SiramaAvinash"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
                >
                  GitHub ↗
                </a>

              </div>

              {/* Availability */}
              <div className="mt-10 flex items-center justify-center gap-2 text-sm text-zinc-500">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Open to learning, collaboration, and new opportunities
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;