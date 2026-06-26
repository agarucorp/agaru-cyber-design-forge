import mockupCalena from '../components/assets/ProjectShowcase/calenacard.png';
import cardtr from '../components/assets/ProjectShowcase/cardtr.png';
import logocannlabs1 from '../components/assets/ProjectShowcase/Logocannlabs1.png';
import cardmaxtech from '../components/assets/ProjectShowcase/cardmaxtech.png';
import group18 from '../components/assets/ProjectShowcase/Group 18.png';

export type CaseStudyMeta = {
  label: string;
  value: string;
  href?: string;
};

export type CaseStudySection = {
  tag: string;
  title: string;
  body: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectCaseStudy = {
  index: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  cardDescription: string;
  image: string;
  heroColor: string;
  slogan: string;
  meta: CaseStudyMeta[];
  gallery: GalleryImage[];
  story: CaseStudySection[];
};

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    index: '01',
    slug: 'calena',
    category: 'Web App',
    title: 'Somos Calena',
    description:
      'Web app para gestión de psicólogos y conexión con pacientes. Diseño UX/UI, frontend en React y arquitectura escalable.',
    cardDescription: 'Sistema para psicólogos y autogestión de turnos',
    image: mockupCalena,
    heroColor: '#3B2064',
    slogan: 'Conectando profesionales de la salud mental con sus pacientes',
    meta: [
      { label: 'Cliente', value: 'Somos Calena' },
      { label: 'Servicios', value: 'UX/UI · Desarrollo web · Arquitectura' },
      { label: 'Fecha', value: '2024' },
      { label: 'Categoría', value: 'Web app' },
    ],
    gallery: [
      { src: mockupCalena, alt: 'Mockup Somos Calena', caption: 'Vista principal de la plataforma' },
      { src: mockupCalena, alt: 'Wireframe Somos Calena', caption: 'Arquitectura de flujos y pantallas clave' },
    ],
    story: [
      {
        tag: '01',
        title: 'Análisis inicial',
        body: 'Calena necesitaba una plataforma que unificara la gestión de turnos, historiales y comunicación entre psicólogos y pacientes. Mapeamos los flujos críticos del consultorio digital priorizando claridad y accesibilidad.',
      },
      {
        tag: '02',
        title: 'Arquitectura y diseño',
        body: 'Construimos la interfaz en React con componentes reutilizables y una arquitectura preparada para escalar. El diseño prioriza legibilidad, jerarquía y confianza en un contexto sensible.',
      },
      {
        tag: '03',
        title: 'Resultado',
        body: 'Una web app funcional que reduce tareas operativas y mejora la experiencia de conexión entre profesional y paciente, lista para crecer con nuevos módulos.',
      },
    ],
  },
  {
    index: '02',
    slug: 'tony-ruiz',
    category: 'E-commerce',
    title: 'Tony Ruiz Hair Studio',
    description:
      'Landing page + ecommerce para estudio de peluquería. Reservas online, catálogo de productos y experiencia mobile-first.',
    cardDescription: 'Landing page + ecommerce para estudio de peluquería',
    image: cardtr,
    heroColor: '#4A2820',
    slogan: 'Estilo, reservas y venta online en una sola experiencia',
    meta: [
      { label: 'Cliente', value: 'Tony Ruiz Hair Studio' },
      { label: 'Servicios', value: 'Diseño web · Ecommerce · Shopify' },
      { label: 'Fecha', value: '2024' },
      { label: 'Categoría', value: 'Ecommerce' },
    ],
    gallery: [
      { src: cardtr, alt: 'Tony Ruiz Hair Studio', caption: 'Home y catálogo de productos' },
      { src: cardtr, alt: 'Wireframe Tony Ruiz', caption: 'Estructura de reservas y tienda' },
    ],
    story: [
      {
        tag: '01',
        title: 'Análisis inicial',
        body: 'El estudio necesitaba captar clientes online, facilitar reservas y vender productos de cuidado capilar sin depender de mensajes dispersos por redes.',
      },
      {
        tag: '02',
        title: 'Arquitectura y diseño',
        body: 'Definimos una identidad visual coherente con el salón: elegante, cercana y mobile-first. Personalizamos el tema de Shopify, configuramos catálogo, checkout y flujo de reservas, optimizando tiempos de carga y navegación.',
      },
      {
        tag: '03',
        title: 'Resultado',
        body: 'Un sitio que combina presencia de marca, conversión y operación diaria del negocio en un solo canal digital.',
      },
    ],
  },
  {
    index: '03',
    slug: 'frzm',
    category: 'Landing page',
    title: 'Portfolio personal',
    description:
      'Portfolio de diseño futurista con animaciones avanzadas, interacciones 3D y enfoque en performance.',
    cardDescription: 'Portfolio de diseño',
    image: '/frzm.png',
    heroColor: '#1C1C2E',
    slogan: 'Un portfolio que demuestra diseño, motion y código en acción',
    meta: [
      { label: 'Cliente', value: 'FRZM' },
      { label: 'Servicios', value: 'Diseño web · Motion · Frontend' },
      { label: 'Fecha', value: '2024' },
      { label: 'Categoría', value: 'Landing page' },
    ],
    gallery: [
      { src: '/frzm.png', alt: 'Portfolio FRZM', caption: 'Vista principal del portfolio' },
      { src: '/frzm.png', alt: 'Wireframe FRZM', caption: 'Layout y jerarquía de secciones' },
    ],
    story: [
      {
        tag: '01',
        title: 'Análisis inicial',
        body: 'Crear un portfolio memorable que transmita dominio técnico y sensibilidad estética, sin sacrificar rendimiento ni usabilidad.',
      },
      {
        tag: '02',
        title: 'Arquitectura y diseño',
        body: 'Exploramos una estética futurista con tipografía contundente y microinteracciones. Implementamos animaciones y efectos 3D con foco en performance: lazy loading, optimización de assets y pruebas en múltiples dispositivos.',
      },
      {
        tag: '03',
        title: 'Resultado',
        body: 'Una landing que funciona como carta de presentación y prueba de capacidades técnicas y creativas.',
      },
    ],
  },
  {
    index: '04',
    slug: 'cannlabs',
    category: 'Website',
    title: 'CannLabs',
    description:
      'Sitio web para empresa productora de extracto de yerba mate, stevia y té. Storytelling, sustentabilidad y trazabilidad.',
    cardDescription:
      'Sitio web para empresa productora de extracto de yerba mate, stevia y té',
    image: logocannlabs1,
    heroColor: '#2A3D2A',
    slogan: 'Del campo al consumidor con trazabilidad y propósito',
    meta: [
      { label: 'Cliente', value: 'CannLabs' },
      { label: 'Servicios', value: 'Diseño web · Storytelling · UX' },
      { label: 'Fecha', value: '2024' },
      { label: 'Categoría', value: 'Website' },
    ],
    gallery: [
      { src: logocannlabs1, alt: 'CannLabs website', caption: 'Home institucional' },
      { src: logocannlabs1, alt: 'Wireframe CannLabs', caption: 'Mapa de contenidos y secciones' },
    ],
    story: [
      {
        tag: '01',
        title: 'Análisis inicial',
        body: 'Comunicar procesos productivos, sustentabilidad y calidad de extractos naturales a un público B2B y consumidor final.',
      },
      {
        tag: '02',
        title: 'Arquitectura y diseño',
        body: 'Organizamos la información en capas: propuesta de valor, proceso, productos y contacto comercial. Paleta orgánica, fotografía de producto y secciones de trazabilidad que refuerzan confianza y transparencia.',
      },
      {
        tag: '03',
        title: 'Resultado',
        body: 'Un sitio que posiciona a CannLabs como referente en extractos naturales con comunicación profesional y escalable.',
      },
    ],
  },
  {
    index: '05',
    slug: 'maxtech',
    category: 'Web Catalog',
    title: 'Maxtech Latam',
    description:
      'Catálogo para importadora de insumos industriales con búsqueda avanzada, filtros dinámicos y panel autoadministrable.',
    cardDescription: 'Catálogo para importadora de insumos industriales',
    image: cardmaxtech,
    heroColor: '#1E2D3D',
    slogan: 'Catálogo industrial con búsqueda inteligente y gestión autónoma',
    meta: [
      { label: 'Cliente', value: 'Maxtech Latam' },
      { label: 'Servicios', value: 'Diseño web · Catálogo · Panel admin' },
      { label: 'Fecha', value: '2024' },
      { label: 'Categoría', value: 'Web catalog' },
    ],
    gallery: [
      { src: cardmaxtech, alt: 'Maxtech Latam', caption: 'Catálogo y filtros de producto' },
      { src: cardmaxtech, alt: 'Wireframe Maxtech', caption: 'Estructura de búsqueda y categorías' },
    ],
    story: [
      {
        tag: '01',
        title: 'Análisis inicial',
        body: 'Digitalizar un catálogo extenso de insumos industriales con búsqueda eficiente y actualización autónoma por parte del cliente.',
      },
      {
        tag: '02',
        title: 'Arquitectura y diseño',
        body: 'Diseñamos filtros dinámicos, fichas de producto claras y flujos de consulta orientados a decisores técnicos y comerciales. Implementamos un backend accesible para cargar productos, categorías y especificaciones sin depender de soporte externo.',
      },
      {
        tag: '03',
        title: 'Resultado',
        body: 'Una herramienta comercial digital que acelera consultas y reduce fricción en la gestión del inventario online.',
      },
    ],
  },
  {
    index: '06',
    slug: 'lp-odontologia',
    category: 'Landing page',
    title: 'Odontología Lucia Piccardo',
    description:
      'Landing page para consultorio odontológico con foco en captación de turnos y comunicación clara de servicios.',
    cardDescription: 'Landing page para consultorio odontológico',
    image: group18,
    heroColor: '#2C3E50',
    slogan: 'Confianza y claridad para elegir tu próximo turno dental',
    meta: [
      { label: 'Cliente', value: 'Dra. Lucia Piccardo' },
      { label: 'Servicios', value: 'Diseño web · Landing page · UX' },
      { label: 'Fecha', value: '2024' },
      { label: 'Categoría', value: 'Landing page' },
    ],
    gallery: [
      { src: group18, alt: 'Odontología Lucia Piccardo', caption: 'Landing de captación de turnos' },
      { src: group18, alt: 'Wireframe odontología', caption: 'Jerarquía de servicios y contacto' },
    ],
    story: [
      {
        tag: '01',
        title: 'Análisis inicial',
        body: 'Generar confianza y facilitar la solicitud de turnos en un rubro donde la claridad y la cercanía son decisivas.',
      },
      {
        tag: '02',
        title: 'Arquitectura y diseño',
        body: 'Priorizamos servicios, credenciales y CTA visibles desde el primer scroll. Estética limpia, tipografía legible y formulario de contacto integrado, con enfoque mobile-first.',
      },
      {
        tag: '03',
        title: 'Resultado',
        body: 'Una landing enfocada en captación que comunica profesionalismo y reduce barreras para agendar una consulta.',
      },
    ],
  },
];
