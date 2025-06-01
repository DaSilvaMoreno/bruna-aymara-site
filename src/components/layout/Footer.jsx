import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 text-gray-400 text-center">
      <div className="container mx-auto px-6">
        <p className="text-sm mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
          Dra. Bruna Aymara - Advocacia e Consultoria Jurídica
        </p>
        <p className="text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
          Atuação em Direito do Consumidor, Civil e Trabalhista
        </p>
        <p className="text-xs mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>
          © {new Date().getFullYear()} Todos os direitos reservados. 
          Desenvolvido com <span className="text-accent">Bruna Aymara Advocacia</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
