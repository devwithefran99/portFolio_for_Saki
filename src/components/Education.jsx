import { useState } from "react";
import {
  FiBookOpen,
  FiAward,
  FiTool,
  FiTarget,
  FiExternalLink,
  FiX,
  FiMaximize2,
  FiCheckCircle,
  FiCpu,
  FiActivity,
  FiCalendar,
} from "react-icons/fi";

const Education = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const educationData = [
    {
      icon: FiBookOpen,
      level: "Secondary Education",
      title: "Secondary School Certificate",
      status: "Completed",
      description:
        "Completed secondary-level education and built the foundation for further academic development.",
      year: "Completed",
    },
    {
      icon: FiTool,
      level: "Technical Education",
      title: "Diploma",
      status: "Completed",
      description:
        "Completed diploma-level technical education with a focus on developing practical and technical skills.",
      year: "Completed",
    },
    {
      icon: FiTarget,
      level: "Higher Education",
      title: "Bachelor's Degree",
      status: "Planned",
      description:
        "Planning to pursue a Bachelor's degree abroad to further develop academic and professional expertise.",
      year: "Future Goal",
    },
  ];

  const certificates = [
    {
      title: "Certified From Creative IT",
      issuer: "Certification Provider",
      image: "/CreativeIT.jpeg",
      category: "Machine Learning",
    },
    {
      title: "Python Programming Certification",
      issuer: "Certification Provider",
      image: "/certificates/certificate-2.jpg",
      category: "Programming",
    },
    {
      title: "Deep Learning Certification",
      issuer: "Certification Provider",
      image: "/certificates/certificate-3.jpg",
      category: "Deep Learning",
    },
    {
      title: "Data Science Certification",
      issuer: "Certification Provider",
      image: "/certificates/certificate-4.jpg",
      category: "Data Science",
    },
    {
      title: "Computer Vision Certification",
      issuer: "Certification Provider",
      image: "/certificates/certificate-5.jpg",
      category: "Computer Vision",
    },
    {
      title: "Artificial Intelligence Certification",
      issuer: "Certification Provider",
      image: "/certificates/certificate-6.jpg",
      category: "Artificial Intelligence",
    },
  ];

  return (
    <>
      <section
        id="education"
        className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
      >
        {/* =====================================================
            AMBIENT GLOWS
        ===================================================== */}
        <div className="pointer-events-none absolute left-[5%] top-[15%] h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />

        <div className="pointer-events-none absolute right-[5%] top-[30%] h-80 w-80 rounded-full bg-violet-600/10 blur-[130px]" />

        <div className="pointer-events-none absolute bottom-[10%] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-600/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">

          {/* =====================================================
              SECTION HEADER
          ===================================================== */}
          <div className="mb-14 text-center">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/[0.05] px-3 py-1.5 backdrop-blur-xl">
              <FiAward
                size={13}
                className="text-purple-400"
              />

              <span className="text-[9px] uppercase tracking-[3px] text-white/40">
                Academic Journey
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Education &
              <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Certifications.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-xs leading-6 text-white/30 sm:text-sm">
              My academic journey and selected certifications that support
              my continuous learning in technology and artificial intelligence.
            </p>
          </div>

          {/* =====================================================
              MAIN GRID
          ===================================================== */}
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">

            {/* =================================================
                EDUCATION CARD
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
                hover:shadow-[0_30px_80px_rgba(124,58,237,0.1)]
                sm:p-8
              "
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-purple-600/15 blur-[100px]" />

              {/* Header */}
              <div className="relative z-10 mb-9 flex items-center justify-between">

                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-purple-400/15 bg-purple-500/10 p-2.5">
                    <FiBookOpen
                      size={19}
                      className="text-purple-400"
                    />
                  </div>

                  <div>
                    <span className="text-[9px] uppercase tracking-[2px] text-white/25">
                      Academic
                    </span>

                    <h3 className="text-lg font-bold text-white">
                      Education
                    </h3>
                  </div>
                </div>

                <FiCpu
                  size={17}
                  className="text-purple-400/30"
                />
              </div>

              {/* Timeline */}
              <div className="relative z-10">

                {/* Vertical line */}
                <div className="absolute left-[17px] top-5 bottom-8 w-px bg-gradient-to-b from-purple-400/40 via-purple-400/20 to-transparent" />

                <div className="space-y-8">

                  {educationData.map((education, index) => {
                    const Icon = education.icon;

                    return (
                      <div
                        key={education.title}
                        className="group/education relative flex gap-5"
                      >
                        {/* Node */}
                        <div
                          className={`
                            relative z-10 flex h-9 w-9 shrink-0
                            items-center justify-center
                            rounded-xl
                            border
                            ${
                              index === 2
                                ? "border-fuchsia-400/20 bg-fuchsia-500/10"
                                : "border-purple-400/20 bg-purple-500/10"
                            }
                            shadow-[0_0_20px_rgba(139,92,246,0.08)]
                            transition-all duration-300
                            group-hover/education:scale-110
                            group-hover/education:shadow-[0_0_25px_rgba(139,92,246,0.2)]
                          `}
                        >
                          <Icon
                            size={15}
                            className={
                              index === 2
                                ? "text-fuchsia-400"
                                : "text-purple-400"
                            }
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 pb-1">

                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[9px] uppercase tracking-[1.5px] text-purple-400/60">
                              {education.level}
                            </span>

                            <span className="h-1 w-1 rounded-full bg-white/15" />

                            <span className="text-[9px] text-white/20">
                              {education.year}
                            </span>
                          </div>

                          <h4 className="mt-2 text-base font-semibold text-white/80 transition-colors group-hover/education:text-white">
                            {education.title}
                          </h4>

                          <div className="mt-2 flex items-center gap-1.5">
                            <FiCheckCircle
                              size={11}
                              className={
                                education.status === "Planned"
                                  ? "text-fuchsia-400/70"
                                  : "text-purple-400/70"
                              }
                            />

                            <span className="text-[9px] text-white/30">
                              {education.status}
                            </span>
                          </div>

                          <p className="mt-3 max-w-md text-[10px] leading-5 text-white/25">
                            {education.description}
                          </p>

                        </div>
                      </div>
                    );
                  })}

                </div>
              </div>

              {/* Future goal box */}
              <div className="relative z-10 mt-8 rounded-2xl border border-fuchsia-400/10 bg-fuchsia-500/[0.035] p-4">

                <div className="flex items-start gap-3">

                  <div className="rounded-lg border border-fuchsia-400/10 bg-fuchsia-500/10 p-2">
                    <FiTarget
                      size={14}
                      className="text-fuchsia-400"
                    />
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[1.5px] text-fuchsia-300/50">
                      Future Academic Goal
                    </p>

                    <p className="mt-1 text-[10px] leading-5 text-white/30">
                      Pursuing a Bachelor's degree abroad as the next step
                      in my academic journey.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* =================================================
                CERTIFICATION CARD
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
                hover:shadow-[0_30px_80px_rgba(124,58,237,0.1)]
                sm:p-8
              "
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[100px]" />

              {/* Header */}
              <div className="relative z-10 mb-7 flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="rounded-xl border border-purple-400/15 bg-purple-500/10 p-2.5">
                    <FiAward
                      size={19}
                      className="text-purple-400"
                    />
                  </div>

                  <div>
                    <span className="text-[9px] uppercase tracking-[2px] text-white/25">
                      Professional Development
                    </span>

                    <h3 className="text-lg font-bold text-white">
                      Certifications
                    </h3>
                  </div>

                </div>

                <div className="flex items-center gap-2">
                  <FiActivity
                    size={14}
                    className="text-purple-400/40"
                  />

                  <span className="hidden text-[8px] uppercase tracking-[1.5px] text-white/20 sm:block">
                    Featured
                  </span>
                </div>

              </div>

              {/* Certificate Grid */}
              <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2">

                {certificates.map((certificate) => (
                  <button
                    key={certificate.title}
                    type="button"
                    onClick={() => setSelectedCertificate(certificate)}
                    className="
                      group/cert relative overflow-hidden
                      rounded-2xl
                      border border-white/10
                      bg-black/10
                      text-left
                      outline-none
                      transition-all duration-500
                      hover:-translate-y-1
                      hover:border-purple-400/30
                      hover:bg-purple-500/[0.04]
                      hover:shadow-[0_15px_40px_rgba(124,58,237,0.12)]
                      focus:border-purple-400/40
                    "
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-black/20">

                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="
                          h-full w-full
                          object-cover
                          opacity-70
                          transition-all duration-700
                          group-hover/cert:scale-105
                          group-hover/cert:opacity-100
                        "
                      />

                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080611] via-transparent to-transparent opacity-80" />

                      {/* View icon */}
                      <div
                        className="
                          absolute right-3 top-3
                          flex h-8 w-8 items-center justify-center
                          rounded-lg
                          border border-white/10
                          bg-black/30
                          text-white/50
                          opacity-0
                          backdrop-blur-md
                          transition-all duration-300
                          group-hover/cert:opacity-100
                        "
                      >
                        <FiMaximize2 size={13} />
                      </div>

                      {/* Category */}
                      <span className="absolute bottom-3 left-3 rounded-md border border-purple-400/15 bg-purple-500/10 px-2 py-1 text-[8px] text-purple-300/70 backdrop-blur-md">
                        {certificate.category}
                      </span>

                    </div>

                    {/* Certificate Info */}
                    <div className="p-4">

                      <h4 className="line-clamp-1 text-xs font-semibold text-white/70 transition-colors group-hover/cert:text-white">
                        {certificate.title}
                      </h4>

                      <div className="mt-2 flex items-center justify-between">

                        <span className="text-[9px] text-white/20">
                          {certificate.issuer}
                        </span>

                        <span className="flex items-center gap-1 text-[9px] text-purple-400/50">
                          View
                          <FiExternalLink size={10} />
                        </span>

                      </div>

                    </div>
                  </button>
                ))}

              </div>

              {/* Bottom status */}
              <div className="relative z-10 mt-6 flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">

                <div className="flex items-center gap-2">
                  <FiAward
                    size={12}
                    className="text-purple-400/50"
                  />

                  <span className="text-[9px] text-white/25">
                    Selected Certifications
                  </span>
                </div>

                <span className="text-[9px] text-purple-300/50">
                  {certificates.length} Featured
                </span>

              </div>

            </div>
          </div>

          {/* =====================================================
              BOTTOM SYSTEM BAR
          ===================================================== */}
          <div className="mt-6 flex flex-col items-center justify-between gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-4 backdrop-blur-xl sm:flex-row">

            <div className="flex items-center gap-2">
              <FiCalendar
                size={12}
                className="text-purple-400/50"
              />

              <span className="text-[9px] uppercase tracking-[2px] text-white/20">
                Continuous Learning
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />

              <span className="text-[9px] text-purple-300/50">
                LEARNING SYSTEM ACTIVE
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CERTIFICATE PREVIEW MODAL
      ===================================================== */}
      {selectedCertificate && (
        <div
          className="
            fixed inset-0 z-[200]
            flex items-center justify-center
            bg-black/80
            p-4
            backdrop-blur-md
          "
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="
              relative
              max-h-[92vh]
              w-full max-w-5xl
              overflow-hidden
              rounded-2xl
              border border-purple-400/20
              bg-[#080611]
              shadow-[0_30px_100px_rgba(0,0,0,0.7)]
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 sm:px-5">

              <div>
                <p className="text-xs font-semibold text-white/70">
                  {selectedCertificate.title}
                </p>

                <p className="mt-0.5 text-[9px] text-white/25">
                  {selectedCertificate.issuer}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-xl
                  border border-white/10
                  bg-white/[0.03]
                  text-white/40
                  transition-all duration-300
                  hover:border-purple-400/20
                  hover:bg-purple-500/10
                  hover:text-white
                "
                aria-label="Close certificate preview"
              >
                <FiX size={17} />
              </button>

            </div>

            {/* Certificate image */}
            <div className="flex max-h-[calc(92vh-65px)] items-center justify-center overflow-auto bg-black/20 p-3 sm:p-6">

              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="max-h-[78vh] max-w-full rounded-lg object-contain shadow-2xl"
              />

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Education;