import {
  FiCode,
  FiBarChart2,
  FiTrendingUp,
  FiCpu,
  FiMessageSquare,
  FiLayers
} from "react-icons/fi";

const Skills = () => {
  const skillGroups = [
    {
      title: "Programming & Core Concepts",
      icon: FiCode,
      skills: [
        "Python",
        "OOP",
        "Data Structures & Algorithms",
        "Exception Handling",
      ],
    },
    {
      title: "Data Analysis & Visualization",
      icon: FiBarChart2,
      skills: ["EDA", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    },
    {
      title: "Mathematics & Statistics",
      icon: FiTrendingUp,
      skills: [
        "Statistics",
        "Probability",
        "Probability Distributions",
        "PCA",
        "t-SNE",
      ],
    },
    {
      title: "Machine Learning",
      icon: FiCpu,
      skills: [
        "Linear / Logistic Regression",
        "KNN",
        "Naive Bayes",
        "SVM",
        "Decision Tree",
        "Random Forest",
        "Bagging & Stacking",
        "Gradient Boosting",
        "AdaBoost",
        "XGBoost",
        "Clustering",
        "Cross-Validation",
        "Recommendation Systems",
      ],
    },
    {
      title: "Natural Language Processing",
      icon: FiMessageSquare,
      skills: [
        "Text Preprocessing",
        "Tokenization",
        "Bag of Words",
        "TF-IDF",
        "SpaCy",
        "Sentiment Analysis",
        "NER",
      ],
    },
    {
      title: "Deep Learning & Computer Vision",
      icon: FiLayers,
      skills: [
        "ANN",
        "CNN",
        "Forward & Backward Propagation",
        "Activation Functions",
        "Object Detection",
      ],
    }
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-4 mt-20 mb-10 sm:px-6 lg:px-8"
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-[10%] top-[10%] h-72 w-72 rounded-full bg-indigo-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[10%] bottom-[10%] h-80 w-80 rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Section header */}
        <div className="mb-14 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/[0.06] px-3 py-1.5 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.9)]" />
            <span className="text-[10px] uppercase tracking-[2px] text-white/50">
              What I Work With
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            My Skills
            <span className="text-purple-400">.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/40">
            Tools and techniques I use to explore data, build models and ship
            intelligent systems.
          </p>
        </div>

        {/* Skill category cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500 hover:border-purple-400/30 hover:bg-purple-500/[0.06] hover:shadow-[0_20px_50px_rgba(124,58,237,0.15)]"
              >
                {/* 3D glow */}
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl transition-all duration-500 group-hover:bg-purple-500/20" />

                {/* Header */}
                <div className="relative mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-purple-400/10 bg-purple-500/10 text-purple-400 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <Icon size={16} />
                  </div>
                  <h3 className="text-sm font-semibold text-white">
                    {group.title}
                  </h3>
                </div>

                {/* Skill pills */}
                <div className="relative flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/55 transition-colors duration-300 hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom line */}
                <div className="relative mt-5 h-px w-full bg-gradient-to-r from-purple-500/40 via-purple-400/10 to-transparent" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;