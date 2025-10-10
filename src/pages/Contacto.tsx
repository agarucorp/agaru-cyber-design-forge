import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

const Contacto = () => {
  const [lang, setLang] = useState<'ES' | 'EN'>('ES');

  return (
    <>
      <Helmet>
        <title>Contacto | AgaruCorp - Transforma tu Negocio Digital</title>
        <meta name="description" content="¿Listo para transformar tu negocio? Contáctanos para discutir tu proyecto de diseño web, UX/UI o branding. Consulta gratuita en Buenos Aires." />
        <link rel="canonical" href="https://www.agarucorp.com/contacto" />
        <meta property="og:title" content="Contacto | AgaruCorp - Transforma tu Negocio Digital" />
        <meta property="og:description" content="¿Listo para transformar tu negocio? Contáctanos para discutir tu proyecto de diseño web, UX/UI o branding. Consulta gratuita." />
      </Helmet>
      
      <div className="min-h-screen bg-cyber-dark">
        <Navbar lang={lang} setLang={setLang} />
        
        {/* Hero Section para página de contacto */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#895AF6] via-[#B983FF] to-[#4DE3FF]">Contacto</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              ¿Listo para transformar tu negocio digital? Hablemos de tu proyecto.
            </p>
          </div>
        </section>

        {/* Sección de contacto */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Información de contacto */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Información de Contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-agaru-purple/20 rounded-lg flex items-center justify-center">
                        <span className="text-agaru-purple text-xl">📧</span>
                      </div>
                      <div>
                        <p className="text-gray-300">Email</p>
                        <a href="mailto:agaru.corp@gmail.com" className="text-white hover:text-agaru-purple transition-colors">
                          agaru.corp@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-agaru-purple/20 rounded-lg flex items-center justify-center">
                        <span className="text-agaru-purple text-xl">📱</span>
                      </div>
                      <div>
                        <p className="text-gray-300">WhatsApp</p>
                        <a href="https://wa.me/5491130509316" target="_blank" rel="noopener noreferrer" className="text-white hover:text-agaru-purple transition-colors">
                          +54 9 11 3050-9316
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-agaru-purple/20 rounded-lg flex items-center justify-center">
                        <span className="text-agaru-purple text-xl">📍</span>
                      </div>
                      <div>
                        <p className="text-gray-300">Ubicación</p>
                        <p className="text-white">Buenos Aires, Argentina</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botón de WhatsApp destacado */}
              <div className="flex flex-col items-center justify-center">
                <div className="bg-gradient-to-r from-agaru-purple to-agaru-blue p-8 rounded-2xl text-center max-w-sm">
                  <h3 className="text-xl font-bold text-white mb-4">¿Tienes un proyecto en mente?</h3>
                  <p className="text-gray-200 mb-6">Hablemos sobre cómo podemos ayudarte a transformar tu negocio digital.</p>
                  <a
                    href="https://wa.me/5491130509316"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white text-agaru-purple font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span className="mr-2">💬</span>
                    Iniciar Conversación
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer lang={lang} />
      </div>
    </>
  );
};

export default Contacto;
