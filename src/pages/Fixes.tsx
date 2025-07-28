import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import FixesForm from '../components/FixesForm';

const Fixes = () => {
  const [lang, setLang] = useState<'ES' | 'EN'>('EN');

  const seo = {
    ES: {
      title: 'Ajustes y Fixes | AgaruCorp',
      description: 'Reporta ajustes y mejoras para tu proyecto. Envía tus comentarios sobre lo que está conforme y lo que necesita cambios.'
    },
    EN: {
      title: 'Fixes and Adjustments | AgaruCorp',
      description: 'Report fixes and improvements for your project. Send your feedback about what is working and what needs changes.'
    }
  };

  return (
    <>
      <Helmet>
        <title>{seo[lang].title}</title>
        <meta name="description" content={seo[lang].description} />
        <link rel="canonical" href="https://www.agarucorp.com/fixes" />
      </Helmet>
      
      <div className="min-h-screen bg-cyber-dark">
        <FixesForm lang={lang} setLang={setLang} />
        
        {/* Powered by AgaruCorp */}
        <div className="border-t border-gray-800 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center">
              <div className="text-gray-400 text-sm text-center">
                © Powered by AgaruCorp
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fixes; 