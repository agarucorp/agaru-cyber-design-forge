import { Check } from 'lucide-react';
import { ScrollAnimate } from './ScrollAnimate';

const Hero = ({ lang = 'ES' }) => {
  return (
    <div className="min-h-screen relative w-full" style={{ backgroundColor: '#000000', overflow: 'visible' }}>
      {/* Iluminación violeta oscura en la parte superior */}
      <div 
        className="absolute top-0 left-0 right-0 h-[40%] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at center top, rgba(76, 29, 149, 0.4) 0%, rgba(76, 29, 149, 0.2) 40%, transparent 70%)',
        }}
      />
      
      {/* Elementos SVG de fondo - Solo en la hero */}
      <div className="absolute top-0 left-0 right-0 w-full pointer-events-none" style={{ height: '200vh', minHeight: '200vh', zIndex: 1 }}>
        {/* Elemento 1 - Izquierda superior */}
        <img 
          src="/elemento1.svg" 
          alt="" 
          className="absolute w-auto h-auto max-w-[90vw] max-h-[90vh] md:max-w-[90vw] md:max-h-[120vh] md:scale-[1.57]"
          style={{ 
            top: '-15%',
            left: '-65%',
            transformOrigin: 'top left',
            objectFit: 'contain',
            objectPosition: 'left top',
            transform: 'scale(2.25)',
          }}
        />
        {/* Elemento 2 - Derecha */}
        <img 
          src="/elemento2.svg" 
          alt="" 
          className="absolute w-auto h-auto max-w-[90vw] max-h-[90vh] md:max-w-[90vw] md:max-h-[120vh] object-contain md:scale-[1.51]"
          style={{ 
            top: '20%',
            right: '-40%',
            transformOrigin: 'top right',
            transform: 'scale(1.72)',
          }}
        />
        <style>{`
          @media (min-width: 768px) {
            img[src="/elemento1.svg"] {
              top: -30% !important;
              left: -30% !important;
              transform: scale(1.57) !important;
            }
            img[src="/elemento2.svg"] {
              top: -10% !important;
              right: -25% !important;
              transform: scale(1.51) !important;
            }
          }
        `}</style>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 pt-36 pb-8 md:pt-20 lg:mt-0 lg:pt-32 lg:pb-16 xl:pt-24 xl:pb-12 2xl:pt-20 2xl:pb-10" style={{ width: 'calc(100% - 2rem)', maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
        <div className="px-4 sm:px-6 lg:px-8 xl:px-6 2xl:px-4">
          <div className="md:pl-6 lg:pl-8">
            <ScrollAnimate threshold={0.1} rootMargin="200px 0px 0px 0px">
              <div className="flex flex-col items-start justify-start text-left">
                {/* Hero Header */}
                <ScrollAnimate delay={100} threshold={0.1} rootMargin="200px 0px 0px 0px">
                  <h1 className="font-onest font-normal text-white mb-6 md:text-[72px] text-[66px]" style={{ lineHeight: '1.2' }}>
                    {lang === 'ES' ? 'Más espacio para tus mejores ideas.' : <>More space for your<br />biggest ideas.</>}
                  </h1>
                </ScrollAnimate>
                {/* Subheader */}
                <ScrollAnimate delay={200} threshold={0.1} rootMargin="200px 0px 0px 0px">
                  <p className="font-manrope font-normal text-white mb-6 md:max-w-[750px] text-[16px] md:text-[18px]" style={{ lineHeight: '1.5' }}>
                    {lang === 'ES' 
                      ? 'Alineamos los objetivos de tu negocio con diseño web a medida, experiencia centrada en el usuario y soluciones digitales de alto rendimiento.'
                      : 'We align your business goals with custom web design, user-centered experiences, and high-performance digital solutions.'}
                  </p>
                </ScrollAnimate>
                
                {/* Check Items */}
                <ScrollAnimate delay={300} threshold={0.1} rootMargin="200px 0px 0px 0px">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                    <div className="flex items-center gap-2">
                      <Check size={14} className="md:w-[18px] md:h-[18px] text-[#895AF6] flex-shrink-0" style={{ width: '14px', height: '14px' }} />
                      <span className="font-manrope font-normal text-white text-[14px] md:text-[12px]">
                        {lang === 'ES' ? 'Sitios web y landing pages a medida' : 'Custom websites & landing pages'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check size={14} className="md:w-[18px] md:h-[18px] text-[#895AF6] flex-shrink-0" style={{ width: '14px', height: '14px' }} />
                      <span className="font-manrope font-normal text-white text-[14px] md:text-[12px]">
                        {lang === 'ES' ? 'Web apps escalables y automatización' : 'Scalable web apps & automation'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check size={14} className="md:w-[18px] md:h-[18px] text-[#895AF6] flex-shrink-0" style={{ width: '14px', height: '14px' }} />
                      <span className="font-manrope font-normal text-white text-[14px] md:text-[12px]">
                        {lang === 'ES' ? 'Branding estratégico y activos visuales' : 'Strategic branding & visual assets'}
                      </span>
                    </div>
                  </div>
                </ScrollAnimate>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
