import React, { useEffect, useRef, useState } from 'react';
import { SECTION_CONTAINER_CLASS } from '@/lib/sectionLayout';
import { getServices, getModLabel } from '@/data/services';
import { t, type Lang } from '@/lib/i18n';

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


const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

type CyberServicesProps = {
  lang: Lang;
};

const CyberServices: React.FC<CyberServicesProps> = ({ lang }) => {
  const [hovered, setHovered] = useState<number | null>(null);
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

        {/* Stack vertical de paneles */}
        <div className="flex flex-col gap-6 md:gap-7">
          {services.map((s, i) => {
            const isActive = hovered === i;

            return (
              <div
                key={s.index}
                className="relative w-full"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
              <article
                className={`group relative w-full overflow-hidden text-white transition-[border-color,transform,box-shadow] duration-300 ease-out ${
                  isActive
                    ? 'border-white shadow-[0_0_30px_rgba(255,255,255,0.18)] -translate-y-1'
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

                {/* Marcas de esquina tipo triángulo */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-0 top-0 h-0 w-0 border-b-[10px] border-l-[10px] border-t-0 border-solid border-white/70 border-b-transparent border-r-transparent"
                  style={{ transform: 'rotate(0deg)' }}
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-0 top-0 h-0 w-0 border-b-[10px] border-r-[10px] border-t-0 border-solid border-white/70 border-b-transparent border-l-transparent"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute bottom-0 left-0 h-0 w-0 border-l-[10px] border-t-[10px] border-b-0 border-solid border-white/70 border-t-transparent border-r-transparent"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute bottom-0 right-0 h-0 w-0 border-r-[10px] border-t-[10px] border-b-0 border-solid border-white/70 border-t-transparent border-l-transparent"
                />

                {/* Línea de estado superior que se ilumina en hover */}
                <span
                  aria-hidden
                  className={`absolute left-0 top-0 h-[2px] bg-white transition-[width] duration-500 ease-out ${
                    isActive ? 'w-full shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'w-0'
                  }`}
                />

                <div className="relative grid grid-cols-12 gap-6 px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12">
                  {/* Columna lateral decorativa */}
                  <div className="col-span-12 flex items-start justify-between md:col-span-3 md:flex-col md:justify-between md:gap-8">
                    <div className="flex flex-col gap-3">
                      <div className="hidden md:block">
                        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/35">
                          MOD · {getModLabel(s.badge, lang)}
                        </div>
                      </div>
                    </div>

                    {/* Línea decorativa de datos */}
                    <div aria-hidden className="hidden md:flex w-full flex-col gap-1.5">
                      <div className="h-px w-full bg-white/15" />
                      <div className="flex items-center gap-1.5">
                        <span className={`h-px flex-1 transition-all duration-500 ${isActive ? 'bg-white/70' : 'bg-white/15'}`} />
                      </div>
                      <div className="h-px w-2/3 bg-white/10" />
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="col-span-12 md:col-span-9">
                    <div className="mb-4">
                      <span className="inline-block border border-white/30 bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                        {s.badge}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-mulish text-[26px] font-semibold leading-[1.05] tracking-tight text-white sm:text-[30px] md:text-[34px]">
                        <GlitchTitle text={s.title} active={isActive} />
                      </h3>

                      <a
                        href="#contact"
                        onClick={scrollToContact}
                        aria-label={lang === 'EN' ? `Contact about ${s.title}` : `Contactar sobre ${s.title}`}
                        className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/30 bg-white/5 font-mono text-[22px] leading-none text-white/70 transition-all duration-300 hover:border-white hover:bg-white/10 hover:text-white"
                      >
                        +
                      </a>
                    </div>

                    <p className="mt-4 font-inter text-[14px] leading-relaxed text-white/70 sm:text-[15px]">
                      {s.description}
                    </p>
                  </div>
                </div>

              </article>
              </div>
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
