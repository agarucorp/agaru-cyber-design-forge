
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import LogoNav from './assets/Navbar/LogoNav.png';
import { Button } from './ui/button';
import emailjs from '@emailjs/browser';

interface FooterProps {
  lang: 'ES' | 'EN';
}

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

  return (
    <footer id="contact" className="bg-gradient-to-b from-cyber-dark to-black">
      {/* Contact Form Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {lang === 'ES' ? 'Trabajemos ' : "Let's Work "}
              <span className="bg-gradient-to-r from-[#895AF6] via-[#B983FF] to-[#4DE3FF] bg-clip-text text-transparent">{lang === 'ES' ? 'Juntos' : 'Together'}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {lang === 'ES'
                ? '¿Listo para llevar tu negocio al siguiente nivel? Escribinos y conversemos sobre cómo podemos ayudarte a lograr tus objetivos comerciales'
                : `Ready to elevate your business? Get in touch and let's discuss how we can help you achieve your goals`}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">{lang === 'ES' ? 'Contacto' : 'Get in Touch'}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#895AF6] border border-[#895AF6] shadow-[0_0_20px_0_#895AF6] transition-all duration-300 hover:bg-transparent hover:text-[#895AF6] hover:border-[#895AF6] hover:shadow-[0_0_30px_0_#895AF6]">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Email</div>
                      <div className="text-white font-semibold">agaru.corp@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#895AF6] border border-[#895AF6] shadow-[0_0_20px_0_#895AF6] transition-all duration-300 hover:bg-transparent hover:text-[#895AF6] hover:border-[#895AF6] hover:shadow-[0_0_30px_0_#895AF6]">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">{lang === 'ES' ? 'Teléfono' : 'Phone'}</div>
                      <div className="text-white font-semibold">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#895AF6] border border-[#895AF6] shadow-[0_0_20px_0_#895AF6] transition-all duration-300 hover:bg-transparent hover:text-[#895AF6] hover:border-[#895AF6] hover:shadow-[0_0_30px_0_#895AF6]">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">{lang === 'ES' ? 'Ubicación' : 'Location'}</div>
                      <div className="text-white font-semibold">{lang === 'ES' ? 'Buenos Aires, Argentina | Presencia global' : 'Buenos Aires, Argentina | Worldwide'}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">{lang === 'ES' ? 'Seguinos' : 'Follow Us'}</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-agaru-purple/20 transition-colors duration-300 group"
                  >
                    <Instagram className="w-6 h-6 text-gray-400 group-hover:text-agaru-purple transition-colors duration-300" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/agarucorp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-agaru-purple/20 transition-colors duration-300 group"
                  >
                    <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-agaru-purple transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="cyber-card p-8 rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                      {lang === 'ES' ? 'Nombre *' : 'Name *'}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 bg-cyber-grey border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-agaru-purple focus:ring-2 focus:ring-agaru-purple/20 transition-colors duration-300"
                      placeholder={lang === 'ES' ? 'Tu nombre' : 'Your name'}
                    />
                    {getError('name') && (
                      <div className="text-red-500 text-xs mt-1">{getError('name')}</div>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-300 text-sm font-medium mb-2">
                      {lang === 'ES' ? 'Teléfono' : 'Phone'}
                    </label>
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 bg-cyber-grey border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-agaru-purple focus:ring-2 focus:ring-agaru-purple/20 transition-colors duration-300"
                      placeholder={lang === 'ES' ? 'Tu teléfono' : 'Your phone'}
                      style={{ MozAppearance: 'textfield' }}
                      maxLength={13}
                    />
                    <style>{`
                      /* Chrome, Safari, Edge, Opera */
                      input[type=number]::-webkit-inner-spin-button, 
                      input[type=number]::-webkit-outer-spin-button {
                        -webkit-appearance: none;
                        margin: 0;
                      }
                      /* Firefox */
                      input[type=number] {
                        -moz-appearance: textfield;
                      }
                    `}</style>
                    {getError('phone') && (
                      <div className="text-red-500 text-xs mt-1">{getError('phone')}</div>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className="w-full px-4 py-3 bg-cyber-grey border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-agaru-purple focus:ring-2 focus:ring-agaru-purple/20 transition-colors duration-300"
                      placeholder={lang === 'ES' ? 'tu@email.com' : 'your@email.com'}
                    />
                    {getError('email') && (
                      <div className="text-red-500 text-xs mt-1">{getError('email')}</div>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                    {lang === 'ES' ? 'Asunto *' : 'Subject *'}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className="w-full px-4 py-3 bg-cyber-grey border border-gray-600 rounded-lg text-white focus:border-agaru-purple focus:ring-2 focus:ring-agaru-purple/20 transition-colors duration-300"
                  >
                    <option value="" disabled>{lang === 'ES' ? 'Seleccioná una opción' : 'Select an option'}</option>
                    <option value={lang === 'ES' ? 'Diseño UI' : 'UI Design'}>{lang === 'ES' ? 'Diseño UI' : 'UI Design'}</option>
                    <option value={lang === 'ES' ? 'Diseño Web' : 'Web Design'}>{lang === 'ES' ? 'Diseño Web' : 'Web Design'}</option>
                    <option value={lang === 'ES' ? 'Desarrollo de Web App' : 'Web App'}>{lang === 'ES' ? 'Desarrollo de Web App' : 'Web App'}</option>
                    <option value={lang === 'ES' ? 'Estrategia e Identidad de Marca' : 'Branding'}>{lang === 'ES' ? 'Estrategia e Identidad de Marca' : 'Branding'}</option>
                  </select>
                  {getError('subject') && (
                    <div className="text-red-500 text-xs mt-1">{getError('subject')}</div>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                    {lang === 'ES' ? 'Mensaje *' : 'Message *'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className="w-full px-4 py-3 bg-cyber-grey border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-agaru-purple focus:ring-2 focus:ring-agaru-purple/20 transition-colors duration-300 resize-none"
                    placeholder={lang === 'ES' ? 'Contanos sobre tu proyecto...' : 'Tell us about your project...'}
                  />
                  {getError('message') && (
                    <div className="text-red-500 text-xs mt-1">{getError('message')}</div>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="cyber"
                  size="lg"
                  className="group bg-[#895AF6] text-white border border-[#895AF6] hover:bg-transparent hover:text-[#895AF6] hover:border-[#895AF6] hover:shadow-[0_0_30px_0_#895AF6] shadow-[0_0_20px_0_#895AF6] transition-all duration-300 w-full flex items-center justify-center gap-2"
                  disabled={!isFormValid}
                >
                  {lang === 'ES' ? 'Enviar Mensaje' : 'Send Message'}
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center">
              © Powered by AgaruCorp
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
