import { forwardRef } from "react";
import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-accent-500 text-white hover:bg-accent-600 shadow-lg shadow-accent-500/25",
  secondary:
    "bg-navy-700 text-white border border-navy-600 hover:bg-navy-600 dark:bg-navy-800 dark:border-navy-700 dark:hover:bg-navy-700",
  ghost:
    "text-navy-700 hover:text-accent-500 hover:bg-navy-100 dark:text-navy-200 dark:hover:text-accent-400 dark:hover:bg-navy-800",
  outline:
    "border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white dark:border-accent-400 dark:text-accent-400 dark:hover:bg-accent-500 dark:hover:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-base gap-2",
  lg: "px-8 py-4 text-lg gap-2.5",
};

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      icon: Icon,
      iconPosition = "left",
      href,
      external = false,
      className = "",
      animate = false,
      disabled = false,
      type = "button",
      onClick,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 dark:focus:ring-offset-navy-900 disabled:opacity-50 disabled:cursor-not-allowed";

    const variantStyles = variants[variant] || variants.primary;
    const sizeStyles = sizes[size] || sizes.md;
    const shineClass = variant === "primary" ? "btn-shine" : "";

    const combinedClassName = `${baseStyles} ${variantStyles} ${sizeStyles} ${shineClass} ${className}`.trim();

    const content = (
      <>
        {Icon && iconPosition === "left" && (
          <Icon className={size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5"} />
        )}
        {children}
        {Icon && iconPosition === "right" && (
          <Icon className={size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5"} />
        )}
      </>
    );

    const motionProps = animate
      ? {
          whileHover: { scale: 1.02, y: -2 },
          whileTap: { scale: 0.98 },
          transition: { type: "spring", stiffness: 400, damping: 17 },
        }
      : {};

    if (href) {
      const externalProps = external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {};

      if (animate) {
        return (
          <motion.a
            ref={ref}
            href={href}
            className={combinedClassName}
            {...externalProps}
            {...motionProps}
            {...props}
          >
            {content}
          </motion.a>
        );
      }

      return (
        <a
          ref={ref}
          href={href}
          className={combinedClassName}
          {...externalProps}
          {...props}
        >
          {content}
        </a>
      );
    }

    if (animate) {
      return (
        <motion.button
          ref={ref}
          type={type}
          className={combinedClassName}
          disabled={disabled}
          onClick={onClick}
          {...motionProps}
          {...props}
        >
          {content}
        </motion.button>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        className={combinedClassName}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
