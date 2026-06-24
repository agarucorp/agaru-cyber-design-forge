import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import mockupCalena from './assets/ProjectShowcase/calenacard.png';
import cardtr from './assets/ProjectShowcase/cardtr.png';
import logocannlabs1 from './assets/ProjectShowcase/Logocannlabs1.png';
import cardmaxtech from './assets/ProjectShowcase/cardmaxtech.png';
import group18 from './assets/ProjectShowcase/Group 18.png';

/**
 * Sección "Proyectos" con la misma estética HUD cyberpunk que CyberServices.
 * - Grilla 2 columnas en desktop (3 filas) / 1 columna en mobile.
 * - Frame para imagen, descripción, badge de categoría y CTA "Ver caso de estudio"
 *   que abre la página de caso de estudio en una nueva pestaña.
 */

type Project = {
  index: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  image: string;
};

const PROJECTS: Project[] = [
  {
    index: '01',
    slug: 'calena',
    category: 'web app',
    title: 'Somos Calena',
    description:
      'Web app para gestión de psicólogos y conexión con pacientes. Diseño UX/UI, frontend en React y arquitectura escalable.',
    image: mockupCalena,
  },
  {
    index: '02',
    slug: 'tony-ruiz',
    category: 'ecommerce',
    title: 'Tony Ruiz Hair Studio',
    description:
      'Landing page + ecommerce para estudio de peluquería. Reservas online, catálogo de productos y experiencia mobile-first.',
    image: cardtr,
  },
  {
    index: '03',
    slug: 'frzm',
    category: 'landing page',
    title: 'Portfolio personal',
    description:
      'Portfolio de diseño futurista con animaciones avanzadas, interacciones 3D y enfoque en performance.',
    image: '/frzm.png',
  },
  {
    index: '04',
    slug: 'cannlabs',
    category: 'website',
    title: 'CannLabs',
    description:
      'Sitio web para empresa productora de extracto de yerba mate, stevia y té. Storytelling, sustentabilidad y trazabilidad.',
    image: logocannlabs1,
  },
  {
    index: '05',
    slug: 'maxtech',
    category: 'web catalog',
    title: 'Maxtech Latam',
    description:
      'Catálogo para importadora de insumos industriales con búsqueda avanzada, filtros dinámicos y panel autoadministrable.',
    image: cardmaxtech,
  },
  {
    index: '06',
    slug: 'lp-odontologia',
    category: 'landing page',
    title: 'Odontología Lucia Piccardo',
    description:
      'Landing page para consultorio odontológico con foco en captación de turnos y comunicación clara de servicios.',
    image: group18,
  },
];

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
    if (!active) setGlitching(false);
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

