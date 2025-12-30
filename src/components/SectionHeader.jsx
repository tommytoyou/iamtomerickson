import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function SectionHeader({
  label,
  title,
  subtitle,
  centered = false,
  className = "",
}) {
  const { ref, inView } = useInView({
    threshold: 0.2,
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

  const alignmentClasses = centered ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col gap-3 mb-12 ${alignmentClasses} ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {label && (
        <motion.span
          className="text-sm font-semibold uppercase tracking-widest text-accent-400"
          variants={itemVariants}
        >
          {label}
        </motion.span>
      )}

      {title && (
        <motion.h2
          className="font-display text-3xl md:text-4xl font-bold text-navy-900 dark:text-white"
          variants={itemVariants}
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
        <motion.p
          className="text-lg text-navy-600 dark:text-navy-300 max-w-2xl"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

export default SectionHeader;
