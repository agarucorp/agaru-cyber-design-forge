
import { Search, Lightbulb, Code, Rocket, CheckCircle } from 'lucide-react';

interface WebDesignApproachProps {
  lang: 'ES' | 'EN';
}

const WebDesignApproach = ({ lang }: WebDesignApproachProps) => {
  const steps = lang === 'ES'
    ? [
        {
          icon: <Search className="w-8 h-8" />,
          title: 'Descubrimiento e Investigación',
          description: 'Creamos wireframes y prototipos interactivos que visualizan la experiencia antes del desarrollo.',
        },
        {
          icon: <Lightbulb className="w-8 h-8" />,
          title: 'Diseño y Prototipado',
          description: 'Creamos wireframes y prototipos interactivos que visualizan la experiencia antes del desarrollo.',
        },
        {
          icon: <Code className="w-8 h-8" />,
          title: 'Desarrollo',
          description: 'Creamos wireframes y prototipos interactivos que visualizan la experiencia antes del desarrollo.',
        },
        {
          icon: <Rocket className="w-8 h-8" />,
          title: 'Lanzamiento y Optimización',
          description: 'Creamos wireframes y prototipos interactivos que visualizan la experiencia antes del desarrollo.',
        },
      ]
    : [
        {
          icon: <Search className="w-8 h-8" />,
          title: 'Discovery & Research',
          description: 'We dive deep into understanding your business, target audience, and goals to create a strategic foundation.',
        },
        {
          icon: <Lightbulb className="w-8 h-8" />,
          title: 'Design & Prototype',
          description: 'Creating wireframes and interactive prototypes that visualize the user experience before development.',
        },
        {
          icon: <Code className="w-8 h-8" />,
          title: 'Development',
          description: 'Building your website with clean, scalable code using modern technologies and best practices.',
        },
        {
          icon: <Rocket className="w-8 h-8" />,
          title: 'Launch & Optimize',
          description: 'Deploying your website and continuously optimizing for performance, SEO, and user experience.',
        },
      ];

  const features = lang === 'ES'
    ? [
        'Diseño Mobile-First',
        'Optimización de Performance',
        'SEO Listo',
        'Accesibilidad Cumplida',
        'Tecnologías Modernas',
        'Soporte Continuo'
      ]
    : [
        'Mobile-First Design',
        'Performance Optimized',
        'SEO Ready',
        'Accessibility Compliant',
        'Modern Technologies',
        'Ongoing Support'
      ];

  return (
    <section id="process" className="py-20 bg-cyber-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestro Proceso de <span className="bg-gradient-to-r from-[#895AF6] to-[#4DE3FF] bg-clip-text text-transparent">Diseño & Desarrollo Web</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ¿Cómo funciona?
          </p>
        </div>

        <div className="space-y-20 max-w-5xl mx-auto">
          {/* Card 1: icono, header y sin card de descripción */}
          {steps[0] && (
            <div key={0} className="relative group animate-fade-in">
              <div className="flex flex-col md:flex-row items-start gap-4 mb-1 w-full">
                <div className="flex flex-row items-center gap-4 flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#895AF6]/80 to-[#4DE3FF]/60 shadow-lg">
                    <span className="text-white text-3xl">{steps[0].icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-0">{steps[0].title}</h3>
                  <span className="text-sm text-[#895AF6] font-medium ml-4">{lang === 'ES' ? `Etapa 1` : `Step 1`}</span>
                </div>
                {/* Sin card de descripción */}
              </div>
              {/* Línea divisoria */}
              <div className="w-full h-px bg-gradient-to-r from-[#ffffff22] to-transparent mt-12 md:mt-16"></div>
            </div>
          )}
          {/* Card 2 visible */}
          {steps[1] && (
            <div key={1} className="relative group animate-fade-in">
              <div className="flex flex-col md:flex-row items-start gap-4 mb-1 w-full">
                <div className="flex flex-row items-center gap-4 flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#895AF6]/80 to-[#4DE3FF]/60 shadow-lg">
                    <span className="text-white text-3xl">{steps[1].icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-0">{steps[1].title}</h3>
                  <span className="text-sm text-[#895AF6] font-medium ml-4">{lang === 'ES' ? `Etapa 2` : `Step 2`}</span>
                </div>
                <div className="w-full md:w-[520px] bg-[#23243a] rounded-xl px-8 py-6 text-gray-300 shadow-md border border-white/5 text-base ml-0 md:ml-56 mt-4 md:mt-0">
                  {steps[1].description}
                </div>
              </div>
              {/* Línea divisoria */}
              <div className="w-full h-px bg-gradient-to-r from-[#ffffff22] to-transparent mt-12 md:mt-16"></div>
            </div>
          )}
          {/* Card 3: icono, header y sin card de descripción */}
          {steps[2] && (
            <div key={2} className="relative group animate-fade-in">
              <div className="flex flex-col md:flex-row items-start gap-4 mb-1 w-full">
                <div className="flex flex-row items-center gap-4 flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#895AF6]/80 to-[#4DE3FF]/60 shadow-lg">
                    <span className="text-white text-3xl">{steps[2].icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-0">{steps[2].title}</h3>
                  <span className="text-sm text-[#895AF6] font-medium ml-4">{lang === 'ES' ? `Etapa 3` : `Step 3`}</span>
                </div>
                {/* Sin card de descripción */}
              </div>
              {/* Línea divisoria */}
              <div className="w-full h-px bg-gradient-to-r from-[#ffffff22] to-transparent mt-12 md:mt-16"></div>
            </div>
          )}
          {/* Card 4: icono, header y sin card de descripción */}
          {steps[3] && (
            <div key={3} className="relative group animate-fade-in">
              <div className="flex flex-col md:flex-row items-start gap-4 mb-1 w-full">
                <div className="flex flex-row items-center gap-4 flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#895AF6]/80 to-[#4DE3FF]/60 shadow-lg">
                    <span className="text-white text-3xl">{steps[3].icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-0">{steps[3].title}</h3>
                  <span className="text-sm text-[#895AF6] font-medium ml-4">{lang === 'ES' ? `Etapa 4` : `Step 4`}</span>
                </div>
                {/* Sin card de descripción */}
              </div>
              {/* Línea divisoria */}
              <div className="w-full h-px bg-gradient-to-r from-[#ffffff22] to-transparent mt-12 md:mt-16"></div>
            </div>
          )}
        </div>

        {/* Eliminar la grilla de features (diseño continuo, performance, SEO, etc.) al final de la sección */}
      </div>
    </section>
  );
};

export default WebDesignApproach;

