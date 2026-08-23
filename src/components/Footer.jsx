function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        
        {/* Name */}
        <div className="text-center md:text-left">
          <p className="font-semibold text-white">
            Avinash Sirama
          </p>

          <p className="mt-1 text-sm text-zinc-500">
            AI • Quantum Computing • Optimization
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-5 text-sm text-zinc-400">
          <a
            href="#About"
            className="transition hover:text-white"
          >
            About
          </a>

          <a
            href="#Projects"
            className="transition hover:text-white"
          >
            Projects
          </a>

          <a
            href="#Experience"
            className="transition hover:text-white"
          >
            Experience
          </a>

          <a
            href="#Certifications"
            className="transition hover:text-white"
          >
            Certifications
          </a>

          <a
            href="#Contact"
            className="transition hover:text-white"
          >
            Contact
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-zinc-500">
          © {currentYear} Avinash Sirama
        </p>

      </div>
    </footer>
  );
}

export default Footer;