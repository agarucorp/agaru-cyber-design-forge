
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

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
          category: 'Diseño y Desarrollo Web',
          questions: [
            {
              question: '¿Cuál es el tiempo estimado para un proyecto web?',
              answer: 'El tiempo de entrega varía según la complejidad del proyecto. Para sitios web estáticos o landing pages, estimamos entre 1 y 2 semanas. Las aplicaciones web, debido a su mayor complejidad y funcionalidades interactivas, suelen requerir 3 semanas o más. Una vez definidos los requisitos específicos, te proporcionaremos un cronograma detallado.'
            },
            {
              question: '¿Ofrecen mantenimiento y soporte continuo?',
              answer: 'Sí, contamos con planes de mantenimiento mensual diseñados para asegurar el óptimo funcionamiento de tu sitio. Estos paquetes incluyen actualizaciones de seguridad, gestión de alojamiento y dominio, monitoreo de rendimiento y soporte técnico continuo.'
            },
            {
              question: '¿Mi sitio será mobile-responsive?',
              answer: '¡Claro! Todos nuestros sitios son mobile-first, asegurando óptimo rendimiento y experiencia en cualquier dispositivo. Probamos en varios dispositivos antes del lanzamiento.'
            }
          ]
        },
        {
          category: 'Branding y Estrategia',
          questions: [
            {
              question: '¿Cúal es la diferencia entre branding y marketing?',
              answer: 'El Branding construye la identidad de tu marca: quién sos, qué representás y cómo te perciben. El Marketing son las acciones para comunicar esa identidad y promocionar tus productos o servicios. En resumen, el branding es quién sos, y el marketing es cómo lo comunicas.'
            },
            {
              question: '¿Puede mi marca evolucionar con el tiempo?',
              answer: 'Absolutamente. Una marca sólida es flexible y adaptable. A medida que tu negocio o el mercado evolucionan, tu marca puede y debe ajustarse, manteniendo siempre la esencia que te hace único.'
            },
            {
              question: '¿Pueden ayudar a rebrandear un negocio existente?',
              answer: 'Sí, hacemos tanto branding nuevo como rebranding. Analizamos tu marca actual, detectamos oportunidades y creamos un plan estratégico para renovar tu imagen sin perder valor de marca.'
            }
          ]
        }
      ]
    : [
        {
          category: 'Web Design & Development',
          questions: [
            {
              question: 'What is your typical timeline for a web design project?',
              answer: 'Delivery time varies based on project complexity. For static websites or landing pages, we estimate 1 to 2 weeks. Web applications, due to their higher complexity and interactive functionalities, typically require 3 weeks or more. Once specific requirements are defined, we\'ll provide a detailed timeline.'
            },
            {
              question: 'Do you provide ongoing maintenance and support?',
              answer: 'Yes, we offer monthly maintenance plans designed to ensure your site\'s optimal performance. These packages include security updates, hosting and domain management, performance monitoring, and continuous technical support.'
            },
            {
              question: 'Will my website be mobile-responsive?',
              answer: 'Absolutely! All our websites are mobile-first, ensuring optimal performance and experience on any device. We test across various devices before launch to guarantee seamless responsiveness.'
            }
          ]
        },
        {
          category: 'Branding & Strategy',
          questions: [
            {
              question: 
                "Branding vs. Marketing: What's the core difference?",
              answer: 
                "Branding builds your brand's identity: who you are, what you represent, and how you're perceived. Marketing involves the actions you take to communicate that identity and promote your products or services. In essence, branding is who you are, and marketing is how you communicate it."
            },
            {
              question: 'Can My Brand Evolve Over Time?',
              answer: 'Absolutely. A strong brand is flexible and adaptable. As your business or the market evolves, your brand can and should adjust, always maintaining the core essence that makes you unique.'
            },
            {
              question: 'Can You Help Rebrand an Existing Business?',
              answer: 'Yes, we handle both new branding and rebranding projects. We analyze your current brand, identify opportunities, and create a strategic plan to refresh your image without losing brand equity.'
            }
          ]
        }
      ];

  // Inicializar el array de refs con la longitud correcta
  useEffect(() => {
    const totalFAQs = faqs.reduce((total, category) => total + category.questions.length, 0);
    faqRefs.current = faqRefs.current.slice(0, totalFAQs);
  }, [faqs]);

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const index = categoryIndex * 100 + questionIndex;
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
    <section id="faq" className="py-20 bg-cyber-grey">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {lang === 'ES' ? 'Preguntas ' : 'Frequently Asked '}
            <span className="bg-gradient-to-r from-[#895AF6] via-[#B983FF] to-[#4DE3FF] bg-clip-text text-transparent">{lang === 'ES' ? 'Frecuentes' : 'Questions'}</span>
          </h2>
          <p className="text-xl text-gray-300">
            {lang === 'ES'
              ? 'Encontrá respuestas a las dudas más comunes sobre nuestros servicios y procesos'
              : 'Find answers to common questions about our services and process.'}
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-1 h-8 cyber-gradient rounded-full mr-4"></div>
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const index = categoryIndex * 100 + questionIndex;
                  const isOpen = openIndex === index;
                  
                  return (
                    <div 
                      key={questionIndex} 
                      className="cyber-card rounded-xl overflow-hidden"
                      ref={(el) => {
                        faqRefs.current[index] = el;
                      }}
                    >
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full p-6 text-left flex items-center justify-between transition-all duration-300 group hover:shadow-2xl hover:scale-[1.025] hover:bg-[#23243a]/90 hover:text-[#895AF6] focus:outline-none"
                      >
                        <span className="text-xl font-bold text-white pr-8 transition-all duration-300 group-hover:text-[#895AF6] group-hover:drop-shadow-[0_0_6px_#895AF6]">
                          {faq.question}
                        </span>
                        <div className="text-white flex-shrink-0 transition-all duration-300 group-hover:text-[#895AF6] group-hover:drop-shadow-[0_0_6px_#895AF6]">
                          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6 animate-fade-in">
                          <div className="h-px bg-gradient-to-r from-agaru-purple to-transparent mb-4"></div>
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
