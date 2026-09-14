import TechMarquee from './TechMarquee';
import { SECTION_CONTAINER_CLASS } from '@/lib/sectionLayout';

const HERO_HEADLINE = {
  ES: 'Software a medida para negocios y equipos que necesiten ordenar, automatizar o escalar su operación.',
  EN: 'Custom software for businesses and teams that need to organize, automate, or scale their operations.',
} as const;

const Hero = ({ lang = 'ES' }: { lang?: 'ES' | 'EN' }) => {
  return (
    <div className="relative flex min-h-[100vh] w-full flex-col overflow-x-clip overflow-y-visible bg-transparent supports-[height:100svh]:min-h-[100svh] md:block md:min-h-0">
      {/* Reserva la navbar fija para centrar el hero en el área visible (mobile). */}
      <div className="pointer-events-none h-[calc(1rem+72px)] shrink-0 md:hidden" aria-hidden />
      <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-center py-10 md:block md:flex-none md:py-0 md:pb-14 md:pt-[calc(1rem+82.8px+7rem)]">
        <div className={SECTION_CONTAINER_CLASS}>
          <div className="flex w-full min-w-0 flex-col items-start gap-4 text-left">
            <p className="inline-block border border-white/30 bg-white/5 px-2.5 py-1 font-manrope text-[9px] uppercase tracking-[0.18em] text-white/65 sm:text-[10px] sm:tracking-[0.2em]">
              DESIGN & SOFTWARE STUDIO
            </p>
            <h1 className="mb-0 w-full min-w-0 max-w-full font-onest text-[clamp(1.625rem,5vw+0.75rem,3.1875rem)] font-normal leading-[1.2] text-white md:text-[clamp(1.375rem,5vw+0.5rem,2.9375rem)]">
              {HERO_HEADLINE[lang]}
            </h1>
          </div>
        </div>

        <div className="relative mt-8 w-full md:mt-10">
          <TechMarquee />
        </div>
      </div>
    </div>
  );
};

export default Hero;
