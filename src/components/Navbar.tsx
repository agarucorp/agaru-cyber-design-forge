
import { useState, useEffect } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { X, Globe } from 'lucide-react';
import CyberButton from './CyberButton';

interface NavbarProps {
  lang: 'ES' | 'EN';
  setLang: Dispatch<SetStateAction<'ES' | 'EN'>>;
}

const NAVBAR_BG = 'rgba(100, 102, 110, 0.62)';
const NAVBAR_MOBILE_BG = 'rgba(96, 98, 106, 0.62)';
const NAV_LINK_TYPO = 'font-mono text-[11px] uppercase tracking-[0.2em]';

// Utilidad para scrollspy
const getSectionFromScroll = (sections: { id: string }[]) => {
  const scrollPos = window.scrollY + 80;
  let current = sections[0].id;
  for (const section of sections) {
    const el = document.getElementById(section.id);
    if (el && el.offsetTop <= scrollPos) {
      current = section.id;
    }
  }
  return current;
};

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const Navbar = ({ lang, setLang }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [{ id: 'services' }, { id: 'projects' }];
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
        { name: 'Servicios', href: '#cyber-services' },
        { name: 'Proyectos', href: '#projects' },
        { name: 'Proceso', href: '#process' },
      ]
    : [
        { name: 'Services', href: '#cyber-services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Process', href: '#process' },
      ];

  const contactLabel = lang === 'ES' ? 'Contacto' : 'Contact';

  const handleNavClick = (href: string, closeMobile = false) => (e: React.MouseEvent) => {
    if (closeMobile) setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      e.preventDefault();
      scrollToSection(href.replace('#', ''));
    }
  };

  return (
    <nav className="pointer-events-none fixed left-0 right-0 top-4 z-50">
      <div className="pointer-events-auto mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-8">
        <div
          className="flex h-[72px] min-h-[72px] w-full items-center justify-between rounded-full px-6 md:h-[82.8px] md:min-h-[82.8px] md:px-8"
          style={{
            backgroundColor: NAVBAR_BG,
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* Logo */}
          <div className="flex-none">
            <a href="/" className="flex items-center">
              <img
                src="/newlogohorizontal.svg"
                alt="AGARUCORP"
                className="h-[36.3px] w-auto object-contain md:h-[41.47px]"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-6 md:flex lg:space-x-8">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-2 ${NAV_LINK_TYPO} text-white transition-colors duration-300 hover:text-[#B983FF] ${
                    isActive ? 'text-[#895AF6]' : ''
                  }`}
                  onClick={handleNavClick(item.href)}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] w-full rounded-full transition-all duration-300 ${
                      isActive ? 'bg-[#895AF6]' : 'opacity-0'
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Desktop: contacto + idioma */}
          <div className="hidden items-center gap-3 md:flex">
            <CyberButton href="#contact" onClick={handleNavClick('#contact')}>
              {contactLabel}
            </CyberButton>
            <button
              onClick={() => setLang(lang === 'ES' ? 'EN' : 'ES')}
              className="flex items-center gap-1 px-3 py-2 font-manrope text-[14px] font-light text-white transition-colors duration-300 hover:text-[#B983FF]"
              aria-label={lang === 'ES' ? 'Cambiar a inglés' : 'Change to Spanish'}
            >
              <Globe className="h-4 w-4" />
              <span>{lang === 'ES' ? 'EN' : 'ES'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`flex h-10 w-10 items-center justify-center text-white transition-colors duration-300 hover:text-[#B983FF] focus:outline-none ${
                !isMobileMenuOpen ? 'animate-bounce-burger' : ''
              }`}
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
            className="mt-2 animate-fade-in rounded-2xl p-4 md:hidden"
            style={{
              backgroundColor: NAVBAR_MOBILE_BG,
              backdropFilter: 'blur(10px)',
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
                    className={`relative px-3 py-2 ${NAV_LINK_TYPO} text-white transition-colors duration-300 hover:bg-white/10 hover:text-[#B983FF] ${
                      isActive ? 'text-[#895AF6]' : ''
                    }`}
                    onClick={handleNavClick(item.href, true)}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] w-full rounded-full transition-all duration-300 ${
                        isActive ? 'bg-[#895AF6]' : 'opacity-0'
                      }`}
                    />
                  </a>
                );
              })}
              <CyberButton href="#contact" className="mt-2 w-full" onClick={handleNavClick('#contact', true)}>
                {contactLabel}
              </CyberButton>
              <div className="mt-4 flex items-center justify-center">
                <button
                  onClick={() => setLang(lang === 'ES' ? 'EN' : 'ES')}
                  className="flex items-center gap-2 px-3 py-2 font-manrope text-[12px] font-light text-white transition-colors duration-300 hover:bg-white/10 hover:text-[#B983FF]"
                  aria-label={lang === 'ES' ? 'Cambiar a inglés' : 'Change to Spanish'}
                >
                  <Globe className="h-4 w-4" />
                  <span>{lang === 'ES' ? 'EN' : 'ES'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
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
