
import { useState, useEffect } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { Menu, X } from 'lucide-react';
import LogoNav from './assets/Navbar/LogoNav.svg';

interface NavbarProps {
  lang: 'ES' | 'EN';
  setLang: Dispatch<SetStateAction<'ES' | 'EN'>>;
}

const Navbar = ({ lang, setLang }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
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
        { name: 'Our Work', href: '#projects' },
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
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-agaru-purple transition-colors duration-300 px-3 py-2 text-[12px] font-medium"
                >
                  {item.name}
                </a>
              ))}
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
            >
              {lang === 'ES' ? 'Contacto' : 'Book a Call'}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-agaru-purple transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                  className="text-gray-300 hover:text-agaru-purple transition-colors duration-300 px-3 py-2 text-[12px] font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
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
    </nav>
  );
};

export default Navbar;
