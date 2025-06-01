import React from 'react';
import { motion } from 'framer-motion';
import { Scale, ShieldCheck, Users, MessageSquare as MessageSquareText } from 'lucide-react';

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const MissionSection = ({ missionText }) => {
  return (
    <motion.section 
      id="missao" 
      className="py-16 md:py-20 bg-muted"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ initial: { opacity: 0 }, animate: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
    >
      <div className="container mx-auto px-6">
        <motion.div variants={fadeInAnimation}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Minha Missão
          </h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Scale className="h-12 w-12 text-accent mx-auto mb-4" />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              {missionText}
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 text-center"
          variants={{ initial: { opacity: 0 }, animate: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } } }}
        >
          <motion.div variants={fadeInAnimation} className="p-6 bg-background rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <ShieldCheck className="h-12 w-12 text-primary mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-primary mb-2" style={{ fontFamily: "'Georgia', serif" }}>Excelência</h3>
            <p className="text-foreground/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Defesa dos direitos com estratégia e eficácia.</p>
          </motion.div>
          <motion.div variants={fadeInAnimation} className="p-6 bg-background rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Users className="h-12 w-12 text-accent mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-accent-foreground mb-2" style={{ fontFamily: "'Georgia', serif" }}>Humanização</h3>
            <p className="text-foreground/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Orientação jurídica humanizada e transparente.</p>
          </motion.div>
          <motion.div variants={fadeInAnimation} className="p-6 bg-background rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <MessageSquareText className="h-12 w-12 text-primary mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-primary mb-2" style={{ fontFamily: "'Georgia', serif" }}>Compromisso</h3>
            <p className="text-foreground/70 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Foco em resultados que impactam positivamente.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MissionSection;