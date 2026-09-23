import {
  FiArrowUp,
  FiCpu,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiCode,
  FiActivity,
} from "react-icons/fi";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden px-4 pb-6 pt-20 sm:px-6 lg:px-8">
      {/* =====================================================
          AMBIENT GLOWS
      ===================================================== */}
      <div className="pointer-events-none absolute bottom-0 left-[10%] h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-[10%] h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-52 w-52 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            TOP CTA / IDENTITY
        ===================================================== */}
        <div
          className="
            relative overflow-hidden
            rounded-3xl
            border border-white/10
            bg-white/[0.025]
            px-6 py-10
            backdrop-blur-xl
            sm:px-10 sm:py-12
          "
        >
          {/* Top glowing line */}
          <div className="absolute left-[10%] right-[10%] top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />

          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-purple-600/10 blur-[90px]" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">

            {/* Identity */}
            <div className="text-center md:text-left">

              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/15 bg-purple-500/[0.05] px-3 py-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.9)]" />

                <span className="text-[9px] uppercase tracking-[2.5px] text-white/35">
                  AI System Online
                </span>
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Sharafat Alam Saki
                <span className="text-purple-400">.</span>
              </h2>

              <p className="mt-2 text-xs text-white/30">
                Machine Learning Engineer · AI Developer
              </p>

            </div>

            {/* Back to top */}
            <a
              href="#home"
              className="
                group flex items-center gap-3
                rounded-xl
                border border-purple-400/15
                bg-purple-500/[0.05]
                px-5 py-3
                text-xs font-medium text-white/60
                backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-1
                hover:border-purple-400/30
                hover:bg-purple-500/10
                hover:text-white
              "
            >
              Back to top

              <span
                className="
                  flex h-7 w-7 items-center justify-center
                  rounded-lg
                  bg-purple-500/10
                  text-purple-400
                  transition-transform duration-300
                  group-hover:-translate-y-1
                "
              >
                <FiArrowUp size={14} />
              </span>
            </a>

          </div>
        </div>

        {/* =====================================================
            MAIN FOOTER GRID
        ===================================================== */}
        <div className="grid gap-10 py-12 md:grid-cols-[1.4fr_0.7fr_0.9fr]">

          {/* =================================================
              BRAND
          ================================================= */}
          <div>

            <div className="flex items-center gap-3">

              {/* Logo */}


              <div className="w-30">
                    <img
                      src="/myLogo.png"
                      alt="Logo"
                      className="h-full w-full object-cover"
                    />
                </div>

            </div>

            <p className="mt-5 max-w-sm text-xs leading-6 text-white/30">
              Building intelligent systems with machine learning, deep
              learning and modern AI technologies.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-2">

              <a
                  href="https://github.com/MuhammadSharafat"
               
                aria-label="GitHub"
                className="
                  rounded-xl border border-white/10
                  bg-white/[0.025] p-3
                  text-white/35
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-purple-400/25
                  hover:bg-purple-500/10
                  hover:text-purple-400
                "
              >
                <FiGithub size={16} />
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-sharafat-alam-730450437/?skipRedirect=true"
                aria-label="LinkedIn"
                className="
                  rounded-xl border border-white/10
                  bg-white/[0.025] p-3
                  text-white/35
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-purple-400/25
                  hover:bg-purple-500/10
                  hover:text-purple-400
                "
              >
                <FiLinkedin size={16} />
              </a>

              <a
                href="mailto:muhammadsharafatalam@gmail.com"
                aria-label="Email"
                className="
                  rounded-xl border border-white/10
                  bg-white/[0.025] p-3
                  text-white/35
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-purple-400/25
                  hover:bg-purple-500/10
                  hover:text-purple-400
                "
              >
                <FiMail size={16} />
              </a>

            </div>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================= */}
          <div>

            <div className="mb-5 flex items-center gap-2">
              <FiCode
                size={13}
                className="text-purple-400/70"
              />

              <h4 className="text-[10px] uppercase tracking-[2px] text-white/40">
                Navigation
              </h4>
            </div>

            <nav className="flex flex-col gap-3">

              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="
                    group flex w-fit items-center gap-2
                    text-xs text-white/30
                    transition-all duration-300
                    hover:translate-x-1
                    hover:text-purple-300
                  "
                >
                  <span className="text-[8px] text-purple-400/30 transition-colors group-hover:text-purple-400">
                    0{index + 1}
                  </span>

                  {link.name}
                </a>
              ))}

            </nav>
          </div>

          {/* =================================================
              SYSTEM INFO
          ================================================= */}
          <div>

            <div className="mb-5 flex items-center gap-2">
              <FiCpu
                size={13}
                className="text-purple-400/70"
              />

              <h4 className="text-[10px] uppercase tracking-[2px] text-white/40">
                System
              </h4>
            </div>

            <div className="space-y-3">

              <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5">
                <span className="text-[9px] text-white/25">
                  AI Engine
                </span>

                <span className="flex items-center gap-1.5 text-[9px] text-purple-300/60">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400" />
                  Online
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5">
                <span className="text-[9px] text-white/25">
                  Availability
                </span>

                <span className="text-[9px] text-white/40">
                  Open
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5">
                <span className="text-[9px] text-white/25">
                  Response
                </span>

                <span className="text-[9px] text-white/40">
                  &lt; 24h
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* =====================================================
            BOTTOM DIVIDER
        ===================================================== */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* =====================================================
            COPYRIGHT BAR
        ===================================================== */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">

          <p className="text-[9px] text-white/20">
            © {new Date().getFullYear()} Sharafat Alam Saki. All rights reserved.
          </p>

          <div className="flex items-center gap-2">

            <FiActivity
              size={11}
              className="text-purple-400/50"
            />

            <span className="text-[9px] uppercase tracking-[1.5px] text-white/20">
              Designed & Built with AI
            </span>

          </div>

          <div className="flex items-center gap-1.5 text-[9px] text-white/20">
            <span>ML</span>
            <span className="text-purple-400/50">•</span>
            <span>AI</span>
            <span className="text-purple-400/50">•</span>
            <span>Deep Learning</span>
          </div>

        </div>

        {/* Bottom glow */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-20 w-[60%] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[80px]" />

      </div>
    </footer>
  );
};

export default Footer;