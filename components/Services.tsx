import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Residential Roofing",
    desc: "Expert installation and storm restoration using top-tier, impact-resistant materials designed for Oklahoma homes.",
    // Image: A clean shot of a pristine roof against a blue sky, emphasizing texture and quality.
    image: "https://images.unsplash.com/photo-1623157585093-57529452097e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Residential Solar",
    desc: "Harness the abundant sun of the plains. We design integrated solar systems that lower energy independence and increase home value.",
    // Image: Clear, modern solar panels installed on a residential roof.
    image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Storm Restoration",
    desc: "Fast, reliable repairs when you need them most. We handle the insurance process to restore your home's integrity quickly.",
    // Image: Dramatic storm clouds, representing the severe weather reality of the region.
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=2565&auto=format&fit=crop"
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2 
          className="font-display text-text-primary-light text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Engineered for the Plains.
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
                <h3 className="font-display text-xl font-medium leading-normal text-text-primary-light group-hover:text-primary-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary-light text-sm font-normal leading-relaxed">
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