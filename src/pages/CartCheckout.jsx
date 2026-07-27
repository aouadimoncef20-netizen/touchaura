import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMinus, FiPlus, FiTrash2, FiHeart, FiArrowLeft, FiChevronLeft, FiChevronRight, FiCheckCircle, FiTruck, FiShield, FiRefreshCw } from "react-icons/fi";
import { useCart } from "../hooks/useCart";
import products from "../data/products";
import { formatPrice } from "../utils/format";

/**
 * CartCheckout Page
 * Full cart management with checkout form, order summary, and related products
 */
export default function CartCheckout() {
  const { cartItems, subtotal, updateQuantity, removeFromCart, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const deliveryFee = 800;
  const discount = couponCode.toUpperCase() === "AURA10" ? subtotal * 0.1 : 0;
  const total = subtotal + deliveryFee - discount;

  const relatedProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[35vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida/AP1WRLvyh1V42bVcmEkZh8oOu4m8ye0aB7VfbsO-mlwuQyWDgP2pIGZITL69MH9QFky025UKl-a1YRKczDEATsR5KGCP1Ov1_FZnMFfaeAX6eHOfFAE_dzUP-LIgTfzm_-qGeK_GgEOC99tWkq8SVSAUrzjO4xR9rSkKsZjOV1y0eWO3Ii_FFARYD7_DAxftaaOL9bhVx4uMoqIrYmg72njdS-jSOfJz9mHeN2EDrbxozmSORM17KcCRlRC8dsw"
            alt="Luxury Packaging"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        </div>
        <div className="relative z-10 text-center text-on-primary px-margin-mobile animate-fade-in">
          <h2 className="font-display text-display-lg-mobile md:text-display-lg mb-2">
            Shopping Cart & Checkout
          </h2>
          <p className="font-body text-body-lg italic opacity-90">
            You're just one step away from your new favorite look.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
        {cartItems.length === 0 ? (
          /* Empty Cart */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <h3 className="font-display text-headline-md text-primary mb-6">Your cart is empty</h3>
            <p className="font-body text-body-md text-on-surface-variant mb-10">
              Looks like you haven't added anything to your bag yet.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-primary text-on-primary px-12 py-5 font-body text-label-lg uppercase tracking-widest hover:shadow-ambient-lg transition-all"
            >
              Start Shopping
            </Link>
          </motion.div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-gutter">
            {/* Left: Cart Items */}
            <div className="w-full lg:w-[65%] space-y-8">
              <h3 className="font-display text-headline-md border-b border-outline-variant pb-4">
                Your Selection ({cartItems.length})
              </h3>

              <div className="space-y-6">
                {cartItems.map((item, i) => (
                  <motion.div
                    key={`${item.id}-${item.color}-${item.size}-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col md:flex-row gap-6 p-6 bg-surface-container-low rounded-xl shadow-ambient group transition-transform hover:-translate-y-1"
                  >
                    {/* Product Image */}
                    <div className="w-full md:w-32 h-40 overflow-hidden rounded-lg shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-grow flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-display text-headline-md text-xl text-primary">
                            {item.name}
                          </h4>
                          {item.color && (
                            <p className="text-on-surface-variant font-body text-label-sm uppercase tracking-widest mt-1">
                              {item.colorName || "Burgundy"} • {item.size || "OS"}
                            </p>
                          )}
                        </div>
                        <span className="font-display text-headline-md text-xl text-primary shrink-0 ml-4">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-4 border border-gold/40 rounded-full px-4 py-1">
                          <button
                            className="text-primary hover:scale-125 transition-transform"
                            onClick={() => updateQuantity(item, item.quantity - 1)}
                          >
                            <FiMinus size={14} />
                          </button>
                          <span className="font-body text-label-lg px-2">{item.quantity}</span>
                          <button
                            className="text-primary hover:scale-125 transition-transform"
                            onClick={() => updateQuantity(item, item.quantity + 1)}
                          >
                            <FiPlus size={14} />
                          </button>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-4">
                          <button className="text-on-surface-variant hover:text-primary flex items-center gap-1 transition-colors">
                            <FiHeart size={16} />
                            <span className="font-body text-label-sm">SAVE</span>
                          </button>
                          <button
                            className="text-on-surface-variant hover:text-error flex items-center gap-1 transition-colors"
                            onClick={() => removeFromCart(item)}
                          >
                            <FiTrash2 size={16} />
                            <span className="font-body text-label-sm">REMOVE</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Continue Shopping */}
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 font-body text-label-lg text-primary border-b-2 border-primary/20 hover:border-primary transition-all pb-1 group"
              >
                <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                CONTINUE SHOPPING
              </Link>
            </div>

            {/* Right: Order Summary & Form */}
            <div className="w-full lg:w-[35%]">
              <div className="sticky top-28 space-y-8">
                {/* Summary Card */}
                <div className="bg-surface-container p-8 rounded-xl shadow-ambient space-y-6">
                  <h3 className="font-display text-headline-md text-2xl text-primary">
                    Order Summary
                  </h3>

                  <div className="space-y-4 font-body text-body-md text-on-surface-variant">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      <span>{formatPrice(deliveryFee)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-tertiary">
                        <span>Discount (AURA10)</span>
                        <span>-{formatPrice(discount)}</span>
                      </div>
                    )}
                    <div className="pt-4 border-t border-outline-variant flex justify-between items-center text-primary">
                      <span className="font-display text-headline-md text-xl">Total</span>
                      <span className="font-display text-headline-md text-2xl">{formatPrice(total)}</span>
                    </div>
                  </div>

                  {/* Coupon */}
                  <div className="flex gap-2">
                    <input
                      className="input-minimal flex-grow placeholder:text-outline/60 font-body outline-none"
                      placeholder="Coupon Code"
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <button className="font-body text-label-sm bg-primary text-on-primary px-6 hover:bg-primary-container transition-colors">
                      APPLY
                    </button>
                  </div>

                  {/* Payment Method */}
                  <div className="space-y-4">
                    <p className="font-body text-label-lg text-primary border-b border-outline-variant pb-2">
                      PAYMENT METHOD
                    </p>
                    <div className="space-y-3">
                      {[
                        { value: "cod", label: "Cash on Delivery" },
                        { value: "baridi", label: "BaridiMob" },
                        { value: "ccp", label: "CCP Transfer" },
                      ].map((pm) => (
                        <label key={pm.value} className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="radio"
                            name="payment"
                            className="text-primary focus:ring-primary h-4 w-4"
                            checked={paymentMethod === pm.value}
                            onChange={() => setPaymentMethod(pm.value)}
                          />
                          <span className="group-hover:text-primary transition-colors font-body">
                            {pm.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Shipping Details */}
                  <div className="space-y-4 pt-4">
                    <p className="font-body text-label-lg text-primary border-b border-outline-variant pb-2">
                      SHIPPING DETAILS
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <input className="input-minimal w-full font-body outline-none" placeholder="First Name" type="text" />
                      <input className="input-minimal w-full font-body outline-none" placeholder="Last Name" type="text" />
                    </div>
                    <input className="input-minimal w-full font-body outline-none" placeholder="Phone Number" type="tel" />
                    <input className="input-minimal w-full font-body outline-none" placeholder="Email (Optional)" type="email" />
                    <div className="grid grid-cols-2 gap-4">
                      <select className="input-minimal w-full appearance-none font-body outline-none">
                        <option disabled selected>Wilaya</option>
                        <option>Algiers</option>
                        <option>Oran</option>
                        <option>Constantine</option>
                      </select>
                      <input className="input-minimal w-full font-body outline-none" placeholder="Commune" type="text" />
                    </div>
                    <textarea
                      className="input-minimal w-full h-20 resize-none font-body outline-none"
                      placeholder="Additional Notes (Optional)"
                    />
                  </div>

                  {/* Place Order */}
                  <Link
                    to="/thank-you"
                    onClick={clearCart}
                    className="block w-full bg-primary text-on-primary py-5 font-body text-label-lg tracking-[0.2em] hover:bg-primary-container hover:shadow-lg transition-all duration-300 text-center"
                  >
                    PLACE ORDER
                  </Link>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <FiCheckCircle className="text-primary shrink-0" size={16} />
                    <span className="text-[11px] font-body text-label-sm uppercase">Secure Checkout</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <FiTruck className="text-primary shrink-0" size={16} />
                    <span className="text-[11px] font-body text-label-sm uppercase">DZ Express</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <FiShield className="text-primary shrink-0" size={16} />
                    <span className="text-[11px] font-body text-label-sm uppercase">Premium Quality</span>
                  </div>
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <FiRefreshCw className="text-primary shrink-0" size={16} />
                    <span className="text-[11px] font-body text-label-sm uppercase">Easy Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Related Products */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex items-center justify-between mb-12">
            <h3 className="font-display text-headline-md">You May Also Like</h3>
            <div className="flex gap-4">
              <button className="p-2 border border-gold/40 rounded-full hover:bg-primary hover:text-white transition-all">
                <FiChevronLeft size={20} />
              </button>
              <button className="p-2 border border-gold/40 rounded-full hover:bg-primary hover:text-white transition-all">
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="flex gap-gutter overflow-x-auto hide-scrollbar snap-x pb-8">
            {relatedProducts.map((rp) => (
              <div key={rp.id} className="min-w-[280px] md:min-w-[300px] snap-start group cursor-pointer">
                <Link to={`/product/${rp.id}`}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface mb-4">
                    <img
                      src={rp.images[0]}
                      alt={rp.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md text-primary py-3 font-body text-label-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-center">
                      QUICK ADD
                    </div>
                  </div>
                  <h4 className="font-display text-headline-md text-lg text-primary">{rp.name}</h4>
                  <p className="text-on-surface-variant font-body text-label-sm">{formatPrice(rp.price)}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
