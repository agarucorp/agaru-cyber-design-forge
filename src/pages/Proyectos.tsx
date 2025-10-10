import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import ProjectShowcase from '../components/ProjectShowcase';
import Footer from '../components/Footer';
import { useState } from 'react';

const Proyectos = () => {
  const [lang, setLang] = useState<'ES' | 'EN'>('ES');

  return (
    <>
      <Helmet>
        <title>Proyectos | AgaruCorp - Portfolio de Diseño Web</title>
        <meta name="description" content="Descubre nuestros proyectos de diseño web, desarrollo de aplicaciones y branding. Casos de éxito para PyMEs y startups en Buenos Aires." />
        <link rel="canonical" href="https://www.agarucorp.com/proyectos" />
        <meta property="og:title" content="Proyectos | AgaruCorp - Portfolio de Diseño Web" />
        <meta property="og:description" content="Descubre nuestros proyectos de diseño web, desarrollo de aplicaciones y branding. Casos de éxito para PyMEs y startups." />
      </Helmet>
      
      <div className="min-h-screen bg-cyber-dark">
        <Navbar lang={lang} setLang={setLang} />
        
        {/* Hero Section para página de proyectos */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#895AF6] via-[#B983FF] to-[#4DE3FF]">Proyectos</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Casos de éxito que transformaron negocios digitales
            </p>
          </div>
        </section>

        <ProjectShowcase lang={lang} />
        <Footer lang={lang} />
      </div>
    </>
  );
};

export default Proyectos;
