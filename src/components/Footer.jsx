import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { personalInfo, navigation } from "../data/siteData";
import { MapPinIcon, MailIcon } from "./Icons";
import SocialLinks from "./SocialLinks";

function Footer() {
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-100 dark:bg-navy-900 border-t border-navy-200 dark:border-navy-800">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Column 1: Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <a
              href="#home"
              className="inline-block font-display text-2xl font-bold text-navy-900 dark:text-white"
            >
              Tom<span className="text-accent-500">.</span>Erickson
            </a>
            <p className="text-navy-600 dark:text-navy-300 leading-relaxed">
              {personalInfo.tagline}
            </p>
            <div className="flex items-center gap-2 text-navy-500 dark:text-navy-400">
              <MapPinIcon className="w-4 h-4 text-accent-500" />
              <span>{personalInfo.location}</span>
              <span className="text-accent-500">•</span>
              <span>{personalInfo.locationNote}</span>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-navy-600 dark:text-navy-300 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Connect */}
          <motion.div variants={itemVariants}>
            <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-white mb-4">
              Connect
            </h3>
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-navy-600 dark:text-navy-300 hover:text-accent-500 dark:hover:text-accent-400 transition-colors group"
              >
                <span className="p-2 rounded-lg bg-navy-200 dark:bg-navy-800 group-hover:bg-accent-500/10 transition-colors">
                  <MailIcon className="w-4 h-4" />
                </span>
                <span>{personalInfo.email}</span>
              </a>
              <div className="pt-2">
                <SocialLinks size="sm" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="border-t border-navy-200 dark:border-navy-800 mt-12 pt-8"
        >
          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-navy-500 dark:text-navy-400">
            <p>
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="flex items-center gap-1">
              Built with{" "}
              <span className="text-red-500 animate-pulse">♥</span>{" "}
              in Kampot, Cambodia
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;
