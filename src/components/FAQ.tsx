
import { useState, useRef, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { ScrollAnimate } from './ScrollAnimate';

interface FAQProps {
  lang: 'ES' | 'EN';
}

type FAQEntry = {
  question: string;
  intro?: string;
  bullets?: string[];
  answer?: string;
};

const FAQ = ({ lang }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  const faqs: FAQEntry[] =
    lang === 'ES'
      ? [
          {
            question: '¿Cuáles son los tiempos estimados de entrega según el tipo de proyecto?',
            intro:
              'El plazo de desarrollo depende estrictamente de la complejidad y el alcance de la solución:',
            bullets: [
              'Landing pages: de 2 a 5 días',
              'Sitios empresariales: de 7 a 10 días',
              'Software y sistemas personalizados: desde 1 hasta 3 meses (o más), sujeto a las fases de arquitectura, desarrollo y testing',
            ],
          },
          {
            question: '¿Ofrecen mantenimiento y soporte continuo?',
            answer:
              'Sí, contamos con planes de mantenimiento mensual diseñados para asegurar el óptimo funcionamiento de tu sitio. Estos paquetes incluyen actualizaciones de seguridad, gestión de alojamiento y dominio, monitoreo de rendimiento y soporte técnico continuo.',
          },
          {
            question: '¿Trabajan con plataformas existentes o desarrollan software desde cero?',
            answer:
              'Para proyectos de ecommerce implementamos y personalizamos soluciones sobre el ecosistema de Shopify por una cuestión de eficiencia y optimización de costos. Para sistemas internos, flujos de trabajo específicos y automatizaciones operativas, desarrollamos software 100% a medida.',
          },
          {
            question: '¿Las automatizaciones y sistemas se integran con mis herramientas actuales?',
            answer:
              'Sí. Diseñamos e implementamos soluciones preparadas para conectarse mediante APIs o integraciones nativas con las plataformas que ya utilizás en tu operación diaria (CRM, pasarelas de pago, bases de datos o software de gestión), garantizando que la transición técnica sea transparente y no interrumpa tu negocio.',
          },
        ]
      : [
          {
            question: 'What are the estimated delivery times depending on the type of project?',
            intro:
              'Development timelines depend strictly on the complexity and scope of the solution:',
            bullets: [
              'Landing pages: 2 to 5 days',
              'Corporate websites: 7 to 10 days',
              'Custom software and systems: from 1 to 3 months (or more), subject to architecture, development, and testing phases',
            ],
          },
          {
            question: 'Do you provide ongoing maintenance and support?',
            answer:
              "Yes, we offer monthly maintenance plans designed to ensure your site's optimal performance. These packages include security updates, hosting and domain management, performance monitoring, and continuous technical support.",
          },
          {
            question: 'Do you work with existing platforms or develop software from scratch?',
            answer:
              'For ecommerce projects we implement and customize solutions on the Shopify ecosystem for efficiency and cost optimization. For internal systems, specific workflows, and operational automations, we develop 100% custom software.',
          },
          {
            question: 'Do automations and systems integrate with my current tools?',
            answer:
              'Yes. We design and implement solutions ready to connect via APIs or native integrations with the platforms you already use in your daily operations (CRM, payment gateways, databases, or management software), ensuring a transparent technical transition that does not interrupt your business.',
          },
        ];

  useEffect(() => {
    faqRefs.current = faqRefs.current.slice(0, faqs.length);
  }, [faqs.length]);

  const toggleFAQ = (index: number) => {
    const wasOpen = openIndex === index;
    const newOpenIndex = wasOpen ? null : index;

    setOpenIndex(newOpenIndex);

    if (isMobile && !wasOpen && newOpenIndex !== null) {
      setTimeout(() => {
        const faqElement = faqRefs.current[newOpenIndex];
        if (faqElement) {
          const rect = faqElement.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const targetScrollTop = scrollTop + rect.top - 100;

          window.scrollTo({
            top: targetScrollTop,
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  };

  return (
    <section id="faq" className="w-full overflow-x-hidden bg-transparent py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimate threshold={0.2}>
          <div className="mb-12 text-center md:mb-16">
            <h2 className="font-mulish text-[22px] font-normal leading-[1.15] text-white sm:text-[28px] md:text-[32px]">
              {lang === 'ES' ? 'Preguntas frecuentes' : 'Frequently asked questions'}
            </h2>
          </div>
        </ScrollAnimate>

        <div className="space-y-4 md:space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <ScrollAnimate key={index} delay={index * 100} threshold={0.15}>
                <div
                  ref={(el) => {
                    faqRefs.current[index] = el;
                  }}
                  className={`group relative overflow-hidden rounded-lg border bg-card text-card-foreground transition-[border-color,background-color,transform] duration-200 motion-reduce:transform-none ${
                    isOpen
                      ? 'border-primary/40 bg-accent/40'
                      : 'border-border hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent/40'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-6 sm:py-6"
                    aria-expanded={isOpen}
                  >
                    <span className="font-mulish text-[16px] font-medium leading-snug text-foreground sm:text-[17px] md:text-[18px]">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md border transition-[background-color,border-color,color,transform] duration-200 ${
                        isOpen
                          ? 'rotate-45 border-primary/50 bg-primary text-primary-foreground'
                          : 'border-border bg-secondary text-muted-foreground group-hover:border-primary/40 group-hover:text-foreground'
                      }`}
                    >
                      <Plus className="h-4 w-4" strokeWidth={2} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="animate-fade-in border-t border-border px-5 pb-5 sm:px-6 sm:pb-6">
                      <div className="pt-4 font-manrope text-[15px] font-normal leading-relaxed text-white/85 sm:text-[16px]">
                        {faq.intro && <p>{faq.intro}</p>}
                        {faq.bullets && (
                          <ul className={`space-y-2 ${faq.intro ? 'mt-3' : ''}`}>
                            {faq.bullets.map((item) => (
                              <li key={item} className="flex gap-3">
                                <span
                                  aria-hidden
                                  className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/80"
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {faq.answer && <p>{faq.answer}</p>}
                      </div>
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
