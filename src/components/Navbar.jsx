import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { FiSearch, FiHeart, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";

/**
 * Navbar Component
 * Fixed top navigation with scroll effects and mobile menu
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const textColor = isHome && !scrolled ? "text-on-primary" : "text-on-surface-variant";
  const textColorActive = isHome && !scrolled ? "text-on-primary" : "text-primary";
  const bgClass = scrolled ? "bg-background/95 backdrop-blur-md shadow-ambient" : "bg-transparent";
  const paddingClass = scrolled ? "py-3" : "py-4";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${bgClass} ${paddingClass}`}
    >
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span
            className={`font-display text-2xl md:text-3xl tracking-tighter transition-all duration-500 ${
              isHome && !scrolled ? "text-on-primary" : "text-primary"
            }`}
          >
            Touche Aura
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-body text-body-md transition-colors duration-300 ${
                location.pathname === link.path
                  ? `${textColorActive} font-bold border-b border-primary/40`
                  : `${textColor} hover:text-primary`
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className={`flex items-center gap-4 ${isHome && !scrolled ? "text-on-primary" : "text-primary"}`}>
          <button className="hover:scale-110 transition-transform" aria-label="Search">
            <FiSearch size={18} />
          </button>
          <button className="hover:scale-110 transition-transform" aria-label="Favorites">
            <FiHeart size={18} />
          </button>
          <Link to="/cart" className="relative hover:scale-110 transition-transform" aria-label="Shopping Bag">
            <FiShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-secondary text-on-secondary text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          {/* Mobile menu toggle */}
          <button
            className="md:hidden hover:scale-110 transition-transform"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/98 backdrop-blur-md px-margin-mobile py-4 space-y-3 border-t border-gold/10 mt-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block font-body text-body-md py-2 transition-colors ${
                location.pathname === link.path
                  ? "text-primary font-bold"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
