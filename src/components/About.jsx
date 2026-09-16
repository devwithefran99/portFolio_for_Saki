import {
  FiDownload,
  FiCpu,
  FiCode,
  FiLayers,
  FiDatabase,
  FiActivity,
  FiCheckCircle,
  FiBriefcase,
  FiTerminal,
} from "react-icons/fi";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Ambient violet glows */}
      <div className="pointer-events-none absolute left-[5%] top-[20%] h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[5%] top-[30%] h-80 w-80 rounded-full bg-violet-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-600/10 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-7xl">

        {/* Section heading */}
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/[0.05] px-3 py-1.5 backdrop-blur-xl">
            <FiCpu className="text-purple-400" size={13} />

            <span className="text-[9px] uppercase tracking-[3px] text-white/40">
              About Me
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Building Intelligence
            <span className="text-purple-400">.</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-white/30">
            A little insight into my journey, experience and the technologies
            I use to build intelligent systems.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.45fr]">

          {/* =====================================================
              LEFT PROFILE CARD
          ===================================================== */}
          <div
            className="
              group relative overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white/[0.035]
              p-6
              backdrop-blur-xl
              transition-all duration-500
              hover:-translate-y-1
              hover:border-purple-400/20
              hover:shadow-[0_25px_80px_rgba(124,58,237,0.12)]
              sm:p-8
            "
          >
            {/* Card glow */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-purple-600/15 blur-[90px]" />

            {/* Top system indicator */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,1)]" />

                <span className="text-[9px] uppercase tracking-[2px] text-white/30">
                  Profile System
                </span>
              </div>

              <FiActivity
                size={15}
                className="text-purple-400/50"
              />
            </div>

            {/* Image Area */}
            <div className="relative mx-auto mt-6 flex h-[300px] w-full max-w-[340px] items-center justify-center">

              {/* Main glow */}
              <div className="absolute h-52 w-52 rounded-full bg-purple-600/20 blur-[70px]" />

              {/* Outer orbit */}
              <div
                className="
                  absolute
                  h-[230px] w-[230px]
                  rounded-full
                  border border-purple-400/20
                  sm:h-[260px] sm:w-[260px]
                "
              />

              {/* Elliptical orbit */}
              <div
                className="
                  absolute
                  h-[190px] w-[270px]
                  rounded-full
                  border border-violet-400/15
                  [transform:rotate(-30deg)_scaleY(.72)]
                "
              />

              {/* Inner orbit */}
              <div
                className="
                  absolute
                  h-[185px] w-[185px]
                  rounded-full
                  border border-purple-300/10
                "
              />

              {/* Orbit nodes */}
              <span className="absolute left-[17%] top-[25%] h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,1)]" />

              <span className="absolute right-[17%] bottom-[25%] h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_12px_rgba(217,70,239,1)]" />

              {/* Image */}
              <div className="relative z-10 flex h-[270px] w-[270px] items-end justify-center">
                <img
                  src="/myImage.webp"
                  alt="Sharafat Alam Saki"
                  className="
                    h-full
                    w-full
                    object-contain
                    object-bottom
                    drop-shadow-[0_15px_35px_rgba(0,0,0,0.5)]
                    drop-shadow-[0_0_25px_rgba(139,92,246,0.25)]
                  "
                />
              </div>
            </div>

            {/* Profile info */}
            <div className="relative z-10 text-center">

              <h3 className="text-2xl font-bold text-white">
                Sharafat Alam Saki
              </h3>

              <p className="mt-1 text-xs text-white/35">
                Machine Learning Engineer
              </p>

              {/* Status */}
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-purple-400/15 bg-purple-500/[0.06] px-3 py-1.5">
                <FiCheckCircle
                  size={12}
                  className="text-purple-400"
                />

                <span className="text-[9px] text-white/45">
                  Open to opportunities
                </span>
              </div>

              {/* CV */}
              <a
                href="/cv.pdf"
                download
                className="
                  group/btn mx-auto mt-5
                  flex w-fit items-center gap-2
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-600
                  via-purple-500
                  to-fuchsia-500
                  px-5 py-3
                  text-xs font-semibold text-white
                  shadow-lg shadow-purple-500/20
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-purple-500/40
                "
              >
                <FiDownload
                  size={14}
                  className="transition-transform duration-300 group-hover/btn:translate-y-0.5"
                />

                Download CV
              </a>
            </div>

            {/* Decorative bottom line */}
            <div className="relative z-10 mx-auto mt-7 h-px w-2/3 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent" />
          </div>

          {/* =====================================================
              RIGHT SIDE
          ===================================================== */}
          <div className="grid gap-5">

            {/* ABOUT CARD */}
            <div
              className="
                group relative overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/[0.035]
                p-6
                backdrop-blur-xl
                transition-all duration-500
                hover:border-purple-400/20
                hover:shadow-[0_20px_60px_rgba(124,58,237,0.1)]
                sm:p-8
              "
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-purple-600/10 blur-[80px]" />

              <div className="relative z-10">

                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-purple-400/15 bg-purple-500/10 p-2.5">
                    <FiCpu
                      size={19}
                      className="text-purple-400"
                    />
                  </div>

                  <div>
                    <span className="text-[9px] uppercase tracking-[2px] text-white/25">
                      Introduction
                    </span>

                    <h3 className="text-2xl font-bold text-white">
                      About Me
                      <span className="text-purple-400">.</span>
                    </h3>
                  </div>
                </div>

                {/* Status */}
                <div className="mt-5 flex items-center gap-2">
                  <FiCheckCircle
                    size={13}
                    className="text-purple-400"
                  />

                  <span className="text-xs text-purple-300/80">
                    Open to work
                  </span>
                </div>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40">
                  I'm a Machine Learning Engineer focused on building
                  intelligent and data-driven systems. I work with machine
                  learning, deep learning and modern AI technologies to solve
                  real-world problems.
                </p>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/40">
                  My interests include model development, computer vision,
                  predictive systems and creating practical AI solutions that
                  turn complex data into meaningful results.
                </p>

                {/* Tech tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Machine Learning", "Deep Learning", "Computer Vision", "AI"].map(
                    (item) => (
                      <span
                        key={item}
                        className="
                          rounded-lg
                          border border-white/10
                          bg-white/[0.03]
                          px-3 py-1.5
                          text-[9px]
                          text-white/40
                          transition-all duration-300
                          hover:border-purple-400/20
                          hover:bg-purple-500/10
                          hover:text-purple-300
                        "
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* =================================================
                EXPERIENCE + STACK
            ================================================= */}
            <div
              className="
                group relative overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/[0.035]
                p-6
                backdrop-blur-xl
                transition-all duration-500
                hover:border-purple-400/20
                hover:shadow-[0_20px_60px_rgba(124,58,237,0.1)]
                sm:p-8
              "
            >
              <div className="pointer-events-none absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-fuchsia-600/10 blur-[80px]" />

              <div className="relative z-10 grid gap-8 md:grid-cols-2">

                {/* EXPERIENCE */}
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-lg border border-purple-400/15 bg-purple-500/10 p-2">
                      <FiBriefcase
                        size={16}
                        className="text-purple-400"
                      />
                    </div>

                    <div>
                      <span className="text-[9px] uppercase tracking-[2px] text-white/25">
                        Journey
                      </span>

                      <h4 className="text-sm font-semibold text-white">
                        Experience
                      </h4>
                    </div>
                  </div>

                  {/* Role 1 */}
                  <div className="group/role relative pl-6">
                    <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.7)]" />

                    <div className="absolute left-[5px] top-4 h-12 w-px bg-gradient-to-b from-purple-400/30 to-transparent" />

                    <h5 className="text-sm font-semibold text-white/80">
                      Machine Learning Engineer
                    </h5>

                    <p className="mt-1 text-[10px] text-white/30">
                      AI / ML Projects
                    </p>

                    <p className="mt-2 text-[10px] leading-5 text-white/25">
                      Developing machine learning models and intelligent
                      data-driven applications.
                    </p>
                  </div>

                  {/* Role 2 */}
                  <div className="relative mt-6 pl-6">
                    <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-fuchsia-400 shadow-[0_0_12px_rgba(217,70,239,0.6)]" />

                    <h5 className="text-sm font-semibold text-white/80">
                      AI Developer
                    </h5>

                    <p className="mt-1 text-[10px] text-white/30">
                      Intelligent Systems
                    </p>

                    <p className="mt-2 text-[10px] leading-5 text-white/25">
                      Exploring deep learning, computer vision and modern AI
                      technologies.
                    </p>
                  </div>
                </div>

                {/* STACK */}
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-lg border border-purple-400/15 bg-purple-500/10 p-2">
                      <FiLayers
                        size={16}
                        className="text-purple-400"
                      />
                    </div>

                    <div>
                      <span className="text-[9px] uppercase tracking-[2px] text-white/25">
                        Toolkit
                      </span>

                      <h4 className="text-sm font-semibold text-white">
                        Core Stack
                      </h4>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">

                    <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.025] p-3 transition-all hover:border-purple-400/20 hover:bg-purple-500/[0.06]">
                      <FiCode className="text-purple-400" size={14} />
                      <span className="text-[10px] text-white/45">
                        Python
                      </span>
                    </div>

                    <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.025] p-3 transition-all hover:border-purple-400/20 hover:bg-purple-500/[0.06]">
                      <FiCpu className="text-purple-400" size={14} />
                      <span className="text-[10px] text-white/45">
                        TensorFlow
                      </span>
                    </div>

                    <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.025] p-3 transition-all hover:border-purple-400/20 hover:bg-purple-500/[0.06]">
                      <FiLayers className="text-purple-400" size={14} />
                      <span className="text-[10px] text-white/45">
                        PyTorch
                      </span>
                    </div>

                    <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.025] p-3 transition-all hover:border-purple-400/20 hover:bg-purple-500/[0.06]">
                      <FiDatabase className="text-purple-400" size={14} />
                      <span className="text-[10px] text-white/45">
                        SQL
                      </span>
                    </div>

                    <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.025] p-3 transition-all hover:border-purple-400/20 hover:bg-purple-500/[0.06]">
                      <FiTerminal className="text-purple-400" size={14} />
                      <span className="text-[10px] text-white/45">
                        Scikit-learn
                      </span>
                    </div>

                    <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.025] p-3 transition-all hover:border-purple-400/20 hover:bg-purple-500/[0.06]">
                      <FiActivity className="text-purple-400" size={14} />
                      <span className="text-[10px] text-white/45">
                        OpenCV
                      </span>
                    </div>

                  </div>

                  {/* Stack status */}
                  <div className="mt-5 rounded-xl border border-purple-400/10 bg-purple-500/[0.04] p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] uppercase tracking-[1.5px] text-white/25">
                        System Stack
                      </span>

                      <span className="flex items-center gap-1.5 text-[9px] text-purple-300/60">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400" />
                        Active
                      </span>
                    </div>

                    <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/5">
                      <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;