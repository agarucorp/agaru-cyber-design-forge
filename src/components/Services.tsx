
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";
import { Code, Palette, Target, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import FAQCard from './FAQCard'; // Added import for FAQCard
import { useState, useRef, useEffect } from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import calenacard from './assets/ProjectShowcase/calenacard.png';
import cardmaxtech from './assets/ProjectShowcase/cardmaxtech.png';

interface ServicesProps {
  lang: 'ES' | 'EN';
}

const Services = ({ lang }: ServicesProps) => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleFAQToggle = (index: number) => {
    const wasOpen = openFAQIndex === index;
    const newOpenIndex = wasOpen ? null : index;
    
    setOpenFAQIndex(newOpenIndex);
    
    // Si estamos en móvil y se está abriendo una card (no cerrando)
    if (isMobile && !wasOpen && newOpenIndex !== null) {
      // Usar setTimeout para asegurar que el DOM se actualice antes del scroll
      setTimeout(() => {
        const cardElement = cardRefs.current[newOpenIndex];
        if (cardElement) {
          const rect = cardElement.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const targetScrollTop = scrollTop + rect.top - 100; // 100px de offset desde arriba
          
          window.scrollTo({
            top: targetScrollTop,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  const services = [
    // Card 1: Web Apps
    {
      title: lang === 'ES' ? 'Aplicaciones Web' : 'Web Apps',
      description: lang === 'ES'
        ? 'Digitalizá tu operación con una Web App a medida.\nCreamos aplicaciones que te permiten automatizar tareas, centralizar datos y escalar tu negocio sin fricción.'
        : 'Digitize Your Operations with a Custom Web App\nWe build applications that allow you to automate tasks, centralize data, and scale your business seamlessly.',
      features: lang === 'ES'
        ? [
            'Usuarios y datos en orden',
            '- Registro y login con permisos según rol.',
            '- Gestión de bases de datos en tiempo real (clientes, turnos, pedidos).',
            '- Subida y acceso a archivos desde la misma web app.',
            'Operaciones automatizadas',
            '- Mensajes automáticos por WhatsApp (recordatorios, confirmaciones, respuestas).',
            '- Automatización de tareas como agendado, cobros y seguimiento.',
            '- Reglas de negocio personalizadas para cada flujo.',
            'Todo bajo control, en un solo lugar',
            '- Paneles simples para ver y gestionar tu operación en tiempo real.',
            '- Accesos diferenciados por perfil (ej. admin vs cliente).',
            '- Reportes claros y conexión con otras herramientas.',
            'Lanzamos rápido, con foco en que funcione desde el día uno y pueda crecer con vos.'
          ]
        : [
            'Digitize Your Operations with a Custom Web App',
            'We build applications that allow you to automate tasks, centralize data, and scale your business seamlessly.',
            '',
            '1. Organized Users and Data',
            '',
            'Role-based user registration and login.',
            'Real-time database management (clients, appointments, orders).',
            'Upload and access files directly within the web app.',
            '',
            '2. Automated Operations',
            '',
            'Automated WhatsApp messages (reminders, confirmations, replies).',
            'Task automation for scheduling, payments, and follow-ups.',
            'Custom business rules tailored for each workflow.',
            '',
            '3. Everything Under Control, in One Place',
            '',
            'Intuitive dashboards to view and manage your operations in real-time.',
            'Differentiated access by user profile (e.g., admin vs. client).',
            'Clear reports and integration with other tools.',
            '',
            'We launch fast, focusing on day-one functionality and the ability to grow with your business.'
          ]
    },
    // Card 2: Web Design & Development
    {
      title: lang === 'ES' ? 'Diseño Web' : 'Web Design',
      description: lang === 'ES'
        ? 'Desarrollamos soluciones web optimizadas para una presencia digital de alto rendimiento y una navegación intuitiva. Nos centramos en construir sitios web rápidos y seguros, diseñados para ofrecer una experiencia de usuario fluida y adaptable.'
        : 'We develop web solutions optimized for a high-performance digital presence and intuitive navigation. We focus on building fast and secure websites, designed to offer a fluid and adaptable user experience.',
      features: lang === 'ES'
        ? [
            'Utilizamos React y Next.js para construir sitios dinámicos, responsivos y de alto rendimiento.',
            'Implementamos en Vercel, lo que asegura un rendimiento global eficiente y una gestión de proyectos simplificada.',
            'Tu sitio se ajustará y funcionará correctamente en cualquier dispositivo, garantizando una experiencia consistente para todos los usuarios.'
          ]
        : [
            'We use React and Next.js to build dynamic, responsive, and highly performant sites.',
            'We deploy on Vercel, ensuring efficient global performance and simplified project management.',
            'Your site will adjust and function correctly on any device, guaranteeing a consistent experience for all users.'
          ]
    },
    // Card 3: UX/UI Design
    {
      title: lang === 'ES' ? 'Diseño UX/UI' : 'UX/UI Design',
      description: lang === 'ES'
        ? 'Desarrollamos interfaces que facilitan la interacción del usuario y cumplen con los objetivos del proyecto. Nuestro enfoque se centra en una visualización precisa y una navegación intuitiva, asegurando que cada componente sea útil y coherente.'
        : 'We develop interfaces that facilitate user interaction and meet project objectives. Our approach focuses on precise visualization and intuitive navigation, ensuring every component is useful and cohesive.',
      features: lang === 'ES'
        ? [
            'Creamos wireframes en Figma para previsualizar la estructura y el flujo, agilizando la revisión y aprobación antes del desarrollo.',
            'Ofrecemos servicios específicos de diseño de UI para landing pages, sitios web completos o wireframes detallados.',
            'La aplicación de metodologías de usabilidad (UX) es fundamental en cada diseño que creamos, optimizando la interacción del usuario.'
          ]
        : [
            'We create wireframes in Figma to preview structure and flow, streamlining review and approval before development.',
            'We offer specific UI design services for landing pages, complete websites, or detailed wireframes.',
            'The application of usability (UX) methodologies is fundamental to every design we create, optimizing user interaction.'
          ]
    },
    // Card 4: Brand Strategy & Identity
    {
      title: lang === 'ES' ? 'Estrategia de Marca' : 'Brand Strategy',
      description: lang === 'ES'
        ? 'Vamos más allá del diseño visual para forjar la base estratégica de tu marca. Trabajamos en la voz y la identidad que te diferenciarán, creando una conexión auténtica con tu audiencia y guiando tu crecimiento futuro.'
        : `We go beyond visual design to forge your brand's strategic foundation. We work on the voice and identity that will differentiate you, creating an authentic connection with your audience and guiding your future growth.`,
      features: lang === 'ES'
        ? [
            'Definimos la personalidad y el mensaje único de tu marca, asegurando una comunicación coherente y distintiva.',
            'Diseñamos logos que encapsulan la esencia de tu negocio, reflejando profesionalismo y reconocimiento.',
            'Te proporcionamos una guía estratégica para tus futuras acciones de marketing y posicionamiento, asegurando un camino claro para el desarrollo de tu marca.'
          ]
        : [
            `We define your brand's unique personality and message, ensuring coherent and distinctive communication.`,
            `We design logos that encapsulate your business's essence, reflecting professionalism and recognition.`,
            `We provide you with a strategic guide for your future marketing and positioning efforts, ensuring a clear path for your brand's development.`
          ]
    }
  ];

  // Inicializar el array de refs con la longitud correcta
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, services.length);
  }, [services.length]);

  // Utilidad para detectar desktop (igual que en Hero y Navbar)
  const isDesktop = () => typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches;

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
            {lang === 'ES'
              ? 'Nos especializamos en ayudar a pequeñas/medianas empresas, startups y profesionales ambiciosos a lanzar sus marcas online'
              : 'We specialize in helping small/medium businesses, startups, and ambitious professionals to launch and establish their brands online'}
          </p>
        </div>

        {/* Elimino el acordeón de servicios original */}
        {/* Cards de FAQ debajo de los servicios */}
        <div className="mt-12 space-y-6">
          {services.map((service, idx) => (
            <div 
              className="flex justify-center" 
              key={service.title}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
            >
              <div className="cyber-card rounded-xl overflow-hidden max-w-4xl w-full">
                <FAQCard
                  question={service.title}
                  answer={
                    lang === 'ES' && idx === 0 ? (
                      <div>
                        <p className="text-gray-400">Digitalizá tu operación con una Web App a medida.</p>
                        <p className="text-gray-400">Creamos aplicaciones que te permiten automatizar tareas, centralizar datos y escalar tu negocio sin fricción.</p>
                        <br />
                        <p className="text-white font-semibold">1. Usuarios y datos en orden</p>
                        <div className="mb-4 ml-6 space-y-2 pl-2">
                          <div className="flex items-start"><div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div><span className="text-gray-400">Registro y login con permisos según rol.</span></div>
                          <div className="flex items-start"><div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div><span className="text-gray-400">Gestión de bases de datos en tiempo real (clientes, turnos, pedidos).</span></div>
                          <div className="flex items-start"><div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div><span className="text-gray-400">Subida y acceso a archivos desde la misma web app.</span></div>
                        </div>
                        <p className="text-white font-semibold">2. Operaciones automatizadas</p>
                        <div className="mb-4 ml-6 space-y-2 pl-2">
                          <div className="flex items-start"><div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div><span className="text-gray-400">Mensajes automáticos por WhatsApp (recordatorios, confirmaciones, respuestas).</span></div>
                          <div className="flex items-start"><div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div><span className="text-gray-400">Automatización de tareas como agendado, cobros y seguimiento.</span></div>
                          <div className="flex items-start"><div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div><span className="text-gray-400">Reglas de negocio personalizadas para cada flujo.</span></div>
                        </div>
                        <p className="text-white font-semibold">3. Todo bajo control, en un solo lugar</p>
                        <div className="mb-4 ml-6 space-y-2 pl-2">
                          <div className="flex items-start"><div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div><span className="text-gray-400">Paneles simples para ver y gestionar tu operación en tiempo real.</span></div>
                          <div className="flex items-start"><div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div><span className="text-gray-400">Accesos diferenciados por perfil (ej. admin vs cliente).</span></div>
                          <div className="flex items-start"><div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div><span className="text-gray-400">Reportes claros y conexión con otras herramientas.</span></div>
                        </div>
                        <p className="text-gray-400">Lanzamos rápido, con foco en que funcione desde el día uno y pueda crecer con vos.</p>
                      </div>
                    ) : (
                      lang === 'EN' && idx === 0 ? (
                        <div>
                          <p className="text-gray-400">Digitize Your Operations with a Custom Web App</p>
                          <p className="text-gray-400">We build applications that allow you to automate tasks, centralize data, and scale your business seamlessly.</p>
                          <br />
                          <p className="text-white font-semibold">1. Organized Users and Data</p>
                          <div className="mb-4 ml-6 space-y-2 pl-2">
                            <div className="flex items-start"><div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div><span className="text-gray-400">Role-based user registration and login.</span></div>
                            <div className="flex items-start"><div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div><span className="text-gray-400">Real-time database management (clients, appointments, orders).</span></div>
                            <div className="flex items-start"><div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div><span className="text-gray-400">Upload and access files directly within the web app.</span></div>
                          </div>
                          <p className="text-white font-semibold">2. Automated Operations</p>
                          <div className="mb-4 ml-6 space-y-2 pl-2">
                            <div className="flex items-start"><div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div><span className="text-gray-400">Automated WhatsApp messages (reminders, confirmations, replies).</span></div>
                            <div className="flex items-start"><div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div><span className="text-gray-400">Task automation for scheduling, payments, and follow-ups.</span></div>
                            <div className="flex items-start"><div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div><span className="text-gray-400">Custom business rules tailored for each workflow.</span></div>
                          </div>
                          <p className="text-white font-semibold">3. Everything Under Control, in One Place</p>
                          <div className="mb-4 ml-6 space-y-2 pl-2">
                            <div className="flex items-start"><div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div><span className="text-gray-400">Intuitive dashboards to view and manage your operations in real-time.</span></div>
                            <div className="flex items-start"><div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div><span className="text-gray-400">Differentiated access by user profile (e.g., admin vs. client).</span></div>
                            <div className="flex items-start"><div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div><span className="text-gray-400">Clear reports and integration with other tools.</span></div>
                          </div>
                          <p className="text-gray-400">We launch fast, focusing on day-one functionality and the ability to grow with your business.</p>
                        </div>
                      ) : (
                        <>
                          <p>{service.description.split('\n').map((str, i) => <span key={i}>{str}<br /></span>)}</p>
                          <br />
                          <ul className="space-y-4 pl-2">
                            {service.features.map((feature, i) => (
                              <li className="text-gray-400 flex items-start" key={i}>
                                <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </>
                      )
                    )
                  }
                  isOpen={openFAQIndex === idx}
                  onToggle={() => handleFAQToggle(idx)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="border border-[#895AF6] bg-transparent text-[#895AF6] px-6 py-2 rounded-md font-medium text-lg transition-all duration-300 shadow-[0_0_20px_0_#895AF6] hover:shadow-[0_0_30px_0_#895AF6] inline-flex items-center gap-2"
            onClick={e => {
              if (isDesktop()) {
                e.preventDefault();
                window.location.hash = 'contact';
              }
            }}
            onAuxClick={e => { if (isDesktop()) e.preventDefault(); }}
            onContextMenu={e => { if (isDesktop()) e.preventDefault(); }}
          >
            {lang === 'ES' ? 'Comenzá tu Proyecto' : 'Start Your Project'}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
