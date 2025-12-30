import { motion } from "framer-motion";
import { personalInfo } from "../data/siteData";
import { Button, SocialLinks, MapPinIcon, ArrowDownIcon, UserIcon } from "../components";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 flex items-center overflow-hidden"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Accent orb */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Purple orb */}
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Additional accent orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            className="order-2 lg:order-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Location Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-100 dark:bg-navy-800/50 border border-navy-200 dark:border-navy-700 mb-6"
            >
              <MapPinIcon className="w-4 h-4 text-accent-500" />
              <span className="text-sm text-navy-600 dark:text-navy-300">
                {personalInfo.location}
              </span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-navy-500 dark:text-navy-400">
                {personalInfo.locationNote}
              </span>
            </motion.div>

            {/* Name & Credentials */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 dark:text-white mb-4"
            >
              {personalInfo.name}
              <span className="text-accent-500">,</span>{" "}
              <span className="gradient-text">{personalInfo.credentials}</span>
            </motion.h1>

            {/* Headline */}
            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl font-medium text-navy-700 dark:text-navy-200 mb-4"
            >
              {personalInfo.headline}
            </motion.h2>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-navy-600 dark:text-navy-300 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <Button
                variant="primary"
                href="#contact"
                animate
              >
                PM Resume
              </Button>
              <Button
                variant="secondary"
                href="#contact"
                animate
              >
                Communications Resume
              </Button>
              <Button
                variant="ghost"
                href="#contact"
                animate
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start"
            >
              <SocialLinks size="md" />
            </motion.div>
          </motion.div>

          {/* Headshot */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              {/* Decorative blur orbs behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-500/30 via-purple-500/30 to-accent-600/30 rounded-full blur-2xl" />

              {/* Main headshot container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-navy-200 dark:border-navy-700 shadow-2xl">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-400 via-accent-500 to-purple-600" />

                {/* Placeholder icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <UserIcon className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 text-white/80" />
                </div>

                {/* Decorative inner orbs */}
                <motion.div
                  className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-accent-500 rounded-lg"
                animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-500 rounded-full"
                animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-1/2 -right-6 w-4 h-4 bg-accent-400 rounded-full"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-navy-500 dark:text-navy-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDownIcon className="w-5 h-5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
