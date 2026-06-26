import React from 'react';

/**
 * Marquee horizontal infinito con logos de herramientas tech.
 * - Loop ultra fluido (duplicamos el track y animamos -50%).
 * - Bordes desvanecidos con mask-image (gradiente lineal a alpha 0).
 * - Logos en escala de grises con hover por opacidad.
 */

type Tool = { name: string; svg?: React.ReactNode; iconSrc?: string };

// SVGs simplificados (monocromáticos via currentColor). Logos oficiales en /public/banner.
const TOOLS: Tool[] = [
  {
    name: 'Figma',
    svg: (
      <svg viewBox="0 0 38 57" fill="currentColor" aria-hidden>
        <path d="M19 28.5a9.5 9.5 0 1 1 9.5 9.5A9.5 9.5 0 0 1 19 28.5Z" />
        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z" />
        <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19Z" />
        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z" />
        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z" />
      </svg>
    ),
  },
  {
    name: 'Illustrator',
    iconSrc: '/banner/illustrator.svg',
  },
  {
    name: 'Cursor',
    iconSrc: '/banner/cursor.svg',
  },
  {
    name: 'Claude',
    iconSrc: '/banner/claude.svg',
  },
  {
    name: 'Supabase',
    svg: (
      <svg viewBox="0 0 64 64" fill="currentColor" aria-hidden>
        <path d="M34 4 L8 36 H30 V60 L56 28 H34 Z" />
      </svg>
    ),
  },
  {
    name: 'Vercel',
    svg: (
      <svg viewBox="0 0 64 56" fill="currentColor" aria-hidden>
        <path d="M32 4 L62 52 H2 Z" />
      </svg>
    ),
  },
  {
    name: 'Shopify',
    iconSrc: '/banner/shopify.svg',
  },
];

const ICON_HOVER =
  'h-8 w-8 opacity-80 transition-opacity duration-300 group-hover:opacity-100';

const TechMarquee: React.FC = () => {
  // Duplicamos la lista para lograr el loop continuo sin "saltos".
  const items = [...TOOLS, ...TOOLS];

  return (
    <section
      aria-label="Herramientas que utilizamos"
      className="relative w-full overflow-hidden border-y border-white/5 bg-transparent py-6 md:py-8"
      style={{
        // Máscara de bordes desvanecidos (izq/der → alpha 0)
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0, #000 12%, #000 88%, transparent 100%)',
        maskImage:
          'linear-gradient(to right, transparent 0, #000 12%, #000 88%, transparent 100%)',
      }}
    >
      {/* Track */}
      <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-16 px-8">
        {items.map((tool, i) => (
          <div
            key={`${tool.name}-${i}`}
            className="group flex shrink-0 items-center gap-3"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center">
              {tool.iconSrc ? (
                <img
                  src={tool.iconSrc}
                  alt=""
                  aria-hidden
                  className={`${ICON_HOVER} object-contain`}
                />
              ) : (
                <span
                  className={`inline-flex items-center justify-center text-[#8C8C8C] ${ICON_HOVER} [&>svg]:h-full [&>svg]:w-full`}
                >
                  {tool.svg}
                </span>
              )}
            </span>
            <span className="font-mulish text-base font-medium tracking-wide whitespace-nowrap text-white/55 transition-colors duration-300 group-hover:text-[#B983FF]">
              {tool.name}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          section [class*="animate-[marquee"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default TechMarquee;
