import { ScrollAnimate } from './ScrollAnimate';

interface ServicesProps {
  lang: 'ES' | 'EN';
}

const Services = ({ lang }: ServicesProps) => {


  const services = [
    {
      title: 'Landing pages',
      boldText: lang === 'ES' 
        ? 'Páginas web diseñadas para la conversión directa.'
        : 'Landing pages designed for direct conversion.',
      restText: lang === 'ES'
        ? ' Páginas claras y estructuradas que guían al usuario hacia una única acción, ideales para productos, servicios y portfolios.'
        : ' Clear, structured pages that guide users toward a single action, ideal for products, services, and portfolios.',
      align: 'left'
    },
    {
      title: lang === 'ES' ? 'Sitios web' : 'Websites',
      boldText: lang === 'ES'
        ? 'Sitios web completos diseñados para gestionar información estructurada.'
        : 'Full-scale websites designed to manage structured information.',
      restText: lang === 'ES'
        ? ' Plataformas completas con navegación multinivel para organizar grandes volúmenes de contenido, incluyendo contenido institucional, catálogos de productos y entornos de e-learning.'
        : ' Complete platforms with multi-level navigation to organize large volumes of content, including institutional content, product catalogs, and e-learning environments.',
      align: 'right'
    },
    {
      title: lang === 'ES' ? 'Aplicaciones web' : 'Web apps',
      boldText: lang === 'ES'
        ? 'Aplicaciones web personalizadas diseñadas para cubrir necesidades empresariales complejas.'
        : 'Custom web applications designed to handle complex business needs.',
      restText: lang === 'ES'
        ? ' Soluciones que van más allá de un sitio web estándar, incluyendo autenticación de usuarios, sistemas basados en bases de datos, paneles de administración y herramientas de automatización. Esto abarca sistemas de autogestión de turnos, herramientas internas, chatbots personalizados para web y WhatsApp, y consultoría para planificación o validación.'
        : ' Solutions that go beyond standard websites, including user authentication, database-driven systems, admin dashboards, and automation tools. This covers self-service booking, internal management systems, custom chatbots for web and WhatsApp, and consulting for planning or validation.',
      align: 'left'
    },
    {
      title: lang === 'ES' ? 'Diseño gráfico' : 'Graphic design',
      boldText: lang === 'ES'
        ? 'Recursos de diseño gráfico para una comunicación de marca coherente.'
        : 'Graphic design assets for consistent brand communication.',
      restText: lang === 'ES'
        ? ' Materiales visuales para distintos canales, incluyendo contenido para redes sociales, piezas publicitarias, gráficos vectoriales y retoque fotográfico, creados para acompañar plataformas digitales existentes.'
        : ' Visual materials for use across different channels, including social media content, advertising pieces, vector graphics, and photo manipulation, created to support existing digital platforms.',
      align: 'right',
      titleColor: '#5A7AF6'
    },
    {
      title: 'Branding',
      boldText: lang === 'ES'
        ? 'Branding enfocado en construir una identidad clara y coherente.'
        : 'Branding focused on building a clear and consistent identity.',
      restText: lang === 'ES'
        ? ' Definición de bases estratégicas y visuales, incluyendo diseño de logotipo, personalidad, tono de voz y guías visuales para garantizar una comunicación consistente en todos los canales.'
        : ' Definition of strategic and visual foundations, including logo design, personality, tone of voice, and visual guidelines to ensure consistent communication across channels.',
      align: 'left',
      titleColor: '#B75AF6'
    }
  ];

  return (
    <section id="services" className="pt-20 pb-20 xl:pt-12 2xl:pt-16 relative overflow-hidden w-full" style={{ backgroundColor: '#000000' }}>
      <div className="mx-auto relative xl:z-10" style={{ width: 'calc(100% - 1rem)', maxWidth: '1000px', zIndex: 10 }}>
        <div className="px-2 sm:px-6 lg:px-8 xl:px-4 2xl:px-4">
        <ScrollAnimate threshold={0.2}>
        <div className="text-center mb-16">
            <h2 className="text-[40px] md:text-5xl font-onest font-black text-white mb-6">
            {lang === 'ES' ? (
              <>
                  <span className="sr-only">AgaruCorp - </span>Explorá nuestros servicios
              </>
            ) : (
              <>
                  <span className="sr-only">AgaruCorp - </span>Browse our services
              </>
            )}
          </h2>
            <p className="text-[16px] md:text-[16px] text-gray-300 max-w-3xl mx-auto font-manrope font-light">
            {lang === 'ES'
              ? 'Nos especializamos en ayudar a PyMEs, startups y profesionales a lanzar sus marcas online'
              : 'We specialize in helping SMEs, startups, and ambitious professionals to launch and establish their brands online'}
          </p>
        </div>
        </ScrollAnimate>

        {/* Servicios con texto alternado */}
        <div className="mt-12 space-y-12 md:space-y-16">
          {services.map((service, idx) => (
            <ScrollAnimate key={idx} delay={idx * 100} threshold={0.15}>
              <div 
                className={`w-full text-center md:text-left`}
              >
                <div className={`max-w-2xl md:max-w-[600px] mx-auto md:mx-0 px-4 md:px-12 ${service.align === 'right' ? 'md:ml-auto' : ''}`}>
                  <h3 
                    className="font-onest font-black mb-6 text-center md:text-center text-[34px] md:text-[38px]"
                    style={{
                      color: service.titleColor || '#895AF6',
                    }}
                  >
                    {service.title}
                  </h3>
                  <p className="font-manrope font-light text-white text-base md:text-[16px] leading-relaxed text-left">
                    <strong>{service.boldText}</strong>
                    {service.restText}
                  </p>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
