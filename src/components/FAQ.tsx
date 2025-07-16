
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQProps {
  lang: 'ES' | 'EN';
}

const FAQ = ({ lang }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = lang === 'ES'
    ? [
        {
          category: 'Diseño y Desarrollo Web',
          questions: [
            {
              question: '¿Cuál es el tiempo estimado para un proyecto web?',
              answer: 'El tiempo típico es de 4 a 8 semanas según la complejidad. Comenzamos con una fase de descubrimiento (1 semana), luego diseño (2-3 semanas), desarrollo (2-3 semanas) y pruebas/lanzamiento (1 semana). Te damos un cronograma detallado en la consulta inicial.'
            },
            {
              question: '¿Ofrecen mantenimiento y soporte continuo?',
              answer: 'Sí, ofrecemos paquetes de mantenimiento que incluyen actualizaciones de seguridad, contenido, monitoreo de performance y soporte técnico. Los planes se adaptan a tus necesidades y presupuesto.'
            },
            {
              question: '¿Mi sitio será mobile-responsive?',
              answer: '¡Por supuesto! Todos nuestros sitios son mobile-first, asegurando óptimo rendimiento y experiencia en cualquier dispositivo. Probamos en varios dispositivos antes del lanzamiento.'
            }
          ]
        },
        {
          category: 'Branding y Estrategia',
          questions: [
            {
              question: '¿Qué incluye su proceso de branding?',
              answer: 'Incluye investigación de marca, análisis de competencia, diseño de logo, paleta de colores, tipografía, guía de marca y piezas de marketing. Garantizamos coherencia en todos los puntos de contacto.'
            },
            {
              question: '¿Cómo desarrollan la estrategia de marketing?',
              answer: 'Comenzamos con investigación de mercado y competencia, definimos tu audiencia, propuesta de valor, creamos estrategias de contenido y te damos un roadmap accionable. Todo es medible y basado en datos.'
            },
            {
              question: '¿Pueden ayudar a rebrandear un negocio existente?',
              answer: 'Sí, hacemos tanto branding nuevo como rebranding. Analizamos tu marca actual, detectamos oportunidades y creamos un plan estratégico para renovar tu imagen sin perder valor de marca.'
            }
          ]
        },
        {
          category: 'Gestión de Proyectos',
          questions: [
            {
              question: '¿Cómo nos comunicamos durante el proyecto?',
              answer: 'Mantenemos comunicación regular con reuniones semanales, herramientas de gestión y siempre estamos disponibles por email o teléfono. Tendrás un project manager dedicado como contacto principal.'
            },
            {
              question: '¿Qué necesitan de nosotros para empezar?',
              answer: 'Necesitamos información sobre tus objetivos, audiencia, estilo preferido, contenido (texto, imágenes) y requisitos específicos. Te damos un cuestionario detallado en el onboarding.'
            },
            {
              question: '¿Cuáles son sus condiciones de pago?',
              answer: 'Normalmente pedimos 50% de adelanto y 50% al finalizar. Para proyectos grandes, podemos hacer pagos por hitos. Aceptamos varios métodos y siempre hay contrato detallado.'
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
              answer: 'Our typical timeline ranges from 4-8 weeks depending on the complexity and scope. We start with a discovery phase (1 week), followed by design (2-3 weeks), development (2-3 weeks), and testing/launch (1 week). We provide detailed timelines during our initial consultation.'
            },
            {
              question: 'Do you provide ongoing maintenance and support?',
              answer: 'Yes, we offer comprehensive maintenance packages including security updates, content updates, performance monitoring, and technical support. Our support plans are tailored to your specific needs and budget.'
            },
            {
              question: 'Will my website be mobile-responsive?',
              answer: 'Absolutely! All our websites are built with a mobile-first approach, ensuring optimal performance and user experience across all devices and screen sizes. We test thoroughly on various devices before launch.'
            }
          ]
        },
        {
          category: 'Branding & Strategy',
          questions: [
            {
              question: 'What does your branding process include?',
              answer: 'Our comprehensive branding process includes brand foundation research, competitive analysis, logo design, color palette, typography, brand guidelines, and marketing collateral. We ensure your brand identity is cohesive across all touchpoints.'
            },
            {
              question: 'How do you approach marketing strategy development?',
              answer: 'We start with thorough market research and competitor analysis, define your target audience, develop your unique value proposition, create content strategies, and provide actionable roadmaps for implementation. Everything is data-driven and measurable.'
            },
            {
              question: 'Can you help with rebranding an existing business?',
              answer: 'Yes, we specialize in both new brand creation and rebranding. We carefully analyze your current brand position, identify opportunities for improvement, and create a strategic transition plan that maintains brand equity while refreshing your image.'
            }
          ]
        },
        {
          category: 'Project Management',
          questions: [
            {
              question: 'How do we communicate during the project?',
              answer: 'We maintain regular communication through weekly check-ins, project management tools, and are always available via email or phone. You\'ll have a dedicated project manager as your single point of contact throughout the process.'
            },
            {
              question: 'What do you need from us to get started?',
              answer: 'We need information about your business goals, target audience, preferred style/examples, content (text, images), and any specific requirements. We provide a detailed questionnaire during onboarding to gather all necessary information.'
            },
            {
              question: 'What are your payment terms?',
              answer: 'We typically work with a 50% deposit to start the project and 50% upon completion. For larger projects, we can arrange milestone-based payments. We accept various payment methods and provide detailed contracts for all work.'
            }
          ]
        }
      ];

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const index = categoryIndex * 100 + questionIndex;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-cyber-grey">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {lang === 'ES' ? 'Preguntas ' : 'Frequently Asked '}
            <span className="bg-gradient-to-r from-[#895AF6] via-[#B983FF] to-[#4DE3FF] bg-clip-text text-transparent drop-shadow-[0_0_16px_#895AF6]">{lang === 'ES' ? 'Frecuentes' : 'Questions'}</span>
          </h2>
          <p className="text-xl text-gray-300">
            {lang === 'ES'
              ? 'Encontrá respuestas a las dudas más comunes sobre nuestros servicios y procesos.'
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
                    <div key={questionIndex} className="cyber-card rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                      >
                        <span className="text-lg font-semibold text-white pr-8">
                          {faq.question}
                        </span>
                        <div className="text-agaru-purple flex-shrink-0">
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
