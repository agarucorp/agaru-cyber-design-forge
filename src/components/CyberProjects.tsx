import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SECTION_CONTAINER_CLASS } from '@/lib/sectionLayout';
import { PROJECTS_DATA } from '@/data/projects';
import { useIsMobile } from '@/hooks/use-mobile';
import { ScrollAnimate } from './ScrollAnimate';

const PROJECTS = PROJECTS_DATA;

const FlipCardStyles = () => (
  <style>{`
    .project-flip-card:hover .project-flip-inner {
      transform: rotateY(180deg);
    }
    .project-flip-inner {
      transform-style: preserve-3d;
    }
    .project-flip-front,
    .project-flip-back {
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
    }
    .project-flip-back {
      transform: rotateY(180deg);
    }
  `}</style>
);

const CyberProjects = () => {
  const isMobile = useIsMobile();
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    if (!isMobile || PROJECTS.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile]);

  const handleFlip = (index: number) => {
    setFlippedCards((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < PROJECTS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const renderCardFront = (project: (typeof PROJECTS)[number]) => (
    <div className="project-flip-front absolute inset-0 z-10 h-full w-full bg-transparent">
      <div className="absolute left-4 top-4 z-20">
        <span className="rounded-full bg-[#4B267A] px-3 py-1 text-xs font-semibold text-white">
          {project.category}
        </span>
      </div>
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </div>
  );

  const renderCardBack = (project: (typeof PROJECTS)[number]) => (
    <div className="project-flip-back absolute inset-0 z-20 flex h-full w-full flex-col items-center justify-center rounded-xl bg-[#262626] p-6">
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center">
        <h3 className="mb-4 font-onest text-xl font-normal text-white sm:text-2xl">
          {project.title}
        </h3>
        <p className="mb-6 max-w-[280px] font-manrope text-sm font-light leading-relaxed text-gray-300">
          {project.cardDescription}
        </p>
        <Link
          to={`/caso-de-estudio/${project.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-white/40 bg-white/5 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.25em] text-white/80 transition-all duration-300 hover:border-white hover:bg-white/10 hover:text-white"
          onClick={(e) => e.stopPropagation()}
        >
          Ver caso →
        </Link>
      </div>
    </div>
  );

  return (
    <section
      id="projects"
      aria-label="Proyectos"
      className="relative w-full bg-black py-20 md:py-28"
    >
      <div className={SECTION_CONTAINER_CLASS}>
        <div className="mb-12 md:mb-16">
          <div className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
            <span className="h-px w-8 bg-white/40" />
            <span>// CASES</span>
          </div>
          <h2 className="font-mulish text-[34px] font-normal leading-[1.05] text-white sm:text-[44px] md:text-[56px]">
            Proyectos
          </h2>
        </div>

        {/* Desktop: flip al hover */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, index) => (
              <ScrollAnimate key={project.slug} delay={index * 100} threshold={0.15}>
                <div
                  className="project-flip-card group relative h-96 overflow-hidden rounded-xl border border-white/5 transition-all duration-300"
                  style={{ perspective: '1200px' }}
                >
                  <div className="project-flip-inner relative h-full w-full transition-transform duration-700">
                    {renderCardFront(project)}
                    {renderCardBack(project)}
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>

        {/* Mobile: carrusel + tap para flip */}
        <div
          className="relative overflow-hidden md:hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {PROJECTS.map((project, index) => {
              const isFlipped = flippedCards.has(index);

              return (
                <div
                  key={project.slug}
                  className="w-full flex-shrink-0 px-1"
                  style={{ perspective: '1000px' }}
                >
                  <div
                    className="relative h-96 cursor-pointer"
                    onClick={() => handleFlip(index)}
                  >
                    <div
                      className="relative h-full w-full transition-transform duration-700"
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                      }}
                    >
                      <div className="absolute inset-0 overflow-hidden rounded-xl">
                        {renderCardFront(project)}
                        <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2">
                          <p className="rounded-full bg-black/50 px-3 py-1 text-center font-manrope text-xs text-white">
                            Toca para ver más
                          </p>
                        </div>
                      </div>
                      {renderCardBack(project)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <FlipCardStyles />
    </section>
  );
};

export default CyberProjects;
