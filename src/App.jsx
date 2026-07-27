import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { CartProvider } from "./hooks/useCart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CartCheckout from "./pages/CartCheckout";
import ThankYou from "./pages/ThankYou";

/**
 * Page transition wrapper
 */
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Main App Content with routing
 */
function AppContent() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/shop" element={<PageTransition><Shop /></PageTransition>} />
          <Route path="/product/:id" element={<PageTransition><ProductDetails /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/cart" element={<PageTransition><CartCheckout /></PageTransition>} />
          <Route path="/thank-you" element={<PageTransition><ThankYou /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

/**
 * Root App Component
 * Wraps everything with providers and loading screen
 */
export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onLoaded={() => setLoading(false)} />}
      <div className={`min-h-screen flex flex-col ${loading ? "hidden" : "block"}`}>
        <Router>
          <CartProvider>
            <AppContent />
          </CartProvider>
        </Router>
      </div>
    </>
  );
}
