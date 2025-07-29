
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WebProcessStepper from '../components/WebProcessStepper';
import BrandingApproach from '../components/BrandingApproach';
import ProjectShowcase from '../components/ProjectShowcase';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  // Comentario: Configuración SEO dinámica según el idioma seleccionado
  const [lang, setLang] = useState<'ES' | 'EN'>('ES');

  // Definición de títulos y descripciones SEO por idioma
  const seo = {
    ES: {
      title: 'AgaruCorp | Diseño Web y Branding',
      description: 'AgaruCorp crea páginas web, aplicaciones y estrategias de marca para tu negocio. ¿Necesitás un sitio web o potenciar tu presencia digital? ¡Contactanos y hablemos de tu proyecto!'
    },
    EN: {
      title: 'AgaruCorp | Web Design & Branding',
      description: 'AgaruCorp crafts stunning websites, web applications, and powerful brand strategies for your business. Need a new website or want to boost your digital presence? Contact us to discuss your project!'
    }
  };

  return (
    <>
      {/* Helmet gestiona las etiquetas <title> y <meta> para SEO, cambiando según el idioma */}
      <Helmet>
        <title>AgaruCorp</title>
        <meta name="description" content={seo[lang].description} />
        {/* URL canónica para SEO */}
        <link rel="canonical" href="https://www.agarucorp.com{lang === 'EN' ? '/en' : '/'}" />
      </Helmet>
      {/* Fin configuración SEO dinámica */}
      <div className="min-h-screen bg-cyber-dark">
        <Navbar lang={lang} setLang={setLang} />
        <Hero lang={lang} />
        <Services lang={lang} />
        <section id="process">
          <WebProcessStepper lang={lang} />
          <BrandingApproach lang={lang} />
        </section>
        <ProjectShowcase lang={lang} />
        <FAQ lang={lang} />
        <Footer lang={lang} />
      </div>
    </>
  );
};

export default Index;
