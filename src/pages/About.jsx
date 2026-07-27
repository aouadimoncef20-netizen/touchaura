import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiHeart, FiAward, FiFeather, FiStar } from "react-icons/fi";

/**
 * About Page
 * Brand story, values, craftsmanship, and boutique information
 */
export default function About() {
  const values = [
    {
      icon: FiAward,
      title: "Exceptional Quality",
      desc: "We source only the finest silks, chiffons, and crepes from ethical suppliers worldwide.",
    },
    {
      icon: FiFeather,
      title: "Mindful Craft",
      desc: "Every piece is hand-finished by skilled artisans who honor the tradition of modest fashion.",
    },
    {
      icon: FiHeart,
      title: "Designed for You",
      desc: "Our collections celebrate the modern woman who values grace, privacy, and personal style.",
    },
    {
      icon: FiStar,
      title: "Editorial Vision",
      desc: "We approach fashion as art — each collection tells a story of culture, confidence, and elegance.",
    },
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/30 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-105"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC1Vc82Qhlh61RmK5PzGdtCEGkhgozMB_oqtYiUkz05nB7sxTNZEn5TVG8AAmJzvWKpUhp_r4Gv4QTSJ7pTPCnKQTfDc2QAKg11hpVmmwQVKcNFyC3MRcYAncj9_VbDpyQ5NrOkjWmVHM-lSEO383_WhAa_Zyd37ou1-TISaH-SWqqreTtJeq1MdKQYaKL3B_C3xhYEX6hw9orKQmiTW8nh0Wu71YPLddH49-5EOo-oqjgpSmTbJw0i')",
          }}
        />
        <div className="relative z-20 text-center px-margin-mobile animate-fade-in">
          <h1 className="font-display text-display-lg-mobile md:text-display-lg text-white mb-4">
            Our Story
          </h1>
          <p className="font-body text-body-lg text-white/90 max-w-md mx-auto">
            The soul behind Touche Aura — elegance redefined.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-primary mb-8">
              Redefining Modest Luxury
            </h2>
            <div className="w-24 h-[1px] bg-gold/40 mx-auto mb-8" />
            <p className="font-body text-body-lg text-on-surface-variant leading-relaxed max-w-3xl mx-auto">
              Touche Aura was born from a simple observation: the modern modest woman deserved more.
              More than fast fashion. More than compromises between coverage and couture. She deserved
              a brand that understood her values, respected her choices, and celebrated her grace
              through impeccable design.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-20">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface-container-low p-10 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <v.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-headline-md text-[20px] text-primary mb-4">
                  {v.title}
                </h3>
                <p className="font-body text-body-md text-on-surface-variant">{v.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-headline-lg-mobile md:text-headline-lg text-primary mb-6">
              Experience the Collection
            </h2>
            <p className="font-body text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
              Discover pieces that resonate with your aura. Each garment is designed to empower,
              elevate, and embrace the woman you are.
            </p>
            <Link
              to="/shop"
              className="inline-block bg-primary text-on-primary px-12 py-5 font-body text-label-lg uppercase tracking-widest hover:shadow-ambient-lg transition-all duration-300"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
