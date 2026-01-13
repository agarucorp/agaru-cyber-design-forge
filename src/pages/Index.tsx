
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ProjectShowcase from '../components/ProjectShowcase';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  // Comentario: Configuración SEO dinámica según el idioma seleccionado
  const [lang, setLang] = useState<'ES' | 'EN'>('EN');

  // SEO optimizado para español únicamente
  const seo = {
    title: 'AGARUCORP | Design Studio', // Título para la pestaña del navegador
    titleForSharing: 'AgaruCorp | Diseño Web y Estrategia de Marca', // Título para compartir en redes sociales
    description: 'Creamos landing pages, sitios web, catálogos digitales y estrategia de marca para impulsar tu crecimiento online.'
  };

  return (
    <>
      {/* Helmet gestiona las etiquetas <title> y <meta> para SEO optimizado */}
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content="diseño web, diseño de pagina web, sitio web, landing page, desarrollo de sitio web, sitio web para pyme, sitio web startup, sitio web empresa, diseño web argentina, diseño web buenos aires, branding, estrategia de marca, diseño UX/UI, React, Next.js, Vercel, JavaScript, TypeScript, sitios web responsivos, identidad corporativa, agencia digital, desarrollo web, aplicaciones web, AgaruCorp" />
        {/* URL canónica fija para SEO */}
        <link rel="canonical" href="https://www.agarucorp.com/" />
        {/* Open Graph optimizado */}
        <meta property="og:title" content={seo.titleForSharing} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content="https://www.agarucorp.com/bannersocials.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="AgaruCorp - Diseño Web y Estrategia de Marca" />
        <meta property="og:locale" content="es_AR" />
        {/* Twitter Cards optimizadas */}
        <meta name="twitter:title" content={seo.titleForSharing} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content="https://www.agarucorp.com/bannersocials.png" />
        <meta name="twitter:image:alt" content="AgaruCorp - Diseño Web y Estrategia de Marca" />
      </Helmet>
      {/* Fin configuración SEO dinámica */}
      <div className="min-h-screen w-full overflow-x-hidden relative" style={{ backgroundColor: '#000000' }}>
        <Navbar lang={lang} setLang={setLang} />
        <Hero lang={lang} />
        <Services lang={lang} />
        <ProjectShowcase lang={lang} />
        <Process lang={lang} />
        <FAQ lang={lang} />
        <Footer lang={lang} />
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default Index;
