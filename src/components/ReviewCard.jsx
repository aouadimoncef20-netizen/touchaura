import { FiStar } from "react-icons/fi";
import { motion } from "framer-motion";

/**
 * ReviewCard Component
 * Displays a customer review with avatar, name, rating, and quote
 *
 * @param {object} review - { name, rating, text, avatar, verified }
 * @param {number} index - For stagger animation
 */
export default function ReviewCard({ review, index = 0 }) {
  const { name, rating, text, avatar, verified } = review;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-surface-container-lowest p-10 border border-gold/20 shadow-ambient flex flex-col items-center text-center"
    >
      {/* Avatar */}
      {avatar && (
        <div className="w-20 h-20 rounded-full overflow-hidden mb-6">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
      )}

      {/* Stars */}
      <div className="flex text-tertiary mb-4">
        {[...Array(5)].map((_, i) => (
          <FiStar
            key={i}
            size={18}
            className={i < rating ? "fill-tertiary text-tertiary" : "text-outline-variant"}
          />
        ))}
      </div>

      {/* Text */}
      <p className="font-body text-body-md italic text-on-surface-variant mb-6">"{text}"</p>

      {/* Name */}
      <h4 className="font-display text-headline-md text-[16px] uppercase tracking-widest">
        {name}
      </h4>
      {verified && (
        <span className="font-body text-label-sm text-tertiary mt-1">Verified Buyer</span>
      )}
    </motion.div>
  );
}
