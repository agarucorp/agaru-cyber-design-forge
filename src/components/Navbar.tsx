
import { useState, useEffect } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  lang: 'ES' | 'EN';
  setLang: Dispatch<SetStateAction<'ES' | 'EN'>>;
}

// Utilidad para scrollspy
const getSectionFromScroll = (sections) => {
  const scrollPos = window.scrollY + 80; // 80px offset for navbar
  let current = sections[0].id;
  for (const section of sections) {
    const el = document.getElementById(section.id);
    if (el && el.offsetTop <= scrollPos) {
      current = section.id;
    }
  }
  return current;
};

// Función mejorada para scroll suave a secciones
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

const Navbar = ({ lang, setLang }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scrollspy
      const sections = [
        { id: 'services' },
        { id: 'projects' },
      ];
      // Solo marcar sección si el usuario ha pasado el primer offset (por ejemplo, 120px)
      const currentSection = getSectionFromScroll(sections);
      if (window.scrollY < 120) {
        setActiveSection(null);
      } else {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = lang === 'ES'
    ? [
        { name: 'Servicios', href: '#services' },
        { name: 'Proyectos', href: '#projects' },
        { name: 'Proceso', href: '#process' },
      ]
    : [
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Process', href: '#process' },
      ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300" style={{ width: 'calc(100% - 2rem)', maxWidth: '1000px' }}>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="flex items-center justify-between px-6 md:px-8 relative rounded-full w-full"
          style={{ 
            backgroundColor: 'rgba(32, 34, 36, 0.3)',
            backdropFilter: 'blur(10px)',
            height: '72px',
            minHeight: '72px'
          }}
        >
          {/* Logo */}
          <div className="flex-none">
            <a href="/" className="flex items-center">
              <img src="/logomix.svg" alt="AgaruCorp Design" className="w-auto h-[24.75px] md:h-[22.5px] object-contain" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative text-white hover:text-[#B983FF] transition-colors duration-300 px-3 py-2 text-[14px] font-manrope font-light
                    ${isActive ? 'text-[#895AF6]' : ''}`}
                  onClick={e => {
                    if (item.href.startsWith('#')) {
                      e.preventDefault();
                      scrollToSection(item.href.replace('#', ''));
                    }
                  }}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 w-full h-[2px] rounded-full transition-all duration-300
                      ${isActive ? 'bg-[#895AF6]' : 'opacity-0'}`}
                  ></span>
                </a>
              );
            })}
          </div>

          {/* Switch de idioma */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => setLang(lang === 'ES' ? 'EN' : 'ES')}
              className="flex items-center gap-1 text-white hover:text-[#B983FF] transition-colors duration-300 px-3 py-2 text-[14px] font-manrope font-light"
              aria-label={lang === 'ES' ? 'Cambiar a inglés' : 'Change to Spanish'}
            >
              <Globe className="w-4 h-4" />
              <span>{lang === 'ES' ? 'EN' : 'ES'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`h-10 w-10 flex items-center justify-center text-white hover:text-[#B983FF] transition-colors duration-300 focus:outline-none ${!isMobileMenuOpen ? 'animate-bounce-burger' : ''}`}
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMobileMenuOpen ? (
                <X size={28} />
              ) : (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="8" width="20" height="2" rx="0.5" fill="#895AF6" className="transition-all duration-300" />
                  <rect x="8" y="15" width="12" height="2" rx="0.5" fill="#895AF6" className="transition-all duration-300" />
                  <rect x="10" y="22" width="16" height="2" rx="0.5" fill="#895AF6" className="transition-all duration-300" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden rounded-2xl mt-2 p-4 animate-fade-in"
            style={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative text-white hover:text-[#B983FF] hover:bg-white/10 transition-colors duration-300 px-3 py-2 text-[12px] font-manrope font-light
                      ${isActive ? 'text-[#895AF6]' : ''}`}
                    onClick={e => {
                      setIsMobileMenuOpen(false);
                      if (item.href.startsWith('#')) {
                        e.preventDefault();
                        scrollToSection(item.href.replace('#', ''));
                      }
                    }}
                  >
                    {item.name}
                    <span
                      className={`absolute left-0 -bottom-1 w-full h-[2px] rounded-full transition-all duration-300
                        ${isActive ? 'bg-[#895AF6]' : 'opacity-0'}`}
                    ></span>
                  </a>
                );
              })}
              {/* Switch de idioma en mobile */}
              <div className="flex items-center justify-center mt-4">
                <button
                  onClick={() => setLang(lang === 'ES' ? 'EN' : 'ES')}
                  className="flex items-center gap-2 text-white hover:text-[#B983FF] hover:bg-white/10 transition-colors duration-300 px-3 py-2 text-[12px] font-manrope font-light"
                  aria-label={lang === 'ES' ? 'Cambiar a inglés' : 'Change to Spanish'}
                >
                  <Globe className="w-4 h-4" />
                  <span>{lang === 'ES' ? 'EN' : 'ES'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Animación burger bounce */}
      <style>{`
      @keyframes bounce-burger {
        0% { transform: scale(1); }
        20% { transform: scale(1.15, 0.85); }
        40% { transform: scale(0.95, 1.05); }
        60% { transform: scale(1.05, 0.95); }
        80% { transform: scale(0.98, 1.02); }
        100% { transform: scale(1); }
      }
      .animate-bounce-burger:active svg {
        animation: bounce-burger 0.4s cubic-bezier(.68,-0.55,.27,1.55);
      }
      `}</style>
    </nav>
  );
};

export default Navbar;
