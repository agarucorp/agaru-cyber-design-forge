
import { useState } from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import CyberButton from './CyberButton';
import { SECTION_CONTAINER_CLASS } from '@/lib/sectionLayout';
import { getWhatsAppHref } from '@/lib/whatsapp';
import emailjs from '@emailjs/browser';

interface FooterProps {
  lang: 'ES' | 'EN';
}

const SUBJECT_OPTIONS = {
  ES: [
    'Portfolio/sitio web',
    'Diseño de marca',
    'Software/sistema',
    'Optimización de procesos',
    'Consultoría',
  ],
  EN: [
    'Portfolio/website',
    'Brand design',
    'Software/system',
    'Process optimization',
    'Consulting',
  ],
} as const;

const Footer = ({ lang }: FooterProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const { toast } = useToast();
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setTouched({
      ...touched,
      [e.target.name]: true
    });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setTouched({
      ...touched,
      [e.target.name]: true
    });
  };

  const getError = (field: string) => {
    if (!touched[field]) return '';
    switch (field) {
      case 'name':
        return formData.name.trim() === '' ? (lang === 'ES' ? 'El nombre es obligatorio.' : 'Name is required.') : '';
      case 'email':
        if (formData.email.trim() === '') return lang === 'ES' ? 'El email es obligatorio.' : 'Email is required.';
        // Validación básica de email
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) return lang === 'ES' ? 'Email inválido.' : 'Invalid email.';
        return '';
      case 'phone':
        if (formData.phone.trim() === '') return lang === 'ES' ? 'El teléfono es obligatorio.' : 'Phone is required.';
        if (formData.phone.length < 8) return lang === 'ES' ? 'El teléfono debe tener al menos 8 dígitos.' : 'Phone must be at least 8 digits.';
        if (formData.phone.length > 13) return lang === 'ES' ? 'El teléfono no puede tener más de 13 dígitos.' : 'Phone cannot be more than 13 digits.';
        return '';
      case 'subject':
        return formData.subject.trim() === '' ? (lang === 'ES' ? 'El asunto es obligatorio.' : 'Subject is required.') : '';
      case 'message':
        return formData.message.trim() === '' ? (lang === 'ES' ? 'El mensaje es obligatorio.' : 'Message is required.') : '';
      default:
        return '';
    }
  };

  const isFormValid =
    formData.name.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.phone.trim() !== '' &&
    formData.phone.length >= 8 &&
    formData.phone.length <= 13 &&
    formData.subject.trim() !== '' &&
    formData.message.trim() !== '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    });
    if (!isFormValid) {
      toast({
        title: lang === 'ES' ? 'Campos incompletos' : 'Incomplete fields',
        description: lang === 'ES' ? 'Por favor completá todos los campos obligatorios.' : 'Please fill in all required fields.',
        variant: 'destructive',
      });
      return;
    }
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
      );
      toast({
        title: lang === 'ES' ? '¡Mensaje enviado!' : 'Message Sent!',
        description: lang === 'ES' ? 'Te responderemos en menos de 24 horas.' : "We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTouched({ name: false, email: false, phone: false, subject: false, message: false });
    } catch (error) {
      // Log detallado para depuración
      console.error('EmailJS error:', error);
      toast({
        title: lang === 'ES' ? 'Error al enviar' : 'Error sending',
        description: lang === 'ES' ? 'Ocurrió un error al enviar el mensaje. Intenta nuevamente.' : 'There was an error sending your message. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const fieldClass =
    'w-full rounded-md border border-white/20 bg-white/[0.06] px-4 py-3 font-manrope text-sm text-white placeholder:text-white/60 transition-[border-color,background-color] duration-200 focus:border-[#895AF6] focus:bg-white/[0.09] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#895AF6]/60';

  const socialClass =
    'flex h-11 w-11 items-center justify-center rounded-md border border-border bg-secondary text-secondary-foreground transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent motion-reduce:transform-none';

  const navItems =
    lang === 'ES'
      ? [
          { name: 'Servicios', href: '#cyber-services' },
          { name: 'Proyectos', href: '#projects' },
          { name: 'Proceso', href: '#process' },
          { name: 'FAQs', href: '#faq' },
        ]
      : [
          { name: 'Services', href: '#cyber-services' },
          { name: 'Projects', href: '#projects' },
          { name: 'Process', href: '#process' },
          { name: 'FAQs', href: '#faq' },
        ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="contact" className="w-full overflow-x-hidden bg-black">
      <div className="border-t border-border py-20 md:py-28">
        <div className={SECTION_CONTAINER_CLASS}>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col lg:col-span-5">
              <a href="/" className="inline-flex w-fit">
                <img
                  src="/MAIN_HORIZONTAL1.svg"
                  alt="AGARUCORP"
                  className="h-12 w-auto object-contain brightness-0 invert md:h-16"
                />
              </a>
              <p className="mt-4 font-orbitron text-[15px] font-semibold tracking-[0.06em] text-white md:text-[17px]">
                Designing what's next
              </p>

              <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-3" aria-label={lang === 'ES' ? 'Secciones' : 'Sections'}>
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith('#')) {
                        e.preventDefault();
                        scrollToSection(item.href.replace('#', ''));
                      }
                    }}
                    className="font-manrope text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              <div className="mt-10 flex gap-3">
                <a
                  href="https://www.instagram.com/agarucorp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialClass}
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" strokeWidth={1.75} />
                </a>
                <a
                  href="https://www.linkedin.com/company/agarucorp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialClass}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" strokeWidth={1.75} />
                </a>
                <a
                  href={getWhatsAppHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialClass}
                  aria-label="WhatsApp"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-lg border border-white/20 bg-[#1c1c1c] p-6 sm:p-8">
                <p className="mb-6 font-manrope text-[11px] font-medium uppercase tracking-[0.16em] text-white/70">
                  // CONTACT
                </p>
                <form onSubmit={handleSubmit} noValidate className="space-y-3">
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={fieldClass}
                      placeholder={lang === 'ES' ? 'Nombre *' : 'Name *'}
                    />
                    {getError('name') && (
                      <div className="mt-1 text-xs text-red-500">{getError('name')}</div>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={fieldClass}
                      placeholder={lang === 'ES' ? 'Email *' : 'Email *'}
                    />
                    {getError('email') && (
                      <div className="mt-1 text-xs text-red-500">{getError('email')}</div>
                    )}
                  </div>
                  <div>
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={fieldClass}
                      placeholder={lang === 'ES' ? 'Teléfono *' : 'Phone *'}
                      style={{ MozAppearance: 'textfield' }}
                      maxLength={13}
                    />
                    <style>{`
                      input[type=number]::-webkit-inner-spin-button,
                      input[type=number]::-webkit-outer-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                      }
                      input[type=number] {
                        -moz-appearance: textfield;
                      }
                    `}</style>
                    {getError('phone') && (
                      <div className="mt-1 text-xs text-red-500">{getError('phone')}</div>
                    )}
                  </div>
                  <div>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`${fieldClass} ${formData.subject ? 'text-white' : 'text-white/60'}`}
                    >
                      <option value="" disabled className="bg-[#1c1c1c] text-white/60">
                        {lang === 'ES' ? 'Asunto *' : 'Subject *'}
                      </option>
                      {SUBJECT_OPTIONS[lang].map((subject) => (
                        <option key={subject} value={subject} className="bg-[#1c1c1c] text-white">
                          {subject}
                        </option>
                      ))}
                    </select>
                    {getError('subject') && (
                      <div className="mt-1 text-xs text-red-500">{getError('subject')}</div>
                    )}
                  </div>
                  <div>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className={`${fieldClass} resize-none`}
                      placeholder={lang === 'ES' ? 'Mensaje *' : 'Message *'}
                    />
                    {getError('message') && (
                      <div className="mt-1 text-xs text-red-500">{getError('message')}</div>
                    )}
                  </div>
                  <div className="pt-2">
                    <CyberButton
                      type="submit"
                      fullWidth
                      className="border-[#895AF6] bg-[#895AF6] text-white hover:border-[#a078ff] hover:bg-[#a078ff] hover:text-white"
                    >
                      {lang === 'ES' ? 'Enviar' : 'Send'}
                    </CyberButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <div className={SECTION_CONTAINER_CLASS}>
          <p className="font-manrope text-sm text-white/55">
            {lang === 'ES'
              ? '© 2024 AgaruCorp. Todos los derechos reservados.'
              : '© 2024 AgaruCorp. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
