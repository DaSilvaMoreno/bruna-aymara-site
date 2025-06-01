import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageSquare as MessageSquareText, Mail } from 'lucide-react';

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const HeroSection = ({ profileImageUrl, whatsappLink, emailLink }) => {
  return (
    <motion.section 
      className="py-16 md:py-24 text-center bg-cover bg-center relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-secondary/80 to-primary/90 opacity-90"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div {...fadeInAnimation} transition={{ ...fadeInAnimation.transition, delay: 0.2 }}>
          <img  
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-white shadow-xl object-cover" 
            alt="Dra. Bruna Aymara - Foto de Perfil"
            src={profileImageUrl} />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Georgia', serif" }}>
            Assessoria Jurídica de Confiança
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
            Soluções jurídicas personalizadas para proteger seus direitos e interesses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full sm:w-auto"
                onClick={() => window.open(whatsappLink, '_blank')}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <MessageSquareText className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full sm:w-auto"
                onClick={() => window.location.href = emailLink}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <Mail className="mr-2 h-5 w-5" />
                Enviar E-mail
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;