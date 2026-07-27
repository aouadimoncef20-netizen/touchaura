import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiHeart, FiStar } from "react-icons/fi";
import { formatPrice } from "../utils/format";

/**
 * ProductCard Component
 * Displays a product with image, name, rating, price, and hover effects
 *
 * @param {object} product - Product data object
 * @param {number} index - Index for staggered animation
 */
export default function ProductCard({ product, index = 0 }) {
  const { id, name, category, price, originalPrice, rating, images, isNew, isSale, colors } = product;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="product-card group cursor-pointer"
    >
      <Link to={`/product/${id}`}>
        <div className="relative overflow-hidden aspect-[3/4] bg-surface-container mb-6">
          <img
            src={images[0]}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {isNew && (
              <span className="bg-primary text-on-primary text-[10px] font-body text-label-sm px-3 py-1 uppercase tracking-widest">
                New
              </span>
            )}
            {isSale && (
              <span className="bg-gold text-white text-[10px] font-body text-label-sm px-3 py-1 uppercase tracking-widest">
                Sale
              </span>
            )}
          </div>

          {/* Wishlist button */}
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            aria-label="Add to wishlist"
          >
            <FiHeart size={16} />
          </button>
        </div>
      </Link>

      <div className="text-center">
        <h3 className="font-display text-headline-md text-[18px] mb-2">{name}</h3>

        {/* Stars */}
        <div className="flex items-center justify-center gap-0.5 text-tertiary mb-2">
          {[...Array(5)].map((_, i) => (
            <FiStar
              key={i}
              size={14}
              className={i < rating ? "fill-tertiary text-tertiary" : "text-outline-variant"}
            />
          ))}
        </div>

        {/* Price */}
        <p className="font-body text-label-lg text-primary mb-4">
          {originalPrice && (
            <span className="line-through mr-2 text-on-surface-variant/50">{formatPrice(originalPrice)}</span>
          )}
          {formatPrice(price)}
        </p>

        {/* Add to Cart */}
        <Link
          to={`/product/${id}`}
          className="font-body text-label-sm uppercase tracking-widest border-b border-primary/20 pb-1 hover:border-primary transition-all"
        >
          Quick View
        </Link>

        {/* Color dots */}
        {colors && colors.length > 0 && (
          <div className="flex items-center justify-center gap-2 mt-3">
            {colors.map((color, i) => (
              <span
                key={i}
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
