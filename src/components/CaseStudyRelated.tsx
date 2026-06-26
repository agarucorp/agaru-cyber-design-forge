import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '@/data/projects';
import { SECTION_CONTAINER_CLASS } from '@/lib/sectionLayout';

type CaseStudyRelatedProps = {
  currentSlug: string;
};

const CaseStudyRelated = ({ currentSlug }: CaseStudyRelatedProps) => {
  const related = PROJECTS_DATA.filter((p) => p.slug !== currentSlug).slice(0, 4);

  const panelClip =
    'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)';

  return (
    <section className="border-t border-white/10 bg-black py-16 md:py-24">
      <div className={SECTION_CONTAINER_CLASS}>
        <div className="mb-10 md:mb-14">
          <div className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-white/40">
            <span className="h-px w-8 bg-white/40" />
            <span>// MORE CASES</span>
          </div>
          <h2 className="font-mulish text-[28px] font-normal leading-[1.05] text-white sm:text-[36px] md:text-[44px]">
            Otros proyectos
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((project) => (
            <Link
              key={project.slug}
              to={`/caso-de-estudio/${project.slug}`}
              className="group block overflow-hidden border border-white/40 transition-all duration-300 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.12)]"
              style={{
                background:
                  'linear-gradient(135deg, rgba(6,6,6,0.96) 0%, rgba(14,14,14,0.92) 100%)',
                clipPath: panelClip,
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
                  {project.category}
                </p>
                <h3 className="mt-2 font-onest text-[17px] font-normal leading-snug text-white">
                  {project.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 transition-colors group-hover:text-white">
                  Ver caso <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyRelated;
