import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ShieldCheck, FileText, Users } from 'lucide-react'; // Using more generic icons

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const iconMap = {
  "Direito do Consumidor": <ShieldCheck className="h-10 w-10 text-accent mx-auto mb-3" />,
  "Direito Civil": <FileText className="h-10 w-10 text-accent mx-auto mb-3" />,
  "Direito do Trabalho": <Users className="h-10 w-10 text-accent mx-auto mb-3" />,
};

const AreasOfPracticeSection = ({ areas }) => {
  return (
    <motion.section 
      id="areas-de-atendimento"
      className="py-16 md:py-20 bg-background"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ initial: { opacity: 0 }, animate: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
    >
      <div className="container mx-auto px-6">
        <motion.div variants={fadeInAnimation} className="text-center mb-12">
            <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" style={{ fontFamily: "'Georgia', serif" }}>
                Áreas de Atendimento
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                Oferecendo suporte jurídico especializado em diversas áreas para garantir a melhor defesa dos seus interesses.
            </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={{ initial: { opacity: 0 }, animate: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } } }}
        >
          {areas.map((area, index) => (
            <motion.div 
              key={index} 
              variants={fadeInAnimation} 
              className="p-6 bg-muted rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center flex flex-col items-center"
            >
              {iconMap[area.name] || <Briefcase className="h-10 w-10 text-accent mx-auto mb-3" />}
              <h3 className="text-xl font-semibold text-primary mb-2" style={{ fontFamily: "'Georgia', serif" }}>{area.name}</h3>
              <p className="text-muted-foreground text-sm flex-grow" style={{ fontFamily: "'Inter', sans-serif" }}>{area.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AreasOfPracticeSection;