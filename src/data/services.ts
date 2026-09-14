import type { Lang } from '@/lib/i18n';

export type Service = {
  index: string;
  badge: string;
  title: string;
  description: string;
  details?: string[];
};

export type IncludedItem = {
  title: string;
  body: string;
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
      'Discovery, diseño UX/UI, desarrollo, deploy, documentación y handoff',
      'Un panel o app web que el equipo pueda usar todos los días',
      'Lo construimos desde cero o integrándolo con lo que ya usás',
      'Construido con seguridad de base de datos (RLS), testing de usabilidad completo y autenticación de usuarios',
    ],
  },
  {
    index: '02',
    badge: 'web design',
    title: 'Sitios web',
    description:
      'Diseño de landing pages, portfolios, sitios corporativos y setup/personalización de Shopify, traduciendo las necesidades de tu negocio en una experiencia de usuario intuitiva. Creamos cada interfaz con una arquitectura de información clara, navegación fluida y conceptos visuales armónicos, garantizando un diseño totalmente acorde a tu rubro y objetivos comerciales.',
    details: [
      'SSL y bases de seguridad incluidos desde el primer día',
      'Gestión de dominio y hosting seguro en Vercel',
      'Integración opcional con logo o un paquete completo de identidad de marca',
      'Mantenimiento mensual disponible para soporte continuo',
    ],
  },
  {
    index: '03',
    badge: 'branding y comunicación',
    title: 'Identidad visual y elementos gráficos',
    description:
      'Diseño conceptual de logotipos, isotipos, flyers, etiquetas y piezas gráficas esenciales para la comunicación y consistencia visual de tu marca.',
    details: [
      'Disponible como proyecto independiente o integrado a un paquete de web/sistemas',
      'Ideal si estás empezando de cero y todavía no tenés una identidad definida',
      'Manual de marca disponible como add-on para equipos que necesitan reglas de uso completas',
    ],
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
      'Discovery, UX/UI design, development, deploy, documentation, and handoff',
      'A panel or web app your team can use every day',
      'We build it from scratch or integrate it with what you already use',
      'Built with database security (RLS), full usability testing, and user authentication',
    ],
  },
  {
    index: '02',
    badge: 'web design',
    title: 'Websites',
    description:
      'Landing pages, portfolios, corporate sites, and ecommerce/Shopify setup, translating your business needs into an intuitive user experience. We build each interface with clear information architecture, smooth navigation, and cohesive visual concepts aligned with your industry and commercial goals.',
    details: [
      'SSL and security essentials included from day one',
      'Domain management and secure hosting on Vercel',
      'Optional integration with a logo or full brand identity package',
      'Monthly maintenance available for ongoing support',
    ],
  },
  {
    index: '03',
    badge: 'branding & communication',
    title: 'Visual identity & graphic assets',
    description:
      'Conceptual design of logos, isotypes, flyers, labels, and essential graphic pieces for your brand communication and visual consistency.',
    details: [
      'Available as a standalone project or bundled into a web/systems package',
      "Ideal if you're starting from scratch with no defined identity yet",
      'Brand guideline manual available as an add-on for teams that need full usage rules',
    ],
  },
];

const INCLUDED_ES: IncludedItem[] = [
  {
    title: 'Propuesta clara',
    body: 'Cada proyecto empieza con una propuesta comercial detallada: alcance completo, desglose por sprints, entregables, timeline, precio final y costo de mantenimiento, para que sepas exactamente qué estás contratando antes de empezar.',
  },
  {
    title: 'Seguridad e infraestructura',
    body: 'Certificados SSL, gestión de dominio y hosting seguro en Vercel vienen de serie. Los proyectos de sistemas también incluyen seguridad de base de datos (Supabase RLS), autenticación de usuarios y testing de usabilidad en cada panel y rol.',
  },
  {
    title: 'Mantenimiento continuo',
    body: 'Cada proyecto incluye mantenimiento mensual: soporte continuo, actualizaciones de seguridad, upkeep de base de datos y hasta 1 hora semanal para cualquier pedido. Lo que exceda esa hora se cotiza por separado.',
  },
  {
    title: 'Handoff',
    body: 'En la entrega recibís documentación completa del producto, archivos organizados a los que podés acceder en cualquier momento, y un walkthrough o tutorial si lo necesitás.',
  },
];

const INCLUDED_EN: IncludedItem[] = [
  {
    title: 'Clear proposal',
    body: "Every project starts with a detailed commercial proposal: full scope, sprint breakdown, deliverables, timeline, final price, and maintenance cost, so you know exactly what you're getting before we start.",
  },
  {
    title: 'Security & infrastructure',
    body: 'SSL certificates, domain management, and secure hosting on Vercel come standard. Systems projects also include database security (Supabase RLS), user authentication, and usability testing across every panel and user role.',
  },
  {
    title: 'Ongoing maintenance',
    body: 'Every project includes monthly maintenance: continuous support, security updates, database upkeep, and up to 1 hour of work per week for any requests. Anything beyond that hour is quoted separately.',
  },
  {
    title: 'Handoff',
    body: 'At delivery, you get full documentation of the finished product, organized files you can access anytime, and a walkthrough or tutorial if needed.',
  },
];

export function getServices(lang: Lang): Service[] {
  return lang === 'EN' ? SERVICES_EN : SERVICES_ES;
}

export function getIncludedItems(lang: Lang): IncludedItem[] {
  return lang === 'EN' ? INCLUDED_EN : INCLUDED_ES;
}
