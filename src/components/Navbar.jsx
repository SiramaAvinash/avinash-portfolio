function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-bold tracking-wide"
        >
          AVINASH SIRAMA<span className="text-blue-400">.</span>
        </a>

        {/* Navigation */}
        <div className="hidden gap-6 text-sm text-zinc-400 md:flex">
          <a href="#About" className="transition hover:text-white">
            About
          </a>
          <a href="#Education" className="transition hover:text-white">
            Education
          </a>
          <a href="#Skills" className="transition hover:text-white">
            Skills
          </a>
          <a href="#Certifications" className="transition hover:text-white">
            Certifications
          </a>

          <a href="#Projects" className="transition hover:text-white">
            Projects
          </a>

          <a href="#Experience" className="transition hover:text-white">
            Experience
          </a>

          <a href="#Contact" className="transition hover:text-white">
            Contact
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-4 text-sm">
          <a
            href="https://github.com/SiramaAvinash"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/avinash-sirama-187052389"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 transition hover:text-white"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;