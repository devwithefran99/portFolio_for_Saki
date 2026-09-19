import { useEffect, useState } from "react";
import {
  FiArrowUpRight,
  FiDownload,
  FiCpu,
  FiCode,
  FiLayers,
  FiActivity,
} from "react-icons/fi";

const Hero = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [
    "Machine Learner",
    "Deep Learner",
    "AI Engineer",
    "Computer Visioner",
  ];

  // Typing effect
  useEffect(() => {
    const currentWord = words[wordIndex];

    const speed = isDeleting ? 55 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  const features = [
    {
      value: "3+",
      label: "Projects",
      icon: FiCode,
    },
    {
      value: "25+",
      label: "Technologies",
      icon: FiCpu,
    },
    {
      value: "3+",
      label: "ML Models",
      icon: FiLayers,
    },
    {
      value: "100%",
      label: "Passion",
      icon: FiActivity,
    },
  ];

  const orbitBadges = [
    { icon: FiCpu, label: "AI SYSTEM", angle: 0 },
    { icon: FiActivity, label: "MODEL ACTIVE", angle: 90 },
    { icon: FiCode, label: "NEURAL NET", angle: 180 },
    { icon: FiLayers, label: "DATA FLOW", angle: 270 },
  ];

  return (
    <section
      id="home"
      className="relative  overflow-hidden px-4 pt-28 sm:px-6 lg:px-8"
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-[5%] top-[15%] h-72 w-72 rounded-full bg-purple-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-[5%] top-[25%] h-80 w-80 rounded-full bg-indigo-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-600/10 blur-[120px]" />

      <div className="relative mx-auto flex min-h-[650px] w-full max-w-7xl items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ================= LEFT : IMAGE ================= */}
          <div className="relative flex justify-center lg:justify-start">

            {/* Outer 3D glow */}
            <div className="absolute h-[220px] w-[220px] rounded-full bg-purple-600/20 blur-[70px] sm:h-[320px] sm:w-[320px] sm:blur-[90px] lg:h-[400px] lg:w-[400px]" />

            {/* Rotating orbit */}
            <div className="absolute h-[220px] w-[220px] animate-spin rounded-full border border-purple-400/20 [animation-duration:12s] sm:h-[330px] sm:w-[330px] lg:h-[410px] lg:w-[410px]" />

            <div className="absolute h-[190px] w-[190px] animate-[spin_8s_linear_infinite_reverse] rounded-full border border-indigo-400/10 sm:h-[290px] sm:w-[290px] lg:h-[360px] lg:w-[360px]" />

            {/* Orbit dot */}
            <div className="absolute left-[8%] top-[18%] h-2 w-2 animate-pulse rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,1)] sm:h-3 sm:w-3" />

            {/* Image container — badges now live inside THIS so they share the same center as the image */}
            <div className="relative z-10 flex h-[220px] w-[220px] items-center justify-center sm:h-[320px] sm:w-[320px] lg:h-[440px] lg:w-[440px]">

              {/* Glass circle behind image */}
              <div className="absolute inset-[12%] rounded-full border border-purple-400/20 bg-purple-500/[0.04] shadow-[inset_0_0_80px_rgba(168,85,247,0.08),0_0_80px_rgba(124,58,237,0.15)] backdrop-blur-sm" />

              <img
                src="/myImage.webp"
                alt="ML Engineer"
                className="relative z-10 h-full w-full object-contain drop-shadow-[0_0_35px_rgba(139,92,246,0.35)]"
                style={{
                  maskImage:
                    "radial-gradient(circle at center, black 55%, transparent 85%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at center, black 55%, transparent 85%)",
                }}
              />

              {/* Orbiting badges */}
              <div className="pointer-events-none absolute inset-0">
                {orbitBadges.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="absolute left-1/2 top-1/2 h-0 w-0"
                      style={{
                        "--angle": `${item.angle}deg`,
                        animation: "orbit-spin 18s linear infinite",
                      }}
                    >
                      <div
                        className="absolute"
                        style={{
                          transform:
                            "translateX(clamp(95px, 26vw, 190px)) translateY(-50%)",
                        }}
                      >
                        <div
                          className="flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-white/10 bg-white/[0.04] px-2 py-1 backdrop-blur-xl sm:gap-2 sm:rounded-xl sm:px-3 sm:py-2"
                          style={{
                            "--angle": `${item.angle}deg`,
                            animation: "orbit-counter-spin 18s linear infinite",
                          }}
                        >
                          <Icon className="h-2.5 w-2.5 text-purple-400 sm:h-3.5 sm:w-3.5" />
                          <span className="text-[8px] text-white/60 sm:text-[10px]">
                            {item.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ================= RIGHT : CONTENT ================= */}
          <div className="relative z-10 text-center lg:text-left">

            {/* Small badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/[0.06] px-3 py-1.5 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.9)]" />
              <span className="text-[10px] uppercase tracking-[2px] text-white/50">
                Available for opportunities
              </span>
            </div>

            {/* Intro */}
            <p className="mb-2 text-sm text-white/50">
              Hello, I'm
            </p>

            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
  Sharafat Alam Saki
  <span className="text-purple-400">.</span>
</h1>

            {/* Typing text */}
            <div className="mt-4 min-h-[52px] text-2xl font-semibold sm:text-3xl">
              <span className="text-white/60">I'm a </span>

              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                {text}
              </span>

              <span className="ml-1 inline-block h-7 w-[2px] translate-y-1 animate-pulse bg-purple-400 sm:h-8" />
            </div>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/40 lg:mx-0">
              I build intelligent systems using machine learning, deep
              learning and modern AI technologies — turning complex data into
              practical solutions.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-500/40"
              >
                Explore Projects
                <FiArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold text-white/70 backdrop-blur-xl transition-all duration-300 hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-white"
              >
                Download CV
                <FiDownload size={14} />
              </a>
            </div>

            {/* Mini status */}
            <div className="mt-7 flex items-center justify-center gap-4 text-[10px] text-white/25 lg:justify-start">
              <span className="flex items-center gap-1.5">
                <FiCpu className="text-purple-400" />
                AI / ML
              </span>

              <span className="h-3 w-px bg-white/10" />

              <span className="flex items-center gap-1.5">
                <FiCode className="text-purple-400" />
                Python
              </span>

              <span className="h-3 w-px bg-white/10" />

              <span className="flex items-center gap-1.5">
                <FiLayers className="text-purple-400" />
                Deep Learning
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 3D FEATURE CARDS ================= */}
      <div className="relative mx-auto mt-4 w-full max-w-6xl pb-16">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/30 hover:bg-purple-500/[0.06] hover:shadow-[0_20px_50px_rgba(124,58,237,0.15)]"
              >
                {/* 3D glow */}
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-purple-500/10 blur-2xl transition-all duration-500 group-hover:bg-purple-500/20" />

                {/* Number */}
                <div className="relative flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    {item.value}
                  </h3>

                  <div className="rounded-lg border border-purple-400/10 bg-purple-500/10 p-2 text-purple-400 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <Icon size={16} />
                  </div>
                </div>

                {/* Label */}
                <p className="mt-2 text-[10px] uppercase tracking-[1.5px] text-white/35">
                  {item.label}
                </p>

                {/* Bottom line */}
                <div className="mt-4 h-px w-full bg-gradient-to-r from-purple-500/40 via-purple-400/10 to-transparent" />

                {/* Index */}
                <span className="absolute bottom-3 right-4 text-[8px] text-white/10">
                  0{index + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom 3D fade */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-[80%] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[100px]" />
    </section>
  );
};

export default Hero;