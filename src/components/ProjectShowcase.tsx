
import { ExternalLink, Github } from 'lucide-react';
import mockupCalena from './assets/ProjectShowcase/calenacard.png';
import paginaLuMobile from './assets/ProjectShowcase/paginaLuMobile.png';
import mockuptr from './assets/ProjectShowcase/mockuptr.png';
import silande from './assets/ProjectShowcase/silande.png';
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
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
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
      image: '/frzm.png',
      tags: ['Landing page', 'Diseño Web', 'Portfolio'],
      link: 'https://frzm.site',
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
    'E-commerce',   // 2
    'Landing page', // 3
    'Website',      // 4
    'Web Catalog',  // 5
    'Landing page', // 6
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
      title: 'Portfolio personal',
      titleEN: 'Personal portfolio',
      titleES: 'Portfolio personal',
      link: 'https://frzm.site',
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
        'Web app para gestión de psicólogos y conexión con pacientes',
        'Landing page + ecommerce para estudio de peluquería',
        'Portfolio de diseño futurista',
        'Sitio web para empresa productora de extracto de yerba mate, stevia y té',
        'Catálogo para importadora de insumos industriales',
        'Landing page para consultorio odontológico',
      ]
    : [
        "Web app for psychologists' management and patient connection",
        'Landing page + ecommerce for hair salon',
        'Futuristic design portfolio',
        'Yerba mate, stevia, and tea extract manufacturer website',
        'Catalog for industrial supplies importer',
        'Comprehensive dental services website',
      ];

  const projects = descriptions.map((description, i) => {
    const common = projectCommon[i] as { title: string; titleEN?: string; titleES?: string; link: string };
    return {
      description,
      ...projectsData[i],
      category: categories[i],
      title: common.titleEN ? (lang === 'EN' ? common.titleEN : common.titleES) : common.title,
      link: common.link,
    };
  });

  // Auto-scroll carousel para mobile
  useEffect(() => {
    if (!isMobile || projects.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile, projects.length]);

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

  // Touch handlers para scroll manual
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

    if (isLeftSwipe && currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section id="projects" className="py-20 w-full overflow-x-hidden" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <ScrollAnimate threshold={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-[40px] md:text-5xl font-onest font-black text-white mb-6">
              {lang === 'ES' ? 'Proyectos' : 'Projects'}
            </h2>
            <p className="text-[16px] md:text-[16px] text-gray-300 text-center font-manrope font-light">
              {lang === 'ES'
                ? 'Descubrí cómo ayudamos a startups y negocios a transformar su presencia digital'
                : `Discover how we've helped startups and different businesses transform their digital presence`}
            </p>
          </div>
        </ScrollAnimate>

        {/* Desktop: Grilla de 3 columnas con todos los proyectos */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimate key={index} delay={index * 100} threshold={0.15}>
                <div
                  className="group cyber-card rounded-xl overflow-hidden transition-all duration-300 border border-white/5 relative h-96"
                  style={{ perspective: '1200px' }}
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
              </ScrollAnimate>
            ))}
          </div>
        </div>

        {/* Mobile: Carrusel horizontal con scroll automático */}
        <div 
          className="md:hidden relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, idx) => {
              const isFlipped = flippedCards.has(idx);
              return (
                <div
                  key={project.title}
                  className="w-full flex-shrink-0 px-2"
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
      </div>
    </section>
  );
};

export default ProjectShowcase;
