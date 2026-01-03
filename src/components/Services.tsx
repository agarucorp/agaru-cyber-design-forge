import FAQCard from './FAQCard';
import { useState, useRef, useEffect } from 'react';
import { useIsMobile } from '../hooks/use-mobile';

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
      title: lang === 'ES' ? 'Desarrollo Web' : 'Web Development',
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
        ? 'Comenzamos cada proyecto con una investigación UX (experiencia de usuario) profunda. Este proceso no es opcional: es la base estratégica para entender el comportamiento y las necesidades de tu audiencia, permitiéndonos optimizar la arquitectura de la información y la navegación del sitio.\n\nUna vez analizados los datos, pasamos al Diseño UI (Interfaz de Usuario). Utilizamos Figma para construir prototipos que son visualmente atractivos, intuitivos y totalmente funcionales. Cada diseño que entregamos incluye de forma integral: un UX Writing optimizado, una colorimetría estratégica, tipografía seleccionada bajo criterios de legibilidad y la aplicación de guidelines de diseño universal.'
        : 'We start each project with deep UX (user experience) research. This process is not optional: it is the strategic foundation to understand your audience\'s behavior and needs, allowing us to optimize information architecture and site navigation.\n\nOnce data is analyzed, we move to UI (User Interface) Design. We use Figma to build prototypes that are visually appealing, intuitive and fully functional. Every design we deliver includes integrally: optimized UX Writing, strategic colorimetry, typography selected under readability criteria and the application of universal design guidelines.',
      features: lang === 'ES'
        ? [
            'Nuestra Oferta de Servicios de Diseño UI',
            '',
            'Dentro de nuestra especialización en diseño de interfaces, ofrecemos los siguientes servicios, disponibles de forma conjunta o por separado:',
            '',
            '• Wireframes: diseño de bocetos de alta fidelidad en Figma para landing pages o sitios completos.',
            '• Mockups: visualización de los elementos de diseño representados en dispositivos, soportes digitales o material impreso para una demostración realista del producto final.',
            '• Material Gráfico: diseño de flyers o posters (listos para redes sociales o impresión) que complementan tu estrategia de marketing digital.'
          ]
        : [
            'Our UI Design Services Offer',
            '',
            'Within our interface design specialization, we offer the following services, available together or separately:',
            '',
            '• Wireframes: high-fidelity sketch design in Figma for landing pages or complete sites.',
            '• Mockups: visualization of design elements represented on devices, digital media or printed material for a realistic demonstration of the final product.',
            '• Graphic Material: flyer or poster design (ready for social media or printing) that complements your digital marketing strategy.'
          ]
    },
    // Card 4: Brand Strategy & Identity
    {
      title: lang === 'ES' ? 'Branding' : 'Branding',
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

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, services.length);
  }, [services.length]);

  const getAnswerContent = (idx: number) => {
    if (lang === 'ES' && idx === 0) {
      return (
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
      );
    }
    if (lang === 'EN' && idx === 0) {
      return (
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
      );
    }
    if (lang === 'ES' && idx === 1) {
      return (
        <div>
          <div>
            <p className="text-white font-semibold mb-4">Nuestro paquete integral de diseño y despliegue web</p>
            <p className="text-gray-400 mb-4">Ofrecemos un servicio completo que va desde la conceptualización hasta la puesta en línea y el soporte continuo:</p>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                <div>
                  <span className="text-white font-medium">Dominio:</span>
                  <span className="text-gray-400"> gestión de su dominio de preferencia a través de Hostinger, asegurando la máxima fiabilidad. Incluye la configuración de una casilla de correo profesional personalizada (ejemplo@tunegocio.com)</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                <div>
                  <span className="text-white font-medium">Seguridad:</span>
                  <span className="text-gray-400"> despliegue de un sitio HTTPS completamente seguro mediante certificados SSL/TLS, garantizando la encriptación de datos.</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                <div>
                  <span className="text-white font-medium">Contacto:</span>
                  <span className="text-gray-400"> Formulario de contacto, botones de WhatsApp y redes sociales.</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                <div>
                  <span className="text-white font-medium">Hosting:</span>
                  <span className="text-gray-400"> utilizamos la plataforma Vercel para el alojamiento de tu página, asegurando un rendimiento óptimo 24/7, escalabilidad y tiempos de carga rápidos.</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                <div>
                  <span className="text-white font-medium">Mantenimiento:</span>
                  <span className="text-gray-400"> garantizamos la operatividad continua del sitio. Incluimos gestión de dominio y hosting, soporte técnico ante fallas y hasta 1 hora semanal de desarrollo para ajustes y cambios adicionales.</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                <div>
                  <span className="text-white font-medium">Tipos de proyecto:</span>
                  <span className="text-gray-400"> landing pages, portfolios personales, sitios web corporativos y catálogos online (consultar por e-commerce).</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (lang === 'ES' && idx === 2) {
      return (
        <div>
          <p className="text-gray-400 mb-4">Comenzamos cada proyecto con una investigación UX (experiencia de usuario) profunda. Este proceso no es opcional: es la base estratégica para entender el comportamiento y las necesidades de tu audiencia, permitiéndonos optimizar la arquitectura de la información y la navegación del sitio.</p>
          <p className="text-gray-400 mb-6">Una vez analizados los datos, pasamos al Diseño UI (Interfaz de Usuario). Utilizamos Figma para construir prototipos que son visualmente atractivos, intuitivos y totalmente funcionales. Cada diseño que entregamos incluye de forma integral: un UX Writing optimizado, una colorimetría estratégica, tipografía seleccionada bajo criterios de legibilidad y la aplicación de guidelines de diseño universal.</p>
          <div className="border-t border-gray-600 pt-4">
            <p className="text-white font-semibold mb-4">Nuestra Oferta de Servicios de Diseño UI</p>
            <p className="text-gray-400 mb-4">Dentro de nuestra especialización en diseño de interfaces, ofrecemos los siguientes servicios, disponibles de forma conjunta o por separado:</p>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                <div>
                  <span className="text-white font-medium">Wireframes:</span>
                  <span className="text-gray-400"> diseño de bocetos de alta fidelidad en Figma para landing pages o sitios completos.</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                <div>
                  <span className="text-white font-medium">Mockups:</span>
                  <span className="text-gray-400"> visualización de los elementos de diseño representados en dispositivos, soportes digitales o material impreso para una demostración realista del producto final.</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                <div>
                  <span className="text-white font-medium">Material Gráfico:</span>
                  <span className="text-gray-400"> diseño de flyers o posters (listos para redes sociales o impresión) que complementan tu estrategia de marketing digital.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (lang === 'EN' && idx === 1) {
      return (
        <div>
          <p className="text-gray-400 mb-6">We develop customized websites that combine high performance with a smooth user experience (UX). We specialize in building fast, secure sites with intuitive navigation, ensuring total adaptability (responsive design) to any device. Our goal is to deploy an optimized platform that drives conversion and brand reliability.</p>
          <div className="border-t border-gray-600 pt-4">
            <p className="text-white font-semibold mb-4">Our Comprehensive Web Design and Deployment Package</p>
            <p className="text-gray-400 mb-4">We offer an end-to-end service, from conceptualization through to launch and ongoing support:</p>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                <div>
                  <span className="text-white font-medium">Domain:</span>
                  <span className="text-gray-400"> management of your preferred domain through Hostinger, ensuring maximum reliability. Includes the setup of a personalized professional email account (e.g., example@yourbusiness.com).</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                <div>
                  <span className="text-white font-medium">Security:</span>
                  <span className="text-gray-400"> deployment of a completely secure HTTPS website using SSL/TLS certificates, guaranteeing data encryption.</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                <div>
                  <span className="text-white font-medium">Communication:</span>
                  <span className="text-gray-400"> Inclusion of a contact form (if required) and direct buttons to WhatsApp and social media platforms.</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                <div>
                  <span className="text-white font-medium">Hosting:</span>
                  <span className="text-gray-400"> we use Vercel software for your site's hosting, ensuring optimal 24/7 performance, scalability, and fast loading times.</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                <div>
                  <span className="text-white font-medium">Maintenance:</span>
                  <span className="text-gray-400"> we guarantee the site's continuous operation. This includes domain and hosting management, technical support for failures, and up to 1 hour of weekly development for additional adjustments and changes.</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                <div>
                  <span className="text-white font-medium">Project types:</span>
                  <span className="text-gray-400"> we develop landing pages, personal portfolios, corporate websites, and online catalogs (inquire about e-commerce).</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (lang === 'EN' && idx === 2) {
      return (
        <div>
          <p className="text-gray-400 mb-4">We initiate every project with in-depth UX research (user experience). This process is non-negotiable: it serves as the strategic foundation for understanding your audience's behavior and needs, enabling us to optimize the site's information architecture and navigation.</p>
          <p className="text-gray-400 mb-6">Once the data is analyzed, we transition to UI Design (user interface). We use Figma to build prototypes that are visually attractive, intuitive, and fully functional. Every design we deliver comprehensively includes: optimized UX writing, strategic colorimetry, selected typography based on legibility criteria, and the application of universal design guidelines.</p>
          <div className="border-t border-gray-600 pt-4">
            <p className="text-white font-semibold mb-4">Our UI Design Service Offering</p>
            <p className="text-gray-400 mb-4">Within our specialization in interface design, we offer the following services, available as comprehensive packages or modular deliverables:</p>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                <div>
                  <span className="text-white font-medium">Wireframes:</span>
                  <span className="text-gray-400"> High-fidelity sketch design in Figma for landing pages or complete websites.</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                <div>
                  <span className="text-white font-medium">Mockups:</span>
                  <span className="text-gray-400"> Visualization of design elements represented on devices, digital supports, or print material for a realistic demonstration of the final product.</span>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
                <div>
                  <span className="text-white font-medium">Graphic Material:</span>
                  <span className="text-gray-400"> Designing flyers or posters (ready for social media or print) that complement your digital marketing strategy.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    // Default case
    return (
      <>
        <p>{services[idx].description.split('\n').map((str, i) => <span key={i}>{str}<br /></span>)}</p>
        <br />
        <ul className="space-y-4 pl-2">
          {services[idx].features.map((feature, i) => (
            <li className="text-gray-400 flex items-start" key={i}>
              <div className="w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0" style={{ background: 'linear-gradient(135deg, #895AF6 0%, #4DE3FF 100%)' }}></div>
              {feature}
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden w-full" style={{ backgroundColor: '#171619' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[24px] md:text-5xl font-onest font-bold text-white mb-6">
            {lang === 'ES' ? (
              <>
                <span className="sr-only">AgaruCorp - </span>Nuestros <span className="text-[#895AF6]">servicios</span>
              </>
            ) : (
              <>
                <span className="sr-only">AgaruCorp - </span>Our <span className="text-[#895AF6]">Services</span>
              </>
            )}
          </h2>
          <p className="text-[16px] md:text-xl text-gray-300 max-w-3xl mx-auto font-manrope font-light">
            {lang === 'ES'
              ? 'Nos especializamos en ayudar a PyMEs, startups y profesionales a lanzar sus marcas online'
              : 'We specialize in helping SMEs, startups, and ambitious professionals to launch and establish their brands online'}
          </p>
        </div>

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
                  answer={getAnswerContent(idx)}
                  isOpen={openFAQIndex === idx}
                  onToggle={() => handleFAQToggle(idx)}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
