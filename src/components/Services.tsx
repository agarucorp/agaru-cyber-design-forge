
import { Code, Palette, Target, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

interface ServicesProps {
  lang: 'ES' | 'EN';
}

const Services = ({ lang }: ServicesProps) => {
  const services = lang === 'ES'
    ? [
        {
          icon: <Code className="w-8 h-8" />,
          title: 'Diseño UX/UI',
          description: 'Creamos experiencias intuitivas y visualmente impactantes que convierten visitantes en clientes.',
          features: ['Investigación de Usuarios', 'Wireframing', 'Prototipado', 'Diseño Visual']
        },
        {
          icon: <Palette className="w-8 h-8" />,
          title: 'Desarrollo Web',
          description: 'Construimos sitios web rápidos, responsivos y escalables usando tecnologías modernas y buenas prácticas.',
          features: ['React/Next.js', 'Responsive Mobile', 'SEO Optimizado', 'Enfoque en Performance']
        },
        {
          icon: <TrendingUp className="w-8 h-8" />,
          title: 'Aplicaciones Web',
          description: 'Desarrollamos aplicaciones web robustas y escalables adaptadas a las necesidades de tu negocio.',
          features: ['Sistemas a Medida', 'Integraciones API', 'Paneles de Control', 'Automatización']
        },
        {
          icon: <Target className="w-8 h-8" />,
          title: 'Branding',
          description: 'Creamos identidades de marca coherentes que conectan con tu audiencia y destacan en el mercado.',
          features: ['Diseño de Logo', 'Guía de Marca', 'Identidad Visual', 'Estrategia de Marca']
        }
      ]
    : [
        {
          icon: <Code className="w-8 h-8" />,
          title: 'UX/UI Design',
          description: 'Crafting intuitive and visually stunning user experiences that convert visitors into customers.',
          features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
        },
        {
          icon: <Palette className="w-8 h-8" />,
          title: 'Web Development',
          description: 'Building fast, responsive, and scalable websites using modern technologies and best practices.',
          features: ['React/Next.js', 'Mobile Responsive', 'SEO Optimized', 'Performance Focused']
        },
        {
          icon: <TrendingUp className="w-8 h-8" />,
          title: 'Web Applications',
          description: 'We develop robust and scalable web applications tailored to your business needs.',
          features: ['Custom Systems', 'API Integrations', 'Admin Panels', 'Automation']
        },
        {
          icon: <Target className="w-8 h-8" />,
          title: 'Branding',
          description: 'Creating cohesive brand identities that resonate with your target audience and stand out.',
          features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy']
        }
      ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {lang === 'ES' ? 'Nuestros ' : 'Our '}
            <span className="cyber-text-gradient">{lang === 'ES' ? 'Servicios' : 'Services'}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {lang === 'ES'
              ? 'Ayudamos a startups y pequeñas empresas a establecer su presencia digital con diseño de vanguardia y soluciones estratégicas.'
              : 'We specialize in helping startups and small businesses establish their digital presence with cutting-edge design and strategic solutions.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="cyber-card p-8 rounded-xl group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-[#895AF6] mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-400 flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="border border-[#895AF6] bg-transparent text-[#895AF6] px-6 py-2 rounded-md font-medium text-lg transition-all duration-300 shadow-[0_0_20px_0_#895AF6] hover:shadow-[0_0_30px_0_#895AF6] inline-flex items-center gap-2"
          >
            {lang === 'ES' ? 'Comenzá tu proyecto' : 'Start Your Project'}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
