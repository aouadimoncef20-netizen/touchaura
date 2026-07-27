import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

/**
 * LoadingScreen Component
 * Luxury loading animation displayed before entering the website
 */
export default function LoadingScreen({ onLoaded }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onLoaded) setTimeout(onLoaded, 800);
    }, 2500);
    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <motion.h1
              className="font-display text-display-lg-mobile md:text-display-lg text-primary tracking-tighter mb-4"
              animate={{ opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Touche Aura
            </motion.h1>

            {/* Gold divider */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-[1px] bg-gold/60 mx-auto mb-6"
              style={{ maxWidth: "120px" }}
            />

            <motion.p
              className="font-body text-label-sm uppercase tracking-[0.3em] text-on-surface-variant"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Luxury Modest Fashion
            </motion.p>
          </motion.div>

          {/* Loading Bar */}
          <motion.div
            className="mt-16 w-48 h-[1px] bg-outline-variant overflow-hidden rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-gold"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
