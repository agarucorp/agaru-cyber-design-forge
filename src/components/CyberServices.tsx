import React, { useEffect, useRef, useState } from 'react';
import { Globe, Cpu, Palette, Plus, type LucideIcon } from 'lucide-react';
import { SECTION_CONTAINER_CLASS } from '@/lib/sectionLayout';
import { getServices, getModLabel } from '@/data/services';
import { t, type Lang } from '@/lib/i18n';
import { ScrollAnimate } from './ScrollAnimate';

// Un ícono por servicio, mapeado por índice (no depende del idioma del texto).
const SERVICE_ICONS: Record<string, LucideIcon> = {
  '01': Cpu,
  '02': Globe,
  '03': Palette,
};

const GlitchTitle: React.FC<{ text: string; active: boolean }> = ({ text, active }) => {
  const [glitching, setGlitching] = useState(false);
  const wasActive = useRef(false);

  useEffect(() => {
    if (active && !wasActive.current) {
      setGlitching(true);
      const timer = window.setTimeout(() => setGlitching(false), 1000);
      wasActive.current = active;
      return () => window.clearTimeout(timer);
    }

    wasActive.current = active;
    if (!active) {
      setGlitching(false);
    }
  }, [active]);

  return (
    <span className="relative inline-block leading-none">
      <span className="relative z-10">{text}</span>
      <span
        aria-hidden
        className={`pointer-events-none absolute left-0 top-0 z-0 text-[#B983FF] mix-blend-screen transition-opacity duration-150 ${
          glitching
            ? 'opacity-80 animate-[glitchA_1s_steps(2,end)_1_forwards] [text-shadow:0_0_12px_rgba(185,131,255,0.85)]'
            : 'opacity-0'
        }`}
      >
        {text}
      </span>
    </span>
  );
};


type CyberServicesProps = {
  lang: Lang;
};

