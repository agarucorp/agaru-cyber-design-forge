
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  lang: 'ES' | 'EN';
}

const Hero = ({ lang }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 cyber-gradient rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-agaru-purple-dark rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">

          {/* Hero Title */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {lang === 'ES' ? (
              <>
                Diseño Web &{' '}
                <span className="cyber-text-gradient">Estrategia de Marca</span>
              </>
            ) : (
              <>
                Web Design &{' '}
                <span className="cyber-text-gradient">Brand Strategy</span>
              </>
            )}
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {lang === 'ES'
              ? 'Impulsamos startups y pequeñas empresas con diseño UX/UI premium, desarrollo web, branding y soluciones estratégicas de marketing.'
              : 'Elevating startups and small businesses through premium UX/UI design, web development, branding, and strategic marketing solutions.'}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a
              href="#services"
              className="group cyber-gradient text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-agaru-purple/30 transition-all duration-300 flex items-center gap-2"
            >
              {lang === 'ES' ? 'Ver Servicios' : 'Explore Our Services'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href="#projects"
              className="group glass-effect text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              {lang === 'ES' ? 'Ver Proyectos' : 'View Our Work'}
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold cyber-text-gradient mb-2">50+</div>
              <div className="text-gray-400">{lang === 'ES' ? 'Proyectos Entregados' : 'Projects Delivered'}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold cyber-text-gradient mb-2">100%</div>
              <div className="text-gray-400">{lang === 'ES' ? 'Clientes Satisfechos' : 'Client Satisfaction'}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold cyber-text-gradient mb-2">3+</div>
              <div className="text-gray-400">{lang === 'ES' ? 'Años de Experiencia' : 'Years Experience'}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold cyber-text-gradient mb-2">24/7</div>
              <div className="text-gray-400">{lang === 'ES' ? 'Soporte' : 'Support'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
