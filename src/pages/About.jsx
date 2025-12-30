import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  personalInfo,
  skills,
  certifications,
  education,
  affiliations,
  languages,
} from "../data/siteData";
import { Card, SectionHeader } from "../components";
import {
  UserIcon,
  ChartIcon,
  SearchIcon,
  LayersIcon,
  CodeIcon,
  CalculatorIcon,
  ClipboardIcon,
  SparklesIcon,
  AwardIcon,
  BookIcon,
  GlobeIcon,
  UsersIcon,
} from "../components/Icons";

const iconMap = {
  chart: ChartIcon,
  search: SearchIcon,
  layers: LayersIcon,
  code: CodeIcon,
  calculator: CalculatorIcon,
  clipboard: ClipboardIcon,
  sparkles: SparklesIcon,
};

function About() {
  const { ref: bioRef, inView: bioInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: skillsRef, inView: skillsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: certsRef, inView: certsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: eduRef, inView: eduInView } = useInView({
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-navy-50 dark:bg-navy-900">
        <motion.div
          ref={bioRef}
          className="max-w-6xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate={bioInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Headshot Placeholder */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-navy-200 dark:bg-navy-700 flex items-center justify-center border-4 border-navy-300 dark:border-navy-600">
                <UserIcon className="w-24 h-24 md:w-32 md:h-32 text-navy-400 dark:text-navy-500" />
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-4">
                {personalInfo.name}
              </h1>
              <p className="text-lg text-accent-500 mb-6">
                {personalInfo.headline}
              </p>
              <div className="space-y-4 text-navy-600 dark:text-navy-300">
                {personalInfo.bio.extended.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Open To */}
              <div className="mt-8">
                <h3 className="font-semibold text-navy-900 dark:text-white mb-3">
                  Open to:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.openTo.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm rounded-full bg-accent-500/10 text-accent-500 border border-accent-500/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 md:py-28 bg-navy-100 dark:bg-navy-800/50">
        <motion.div
          ref={skillsRef}
          className="max-w-6xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
        >
          <SectionHeader
            label="Expertise"
            title="Skills & Capabilities"
            subtitle="A diverse skill set spanning project management, technology, and consulting"
          />

          {/* Skills Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skills.categories.map((skill) => {
              const IconComponent = iconMap[skill.icon] || SparklesIcon;
              return (
                <motion.div key={skill.name} variants={itemVariants}>
                  <Card className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent-500/10">
                        <IconComponent className="w-5 h-5 text-accent-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-900 dark:text-white mb-1">
                          {skill.name}
                        </h3>
                        {skill.details && (
                          <p className="text-sm text-navy-500 dark:text-navy-400">
                            {skill.details}
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Technical Skills */}
          <motion.div variants={itemVariants}>
            <h3 className="font-display text-xl font-semibold text-navy-900 dark:text-white mb-4">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.technical.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-lg bg-navy-200 dark:bg-navy-700 text-navy-700 dark:text-navy-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div variants={itemVariants}>
            <h3 className="font-display text-xl font-semibold text-navy-900 dark:text-white mb-4">
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 text-sm rounded-lg bg-navy-200 dark:bg-navy-700 text-navy-700 dark:text-navy-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={itemVariants}>
            <h3 className="font-display text-xl font-semibold text-navy-900 dark:text-white mb-4">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.soft.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-lg bg-accent-500/10 text-accent-500"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 md:py-28 bg-navy-50 dark:bg-navy-900">
        <motion.div
          ref={certsRef}
          className="max-w-6xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate={certsInView ? "visible" : "hidden"}
        >
          <SectionHeader
            label="Credentials"
            title="Certifications"
            subtitle="Professional certifications and credentials"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <motion.div key={cert.name} variants={itemVariants}>
                <Card gradient className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent-500/20">
                      <AwardIcon className="w-5 h-5 text-accent-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-900 dark:text-white mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-navy-600 dark:text-navy-300 mb-2">
                        {cert.fullName}
                      </p>
                      <p className="text-xs text-navy-500 dark:text-navy-400">
                        {cert.issuer} {cert.year && `| ${cert.year}`}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="py-20 md:py-28 bg-navy-100 dark:bg-navy-800/50">
        <motion.div
          ref={eduRef}
          className="max-w-6xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate={eduInView ? "visible" : "hidden"}
        >
          <SectionHeader
            label="Education"
            title="Academic Background"
            subtitle="Formal education and training"
          />

          <div className="space-y-6 mb-16">
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card hover={false} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-navy-200 dark:bg-navy-700">
                      <BookIcon className="w-5 h-5 text-navy-600 dark:text-navy-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-navy-900 dark:text-white">
                          {edu.degree} in {edu.field}
                        </h3>
                        <span className="text-sm text-navy-500 dark:text-navy-400">
                          {edu.year}
                        </span>
                      </div>
                      <p className="text-navy-600 dark:text-navy-300 mb-1">
                        {edu.school}
                      </p>
                      {edu.honors && (
                        <span className="inline-block px-2 py-0.5 text-xs rounded bg-accent-500/10 text-accent-500">
                          {edu.honors}
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Affiliations */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <UsersIcon className="w-6 h-6 text-accent-500" />
              <h3 className="font-display text-2xl font-semibold text-navy-900 dark:text-white">
                Affiliations
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {affiliations.map((affiliation) => (
                <span
                  key={affiliation}
                  className="px-4 py-2 rounded-lg bg-navy-200 dark:bg-navy-700 text-navy-700 dark:text-navy-200"
                >
                  {affiliation}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <GlobeIcon className="w-6 h-6 text-accent-500" />
              <h3 className="font-display text-2xl font-semibold text-navy-900 dark:text-white">
                Languages
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {languages.map((lang) => (
                <Card key={lang.name} hover={false} padding="p-4">
                  <div className="text-center">
                    <p className="font-semibold text-navy-900 dark:text-white">
                      {lang.name}
                    </p>
                    <p className="text-sm text-navy-500 dark:text-navy-400">
                      {lang.level}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
}

export default About;
