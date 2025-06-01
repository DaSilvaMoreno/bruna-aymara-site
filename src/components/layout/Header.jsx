import React from 'react';
import { motion } from 'framer-motion';
import { Instagram as InstagramIcon } from 'lucide-react';

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const Header = ({ instagramLink, instagramUsername }) => {
  return (
    <header className="py-6 shadow-lg bg-background/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
        <motion.div {...fadeInAnimation} className="text-center sm:text-left mb-4 sm:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-primary tracking-tight" style={{ fontFamily: "'Georgia', serif" }}>
            Dra. Bruna Aymara
          </h1>
          <p className="text-sm text-accent font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
            Advocacia Especializada
          </p>
        </motion.div>
        <motion.div {...fadeInAnimation} transition={{ ...fadeInAnimation.transition, delay: 0.1 }}>
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent hover:text-accent/80 transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <InstagramIcon className="mr-2 h-5 w-5" />
            @{instagramUsername}
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;