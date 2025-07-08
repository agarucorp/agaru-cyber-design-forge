
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WebDesignApproach from '../components/WebDesignApproach';
import BrandingApproach from '../components/BrandingApproach';
import ProjectShowcase from '../components/ProjectShowcase';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { useState } from 'react';

const Index = () => {
  const [lang, setLang] = useState<'ES' | 'EN'>('ES');
  return (
    <div className="min-h-screen bg-cyber-dark">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Services lang={lang} />
      <WebDesignApproach lang={lang} />
      <BrandingApproach lang={lang} />
      <ProjectShowcase lang={lang} />
      <FAQ lang={lang} />
      <Footer lang={lang} />
    </div>
  );
};

export default Index;
