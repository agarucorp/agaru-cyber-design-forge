import type { Lang } from '@/lib/i18n';

export type Service = {
  index: string;
  badge: string;
  title: string;
  description: string;
};

const SERVICES_ES: Service[] = [
  {
    index: '01',
    badge: 'diseño web',
    title: 'Sitios web y tiendas online',
    description:
      'Diseño de landing pages, portfolios, sitios corporativos y setup/personalización de Shopify, traduciendo las necesidades de tu negocio en una experiencia de usuario intuitiva. Creamos cada interfaz con una arquitectura de información clara, navegación fluida y conceptos visuales armónicos, garantizando un diseño totalmente acorde a tu rubro y objetivos comerciales.',
  },
  {
    index: '02',
    badge: 'software a medida',
    title: 'Sistemas y automatización de procesos',
    description:
      'Desarrollo de software empresarial, plataformas backend personalizadas y aplicaciones web escalables. Diseñamos e implementamos herramientas orientadas a la automatización de flujos de trabajo, eliminación de tareas repetitivas y optimización de tus procesos internos.',
  },
  {
    index: '03',
    badge: 'branding y comunicación',
    title: 'Identidad visual y elementos gráficos',
    description:
      'Diseño conceptual de logotipos, isotipos, flyers, etiquetas y piezas gráficas esenciales para la comunicación y consistencia visual de tu marca.',
  },
];

const SERVICES_EN: Service[] = [
  {
    index: '01',
    badge: 'web design',
    title: 'Websites & online stores',
    description:
      'Landing pages, portfolios, corporate sites, and Shopify setup/customization—translating your business needs into an intuitive user experience. We build each interface with clear information architecture, smooth navigation, and cohesive visual concepts aligned with your industry and commercial goals.',
  },
  {
    index: '02',
    badge: 'custom software',
    title: 'Systems & process automation',
    description:
      'Enterprise software, custom backend platforms, and scalable web applications. We design and implement tools focused on workflow automation, eliminating repetitive tasks, and optimizing your internal processes.',
  },
  {
    index: '03',
    badge: 'branding & communication',
    title: 'Visual identity & graphic assets',
    description:
      'Conceptual design of logos, isotypes, flyers, labels, and essential graphic pieces for your brand communication and visual consistency.',
  },
];

export function getServices(lang: Lang): Service[] {
  return lang === 'EN' ? SERVICES_EN : SERVICES_ES;
}

export function getModLabel(badge: string, lang: Lang): string {
  const first = badge.split(' ')[0].toUpperCase();
  if (lang === 'EN') {
    if (first === 'DISEÑO' || first === 'WEB') return 'DESIGN';
    if (first === 'SOFTWARE' || first === 'CUSTOM') return 'SOFTWARE';
    if (first === 'BRANDING') return 'BRANDING';
  }
  if (first === 'DISEÑO') return 'DESIGN';
  return first;
}
