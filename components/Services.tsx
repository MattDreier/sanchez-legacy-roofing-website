import React from 'react';
import { motion } from 'framer-motion';

const roofingImage = '/assets/optimized/Residential Roofing.webp';
const guttersImage = '/assets/optimized/Residential Gutters.webp';
const solarImage = '/assets/optimized/Residential Solar.webp';

const services = [
  {
    title: "Residential Roofing",
    desc: "New roof installations, storm damage repairs, and replacements. We use impact-resistant materials built to handle Oklahoma weather and work directly with your insurance company.",
    // Image: A clean shot of a pristine roof against a blue sky, emphasizing texture and quality.
    image: roofingImage
  },
  {
    title: "Residential Gutters",
    desc: "Seamless gutter installation and repair to protect your foundation from water damage. Properly installed gutters prevent costly foundation issues down the road.",
    // Image: Clean, professional gutter installation on a residential home.
    image: guttersImage
  },
  {
    title: "Residential Solar",
    desc: "Solar panel installation that integrates seamlessly with your roof. Lower your energy bills while increasing your home's value with clean, renewable energy.",
    // Image: Clear, modern solar panels installed on a residential roof.
    image: solarImage
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 px-4 md:px-10 bg-white dark:bg-background-dark transition-colors">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          className="font-display text-text-primary-light dark:text-text-primary-dark text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Complete Home Protection
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="group cursor-pointer flex flex-col gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="overflow-hidden rounded-2xl aspect-[4/3] w-full relative shadow-sm hover:shadow-xl transition-all duration-300">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url("${service.image}")` }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="flex flex-col gap-2 px-1">
                <h3 className="font-display text-xl font-medium leading-normal text-text-primary-light dark:text-text-primary-dark group-hover:text-brand-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;