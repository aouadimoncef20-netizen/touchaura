import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCamera, FiFacebook, FiMusic, FiMessageCircle } from "react-icons/fi";

/**
 * ThankYou Page
 * Order success confirmation with animated checkmark,
 * order summary, next steps, and social links
 */
export default function ThankYou() {
  const orderDetails = {
    number: "#TA-88291",
    date: "October 24, 2024",
    delivery: "3-5 Business Days",
    payment: "Cash on Delivery",
    address: "124 Elite Avenue,\nParis, France",
    total: "16,370 DZD",
  };

  const nextSteps = [
    {
      icon: "inventory_2",
      title: "We're Preparing Your Order",
      desc: "Our team is carefully selecting and packing your chosen pieces with the utmost care.",
    },
    {
      icon: "local_shipping",
      title: "Your Order Will Be Shipped Soon",
      desc: "Once dispatched, you'll receive a tracking number to follow your luxury package's journey.",
    },
    {
      icon: "favorite",
      title: "Enjoy Your Touche Aura Collection",
      desc: "Wear your new modest pieces with confidence and elegance. We'd love to see your look!",
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-section-gap">
      {/* ============ SUCCESS HERO ============ */}
      <section className="flex flex-col items-center justify-center text-center px-margin-mobile mb-section-gap">
        {/* Animated Checkmark */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="relative w-32 h-32 mb-8 flex items-center justify-center rounded-full border border-gold/40 bg-white/50"
          style={{
            boxShadow: "0 0 10px rgba(212, 175, 55, 0.2)",
            animation: "glow 2s ease-in-out infinite alternate",
          }}
        >
          <svg className="w-20 h-20" viewBox="0 0 52 52">
            <motion.circle
              cx="26"
              cy="26"
              r="25"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="2"
              strokeMiterlimit="10"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            <motion.path
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="2"
              strokeMiterlimit="10"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, delay: 0.8, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
            Thank You for Your Order!
          </h2>
          <p className="max-w-2xl mx-auto font-body text-body-lg text-on-surface-variant">
            Your order has been successfully placed. We're excited to prepare your beautiful Touche
            Aura pieces and deliver them to you soon.
          </p>
        </motion.div>
      </section>

      {/* ============ ORDER SUMMARY ============ */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="max-w-4xl mx-auto px-margin-mobile mb-section-gap"
      >
        <div className="bg-surface-container-low rounded-xl p-8 md:p-12 shadow-ambient border border-gold/40 relative overflow-hidden">
          {/* Decorative */}
          <div className="absolute -top-10 -right-10 opacity-10">
            <span className="text-[120px] text-gold font-display">✦</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter relative z-10">
            {/* Left Column */}
            <div>
              <div className="mb-8">
                <span className="font-body text-label-sm uppercase tracking-widest text-on-surface-variant block mb-2">
                  Order Information
                </span>
                <div className="flex justify-between border-b border-outline-variant/30 py-3">
                  <span className="font-body text-body-md">Order Number</span>
                  <span className="font-body text-label-lg text-primary">{orderDetails.number}</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/30 py-3">
                  <span className="font-body text-body-md">Order Date</span>
                  <span className="font-body text-body-md">{orderDetails.date}</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="font-body text-body-md">Est. Delivery</span>
                  <span className="font-body text-body-md">{orderDetails.delivery}</span>
                </div>
              </div>
              <div>
                <span className="font-body text-label-sm uppercase tracking-widest text-on-surface-variant block mb-2">
                  Payment
                </span>
                <div className="flex justify-between py-3">
                  <span className="font-body text-body-md">Method</span>
                  <span className="font-body text-body-md">{orderDetails.payment}</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="md:pl-12 md:border-l border-outline-variant/30">
              <div className="mb-8">
                <span className="font-body text-label-sm uppercase tracking-widest text-on-surface-variant block mb-2">
                  Shipping Address
                </span>
                <p className="font-body text-body-md text-on-surface mt-2 leading-relaxed whitespace-pre-line">
                  {orderDetails.address}
                </p>
              </div>
              <div className="pt-8 mt-8 border-t border-primary/10">
                <div className="flex justify-between items-end">
                  <span className="font-display text-headline-md text-primary">Total</span>
                  <span className="font-display text-display-lg-mobile text-primary">
                    {orderDetails.total}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ============ WHAT HAPPENS NEXT ============ */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
        <h3 className="font-display text-headline-md text-center text-primary mb-12">
          What Happens Next
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {nextSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-surface p-8 rounded-lg border border-gold/40 hover:-translate-y-2 transition-transform duration-500 ease-out flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-surface-container mb-6">
                <span className="text-gold text-3xl font-display">
                  {step.icon === "inventory_2" && "📦"}
                  {step.icon === "local_shipping" && "🚚"}
                  {step.icon === "favorite" && "❤️"}
                </span>
              </div>
              <h4 className="font-body text-label-lg text-primary mb-3">{step.title}</h4>
              <p className="font-body text-body-md text-on-surface-variant">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============ ACTION BUTTONS ============ */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-element-gap px-margin-mobile mb-section-gap">
        <Link
          to="/shop"
          className="w-full md:w-auto px-12 py-5 bg-primary text-on-primary font-body text-label-lg uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 hover:shadow-xl active:scale-95 text-center"
        >
          Continue Shopping
        </Link>
        <a
          href="/"
          className="w-full md:w-auto px-12 py-5 bg-transparent border border-gold text-primary font-body text-label-lg uppercase tracking-widest hover:bg-gold/5 transition-all duration-300 active:scale-95 text-center"
        >
          Track My Order
        </a>
      </section>

      {/* ============ SOCIAL SECTION ============ */}
      <section className="max-w-4xl mx-auto text-center px-margin-mobile mb-section-gap">
        <div className="h-px w-24 bg-gold mx-auto mb-12" />
        <h3 className="font-display text-headline-md text-primary mb-4">Stay Connected</h3>
        <p className="font-body text-body-lg text-on-surface-variant mb-10">
          Follow us for styling inspiration, exclusive collections, and special offers.
        </p>
        <div className="flex items-center justify-center gap-8">
          <a href="/" className="group" aria-label="Instagram">
            <FiCamera className="text-on-surface-variant group-hover:text-gold transition-colors duration-300" size={28} />
          </a>
          <a href="/" className="group" aria-label="Facebook">
            <FiFacebook className="text-on-surface-variant group-hover:text-gold transition-colors duration-300" size={28} />
          </a>
          <a href="/" className="group" aria-label="TikTok">
            <FiMusic className="text-on-surface-variant group-hover:text-gold transition-colors duration-300" size={28} />
          </a>
          <a href="/" className="group" aria-label="WhatsApp">
            <FiMessageCircle className="text-on-surface-variant group-hover:text-gold transition-colors duration-300" size={28} />
          </a>
        </div>
      </section>

      {/* Inline glow animation */}
      <style>{`
        @keyframes glow {
          from { box-shadow: 0 0 10px rgba(212, 175, 55, 0.2); }
          to { box-shadow: 0 0 30px rgba(212, 175, 55, 0.5); }
        }
      `}</style>
    </main>
  );
}
