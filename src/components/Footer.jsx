import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";

/**
 * Footer Component
 * Consistent footer across all pages with brand info, links, and newsletter
 */
export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <span className="font-display text-display-lg-mobile md:text-display-lg tracking-tighter">
            Touche Aura
          </span>
          <p className="font-body text-body-md opacity-70 max-w-xs">
            Redefining modest elegance for the global modern woman. Exclusivity, Grace, and the Aura
            of perfection.
          </p>
          <div className="flex gap-4">
            <a href="/" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Facebook">
              <FiFacebook size={20} />
            </a>
            <a href="/" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Instagram">
              <FiInstagram size={20} />
            </a>
            <a href="/" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="YouTube">
              <FiYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div className="flex flex-col gap-4">
          <h5 className="font-body text-label-lg text-on-primary font-bold">Company</h5>
          <nav className="flex flex-col gap-3">
            <Link to="/about" className="text-on-primary/70 font-body text-body-md hover:text-tertiary-fixed transition-colors duration-200">
              Our Story
            </Link>
            <a href="/" className="text-on-primary/70 font-body text-body-md hover:text-tertiary-fixed transition-colors duration-200">
              Atelier
            </a>
            <a href="/" className="text-on-primary/70 font-body text-body-md hover:text-tertiary-fixed transition-colors duration-200">
              Sustainability
            </a>
            <a href="/" className="text-on-primary/70 font-body text-body-md hover:text-tertiary-fixed transition-colors duration-200">
              Journal
            </a>
          </nav>
        </div>

        {/* Customer Links */}
        <div className="flex flex-col gap-4">
          <h5 className="font-body text-label-lg text-on-primary font-bold">Customer</h5>
          <nav className="flex flex-col gap-3">
            <a href="/" className="text-on-primary/70 font-body text-body-md hover:text-tertiary-fixed transition-colors duration-200">
              Shipping Policy
            </a>
            <a href="/" className="text-on-primary/70 font-body text-body-md hover:text-tertiary-fixed transition-colors duration-200">
              Returns & Exchanges
            </a>
            <a href="/" className="text-on-primary/70 font-body text-body-md hover:text-tertiary-fixed transition-colors duration-200">
              Size Guide
            </a>
            <a href="/" className="text-on-primary/70 font-body text-body-md hover:text-tertiary-fixed transition-colors duration-200">
              FAQ
            </a>
          </nav>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4">
          <h5 className="font-body text-label-lg text-on-primary font-bold">Newsletter</h5>
          <p className="text-on-primary/70 font-body text-body-md">
            Join our inner circle for exclusive collection previews.
          </p>
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              className="bg-transparent border-b border-on-primary/30 py-3 text-on-primary placeholder:text-on-primary/40 focus:border-on-primary outline-none transition-all font-body text-body-md"
              placeholder="Email Address"
              type="email"
            />
            <button
              type="submit"
              className="self-start font-body text-label-sm uppercase tracking-widest text-on-primary border-b border-on-primary pb-1 hover:text-tertiary-fixed hover:border-tertiary-fixed transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 flex flex-col md:flex-row justify-between items-center gap-4 opacity-50 font-body text-label-sm">
          <p>© 2026 Touche Aura. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="/" className="hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
            <a href="/" className="hover:opacity-100 transition-opacity">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
