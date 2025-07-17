
import { ExternalLink, Github } from 'lucide-react';
import mockupCalena from './assets/ProcessIcons/mockupcalena.png';
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
  const projects = lang === 'ES'
    ? [
      {
        title: 'Somos Calena',
        category: 'Web App',
        description: 'Dashboard SaaS moderno con analíticas avanzadas y gestión de usuarios.',
        image: mockupCalena,
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        link: '#',
        github: '#'
      },
      {
        title: 'Plataforma E-Commerce',
        category: 'Desarrollo Web',
        description: 'Solución e-commerce full-stack con integración de pagos.',
        image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop',
        tags: ['Next.js', 'Stripe', 'PostgreSQL'],
        link: '#',
        github: '#'
      },
      {
        title: 'Sistema de Identidad de Marca',
        category: 'Branding',
        description: 'Identidad de marca completa para fintech, incluyendo logo y manual de marca.',
        image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop',
        tags: ['Diseño de Logo', 'Guía de Marca', 'Marketing'],
        link: '#',
        github: '#'
      },
      {
        title: 'Sitio Agencia Digital',
        category: 'Full Package',
        description: 'Rediseño web completo con branding y estrategia de marketing.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
        tags: ['Branding', 'Diseño Web', 'Marketing'],
        link: '#',
        github: '#'
      },
      {
        title: 'Diseño App Móvil',
        category: 'Diseño UX/UI',
        description: 'Diseño intuitivo de app móvil para plataforma de salud y bienestar.',
        image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
        tags: ['Diseño Mobile', 'Prototipado', 'Investigación de Usuarios'],
        link: '#',
        github: '#'
      },
      {
        title: 'Campaña de Marketing',
        category: 'Estrategia de Marketing',
        description: 'Estrategia digital integral que aumentó el ROI un 300%.',
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop',
        tags: ['Estrategia', 'Analítica', 'Marketing de Contenidos'],
        link: '#',
        github: '#'
      }
    ]
    : [
      {
        title: 'TechStartup Dashboard',
        category: 'UX/UI Design',
        description: 'Modern SaaS dashboard with advanced analytics and user management.',
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop',
        tags: ['React', 'TypeScript', 'Tailwind CSS'],
        link: '#',
        github: '#'
      },
      {
        title: 'E-Commerce Platform',
        category: 'Web Development',
        description: 'Full-stack e-commerce solution with payment integration.',
        image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop',
        tags: ['Next.js', 'Stripe', 'PostgreSQL'],
        link: '#',
        github: '#'
      },
      {
        title: 'Brand Identity System',
        category: 'Branding',
        description: 'Complete brand identity for a fintech startup including logo and guidelines.',
        image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop',
        tags: ['Logo Design', 'Brand Guidelines', 'Marketing'],
        link: '#',
        github: '#'
      },
      {
        title: 'Digital Agency Website',
        category: 'Full Package',
        description: 'Complete website redesign with branding and marketing strategy.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
        tags: ['Branding', 'Web Design', 'Marketing'],
        link: '#',
        github: '#'
      },
      {
        title: 'Mobile App Design',
        category: 'UX/UI Design',
        description: 'Intuitive mobile app design for a health and wellness platform.',
        image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
        tags: ['Mobile Design', 'Prototyping', 'User Research'],
        link: '#',
        github: '#'
      },
      {
        title: 'Marketing Campaign',
        category: 'Marketing Strategy',
        description: 'Comprehensive digital marketing strategy that increased ROI by 300%.',
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop',
        tags: ['Strategy', 'Analytics', 'Content Marketing'],
        link: '#',
        github: '#'
      }
    ];

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
            <span className="bg-gradient-to-r from-[#895AF6] via-[#B983FF] to-[#4DE3FF] bg-clip-text text-transparent drop-shadow-[0_0_16px_#895AF6]">{lang === 'ES' ? 'Destacados' : 'Projects'}</span>
          </h2>
          <p className="text-xl text-gray-300 whitespace-nowrap">
            {lang === 'ES'
              ? 'Descubrí cómo ayudamos a startups y negocios a transformar su presencia digital'
              : `Discover how we've helped startups and small businesses transform their digital presence and achieve remarkable growth.`}
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
          <div className="flex justify-center mt-8 gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-3 h-3 rounded-full border transition-colors duration-200 ${currentPage === i + 1 ? 'bg-agaru-purple border-agaru-purple' : 'bg-cyber-grey border-gray-600'}`}
                aria-label={`Página ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile: carousel slider */}
        <div className="block md:hidden">
          <div className="flex justify-center">
            <div
              className="group cyber-card rounded-xl overflow-hidden animate-fade-in transition-all duration-300 w-full max-w-xs border border-white/5"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={projects[carouselIndex].image}
                  alt={projects[carouselIndex].title}
                  className="w-full h-48 object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <a
                      href={projects[carouselIndex].link}
                      className="w-10 h-10 bg-agaru-purple rounded-full flex items-center justify-center hover:bg-agaru-purple-light transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={projects[carouselIndex].github}
                      className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-white text-xs font-semibold px-3 py-1 rounded-full" style={{ background: '#4B267A' }}>
                    {projects[carouselIndex].category}
                  </span>
                </div>
              </div>
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-agaru-purple transition-colors duration-300">
                  {projects[carouselIndex].title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {projects[carouselIndex].description}
                </p>
                {/* Tags eliminados en mobile */}
              </div>
            </div>
          </div>
          {/* Indicadores del carousel */}
          <div className="flex justify-center mt-4 gap-2">
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
      </div>
    </section>
  );
};

export default ProjectShowcase;
