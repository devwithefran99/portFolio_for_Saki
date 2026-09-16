import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiCpu,
  FiActivity,
  FiMessageSquare,
} from "react-icons/fi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* =====================================================
          AMBIENT BACKGROUND GLOW
      ===================================================== */}
      <div className="pointer-events-none absolute left-[5%] top-[20%] h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute right-[5%] top-[15%] h-80 w-80 rounded-full bg-violet-600/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-600/10 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-7xl">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}
        <div className="mb-14 text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/[0.05] px-3 py-1.5 backdrop-blur-xl">
            <FiMessageSquare
              size={13}
              className="text-purple-400"
            />

            <span className="text-[9px] uppercase tracking-[3px] text-white/40">
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let's Build Something
            <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              Intelligent.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-xs leading-6 text-white/30 sm:text-sm">
            Have an idea, project or opportunity? Let's turn your vision into
            a powerful AI-driven solution.
          </p>
        </div>

        {/* =====================================================
            MAIN CONTACT GRID
        ===================================================== */}
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">

          {/* =================================================
              LEFT — CONTACT INFO
          ================================================= */}
          <div className="relative">

            {/* Main glass card */}
            <div
              className="
                group relative h-full overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/[0.035]
                p-6
                backdrop-blur-xl
                transition-all duration-500
                hover:border-purple-400/20
                hover:shadow-[0_30px_80px_rgba(124,58,237,0.12)]
                sm:p-8
              "
            >

              {/* Decorative glow */}
              <div className="pointer-events-none absolute -left-24  h-72 w-72 rounded-full bg-purple-600/15 blur-[100px]" />

              <div className="relative z-10">

                {/* System status */}
                <div className="mb-8 flex items-center justify-between">

                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,1)]" />

                    <span className="text-[9px] uppercase tracking-[2px] text-white/30">
                      Communication Hub
                    </span>
                  </div>

                  <FiCpu
                    size={17}
                    className="text-purple-400/40"
                  />

                </div>

                {/* Heading */}
                <h3 className="max-w-md text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Have a project
                  <br />
                  in mind?
                  <span className="text-purple-400">.</span>
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/35">
                  Whether you're building an AI product, need a machine
                  learning solution, or simply want to discuss an idea,
                  I'm always open to meaningful conversations.
                </p>

                {/* Contact items */}
                <div className="mt-8 space-y-3">

                  {/* Email */}
                  <a
                    href="mailto:your@email.com"
                    className="
                      group/item flex items-center gap-4
                      rounded-2xl
                      border border-white/5
                      bg-white/[0.025]
                      p-4
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-purple-400/20
                      hover:bg-purple-500/[0.05]
                    "
                  >
                    <div className="rounded-xl border border-purple-400/10 bg-purple-500/10 p-3">
                      <FiMail
                        size={17}
                        className="text-purple-400"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[9px] uppercase tracking-[1.5px] text-white/20">
                        Email
                      </p>

                      <p className="mt-1 truncate text-xs text-white/60">
                        your@email.com
                      </p>
                    </div>

                    <FiArrowUpRight
                      size={14}
                      className="ml-auto text-white/20 transition-all group-hover/item:-translate-y-1 group-hover/item:translate-x-1 group-hover/item:text-purple-400"
                    />
                  </a>

                  {/* Location */}
                  <div
                    className="
                      flex items-center gap-4
                      rounded-2xl
                      border border-white/5
                      bg-white/[0.025]
                      p-4
                    "
                  >
                    <div className="rounded-xl border border-purple-400/10 bg-purple-500/10 p-3">
                      <FiMapPin
                        size={17}
                        className="text-purple-400"
                      />
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[1.5px] text-white/20">
                        Location
                      </p>

                      <p className="mt-1 text-xs text-white/60">
                        Bangladesh
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <a
                    href="tel:+8801000000000"
                    className="
                      group/item flex items-center gap-4
                      rounded-2xl
                      border border-white/5
                      bg-white/[0.025]
                      p-4
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-purple-400/20
                      hover:bg-purple-500/[0.05]
                    "
                  >
                    <div className="rounded-xl border border-purple-400/10 bg-purple-500/10 p-3">
                      <FiPhone
                        size={17}
                        className="text-purple-400"
                      />
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[1.5px] text-white/20">
                        Phone
                      </p>

                      <p className="mt-1 text-xs text-white/60">
                        +880 1XXX-XXXXXX
                      </p>
                    </div>

                    <FiArrowUpRight
                      size={14}
                      className="ml-auto text-white/20 transition-all group-hover/item:-translate-y-1 group-hover/item:translate-x-1 group-hover/item:text-purple-400"
                    />
                  </a>

                </div>

                {/* Social */}
                <div className="mt-8">

                  <p className="mb-3 text-[9px] uppercase tracking-[2px] text-white/20">
                    Connect
                  </p>

                  <div className="flex gap-2">

                    <a
                      href="#"
                      className="
                        rounded-xl
                        border border-white/10
                        bg-white/[0.03]
                        p-3
                        text-white/40
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:border-purple-400/20
                        hover:bg-purple-500/10
                        hover:text-purple-400
                      "
                      aria-label="GitHub"
                    >
                      <FiGithub size={17} />
                    </a>

                    <a
                      href="#"
                      className="
                        rounded-xl
                        border border-white/10
                        bg-white/[0.03]
                        p-3
                        text-white/40
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:border-purple-400/20
                        hover:bg-purple-500/10
                        hover:text-purple-400
                      "
                      aria-label="LinkedIn"
                    >
                      <FiLinkedin size={17} />
                    </a>

                  </div>
                </div>

                {/* Availability */}
                <div className="mt-8 flex items-center gap-3 rounded-2xl border border-purple-400/10 bg-purple-500/[0.04] p-4">

                  <div className="relative">
                    <span className="block h-2.5 w-2.5 rounded-full bg-purple-400" />
                    <span className="absolute inset-0 animate-ping rounded-full bg-purple-400 opacity-40" />
                  </div>

                  <div>
                    <p className="text-[10px] font-medium text-white/60">
                      Currently available
                    </p>

                    <p className="mt-0.5 text-[9px] text-white/25">
                      Open for freelance & collaborations
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — CONTACT FORM
          ================================================= */}
          <div className="relative">

            {/* 3D floating glow */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full bg-purple-600/10 blur-[90px]" />

            <div
              className="
                group relative overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/[0.035]
                p-6
                shadow-[0_20px_70px_rgba(0,0,0,0.15)]
                backdrop-blur-xl
                sm:p-8
              "
            >

              {/* Top decorative line */}
              <div className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />

              {/* Form header */}
              <div className="mb-7 flex items-center justify-between">

                <div>
                  <span className="text-[9px] uppercase tracking-[2px] text-white/20">
                    New Message
                  </span>

                  <h3 className="mt-1 text-xl font-bold text-white">
                    Start a Conversation
                  </h3>
                </div>

                <div className="rounded-xl border border-purple-400/10 bg-purple-500/10 p-3">
                  <FiSend
                    size={18}
                    className="text-purple-400"
                  />
                </div>

              </div>

              <form className="space-y-5">

                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[1.5px] text-white/30">
                      Your Name
                    </label>

                    <input
                      type="text"
                      placeholder="John Doe"
                      className="
                        w-full rounded-xl
                        border border-white/10
                        bg-black/10
                        px-4 py-3.5
                        text-xs text-white
                        outline-none
                        placeholder:text-white/15
                        transition-all duration-300
                        focus:border-purple-400/40
                        focus:bg-purple-500/[0.04]
                        focus:shadow-[0_0_25px_rgba(139,92,246,0.08)]
                      "
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[1.5px] text-white/30">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="
                        w-full rounded-xl
                        border border-white/10
                        bg-black/10
                        px-4 py-3.5
                        text-xs text-white
                        outline-none
                        placeholder:text-white/15
                        transition-all duration-300
                        focus:border-purple-400/40
                        focus:bg-purple-500/[0.04]
                        focus:shadow-[0_0_25px_rgba(139,92,246,0.08)]
                      "
                    />
                  </div>

                </div>

                {/* Subject */}
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[1.5px] text-white/30">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Let's build something amazing"
                    className="
                      w-full rounded-xl
                      border border-white/10
                      bg-black/10
                      px-4 py-3.5
                      text-xs text-white
                      outline-none
                      placeholder:text-white/15
                      transition-all duration-300
                      focus:border-purple-400/40
                      focus:bg-purple-500/[0.04]
                      focus:shadow-[0_0_25px_rgba(139,92,246,0.08)]
                    "
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[1.5px] text-white/30">
                    Message
                  </label>

                  <textarea
                    rows="6"
                    placeholder="Tell me about your project..."
                    className="
                      w-full resize-none rounded-xl
                      border border-white/10
                      bg-black/10
                      px-4 py-3.5
                      text-xs leading-6 text-white
                      outline-none
                      placeholder:text-white/15
                      transition-all duration-300
                      focus:border-purple-400/40
                      focus:bg-purple-500/[0.04]
                      focus:shadow-[0_0_25px_rgba(139,92,246,0.08)]
                    "
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="
                    group/send
                    flex w-full
                    items-center justify-center gap-2
                    rounded-xl
                    bg-gradient-to-r
                    from-violet-600
                    via-purple-500
                    to-fuchsia-500
                    px-5 py-3.5
                    text-xs font-semibold text-white
                    shadow-lg shadow-purple-500/20
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-purple-500/40
                    active:translate-y-0
                  "
                >
                  Send Message

                  <FiSend
                    size={14}
                    className="transition-transform duration-300 group-hover/send:translate-x-1 group-hover/send:-translate-y-0.5"
                  />
                </button>

              </form>

              {/* Form footer */}
              <div className="mt-6 flex items-center justify-center gap-2">
                <FiActivity
                  size={11}
                  className="text-purple-400/60"
                />

                <span className="text-[9px] text-white/20">
                  Secure communication channel
                </span>
              </div>

              {/* Decorative corners */}
              <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 rounded-tl-full bg-purple-500/[0.03]" />

              <div className="pointer-events-none absolute bottom-5 right-5 h-2 w-2 rounded-full bg-purple-400/30 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />

            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM SYSTEM BAR
        ===================================================== */}
        <div className="mt-6 flex flex-col items-center justify-between gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-4 backdrop-blur-xl sm:flex-row">

          <div className="flex items-center gap-2">
            <FiCpu
              size={13}
              className="text-purple-400/60"
            />

            <span className="text-[9px] uppercase tracking-[2px] text-white/20">
              AI Communication Interface
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400" />

            <span className="text-[9px] text-purple-300/50">
              SYSTEM ONLINE
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;