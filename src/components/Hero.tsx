
import { ArrowRight, Sparkles, ChevronsDown } from 'lucide-react';

interface HeroProps {
  lang: 'ES' | 'EN';
}

const Hero = ({ lang }: HeroProps) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden mt-0 hero-mt-mobile py-[10vh]"
      style={{ marginTop: window.innerWidth < 650 ? '4rem' : undefined }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 cyber-gradient rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-agaru-purple-dark rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center flex flex-col items-center justify-center gap-8">

          {/* Hero Title */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
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
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
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
        </div>
      </div>
      {/* Flecha animada para scroll, centrada abajo */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-8 z-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <a href="#services" className="group flex flex-col items-center cursor-pointer">
          <span className="rounded-full bg-agaru-purple/20 p-3 shadow-lg animate-bounce-slow">
            <ChevronsDown className="w-8 h-8 text-agaru-purple group-hover:text-agaru-purple-light transition-colors duration-300" />
          </span>
        </a>
        <style>{`
          .animate-bounce-slow { animation: bounce 2.2s infinite; }
          @keyframes bounce { 0%, 100% { transform: translateY(0);} 50% { transform: translateY(18px);} }
        `}</style>
      </div>
    </section>
  );
};

export default Hero;
