
import { ExternalLink, Github } from 'lucide-react';
import mockupCalena from './assets/ProjectShowcase/calenacard.png';
import paginaLuMobile from './assets/ProjectShowcase/paginaLuMobile.png';
import mockuptr from './assets/ProjectShowcase/mockuptr.png';
import silande from './assets/ProjectShowcase/silande.png';
import silande1 from './assets/ProjectShowcase/silande1.png';
import logocannlabs1 from './assets/ProjectShowcase/Logocannlabs1.png';
import group18 from './assets/ProjectShowcase/Group 18.png';
import cardtr from './assets/ProjectShowcase/cardtr.png';
import cardmaxtech from './assets/ProjectShowcase/cardmaxtech.png';
import { useState, useEffect } from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { ScrollAnimate } from './ScrollAnimate';

interface ProjectShowcaseProps {
  lang: 'ES' | 'EN';
}

const ProjectShowcase = ({ lang }: ProjectShowcaseProps) => {
  const isMobile = useIsMobile();
  const [currentPage, setCurrentPage] = useState(1);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const projectsPerPage = 3;
  const projectsData = [
    {
      image: mockupCalena,
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      link: '#',
      github: '#',
    },
    {
      image: cardtr,
      tags: ['Diseño de Logo', 'Guía de Marca', 'Marketing'],
      link: '#',
      github: '#',
    },
    {
      image: silande1, // Usar silande1.png para la card 4
      tags: ['Branding', 'Diseño Web', 'Marketing'],
      link: '#',
      github: '#',
    },
    {
      image: logocannlabs1,
      tags: ['Diseño Mobile', 'Prototipado', 'Investigación de Usuarios'],
      link: '#',
      github: '#',
    },
    {
      image: cardmaxtech,
      tags: ['Branding', 'Diseño de Logo', 'Identidad Visual'],
      link: '#',
      github: '#',
    },
    {
      image: group18,
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
      link: '#',
      github: '#',
    },
  ];

  const categories = [
    'Web App',      // 1
    'Web Design',   // 2
    'Web Catalog',  // 3
    'Web Design',   // 4
    'Web Catalog',  // 5
    'Web Design',   // 6
  ];

  const projectCommon = [
    {
      title: 'Somos Calena',
      link: 'https://www.calena.la',
    },
    {
      title: 'Tony Ruiz Hair Studio',
      link: 'https://tonyruizhairstudio.com/',
    },
    {
      title: 'SILANDE',
      link: 'https://silandeargentina.com/',
    },
    {
      title: 'CannLabs',
      link: 'https://www.canadiannlabs.com', // Actualizado
    },
    {
      title: 'Maxtech Latam',
      link: 'https://www.maxtechlatam.com',
    },
    {
      title: 'Odontología Lucia Piccardo',
      link: 'https://lpodontologia.com/',
    },
  ];

  const descriptions = lang === 'ES'
    ? [
        'Web app para gestión de psicólogos y conexión con pacientes.',
        'Landing page + ecommerce para estudio de peluquería',
        'Catálogo online para empresa de productos industriales.',
        'Sitio web para empresa productora de extracto de yerba mate, stevia y té.',
        'Catálogo para importadora de insumos industriales.',
        'Landing page para consultorio odontológico',
      ]
    : [
        "Web app for psychologists' management and patient connection.",
        'Landing page + ecommerce for hair salon',
        'Online industrial products catalog',
        'Yerba mate, stevia, and tea extract manufacturer website',
        'Catalog for industrial supplies importer.',
        'Comprehensive dental services website',
      ];

  const projects = descriptions.map((description, i) => ({
    description,
    ...projectsData[i],
    category: categories[i],
    title: projectCommon[i].title,
    link: projectCommon[i].link,
  }));

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const handleFlip = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section id="projects" className="py-20 w-full overflow-x-hidden" style={{ backgroundColor: '#171619' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[24px] md:text-5xl font-onest font-bold text-white mb-6">
            {lang === 'ES' ? 'Proyectos ' : 'Featured '}
            <span className="text-[#895AF6]">{lang === 'ES' ? 'destacados' : 'Projects'}</span>
          </h2>
          <p className="text-[16px] md:text-xl text-gray-300 text-center font-manrope font-light">
            {lang === 'ES'
              ? 'Descubrí cómo ayudamos a startups y negocios a transformar su presencia digital'
              : `Discover how we've helped startups and different businesses transform their digital presence and achieve remarkable growth`}
          </p>
        </div>

        {/* Desktop: Grilla paginada de 3 en 3 con paginación */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.slice(0, 3).map((project, index) => (
              <div
                key={startIndex + index}
                className="group cyber-card rounded-xl overflow-hidden animate-fade-in transition-all duration-300 border border-white/5 relative h-96"
                style={{ animationDelay: `${index * 0.1}s`, perspective: '1200px' }}
              >
                {/* Flip Container */}
                <div className="flip-inner w-full h-full relative transition-transform duration-700" style={{ transformStyle: 'preserve-3d' }}>
                  {/* Front Side */}
                  <div className="flip-front absolute inset-0 w-full h-full z-10 bg-transparent" style={{ backfaceVisibility: 'hidden' }}>
                    <div className="absolute top-4 left-4 z-20">
                      <span className="text-white text-xs font-semibold px-3 py-1 rounded-full bg-[#4B267A]" style={{ fontSize: '0.75rem' }}>
                        {project.category}
                      </span>
                    </div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Back Side */}
                  <div className="flip-back absolute inset-0 w-full h-full flex flex-col items-center justify-center rounded-xl z-20" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent rounded-xl" />
                    <div className="flex flex-col items-center justify-center w-full h-full relative z-10">
                      <h3 className="text-2xl font-manrope font-bold text-white mb-6 text-center drop-shadow-lg capitalize">{project.title}</h3>
                      <p className="text-base text-white mb-6 text-center drop-shadow-lg">
                        {project.description}
                      </p>
                      <a
                        href={project.link}
                        className="w-12 h-12 bg-agaru-purple rounded-full flex items-center justify-center hover:bg-agaru-purple-light transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
                <style>{`
                  .group:hover .flip-inner {
                    transform: rotateY(180deg);
                  }
                  .flip-inner {
                    transform-style: preserve-3d;
                  }
                  .flip-front, .flip-back {
                    backface-visibility: hidden;
                  }
                  .flip-back {
                    transform: rotateY(180deg);
                  }
                `}</style>
              </div>
            ))}
          </div>
          {/* Paginación */}
          <div className="flex justify-center mt-8 gap-4 items-center">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className="focus:outline-none"
                aria-label={`Página ${i + 1}`}
              >
                <span
                  className={`block w-12 h-[4px] rounded-full transition-all duration-300 ${
                    currentPage === i + 1
                      ? 'bg-[#895AF6]'
                      : 'bg-[#895AF6]/30 hover:bg-[#895AF6]/50'
                  }`}
                ></span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: Flip Cards apiladas verticalmente */}
        <div className="md:hidden space-y-6">
          {projects.map((project, idx) => {
            const isFlipped = flippedCards.has(idx);
            return (
              <div
                key={project.title}
                className="w-full max-w-sm mx-auto"
                style={{ perspective: '1000px' }}
              >
                <div
                  className="relative h-96 cursor-pointer"
                  onClick={() => handleFlip(idx)}
                >
                  <div
                    className="relative w-full h-full transition-transform duration-700"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    }}
                  >
                    {/* Front Side - Imagen */}
                    <div
                      className="absolute inset-0 w-full h-full rounded-xl overflow-hidden"
                      style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                    >
                      <div className="relative w-full h-full">
                        <div className="absolute top-4 left-4 z-20">
                          <span className="text-white text-xs font-semibold px-3 py-1 rounded-full bg-[#4B267A]">
                            {project.category}
                          </span>
                        </div>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
                          <p className="text-white text-xs font-manrope text-center bg-black/50 px-3 py-1 rounded-full">
                            {lang === 'ES' ? 'Toca para ver más' : 'Tap to see more'}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Back Side - Información */}
                    <div
                      className="absolute inset-0 w-full h-full rounded-xl overflow-hidden"
                      style={{ 
                        backfaceVisibility: 'hidden', 
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      <div className="w-full h-full bg-[#262626] border border-[#895AF6]/30 rounded-xl p-6 flex flex-col items-center justify-center">
                        <h3 className="text-xl font-manrope font-bold text-white mb-4 text-center">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm font-manrope text-center mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        <a
                          href={project.link}
                          className="w-12 h-12 bg-[#895AF6] rounded-full flex items-center justify-center hover:bg-[#A37EFA] transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-6 h-6 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
