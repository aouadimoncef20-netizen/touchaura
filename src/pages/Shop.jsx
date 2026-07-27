import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";

/**
 * Shop Page
 * Premium boutique shop with filtering, search, and product grid
 */
export default function Shop() {
  const [filters, setFilters] = useState({
    search: "",
    categories: ["All Products"],
    colors: [],
    sizes: [],
    priceRange: { min: null, max: null },
  });

  // Filter and search products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search
      if (filters.search) {
        const q = filters.search.toLowerCase();
        if (!product.name.toLowerCase().includes(q) && !product.category.toLowerCase().includes(q)) {
          return false;
        }
      }

      // Categories
      if (!filters.categories.includes("All Products") && filters.categories.length > 0) {
        if (!filters.categories.includes(product.category)) return false;
      }

      // Colors
      if (filters.colors.length > 0) {
        const hasColor = product.colors.some((c) => filters.colors.includes(c));
        if (!hasColor) return false;
      }

      // Sizes
      if (filters.sizes.length > 0) {
        const hasSize = product.sizes.some((s) => filters.sizes.includes(s));
        if (!hasSize) return false;
      }

      // Price range
      if (filters.priceRange.min !== null && product.price < filters.priceRange.min) return false;
      if (filters.priceRange.max !== null && product.price > filters.priceRange.max) return false;

      return true;
    });
  }, [filters]);

  const igImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCfx8uB4E6kBNrYZCNpwQ5bBnX-bcXrq2_fNlp581YB5Q7Ag3quhg_GZrX5W7HM4xFxEVNs_nT8UWWdNdLGggqLVKS3RNC7WiXyUPnKTrbgu2fsbHA_N3SsUnLMTIXu2WX0bgcOtLK4315471NUtgT1nGJpuRVIWulcKrowKE8o79PNZR2jrgKUFxwrqtqWOjLuXbgGh4snoI3O7AI-NpHD4pzB9ctGfpeCmscIJiCD8YV9zGfo3AK-",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA4vw9ZKOI1i3gSFPCZhlpzIBf4EydsbEer6wG5SW_ELYOulgg-NfTvKOJrtUHtP-WQT3veEus3bCKuzqRQyxJ6VyLRYppnubtP8yQlhzDoTGVewjxMvC4c72F7SqebYIcnWyt13XHEHVtJFUpqyjPD8ggMAMb0SUNtAGlkJmRWy5dsFfuF4S_1sTnXNVOO1_uVU8KTlAL70lPNI8UeCXuTLOk5UVvQM9VNvYFw2R6wyv1q8OgHNzDP",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuASGeHNLQ_Nn7RSdcMR0M2cGfvZV_Aml7OoqApgzUnsxaSAS8cHZkFpYVleDJLJoPgHzyrDzMLnLDMMReuz3A73MSUOTZDdT5UpVWJDXpq7Uls0Db4EiLW-_EKVJ0rJr9HwzBokSQbkMXCmArHB_K0a5opsG19GLvWbMqiQlHED3v0d9ZIjqj8HtldKO6P5V_-zOQR2PTz9q2nKlNk0WmDIQHSLf_5izshWX_X9KuO5E5qAa4PqFbVB",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDn3oRObyVKXQX_W-hVejAH7sGt3FxFjhUwWV_7Go-u7zjlFidRk2v7xZSHd7fx5vZxZdxRFnh3b8zlTzl2Fl7C3i8VG0CU46GY5EuFrVSmKH7u4LoDIcvOjOgXoLlDiRt9lR96GftqHvMwcbjajg1Kc-pB1F1_-6Fwv3vEmdnBTUx6Fga0rokGuIzAUgD40x83zJpLxTdF5kmp8IRdcYsdFIvM4HDwyPm7BkkGgVdJJTfyF5et4oJv",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCcEFG1fhh_vTD7HzP9rzfIxfsdZ9PkfvcxeLXoahy3UssYEvsz9pt3Sd2WFd-XYUeAJzqP_Fyezx8ChwldNVOznsJ3yj0F__Zi-dQIX1JFzsWZDj7dq6pVM4C4r6OMehHl3E5v-EwNooREKZSwEuEblJ3VqSJELQof5pgOjhDUUftUIqheR7DyMq0EZC0oEMn8RUqTP-SjjrFbkAUCwVenATsAbur--dSp_4vZFqk-UMeVfQf804pA",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDJFDgVyRdF18A7_cPrKxckIsPz_omKYxURPEPnmstouWh1d5PhmAPQ1KpazRyD0oC5EbWU0iQ4iEHxGpsF6Ip0ua6G7a5J19snUelKNzieIfqn-pDQ6PiSTWZHehlpGP7EzCUDQfmgvAj2mXSvHbjY5BMl2Wrdq2h6Ash3ZFoKXl6QkikPc-VJYBnmQ5lHTTxhriYaKq5FV6Z-Kv2VUqPDR5mVgVZQD4zOSgxHJTPlsZlshyEb4A_a",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAYmqwz3XZfAj1pQmHfEXtJymu9g7sssizFkSaUDb9lGTuhwYIeasqccMIxBds2Vw7UUeHJcNuv00a7ooM87rITWSW5dnjhkGf-FyVFUxQ6yc0Ag3LbnYoaw6vRzwCyC2yWjlUBW8wmnWjBkt9qsQaGlcAKW3Pmdz-hmIuY3Y_83wh_VGsOpKiuEQkfedrDiwzxjK8QKyV-bPef7JNSC-pmCe0NBWbcZFyKPcOFqE9wHY-26K5K4Zu9",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA2eX4bsYivhzTB_zidcMLYax2Bpzhjq5iBdRXlS4FDZHPL4roxY0JDBnEZ31drBjZTINecq4JNVbYLTSnpsB6xe6LWxMSlHU4ntKWYFEYu05BzO194dZh6Kna1cYYZT-xPxDvT5xLJPZrsZZKqbmtwx8qm38fo7Z1t1PUyiH-lL2SMv1COUL57DgTkNonxYNNoR2uKlPazIscnNrNf_3DN33mAyho8NTCM0US3GzRz5IMBJ1jFLD5j",
  ];

  return (
    <div>
      {/* ============ HERO BANNER ============ */}
      <section className="relative h-[35vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAkpcQHv6UxxvMqGfzAwxeiqF24fgq7i3n-6NfeNCJsfgP6iMQLKoHsRAF3m7A7STns-8PH8x7r9Q3GMw51zxTaDhaK-NKSX69yshTIQ-A6iR6WHnU9EkQ98YN1zA_i6Qd4Y2fDNlczPDSJniRvh92RMDyKEkxKBdg1nhIB7hHZPnhxJ0TtRg8xt1O4wbV_7WMyiWgxD4x4S6ciZCKALd5oShLkJ15ycp1wPzGuCqkPmOWgRBS25b0l')",
          }}
        />
        <div className="absolute inset-0 bg-burgundy/30 mix-blend-multiply" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-margin-mobile">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-headline-lg-mobile md:text-headline-lg text-white mb-6 drop-shadow-lg"
          >
            Shop Collection
          </motion.h1>
          <Link
            to="/shop"
            className="px-8 py-3 bg-burgundy text-white font-body text-label-lg uppercase tracking-widest hover:bg-white hover:text-burgundy transition-all duration-500 border border-white/20"
          >
            Explore Now
          </Link>
        </div>
      </section>

      {/* ============ MAIN SHOP ============ */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
        <div className="flex flex-col md:flex-row gap-gutter">
          {/* Sidebar Filters */}
          <FilterSidebar filters={filters} setFilters={setFilters} onApply={() => {}} />

          {/* Product Grid */}
          <div className="flex-1 min-w-0">
            {/* Results count */}
            <div className="mb-6 font-body text-body-md text-on-surface-variant">
              {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"} found
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
                  <p className="font-display text-headline-md text-on-surface-variant mb-4">
                    No products found
                  </p>
                  <p className="font-body text-body-md text-on-surface-variant/70">
                    Try adjusting your filters or search criteria.
                  </p>
                </div>
              )}
            </div>

            {/* Load More (shown when filtered results are many) */}
            {filteredProducts.length > 8 && (
              <div className="mt-16 flex justify-center">
                <button className="px-12 py-4 border border-burgundy text-burgundy font-body text-label-lg uppercase tracking-widest hover:bg-burgundy hover:text-white transition-all duration-300">
                  Load More Products
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ============ INSTAGRAM GALLERY ============ */}
      <section className="py-section-gap bg-cream overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12 text-center">
          <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-burgundy mb-4">
            Follow Our Journey
          </h2>
          <p className="font-body text-body-md text-on-surface-variant max-w-lg mx-auto">
            Discover how our community styles Touche Aura on Instagram.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-8 snap-x no-scrollbar px-margin-mobile">
          {igImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative min-w-[280px] aspect-square snap-center group cursor-pointer overflow-hidden rounded-lg"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${src}')` }}
              />
              <div className="absolute inset-0 bg-burgundy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white font-display text-headline-md">@toucheaura</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
