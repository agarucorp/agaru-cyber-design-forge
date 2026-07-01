import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { PROJECTS_DATA, type CaseStudyItem } from '@/data/projects';
import { SECTION_CONTAINER_CLASS } from '@/lib/sectionLayout';
import { getLocalizedProject, getStoredLang, t, type Lang } from '@/lib/i18n';
import CaseStudyRelated from '@/components/CaseStudyRelated';
import Footer from '@/components/Footer';

const StoryItemList = ({ items }: { items: CaseStudyItem[] }) => (
  <ul className="space-y-4">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3">
        <span aria-hidden className="mt-[0.6em] h-px w-3 shrink-0 bg-white/40" />
        <p className="font-manrope text-[15px] font-light leading-relaxed text-white/65 sm:text-[16px]">
          {item.label && <span className="font-normal text-white">{item.label}: </span>}
          {item.text}
        </p>
      </li>
    ))}
  </ul>
);

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  const [lang] = useState<Lang>(() => getStoredLang());
  const rawProject = PROJECTS_DATA.find((p) => p.slug === slug);
  const project = rawProject ? getLocalizedProject(rawProject, lang) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <p className="font-mono text-sm uppercase tracking-[0.25em] text-white/60">// ERROR_404</p>
          <h1 className="mt-3 font-onest text-3xl">{t('caseStudy', 'notFound', lang)}</h1>
          <Link
            to="/"
            className="mt-6 inline-block border border-white/40 px-4 py-2 font-mono text-xs uppercase tracking-[0.25em] text-white/80 hover:border-white hover:text-white"
          >
            {t('caseStudy', 'back', lang)}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${project.title} · ${t('caseStudy', 'caseStudyTitle', lang)} | AGARUCORP`}</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <div className="min-h-screen w-full bg-black text-white">
        {/* Barra superior */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
          <div className={`flex items-center justify-between py-4 ${SECTION_CONTAINER_CLASS}`}>
            <Link to="/" className="flex items-center">
              <img
                src="/newlogohorizontal.svg"
                alt="AGARUCORP"
                className="h-8 w-auto object-contain md:h-9"
              />
            </Link>
            <Link
              to="/#projects"
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white sm:text-[11px]"
            >
              {t('caseStudy', 'projects', lang)}
            </Link>
          </div>
        </header>

        {/* Mini hero */}
        <section
          className="px-4 py-14 sm:px-6 md:py-20"
          style={{ backgroundColor: project.heroColor }}
        >
          <div className={`${SECTION_CONTAINER_CLASS} text-left`}>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/55 sm:text-[11px]">
              // {project.category}
            </p>
            <h1 className="font-onest text-[clamp(1.75rem,4vw+0.5rem,2.5rem)] font-normal leading-[1.15] text-white">
              {project.title}
            </h1>
          </div>
        </section>

        {/* Meta + historia */}
        <section className="py-16 md:py-24">
          <div className={SECTION_CONTAINER_CLASS}>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-[220px_1fr] md:gap-16 lg:grid-cols-[260px_1fr] lg:gap-20">
              {/* Sidebar metadata */}
              <aside className="md:sticky md:top-28 md:self-start">
                <div className="space-y-8 border-t border-white/10 pt-6 md:border-t-0 md:pt-0">
                  {project.meta.map((item) => (
                    <div key={item.label}>
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 block font-manrope text-[15px] font-light text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-2 font-manrope text-[15px] font-light leading-snug text-white">
                          {item.value}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </aside>

              {/* Timeline narrativa */}
              <div className="relative">
                <div className="space-y-0">
                  {project.story.map((section, index) => {
                    const isLast = index === project.story.length - 1;
                    return (
                    <article
                      key={section.tag}
                      className={`relative md:pl-14 ${!isLast ? 'pb-12 md:pb-16' : ''}`}
                    >
                      {/* Segmento de línea: conecta este marcador con el siguiente */}
                      {!isLast && (
                        <span
                          aria-hidden
                          className="absolute left-[15px] top-8 bottom-0 hidden w-px bg-white/15 md:block"
                        />
                      )}

                      <div className="mb-4 flex items-center gap-4 md:mb-5 md:gap-0">
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center border border-white/30 bg-black font-mono text-[10px] uppercase tracking-[0.1em] text-white/70 md:absolute md:left-0 md:top-0">
                          {section.tag}
                        </span>
                        <h2 className="font-onest text-[22px] font-normal leading-[1.2] text-white sm:text-[26px]">
                          {section.title}
                        </h2>
                      </div>
                      {section.body && (
                        <div className="space-y-4 md:max-w-[640px]">
                          {section.body.split('\n\n').map((para, i) => (
                            <p
                              key={i}
                              className="font-manrope text-[15px] font-light leading-relaxed text-white/65 sm:text-[16px]"
                            >
                              {para}
                            </p>
                          ))}
                        </div>
                      )}

                      {section.items && (
                        <div className="md:max-w-[640px]">
                          <StoryItemList items={section.items} />
                        </div>
                      )}

                      {section.blocks && (
                        <div className="space-y-6 md:max-w-[640px]">
                          {section.blocks.map((block, i) => {
                            if (block.type === 'paragraph') {
                              return (
                                <p
                                  key={i}
                                  className="font-manrope text-[15px] font-light leading-relaxed text-white/65 sm:text-[16px]"
                                >
                                  {block.text}
                                </p>
                              );
                            }
                            if (block.type === 'list') {
                              return <StoryItemList key={i} items={block.items} />;
                            }
                            return (
                              <div key={i} className="space-y-3">
                                <h3 className="font-onest text-[17px] font-normal text-white sm:text-[18px]">
                                  {block.title}
                                </h3>
                                {block.intro && (
                                  <p className="font-manrope text-[15px] font-light leading-relaxed text-white/65 sm:text-[16px]">
                                    {block.intro}
                                  </p>
                                )}
                                {block.text && (
                                  <p className="font-manrope text-[15px] font-light leading-relaxed text-white/65 sm:text-[16px]">
                                    {block.text}
                                  </p>
                                )}
                                {block.items && <StoryItemList items={block.items} />}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <CaseStudyRelated currentSlug={project.slug} lang={lang} />
        <Footer lang={lang} />
      </div>
    </>
  );
};

export default CaseStudy;
