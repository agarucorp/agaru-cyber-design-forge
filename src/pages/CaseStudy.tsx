import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PROJECTS_DATA } from '../components/CyberProjects';

/**
 * Página de caso de estudio. Mantiene la estética cyberpunk HUD.
 * Se abre en una pestaña nueva desde la grilla de proyectos.
 */
const CaseStudy: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-white/60">
            // ERROR_404
          </p>
          <h1 className="mt-3 font-mulish text-3xl">Caso de estudio no encontrado</h1>
          <Link
            to="/"
            className="mt-6 inline-block border border-white/40 px-4 py-2 font-mono text-xs uppercase tracking-[0.25em] text-white/80 hover:border-white hover:text-white"
          >
            ← Volver
          </Link>
        </div>
      </div>
    );
  }

  const panelClip =
    'polygon(28px 0, 100% 0, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0 100%, 0 28px)';

  return (
    <>
      <Helmet>
        <title>{`${project.title} · Caso de estudio | AGARUCORP`}</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <div className="relative min-h-screen w-full bg-black text-white">
        {/* Scanlines globales */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.08) 2px, rgba(255,255,255,0.08) 4px)',
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1100px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          {/* Breadcrumb / volver */}
          <div className="mb-10 flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-2 border border-white/30 bg-white/5 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.25em] text-white/70 transition-all hover:border-white hover:bg-white/10 hover:text-white"
            >
              <span>←</span>
              <span>Volver</span>
            </Link>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
              CASO {project.index}/06
            </span>
          </div>

          {/* Encabezado */}
          <div className="mb-8">
            <div className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
              <span className="h-px w-8 bg-white/40" />
              <span>// caso de estudio · {project.category}</span>
            </div>
            <h1 className="font-mulish text-[36px] font-normal leading-[1.05] text-white sm:text-[48px] md:text-[60px]">
              {project.title}
            </h1>
            <p className="mt-4 max-w-3xl font-inter text-[15px] leading-relaxed text-white/70 sm:text-[16px]">
              {project.description}
            </p>
          </div>

          {/* Panel principal con imagen */}
          <article
            className="relative w-full overflow-hidden border border-white/60"
            style={{
              background:
                'linear-gradient(135deg, rgba(6,6,6,0.96) 0%, rgba(14,14,14,0.92) 100%)',
              clipPath: panelClip,
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-[10px] border border-white/10"
              style={{ clipPath: panelClip }}
            />

            {/* Esquinas */}
            <span className="pointer-events-none absolute left-0 top-0 h-0 w-0 border-b-[10px] border-l-[10px] border-solid border-white/70 border-b-transparent border-r-transparent" />
            <span className="pointer-events-none absolute right-0 top-0 h-0 w-0 border-b-[10px] border-r-[10px] border-solid border-white/70 border-b-transparent border-l-transparent" />
            <span className="pointer-events-none absolute bottom-0 left-0 h-0 w-0 border-l-[10px] border-t-[10px] border-solid border-white/70 border-t-transparent border-r-transparent" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-0 w-0 border-r-[10px] border-t-[10px] border-solid border-white/70 border-t-transparent border-l-transparent" />

            <div className="relative p-6 sm:p-10">
              <div
                className="relative overflow-hidden border border-white/20"
                style={{
                  clipPath:
                    'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)',
                }}
              >
                <div className="relative aspect-[16/9] w-full bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.4) 2px, rgba(255,255,255,0.4) 3px)',
                    }}
                  />
                </div>
              </div>

              {/* Bloques de contenido placeholder */}
              <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
                {[
                  { label: 'Cliente', value: project.title },
                  { label: 'Categoría', value: project.category },
                  { label: 'Año', value: '2025' },
                ].map((meta) => (
                  <div key={meta.label} className="border-t border-white/15 pt-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                      {meta.label}
                    </p>
                    <p className="mt-2 font-mulish text-[18px] text-white">{meta.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 space-y-8">
                <section>
                  <h2 className="font-mulish text-[24px] font-semibold text-white sm:text-[28px]">
                    El desafío
                  </h2>
                  <p className="mt-3 font-inter text-[14.5px] leading-relaxed text-white/70">
                    Contenido del caso de estudio próximamente. Aquí se desarrollará el contexto
                    del cliente, el problema a resolver y los objetivos planteados al inicio del
                    proyecto.
                  </p>
                </section>

                <section>
                  <h2 className="font-mulish text-[24px] font-semibold text-white sm:text-[28px]">
                    El proceso
                  </h2>
                  <p className="mt-3 font-inter text-[14.5px] leading-relaxed text-white/70">
                    Investigación, definición de arquitectura de información, diseño visual,
                    desarrollo y testing. Cada etapa documentada con decisiones y aprendizajes.
                  </p>
                </section>

                <section>
                  <h2 className="font-mulish text-[24px] font-semibold text-white sm:text-[28px]">
                    Resultados
                  </h2>
                  <p className="mt-3 font-inter text-[14.5px] leading-relaxed text-white/70">
                    Métricas, impacto en el negocio y feedback del cliente final.
                  </p>
                </section>
              </div>
            </div>
          </article>

          <div className="mt-12 flex justify-center">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 border border-white/40 bg-white/5 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-white/80 transition-all hover:border-white hover:bg-white/10 hover:text-white hover:shadow-[0_0_14px_rgba(255,255,255,0.25)]"
            >
              <span>← Ver todos los proyectos</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
