import { HeroTypewriter } from './HeroTypewriter';
import TechMarquee from './TechMarquee';
import { SECTION_CONTAINER_CLASS } from '@/lib/sectionLayout';

// SVG fractal noise as data URI for the grain overlay (no extra HTTP request).
const NOISE_SVG =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.85'/></svg>\")";

const Hero = ({ lang = 'ES' }: { lang?: 'ES' | 'EN' }) => {
  return (
    <div
      className="relative w-full overflow-x-clip overflow-y-visible max-md:flex max-md:min-h-[100svh] max-md:flex-col"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Cyber radial gradient background (violet + deep blue) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 35%, rgba(180,160,220,0.45) 0%, rgba(137,90,246,0.55) 18%, rgba(91,40,200,0.55) 38%, rgba(40,15,120,0.55) 58%, rgba(8,4,30,0.85) 78%, #000000 100%), radial-gradient(80% 60% at 50% 100%, rgba(137,90,246,0.35) 0%, rgba(0,0,0,0) 60%)",
        }}
      />
      {/* Grain / noise overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 mix-blend-overlay opacity-[0.22]"
        style={{
          backgroundImage: NOISE_SVG,
          backgroundSize: '240px 240px',
        }}
      />
      {/* Soft vignette to deepen the corners */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 50%, transparent 55%, rgba(0,0,0,0.85) 100%)',
        }}
      />

      <div
        className={`relative z-10 flex min-w-0 max-md:flex-1 max-md:flex-col pb-10 pt-[calc(1rem+72px+3rem)] md:pb-14 md:pt-[calc(1rem+82.8px+7rem)] ${SECTION_CONTAINER_CLASS}`}
      >
        <div className="flex w-full min-w-0 flex-col items-start gap-4 text-left max-md:flex-1 max-md:justify-center">
          <p className="inline-block border border-white/30 bg-white/5 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-white/65 sm:text-[10px] sm:tracking-[0.2em]">
            DESIGN & SOFTWARE STUDIO
          </p>
          <HeroTypewriter lang={lang} className="mb-0" />
        </div>
      </div>

      <div className="relative z-10 max-md:mt-auto max-md:shrink-0">
        <TechMarquee />
      </div>
    </div>
  );
};

export default Hero;
