import { forwardRef } from "react";
import { motion } from "framer-motion";

const Card = forwardRef(
  (
    {
      children,
      className = "",
      hover = true,
      gradient = false,
      padding = "p-6",
      ...props
    },
    ref
  ) => {
    const baseStyles = "rounded-xl transition-all duration-300";

    const backgroundStyles = gradient
      ? "bg-gradient-to-br from-accent-500/10 via-purple-500/10 to-accent-600/10 border border-accent-500/20"
      : "bg-navy-100 dark:bg-navy-800/50 border border-navy-200 dark:border-navy-700";

    const hoverClass = hover ? "card-hover" : "";

    const combinedClassName =
      `${baseStyles} ${backgroundStyles} ${padding} ${hoverClass} ${className}`.trim();

    if (hover) {
      return (
        <motion.div
          ref={ref}
          className={combinedClassName}
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          {...props}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div ref={ref} className={combinedClassName} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
