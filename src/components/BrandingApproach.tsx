
import { Building, TrendingUp, Palette, Calendar, FileText } from 'lucide-react';

interface BrandingApproachProps {
  lang: 'ES' | 'EN';
}

const BrandingApproach = ({ lang }: BrandingApproachProps) => {
  const steps = lang === 'ES'
    ? [
        {
          icon: <Building className="w-8 h-8" />,
          title: 'Fundamentos de Marca',
          description: 'Comenzamos entendiendo profundamente los valores, misión, oferta, audiencia y objetivos de tu negocio. Esta base guía todo el proceso y asegura que cada acción esté alineada a tus necesidades.',
        },
        {
          icon: <TrendingUp className="w-8 h-8" />,
          title: 'Estrategia de Marketing',
          description: 'Nuestros estrategas digitales investigan tendencias, comportamientos y competencia para identificar las mejores oportunidades de crecimiento.',
        },
        {
          icon: <Palette className="w-8 h-8" />,
          title: 'Identidad de Marca',
          description: 'En colaboración contigo, creamos contenido y diseño que reflejan tu identidad única: desde el logo hasta la misión y los textos web.',
        },
        {
          icon: <Calendar className="w-8 h-8" />,
          title: 'Planificación de Campañas',
          description: 'Desarrollamos una estrategia de marketing personalizada, definiendo propuesta de valor, canales y mensajes clave para tus campañas.',
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: 'Hoja de Ruta',
          description: 'Compilamos todo en un Marketing Brief claro y accionable para que tu equipo o partners puedan lanzar y gestionar campañas efectivas.',
        },
      ]
    : [
        {
          icon: <Building className="w-8 h-8" />,
          title: 'Brand Foundation',
          description: 'We begin by deeply understanding your business values, core mission, key offerings, target audience, and primary objectives. This foundational insight then serves as our guiding principle, ensuring everything we do is precisely tailored to your specific needs.',
        },
        {
          icon: <TrendingUp className="w-8 h-8" />,
          title: 'Marketing Strategy',
          description: 'Our digital strategists execute comprehensive research across market trends, consumer behaviors, and competitor landscapes. This meticulous process yields actionable insights, helping us identify and target the most promising areas for your growth.',
        },
        {
          icon: <Palette className="w-8 h-8" />,
          title: 'Brand Identity Design',
          description: 'Through continuous collaboration with your key stakeholders, we meticulously craft content that truly embodies your unique identity. We cover every detail, from designing your logo to developing your mission statements and all web content.',
        },
        {
          icon: <Calendar className="w-8 h-8" />,
          title: 'Campaign Planning',
          description: 'Building on our insights, we develop a tailored marketing strategy. This involves defining your unique value proposition, identifying optimal channels, and outlining key messages that will resonate with your audience, forming the backbone for future campaigns.',
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: 'Marketing Roadmap',
          description: 'We compile all gathered insights, strategies, and identity guidelines into a clear, actionable Marketing Brief. This document empowers your team or partners to effectively launch and manage future campaigns, ensuring consistency and impact.',
        },
      ];

  return (
    <section className="py-20 bg-gradient-to-b from-cyber-grey to-cyber-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {lang === 'ES' ? 'Enfoque de ' : 'Branding '}
            <span className="cyber-text-gradient">{lang === 'ES' ? 'Branding' : 'Approach'}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {lang === 'ES'
              ? 'Nuestro proceso integral transforma tu visión en una identidad de marca coherente y poderosa que conecta con tu audiencia ideal.'
              : 'Our comprehensive branding process transforms your vision into a cohesive, powerful brand identity that resonates with your target audience.'}
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 animate-fade-in ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step Number and Icon */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-32 h-32 cyber-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-agaru-purple-dark rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 cyber-card p-8 rounded-xl">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandingApproach;
