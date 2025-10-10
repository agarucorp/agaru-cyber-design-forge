import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { useState } from 'react';

const Servicios = () => {
  const [lang, setLang] = useState<'ES' | 'EN'>('ES');

  return (
    <>
      <Helmet>
        <title>Servicios | AgaruCorp - Diseño Web, UX/UI y Branding</title>
        <meta name="description" content="Ofrecemos servicios completos de diseño web, UX/UI, desarrollo de aplicaciones y branding para PyMEs y startups en Buenos Aires. Transformamos tu presencia digital." />
        <link rel="canonical" href="https://www.agarucorp.com/servicios" />
        <meta property="og:title" content="Servicios | AgaruCorp - Diseño Web, UX/UI y Branding" />
        <meta property="og:description" content="Ofrecemos servicios completos de diseño web, UX/UI, desarrollo de aplicaciones y branding para PyMEs y startups en Buenos Aires." />
      </Helmet>
      
      <div className="min-h-screen bg-cyber-dark">
        <Navbar lang={lang} setLang={setLang} />
        
        {/* Hero Section para página de servicios */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#895AF6] via-[#B983FF] to-[#4DE3FF]">Servicios</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nos especializamos en ayudar a PyMEs, startups y profesionales ambiciosos a lanzar sus marcas online
            </p>
          </div>
        </section>

        <Services lang={lang} />
        <Footer lang={lang} />
      </div>
    </>
  );
};

export default Servicios;
