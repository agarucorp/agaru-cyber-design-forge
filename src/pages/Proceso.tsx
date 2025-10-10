import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import WebProcessStepper from '../components/WebProcessStepper';
import Footer from '../components/Footer';
import { useState } from 'react';

const Proceso = () => {
  const [lang, setLang] = useState<'ES' | 'EN'>('ES');

  return (
    <>
      <Helmet>
        <title>Proceso de Trabajo | AgaruCorp - ¿Cómo Trabajamos?</title>
        <meta name="description" content="Conoce nuestro proceso de trabajo paso a paso: desde el onboarding hasta el deployment. Metodología probada para proyectos de diseño web exitosos." />
        <link rel="canonical" href="https://www.agarucorp.com/proceso" />
        <meta property="og:title" content="Proceso de Trabajo | AgaruCorp - ¿Cómo Trabajamos?" />
        <meta property="og:description" content="Conoce nuestro proceso de trabajo paso a paso: desde el onboarding hasta el deployment. Metodología probada para proyectos exitosos." />
      </Helmet>
      
      <div className="min-h-screen bg-cyber-dark">
        <Navbar lang={lang} setLang={setLang} />
        
        {/* Hero Section para página de proceso */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#895AF6] via-[#B983FF] to-[#4DE3FF]">Proceso</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Una metodología probada para resultados excepcionales
            </p>
          </div>
        </section>

        <WebProcessStepper lang={lang} />
        <Footer lang={lang} />
      </div>
    </>
  );
};

export default Proceso;
