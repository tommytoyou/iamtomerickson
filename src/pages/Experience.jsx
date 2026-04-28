import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experience } from "../data/siteData";
import { Card, SectionHeader } from "../components";
import { MapPinIcon, ChevronDownIcon, ChevronUpIcon, BriefcaseIcon } from "../components/Icons";

const companyLogos = {
  "parker-dewey": "/images/logos/parkerdewey.png",
};

function CompanyLogo({ companyId }) {
  const [hasError, setHasError] = useState(false);
  const logoSrc = companyLogos[companyId];

  if (!logoSrc || hasError) {
    return (
      <div className="w-12 h-12 rounded-lg bg-navy-200 dark:bg-navy-700 flex items-center justify-center flex-shrink-0">
        <BriefcaseIcon className="w-6 h-6 text-navy-400 dark:text-navy-500" />
      </div>
    );
  }

  return (
    <img
      src={logoSrc}
      alt="Company logo"
      onError={() => setHasError(true)}
      className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
    />
  );
}

function Experience() {
  const [expandedId, setExpandedId] = useState(null);
  const [showOlderRoles, setShowOlderRoles] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const toggleExpanded = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const recentRoles = experience.filter((exp) => !exp.isOlder);
  const olderRoles = experience.filter((exp) => exp.isOlder);

  const categoryLabels = {
    webDev: "Web Development",
    marketing: "Marketing & Strategy",
    operations: "Operations & Consulting",
  };

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
          className="max-w-4xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SectionHeader
            label="Career"
            title="Professional Experience"
            subtitle="A timeline of my professional journey"
            centered
          />

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-navy-200 dark:bg-navy-700 md:-translate-x-1/2" />

            {/* Experience Items */}
            <div className="space-y-12">
              {recentRoles.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-accent-500 border-4 border-navy-50 dark:border-navy-900 md:-translate-x-1/2 z-10" />

                  {/* Date Column */}
                  <div
                    className={`md:w-1/2 pl-8 md:pl-0 ${
                      index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <span className="text-sm text-navy-500 dark:text-navy-400">
                      {exp.dateRange}
                    </span>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`md:w-1/2 pl-8 md:pl-0 ${
                      index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                    }`}
                  >
                    <Card
                      hover={false}
                      className={`relative ${exp.isCurrent ? "border-accent-500/50" : ""}`}
                    >
                      {/* Current Badge */}
                      {exp.isCurrent && (
                        <span className="absolute -top-3 right-4 px-3 py-1 text-xs font-medium rounded-full bg-accent-500 text-white">
                          Current
                        </span>
                      )}

                      <div className="space-y-4">
                        {/* Header with Logo */}
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-display text-xl font-semibold text-navy-900 dark:text-white">
                              {exp.title}
                            </h3>
                            <p className="text-accent-500 font-medium">{exp.company}</p>
                            <div className="flex items-center gap-1 text-sm text-navy-500 dark:text-navy-400 mt-1">
                              <MapPinIcon className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                          <CompanyLogo companyId={exp.id} />
                        </div>

                        {/* Description */}
                        <p className="text-navy-600 dark:text-navy-300">{exp.description}</p>

                        {/* Parker Dewey Categories */}
                        {exp.categories && (
                          <div className="space-y-4">
                            {Object.entries(exp.categories).map(([key, items]) => (
                              <div key={key}>
                                <h4 className="text-sm font-semibold text-navy-700 dark:text-navy-200 mb-2">
                                  {categoryLabels[key]}
                                </h4>
                                <ul className="space-y-1">
                                  {items.map((item, idx) => (
                                    <li
                                      key={idx}
                                      className="text-sm text-navy-600 dark:text-navy-300 flex items-start gap-2"
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-accent-400 mt-2 flex-shrink-0" />
                                      <span>
                                        <strong>{item.name}</strong>: {item.details}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Highlights (Expandable) */}
                        {exp.highlights && exp.highlights.length > 0 && (
                          <div>
                            <button
                              onClick={() => toggleExpanded(exp.id)}
                              className="flex items-center gap-2 text-sm text-accent-500 hover:text-accent-400 transition-colors"
                            >
                              {expandedId === exp.id ? (
                                <>
                                  <ChevronUpIcon className="w-4 h-4" />
                                  Hide Details
                                </>
                              ) : (
                                <>
                                  <ChevronDownIcon className="w-4 h-4" />
                                  Show Details
                                </>
                              )}
                            </button>

                            <AnimatePresence>
                              {expandedId === exp.id && (
                                <motion.ul
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="mt-3 space-y-2 overflow-hidden"
                                >
                                  {exp.highlights.map((highlight, idx) => (
                                    <li
                                      key={idx}
                                      className="text-sm text-navy-600 dark:text-navy-300 flex items-start gap-2"
                                    >
                                      <span className="w-1.5 h-1.5 rounded-full bg-accent-400 mt-2 flex-shrink-0" />
                                      {highlight}
                                    </li>
                                  ))}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </div>
                        )}
                      </div>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Earlier Career Section */}
            {olderRoles.length > 0 && (
              <motion.div variants={itemVariants} className="mt-16">
                <button
                  onClick={() => setShowOlderRoles(!showOlderRoles)}
                  className="w-full flex items-center justify-center gap-2 py-4 text-navy-600 dark:text-navy-300 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
                >
                  <BriefcaseIcon className="w-5 h-5" />
                  <span className="font-medium">
                    {showOlderRoles ? "Hide Earlier Career" : "Show Earlier Career"}
                  </span>
                  {showOlderRoles ? (
                    <ChevronUpIcon className="w-5 h-5" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5" />
                  )}
                </button>

                <AnimatePresence>
                  {showOlderRoles && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-12 mt-8">
                        {olderRoles.map((exp, index) => (
                          <div
                            key={exp.id}
                            className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                              (recentRoles.length + index) % 2 === 0
                                ? "md:flex-row"
                                : "md:flex-row-reverse"
                            }`}
                          >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-navy-400 border-4 border-navy-50 dark:border-navy-900 md:-translate-x-1/2 z-10" />

                            {/* Date Column */}
                            <div
                              className={`md:w-1/2 pl-8 md:pl-0 ${
                                (recentRoles.length + index) % 2 === 0
                                  ? "md:text-right md:pr-12"
                                  : "md:pl-12"
                              }`}
                            >
                              <span className="text-sm text-navy-500 dark:text-navy-400">
                                {exp.dateRange}
                              </span>
                            </div>

                            {/* Content Column */}
                            <div
                              className={`md:w-1/2 pl-8 md:pl-0 ${
                                (recentRoles.length + index) % 2 === 0
                                  ? "md:pl-12"
                                  : "md:pr-12"
                              }`}
                            >
                              <Card hover={false} className="opacity-90">
                                <div className="space-y-4">
                                  <div className="flex items-start justify-between gap-4">
                                    <div>
                                      <h3 className="font-display text-xl font-semibold text-navy-900 dark:text-white">
                                        {exp.title}
                                      </h3>
                                      <p className="text-accent-500 font-medium">{exp.company}</p>
                                      <div className="flex items-center gap-1 text-sm text-navy-500 dark:text-navy-400 mt-1">
                                        <MapPinIcon className="w-4 h-4" />
                                        {exp.location}
                                      </div>
                                    </div>
                                    <CompanyLogo companyId={exp.id} />
                                  </div>

                                  <p className="text-navy-600 dark:text-navy-300">
                                    {exp.description}
                                  </p>

                                  {exp.highlights && exp.highlights.length > 0 && (
                                    <ul className="space-y-2">
                                      {exp.highlights.map((highlight, idx) => (
                                        <li
                                          key={idx}
                                          className="text-sm text-navy-600 dark:text-navy-300 flex items-start gap-2"
                                        >
                                          <span className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0" />
                                          {highlight}
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              </Card>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}

export default Experience;
