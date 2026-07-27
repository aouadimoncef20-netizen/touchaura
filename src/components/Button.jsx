import { motion } from "framer-motion";

/**
 * Button Component
 * Reusable button with primary/secondary variants
 *
 * @param {string} variant - "primary" | "secondary"
 * @param {string} size - "sm" | "md" | "lg"
 * @param {boolean} fullWidth - Whether button takes full width
 * @param {function} onClick - Click handler
 * @param {ReactNode} children - Button content
 */
export default function Button({
  variant = "primary",
  size = "lg",
  fullWidth = false,
  onClick,
  children,
  className = "",
}) {
  const baseClasses =
    "font-body text-label-lg uppercase tracking-widest transition-all duration-300 inline-flex items-center justify-center";

  const sizeClasses = {
    sm: "px-6 py-3 text-label-sm",
    md: "px-8 py-4",
    lg: "px-10 py-5",
  };

  const variantClasses = {
    primary:
      "bg-primary text-on-primary hover:bg-primary-container hover:shadow-ambient-lg active:scale-[0.98]",
    secondary:
      "bg-transparent border border-gold text-primary hover:bg-gold/5 active:scale-[0.98]",
    "outline-light":
      "border border-on-primary text-on-primary hover:bg-on-primary hover:text-primary active:scale-[0.98]",
    ghost:
      "bg-transparent text-primary border-b border-primary/20 hover:border-primary pb-1",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {children}
    </motion.button>
  );
}
