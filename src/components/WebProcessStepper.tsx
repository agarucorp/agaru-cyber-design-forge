import Icon1 from './assets/ProcessIcons/1.png';
import Icon2 from './assets/ProcessIcons/2.png';
import Icon3 from './assets/ProcessIcons/3.png';
import Icon4 from './assets/ProcessIcons/4.png';
import Icon5 from './assets/ProcessIcons/5.png';
import Icon6 from './assets/ProcessIcons/6.svg';
import { useState, useRef } from 'react';

interface WebProcessStepperProps {
  lang: 'ES' | 'EN';
}

const stepsES = [
  {
    icon: Icon1,
    title: 'Onboarding del proyecto',
    description:
      'Recopilamos toda la información relevante sobre tu proyecto: tu industria, activos de marca (logotipos, colores), usuarios clave, referencias visuales y los objetivos principales de tu negocio.',
  },
  {
    icon: Icon2,
    title: 'Alineación de diseño',
    description:
      'Presentamos el primer concepto de diseño. Recibimos tus comentarios para que podamos refinar la disposición y los elementos visuales. Esta es una etapa de previsualización, perfecta para solicitar ajustes.',
  },
  {
    icon: Icon3,
    title: 'Aprobación de diseño',
    description:
      'Revisión final del diseño. Basándonos en todos los comentarios anteriores, presentamos la versión completa y pulida del diseño del sitio web. Esta es la última oportunidad para realizar cambios antes de pasar al equipo de desarrollo.',
  },
  {
    icon: Icon4,
    title: 'Ejecución',
    description:
      'Nuestro equipo de desarrollo toma el relevo. Utilizando el diseño aprobado, comenzamos a construir el sitio web. Ambos equipos, de diseño y desarrollo, colaboran para asegurar que cada detalle sea implementado con precisión.',
  },
  {
    icon: Icon5,
    title: 'Lanzamiento',
    description:
      'Revisión final para asegurar que cada elemento esté en su lugar. Una vez aprobado, desplegamos el sitio web en nuestro servidor, dejándolo completamente operativo y listo para tu audiencia.',
  },
  {
    icon: Icon6,
    title: 'Mantenimiento',
    description:
      'El lanzamiento de tu sitio web es solo el comienzo. Esta etapa asegura que tu plataforma se mantenga en línea, optimizada y segura a lo largo del tiempo.',
  },
];

const stepsEN = [
  {
    icon: Icon1,
    title: 'Project onboarding',
    description: 'We gather all relevant information about your project: your industry, brand assets (logos, colors), key users, visual references, and your main business objectives.',
  },
  {
    icon: Icon2,
    title: 'Design alignment',
    description: 'We present the first design concept. We receive your feedback so we can refine the layout and visual elements. This is a preview stage, perfect for requesting adjustments.',
  },
  {
    icon: Icon3,
    title: 'Design approval',
    description: `We conduct the final design review. Based on all previous feedback, we present the complete and polished version of the website's design. This is the last opportunity for changes before moving to the development team.`,
  },
  {
    icon: Icon4,
    title: 'Execution',
    description: 'Our development team takes over. Using the approved design, we begin building the website. Both the design and development teams collaborate to ensure every detail is implemented with precision.',
  },
  {
    icon: Icon5,
    title: 'Deployment',
    description: 'We perform a final review to ensure every element is in place. Once approved, we deploy the website to our server, making it fully operational and ready for your audience.',
  },
  {
    icon: Icon6,
    title: 'Support and maintenance',
    description: 'Launching your website is just the beginning. This stage ensures your platform stays online, optimized, and secure over time.',
  },
];

export default function WebProcessStepper({ lang }: WebProcessStepperProps) {
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Detectar la card centrada al hacer scroll táctil
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const children = Array.from(carouselRef.current.children);
    const scrollLeft = carouselRef.current.scrollLeft;
    let minDiff = Infinity;
    let activeIdx = 0;
    children.forEach((child, idx) => {
      const el = child as HTMLElement;
      const diff = Math.abs(el.offsetLeft - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        activeIdx = idx;
      }
    });
    setCurrent(activeIdx);
  };

  const steps = lang === 'EN' ? stepsEN : stepsES;
  return (
    <section className="py-20 bg-black flex justify-center items-center w-full overflow-x-hidden">
      <div className="max-w-5xl w-full flex flex-col items-center px-2">
        <h2 className="text-[24px] md:text-5xl font-onest font-bold text-white mb-4 text-center">
          {lang === 'EN' ? (
            <><span className="text-[#895AF6]">Web Design</span> Process</>
          ) : (
            <>Proceso de <span className="text-[#895AF6]">diseño</span></>
          )}
        </h2>
        {/* Desktop: vertical steps */}
        <div className="hidden md:flex relative w-full flex-col items-center">
          <div className="flex flex-col w-full z-10 gap-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-row items-start w-full relative group">
                {/* Card glassmorphism */}
                <div className="w-full rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl px-5 py-5 flex flex-col items-start transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:border-[#895AF6]/40 hover:ring-2 hover:ring-[#895AF6]/30">
                  <h3 className="text-[14px] md:text-lg font-manrope font-semibold text-white mb-2 text-left drop-shadow group-hover:text-[#B983FF] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base font-manrope text-left leading-snug group-hover:text-white/90 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Mobile: carrusel táctil scroll-x, sin oscurecer cards */}
        <div className="md:hidden w-full overflow-x-hidden">
          <div className="w-full flex flex-col items-center">
            <div
              className="w-full overflow-x-auto flex snap-x snap-mandatory gap-6 pb-2 pl-4 pr-4"
              style={{ scrollbarWidth: 'none' }}
              ref={carouselRef}
              onScroll={handleScroll}
            >
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="snap-center flex flex-col items-center justify-center group transition-transform duration-300 min-w-[90vw] max-w-xs mx-auto"
                >
                  <div className="w-full min-h-[220px] cyber-card p-6 rounded-xl border border-white/5 flex flex-col items-center pt-6">
                    <h3 className="text-[16px] md:text-xl font-manrope font-bold text-white mb-4 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-base font-manrope text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Indicadores debajo de la card */}
            <div className="flex gap-2 mt-4">
              {steps.map((_, i) => (
                <button
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full border transition-colors duration-200 ${current === i ? 'bg-agaru-purple border-agaru-purple' : 'bg-cyber-grey border-gray-600'}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Paso ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 