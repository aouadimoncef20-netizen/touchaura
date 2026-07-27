import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

/**
 * Contact Page
 * Contact form, boutique info, map, and social links
 */
export default function Contact() {
  const igImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBcvxMGSwwRlybdHfsg9MSX_BbQXCD879FfwFBDtMrqPaZua72d2K2gApx7HN8qL6TmWKHnEUapVr7whKhGOOvvc_cc664lPuIsUJU5lIwuTmtpoGAZ6G0JhCm7LklBndU8shFOY9gmkya4qy9pmmnN71XqnH3AlBn26y00AFIEkoduWkUj4zjyIGiMvULRSKiyttwfbTsYJeooTFxRaOH5KgV7YGcsYXAsPaOzSY473Z2z6he5Brx9",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCcEFG1fhh_vTD7HzP9rzfIxfsdZ9PkfvcxeLXoahy3UssYEvsz9pt3Sd2WFd-XYUeAJzqP_Fyezx8ChwldNVOznsJ3yj0F__Zi-dQIX1JFzsWZDj7dq6pVM4C4r6OMehHl3E5v-EwNooREKZSwEuEblJ3VqSJELQof5pgOjhDUUftUIqheR7DyMq0EZC0oEMn8RUqTP-SjjrFbkAUCwVenATsAbur--dSp_4vZFqk-UMeVfQf804pA",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDJFDgVyRdF18A7_cPrKxckIsPz_omKYxURPEPnmstouWh1d5PhmAPQ1KpazRyD0oC5EbWU0iQ4iEHxGpsF6Ip0ua6G7a5J19snUelKNzieIfqn-pDQ6PiSTWZHehlpGP7EzCUDQfmgvAj2mXSvHbjY5BMl2Wrdq2h6Ash3ZFoKXl6QkikPc-VJYBnmQ5lHTTxhriYaKq5FV6Z-Kv2VUqPDR5mVgVZQD4zOSgxHJTPlsZlshyEb4A_a",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAYmqwz3XZfAj1pQmHfEXtJymu9g7sssizFkSaUDb9lGTuhwYIeasqccMIxBds2Vw7UUeHJcNuv00a7ooM87rITWSW5dnjhkGf-FyVFUxQ6yc0Ag3LbnYoaw6vRzwCyC2yWjlUBW8wmnWjBkt9qsQaGlcAKW3Pmdz-hmIuY3Y_83wh_VGsOpKiuEQkfedrDiwzxjK8QKyV-bPef7JNSC-pmCe0NBWbcZFyKPcOFqE9wHY-26K5K4Zu9",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA2eX4bsYivhzTB_zidcMLYax2Bpzhjq5iBdRXlS4FDZHPL4roxY0JDBnEZ31drBjZTINecq4JNVbYLTSnpsB6xe6LWxMSlHU4ntKWYFEYu05BzO194dZh6Kna1cYYZT-xPxDvT5xLJPZrsZZKqbmtwx8qm38fo7Z1t1PUyiH-lL2SMv1COUL57DgTkNonxYNNoR2uKlPazIscnNrNf_3DN33mAyho8NTCM0US3GzRz5IMBJ1jFLD5j",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDn31rgqYk_rI8iQUDOYgCW1yD4GjcjX9euP27w3g3opMfNmPnbvjqY771E3Ty6A0dRbRhb1tcd04xnDl0ta1LjQZpOfeIZ39P_Wph1VnrMO95njmDuLuFQ2vX7ZHfIKTpQX7assO3o_-UTn4Ugosai95N96M5K7c4PfcA6InGiMfuDVikHhgO0hR9EFNk4a39mU8YA0cmPN4YcBnFcQM1E1LjgejxRVCDH6HTF7iBimJn0LbvNwbZc",
  ];

  return (
    <div>
      {/* Hero */}
      <header className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/30 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-105 hover:scale-100"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC1Vc82Qhlh61RmK5PzGdtCEGkhgozMB_oqtYiUkz05nB7sxTNZEn5TVG8AAmJzvWKpUhp_r4Gv4QTSJ7pTPCnKQTfDc2QAKg11hpVmmwQVKcNFyC3MRcYAncj9_VbDpyQ5NrOkjWmVHM-lSEO383_WhAa_Zyd37ou1-TISaH-SWqqreTtJeq1MdKQYaKL3B_C3xhYEX6hw9orKQmiTW8nh0Wu71YPLddH49-5EOo-oqjgpSmTbJw0i')",
          }}
        />
        <div className="relative z-20 text-center px-margin-mobile animate-fade-in">
          <h1 className="font-display text-display-lg-mobile md:text-display-lg text-white mb-4">
            Contact Us
          </h1>
          <p className="font-body text-body-lg text-white/90 max-w-md mx-auto">
            We're here to help you find your perfect style.
          </p>
        </div>
      </header>

      {/* Contact Section */}
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter lg:gap-32 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-headline-lg-mobile md:text-headline-lg mb-12">
              Inquiry Form
            </h2>
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <div className="relative group">
                  <input
                    className="peer w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary transition-colors placeholder-transparent outline-none"
                    id="first_name"
                    placeholder=" "
                    type="text"
                  />
                  <label
                    className="absolute left-0 -top-3.5 text-label-sm text-outline transition-all peer-placeholder-shown:text-body-md peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary font-body"
                    htmlFor="first_name"
                  >
                    First Name
                  </label>
                </div>
                <div className="relative group">
                  <input
                    className="peer w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary transition-colors placeholder-transparent outline-none"
                    id="last_name"
                    placeholder=" "
                    type="text"
                  />
                  <label
                    className="absolute left-0 -top-3.5 text-label-sm text-outline transition-all peer-placeholder-shown:text-body-md peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary font-body"
                    htmlFor="last_name"
                  >
                    Last Name
                  </label>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <div className="relative group">
                  <input
                    className="peer w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary transition-colors placeholder-transparent outline-none"
                    id="email"
                    placeholder=" "
                    type="email"
                  />
                  <label
                    className="absolute left-0 -top-3.5 text-label-sm text-outline transition-all peer-placeholder-shown:text-body-md peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary font-body"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative group">
                  <input
                    className="peer w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary transition-colors placeholder-transparent outline-none"
                    id="phone"
                    placeholder=" "
                    type="tel"
                  />
                  <label
                    className="absolute left-0 -top-3.5 text-label-sm text-outline transition-all peer-placeholder-shown:text-body-md peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary font-body"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                </div>
              </div>
              <div className="relative group">
                <input
                  className="peer w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary transition-colors placeholder-transparent outline-none"
                  id="subject"
                  placeholder=" "
                  type="text"
                />
                <label
                  className="absolute left-0 -top-3.5 text-label-sm text-outline transition-all peer-placeholder-shown:text-body-md peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary font-body"
                  htmlFor="subject"
                >
                  Subject
                </label>
              </div>
              <div className="relative group">
                <textarea
                  className="peer w-full bg-transparent border-0 border-b border-outline-variant py-3 focus:ring-0 focus:border-primary transition-colors placeholder-transparent resize-none outline-none"
                  id="message"
                  placeholder=" "
                  rows="4"
                />
                <label
                  className="absolute left-0 -top-3.5 text-label-sm text-outline transition-all peer-placeholder-shown:text-body-md peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary font-body"
                  htmlFor="message"
                >
                  Message
                </label>
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-primary text-white font-body text-label-lg tracking-[0.2em] hover:bg-primary-container transition-all duration-500 uppercase active:scale-95 shadow-ambient"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-surface-container-low p-10 md:p-16 rounded-lg shadow-ambient"
          >
            <h2 className="font-display text-headline-lg-mobile md:text-headline-lg mb-12">
              The Atelier
            </h2>
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <FiMapPin className="text-tertiary-container mt-1 shrink-0" size={24} />
                <div>
                  <h4 className="font-body text-label-lg uppercase mb-2">Our Boutique</h4>
                  <p className="text-on-surface-variant font-body text-body-md">
                    124 Elite Avenue, Fashion District
                    <br />
                    Paris, France 75001
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <FiPhone className="text-tertiary-container mt-1 shrink-0" size={24} />
                <div>
                  <h4 className="font-body text-label-lg uppercase mb-2">Call Us</h4>
                  <p className="text-on-surface-variant font-body text-body-md">
                    +33 (0) 1 23 45 67 89
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <FiMail className="text-tertiary-container mt-1 shrink-0" size={24} />
                <div>
                  <h4 className="font-body text-label-lg uppercase mb-2">Email</h4>
                  <p className="text-on-surface-variant font-body text-body-md">
                    concierge@toucheaura.com
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <FiClock className="text-tertiary-container mt-1 shrink-0" size={24} />
                <div>
                  <h4 className="font-body text-label-lg uppercase mb-2">Hours</h4>
                  <p className="text-on-surface-variant font-body text-body-md">
                    Mon - Sat: 9:00 - 19:00
                    <br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-section-gap"
        >
          <div className="text-center mb-16">
            <h2 className="font-display text-headline-lg-mobile md:text-headline-lg mb-4">
              Visit Our Boutique
            </h2>
            <div className="w-24 h-px bg-tertiary-container mx-auto" />
          </div>
          <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-ambient border border-outline-variant">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ6cUKHJtjSd8JZQr8lHDvTEaDu1eKT5EMNY7nhkBXQQp5WfKdwt2m_UAGybbBLOhFC5M4whuo86a-OpHk1sHmo3Nw7vrPD378I4SYqwAnQjPYAQYBStePMFZVEKQdGcv9nDo5ZOuL6VjuLXYqGi-DYeDuoKmEcyUb1NAYTgTpyr426k19SueGJB1m-MNfgtnPvVoIKNqZIkU_GwhC7oKKSNjZxmBrLGHIjn9zQ1z2uQZ6Unf02W4E"
              alt="Boutique Map"
              className="w-full h-full object-cover grayscale contrast-125 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Instagram Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-section-gap"
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-display text-headline-lg-mobile md:text-headline-lg">
                Follow Our Journey
              </h2>
              <p className="text-on-surface-variant mt-2 font-body">Discover daily inspirations and new arrivals.</p>
            </div>
            <a
              href="/"
              className="px-8 py-3 border border-primary text-primary font-body text-label-lg tracking-widest hover:bg-primary hover:text-white transition-all duration-500 uppercase"
            >
              Follow @ToucheAura
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {igImages.map((src, i) => (
              <div
                key={i}
                className="aspect-square relative group overflow-hidden bg-surface-container"
              >
                <img
                  src={src}
                  alt={`Instagram ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Newsletter */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-2xl mx-auto px-margin-mobile text-center">
          <h2 className="font-display text-headline-lg-mobile md:text-headline-lg mb-4">
            Stay Connected
          </h2>
          <p className="text-on-surface-variant mb-10 font-body">
            Subscribe to receive exclusive invitations to our private collections and boutique events.
          </p>
          <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              className="flex-grow bg-white border border-outline-variant px-6 py-4 focus:ring-1 focus:ring-primary focus:border-primary transition-all font-body text-body-md outline-none"
              placeholder="Your email address"
              type="email"
            />
            <button
              type="submit"
              className="bg-primary text-white px-10 py-4 font-body text-label-lg tracking-widest uppercase hover:bg-primary-container transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
