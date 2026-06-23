import React, { useState } from 'react';

/**
 * Sección "Servicios" con estética cyberpunk/futurista.
 * - Paneles oscuros con esquinas cortadas y borde blanco neón.
 * - Fondo transparente/negro sobre el black del sitio.
 * - Detalles técnicos: micro-coordenadas, líneas de cuña, scanlines.
 * - Hover: borde neón violeta/cian, glow y glitch en el título.
 */

type Service = {
  index: string;
  code: string; // micro-coord decorativa
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
      className={`pointer-events-none absolute left-0 top-0 z-0 text-cyber-primary mix-blend-screen transition-opacity duration-150 ${
        active ? 'opacity-80 animate-[glitchA_900ms_steps(2,end)_infinite]' : 'opacity-0'
      }`}
    >
      {text}
    </span>
    <span
      aria-hidden
      className={`pointer-events-none absolute left-0 top-0 z-0 text-cyber-accent mix-blend-screen transition-opacity duration-150 ${
        active ? 'opacity-70 animate-[glitchB_900ms_steps(2,end)_infinite]' : 'opacity-0'
      }`}
    >
      {text}
    </span>
  </span>
);

const CyberServices: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="cyber-services"
      aria-label="Servicios"
      className="relative w-full bg-black py-20 md:py-28"
    >
      {/* Textura de scanlines sutil sobre la sección */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
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
            STATUS: <span className="text-cyber-primary">ONLINE</span>
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
                    ? 'border-cyber-primary shadow-neon -translate-y-1'
                    : 'border-white/25'
                }`}
                style={{
                  background:
                    'linear-gradient(135deg, rgba(10,10,10,0.92) 0%, rgba(20,20,20,0.78) 100%)',
                  clipPath:
                    'polygon(28px 0, 100% 0, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0 100%, 0 28px)',
                  borderWidth: 1,
                  borderStyle: 'solid',
                }}
              >
                {/* Capa de scanlines interna */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.1) 1px, rgba(255,255,255,0.1) 2px)',
                  }}
                />

                {/* Brillo de fondo en hover */}
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyber-primary/15 blur-3xl transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Cuñas decorativas en esquinas */}
                <span className="pointer-events-none absolute left-0 top-0 h-5 w-5 border-l border-t border-white/40" />
                <span className="pointer-events-none absolute right-0 top-0 h-5 w-5 border-r border-t border-white/40" />
                <span className="pointer-events-none absolute bottom-0 left-0 h-5 w-5 border-b border-l border-white/40" />
                <span className="pointer-events-none absolute bottom-0 right-0 h-5 w-5 border-b border-r border-white/40" />

                {/* Marcas diagonales de "tornillo" en esquinas */}
                <span className="pointer-events-none absolute left-2 top-2 h-1.5 w-1.5 rounded-full bg-white/25" />
                <span className="pointer-events-none absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-white/25" />
                <span className="pointer-events-none absolute bottom-2 left-2 h-1.5 w-1.5 rounded-full bg-white/25" />
                <span className="pointer-events-none absolute bottom-2 right-2 h-1.5 w-1.5 rounded-full bg-white/25" />

                {/* Línea neón superior animada en hover */}
                <span
                  aria-hidden
                  className={`absolute left-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-primary to-cyber-accent transition-[width] duration-500 ease-out ${
                    isActive ? 'w-full' : 'w-0'
                  }`}
                />

                {/* Línea neón derecha animada en hover */}
                <span
                  aria-hidden
                  className={`absolute right-0 top-0 h-0 w-[2px] bg-gradient-to-b from-cyber-accent to-transparent transition-[height] duration-500 ease-out ${
                    isActive ? 'h-full' : 'h-0'
                  }`}
                />

                <div className="relative grid grid-cols-12 gap-4 px-6 py-8 sm:px-10 sm:py-10 md:px-14 md:py-12">
                  {/* Index */}
                  <div className="col-span-12 md:col-span-2">
                    <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/50">
                      [{s.index}/03]
                    </div>
                    <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                      {s.code}
                    </div>
                  </div>

                  {/* Título */}
                  <div className="col-span-12 md:col-span-4">
                    <h3 className="font-mulish text-[26px] font-semibold leading-[1.05] tracking-tight text-white sm:text-[30px] md:text-[34px]">
                      <GlitchTitle text={s.title} active={isActive} />
                    </h3>
                  </div>

                  {/* Descripción */}
                  <div className="col-span-12 md:col-span-6">
                    <p className="font-inter text-[14px] leading-relaxed text-white/75 sm:text-[15px]">
                      {s.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-white/60 transition-colors duration-300 group-hover:text-cyber-primary">
                      <span>Explorar</span>
                      <span
                        className={`inline-block transition-transform duration-300 ${
                          isActive ? 'translate-x-1' : ''
                        }`}
                      >
                        →
                      </span>
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
          20% { transform: translate(-1.5px, 0.5px); clip-path: inset(10% 0 60% 0); }
          40% { transform: translate(1px, -1px);    clip-path: inset(40% 0 20% 0); }
          60% { transform: translate(-1px, 1px);    clip-path: inset(70% 0 5% 0); }
          80% { transform: translate(1.5px, 0);     clip-path: inset(20% 0 50% 0); }
        }
        @keyframes glitchB {
          0%, 100% { transform: translate(0,0); clip-path: inset(0 0 0 0); }
          20% { transform: translate(1.5px, -0.5px); clip-path: inset(60% 0 10% 0); }
          40% { transform: translate(-1px, 1px);     clip-path: inset(20% 0 40% 0); }
          60% { transform: translate(1px, -1px);     clip-path: inset(5% 0 70% 0); }
          80% { transform: translate(-1.5px, 0);     clip-path: inset(50% 0 20% 0); }
        }
      `}</style>
    </section>
  );
};

export default CyberServices;
