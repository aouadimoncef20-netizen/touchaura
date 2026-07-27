import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import Gallery from "../components/Gallery";
import ReviewCard from "../components/ReviewCard";
import { FiArrowDown, FiMessageCircle, FiCamera } from "react-icons/fi";

/**
 * Home Page
 * Luxury landing page with hero, best sellers, featured collection,
 * gallery, reviews, and contact sections
 */
export default function Home() {
  // Scroll reveal on mount
  useEffect(() => {
    const handleReveal = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) el.classList.add("active");
      });
    };
    window.addEventListener("scroll", handleReveal);
    handleReveal();
    return () => window.removeEventListener("scroll", handleReveal);
  }, []);

  // Best Sellers: abaya products + one chiffon hijab
  const bestSellers = products.filter(p => p.id === 16 || p.id === 19 || p.id === 3 || p.id === 24);

  // New Collection: products marked as new
  const newCollection = products.filter((p) => p.isNew).slice(0, 4);

  const reviews = [
    {
      name: "Amina J.",
      rating: 5,
      text: "The quality of the silk is beyond anything I've purchased before. It flows beautifully and feels so luxurious against the skin.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJZPZQkufYl0CCxXTj-XA4w4ZK7m2RGlXsvTzR9GaAENOm9SfLGkrKSNQ_69NxJ_ise1iw65kEPouoEr9b1Opmg81R8jwrVCQlV9vJfdduV4iRfHXGXSA6vNoleQMTgfw_I2G730UQrtd5p24YkCAMLhVU7VifGUc9DrFE7eCej5ZUr1NDz8tf2AqKL-FM4H0CA5lUWWU6Tw_PcZPljAwkuYwonWM84WvZDC7dZ07IerQxODkot06l",
      verified: true,
    },
    {
      name: "Leila R.",
      rating: 5,
      text: "Finally found a brand that balances modesty with high-end editorial style. The packaging was also a delight to unbox.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8Vh0mVgLg-Hkh5DPTIF5LlYc86iYq0uzGVHy708SqjOq_K0K0T5mbFu3dXHbOwETO_3iAnLu5bKYbQawIufzr0V4WltiSkhz48G_sh_dYTYbB-JXAUaijjEIjAdPKqjZDPyo1_5AaFPVBWjZ_AsFfMEdQ3YH3Xo33ecOtKC7AWBCPITOp5x_WxX8kFoqxOr4BGRiks0vTJje5b0Si-KLsJkLpQfhgrIPPjD4y59QGDGUzcEyHLyND",
      verified: true,
    },
    {
      name: "Fatima H.",
      rating: 5,
      text: "Every time I wear my Touche Aura cape, I get so many compliments. It truly makes me feel confident and graceful.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7zZyXdF89LPn8XfIKkVuxpnuvKzrnjrN8MGfyTmcUo0RKyZpwyveLeBFOavrL5pb7YNl9GgL_BBwjpUW-BBIy_C3AfXDDjQj4W24CopL6QwJfqy0aMrA34ztDQb_DUfSO5Na1A28sxW052EoR_jBgPX_7t7pQzRE1ZiMJiST-xL3_hVcdkuD251_B0546TqzzcIgGH0q3mZyTM-koyVK0LXgjpqw7LGI6avMwTA7vmngcHCe2b5Vt",
      verified: true,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* ============ HERO SECTION ============ */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5D8VogxdGR06td5IK5AvK67rdB72ppvleLASwFj8qddBT1jECy10CmwtD_jXd2cf9wBVXyirRnWl0fjNce0p7dOHuuylHFOx5x328sVwkfM-umWIQVUbWsL1wRjDB2rqd5wegiZl1fJQblwtYzEdpRqWZ178HYr7EsO5EOdPeHFn49nFBO-F13WzSLYj9GpNluiOWYseEg7I-o3I0DHByv7cvTMdOSBeehbMSKbMxo05mcdOPcuFY"
            alt="Luxury Modest Fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-margin-mobile text-on-primary">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body text-label-lg uppercase tracking-[0.3em] mb-4 opacity-90"
          >
            Luxury Modest Fashion
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-display text-display-lg-mobile md:text-display-lg max-w-4xl mb-8 leading-tight"
          >
            Elegance Begins With Your Aura
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-body text-body-lg max-w-2xl mb-12 opacity-80"
          >
            Discover a curated selection of refined abayas and modest wear designed for the modern
            woman who values grace and exclusivity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col md:flex-row gap-6"
          >
            <Link
              to="/shop"
              className="bg-primary text-on-primary px-10 py-5 font-body text-label-lg uppercase tracking-widest hover:shadow-ambient-lg transition-all duration-300 inline-block"
            >
              Shop Collection
            </Link>
            <Link
              to="/shop"
              className="border border-on-primary text-on-primary px-10 py-5 font-body text-label-lg uppercase tracking-widest hover:bg-on-primary hover:text-primary transition-all duration-300 inline-block"
            >
              Explore New Arrivals
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-on-primary flex flex-col items-center gap-2 animate-bounce-slow">
          <span className="font-body text-label-sm uppercase tracking-widest opacity-60">Scroll</span>
          <FiArrowDown size={28} />
        </div>
      </section>

      {/* ============ BEST SELLERS ============ */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-headline-lg-mobile md:text-headline-lg mb-4"
          >
            Our Best Sellers
          </motion.h2>
          <p className="font-body text-body-md text-on-surface-variant max-w-lg mx-auto">
            Handpicked pieces that represent the peak of craftsmanship and modest style.
          </p>
          <div className="w-24 h-[1px] bg-gold/40 mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {bestSellers.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* ============ NEW COLLECTION ============ */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-headline-lg-mobile md:text-headline-lg mb-4"
          >
            Our New Collection
          </motion.h2>
          <p className="font-body text-body-md text-on-surface-variant max-w-lg mx-auto">
            Fresh arrivals crafted for the modern woman who values grace and distinction.
          </p>
          <div className="w-24 h-[1px] bg-gold/40 mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {newCollection.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block border border-burgundy text-burgundy px-12 py-4 font-body text-label-lg uppercase tracking-widest hover:bg-burgundy hover:text-white transition-all duration-300"
          >
            View All New Arrivals
          </Link>
        </div>
      </section>

      {/* ============ FEATURED COLLECTION ============ */}
      <section className="py-section-gap reveal overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-32">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="absolute -top-10 -left-10 w-full h-full border border-gold/40 z-0" />
              <div className="relative z-10 aspect-[4/5] overflow-hidden bg-surface-container">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOrknAocZZf03KoL0vRzJetIZpOfRgDCnqxsAJpV7UuL1Y1R36nPeqc9ihtCRjbtjE2I2RFS5ApxyX4pTXZEq5FAUaA3M2jpNjB3RRDLqu6Upk7UiPqw9PG4W9fzUKrPfqBSO3BteVIjdK1v5FBwUsQgDnBQsslP1GQTo0Akrz4MwBAepsnRe4QxUunwaEBKmHZv74c_I0YxRtUeh2YjmgWZ4dSIvB8Gwxbnsv6uW--GSgmKqv5e8x"
                  alt="Featured Collection"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <span className="font-body text-label-lg text-tertiary uppercase tracking-[0.2em] mb-6 block">
                Editorial Series
              </span>
              <h2 className="font-display text-headline-lg-mobile md:text-headline-lg mb-8 leading-tight">
                Discover Our Most Coveted Collection
              </h2>
              <p className="font-body text-body-lg text-on-surface-variant mb-10">
                Crafted from the finest ethically sourced fabrics, our newest collection blends
                traditional modest silhouettes with contemporary editorial flair. Each piece is a
                testament to the aura of the woman who wears it—silent, powerful, and undeniably
                elegant.
              </p>

              <div className="flex items-center gap-12 border-t border-gold/40 pt-10">
                <div>
                  <p className="font-display text-[32px] text-primary">100%</p>
                  <p className="font-body text-label-sm uppercase text-on-surface-variant">Fine Silk</p>
                </div>
                <div>
                  <p className="font-display text-[32px] text-primary">Hand</p>
                  <p className="font-body text-label-sm uppercase text-on-surface-variant">Stitched</p>
                </div>
                <div>
                  <p className="font-display text-[32px] text-primary">Ltd</p>
                  <p className="font-body text-label-sm uppercase text-on-surface-variant">Edition</p>
                </div>
              </div>

              <Link
                to="/shop"
                className="mt-12 inline-block bg-primary text-on-primary px-12 py-5 font-body text-label-lg uppercase tracking-widest hover:shadow-ambient-lg transition-all duration-300"
              >
                View Our Collection
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section className="py-section-gap bg-surface-container-low reveal">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-16">
          <h2 className="font-display text-headline-lg-mobile md:text-headline-lg mb-2">
            Style Inspiration
          </h2>
          <p className="font-body text-body-md text-on-surface-variant">
            A visual journey through the Touche Aura universe.
          </p>
        </div>
        <Gallery />
      </section>

      {/* ============ CUSTOMER REVIEWS ============ */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal">
        <div className="text-center mb-16">
          <h2 className="font-display text-headline-lg-mobile md:text-headline-lg">
            Loved By Our Customers
          </h2>
          <div className="w-24 h-[1px] bg-gold/40 mx-auto mt-6" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>
      </section>

      {/* ============ CONTACT / HELP ============ */}
      <section className="bg-primary text-on-primary py-section-gap reveal">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-display text-headline-lg-mobile md:text-headline-lg mb-6">
            Need Help Choosing?
          </h2>
          <p className="font-body text-body-lg max-w-2xl mx-auto mb-12 opacity-80">
            Our personal stylists are available to help you find the perfect piece for your next
            occasion or your everyday wardrobe.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#"
              className="flex items-center gap-3 border border-on-primary/40 px-10 py-5 font-body text-label-lg uppercase tracking-widest hover:bg-on-primary hover:text-primary transition-all duration-300"
            >
              <FiMessageCircle size={20} />
              WhatsApp Concierge
            </a>
            <a
              href="#"
              className="flex items-center gap-3 border border-on-primary/40 px-10 py-5 font-body text-label-lg uppercase tracking-widest hover:bg-on-primary hover:text-primary transition-all duration-300"
            >
              <FiCamera size={20} />
              Instagram Style DM
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-gutter text-on-primary/70">
            <div>
              <p className="font-body text-label-lg mb-2">Atelier Dubai</p>
              <p className="font-body text-body-md">D3 Design District, Dubai, UAE</p>
            </div>
            <div>
              <p className="font-body text-label-lg mb-2">Enquiries</p>
              <p className="font-body text-body-md">care@toucheaura.com</p>
            </div>
            <div>
              <p className="font-body text-label-lg mb-2">Stylist Hours</p>
              <p className="font-body text-body-md">Mon - Sat: 9am - 8pm GST</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inline styles for reveal animation */}
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
