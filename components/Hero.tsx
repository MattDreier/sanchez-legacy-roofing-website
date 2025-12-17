import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield, FileCheck, Award } from 'lucide-react';

const heroImage = '/assets/optimized/Free damage inspections.webp';

const offers = [
  {
    icon: CheckCircle2,
    color: 'primary-green',
    title: 'Free Storm Damage Inspections',
    description: "We'll assess hail and wind damage at no cost."
  },
  {
    icon: FileCheck,
    color: 'primary-blue',
    title: 'Insurance Claim Help',
    description: 'We handle the paperwork and work with your insurance.'
  },
  {
    icon: Shield,
    color: 'primary-yellow',
    title: 'Impact-Resistant Materials',
    description: 'Built to withstand Oklahoma\'s severe weather.'
  },
  {
    icon: Award,
    color: 'primary-green',
    title: 'Quality Workmanship Guaranteed',
    description: 'Family-owned with a warranty you can count on.'
  }
];

const Hero: React.FC = () => {
  const [currentOffer, setCurrentOffer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative pt-32 pb-16 px-4 md:px-10 overflow-hidden bg-background-light dark:bg-background-dark transition-colors">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Content */}
        <motion.div 
          className="flex flex-col gap-6 text-left z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-text-primary-light dark:text-text-primary-dark">
            We'll Take Care of Everything After the Storm
          </h1>
          <p className="text-lg leading-relaxed text-text-secondary-light dark:text-text-secondary-dark max-w-xl">
            Free damage inspections. Insurance claim help. Quality repairs with impact-resistant materials. As a family-owned company serving Oklahoma City, we've helped thousands of homeowners protect their biggest investment.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
            <motion.a
              href="https://form.typeform.com/to/oSSbtMUM?typeform-source=sanchez-legacy-roofing.webflow.io"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-brand-gold text-text-primary-light text-base font-bold rounded-full shadow-md hover:shadow-lg hover:bg-brand-gold/90 transition-all text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Quote
            </motion.a>

            <motion.a
              href="https://calendar.app.google/omLYhDe3wkFxDJvM8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-brand-gold-dark dark:text-brand-gold font-semibold px-4 py-3 group hover:text-brand-gold transition-colors"
              whileHover={{ x: 5 }}
            >
              Schedule a Free Inspection
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px] w-full"
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[2s] hover:scale-105"
            style={{ backgroundImage: `url("${heroImage}")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
          
          {/* Floating Badge - Animated Carousel */}
          <div className="absolute bottom-6 left-6 right-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentOffer}
                className="p-4 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md rounded-xl flex items-center gap-4 shadow-lg border border-white/50 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`bg-${offers[currentOffer].color}/10 p-2 rounded-full flex-shrink-0`}>
                  {React.createElement(offers[currentOffer].icon, {
                    className: `w-8 h-8 text-${offers[currentOffer].color}`
                  })}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-text-primary-light dark:text-text-primary-dark text-base">
                    {offers[currentOffer].title}
                  </p>
                  <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                    {offers[currentOffer].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;