const CyberServices: React.FC<CyberServicesProps> = ({ lang }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);
  const services = getServices(lang);

  const panelClip =
    'polygon(36px 0, 100% 0, 100% calc(100% - 36px), calc(100% - 36px) 100%, 0 100%, 0 36px)';

  return (
    <section
      id="cyber-services"
      aria-label={lang === 'EN' ? 'Services' : 'Servicios'}
      className="relative w-full bg-black py-20 md:py-28"
    >
      {/* Textura de scanlines sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.08) 2px, rgba(255,255,255,0.08) 4px)',
        }}
      />

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
            const isActive = hovered === i || expanded === i;
            const isExpanded = expanded === i;
            const hasDetails = Boolean(s.details?.length);
            const Icon = SERVICE_ICONS[s.index] ?? Globe;

            return (
              <ScrollAnimate key={s.index} delay={i * 100} threshold={0.15}>
              <div
                className="relative w-full"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
              <article
                className={`group relative w-full overflow-hidden text-white transition-[border-color,transform,box-shadow] duration-300 ease-out ${
                  isActive
                    ? '-translate-y-1 border-[#B983FF]/70 shadow-[0_0_36px_rgba(185,131,255,0.22)]'
                    : 'border-white/60'
                }`}
                style={{
                  background:
                    'linear-gradient(135deg, rgba(6,6,6,0.96) 0%, rgba(14,14,14,0.92) 100%)',
                  clipPath: panelClip,
                  borderWidth: 1,
                  borderStyle: 'solid',
                }}
              >
                {/* Marco interno sutil */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-[10px] border border-white/10"
                  style={{ clipPath: panelClip }}
                />

                {/* Scanlines internas */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.1) 1px, rgba(255,255,255,0.1) 2px)',
                  }}
                />

                {/* Numeral fantasma — identidad tipográfica del panel, solo desktop */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute bottom-0 right-0 hidden select-none overflow-hidden md:block"
                  style={{ width: '38%', height: '100%' }}
                >
                  <span
                    className={`absolute bottom-0 right-6 font-mulish font-black leading-none transition-colors duration-500 ${
                      isActive ? 'text-[#B983FF]/[0.14]' : 'text-white/[0.05]'
                    }`}
                    style={{ fontSize: 'clamp(96px, 11vw, 168px)' }}
                  >
                    {s.index}
                  </span>
                </div>

                {/* Marcas de esquina tipo triángulo */}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute left-0 top-0 h-0 w-0 border-b-[10px] border-l-[10px] border-t-0 border-solid border-b-transparent border-r-transparent transition-colors duration-300 ${isActive ? 'border-l-[#B983FF]' : 'border-l-white/70'}`}
                />
                <span
                  aria-hidden
                  className={`pointer-events-none absolute right-0 top-0 h-0 w-0 border-b-[10px] border-r-[10px] border-t-0 border-solid border-b-transparent border-l-transparent transition-colors duration-300 ${isActive ? 'border-r-[#B983FF]' : 'border-r-white/70'}`}
                />
                <span
                  aria-hidden
                  className={`pointer-events-none absolute bottom-0 left-0 h-0 w-0 border-l-[10px] border-t-[10px] border-b-0 border-solid border-t-transparent border-r-transparent transition-colors duration-300 ${isActive ? 'border-l-[#B983FF]' : 'border-l-white/70'}`}
                />
                <span
                  aria-hidden
                  className={`pointer-events-none absolute bottom-0 right-0 h-0 w-0 border-r-[10px] border-t-[10px] border-b-0 border-solid border-t-transparent border-l-transparent transition-colors duration-300 ${isActive ? 'border-r-[#B983FF]' : 'border-r-white/70'}`}
                />

                {/* Línea de estado superior que se ilumina en hover */}
                <span
                  aria-hidden
                  className={`absolute left-0 top-0 h-[2px] transition-[width] duration-500 ease-out ${
                    isActive ? 'w-full shadow-[0_0_12px_rgba(185,131,255,0.7)]' : 'w-0'
                  }`}
                  style={{
                    background: isActive
                      ? 'linear-gradient(90deg, rgba(185,131,255,0.9), rgba(255,255,255,0.95), rgba(185,131,255,0.9))'
                      : '#ffffff',
                  }}
                />

                <div className="relative grid grid-cols-12 gap-6 px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12">
                  {/* Columna lateral decorativa */}
                  <div className="col-span-12 flex items-center gap-4 md:col-span-3 md:flex-col md:items-start md:justify-between md:gap-8">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center border transition-all duration-300 ${
                        isActive
                          ? 'border-[#B983FF]/70 bg-[#B983FF]/10 text-[#B983FF] shadow-[0_0_16px_rgba(185,131,255,0.25)]'
                          : 'border-white/25 bg-white/5 text-white/60'
                      }`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>

                    <div className="hidden md:block">
                      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/35">
                        MOD · {getModLabel(s.badge, lang)}
                      </div>
                    </div>

                    {/* Línea decorativa de datos */}
                    <div aria-hidden className="hidden md:flex w-full flex-col gap-1.5">
                      <div className="h-px w-full bg-white/15" />
                      <div className="flex items-center gap-1.5">
                        <span className={`h-px flex-1 transition-all duration-500 ${isActive ? 'bg-[#B983FF]/70' : 'bg-white/15'}`} />
                      </div>
                      <div className="h-px w-2/3 bg-white/10" />
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="col-span-12 md:col-span-9">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="font-mono text-[11px] text-white/30 md:hidden">{s.index}</span>
                      <span className="inline-block border border-white/30 bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                        {s.badge}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-mulish text-[26px] font-semibold leading-[1.05] tracking-tight text-white sm:text-[30px] md:text-[34px]">
                        <GlitchTitle text={s.title} active={isActive} />
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
                          className={`flex h-10 w-10 shrink-0 items-center justify-center border transition-all duration-300 ${
                            isExpanded
                              ? 'rotate-45 border-[#B983FF] bg-[#B983FF] text-black shadow-[0_0_16px_rgba(185,131,255,0.5)]'
                              : isActive
                                ? 'border-[#B983FF]/70 bg-[#B983FF]/10 text-[#B983FF]'
                                : 'border-white/30 bg-white/5 text-white/70'
                          }`}
                        >
                          <Plus className="h-4 w-4" strokeWidth={2} />
                        </button>
                      )}
                    </div>

                    <p className="mt-4 max-w-[58ch] font-inter text-[14px] leading-relaxed text-white/70 sm:text-[15px]">
                      {s.description}
                    </p>

                    {hasDetails && (
                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                          isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                            {s.details!.map((item) => (
                              <li key={item} className="flex gap-3">
                                <span
                                  aria-hidden
                                  className="mt-[0.65em] h-px w-3 shrink-0 bg-[#B983FF]/70"
                                />
                                <p className="font-inter text-[14px] leading-relaxed text-white/75 sm:text-[15px]">
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
              </div>
              </ScrollAnimate>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes glitchA {
          0%, 100% { transform: translate(0,0); clip-path: inset(0 0 0 0); }
          20% { transform: translate(-2px, 0.5px); clip-path: inset(10% 0 60% 0); }
          40% { transform: translate(1.5px, -1px); clip-path: inset(40% 0 20% 0); }
          60% { transform: translate(-1.5px, 1px); clip-path: inset(70% 0 5% 0); }
          80% { transform: translate(2px, 0); clip-path: inset(20% 0 50% 0); }
        }
      `}</style>
    </section>
  );
};

export default CyberServices;
