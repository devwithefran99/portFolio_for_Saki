import {
  FiArrowUpRight,
  FiExternalLink,
  FiGithub,
  FiLayers,
  FiCpu,
  FiDatabase,
  FiGlobe,
  FiMic,
  FiImage,
  FiFileText,
  FiActivity,
} from "react-icons/fi";

const projects = [
  {
    id: 1,
    number: "01",
    title: "PDF-RAG Assistant",
    category: "AI / RAG / Full Stack",
    description:
      "A full-stack Retrieval-Augmented Generation application that allows users to upload PDF documents and ask questions using an AI-powered retrieval pipeline.",
    liveLink:
      "https://pdf-rag-assistant-jvukgqede7zkzf4grwrycs.streamlit.app/",
    icon: FiFileText,
    accent: "from-violet-500 to-fuchsia-500",
    architecture: "RAG + Event-driven Architecture",
    techStack: [
      "Python",
      "FastAPI",
      "Inngest",
      "Groq API",
      "Qdrant",
      "LlamaIndex",
      "FastEmbed",
      "Streamlit",
      "Docker",
      "Render",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Butterfly Vision AI",
    category: "Computer Vision / Deep Learning",
    description:
      "A deep-learning image classification system capable of accurately identifying 75 different butterfly species from uploaded images, providing fast and reliable predictions.",
   
    liveLink:
      "https://butterfly-image-classification-ms3rdvz5jwqvagpqrthedo.streamlit.app/",
    icon: FiImage,
    accent: "from-fuchsia-500 to-purple-500",
    architecture: "CNN + ONNX Inference",
    techStack: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN",
      "ONNX",
      "ONNX Runtime",
      "NumPy",
      "Pillow",
      "Streamlit",
      "Jupyter",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "Mushaki AI",
    category: "AI Voice Assistant",
    description:
      "A dual-edition AI voice assistant combining conversational AI, speech recognition, text-to-speech, system automation, and a cloud-based web interface.",
   
    liveLink:
      "https://mushaki-mdpvbvwoq5w4kj6iulz2rz.streamlit.app/",
    icon: FiMic,
    accent: "from-purple-500 to-indigo-500",
    architecture: "Desktop + Cloud Web Architecture",
    techStack: [
      "Python",
      "Google Gemini API",
      "Streamlit",
      "SpeechRecognition",
      "gTTS",
      "Edge-TTS",
      "Pydub",
      "BeautifulSoup4",
      "Mic Recorder",
      "Python-dotenv",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden py-2 sm:py-28">
      {/* Ambient 3D Glows */}
      <div className="pointer-events-none absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-purple-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute right-[-8%] top-[35%] h-80 w-80 rounded-full bg-fuchsia-600/10 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[40%] h-72 w-72 rounded-full bg-indigo-600/10 blur-[100px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-purple-500" />

              <span className="text-[10px] font-semibold uppercase tracking-[4px] text-purple-400">
                Project Archive
              </span>

              <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-[9px] text-purple-300">
                03 PROJECTS
              </span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Selected{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
              A collection of AI, machine learning, computer vision and
              full-stack projects built with modern technologies.
            </p>
          </div>

          {/* System Status */}
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-xl">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
              <FiActivity size={15} />
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[2px] text-white/30">
                System
              </p>
              <p className="text-xs font-medium text-white/80">
                Projects Online
              </p>
            </div>

            <span className="ml-2 h-2 w-2 animate-pulse rounded-full bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.9)]" />
          </div>
        </div>

        {/* Projects */}
        <div className="grid gap-7 lg:grid-cols-3">
          {projects.map((project) => {
            const ProjectIcon = project.icon;

            return (
              <article
                key={project.id}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-[0_25px_90px_rgba(124,58,237,0.16)]"
              >
                {/* 3D glow */}
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${project.accent} opacity-10 blur-3xl transition-all duration-500 group-hover:opacity-25`}
                />

                {/* Top shine */}
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Project Number + Icon */}
                <div className="relative mb-7 flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[3px] text-white/20">
                    PROJECT_{project.number}
                  </span>

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br ${project.accent} bg-opacity-10 text-white shadow-lg shadow-purple-900/20 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
                  >
                    <ProjectIcon size={19} />
                  </div>
                </div>

                {/* Category */}
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-[9px] font-medium uppercase tracking-wider text-purple-300">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-purple-300">
                  {project.title}
                </h3>

                {/* Architecture */}
                <div className="mt-3 flex items-center gap-2 text-[10px] text-white/30">
                  <FiLayers size={12} className="text-purple-400/70" />
                  {project.architecture}
                </div>

                {/* Description */}
                <p className="mt-5 text-sm leading-6 text-white/45">
                  {project.description}
                </p>

                {/* Architecture visual */}
                <div className="relative my-6 overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent_65%)]" />

                  <div className="relative flex items-center justify-between gap-2">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-purple-500/20 bg-purple-500/10 text-purple-300">
                      <FiCpu size={16} />
                    </div>

                    <div className="h-px flex-1 bg-gradient-to-r from-purple-500/30 via-purple-400/50 to-transparent" />

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-300">
                      {project.id === 1 ? (
                        <FiDatabase size={16} />
                      ) : project.id === 2 ? (
                        <FiImage size={16} />
                      ) : (
                        <FiMic size={16} />
                      )}
                    </div>

                    <div className="h-px flex-1 bg-gradient-to-r from-fuchsia-500/40 via-purple-400/30 to-transparent" />

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-indigo-500/20 bg-indigo-500/10 text-indigo-300">
                      <FiGlobe size={16} />
                    </div>
                  </div>

                  <div className="relative mt-3 flex justify-between px-1 text-[8px] uppercase tracking-wider text-white/20">
                    <span>AI</span>
                    <span>ENGINE</span>
                    <span>WEB</span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-auto">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-[9px] uppercase tracking-[2px] text-white/25">
                      Tech Stack
                    </span>
                    <div className="h-px flex-1 bg-white/5" />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/8 bg-white/[0.035] px-2.5 py-1.5 text-[9px] text-white/45 transition-colors duration-300 group-hover:border-purple-500/10 group-hover:text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Live Project */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 flex items-center justify-between rounded-xl border border-purple-500/20 bg-purple-500/[0.06] px-4 py-3 text-xs font-medium text-white transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <span className="flex items-center gap-2">
                    <FiExternalLink size={14} className="text-purple-400" />
                    Live Project
                  </span>

                  <FiArrowUpRight
                    size={15}
                    className="text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-purple-300"
                  />
                </a>

              </article>
            );
          })}
        </div>

        {/* Bottom System Panel */}
        <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4 backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/[0.04] via-transparent to-fuchsia-500/[0.04]" />

          <div className="relative flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-purple-500/20 bg-purple-500/10 text-purple-400">
                <FiCpu size={15} />
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[2px] text-white/25">
                  Development Status
                </p>
                <p className="text-xs text-white/60">
                  Continuously building & experimenting with AI
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400" />
              <span className="font-mono text-[9px] uppercase tracking-wider text-purple-300/60">
                System Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;