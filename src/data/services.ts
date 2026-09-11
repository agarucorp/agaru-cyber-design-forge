import type { Lang } from '@/lib/i18n';

export type Service = {
  index: string;
  badge: string;
  title: string;
  description: string;
  details?: string[];
};

const SERVICES_ES: Service[] = [
  {
    index: '01',
    badge: 'software a medida',
    title: 'Sistemas y automatización',
    description:
      'Desarrollo de software empresarial, plataformas backend personalizadas y aplicaciones web escalables. Diseñamos e implementamos herramientas orientadas a la automatización de flujos de trabajo, eliminación de tareas repetitivas y optimización de tus procesos internos.',
    details: [
      'Si hoy tu operación vive en Excel, WhatsApp o herramientas sueltas, lo ordenamos en un solo sistema',
      'Discovery, diseño UX, desarrollo, deploy, documentación y handoff',
      'Un panel o app web que el equipo pueda usar todos los días',
      'Lo construimos desde cero o integrándolo con lo que ya usás',
    ],
  },
  {
    index: '02',
    badge: 'diseño web',
    title: 'Sitios web',
    description:
      'Diseño de landing pages, portfolios, sitios corporativos y setup/personalización de Shopify, traduciendo las necesidades de tu negocio en una experiencia de usuario intuitiva. Creamos cada interfaz con una arquitectura de información clara, navegación fluida y conceptos visuales armónicos, garantizando un diseño totalmente acorde a tu rubro y objetivos comerciales.',
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
    badge: 'custom software',
    title: 'Systems & automation',
    description:
      'Enterprise software, custom backend platforms, and scalable web applications. We design and implement tools focused on workflow automation, eliminating repetitive tasks, and optimizing your internal processes.',
    details: [
      'If your operation lives in Excel, WhatsApp, or scattered tools today, we organize it into a single system',
      'Discovery, UX design, development, deploy, documentation, and handoff',
      'A panel or web app your team can use every day',
      'We build it from scratch or integrate it with what you already use',
    ],
  },
  {
    index: '02',
    badge: 'web design',
    title: 'Websites',
    description:
      'Landing pages, portfolios, corporate sites, and ecommerce/Shopify setup, translating your business needs into an intuitive user experience. We build each interface with clear information architecture, smooth navigation, and cohesive visual concepts aligned with your industry and commercial goals.',
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
  if (first === 'SOFTWARE') return 'SOFTWARE';
  return first;
}
