import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills, education } from "../data/siteData";
import { SectionHeader, Card, CheckIcon, ExternalLinkIcon } from "../components";

function SkillCategory({ title, skills: skillList, index, inView }) {
  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.15,
      },
    },
  };

  return (
    <motion.div
      variants={categoryVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="mb-8 last:mb-0"
    >
      <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-white mb-4">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skillList.map((skill, i) => (
          <motion.span
            key={skill}
            className="px-3 py-1.5 text-sm rounded-lg bg-navy-100 dark:bg-navy-800 text-navy-700 dark:text-navy-300 border border-navy-200 dark:border-navy-700 hover:bg-accent-500/10 hover:text-accent-500 hover:border-accent-500/30 dark:hover:text-accent-400 transition-all cursor-default"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.15 + i * 0.03, duration: 0.3 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

function CertificationCard({ cert, index, inView }) {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <Card gradient hover padding="p-4">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-500/20 flex items-center justify-center">
            <CheckIcon className="w-5 h-5 text-accent-500" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-navy-900 dark:text-white">
              {cert.name}
            </h4>
            <p className="text-xs text-navy-500 dark:text-navy-400 truncate">
              {cert.issuer}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

function EducationItem({ edu, index, inView }) {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex gap-4 pb-4 last:pb-0 border-b border-navy-200 dark:border-navy-700 last:border-0"
    >
      {/* Year Badge */}
      <div className="flex-shrink-0">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent-500/20 text-accent-500">
          {edu.graduationDate.split(" ")[1] || edu.graduationDate}
        </span>
      </div>

      {/* Details */}
      <div className="flex-1">
        <h4 className="font-semibold text-navy-900 dark:text-white">
          {edu.degree} in {edu.field}
        </h4>
        <p className="text-sm text-accent-500">{edu.institution}</p>
        {edu.honors && (
          <p className="text-xs text-navy-500 dark:text-navy-400 mt-1">
            {edu.honors}
            {edu.gpa && ` • GPA: ${edu.gpa}`}
          </p>
        )}
      </div>
    </motion.div>
  );
}

function Skills() {
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
      },
    },
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-navy-50/50 dark:bg-navy-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Expertise"
          title="Skills & Certifications"
        />

        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Left Column: Skills */}
          <motion.div variants={itemVariants}>
            <SkillCategory
              title="Technical Skills"
              skills={skills.technical}
              index={0}
              inView={inView}
            />
            <SkillCategory
              title="Methodologies"
              skills={skills.methodology}
              index={1}
              inView={inView}
            />
            <SkillCategory
              title="Soft Skills"
              skills={skills.soft}
              index={2}
              inView={inView}
            />
          </motion.div>

          {/* Right Column: Certifications & Education */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-white">
                  Certifications
                </h3>
                <a
                  href="https://credly.com/users/iamtomerickson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-500 hover:text-accent-400 transition-colors"
                  aria-label="View certifications on Credly"
                >
                  <ExternalLinkIcon className="w-4 h-4" />
                </a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.certifications.map((cert, index) => (
                  <CertificationCard
                    key={cert.name}
                    cert={cert}
                    index={index}
                    inView={inView}
                  />
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-white mb-4">
                Education
              </h3>
              <Card hover={false} padding="p-6">
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <EducationItem
                      key={edu.id}
                      edu={edu}
                      index={index}
                      inView={inView}
                    />
                  ))}
                </div>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
