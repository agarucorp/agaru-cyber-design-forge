import React from 'react';

/**
 * Marquee horizontal infinito con logos de herramientas tech.
 * - Loop ultra fluido (duplicamos el track y animamos -50%).
 * - Bordes desvanecidos con mask-image (gradiente lineal a alpha 0).
 * - Logos monocromáticos (currentColor) que se iluminan en hover.
 */

type Tool = { name: string; svg: React.ReactNode };

// SVGs simplificados (monocromáticos via currentColor). El usuario puede reemplazarlos por los oficiales.
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
    svg: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="4" aria-hidden>
        <rect x="4" y="4" width="56" height="56" rx="10" />
        <path d="M20 44 L26 22 L32 44 M22 37 H30" stroke="currentColor" strokeWidth="3" fill="none" />
        <circle cx="42" cy="24" r="2.5" fill="currentColor" />
        <path d="M42 30 V44" strokeWidth="3" />
      </svg>
    ),
  },
  {
    name: 'Cursor',
    svg: (
      <svg viewBox="0 0 64 64" fill="currentColor" aria-hidden>
        <path d="M14 6 L52 32 L34 36 L26 56 Z" />
      </svg>
    ),
  },
  {
    name: 'Claude',
    svg: (
      <svg viewBox="0 0 64 64" fill="currentColor" aria-hidden>
        <path d="M20 12 L28 12 L40 52 L32 52 L29.5 44 L18.5 44 L16 52 L8 52 Z M20.5 38 H27.5 L24 26 Z" />
        <path d="M44 12 L52 12 L52 52 L44 52 Z" />
      </svg>
    ),
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
    svg: (
      <svg viewBox="0 0 64 64" fill="currentColor" aria-hidden>
        <path d="M46 14c-1-3-3-5-6-5-1-2-3-4-6-4-5 0-8 6-9 12-3 1-5 2-5 2L14 56l30 4 8-42s-4-2-6-4ZM34 9c1 0 2 1 3 2-2 0-4 1-6 2 1-2 2-4 3-4Zm-2 12c-3 0-5 2-5 4 0 3 3 4 5 5 2 1 3 2 3 4 0 1-1 3-3 3-3 0-5-2-5-2l-2 7s2 2 7 2c6 0 10-3 10-9 0-5-5-6-7-8-1-1-2-2-2-3 0-1 1-2 3-2 2 0 4 1 4 1l2-6s-2-2-6-2Z" />
      </svg>
    ),
  },
];

const TechMarquee: React.FC = () => {
  // Duplicamos la lista para lograr el loop continuo sin "saltos".
  const items = [...TOOLS, ...TOOLS];

  return (
    <section
      aria-label="Herramientas que utilizamos"
      className="relative w-full overflow-hidden border-y border-white/5 bg-black/60 py-8"
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
            className="group flex shrink-0 items-center gap-3 text-white/55 transition-colors duration-300 hover:text-[#B983FF]"
          >
            <span className="h-8 w-8 [&>svg]:h-8 [&>svg]:w-8 transition-[filter,transform] duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(185,131,255,0.8)]">
              {tool.svg}
            </span>
            <span className="font-mulish text-base font-medium tracking-wide whitespace-nowrap">
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
