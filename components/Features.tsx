import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Leaf, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Camera className="w-7 h-7 text-primary-blue" />,
    bg: "bg-primary-blue/10",
    title: "Thorough Inspections",
    desc: "We document every detail of storm damage with photos and detailed reports. This helps ensure your insurance claim is accurate and you get the coverage you deserve."
  },
  {
    icon: <Leaf className="w-7 h-7 text-primary-green" />,
    bg: "bg-primary-green/10",
    title: "Quality Materials",
    desc: "We install impact-resistant shingles rated for Oklahoma's severe weather. These materials are designed to handle high winds and hail, helping protect your biggest investment."
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-primary-yellow" />,
    bg: "bg-primary-yellow/10",
    title: "Local & Reliable",
    desc: "We're based right here in Oklahoma City. Our workmanship warranty is backed by a local team you can actually reach when you need us."
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
    <section id="why-choose-us" className="py-20 px-4 md:px-10 bg-white dark:bg-background-dark transition-colors">
      <div className="max-w-[1200px] mx-auto text-center flex flex-col gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 items-center"
        >
          <h2 className="font-display tracking-tight text-3xl md:text-4xl font-bold leading-tight max-w-2xl text-text-primary-light dark:text-text-primary-dark">
            Why Choose Sanchez Legacy Roofing
          </h2>
          <p className="text-lg leading-relaxed text-text-secondary-light dark:text-text-secondary-dark max-w-3xl">
            We're a local, family-owned company that's been serving Oklahoma City homeowners for years. When you work with us, you get honest assessments, quality materials, and a team that stands behind every job.
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
              className="flex flex-col gap-4 rounded-2xl border border-gray-100 dark:border-gray-800 bg-surface-light dark:bg-surface-dark p-8 text-left transition-all duration-300"
            >
              <div className={`flex items-center justify-center w-14 h-14 rounded-full ${f.bg} mb-2`}>
                {f.icon}
              </div>
              <h3 className="font-display text-xl font-medium text-text-primary-light dark:text-text-primary-dark">{f.title}</h3>
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-relaxed">
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