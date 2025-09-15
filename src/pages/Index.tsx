
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
      title: 'AgaruCorp | Diseño Web & Estrategia de Marca',
      description: 'Diseñamos experiencias digitales completas para pequeñas y medianas empresas, desde la creación de tu sitio o aplicación web hasta una identidad de marca que conecte con tus clientes.'
    },
    EN: {
      title: 'AgaruCorp | Web Design & Brand Strategy',
      description: 'We design complete digital experiences for small and medium businesses, from creating your website or web application to a brand identity that connects with your customers.'
    }
  };

  return (
    <>
      {/* Helmet gestiona las etiquetas <title> y <meta> para SEO, cambiando según el idioma */}
      <Helmet>
        <title>{seo[lang].title}</title>
        <meta name="description" content={seo[lang].description} />
        <meta name="keywords" content={lang === 'ES' 
          ? "diseño web, diseño de pagina web, sitio web, landing page, desarrollo de sitio web, sitio web para pyme, sitio web startup, sitio web empresa, diseño web argentina, diseño web buenos aires, branding, estrategia de marca, diseño UX/UI, React, Next.js, Vercel, JavaScript, TypeScript, sitios web responsivos, identidad corporativa, agencia digital, desarrollo web, aplicaciones web, AgaruCorp"
          : "web design, website design, website, landing page, website development, website for small business, startup website, company website, web design argentina, web design buenos aires, branding, brand strategy, UX/UI design, React, Next.js, Vercel, JavaScript, TypeScript, responsive websites, corporate identity, digital agency, web development, web applications, AgaruCorp"
        } />
        {/* URL canónica para SEO */}
        <link rel="canonical" href="https://www.agarucorp.com{lang === 'EN' ? '/en' : '/'}" />
        {/* Open Graph dinámico */}
        <meta property="og:title" content={seo[lang].title} />
        <meta property="og:description" content={seo[lang].description} />
        <meta property="og:locale" content={lang === 'ES' ? 'es_AR' : 'en_US'} />
        {/* Twitter Cards dinámicas */}
        <meta name="twitter:title" content={seo[lang].title} />
        <meta name="twitter:description" content={seo[lang].description} />
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