const CyberProjects: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const panelClip =
    'polygon(28px 0, 100% 0, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0 100%, 0 28px)';

  return (
    <section
      id="projects"
      aria-label="Proyectos"
      className="relative w-full bg-black py-20 md:py-28"
    >
      {/* Scanlines globales */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.08) 2px, rgba(255,255,255,0.08) 4px)',
        }}
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="mb-12 md:mb-16">
          <div className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
            <span className="h-px w-8 bg-white/40" />
            <span>// 04 proyectos</span>
          </div>
          <h2 className="font-mulish text-[34px] font-normal leading-[1.05] text-white sm:text-[44px] md:text-[56px]">
            Proyectos
          </h2>
          <p className="mt-4 max-w-2xl font-inter text-[14px] leading-relaxed text-white/60 sm:text-[15px]">
            Descubrí cómo ayudamos a startups y negocios a transformar su presencia digital.
          </p>
        </div>

        {/* Grilla 2 columnas */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
          {PROJECTS.map((p, i) => {
            const isActive = hovered === i;

            return (
              <div
                key={p.slug}
                className="relative w-full"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <article
                  className={`group relative flex h-full w-full flex-col overflow-hidden text-white transition-[border-color,transform,box-shadow] duration-300 ease-out ${
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
                  {/* Marco interno */}
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

                  {/* Marcas de esquina */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-0 top-0 h-0 w-0 border-b-[10px] border-l-[10px] border-solid border-white/70 border-b-transparent border-r-transparent"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-0 top-0 h-0 w-0 border-b-[10px] border-r-[10px] border-solid border-white/70 border-b-transparent border-l-transparent"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute bottom-0 left-0 h-0 w-0 border-l-[10px] border-t-[10px] border-solid border-white/70 border-t-transparent border-r-transparent"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute bottom-0 right-0 h-0 w-0 border-r-[10px] border-t-[10px] border-solid border-white/70 border-t-transparent border-l-transparent"
                  />

                  {/* Línea de estado superior */}
                  <span
                    aria-hidden
                    className={`absolute left-0 top-0 h-[2px] bg-white transition-[width] duration-500 ease-out ${
                      isActive ? 'w-full shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'w-0'
                    }`}
                  />

                  <div className="relative flex h-full flex-col p-5 sm:p-6">
                    {/* Header: índice + categoría */}
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-mono text-[28px] font-bold leading-none tracking-tighter transition-colors duration-300 ${
                            isActive ? 'text-white/90' : 'text-white/20'
                          }`}
                          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)' }}
                        >
                          {p.index}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                          PRJ_{p.slug.toUpperCase()}
                        </span>
                      </div>
                      <span className="inline-block border border-white/30 bg-white/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                        {p.category}
                      </span>
                    </div>

                    {/* Frame de imagen */}
                    <div
                      className="relative mb-5 overflow-hidden border border-white/20"
                      style={{
                        clipPath:
                          'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)',
                      }}
                    >
                      <div className="relative aspect-[16/10] w-full bg-black">
                        <img
                          src={p.image}
                          alt={p.title}
                          loading="lazy"
                          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out ${
                            isActive ? 'scale-[1.04]' : 'scale-100'
                          }`}
                        />
                        {/* Overlay scanlines */}
                        <div
                          aria-hidden
                          className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay"
                          style={{
                            backgroundImage:
                              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.4) 2px, rgba(255,255,255,0.4) 3px)',
                          }}
                        />
                        {/* Esquinas HUD sobre la imagen */}
                        <span className="pointer-events-none absolute left-1.5 top-1.5 h-3 w-3 border-l border-t border-white/80" />
                        <span className="pointer-events-none absolute right-1.5 top-1.5 h-3 w-3 border-r border-t border-white/80" />
                        <span className="pointer-events-none absolute bottom-1.5 left-1.5 h-3 w-3 border-b border-l border-white/80" />
                        <span className="pointer-events-none absolute bottom-1.5 right-1.5 h-3 w-3 border-b border-r border-white/80" />
                        {/* Texto overlay */}
                        <span className="pointer-events-none absolute bottom-2 right-3 font-mono text-[9px] uppercase tracking-[0.3em] text-white/70">
                          REC ● {p.index}/06
                        </span>
                      </div>
                    </div>

                    {/* Título */}
                    <h3 className="font-mulish text-[22px] font-semibold leading-[1.1] tracking-tight text-white sm:text-[24px]">
                      <GlitchTitle text={p.title} active={isActive} />
                    </h3>

                    {/* Descripción */}
                    <p className="mt-3 font-inter text-[13.5px] leading-relaxed text-white/65 sm:text-[14px]">
                      {p.description}
                    </p>

                    {/* Footer: status + CTA */}
                    <div className="mt-6 flex items-center justify-between gap-4 pt-4">
                      <StatusBar active={isActive} />

                      <Link
                        to={`/caso-de-estudio/${p.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver caso de estudio de ${p.title}`}
                        className="group/cta inline-flex items-center gap-2 border border-white/40 bg-white/5 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.25em] text-white/80 transition-all duration-300 hover:border-white hover:bg-white/10 hover:text-white hover:shadow-[0_0_14px_rgba(255,255,255,0.25)]"
                      >
                        <span>Ver caso</span>
                        <span className="transition-transform duration-300 group-hover/cta:translate-x-1">
                          →
                        </span>
                      </Link>
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

export default CyberProjects;

export const PROJECTS_DATA = PROJECTS;
