import { useEffect, useRef, useState } from "react";
import {
  FiCode,
  FiBarChart2,
  FiTrendingUp,
  FiCpu,
  FiMessageSquare,
  FiLayers,
} from "react-icons/fi";

const skillGroups = [
  {
    number: "01",
    title: "Programming & Core Concepts",
    subtitle: "Foundation Layer",
    icon: FiCode,
    level: 90,
    skills: [
      "Python",
      "OOP",
      "Data Structures & Algorithms",
      "Exception Handling",
    ],
  },
  {
    number: "02",
    title: "Data Analysis & Visualization",
    subtitle: "Data Intelligence",
    icon: FiBarChart2,
    level: 85,
    skills: ["EDA", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    number: "03",
    title: "Mathematics & Statistics",
    subtitle: "Mathematical Core",
    icon: FiTrendingUp,
    level: 80,
    skills: [
      "Statistics",
      "Probability",
      "Probability Distributions",
      "PCA",
      "t-SNE",
    ],
  },
  {
    number: "04",
    title: "Machine Learning",
    subtitle: "Model Engineering",
    icon: FiCpu,
    level: 92,
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
    number: "05",
    title: "Natural Language Processing",
    subtitle: "Language Intelligence",
    icon: FiMessageSquare,
    level: 75,
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
    number: "06",
    title: "Deep Learning & Computer Vision",
    subtitle: "Visual Intelligence",
    icon: FiLayers,
    level: 78,
    skills: [
      "ANN",
      "CNN",
      "Forward & Backward Propagation",
      "Activation Functions",
      "Object Detection",
    ],
  },
];

/* =====================================================
   SINGLE SKILL ROW
   - observes its own visibility
   - animates the bar width once, when it enters view
===================================================== */
const SkillRow = ({ group, index }) => {
  const rowRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Icon = group.icon;

  return (
    <div
      ref={rowRef}
      className="group relative border-b border-white/[0.06] py-7 first:pt-0 last:border-b-0"
    >
      <div className="grid gap-4 sm:grid-cols-[1.1fr_1.4fr] sm:items-start sm:gap-10">
        {/* Left — identity */}
        <div className="flex items-start gap-4">
          <span className="mt-0.5 text-[11px] font-medium tabular-nums text-white/20">
            {group.number}
          </span>

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-violet-400/80">
            <Icon size={15} />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/90">
              {group.title}
            </h3>
            <p className="mt-0.5 text-[10px] uppercase tracking-[1.5px] text-white/25">
              {group.subtitle}
            </p>
          </div>
        </div>

        {/* Right — progress + skills */}
        <div>
          {/* Progress bar */}
          <div className="flex items-center gap-3">
            <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/[0.06]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400 transition-[width] duration-[1200ms] ease-out"
                style={{ width: visible ? `${group.level}%` : "0%" }}
              />
            </div>
            <span className="w-9 shrink-0 text-right text-[11px] tabular-nums text-white/35">
              {group.level}%
            </span>
          </div>

          {/* Skill tags — minimal, no borders */}
          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
            {group.skills.map((skill, i) => (
              <span
                key={skill}
                className="flex items-center text-[11px] text-white/35 transition-colors duration-300 group-hover:text-white/45 hover:!text-violet-300"
              >
                {i !== 0 && (
                  <span className="mr-3 h-[3px] w-[3px] rounded-full bg-white/15" />
                )}
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-14">
          <div className="mb-4 inline-flex items-center gap-2 border-l-2 border-violet-400/50 pl-3">
            <span className="text-[10px] uppercase tracking-[3px] text-white/35">
              Technical Arsenal
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skills{" "}
            <span className="text-white/25">& Expertise</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-white/35">
            A structured overview of the technologies, mathematical concepts
            and machine learning techniques I use to build intelligent
            systems.
          </p>
        </div>

        {/* Skill list */}
        <div>
          {skillGroups.map((group, index) => (
            <SkillRow key={group.title} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;