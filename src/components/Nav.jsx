import { useEffect, useState } from "react";
import {
  FiMenu,
  FiX,
  FiDownload,
} from "react-icons/fi";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  // ---- Track which section is currently in view ----
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // navbar height-এর জন্য offset, section-টা মাঝ বরাবর আসলে active ধরবে
        rootMargin: "-45% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header className="fixed left-0 top-0 z-50 w-full">
        <div
          className="
            w-full
            border-b border-white/10
            bg-[#0b0715]/80
            shadow-[0_10px_40px_rgba(0,0,0,0.25)]
            backdrop-blur-xl
            nav-glow
          "
        >
          {/* Container */}
          <div className="mx-auto flex h-[68px] w-full max-w-7xl items-center px-3 sm:px-5">

            {/* Logo */}
            <div className="flex flex-1 items-center">
              <a
                href="#home"
                className="group flex items-center gap-3"
              >
                {/* Logo Image */}
                <div className="w-30">
                    <img
                      src="/myLogo.png"
                      alt="Logo"
                      className="h-full w-full object-cover"
                    />
                </div>

              </a>
            </div>

            {/* Desktop Navigation */}
            <nav
              className="
                hidden items-center gap-1
                rounded-xl
                border border-white/5
                bg-white/[0.03]
                p-1
                lg:flex
              "
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`
                      rounded-lg px-4 py-2
                      text-xs font-medium
                      transition-all duration-300
                      ${
                        isActive
                          ? "bg-purple-500 text-white shadow-lg shadow-purple-500/20"
                          : "text-white/55 hover:bg-purple-500/10 hover:text-white"
                      }
                    `}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Side */}
            <div className="flex flex-1 items-center justify-end gap-2">

              {/* AI Status */}
              <div className="hidden items-center gap-2 sm:flex">
                <span
                  className="
                    h-1.5 w-1.5 rounded-full
                    bg-purple-400
                    shadow-[0_0_10px_rgba(168,85,247,0.9)]
                    animate-pulse
                  "
                />

                <span className="text-[9px] tracking-wider text-white/35">
                  AI SYSTEM ONLINE
                </span>
              </div>

              {/* Download CV */}
              <a
                href="/cv.pdf"
                download
                className="
                  hidden items-center gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-600
                  via-purple-500
                  to-fuchsia-500
                  px-4 py-2.5
                  text-xs font-semibold text-white
                  shadow-lg shadow-purple-500/20
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:shadow-purple-500/40
                  sm:flex
                "
              >
                Download CV

                <FiDownload
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>

              {/* Mobile Menu */}
              <button
                onClick={() => setIsOpen(true)}
                className="
                  btn btn-ghost btn-square btn-sm
                  rounded-xl
                  border border-white/10
                  bg-white/[0.03]
                  text-white
                  lg:hidden
                "
                aria-label="Open menu"
              >
                <FiMenu size={21} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE SIDEBAR ================= */}

      <div
        className={`
          fixed inset-0 z-[100]
          lg:hidden
          transition-all duration-300
          ${
            isOpen
              ? "visible bg-black/50 opacity-100 backdrop-blur-sm"
              : "invisible bg-transparent opacity-0"
          }
        `}
        onClick={() => setIsOpen(false)}
      >
        <aside
          onClick={(e) => e.stopPropagation()}
          className={`
            absolute left-0 top-0
            h-full w-[80%] max-w-sm
            border-r border-purple-500/20
            bg-[#090611]
            shadow-[20px_0_60px_rgba(0,0,0,0.5)]
            transition-transform duration-500
            ${
              isOpen
                ? "translate-x-0"
                : "-translate-x-full"
            }
          `}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between border-b border-white/10 p-5">

            <div className="flex items-center gap-3">
              <div className="w-25">
                    <img
                      src="/myLogo.png"
                      alt="Logo"
                      className="h-full w-full object-cover"
                    />
                </div>

              
            </div>

            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="
                btn btn-ghost btn-square btn-sm
                rounded-xl
                text-white/70
                hover:bg-red-500/10
                hover:text-white
              "
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Sidebar Links */}
          <nav className="flex flex-col gap-2 p-5">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    group flex items-center justify-between
                    rounded-xl
                    border border-transparent
                    px-4 py-3.5
                    text-sm
                    transition-all duration-300
                    ${
                      isActive
                        ? "border-purple-500/20 bg-purple-500/10 text-white"
                        : "text-white/55 hover:border-purple-500/20 hover:bg-purple-500/10 hover:text-white"
                    }
                  `}
                >
                  <span>{link.name}</span>

                  <span className="text-[10px] text-white/20 transition-colors group-hover:text-purple-400">
                    0{index + 1}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Sidebar Bottom */}
          <div className="absolute bottom-6 left-5 right-5">

            <div className="mb-4 text-[9px] uppercase tracking-[3px] text-white/20">
              AI • ML • Robotics • 3D
            </div>

            <a
              href="/cv.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="
                flex w-full items-center justify-center gap-2
                rounded-xl
                bg-gradient-to-r
                from-violet-600
                via-purple-500
                to-fuchsia-500
                px-4 py-3
                text-sm font-semibold text-white
                shadow-lg shadow-purple-500/20
                transition-all duration-300
                hover:shadow-purple-500/40
              "
            >
              Download CV
              <FiDownload size={15} />
            </a>
          </div>

          {/* Decorative Glow */}
          <div
            className="
              pointer-events-none
              absolute -right-20 top-20
              h-60 w-60
              rounded-full
              bg-purple-600/10
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute bottom-20 -left-20
              h-60 w-60
              rounded-full
              bg-fuchsia-600/10
              blur-3xl
            "
          />
        </aside>
      </div>
    </>
  );
};

export default Nav;