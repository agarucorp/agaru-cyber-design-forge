import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { SECTION_CONTAINER_CLASS } from '@/lib/sectionLayout';
import { getServices, getIncludedItems } from '@/data/services';
import { t, type Lang } from '@/lib/i18n';
import { ScrollAnimate } from './ScrollAnimate';

type CyberServicesProps = {
  lang: Lang;
};

const CyberServices: React.FC<CyberServicesProps> = ({ lang }) => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const services = getServices(lang);
  const included = getIncludedItems(lang);

  return (
    <section
      id="cyber-services"
      aria-label={lang === 'EN' ? 'Services' : 'Servicios'}
      className="relative w-full bg-transparent py-20 md:py-28"
    >
      <div className={SECTION_CONTAINER_CLASS}>
        {/* Encabezado */}
        <ScrollAnimate threshold={0.2}>
          <div className="mb-12 md:mb-16">
            <div>
              <div className="mb-3 font-manrope text-[11px] uppercase tracking-[0.25em] text-white/40">
                // WHAT WE DO
              </div>
              <h2 className="font-mulish text-[22px] font-normal leading-[1.15] text-white sm:text-[28px] md:text-[32px]">
                {t('services', 'title', lang)}
              </h2>
            </div>
          </div>
        </ScrollAnimate>

        {/* Stack vertical de paneles */}
        <div className="flex flex-col gap-6 md:gap-7">
          {services.map((s, i) => {
            const isExpanded = expanded === i;
            const hasDetails = Boolean(s.details?.length);

            return (
              <ScrollAnimate key={s.index} delay={i * 100} threshold={0.15}>
              <article className="group relative w-full overflow-hidden rounded-lg border border-border bg-card text-card-foreground transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent/40 motion-reduce:transform-none">
                <div className="relative px-6 py-8 sm:px-8 sm:py-9 md:px-10 md:py-10">
                    <div className="mb-4">
                      <span className="inline-block rounded-md border border-border bg-secondary px-2.5 py-1 font-manrope text-xs font-medium text-muted-foreground">
                        {s.badge}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-mulish text-[20px] font-semibold leading-[1.15] text-foreground sm:text-[22px] md:text-[24px]">
                        {s.title}
                      </h3>

                      {hasDetails && (
                        <button
                          type="button"
                          aria-expanded={isExpanded}
                          aria-label={
                            isExpanded
                              ? lang === 'EN'
                                ? `Collapse ${s.title}`
                                : `Cerrar ${s.title}`
                              : lang === 'EN'
                                ? `Expand ${s.title}`
                                : `Abrir ${s.title}`
                          }
                          onClick={() => setExpanded(isExpanded ? null : i)}
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md border transition-[background-color,border-color,color,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                            isExpanded
                              ? 'rotate-45 border-primary/50 bg-primary text-primary-foreground'
                              : 'border-border bg-secondary text-muted-foreground hover:border-primary/40 hover:text-foreground'
                          }`}
                        >
                          <Plus className="h-4 w-4" strokeWidth={2} />
                        </button>
                      )}
                    </div>

                    <p className="mt-4 w-full font-manrope text-[15px] font-normal leading-relaxed text-white/85 sm:text-[16px]">
                      {s.description}
                    </p>

                    {hasDetails && isExpanded && (
                      <div className="animate-fade-in">
                        <ul className="mt-6 space-y-3 border-t border-border pt-6">
                          {s.details?.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span
                                aria-hidden
                                className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/80"
                              />
                              <p className="font-manrope text-[15px] font-normal leading-relaxed text-white/85 sm:text-[16px]">
                                {item}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                </div>

              </article>
              </ScrollAnimate>
            );
          })}
        </div>

        <ScrollAnimate threshold={0.2}>
          <div className="mt-20 border-t border-border pt-14 md:mt-24 md:pt-16">
            <div className="mb-10 md:mb-12">
              <h3 className="font-mulish text-[22px] font-normal leading-[1.15] text-white sm:text-[26px] md:text-[28px]">
                {t('services', 'includesTitle', lang)}
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {included.map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-border bg-card p-6 text-card-foreground transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent/40 motion-reduce:transform-none sm:p-7"
                >
                  <h4 className="font-onest text-[17px] font-normal text-foreground sm:text-[18px]">
                    {item.title}
                  </h4>
                  <p className="mt-3 font-manrope text-[15px] font-normal leading-relaxed text-white/85 sm:text-[16px]">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
};

export default CyberServices;
