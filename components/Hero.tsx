import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 px-4 md:px-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Content */}
        <motion.div 
          className="flex flex-col gap-6 text-left z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-text-primary-light">
            Strength for Every Season. A Legacy of Protection.
          </h1>
          <p className="text-lg leading-relaxed text-text-secondary-light max-w-xl">
            Oklahoma weather is unpredictable—your roof shouldn't be. From impact-resistant materials to seamless solar integration, we build honest, durable roofing systems designed to stand up to the Plains.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
            <motion.button 
              className="w-full sm:w-auto px-8 py-3.5 bg-primary-blue text-white text-base font-medium rounded-full shadow-md hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start my estimate
            </motion.button>
            
            <motion.a 
              href="#" 
              className="flex items-center gap-2 text-primary-blue font-medium px-4 py-3 group"
              whileHover={{ x: 5 }}
            >
              Our process
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
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
          
          {/* Floating Badge */}
          <motion.div 
            className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-xl flex items-center gap-4 shadow-lg border border-white/50"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="bg-primary-green/10 p-2 rounded-full">
              <CheckCircle2 className="w-8 h-8 text-primary-green" />
            </div>
            <div>
              <p className="font-bold text-text-primary-light text-base">Storm-Ready Inspections</p>
              <p className="text-sm text-text-secondary-light">Comprehensive assessments for wind and hail damage.</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;