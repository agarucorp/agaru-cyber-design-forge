
import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { X, Globe } from 'lucide-react';
import CyberButton from './CyberButton';
import { SECTION_CONTAINER_CLASS } from '@/lib/sectionLayout';

interface NavbarProps {
  lang: 'ES' | 'EN';
  setLang: Dispatch<SetStateAction<'ES' | 'EN'>>;
}

const NAVBAR_GLASS = {
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  backdropFilter: 'blur(20px) saturate(160%)',
  WebkitBackdropFilter: 'blur(20px) saturate(160%)',
  border: '1px solid rgba(255, 255, 255, 0.16)',
} as const;

const NAVBAR_MOBILE_GLASS = {
  ...NAVBAR_GLASS,
  backgroundColor: 'rgba(255, 255, 255, 0.10)',
} as const;

const NAV_LINK_TYPO = 'font-manrope text-sm font-medium';

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
      <div className={`pointer-events-auto ${SECTION_CONTAINER_CLASS}`}>
        <div
          className="flex h-[72px] min-h-[72px] w-full items-center justify-between rounded-full px-6 md:h-[82.8px] md:min-h-[82.8px] md:px-8"
          style={NAVBAR_GLASS}
        >
          {/* Logo */}
          <div className="flex-none">
            <a href="/" className="flex items-center">
              <img
                src="/MAIN_HORIZONTAL1.svg"
                alt="AGARUCORP"
                className="h-[27.83px] w-auto object-contain brightness-0 invert md:h-[29.9px]"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-6 md:flex lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-3 py-2 ${NAV_LINK_TYPO} text-white transition-colors duration-300 hover:text-[#B983FF]`}
                onClick={handleNavClick(item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop: contacto + idioma */}
          <div className="hidden items-center gap-3 md:flex">
            <CyberButton href="#contact" onClick={handleNavClick('#contact')}>
              {contactLabel}
            </CyberButton>
            <button
              onClick={() => setLang(lang === 'ES' ? 'EN' : 'ES')}
              className="flex items-center gap-1 px-3 py-2 font-manrope text-sm font-medium text-white transition-colors duration-300 hover:text-[#B983FF]"
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
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <rect x="4" y="8" width="20" height="2" rx="0.5" fill="currentColor" className="transition-all duration-300" />
                  <rect x="8" y="15" width="12" height="2" rx="0.5" fill="currentColor" className="transition-all duration-300" />
                  <rect x="10" y="22" width="16" height="2" rx="0.5" fill="currentColor" className="transition-all duration-300" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className="mt-2 animate-fade-in rounded-2xl p-4 md:hidden"
            style={NAVBAR_MOBILE_GLASS}
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 ${NAV_LINK_TYPO} text-white transition-colors duration-300 hover:bg-white/10 hover:text-[#B983FF]`}
                  onClick={handleNavClick(item.href, true)}
                >
                  {item.name}
                </a>
              ))}
              <CyberButton href="#contact" className="mt-2 w-full" onClick={handleNavClick('#contact', true)}>
                {contactLabel}
              </CyberButton>
              <div className="mt-4 flex items-center justify-center">
                <button
                  onClick={() => setLang(lang === 'ES' ? 'EN' : 'ES')}
                  className="flex items-center gap-2 px-3 py-2 font-manrope text-sm font-medium text-white transition-colors duration-300 hover:bg-white/10 hover:text-[#B983FF]"
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
