import React, { useState } from 'react';

/**
 * Sección "Servicios" con estética de HUD de videojuego cyberpunk.
 * - Paneles negros con esquinas cortadas y marco blanco.
 * - Hover: borde y glow blanco sutil, sin colores adicionales.
 * - Detalles técnicos: índice grande, códigos, barras de estado y marcas de esquina.
 */

type Service = {
  index: string;
  code: string;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    index: '01',
    code: 'SYS.CORE // X:042 Y:118',
    title: 'Sistemas a medida',
    description:
      'Desarrollo e implementación de software empresarial, plataformas backend personalizadas, aplicaciones web y arquitecturas escalables. Diseñamos herramientas que resuelven flujos operativos específicos.',
  },
  {
    index: '02',
    code: 'WEB.SHOP // X:118 Y:204',
    title: 'Ecommerce y sitios web',
    description:
      'Diseño de landing pages, sitios corporativos y setup de Shopify. Soluciones rápidas, autoadministrables y optimizadas para SEO desde la primera línea de código.',
  },
  {
    index: '03',
    code: 'BRAND.ID // X:204 Y:316',
    title: 'Identidad de Marca',
    description:
      'Diseñamos identidades visuales desde logotipos, isotipos, hasta la creación de componentes gráficos varios para la comunicación de tu marca.',
  },
];

const GlitchTitle: React.FC<{ text: string; active: boolean }> = ({ text, active }) => (
  <span className="relative inline-block leading-none">
    <span className="relative z-10">{text}</span>
    <span
      aria-hidden
      className={`pointer-events-none absolute left-0 top-0 z-0 text-white mix-blend-screen transition-opacity duration-150 ${
        active ? 'opacity-70 animate-[glitchA_700ms_steps(2,end)_infinite]' : 'opacity-0'
      }`}
    >
      {text}
    </span>
  </span>
);

const StatusBar: React.FC<{ active: boolean }> = ({ active }) => (
  <div aria-hidden className="flex items-center gap-1.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className={`h-1.5 w-4 rounded-sm transition-all duration-300 ${
          active ? 'bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]' : 'bg-white/20'
        }`}
        style={{ transitionDelay: active ? `${i * 40}ms` : '0ms' }}
      />
    ))}
  </div>
);

const CyberServices: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const panelClip =
    'polygon(36px 0, 100% 0, 100% calc(100% - 36px), calc(100% - 36px) 100%, 0 100%, 0 36px)';

  return (
    <section
      id="cyber-services"
      aria-label="Servicios"
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

      <div className="relative mx-auto w-full max-w-[1100px] px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="mb-12 flex items-end justify-between gap-6 md:mb-16">
          <div>
            <div className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
              <span className="h-px w-8 bg-white/40" />
              <span>// 03 servicios</span>
            </div>
            <h2 className="font-mulish text-[34px] font-normal leading-[1.05] text-white sm:text-[44px] md:text-[56px]">
              Servicios
            </h2>
          </div>
          <div className="hidden font-mono text-[11px] uppercase tracking-[0.25em] text-white/35 md:block">
            STATUS: <span className="text-white">ONLINE</span>
          </div>
        </div>

        {/* Stack vertical de paneles */}
        <div className="flex flex-col gap-6 md:gap-7">
          {SERVICES.map((s, i) => {
            const isActive = hovered === i;
            return (
              <article
                key={s.index}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
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
                  {/* Columna del índice */}
                  <div className="col-span-12 flex items-start justify-between md:col-span-3 md:flex-col md:justify-between">
                    <div>
                      <div
                        className={`font-mono text-[56px] font-bold leading-none tracking-tighter transition-colors duration-300 md:text-[72px] ${
                          isActive ? 'text-white/90' : 'text-white/10'
                        }`}
                        style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)' }}
                      >
                        {s.index}
                      </div>
                      <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                        {s.code}
                      </div>
                    </div>

                    <div className="hidden md:block">
                      <StatusBar active={isActive} />
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="col-span-12 md:col-span-9">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="inline-block border border-white/30 bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                        Módulo 0{s.index}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                        // {s.title.toUpperCase()}
                      </span>
                    </div>

                    <h3 className="font-mulish text-[26px] font-semibold leading-[1.05] tracking-tight text-white sm:text-[30px] md:text-[34px]">
                      <GlitchTitle text={s.title} active={isActive} />
                    </h3>

                    <p className="mt-4 font-inter text-[14px] leading-relaxed text-white/70 sm:text-[15px]">
                      {s.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-white/60 transition-colors duration-300 group-hover:text-white">
                        <span>Explorar</span>
                        <span
                          className={`inline-block transition-transform duration-300 ${
                            isActive ? 'translate-x-1' : ''
                          }`}
                        >
                          →
                        </span>
                      </div>

                      <div className="md:hidden">
                        <StatusBar active={isActive} />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
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
