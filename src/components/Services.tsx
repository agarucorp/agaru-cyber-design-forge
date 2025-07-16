
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";
import { Code, Palette, Target, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

interface ServicesProps {
  lang: 'ES' | 'EN';
}

const Services = ({ lang }: ServicesProps) => {
  const services = [
    {
      title: 'Diseño UX/UI',
      description: 'Creamos prototipos interactivos y centrados en el usuario en Figma, diseñados para evolucionar con tu proyecto. Nuestro proceso asegura una iteración rápida, retroalimentación fluida y experiencias intuitivas alineadas con tus objetivos.',
      features: ['Investigación de Usuarios', 'Wireframing', 'Prototipado', 'Diseño Visual']
    },
    {
      title: 'Desarrollo Web',
      description: 'Diseñamos sitios web funcionales y visualmente atractivos que garantizan una navegación fluida y una experiencia de usuario cautivadora, adaptándose completamente a las últimas tendencias y tecnologías del mercado.',
      features: ['React/Next.js', 'Responsive Mobile', 'SEO Optimizado', 'Enfoque en Performance']
    },
    {
      title: 'Aplicaciones Web',
      description: 'Creamos aplicaciones que te permiten automatizar tareas, centralizar datos y escalar tu negocio sin fricción.',
      features: ['Sistemas a Medida', 'Integraciones API', 'Paneles de Control', 'Automatización']
    },
    {
      title: 'Identidad de Marca',
      description: 'Moldeamos la base estratégica de tu marca, clarificando tu propósito, voz y posición en el mercado. A través de la investigación y la colaboración, desarrollamos una identidad única que se alinea con tus valores y conecta con tu audiencia.',
      features: ['Diseño de Logo', 'Guía de Marca', 'Identidad Visual', 'Estrategia de Marca']
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {lang === 'ES' ? 'Nuestros ' : 'Our '}
            <span className="bg-gradient-to-r from-[#895AF6] to-[#4DE3FF] bg-clip-text text-transparent">
              {lang === 'ES' ? 'Servicios' : 'Services'}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nos especializamos en ayudar a pequeñas/medianas empresas, startups y profesionales ambiciosos a lanzar sus marcas online
          </p>
        </div>

        <Accordion type="multiple" className="space-y-6 mt-8">
          {services.map((service, idx) => (
            <AccordionItem key={service.title} value={service.title}>
              <div className="max-w-2xl mx-auto">
                <AccordionTrigger className="text-2xl font-bold text-white mb-0 px-6 py-4 rounded-2xl border border-[#895AF6]/30 bg-gradient-to-br from-[#181A20]/80 to-[#23243a]/80 backdrop-blur-md shadow-lg transition-all duration-300 group hover:shadow-2xl hover:scale-[1.025] hover:bg-[#23243a]/90 hover:text-[#895AF6] hover:no-underline focus:outline-none">
                  <span className="transition-all duration-300 group-hover:text-[#895AF6] group-hover:drop-shadow-[0_0_6px_#895AF6]">{service.title}</span>
                </AccordionTrigger>
                <AccordionContent className="bg-[#181A20]/80 px-6 pb-6 rounded-b-2xl border-t-0 border border-[#895AF6]/10">
                  {service.title === 'Aplicaciones Web' ? (
                    <div className="text-gray-300 mb-6 leading-relaxed text-base space-y-4">
                      <p>Digitalizá tu operación con una web app hecha a medida</p>
                      <p>Creamos aplicaciones que te permiten automatizar tareas, centralizar datos y escalar tu negocio sin fricción.</p>
                      <div>
                        <strong>1. Usuarios y datos en orden</strong>
                        <ul className="list-disc pl-6">
                          <li>Registro y login con permisos según rol</li>
                          <li>Gestión de bases de datos en tiempo real (clientes, turnos, pedidos)</li>
                          <li>Subida y acceso a archivos desde la misma web app</li>
                        </ul>
                      </div>
                      <div>
                        <strong>2. Operaciones que se mueven solas</strong>
                        <ul className="list-disc pl-6">
                          <li>Mensajes automáticos por WhatsApp (recordatorios, confirmaciones, respuestas)</li>
                          <li>Automatización de tareas como agendado, cobros y seguimiento</li>
                          <li>Reglas de negocio personalizadas para cada flujo</li>
                        </ul>
                      </div>
                      <div>
                        <strong>3. Todo bajo control, en un solo lugar</strong>
                        <ul className="list-disc pl-6">
                          <li>Paneles simples para ver y gestionar tu operación en tiempo real</li>
                          <li>Accesos diferenciados por perfil (ej. admin vs cliente)</li>
                          <li>Reportes claros y conexión con otras herramientas</li>
                        </ul>
                      </div>
                      <p>Lanzamos rápido, con foco en que funcione desde el día uno y pueda crecer con vos.</p>
                    </div>
                  ) : (
                    <>
                      <p className="text-gray-300 mb-6 leading-relaxed text-base">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="text-gray-400 flex items-center">
                            <div className="w-2 h-2 rounded-full mr-3" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>

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
