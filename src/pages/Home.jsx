import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { personalInfo, experience, certifications } from "../data/siteData";
import { Card, Button, SocialLinks } from "../components";
import { ArrowRightIcon, RocketIcon, BriefcaseIcon, AwardIcon, SparklesIcon } from "../components/Icons";

function Home() {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: cardsRef, inView: cardsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: statsRef, inView: statsInView } = useInView({
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

  // Get current role info
  const currentRole = experience.find(e => e.isCurrent);
  const dsdRole = experience.find(e => e.id === "deep-space-dynamics");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />

        {/* Content */}
        <motion.div
          ref={heroRef}
          className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-medium">
              {personalInfo.credentials} Certified
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-navy-300 max-w-3xl mx-auto mb-4"
          >
            {personalInfo.headline}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-navy-400 max-w-2xl mx-auto mb-8"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-navy-300 max-w-2xl mx-auto mb-10"
          >
            {personalInfo.bio.short}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <Link to="/projects">
              <Button variant="primary" size="lg" icon={ArrowRightIcon} iconPosition="right" animate>
                View Projects
              </Button>
            </Link>
            <Link to="/experience">
              <Button variant="outline" size="lg" animate>
                View Experience
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" size="lg" animate className="text-navy-300 hover:text-white">
                Contact Me
              </Button>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}>
            <SocialLinks size="md" />
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-navy-600 flex items-start justify-center p-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Cards Section */}
      <section className="py-20 md:py-28 bg-navy-50 dark:bg-navy-900">
        <motion.div
          ref={cardsRef}
          className="max-w-6xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">
              What I Do
            </h2>
            <p className="text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
              Bridging technology, aerospace, and AI to deliver high-impact solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Current Focus Card */}
            <motion.div variants={itemVariants}>
              <Card className="h-full" gradient>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent-500/20">
                    <RocketIcon className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-navy-900 dark:text-white mb-2">
                      Deep Space Dynamics (Former)
                    </h3>
                    <p className="text-navy-600 dark:text-navy-300 text-sm mb-4">
                      {dsdRole?.description}
                    </p>
                    <ul className="space-y-1 text-sm text-navy-500 dark:text-navy-400">
                      <li>Neuman-class 6U SpaceDrone Platform</li>
                      <li>TSWI-AI Dashboard</li>
                      <li>Grantentic GenAI</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Consulting Card */}
            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-navy-200 dark:bg-navy-700">
                    <BriefcaseIcon className="w-6 h-6 text-navy-600 dark:text-navy-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-navy-900 dark:text-white mb-2">
                      Independent Consulting
                    </h3>
                    <p className="text-navy-600 dark:text-navy-300 text-sm mb-4">
                      {currentRole?.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 text-xs rounded bg-accent-500/10 text-accent-500">29+ Projects</span>
                      <span className="px-2 py-1 text-xs rounded bg-accent-500/10 text-accent-500">7 Repeat Clients</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Skills Card */}
            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-navy-200 dark:bg-navy-700">
                    <AwardIcon className="w-6 h-6 text-navy-600 dark:text-navy-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-navy-900 dark:text-white mb-2">
                      Certifications & Skills
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {certifications.slice(0, 4).map((cert) => (
                        <span
                          key={cert.name}
                          className="px-2 py-1 text-xs rounded bg-navy-200 dark:bg-navy-700 text-navy-600 dark:text-navy-300"
                        >
                          {cert.name}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-navy-500 dark:text-navy-400">
                      Full-Stack Dev, GenAI, Project Management
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Recent Updates Card */}
            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-navy-200 dark:bg-navy-700">
                    <SparklesIcon className="w-6 h-6 text-navy-600 dark:text-navy-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-navy-900 dark:text-white mb-2">
                      Recent Highlights
                    </h3>
                    <ul className="space-y-2 text-sm text-navy-600 dark:text-navy-300">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                        KU Graduation - Dec 2025 (Summa Cum Laude)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                        Strategic Partnerships Secured
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                        SBIR/NSF Pitch Development
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-navy-100 dark:bg-navy-800/50">
        <motion.div
          ref={statsRef}
          className="max-w-6xl mx-auto px-6"
          variants={containerVariants}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {personalInfo.stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-accent-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-navy-600 dark:text-navy-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 md:py-28 bg-navy-50 dark:bg-navy-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-8"
          >
            {personalInfo.closingStatement}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/contact">
              <Button variant="primary" size="lg" icon={ArrowRightIcon} iconPosition="right" animate>
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
