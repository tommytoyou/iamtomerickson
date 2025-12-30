import { motion } from "framer-motion";
import { socialLinks } from "../data/siteData";
import {
  LinkedInIcon,
  TwitterIcon,
  GitHubIcon,
  CredlyIcon,
} from "./Icons";

const iconMap = {
  Linkedin: LinkedInIcon,
  Twitter: TwitterIcon,
  Github: GitHubIcon,
  Award: CredlyIcon,
};

const sizes = {
  sm: {
    padding: "p-2",
    icon: "w-4 h-4",
    gap: "gap-2",
  },
  md: {
    padding: "p-3",
    icon: "w-5 h-5",
    gap: "gap-3",
  },
  lg: {
    padding: "p-4",
    icon: "w-6 h-6",
    gap: "gap-4",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

function SocialLinks({ className = "", size = "md" }) {
  const sizeConfig = sizes[size] || sizes.md;

  return (
    <motion.div
      className={`flex items-center ${sizeConfig.gap} ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map((link) => {
        const IconComponent = iconMap[link.icon];

        if (!IconComponent) return null;

        return (
          <motion.a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${link.platform} profile`}
            className={`
              ${sizeConfig.padding}
              rounded-lg
              text-navy-500 dark:text-navy-400
              bg-navy-100 dark:bg-navy-800/50
              border border-navy-200 dark:border-navy-700
              hover:bg-navy-700/50 hover:text-white
              hover:border-accent-500/50
              transition-all duration-300
            `}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconComponent className={sizeConfig.icon} />
          </motion.a>
        );
      })}
    </motion.div>
  );
}

export default SocialLinks;
