
import { useState, useEffect } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { Menu, X } from 'lucide-react';
import LogoNav from './assets/Navbar/LogoNav.svg';

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

// Utilidad para detectar desktop (igual que en Hero)
const isDesktop = () => typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches;

const Navbar = ({ lang, setLang }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('services');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);

      // Scrollspy
      const sections = [
        { id: 'services' },
        { id: 'process' },
        { id: 'projects' },
        { id: 'faq' },
      ];
      setActiveSection(getSectionFromScroll(sections));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = lang === 'ES'
    ? [
        { name: 'Servicios', href: '#services' },
        { name: '¿Cómo Trabajamos?', href: '#process' },
        { name: 'Proyectos', href: '#projects' },
        { name: 'FAQs', href: '#faq' },
      ]
    : [
        { name: 'Services', href: '#services' },
        { name: 'How it Works?', href: '#process' },
        { name: 'Projects', href: '#projects' },
        { name: 'FAQs', href: '#faq' },
      ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'navbar-blur' : 'bg-transparent'
      }`}
    >
      {/* Barra de progreso de scroll */}
      <div
        style={{
          width: `${scrollProgress}%`,
          height: '4px',
          background: '#b0b3b8', // gris suave acorde a la paleta
          transition: 'width 0.2s ease',
        }}
        className="absolute top-0 left-0 z-50 rounded-tr-full rounded-br-full"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={LogoNav} alt="Logo AgaruCorp" className="w-[56px] h-[56px] object-contain" />
            <span
              className="font-poppins"
              style={{
                fontFamily: "'Altroned Trial', sans-serif",
                color: '#fff',
                letterSpacing: '0.05em',
                fontSize: '17px',
                fontWeight: 560
              }}
            >
              AgaruCorp
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative text-white hover:text-[#B983FF] hover:bg-white/10 transition-colors duration-300 px-3 py-2 text-[12px] font-medium
                      ${isActive ? 'text-[#895AF6]' : ''}`}
                    onClick={e => {
                      if (isDesktop() && item.href.startsWith('#')) {
                        e.preventDefault();
                        window.location.hash = item.href.replace('#', '');
                      }
                    }}
                    onAuxClick={e => { if (isDesktop() && item.href.startsWith('#')) e.preventDefault(); }}
                    onContextMenu={e => { if (isDesktop() && item.href.startsWith('#')) e.preventDefault(); }}
                  >
                    {item.name}
                    <span
                      className={`absolute left-0 -bottom-1 w-full h-[3px] rounded-full transition-all duration-300
                        ${isActive ? 'bg-gradient-to-r from-[#895AF6] via-[#B983FF] to-[#4DE3FF]' : 'opacity-0 group-hover:opacity-100 group-hover:bg-gradient-to-r group-hover:from-[#895AF6] group-hover:via-[#B983FF] group-hover:to-[#4DE3FF]'}`}
                    ></span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Switch de idioma */}
          <div className="hidden md:flex items-center ml-2">
            <button
              onClick={() => setLang('ES')}
              className={`px-1 py-0.5 rounded-l border border-agaru-purple text-[9px] font-semibold transition-colors duration-200 ${lang === 'ES' ? 'bg-agaru-purple text-white' : 'bg-gray-800 text-gray-300'}`}
              aria-pressed={lang === 'ES'}
            >
              ES
            </button>
            <button
              onClick={() => setLang('EN')}
              className={`px-1 py-0.5 rounded-r border border-agaru-purple border-l-0 text-[9px] font-semibold transition-colors duration-200 ${lang === 'EN' ? 'bg-agaru-purple text-white' : 'bg-gray-800 text-gray-300'}`}
              aria-pressed={lang === 'EN'}
            >
              EN
            </button>
          </div>
          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="border border-[#895AF6] bg-transparent text-[#895AF6] px-6 py-2 rounded-md font-medium text-[13px] transition-all duration-300 shadow-[0_0_20px_0_#895AF6] hover:shadow-[0_0_30px_0_#895AF6]"
              onClick={e => {
                if (isDesktop()) {
                  e.preventDefault();
                  window.location.hash = 'contact';
                }
              }}
              onAuxClick={e => { if (isDesktop()) e.preventDefault(); }}
              onContextMenu={e => { if (isDesktop()) e.preventDefault(); }}
            >
              {lang === 'ES' ? 'Contacto' : 'Book a Call'}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`h-10 w-10 flex items-center justify-center text-gray-300 hover:text-agaru-purple transition-colors duration-300 focus:outline-none ${!isMobileMenuOpen ? 'animate-bounce-burger' : ''}`}
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMobileMenuOpen ? (
                <X size={28} />
              ) : (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="burger-gradient" x1="0" y1="0" x2="32" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#895AF6" />
                      <stop offset="1" stopColor="#4DE3FF" />
                    </linearGradient>
                  </defs>
                  <rect x="4" y="8" width="20" height="2" rx="0.5" fill="url(#burger-gradient)" className="transition-all duration-300" />
                  <rect x="8" y="15" width="12" height="2" rx="0.5" fill="url(#burger-gradient)" className="transition-all duration-300" />
                  <rect x="10" y="22" width="16" height="2" rx="0.5" fill="url(#burger-gradient)" className="transition-all duration-300" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-effect rounded-lg mt-2 p-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-[#B983FF] hover:bg-white/10 transition-colors duration-300 px-3 py-2 text-[12px] font-medium"
                  onClick={e => {
                    setIsMobileMenuOpen(false);
                    if (isDesktop()) {
                      e.preventDefault();
                      window.location.hash = item.href.replace('#', '');
                    }
                  }}
                  onAuxClick={e => { if (isDesktop()) e.preventDefault(); }}
                  onContextMenu={e => { if (isDesktop()) e.preventDefault(); }}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="border border-[#895AF6] bg-transparent text-[#895AF6] px-6 py-2 rounded-md text-center mt-4 font-medium text-[13px] transition-all duration-300 shadow-[0_0_20px_0_#895AF6] hover:shadow-[0_0_30px_0_#895AF6]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {lang === 'ES' ? 'Contacto' : 'Book a Call'}
              </a>
              {/* Switch de idioma en mobile */}
              <div className="flex items-center justify-center mt-4">
                <button
                  onClick={() => setLang('ES')}
                  className={`px-2 py-1 rounded-l border border-agaru-purple text-[12px] font-semibold transition-colors duration-200 ${lang === 'ES' ? 'bg-agaru-purple text-white' : 'bg-gray-800 text-gray-300'}`}
                  aria-pressed={lang === 'ES'}
                >
                  ES
                </button>
                <button
                  onClick={() => setLang('EN')}
                  className={`px-2 py-1 rounded-r border border-agaru-purple border-l-0 text-[12px] font-semibold transition-colors duration-200 ${lang === 'EN' ? 'bg-agaru-purple text-white' : 'bg-gray-800 text-gray-300'}`}
                  aria-pressed={lang === 'EN'}
                >
                  EN
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
