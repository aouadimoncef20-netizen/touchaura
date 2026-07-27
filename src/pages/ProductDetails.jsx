import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiStar, FiMinus, FiPlus, FiChevronDown, FiCheckCircle, FiTruck, FiLock, FiRefreshCw } from "react-icons/fi";
import products from "../data/products";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/format";

/**
 * ProductDetails Page
 * Full product detail view with image gallery, color/size selectors,
 * quantity control, accordions, and related products
 */
export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || null);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Handle not found
  if (!product) {
    return (
      <main className="min-h-screen pt-32 pb-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
        <h1 className="font-display text-headline-lg mb-6">Product Not Found</h1>
        <Link to="/shop" className="text-primary font-body text-label-lg underline">
          Back to Shop
        </Link>
      </main>
    );
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      color: selectedColor,
      size: selectedSize,
      quantity,
    });
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const accordionItems = [
    {
      title: "DESCRIPTION",
      content: "Our Majestic Silk Hijab is the pinnacle of luxury modest wear. Hand-finished edges and a premium silk blend ensure longevity and comfort.",
    },
    {
      title: "FABRIC & CARE",
      content: "• 100% Premium Chiffon Silk\n• Dry clean or hand wash only\n• Iron at low temperature",
    },
    {
      title: "SHIPPING",
      content: "Free domestic shipping on orders over $150. International shipping available via DHL Express.",
    },
  ];

  return (
    <main className="pt-32 pb-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      {/* ============ PRODUCT SECTION ============ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left: Images */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          {/* Main Image */}
          <div className="relative overflow-hidden aspect-[4/5] bg-surface-container group cursor-crosshair">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4 mt-4">
            {product.images.map((img, i) => (
              <button
                key={i}
                className={`aspect-square bg-surface-container overflow-hidden hover:opacity-80 transition-all ${
                  selectedImage === i ? "ring-2 ring-burgundy" : ""
                }`}
                onClick={() => setSelectedImage(i)}
              >
                <img src={img} alt={`${product.name} ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Right: Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col space-y-8"
        >
          {/* Header */}
          <header>
            <h1 className="font-display text-headline-lg-mobile md:text-headline-lg text-burgundy">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    size={16}
                    className={i < product.rating ? "fill-tertiary text-tertiary" : "text-outline-variant"}
                  />
                ))}
              </div>
              <span className="font-body text-label-sm text-on-surface-variant">
                ({product.reviews} Reviews)
              </span>
            </div>
            <p className="text-gold font-display text-headline-md mt-4">
              {product.originalPrice && (
                  <span className="line-through mr-2 text-on-surface-variant/50">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              {formatPrice(product.price)}
            </p>
          </header>

          {/* Description */}
          <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
            {product.description}
          </p>

          {/* Color Selection */}
          {product.colors.length > 0 && (
            <div>
              <h3 className="font-body text-label-lg mb-4 text-burgundy">COLOR</h3>
              <div className="flex gap-4">
                {product.colors.map((color, i) => (
                  <button
                    key={i}
                    className={`w-8 h-8 rounded-full transition-all ${
                      selectedColor === color
                        ? "ring-2 ring-offset-2 ring-burgundy"
                        : "border border-outline-variant"
                    }`}
                    style={{ backgroundColor: color }}
                    title={`Color ${i + 1}`}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Size Selection */}
          {product.sizes.length > 0 && (
            <div>
              <h3 className="font-body text-label-lg mb-4 text-burgundy">SIZE</h3>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`w-12 h-12 flex items-center justify-center font-body text-label-sm transition-all ${
                      selectedSize === size
                        ? "border-2 border-burgundy bg-burgundy text-white"
                        : "border border-gold/40 hover:border-burgundy hover:bg-burgundy hover:text-white"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity & Add to Cart */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center border border-gold/40 px-4 py-2">
                <button
                  className="p-2 hover:text-burgundy"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <FiMinus size={16} />
                </button>
                <span className="px-6 font-body text-body-md">{quantity}</span>
                <button
                  className="p-2 hover:text-burgundy"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <FiPlus size={16} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={handleAddToCart}
                className="bg-burgundy text-white py-4 font-body text-label-lg tracking-[0.2em] uppercase hover:bg-primary-container transition-all shadow-ambient"
              >
                Add to Cart
              </button>
              <button
                onClick={handleAddToCart}
                className="border border-gold text-gold py-4 font-body text-label-lg tracking-[0.2em] uppercase hover:bg-gold/5 transition-all"
              >
                Buy Now
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 gap-y-4 pt-6 border-t border-gold/20">
            <div className="flex items-center gap-3">
              <FiCheckCircle className="text-gold" size={18} />
              <span className="font-body text-label-sm">Premium Quality</span>
            </div>
            <div className="flex items-center gap-3">
              <FiTruck className="text-gold" size={18} />
              <span className="font-body text-label-sm">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-3">
              <FiLock className="text-gold" size={18} />
              <span className="font-body text-label-sm">Secure Checkout</span>
            </div>
            <div className="flex items-center gap-3">
              <FiRefreshCw className="text-gold" size={18} />
              <span className="font-body text-label-sm">Easy Returns</span>
            </div>
          </div>

          {/* Accordions */}
          <div className="space-y-0 pt-8">
            {accordionItems.map((item, i) => (
              <div key={i} className="border-b border-gold/20">
                <button
                  className="w-full py-4 flex justify-between items-center text-left"
                  onClick={() => toggleAccordion(i)}
                >
                  <span className="font-body text-label-lg text-burgundy">{item.title}</span>
                  <FiChevronDown
                    className={`transition-transform duration-300 ${
                      activeAccordion === i ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: activeAccordion === i ? "200px" : "0" }}
                >
                  <div className="pb-6 text-on-surface-variant font-body text-body-md leading-relaxed whitespace-pre-line">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ============ RELATED PRODUCTS ============ */}
      {relatedProducts.length > 0 && (
        <section className="mt-section-gap">
          <h2 className="font-display text-headline-lg text-center mb-12 text-burgundy">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {relatedProducts.map((rp, i) => (
              <motion.div
                key={rp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <Link to={`/product/${rp.id}`}>
                  <div className="aspect-[3/4] overflow-hidden bg-surface-container relative">
                    <img
                      src={rp.images[0]}
                      alt={rp.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="font-body text-label-lg">{rp.name}</h3>
                    <p className="text-gold font-body text-body-md mt-1">
                      {formatPrice(rp.price)}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ============ CUSTOMER REVIEWS ============ */}
      <section className="mt-section-gap bg-surface-container-low px-margin-mobile md:px-margin-desktop py-20 rounded-xl">
        <h2 className="font-display text-headline-lg text-center mb-16 text-burgundy">
          Whispers of Satisfaction
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              name: "Layla M.",
              text: "The drape is absolutely phenomenal. I've never felt silk this light yet substantial. Touche Aura truly understands modesty with grace.",
              avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvnPvkL0Eo2ndoV9b9MPadzSRInl9WucjvHIp8RPH56Wqx_yShIHnDrq4TKrXjQWQXP94uBfl7bc9yBAOunCn5R2OJmdn8YBxmSbUAxUKFduKSBeUTPEdgSyxRHOpGdL89jYyWAVLCnhq_SBlfaytoltWAwDMF7-WHAtQYRk-KJvPptd96p6znNJRC22XRg1dzLx4rBbTrN4wLTtEkxN44RiuLK6xRfX2LYmYxGecQ0mvlppMVlqQr",
            },
            {
              name: "Sarah K.",
              text: "Shipping was surprisingly fast. The packaging alone feels like a luxury gift to oneself. The burgundy color is deep and rich.",
              avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0w0TmX1KO7PXW9HwYl5YSc7kqmBEMs5ePJ3Ek_U1h9vNpY3OVOPqoxL6pOcSCYLQMDOC4IjFwqbWsyhSDjqJ_iwPiljoBhsljm-W-db-v-rVO0QU8N16U1ImSQEpzjYj_rdCLeI9U8BDfIWrgG-JDikbG7eeP5arOToLV6LmPNb3psgAL3fS86LWcX72xzw6xv9T28argwHZEMHGhkmQ_vCVy67RNU31sO3r78TfFiQQQU9qtpbaI",
            },
            {
              name: "Amira H.",
              text: "The pins are a perfect match. I'm so glad I found a brand that values details as much as I do. Definitely coming back for more colors.",
              avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNfFUzEa_Y1GgN0qfLyxsBWMDwgOqEGFAX2r2GkuY6elVHLbeTrl6198hc7U-iAvUbxVy_2ctyOI3f7I9JpauTrj3ryqxAzFOTnDU8lSgQNfXWVhj8RIW3Xa2elErhrYsySCfRLBkbr0xOC3GNJIGr0a1NPKAM37BSHWIlxGEinNUj_QCBv3UG0IChfh8Y-4j1zfJmtqkVV442KqZa2hPsE7IWqXykw80jJ-fQnuShzDLomNZpbyjL",
            },
          ].map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`bg-white p-8 shadow-ambient relative ${i === 1 ? "md:translate-y-6" : ""}`}
            >
              <div className="flex text-gold mb-4">
                {[...Array(5)].map((_, si) => (
                  <FiStar key={si} size={16} className="fill-tertiary text-tertiary" />
                ))}
              </div>
              <p className="italic font-body text-body-md text-on-surface-variant mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container">
                  <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-body text-label-lg text-burgundy">{review.name}</p>
                  <p className="font-body text-label-sm text-on-surface-variant">Verified Buyer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
