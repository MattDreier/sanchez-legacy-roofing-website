import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "After the big hail storm last spring, I was dreading the repair process. Sanchez Legacy Roofing handled the inspection and the install perfectly. My new roof looks incredible.",
    author: "Alex Johnson"
  },
  {
    quote: "Professional, on-time, and straight shooters. They explained why impact-resistant shingles were better for my area, and my insurance premium actually went down.",
    author: "Maria Garcia"
  },
  {
    quote: "We decided to add solar panels while replacing the roof. Their team coordinated everything seamlessly. It feels good to lower our bill and be ready for summer.",
    author: "David Chen"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-10">
      <div className="max-w-[1200px] mx-auto bg-surface-light rounded-3xl p-8 md:p-16">
        <motion.h2 
          className="font-display text-3xl font-bold tracking-tight mb-12 text-center text-text-primary-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Trusted by Neighbors
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              className="flex flex-col gap-4 p-8 rounded-2xl bg-white shadow-soft hover:shadow-hover transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-primary-yellow text-primary-yellow" />
                ))}
              </div>
              <blockquote className="text-base font-normal leading-relaxed text-text-primary-light flex-grow">
                "{t.quote}"
              </blockquote>
              <cite className="not-italic text-sm font-medium text-text-secondary-light pt-2 block border-t border-gray-100 mt-2">
                - {t.author}
              </cite>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;