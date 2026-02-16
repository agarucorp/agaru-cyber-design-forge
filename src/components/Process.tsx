import { ArrowRight } from 'lucide-react';
import { ScrollAnimate } from './ScrollAnimate';

interface ProcessProps {
  lang: 'ES' | 'EN';
}

const Process = ({ lang }: ProcessProps) => {
  const steps = [
    {
      number: 1,
      title: lang === 'ES' ? 'Análisis' : 'Assessment',
      description: lang === 'ES' 
        ? 'Análisis de necesidades clave y consultoría estratégica para definir la dirección del proyecto.'
        : 'Understanding core needs and providing strategic consulting to define the project direction.',
      icon: '/Assessment.svg',
      color: '#4DE3FF', // Light blue
      borderColor: '#4DE3FF',
      markerSvg: '/process1.svg' // Marcador completo que reemplaza el pill para el paso 1
    },
    {
      number: 2,
      title: lang === 'ES' ? 'Propuesta' : 'Proposal',
      description: lang === 'ES'
        ? 'Propuesta comercial formal del proyecto que detalla tiempos por sprints, alcance y costos de forma transparente.'
        : 'A formal project roadmap outlining sprint-based timelines, scope, and transparent pricing.',
      icon: '/proposal.svg',
      color: '#5A7AF6', // Blue
      borderColor: '#5A7AF6',
      markerSvg: '/process2.svg'
    },
    {
      number: 3,
      title: lang === 'ES' ? 'Ejecución' : 'Execution',
      description: lang === 'ES'
        ? 'Investigación y desarrollo creativo para transformar la estrategia en soluciones visuales y funcionales.'
        : 'Research and creative development to translate strategy into visual and functional solutions.',
      icon: '/execution.svg',
      color: '#895AF6', // Purple
      borderColor: '#895AF6',
      markerSvg: '/process3.svg'
    },
    {
      number: 4,
      title: lang === 'ES' ? 'Revisión' : 'Review',
      description: lang === 'ES'
        ? 'Presentación de avances y ajustes colaborativos para afinar detalles antes de la entrega final.'
        : 'Progress presentation and collaborative refinement to adjust details before final delivery.',
      icon: '/review.svg',
      color: '#E84C9F', // Pink/Magenta
      borderColor: '#E84C9F',
      markerSvg: '/process4.svg'
    },
    {
      number: 5,
      title: lang === 'ES' ? 'Entrega' : 'Delivery',
      description: lang === 'ES'
        ? 'Finalización del proyecto con transferencia de accesos, documentación técnica y guías de soporte.'
        : 'Project completion with access transfer, technical documentation, and supporting guidelines.',
      icon: '/delivery.svg',
      color: '#FF6B4A', // Orange/Red
      borderColor: '#FF6B4A',
      markerSvg: '/process5.svg'
    }
  ];

  return (
    <section id="process" className="relative w-full overflow-hidden" style={{ backgroundColor: '#362462' }}>
      {/* Wave superior */}
      <div className="absolute top-0 left-0 right-0 w-full" style={{ transform: 'scaleY(-1)' }}>
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#000000"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32 xl:py-[166px] 2xl:py-[166px] relative z-10">
        <ScrollAnimate threshold={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-[40px] md:text-5xl font-onest font-black text-white mb-6">
              {lang === 'ES' ? 'Proceso' : 'Our process'}
            </h2>
            <p className="text-[16px] md:text-[16px] text-gray-300 max-w-3xl mx-auto font-manrope font-light">
              {lang === 'ES' ? 'Cómo trabajamos' : 'How we work'}
            </p>
          </div>
        </ScrollAnimate>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <ScrollAnimate key={index} delay={index * 100} threshold={0.15}>
              <div className="w-full max-w-3xl mx-auto">
              {/* Desktop: Layout horizontal */}
              <div className="hidden md:grid md:grid-cols-[auto_200px_auto_1fr] md:items-center md:gap-8">
                {/* Paso 1: marcador completo process1.svg; resto: pill con número e icono */}
                {step.markerSvg ? (
                  <img 
                    src={step.markerSvg} 
                    alt={step.title}
                    className="h-14 w-auto flex-shrink-0 object-contain"
                  />
                ) : (
                  <div 
                    className="flex items-center gap-3 px-8 py-1.5 rounded-full border-2 flex-shrink-0 bg-white"
                    style={{ borderColor: step.borderColor }}
                  >
                    <span className="text-[#362462] font-bold text-lg">{step.number}</span>
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: step.color }}
                    >
                      <img src={step.icon} alt={step.title} className="w-7 h-7" />
                    </div>
                  </div>
                )}

                {/* Título */}
                <h3 className="text-white font-bold text-xl">{step.title}</h3>

                {/* Flecha - alineada con el contenido, más larga y fina */}
                <div className="flex items-start justify-center pt-1 pr-10 -ml-8">
                  <ArrowRight className="w-12 h-6 text-white" strokeWidth={1.5} />
                </div>

                {/* Descripción */}
                <p className="text-gray-300 text-sm md:text-[14px] font-manrope font-light pt-1">
                  {step.description}
                </p>
              </div>

              {/* Mobile: Layout en dos líneas */}
              <div className="md:hidden max-w-[85%] mx-auto">
                {/* Primera línea: Paso 1 = process1.svg como marcador; resto = Pill + Título */}
                <div className="flex items-center gap-4 mb-2">
                  {step.markerSvg ? (
                    <img 
                      src={step.markerSvg} 
                      alt={step.title}
                      className="h-14 w-auto flex-shrink-0 object-contain"
                    />
                  ) : (
                    <div 
                      className="flex items-center gap-4 px-10 py-2 rounded-full border-2 flex-shrink-0 bg-white"
                      style={{ 
                        borderColor: step.borderColor,
                        minHeight: '3.5rem'
                      }}
                    >
                      <span className="text-[#362462] font-bold text-lg">{step.number}</span>
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: step.color }}
                      >
                        <img src={step.icon} alt={step.title} className="w-7 h-7" />
                      </div>
                    </div>
                  )}

                  {/* Título */}
                  <h3 className="text-white font-bold text-xl">{step.title}</h3>
                </div>

                {/* Segunda línea: Contenido */}
                <p className="text-gray-300 text-sm font-manrope font-light">
                  {step.description}
                </p>
              </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>

      {/* Wave inferior */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#000000"/>
        </svg>
      </div>
    </section>
  );
};

export default Process;
