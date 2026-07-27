import { FiSearch, FiX, FiSliders } from "react-icons/fi";
import { categories, allColors } from "../data/products";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/**
 * FilterSidebar Component
 * Luxury boutique-style filtering with instant reactivity
 *
 * @param {object} filters - Current filter state
 * @param {function} setFilters - Filter state setter
 */
export default function FilterSidebar({ filters, setFilters, onApply }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const sizes = ["S", "M", "L", "XL"];

  const handleCategoryToggle = (category) => {
    setFilters((prev) => {
      if (category === "All Products") {
        return { ...prev, categories: ["All Products"] };
      }
      const filtered = prev.categories.filter((c) => c !== "All Products");
      const idx = filtered.indexOf(category);
      if (idx >= 0) filtered.splice(idx, 1);
      else filtered.push(category);
      return { ...prev, categories: filtered.length === 0 ? ["All Products"] : filtered };
    });
  };

  const handleColorToggle = (colorHex) => {
    setFilters((prev) => {
      const current = [...prev.colors];
      const idx = current.indexOf(colorHex);
      idx >= 0 ? current.splice(idx, 1) : current.push(colorHex);
      return { ...prev, colors: current };
    });
  };

  const handleSizeToggle = (size) => {
    setFilters((prev) => {
      const current = [...prev.sizes];
      const idx = current.indexOf(size);
      idx >= 0 ? current.splice(idx, 1) : current.push(size);
      return { ...prev, sizes: current };
    });
  };

  const handlePriceChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: { ...prev.priceRange, [type]: value ? Number(value) : null },
    }));
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      categories: ["All Products"],
      colors: [],
      sizes: [],
      priceRange: { min: null, max: null },
    });
  };

  const activeCount =
    (filters.categories.includes("All Products") ? 0 : filters.categories.length) +
    filters.colors.length +
    filters.sizes.length +
    (filters.priceRange.min || filters.priceRange.max ? 1 : 0);

  const filterContent = (
    <div className="space-y-8">
      {/* ===== HEADER ===== */}
      <div className="flex items-center justify-between border-b border-gold/20 pb-5">
        <div>
          <h3 className="font-display text-xl text-primary tracking-tight">Filters</h3>
          {activeCount > 0 && (
            <p className="font-body text-label-sm text-on-surface-variant mt-0.5">
              {activeCount} active
            </p>
          )}
        </div>
        {activeCount > 0 && (
          <button
            onClick={clearFilters}
            className="font-body text-[11px] uppercase tracking-[0.15em] text-on-surface-variant hover:text-primary border-b border-transparent hover:border-primary transition-all pb-0.5"
          >
            Clear all
          </button>
        )}
      </div>

      {/* ===== SEARCH ===== */}
      <div>
        <div className="relative">
          <input
            className="w-full bg-transparent border-b border-gold/30 py-3 pr-8 focus:border-burgundy transition-all font-body text-body-md outline-none placeholder:text-on-surface-variant/40"
            placeholder="Search products..."
            type="text"
            value={filters.search}
            onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value }))}
          />
          <FiSearch className="absolute right-0 top-1/2 -translate-y-1/2 text-on-surface-variant/40" size={16} />
          {filters.search && (
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 text-on-surface-variant/40 hover:text-primary"
              onClick={() => setFilters((prev) => ({ ...prev, search: "" }))}
            >
              <FiX size={16} />
            </button>
          )}
        </div>
      </div>

      {/* ===== CATEGORIES ===== */}
      <div>
        <h4 className="font-body text-[11px] uppercase tracking-[0.2em] text-on-surface-variant mb-4">
          Category
        </h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = filters.categories.includes(cat);
            return (
              <button
                key={cat}
                onClick={() => handleCategoryToggle(cat)}
                className={`px-4 py-2 font-body text-[12px] uppercase tracking-[0.1em] transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-on-primary shadow-sm"
                    : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high border border-gold/15"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* ===== COLORS ===== */}
      <div>
        <h4 className="font-body text-[11px] uppercase tracking-[0.2em] text-on-surface-variant mb-4">
          Color
        </h4>
        <div className="flex flex-wrap gap-3">
          {allColors.map((color) => {
            const isActive = filters.colors.includes(color.hex);
            return (
              <button
                key={color.hex}
                onClick={() => handleColorToggle(color.hex)}
                className="flex flex-col items-center gap-1.5 group"
                title={color.name}
              >
                <span
                  className={`w-7 h-7 rounded-full transition-all duration-300 ${
                    isActive
                      ? "ring-2 ring-burgundy ring-offset-2 scale-110"
                      : "ring-1 ring-outline-variant hover:ring-gold/60"
                  }`}
                  style={{ backgroundColor: color.hex }}
                />
                <span
                  className={`font-body text-[9px] uppercase tracking-wider transition-colors ${
                    isActive ? "text-primary font-semibold" : "text-on-surface-variant/60 group-hover:text-on-surface-variant"
                  }`}
                >
                  {color.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ===== SIZES ===== */}
      <div>
        <h4 className="font-body text-[11px] uppercase tracking-[0.2em] text-on-surface-variant mb-4">
          Size
        </h4>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => {
            const isActive = filters.sizes.includes(size);
            return (
              <button
                key={size}
                onClick={() => handleSizeToggle(size)}
                className={`w-10 h-10 flex items-center justify-center font-body text-[13px] transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-on-primary shadow-sm"
                    : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high border border-gold/15"
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* ===== PRICE RANGE ===== */}
      <div>
        <h4 className="font-body text-[11px] uppercase tracking-[0.2em] text-on-surface-variant mb-4">
          Price Range
        </h4>
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 font-body text-[11px] text-on-surface-variant/50">
              DZD
            </span>
            <input
              type="number"
              placeholder="Min"
              className="w-full bg-transparent border-b border-gold/30 py-3 pl-10 focus:border-burgundy transition-all font-body text-body-sm outline-none text-sm"
              value={filters.priceRange.min || ""}
              onChange={(e) => handlePriceChange("min", e.target.value)}
            />
          </div>
          <span className="text-on-surface-variant/30 text-xs">—</span>
          <div className="relative flex-1">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 font-body text-[11px] text-on-surface-variant/50">
              DZD
            </span>
            <input
              type="number"
              placeholder="Max"
              className="w-full bg-transparent border-b border-gold/30 py-3 pl-10 focus:border-burgundy transition-all font-body text-body-sm outline-none text-sm"
              value={filters.priceRange.max || ""}
              onChange={(e) => handlePriceChange("max", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* ===== MOBILE FILTER TRIGGER ===== */}
      <div className="md:hidden mb-6">
        <button
          onClick={() => setMobileOpen(true)}
          className="w-full flex items-center justify-center gap-3 py-4 border border-gold/30 text-primary font-body text-label-sm uppercase tracking-[0.15em] hover:bg-primary hover:text-on-primary transition-all duration-300"
        >
          <FiSliders size={16} />
          Filters
          {activeCount > 0 && (
            <span className="bg-primary text-on-primary text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
              {activeCount}
            </span>
          )}
        </button>
      </div>

      {/* ===== DESKTOP SIDEBAR ===== */}
      <aside className="hidden md:block w-full md:w-[260px] lg:w-[280px] shrink-0">
        <div className="sticky top-28 bg-white p-7 shadow-ambient border border-gold/10">
          {filterContent}
        </div>
      </aside>

      {/* ===== MOBILE DRAWER ===== */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm z-50 bg-background p-6 overflow-y-auto shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-xl text-primary">Filters</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center hover:bg-surface-container rounded-full transition-colors"
                >
                  <FiX size={18} />
                </button>
              </div>
              {filterContent}
              <div className="mt-8 space-y-3">
                <button
                  onClick={() => { setMobileOpen(false); onApply && onApply(); }}
                  className="w-full py-4 bg-primary text-on-primary font-body text-label-sm uppercase tracking-[0.15em] hover:bg-primary-container transition-all"
                >
                  Show Results
                </button>
                <button
                  onClick={() => { clearFilters(); }}
                  className="w-full py-3 text-on-surface-variant font-body text-label-sm uppercase tracking-[0.15em] hover:text-primary transition-all"
                >
                  Clear All
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
