import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/layout/HeroSection';
import AreasOfPracticeSection from '@/components/layout/AreasOfPracticeSection';
import MissionSection from '@/components/layout/MissionSection';
import ContactSection from '@/components/layout/ContactSection';
import Footer from '@/components/layout/Footer';

const App = () => {
  const appData = {
    whatsappNumber: "21993107767",
    emailAddress: "bruna.aymarag@gmail.com",
    instagramUsername: "brunaa.assistentejuridico",
    profileImageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/8e549ebf-76f3-4812-b76a-8633f7033560/1824b7e8cdf08e57661b247e231867e5.jpg",
    missionText: "Atuar com excelência na defesa dos direitos dos trabalhadores e empregadores, oferecendo orientação jurídica humanizada, estratégica e eficaz. Busco promover justiça, equilíbrio e segurança nas relações de trabalho, com transparência, ética e compromisso com resultados. Minha missão é transformar desafios jurídicos em soluções que impactam positivamente a vida e os negócios dos meus clientes.",
    areasOfPractice: [
      { name: "Direito do Consumidor", description: "Defesa dos direitos dos consumidores em relações de consumo." },
      { name: "Direito Civil", description: "Soluções para questões cíveis, contratos, responsabilidade civil e família." },
      { name: "Direito do Trabalho", description: "Assessoria completa para empregados e empregadores em questões trabalhistas." },
    ],
  };

  appData.whatsappLink = `https://wa.me/${appData.whatsappNumber}?text=${encodeURIComponent("Olá, Dra. Bruna! Gostaria de uma consulta jurídica.")}`;
  appData.emailLink = `mailto:${appData.emailAddress}?subject=${encodeURIComponent("Consulta Jurídica")}&body=${encodeURIComponent("Olá, Dra. Bruna!\n\nEscrevo para solicitar uma consulta jurídica.\n\n[Descreva brevemente seu caso aqui]\n\nAtenciosamente,\n[Seu Nome]")}`;
  appData.instagramLink = `https://www.instagram.com/${appData.instagramUsername}`;


  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary via-secondary to-primary text-gray-100">
      <Header 
        instagramLink={appData.instagramLink} 
        instagramUsername={appData.instagramUsername} 
      />
      <main className="flex-grow">
        <HeroSection 
          profileImageUrl={appData.profileImageUrl}
          whatsappLink={appData.whatsappLink}
          emailLink={appData.emailLink}
        />
        <AreasOfPracticeSection areas={appData.areasOfPractice} />
        <MissionSection missionText={appData.missionText} />
        <ContactSection 
          whatsappLink={appData.whatsappLink}
          emailLink={appData.emailLink}
          whatsappNumber={appData.whatsappNumber}
          emailAddress={appData.emailAddress}
          instagramLink={appData.instagramLink}
          instagramUsername={appData.instagramUsername}
        />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;