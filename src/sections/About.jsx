import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo } from "../data/siteData";
import { SectionHeader, Card, CheckIcon } from "../components";

function About() {
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
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="About Me"
          title="The Journey So Far"
        />

        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Left Column: Bio */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Short bio */}
            <p className="text-lg text-navy-700 dark:text-navy-200 leading-relaxed">
              {personalInfo.bio.short}
            </p>

            {/* Extended bio paragraphs */}
            {personalInfo.bio.extended.map((paragraph, index) => (
              <p
                key={index}
                className="text-navy-600 dark:text-navy-300 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Right Column: Stats & Open To */}
          <div className="space-y-6">
            {/* 2x2 Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {personalInfo.stats.map((stat, index) => (
                <motion.div key={stat.label} variants={statsVariants}>
                  <Card
                    hover
                    padding="p-6"
                    className="text-center"
                  >
                    <div className="font-display text-3xl md:text-4xl font-bold text-accent-500 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-navy-600 dark:text-navy-300">
                      {stat.label}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Currently Open To Card */}
            <motion.div variants={itemVariants}>
              <Card gradient hover={false} padding="p-6">
                <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-white mb-4">
                  Currently Open To
                </h3>
                <ul className="space-y-3">
                  {personalInfo.openTo.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-500/20 flex items-center justify-center mt-0.5">
                        <CheckIcon className="w-3 h-3 text-accent-500" />
                      </span>
                      <span className="text-navy-700 dark:text-navy-200">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
