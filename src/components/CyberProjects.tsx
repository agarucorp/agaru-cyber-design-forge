import { useState } from 'react';
import { SECTION_CONTAINER_CLASS } from '@/lib/sectionLayout';
import { PROJECTS_DATA, type ProjectCaseStudy } from '@/data/projects';
import { getLocalizedProject, t, type Lang } from '@/lib/i18n';
import { ScrollAnimate } from './ScrollAnimate';
import CyberButton from './CyberButton';

const PROJECTS = PROJECTS_DATA;

type CyberProjectsProps = {
  lang: Lang;
};

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

const CyberProjects = ({ lang }: CyberProjectsProps) => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const localizedProjects = PROJECTS.map((p) => getLocalizedProject(p, lang));

  const handleFlip = (index: number) => {
    setFlippedCards((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const renderCardFront = (project: ProjectCaseStudy) => (
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

  const renderCardBack = (project: ProjectCaseStudy) => (
    <div className="project-flip-back absolute inset-0 z-20 flex h-full w-full flex-col items-center justify-center rounded-xl bg-[#262626] p-6">
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-center">
        <h3 className="mb-4 font-onest text-xl font-normal text-white sm:text-2xl">
          {project.title}
        </h3>
        <p className="mb-6 max-w-[280px] font-manrope text-sm font-light leading-relaxed text-gray-300">
          {project.cardDescription}
        </p>
        <CyberButton
          href={`/caso-de-estudio/${project.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4"
          onClick={(e) => e.stopPropagation()}
        >
          {t('projects', 'viewCase', lang)} →
        </CyberButton>
      </div>
    </div>
  );

  return (
    <section
      id="projects"
      aria-label={t('projects', 'title', lang)}
      className="relative w-full bg-black py-20 md:py-28"
    >
      <div className={SECTION_CONTAINER_CLASS}>
        <div className="mb-12 md:mb-16">
          <div className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
            <span className="h-px w-8 bg-white/40" />
            <span>// CASES</span>
          </div>
          <h2 className="font-mulish text-[34px] font-normal leading-[1.05] text-white sm:text-[44px] md:text-[56px]">
            {t('projects', 'title', lang)}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {localizedProjects.map((project, index) => {
            const isFlipped = flippedCards.has(index);

            return (
              <ScrollAnimate key={project.slug} delay={index * 100} threshold={0.15}>
                {/* Desktop: flip al hover */}
                <div
                  className="project-flip-card group relative hidden h-96 overflow-hidden rounded-xl border border-white/5 transition-all duration-300 md:block"
                  style={{ perspective: '1200px' }}
                >
                  <div className="project-flip-inner relative h-full w-full transition-transform duration-700">
                    {renderCardFront(project)}
                    {renderCardBack(project)}
                  </div>
                </div>

                {/* Mobile: stack vertical + tap para flip */}
                <div
                  className="relative h-96 cursor-pointer overflow-hidden rounded-xl border border-white/5 md:hidden"
                  style={{ perspective: '1000px' }}
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
                          {t('projects', 'tapMore', lang)}
                        </p>
                      </div>
                    </div>
                    {renderCardBack(project)}
                  </div>
                </div>
              </ScrollAnimate>
            );
          })}
        </div>
      </div>

      <FlipCardStyles />
    </section>
  );
};

export default CyberProjects;
