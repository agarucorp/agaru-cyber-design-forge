
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import LogoNav from './assets/Navbar/LogoNav.png';

interface FooterProps {
  lang: 'ES' | 'EN';
}

const Footer = ({ lang }: FooterProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: lang === 'ES' ? '¡Mensaje enviado!' : 'Message Sent!',
      description: lang === 'ES' ? 'Te responderemos en menos de 24 horas.' : "We'll get back to you within 24 hours.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <footer id="contact" className="bg-gradient-to-b from-cyber-dark to-black">
      {/* Contact Form Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {lang === 'ES' ? 'Trabajemos ' : "Let's Work "}
              <span className="cyber-text-gradient">{lang === 'ES' ? 'Juntos' : 'Together'}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {lang === 'ES'
                ? '¿Listo para llevar tu negocio al siguiente nivel? Escribinos y conversemos sobre cómo podemos ayudarte a lograr tus objetivos digitales.'
                : `Ready to elevate your business? Get in touch and let's discuss how we can help you achieve your digital goals.`}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">{lang === 'ES' ? 'Contacto' : 'Get in Touch'}</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 cyber-gradient rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">Email</div>
                      <div className="text-white font-semibold">hello@agarucorp.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 cyber-gradient rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">{lang === 'ES' ? 'Teléfono' : 'Phone'}</div>
                      <div className="text-white font-semibold">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 cyber-gradient rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">{lang === 'ES' ? 'Ubicación' : 'Location'}</div>
                      <div className="text-white font-semibold">New York, NY</div>
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
                    href="#"
                    className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-agaru-purple/20 transition-colors duration-300 group"
                  >
                    <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-agaru-purple transition-colors duration-300" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 glass-effect rounded-full flex items-center justify-center hover:bg-agaru-purple/20 transition-colors duration-300 group"
                  >
                    <div className="w-6 h-6 text-gray-400 group-hover:text-agaru-purple transition-colors duration-300 font-bold text-sm flex items-center justify-center">
                      Be
                    </div>
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
                      className="w-full px-4 py-3 bg-cyber-grey border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-agaru-purple focus:ring-2 focus:ring-agaru-purple/20 transition-colors duration-300"
                      placeholder={lang === 'ES' ? 'Tu nombre' : 'Your name'}
                    />
                  </div>
                  
                  <div>
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
                      className="w-full px-4 py-3 bg-cyber-grey border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-agaru-purple focus:ring-2 focus:ring-agaru-purple/20 transition-colors duration-300"
                      placeholder={lang === 'ES' ? 'tu@email.com' : 'your@email.com'}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                    {lang === 'ES' ? 'Asunto *' : 'Subject *'}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-cyber-grey border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-agaru-purple focus:ring-2 focus:ring-agaru-purple/20 transition-colors duration-300"
                    placeholder={lang === 'ES' ? '¿Cómo podemos ayudarte?' : 'How can we help you?'}
                  />
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
                    className="w-full px-4 py-3 bg-cyber-grey border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-agaru-purple focus:ring-2 focus:ring-agaru-purple/20 transition-colors duration-300 resize-none"
                    placeholder={lang === 'ES' ? 'Contanos sobre tu proyecto...' : 'Tell us about your project...'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full cyber-gradient text-white py-4 px-6 rounded-lg font-semibold hover:shadow-xl hover:shadow-agaru-purple/30 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {lang === 'ES' ? 'Enviar Mensaje' : 'Send Message'}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Logo and Company */}
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src={LogoNav} alt="Logo AgaruCorp" className="w-8 h-8 object-contain" style={{ width: '80%', height: '80%' }} />
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} AgaruCorp. {lang === 'ES' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
            </div>

            {/* Quick Links */}
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#services" className="text-gray-400 hover:text-agaru-purple transition-colors duration-300 text-sm">
                {lang === 'ES' ? 'Servicios' : 'Services'}
              </a>
              <a href="#projects" className="text-gray-400 hover:text-agaru-purple transition-colors duration-300 text-sm">
                {lang === 'ES' ? 'Proyectos' : 'Projects'}
              </a>
              <a href="#faq" className="text-gray-400 hover:text-agaru-purple transition-colors duration-300 text-sm">
                {lang === 'ES' ? 'Preguntas' : 'FAQ'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
