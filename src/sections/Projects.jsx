import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../data/siteData";
import { SectionHeader, Card } from "../components";

const categoryColors = {
  "Project Management": {
    bg: "bg-accent-500/20",
    text: "text-accent-500",
    border: "border-accent-500/30",
  },
  "Software Development": {
    bg: "bg-purple-500/20",
    text: "text-purple-400",
    border: "border-purple-500/30",
  },
  "Data Analytics": {
    bg: "bg-cyan-500/20",
    text: "text-cyan-400",
    border: "border-cyan-500/30",
  },
  "Operations Management": {
    bg: "bg-green-500/20",
    text: "text-green-400",
    border: "border-green-500/30",
  },
  "Training & Development": {
    bg: "bg-amber-500/20",
    text: "text-amber-400",
    border: "border-amber-500/30",
  },
  "Event Management": {
    bg: "bg-pink-500/20",
    text: "text-pink-400",
    border: "border-pink-500/30",
  },
};

function ProjectCard({ project, index, inView }) {
  const colors = categoryColors[project.category] || categoryColors["Project Management"];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="h-full"
    >
      <Card hover padding="p-0" className="h-full flex flex-col overflow-hidden">
        {/* Image Placeholder */}
        <div className="relative h-48 bg-gradient-to-br from-navy-200 to-navy-300 dark:from-navy-700 dark:to-navy-800">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-display font-bold text-navy-400 dark:text-navy-600">
              {project.title.charAt(0)}
            </span>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
            >
              {project.category}
            </span>
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 right-4">
              <span className="px-2 py-1 text-xs font-semibold rounded bg-white/90 dark:bg-navy-900/90 text-navy-900 dark:text-white">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          {/* Title */}
          <h3 className="font-display text-xl font-bold text-navy-900 dark:text-white mb-2">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-navy-600 dark:text-navy-300 text-sm leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          {/* Stats Badges */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.highlights.map((stat, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs font-medium rounded-full bg-navy-100 dark:bg-navy-800 text-navy-700 dark:text-navy-300 border border-navy-200 dark:border-navy-700"
                >
                  {stat}
                </span>
              ))}
            </div>
          )}

          {/* Technology Tags */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4 border-t border-navy-200 dark:border-navy-700">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs text-accent-500 dark:text-accent-400"
                >
                  #{tech.replace(/[\/\s]/g, "")}
                </span>
              ))}
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}

function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Portfolio"
          title="Projects & Achievements"
          subtitle="Highlights from my consulting work, product development, and organizational initiatives across multiple industries and countries."
          centered
        />

        {/* Projects Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
