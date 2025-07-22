
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import mockupCalena from './assets/ProcessIcons/mockupcalena.png';
import paginaLuMobile from './assets/ProjectShowcase/paginaLuMobile.png';
import { useState, useEffect } from 'react';
import { useIsMobile } from '../hooks/use-mobile';

interface ProjectShowcaseProps {
  lang: 'ES' | 'EN';
}

const ProjectShowcase = ({ lang }: ProjectShowcaseProps) => {
  const isMobile = useIsMobile();
  const [currentPage, setCurrentPage] = useState(1);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const projectsPerPage = 3;
  const projectsData = [
    {
      image: mockupCalena,
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      link: '#',
      github: '#',
    },
    {
      image: paginaLuMobile,
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
      link: '#',
      github: '#',
    },
    {
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop',
      tags: ['Diseño de Logo', 'Guía de Marca', 'Marketing'],
      link: '#',
      github: '#',
    },
    {
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
      tags: ['Branding', 'Diseño Web', 'Marketing'],
      link: '#',
      github: '#',
    },
    {
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
      tags: ['Diseño Mobile', 'Prototipado', 'Investigación de Usuarios'],
      link: '#',
      github: '#',
    },
    {
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop',
      tags: ['Estrategia', 'Analítica', 'Marketing de Contenidos'],
      link: '#',
      github: '#',
    },
  ];

  const categories = [
    'Web App',
    'Landing Page',
    'Landing Page',
    'Full Package',
    'Diseño UX/UI',
    'Estrategia de Marketing',
  ];

  const projectCommon = [
    {
      title: 'Somos Calena',
      link: 'https://terapeutas.somoscalena.com/',
    },
    {
      title: 'Odontología Lucia Piccardo',
      link: 'https://lpodontologia.com/',
    },
    {
      title: 'Tony Ruiz Hair Studio',
      link: 'https://tonyruizhairstudio.com/',
    },
    {
      title: 'Sitio Agencia Digital',
      link: '#',
    },
    {
      title: 'Diseño App Móvil',
      link: '#',
    },
    {
      title: 'Campaña de Marketing',
      link: '#',
    },
  ];

  const projects = (lang === 'ES'
    ? [
        {
          description: 'Web app para gestión de psicólogos y conexión con pacientes.',
        },
        {
          description: 'Servicios odontológicos integrales.',
        },
        {
          description: 'Especialistas en coloración y alisados.',
        },
        {
          description: 'Rediseño web completo con branding y estrategia de marketing.',
        },
        {
          description: 'Diseño intuitivo de app móvil para plataforma de salud y bienestar.',
        },
        {
          description: 'Estrategia digital integral que aumentó el ROI un 300%.',
        },
      ]
    : [
        {
          description: 
            "Web app for psychologists' management and patient connection.",
        },
        {
          description: 'Comprehensive dental services.',
        },
        {
          description: 'Specialists in coloring and smoothing.',
        },
        {
          description: 'Complete website redesign with branding and marketing strategy.',
        },
        {
          description: 'Intuitive mobile app design for a health and wellness platform.',
        },
        {
          description: 'Comprehensive digital marketing strategy that increased ROI by 300%.',
        },
      ]
  ).map((proj, i) => ({ ...proj, ...projectsData[i], category: categories[i], title: projectCommon[i].title, link: projectCommon[i].link }));

  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  // Carousel automático para mobile
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile, projects.length]);

  return (
    <section id="projects" className="py-20 bg-cyber-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {lang === 'ES' ? 'Proyectos ' : 'Featured '}
            <span className="bg-gradient-to-r from-[#895AF6] via-[#B983FF] to-[#4DE3FF] bg-clip-text text-transparent">{lang === 'ES' ? 'Destacados' : 'Projects'}</span>
          </h2>
          <p className="text-xl text-gray-300 text-center">
            {lang === 'ES'
              ? 'Descubrí cómo ayudamos a startups y negocios a transformar su presencia digital'
              : `Discover how we've helped startups and different businesses transform their digital presence and achieve remarkable growth`}
          </p>
        </div>

        {/* Web/Desktop: paginación */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
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
                    {/* Título eliminado del frente */}
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
                      <h3 className="text-2xl font-bold text-white mb-6 text-center drop-shadow-lg">{project.title}</h3>
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
          <div className="flex justify-center mt-8 gap-0.5 items-center">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={`w-6 h-6 flex items-center justify-center rounded-full border border-gray-600 bg-cyber-grey text-gray-300 hover:bg-agaru-purple/20 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-xs`}
              aria-label="Anterior"
            >
              <ChevronLeft className="w-3 h-3" />
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-6 h-6 flex items-center justify-center rounded-full border font-bold transition-all duration-200 text-xs
                  ${currentPage === i + 1
                    ? 'border-[#895AF6] bg-gradient-to-r from-[#895AF6] via-[#B983FF] to-[#4DE3FF] text-white shadow-md'
                    : 'border-gray-600 bg-cyber-grey text-gray-300 hover:bg-gradient-to-r hover:from-[#895AF6] hover:via-[#B983FF] hover:to-[#4DE3FF] hover:text-white'}
                `}
                aria-label={`Página ${i + 1}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className={`w-6 h-6 flex items-center justify-center rounded-full border border-gray-600 bg-cyber-grey text-gray-300 hover:bg-agaru-purple/20 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-xs`}
              aria-label="Siguiente"
            >
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Mobile: Carrusel automático con fade */}
        <div className="md:hidden flex justify-center items-center relative min-h-[420px]">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`absolute left-0 right-0 transition-opacity duration-700 ease-in-out ${carouselIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
            >
              <div className="group cyber-card rounded-xl overflow-hidden border border-white/5 relative h-[420px] w-[90vw] max-w-xs mx-auto flex flex-col">
                <div className="w-full h-48 bg-gray-900 flex items-center justify-center overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col items-center justify-center p-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#4B267A] text-white mb-2" style={{ fontSize: '0.75rem' }}>{project.category}</span>
                  <h3 className="text-lg font-bold text-white mb-2 text-center drop-shadow-lg">{project.title}</h3>
                  <p className="text-base text-white mb-4 text-center drop-shadow-lg">{project.description}</p>
                  <a href={project.link} className="w-12 h-12 bg-agaru-purple rounded-full flex items-center justify-center hover:bg-agaru-purple-light transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Indicadores del carousel solo en mobile */}
        <div className="md:hidden flex justify-center mt-4 gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCarouselIndex(i)}
              className={`w-3 h-3 rounded-full border transition-colors duration-200 ${carouselIndex === i ? 'bg-agaru-purple border-agaru-purple' : 'bg-cyber-grey border-gray-600'}`}
              aria-label={`Proyecto ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
