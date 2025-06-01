import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageSquare as MessageSquareText, Mail, Instagram as InstagramIcon } from 'lucide-react';

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const ContactSection = ({ whatsappLink, emailLink, whatsappNumber, emailAddress, instagramLink, instagramUsername }) => {
  return (
    <motion.section 
      id="contato" 
      className="py-16 md:py-20 bg-gradient-to-r from-primary via-secondary to-primary text-white"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInAnimation}
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Georgia', serif" }}>
          Entre em Contato
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
          Precisa de assistência jurídica? Estou à disposição para ajudar a encontrar a melhor solução para o seu caso.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="animate-subtle-pulse"
            >
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-4 px-10 text-lg rounded-lg shadow-xl transition-transform transform hover:scale-105 w-full sm:w-auto"
                onClick={() => window.open(whatsappLink, '_blank')}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <MessageSquareText className="mr-3 h-6 w-6" />
                WhatsApp
              </Button>
            </motion.div>
             <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-4 px-10 text-lg rounded-lg shadow-xl transition-transform transform hover:scale-105 w-full sm:w-auto"
                onClick={() => window.location.href = emailLink}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <Mail className="mr-3 h-6 w-6" />
                E-mail
              </Button>
            </motion.div>
        </div>
        <p className="mt-6 text-gray-300 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
          WhatsApp: {whatsappNumber} <span className="mx-2">|</span> E-mail: {emailAddress}
        </p>
         <a
          href={instagramLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-300 hover:text-white mt-2 transition-colors"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <InstagramIcon className="mr-2 h-5 w-5" />
          @{instagramUsername}
        </a>
      </div>
    </motion.section>
  );
};

export default ContactSection;