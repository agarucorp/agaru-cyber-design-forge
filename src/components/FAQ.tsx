
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { ScrollAnimate } from './ScrollAnimate';

interface FAQProps {
  lang: 'ES' | 'EN';
}

const FAQ = ({ lang }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  const faqs = lang === 'ES'
    ? [
        {
          question: '¿Cuál es el tiempo estimado para un proyecto web?',
          answer: 'El tiempo de entrega depende de la complejidad del proyecto. Las páginas simples suelen desarrollarse en un plazo menor a 5 días hábiles, mientras que los sitios web completos requieren entre 1 y 2 semanas. Las aplicaciones web, por su alcance y funcionalidades, pueden demandar entre 1 y 3 meses de desarrollo. Una vez definidos los requisitos específicos, se entregará un cronograma detallado con los plazos estimados.'
        },
        {
          question: '¿Ofrecen mantenimiento y soporte continuo?',
          answer: 'Sí, contamos con planes de mantenimiento mensual diseñados para asegurar el óptimo funcionamiento de tu sitio. Estos paquetes incluyen actualizaciones de seguridad, gestión de alojamiento y dominio, monitoreo de rendimiento y soporte técnico continuo.'
        },
        {
          question: '¿Mi sitio será mobile-responsive?',
          answer: 'Todos nuestros sitios son mobile-first, asegurando óptimo rendimiento y experiencia en cualquier dispositivo. Probamos en varias interfaces antes del lanzamiento.'
        }
      ]
    : [
        {
          question: 'What is your typical timeline for a web design project?',
          answer: 'Delivery times depend on the complexity of the project. Simple pages are usually completed in under 5 business days, while full websites typically require between 1 and 2 weeks. Web applications, due to their scope and functionality, may take between 1 and 3 months to develop. Once the specific requirements are defined, a detailed timeline with estimated deadlines will be provided.'
        },
        {
          question: 'Do you provide ongoing maintenance and support?',
          answer: 'Yes, we offer monthly maintenance plans designed to ensure your site\'s optimal performance. These packages include security updates, hosting and domain management, performance monitoring, and continuous technical support.'
        },
        {
          question: 'Will my website be mobile-responsive?',
          answer: 'Absolutely! All our websites are mobile-first, ensuring optimal performance and experience on any device. We test across various devices before launch to guarantee seamless responsiveness.'
        }
      ];

  // Inicializar el array de refs con la longitud correcta
  useEffect(() => {
    faqRefs.current = faqRefs.current.slice(0, faqs.length);
  }, [faqs]);

  const toggleFAQ = (index: number) => {
    const wasOpen = openIndex === index;
    const newOpenIndex = wasOpen ? null : index;
    
    setOpenIndex(newOpenIndex);
    
    // Si estamos en móvil y se está abriendo una FAQ (no cerrando)
    if (isMobile && !wasOpen && newOpenIndex !== null) {
      // Usar setTimeout para asegurar que el DOM se actualice antes del scroll
      setTimeout(() => {
        const faqElement = faqRefs.current[newOpenIndex];
        if (faqElement) {
          const rect = faqElement.getBoundingClientRect();
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

  return (
    <section id="faq" className="py-20 w-full overflow-x-hidden" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8">
        <ScrollAnimate threshold={0.2}>
          <div className="text-center mb-16">
            <h2 className="mb-6 font-onest text-[32px] font-normal leading-[1.15] text-white sm:text-[40px] md:text-[48px] lg:text-[53px]">
              {lang === 'ES' ? 'Preguntas frecuentes' : 'Frequently asked questions'}
            </h2>
          </div>
        </ScrollAnimate>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <ScrollAnimate key={index} delay={index * 100} threshold={0.15}>
                <div
                  className="cyber-card rounded-xl overflow-hidden"
                  ref={(el) => {
                    faqRefs.current[index] = el;
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between transition-all duration-300 group hover:shadow-2xl hover:scale-[1.025] hover:bg-[#23243a]/90 hover:text-[#895AF6] focus:outline-none"
                  >
                    <span className="text-[16px] md:text-[18px] font-manrope font-normal text-white pr-8 transition-all duration-300 group-hover:text-[#895AF6] group-hover:drop-shadow-[0_0_6px_#895AF6]">
                      {faq.question}
                    </span>
                    <div className="text-white flex-shrink-0 transition-all duration-300 group-hover:text-[#895AF6] group-hover:drop-shadow-[0_0_6px_#895AF6]">
                      {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 animate-fade-in">
                      <div className="h-px bg-gradient-to-r from-agaru-purple to-transparent mb-4"></div>
                      <p className="text-gray-300 font-manrope font-light text-[16px] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </ScrollAnimate>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
