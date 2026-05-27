import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../data/siteData";
import { Card, SectionHeader } from "../components";
import { ImageIcon, ExternalLinkIcon } from "../components/Icons";

function ProjectImage({ src, alt }) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-navy-300/50 to-navy-400/50 dark:from-navy-600/50 dark:to-navy-700/50 flex items-center justify-center">
        <div className="text-center">
          <ImageIcon className="w-12 h-12 text-navy-400 dark:text-navy-500 mx-auto mb-2" />
          <span className="text-sm text-navy-500 dark:text-navy-400">
            Project Preview
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out hover:scale-150"
    />
  );
}

const categories = ["All", "Space Tech", "AI/Space", "GenAI/SaaS", "Web Dev", "Marketing", "Consulting"];

const categoryColors = {
  "Space Tech": "bg-purple-500/10 text-purple-500 border-purple-500/20",
  "AI/Space": "bg-blue-500/10 text-blue-500 border-blue-500/20",
  "GenAI/SaaS": "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  "Web Dev": "bg-orange-500/10 text-orange-500 border-orange-500/20",
  "Marketing": "bg-pink-500/10 text-pink-500 border-pink-500/20",
  "Consulting": "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
};

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-20"
    >
      <section className="py-20 md:py-28 bg-navy-50 dark:bg-navy-900">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionHeader
            label="Portfolio"
            title="Featured Projects"
            subtitle="A selection of projects spanning aerospace, AI, web development, and consulting"
            centered
          />

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                  ${
                    activeFilter === category
                      ? "bg-accent-500 text-white shadow-lg shadow-accent-500/25"
                      : "bg-navy-100 dark:bg-navy-800 text-navy-600 dark:text-navy-300 hover:bg-navy-200 dark:hover:bg-navy-700"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col group">
                  {/* Project Image */}
                  <div className="w-full aspect-video overflow-hidden rounded-t-lg">
                    <ProjectImage src={project.image} alt={project.title} />
                  </div>

                  {/* Category Badge */}
                  <span
                    className={`
                      inline-block self-start px-3 py-1 text-xs font-medium rounded-full border mb-3
                      ${categoryColors[project.category] || "bg-navy-500/10 text-navy-500 border-navy-500/20"}
                    `}
                  >
                    {project.category}
                  </span>

                  {/* Title & Company */}
                  <h3 className="font-display text-xl font-semibold text-navy-900 dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-accent-500 mb-3">{project.company}</p>

                  {/* Description */}
                  <p className="text-navy-600 dark:text-navy-300 text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded bg-navy-200 dark:bg-navy-700 text-navy-600 dark:text-navy-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Live Link */}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-accent-500 hover:text-accent-600 dark:hover:text-accent-400 font-medium text-sm transition-colors"
                    >
                      View Live
                      <ExternalLinkIcon className="w-4 h-4" />
                    </a>
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-navy-500 dark:text-navy-400">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </motion.div>
      </section>
    </motion.div>
  );
}

export default Projects;
