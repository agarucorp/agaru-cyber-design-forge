import React, { useState } from 'react';
import { Globe, Cpu, Palette, Plus, type LucideIcon } from 'lucide-react';
import { SECTION_CONTAINER_CLASS } from '@/lib/sectionLayout';
import { getServices } from '@/data/services';
import { t, type Lang } from '@/lib/i18n';
import { ScrollAnimate } from './ScrollAnimate';

// Un ícono por servicio, mapeado por índice (no depende del idioma del texto).
const SERVICE_ICONS: Record<string, LucideIcon> = {
  '01': Cpu,
  '02': Globe,
  '03': Palette,
};

type CyberServicesProps = {
  lang: Lang;
};

const CyberServices: React.FC<CyberServicesProps> = ({ lang }) => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const services = getServices(lang);

  return (
    <section
      id="cyber-services"
      aria-label={lang === 'EN' ? 'Services' : 'Servicios'}
      className="relative w-full bg-black py-20 md:py-28"
    >
      <div className={SECTION_CONTAINER_CLASS}>
        {/* Encabezado */}
        <ScrollAnimate threshold={0.2}>
          <div className="mb-12 md:mb-16">
            <div>
              <div className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
                <span className="h-px w-8 bg-white/40" />
                <span>// WHAT WE DO</span>
              </div>
              <h2 className="font-mulish text-[34px] font-normal leading-[1.05] text-white sm:text-[44px] md:text-[56px]">
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
            const Icon = SERVICE_ICONS[s.index] ?? Globe;

            return (
              <ScrollAnimate key={s.index} delay={i * 100} threshold={0.15}>
              <article className="group relative w-full overflow-hidden rounded-lg border border-border bg-card text-card-foreground transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent/40 motion-reduce:transform-none">
                <div className="relative grid grid-cols-12 gap-6 px-6 py-8 sm:px-8 sm:py-9 md:px-10 md:py-10">
                  <div className="col-span-12 md:col-span-2">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-border bg-secondary text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="col-span-12 md:col-span-10">
                    <div className="mb-4">
                      <span className="inline-block rounded-md border border-border bg-secondary px-2.5 py-1 font-inter text-xs font-medium text-muted-foreground">
                        {s.badge}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-mulish text-[26px] font-semibold leading-[1.1] text-foreground sm:text-[30px] md:text-[34px]">
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

                    <p className="mt-4 max-w-[62ch] font-inter text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                      {s.description}
                    </p>

                    {hasDetails && (
                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                          isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <ul className="mt-6 space-y-3 border-t border-border pt-6">
                            {s.details?.map((item) => (
                              <li key={item} className="flex gap-3">
                                <span
                                  aria-hidden
                                  className="mt-[0.65em] h-px w-3 shrink-0 bg-primary/70"
                                />
                                <p className="font-inter text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                                  {item}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </article>
              </ScrollAnimate>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CyberServices;
