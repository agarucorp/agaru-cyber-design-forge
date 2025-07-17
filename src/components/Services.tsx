
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";
import { Code, Palette, Target, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import FAQCard from './FAQCard'; // Added import for FAQCard
import { useState } from 'react';

interface ServicesProps {
  lang: 'ES' | 'EN';
}

const Services = ({ lang }: ServicesProps) => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const handleFAQToggle = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

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

        {/* Elimino el acordeón de servicios original */}
        {/* Cards de FAQ debajo de los servicios */}
        <div className="mt-12 space-y-6">
          <div className="flex justify-center">
            <div className="cyber-card rounded-xl overflow-hidden max-w-4xl w-full">
              <FAQCard
                question="Aplicaciones Web"
                answer={
                  <>
                    <p>Digitalizá tu operación con una web app hecha a medida</p>
                    <br />
                    <p>Creamos aplicaciones que te permiten automatizar tareas, centralizar datos y escalar tu negocio sin fricción.</p>
                    <br />
                    <div>
                      <strong>1. Usuarios y datos en orden</strong>
                      <ul className="space-y-2">
                        <li className="text-gray-400 flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full mr-3" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                          Registro y login con permisos según rol
                        </li>
                        <li className="text-gray-400 flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full mr-3" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                          Gestión de bases de datos en tiempo real (clientes, turnos, pedidos)
                        </li>
                        <li className="text-gray-400 flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full mr-3" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                          Subida y acceso a archivos desde la misma web app
                        </li>
                      </ul>
                    </div>
                    <br />
                    <div>
                      <strong>2Operaciones que se mueven solas</strong>
                      <ul className="space-y-2">
                        <li className="text-gray-400 flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full mr-3" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                          Mensajes automáticos por WhatsApp (recordatorios, confirmaciones, respuestas)
                        </li>
                        <li className="text-gray-400 flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full mr-3" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                          Automatización de tareas como agendado, cobros y seguimiento
                        </li>
                        <li className="text-gray-400 flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full mr-3" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                          Reglas de negocio personalizadas para cada flujo
                        </li>
                      </ul>
                    </div>
                    <br />
                    <div>
                      <strong>3. Todo bajo control, en un solo lugar</strong>
                      <ul className="space-y-2">
                        <li className="text-gray-400 flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full mr-3" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                          Paneles simples para ver y gestionar tu operación en tiempo real
                        </li>
                        <li className="text-gray-400 flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full mr-3" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                          Accesos diferenciados por perfil (ej. admin vs cliente)
                        </li>
                        <li className="text-gray-400 flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full mr-3" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                          Reportes claros y conexión con otras herramientas
                        </li>
                      </ul>
                    </div>
                    <br />
                    <p>Lanzamos rápido, con foco en que funcione desde el día uno y pueda crecer con vos.</p>
                  </>
                }
                isOpen={openFAQIndex === 0}
                onToggle={() => handleFAQToggle(0)}
              />
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="cyber-card rounded-xl overflow-hidden max-w-4xl w-full">
              <FAQCard
                question="Desarrollo y Diseño Web"
                answer={
                  <>
                    <p>Desarrollamos soluciones web optimizadas para una presencia digital de alto rendimiento y navegación intuitiva. Nos enfocamos en construir sitios rápidos y seguros, diseñados para ofrecer una experiencia de usuario fluida y adaptable.</p>
                    <br />
                    <ul className="space-y-4">
                      <li className="text-gray-400 flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                        Utilizamos React y Next.js para construir sitios dinámicos, responsivos y con alta capacidad de respuesta.
                      </li>
                      <li className="text-gray-400 flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                        Realizamos el despliegue en Vercel, asegurando un rendimiento global eficiente y una gestión simplificada del proyecto.
                      </li>
                      <li className="text-gray-400 flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                        Su sitio se ajustará y funcionará correctamente en cualquier dispositivo, garantizando una experiencia consistente para todos los usuarios.
                      </li>
                    </ul>
                  </>
                }
                isOpen={openFAQIndex === 1}
                onToggle={() => handleFAQToggle(1)}
              />
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="cyber-card rounded-xl overflow-hidden max-w-4xl w-full">
              <FAQCard
                question="Diseño UX/UI"
                answer={
                  <>
                    <p>Desarrollamos interfaces que facilitan la interacción del usuario y cumplen los objetivos del proyecto. Nuestro enfoque se centra en la visualización precisa y la navegación intuitiva, asegurando que cada componente sea útil y coherente.</p>
                    <br />
                    <ul className="space-y-4">
                      <li className="text-gray-400 flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                        Creamos wireframes en Figma para previsualizar la estructura y el flujo, facilitando la revisión y aprobación antes del desarrollo.
                      </li>
                      <li className="text-gray-400 flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                        Ofrecemos servicios de diseño UI específicos para landing pages, sitios web completos o wireframes detallados.
                      </li>
                      <li className="text-gray-400 flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                        La aplicación de metodologías de usabilidad (UX) es fundamental en cada diseño que realizamos, optimizando la interacción del usuario.
                      </li>
                    </ul>
                  </>
                }
                isOpen={openFAQIndex === 2}
                onToggle={() => handleFAQToggle(2)}
              />
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="cyber-card rounded-xl overflow-hidden max-w-4xl w-full">
              <FAQCard
                question="Estrategia e Identidad de Marca"
                answer={
                  <>
                    <p>Vamos más allá del diseño visual para forjar la base estratégica de tu marca. Trabajamos en la voz y la identidad que te diferenciarán, creando una conexión auténtica con tu audiencia y guiando tu crecimiento futuro.</p>
                    <br />
                    <ul className="space-y-4">
                      <li className="text-gray-400 flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                        Definimos la personalidad y el mensaje único de tu marca, asegurando una comunicación coherente y distintiva.
                      </li>
                      <li className="text-gray-400 flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                        Diseñamos logos que encapsulan la esencia de tu negocio, reflejando profesionalismo y reconocimiento.
                      </li>
                      <li className="text-gray-400 flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                        Te proporcionamos una guía estratégica para tus futuras acciones de marketing y posicionamiento, asegurando un camino claro para el desarrollo de tu marca.
                      </li>
                    </ul>
                  </>
                }
                isOpen={openFAQIndex === 3}
                onToggle={() => handleFAQToggle(3)}
              />
            </div>
          </div>
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
