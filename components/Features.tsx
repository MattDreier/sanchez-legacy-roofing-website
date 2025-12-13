import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Leaf, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Camera className="w-7 h-7 text-primary-blue" />,
    bg: "bg-primary-blue/10",
    title: "Precision Inspections",
    desc: "We don't guess. Our digital analysis detects even minor wind lift and hail impact, ensuring your claim and repair plan are accurate."
  },
  {
    icon: <Leaf className="w-7 h-7 text-primary-green" />,
    bg: "bg-primary-green/10",
    title: "Impact Resistant",
    desc: "We specialize in Class 4 impact-resistant shingles designed to withstand high winds and severe weather, protecting your home for decades."
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-primary-yellow" />,
    bg: "bg-primary-yellow/10",
    title: "The Legacy Guarantee",
    desc: "Our local warranty covers materials and labor with no fine print. We're right here in the community to stand behind our work."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50 }
  }
};

const Features: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-10 bg-white">
      <div className="max-w-[1200px] mx-auto text-center flex flex-col gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 items-center"
        >
          <h2 className="font-display tracking-tight text-3xl md:text-4xl font-bold leading-tight max-w-2xl text-text-primary-light">
            Built to weather the storm.
          </h2>
          <p className="text-lg leading-relaxed text-text-secondary-light max-w-3xl">
            We've built our reputation on the principles that guide everything we do: neighborly service, expert storm-damage insights, and a commitment to quality that lasts long after the clouds clear.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.1)" }}
              className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-surface-light p-8 text-left transition-all duration-300"
            >
              <div className={`flex items-center justify-center w-14 h-14 rounded-full ${f.bg} mb-2`}>
                {f.icon}
              </div>
              <h3 className="font-display text-xl font-medium text-text-primary-light">{f.title}</h3>
              <p className="text-text-secondary-light text-sm font-normal leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;