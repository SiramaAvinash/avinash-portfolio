import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pt-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 font-medium text-blue-400">
            AI • MACHINE LEARNING • QUANTUM COMPUTING
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Building intelligent systems for complex problems.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            I'm Sirama Avinash, a Computer Science student exploring
            Artificial Intelligence, Machine Learning, Quantum Computing,
            and optimization.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-600"
            >
              Explore My Work
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-zinc-700 px-6 py-3 font-medium transition hover:bg-zinc-900"
            >
              View Resume
            </a>
          </div>

          <div className="mt-8 flex gap-5">
            <a
              href="https://github.com/SiramaAvinash"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/avinash-sirama-187052389"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-blue-500/20 blur-3xl" />

            <img
              src="/profile.jpg"
              alt="Sirama Avinash"
              className="relative h-72 w-72 rounded-2xl object-cover grayscale transition duration-500 hover:grayscale-0 md:h-96 md:w-96"
            />
          </div>
        </motion.div>

      </div>

      <a
        href="#about"
        className="absolute bottom-8 animate-bounce text-zinc-400"
      >
        ↓
      </a>
    </section>
  );
}

export default Hero;