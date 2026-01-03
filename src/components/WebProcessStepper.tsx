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
        {/* Desktop: Mapa de proceso con líneas de conexión */}
        <div className="hidden md:flex relative w-full min-h-[1400px] items-start justify-center mt-12 mb-12">
          {/* Contenedor de cards con posicionamiento */}
          <div className="relative w-full max-w-6xl z-10">
            {steps.map((step, idx) => {
              // Posiciones para cada card en el mapa (diseño tipo zigzag)
              const positions = [
                { left: '5%', top: '0px', align: 'left' },      // Card 1: Izquierda
                { left: '55%', top: '0px', align: 'right' },    // Card 2: Derecha (mismo nivel)
                { left: '5%', top: '220px', align: 'left' },    // Card 3: Izquierda (abajo)
                { left: '55%', top: '220px', align: 'right' },  // Card 4: Derecha (mismo nivel que 3)
                { left: '5%', top: '440px', align: 'left' },    // Card 5: Izquierda (más abajo)
                { left: '55%', top: '440px', align: 'right' },  // Card 6: Derecha (mismo nivel que 5)
              ];

              const position = positions[idx];
              const isLeft = position.align === 'left';

              return (
                <div
                  key={idx}
                  className="absolute group"
                  style={{
                    left: position.left,
                    top: position.top,
                    width: '40%',
                  }}
                >
                  {/* Card glassmorphism */}
                  <div className="relative w-full rounded-2xl bg-[#262626] shadow-xl px-5 py-5 flex flex-col items-start transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-2xl hover:ring-2 hover:ring-[#895AF6]/30">
                    {/* Número de etapa */}
                    <div className="absolute -left-4 -top-4 w-10 h-10 rounded-full bg-[#895AF6] border-2 border-black flex items-center justify-center text-white font-bold text-sm z-20 shadow-lg">
                      {idx + 1}
                    </div>

                    <h3 className="text-[14px] md:text-lg font-manrope font-semibold text-white mb-2 text-left drop-shadow group-hover:text-[#B983FF] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-sm font-manrope text-left leading-snug group-hover:text-white/90 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Líneas de conexión usando divs posicionados */}
            {/* Línea 1 -> 2 (horizontal) */}
            <div className="absolute top-[60px] left-[45%] w-[10%] h-[2px] bg-[#895AF6] opacity-40 z-0" style={{ background: 'linear-gradient(to right, #895AF6, #895AF6)' }}></div>
            
            {/* Línea 2 -> 3 (vertical abajo, luego horizontal izquierda) */}
            <div className="absolute top-[60px] left-[55%] w-[2px] h-[180px] bg-[#895AF6] opacity-40 z-0"></div>
            <div className="absolute top-[240px] left-[5%] w-[50%] h-[2px] bg-[#895AF6] opacity-40 z-0"></div>
            
            {/* Línea 3 -> 4 (horizontal) */}
            <div className="absolute top-[280px] left-[45%] w-[10%] h-[2px] bg-[#895AF6] opacity-40 z-0"></div>
            
            {/* Línea 4 -> 5 (vertical abajo, luego horizontal izquierda) */}
            <div className="absolute top-[280px] left-[55%] w-[2px] h-[180px] bg-[#895AF6] opacity-40 z-0"></div>
            <div className="absolute top-[460px] left-[5%] w-[50%] h-[2px] bg-[#895AF6] opacity-40 z-0"></div>
            
            {/* Línea 5 -> 6 (horizontal) */}
            <div className="absolute top-[500px] left-[45%] w-[10%] h-[2px] bg-[#895AF6] opacity-40 z-0"></div>
          </div>
        </div>
        {/* Mobile: Layout vertical con líneas de conexión */}
        <div className="md:hidden w-full overflow-x-hidden">
          <div className="relative w-full px-4 py-8">
            {/* Línea vertical central que conecta todas las cards */}
            <div className="absolute left-8 top-12 bottom-12 w-[2px] bg-[#895AF6] opacity-30 z-0"></div>

            {/* Cards en layout vertical */}
            <div className="relative space-y-8">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative group"
                >
                  {/* Número de etapa a la izquierda */}
                  <div className="absolute -left-2 top-6 w-10 h-10 rounded-full bg-[#895AF6] border-2 border-black flex items-center justify-center text-white font-bold text-sm z-20 shadow-lg">
                    {idx + 1}
                  </div>

                  {/* Card */}
                  <div className="ml-12 rounded-2xl bg-[#262626] shadow-xl px-5 py-5 flex flex-col items-start transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl hover:ring-2 hover:ring-[#895AF6]/30">
                    <h3 className="text-[16px] font-manrope font-bold text-white mb-2 text-left drop-shadow group-hover:text-[#B983FF] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm font-manrope text-left leading-snug group-hover:text-white/90 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>

                  {/* Línea horizontal que conecta con la línea vertical (excepto la última) */}
                  {idx < steps.length - 1 && (
                    <div className="absolute left-8 top-[60px] w-4 h-[2px] bg-[#895AF6] opacity-30 z-0"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 