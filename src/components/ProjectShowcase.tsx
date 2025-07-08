
import { ExternalLink, Github } from 'lucide-react';

interface ProjectShowcaseProps {
  lang: 'ES' | 'EN';
}

const ProjectShowcase = ({ lang }: ProjectShowcaseProps) => {
  const projects = lang === 'ES'
    ? [
        {
          title: 'Dashboard TechStartup',
          category: 'Diseño UX/UI',
          description: 'Dashboard SaaS moderno con analíticas avanzadas y gestión de usuarios.',
          image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop',
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

  return (
    <section id="projects" className="py-20 bg-cyber-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {lang === 'ES' ? 'Proyectos ' : 'Featured '}
            <span className="cyber-text-gradient">{lang === 'ES' ? 'Destacados' : 'Projects'}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {lang === 'ES'
              ? 'Descubrí cómo ayudamos a startups y pymes a transformar su presencia digital y lograr un crecimiento notable.'
              : `Discover how we've helped startups and small businesses transform their digital presence and achieve remarkable growth.`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cyber-card rounded-xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <a
                      href={project.link}
                      className="w-10 h-10 bg-agaru-purple rounded-full flex items-center justify-center hover:bg-agaru-purple-light transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.github}
                      className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="cyber-gradient text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-agaru-purple transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-cyber-grey text-gray-300 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-effect p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              {lang === 'ES' ? '¿Listo para crear algo increíble?' : 'Ready to Create Something Amazing?'}
            </h3>
            <p className="text-gray-300 mb-6">
              {lang === 'ES'
                ? 'Hablemos de tu proyecto y llevemos tu visión a la realidad con nuestra experiencia.'
                : `Let's discuss your project and bring your vision to life with our expertise.`}
            </p>
            <a
              href="#contact"
              className="cyber-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-agaru-purple/30 transition-all duration-300 inline-block"
            >
              {lang === 'ES' ? 'Comenzá tu proyecto' : 'Start Your Project'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
