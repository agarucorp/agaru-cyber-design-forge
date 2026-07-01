import mockupCalena from '../components/assets/ProjectShowcase/calenacard.png';
import cardtr from '../components/assets/ProjectShowcase/cardtr.png';
import logocannlabs1 from '../components/assets/ProjectShowcase/Logocannlabs1.png';
import cardmaxtech from '../components/assets/ProjectShowcase/cardmaxtech.png';

export type CaseStudyMeta = {
  label: string;
  value: string;
  href?: string;
};

export type CaseStudyItem = {
  label?: string;
  text: string;
};

export type CaseStudyBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: CaseStudyItem[] }
  | { type: 'group'; title: string; intro?: string; text?: string; items?: CaseStudyItem[] };

export type CaseStudySection = {
  tag: string;
  title: string;
  body?: string;
  items?: CaseStudyItem[];
  blocks?: CaseStudyBlock[];
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
  en?: {
    cardDescription?: string;
    description?: string;
    meta?: CaseStudyMeta[];
    story?: CaseStudySection[];
  };
};

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    index: '01',
    slug: 'calena',
    category: 'SaaS',
    title: 'Somos Calena',
    description:
      'Web app para gestión de psicólogos y conexión con pacientes. Diseño UX/UI, frontend en React y arquitectura escalable.',
    cardDescription: 'Sistema para psicólogos y autogestión de turnos',
    image: mockupCalena,
    heroColor: '#3B2064',
    slogan: 'Conectando profesionales de la salud mental con sus pacientes',
    meta: [
      { label: 'Cliente', value: 'Calena' },
      { label: 'Servicios', value: 'Full-stack development / IA automation / Product design' },
      { label: 'Categoría', value: 'Healthcare technology / SaaS' },
      { label: 'Fecha', value: '2025' },
    ],
    gallery: [
      { src: mockupCalena, alt: 'Mockup Somos Calena', caption: 'Vista principal de la plataforma' },
      { src: mockupCalena, alt: 'Wireframe Somos Calena', caption: 'Arquitectura de flujos y pantallas clave' },
    ],
    story: [
      {
        tag: '01',
        title: 'Análisis inicial',
        body: 'El cliente llegó con una validación de mercado sólida (+60 entrevistas) que identificó una fricción crítica en la gestión diaria de los profesionales de la salud mental: la dispersión de canales para turnos, cobros y el riesgo de pérdida de historial clínico.\n\nEl mayor desafío de producto consistió en traducir la simulación manual del flujo (donde se operó como secretario para entender la lógica del negocio) en un sistema automatizado. En lugar de depender de pasarelas de pago tradicionales, se desarrolló una solución a medida para resolver el comportamiento real del mercado: los pacientes pagan mediante transferencia y envían el comprobante por WhatsApp. El sistema procesa esto de forma 100% autónoma, eliminando la carga administrativa y la necesidad de interacción manual entre paciente y profesional para la conciliación de pagos.',
      },
      {
        tag: '02',
        title: 'Arquitectura y diseño',
        items: [
          {
            label: 'Infraestructura de datos y backend',
            text: 'base de datos para garantizar la integridad del historial de sesiones de los pacientes y la trazabilidad de los cobros, cumpliendo con la privacidad requerida para datos de salud.',
          },
          {
            label: 'Agentes IA',
            text: 'integración de agentes para la transcripción, estructuración y almacenamiento de notas de sesión, evitando la pérdida de información clínica y optimizando el tiempo administrativo del profesional.',
          },
          {
            label: 'Bot administrativo',
            text: 'integración con la API de WhatsApp para la recepción de archivos y un pipeline de procesamiento de imágenes/documentos. El bot analiza el comprobante de transferencia extraído, valida la identidad del paciente, detecta el monto y actualiza el estado de la cuenta de forma automática en el sistema general.',
          },
          {
            label: 'Frontend y UX',
            text: 'interfaz administrativa dual (vista psicólogo / vista paciente para autogestión de turnos). Enfoque en un diseño utilitario, profesional e intuitivo.',
          },
        ],
      },
      {
        tag: '03',
        title: 'Resultado',
        body: 'Transformación de un proceso manual validado en una plataforma de software funcional (SaaS). El desarrollo iterativo basado en testers reales permitió pasar de una solución masiva a un producto enfocado que resuelve la gestión administrativa, la persistencia de datos clínicos mediante agentes de IA y la conciliación autónoma de pagos por transferencia. Se eliminó la fricción financiera de la validación manual de comprobantes, consolidando la base técnica necesaria para soportar el modelo de negocio.',
      },
    ],
  },
  {
    index: '02',
    slug: 'tony-ruiz',
    category: 'Ecommerce',
    title: 'Tony Ruiz Hair Studio',
    description:
      'Landing page + ecommerce para estudio de peluquería. Reservas online, catálogo de productos y experiencia mobile-first.',
    cardDescription: 'Landing page + ecommerce para estudio de peluquería',
    image: cardtr,
    heroColor: '#4A2820',
    slogan: 'Estilo, reservas y venta online en una sola experiencia',
    meta: [
      { label: 'Cliente', value: 'Tony Ruiz Hair Studio' },
      { label: 'Servicios', value: 'Branding / Web design / Ecommerce / SEO' },
      { label: 'Categoría', value: 'Health & beauty / Website' },
      { label: 'Fecha', value: '2024' },
    ],
    gallery: [
      { src: cardtr, alt: 'Tony Ruiz Hair Studio', caption: 'Home y catálogo de productos' },
      { src: cardtr, alt: 'Wireframe Tony Ruiz', caption: 'Estructura de reservas y tienda' },
    ],
    story: [
      {
        tag: '01',
        title: 'Análisis inicial',
        blocks: [
          {
            type: 'paragraph',
            text: 'El cliente, un estudio profesional especializado en coloración y alisados de alta gama, requería inicialmente actualizar su identidad visual y construir una presencia web, sin un alcance estratégico definido. El negocio presentaba un desafío de escalabilidad: consolidar su sucursal histórica en Buenos Aires y potenciar su expansión internacional con un nuevo local en Punta del Este, Uruguay.',
          },
          {
            type: 'paragraph',
            text: 'Intervenimos para diagnosticar las necesidades reales, transformando una demanda estética difusa en un ecosistema digital evolutivo que integró branding, SEO local y un canal de venta e-commerce automatizado.',
          },
        ],
      },
      {
        tag: '02',
        title: 'Arquitectura y diseño',
        blocks: [
          {
            type: 'group',
            title: 'Branding, landing page y SEO local',
            items: [
              {
                label: 'Rediseño de identidad',
                text: 'renovación integral del logo y universo visual para alinearlo con una estética sofisticada, limpia y premium.',
              },
              {
                label: 'Landing page institucional',
                text: 'estructuración de un catálogo claro de servicios profesionales, banner de marcas, botones de redes sociales/WhatsApp y accesibilidad mediante la integración de la API de Google Maps.',
              },
              {
                label: 'Estrategia de posicionamiento local',
                text: 'configuración, optimización de palabras clave y gestión activa de los perfiles de Google Maps para ambas sucursales, sumando campañas de anuncios geolocalizados para acelerar la apertura en el mercado uruguayo.',
              },
            ],
          },
          {
            type: 'group',
            title: 'Expansión de producto (módulo ecommerce)',
            items: [
              {
                label: 'Navegación fluida',
                text: 'diseño de una tienda organizada por categorías y filtros dinámicos.',
              },
              {
                label: 'Checkout',
                text: 'fichas de producto enfocadas en la conversión y un flujo de carrito con baja fricción.',
              },
              {
                label: 'Pasarela de pagos',
                text: 'integración de la API de Mercado Pago para automatizar el procesamiento seguro de transacciones.',
              },
            ],
          },
        ],
      },
      {
        tag: '03',
        title: 'Resultado',
        blocks: [
          {
            type: 'group',
            title: 'Reputación',
            intro: 'La estrategia de posicionamiento y captura de reviews validó el éxito comercial en ambas plazas físicas:',
            items: [
              { label: 'Sucursal Buenos Aires', text: '4.6 ⭐ (192 comentarios).' },
              { label: 'Sucursal Punta del Este', text: '5.0 ⭐ (123 comentarios).' },
            ],
          },
          {
            type: 'group',
            title: 'Nueva unidad de negocio 24/7',
            text: 'El módulo ecommerce habilitó la venta de productos de forma automatizada. El estudio diversificó sus ingresos con una fuente secundaria que monetiza su stock de manera independiente.',
          },
          {
            type: 'group',
            title: 'Identidad visual',
            text: 'El rediseño visual reposicionó al negocio atrayendo a un perfil de cliente de mayor valor.',
          },
        ],
      },
    ],
  },
  {
    index: '03',
    slug: 'frzm',
    category: 'Landing page',
    title: 'Portfolio personal',
    description:
      'Portfolio propio con estética futurista/sci-fi, navegación interactiva y carga optimizada de assets visuales.',
    cardDescription: 'Portfolio de diseño',
    image: '/frzm.png',
    heroColor: '#1C1C2E',
    slogan: 'Un portfolio que demuestra diseño, motion y código en acción',
    meta: [
      { label: 'Cliente', value: 'FRZM' },
      { label: 'Servicios', value: 'Diseño web / Frontend' },
      { label: 'Fecha', value: '2026' },
      { label: 'Categoría', value: 'Landing page / Portfolio' },
    ],
    gallery: [
      { src: '/frzm.png', alt: 'Portfolio FRZM', caption: 'Vista principal del portfolio' },
      { src: '/frzm.png', alt: 'Wireframe FRZM', caption: 'Layout y jerarquía de secciones' },
    ],
    story: [
      {
        tag: '01',
        title: 'Análisis inicial',
        body: 'Diseño y desarrollo de una plataforma de portfolio propia e independiente para reemplazar sitios de terceros (como Behance). El objetivo fue crear una landing page directa y funcional con estética futurista/sci-fi.',
      },
      {
        tag: '02',
        title: 'Arquitectura y diseño',
        items: [
          {
            text: 'Estética cyberpunk enfocada en un diseño limpio de alto impacto visual.',
          },
          {
            text: 'Sistema de navegación interactivo con íconos.',
          },
          {
            text: 'Organización concisa de proyectos en una sola interfaz.',
          },
          {
            text: 'Desarrollo ágil y optimizado para asegurar cargas rápidas de los assets visuales.',
          },
        ],
      },
      {
        tag: '03',
        title: 'Resultado',
        body: 'Una plataforma web interactiva y personalizada que elimina el ruido de las redes tradicionales. Funciona como un producto digital conciso que expone de forma directa las herramientas de diseño utilizadas y la calidad de los trabajos.',
      },
    ],
  },
  {
    index: '04',
    slug: 'cannlabs',
    category: 'Corporate Website',
    title: 'CannLabs',
    description:
      'Sitio corporativo informativo que sintetiza la propuesta agroindustrial, la tecnología aplicada y el catálogo de productos para el mercado global.',
    cardDescription:
      'Sitio web para empresa productora de extracto de yerba mate, stevia y té',
    image: logocannlabs1,
    heroColor: '#2A3D2A',
    slogan: 'Del campo al consumidor con trazabilidad y propósito',
    meta: [
      { label: 'Cliente', value: 'CannLabs' },
      { label: 'Servicios', value: 'Branding / Web Design / UX Writing' },
      { label: 'Fecha', value: '2024' },
      { label: 'Categoría', value: 'Corporate Website' },
    ],
    gallery: [
      { src: logocannlabs1, alt: 'CannLabs website', caption: 'Home institucional' },
      { src: logocannlabs1, alt: 'Wireframe CannLabs', caption: 'Mapa de contenidos y secciones' },
    ],
    story: [
      {
        tag: '01',
        title: 'Análisis inicial',
        body: 'El objetivo fue estructurar un sitio informativo, profesional y de alta confianza que sintetice de manera clara la propuesta de valor agroindustrial, la tecnología aplicada y el catálogo de productos para el mercado global.',
      },
      {
        tag: '02',
        title: 'Arquitectura y diseño',
        items: [
          {
            text: 'Diseño de logotipo y dirección de arte con enfoque minimalista profesional, utilizando una paleta cromática basada en tonos verdes y orgánicos alineados a la industria.',
          },
          {
            text: 'Implementación de animaciones por scroll (scroll reveals) para suavizar la carga de contenidos, acompañadas de un carrusel infinito para la exposición fluida de marcas asociadas.',
          },
          {
            text: 'Integración directa de un formulario de contacto, enlaces a redes sociales y mapa dinámico de Google Maps para la localización de la planta.',
          },
        ],
      },
      {
        tag: '03',
        title: 'Resultado',
        body: 'Un canal digital corporativo efectivo y estéticamente limpio que unifica el wording comercial con los procesos técnicos de la empresa. La plataforma funciona como una herramienta institucional sólida para la captación de clientes B2B, reflejando innovación y sostenibilidad.',
      },
    ],
  },
  {
    index: '05',
    slug: 'maxtech',
    category: 'Web Catalog',
    title: 'Maxtech Latam',
    description:
      'Catálogo digital corporativo para importadora de insumos industriales, con búsqueda interna y conversión directa vía WhatsApp y email.',
    cardDescription: 'Catálogo para importadora de insumos industriales',
    image: cardmaxtech,
    heroColor: '#1E2D3D',
    slogan: 'Catálogo industrial con búsqueda inteligente y gestión autónoma',
    meta: [
      { label: 'Cliente', value: 'Maxtech Latam' },
      { label: 'Servicios', value: 'UI Layout / Web Design' },
      { label: 'Fecha', value: '2024' },
      { label: 'Categoría', value: 'Web Catalog' },
    ],
    gallery: [
      { src: cardmaxtech, alt: 'Maxtech Latam', caption: 'Catálogo y filtros de producto' },
      { src: cardmaxtech, alt: 'Wireframe Maxtech', caption: 'Estructura de búsqueda y categorías' },
    ],
    story: [
      {
        tag: '01',
        title: 'Análisis inicial',
        body: 'Centralizar y categorizar productos para su exhibición online, reemplazando la venta automatizada por una estrategia de conversión directa hacia WhatsApp y email. Se trabajó sobre la identidad preexistente del cliente para estructurar una plataforma limpia y profesional.',
      },
      {
        tag: '02',
        title: 'Arquitectura y diseño',
        items: [
          {
            text: 'Procesamiento y composición manual en Figma de todo el banco de imágenes del cliente. Se normalizaron resoluciones, proporciones y encuadres para garantizar una grilla de productos simétrica, consistente y de aspecto profesional.',
          },
          {
            text: 'Configuración de la paleta cromática del sitio a partir del logotipo provisto por el cliente, adaptando los contrastes y jerarquías visuales a las convenciones estéticas del rubro industrial.',
          },
          {
            text: 'Implementación de un motor de búsqueda interno acompañado de un sistema de catálogo estructurado por categorías, filtros y páginas de detalle de producto.',
          },
          {
            text: 'Configuración del flujo de usuario enfocado a la cotización manual, integrando accesos directos de contacto (WhatsApp y formularios de email) en lugar de un carrito de compras tradicional.',
          },
        ],
      },
      {
        tag: '03',
        title: 'Resultado',
        body: 'Un catálogo digital corporativo que jerarquiza la oferta de la importadora. Una interfaz limpia que facilita la búsqueda de insumos y acelera el contacto comercial directo con el equipo de ventas.',
      },
    ],
  },
  {
    index: '06',
    slug: 'lp-odontologia',
    category: 'SaaS',
    title: 'MALDA®',
    description:
      'Sistema de gestión de agenda y control de pagos para gimnasio de entrenamientos personalizados.',
    cardDescription:
      'Sistema de gestión de agenda y control de pagos para gimnasio de entrenamientos personalizados',
    image: '/portada.png',
    heroColor: '#1A1A1A',
    slogan: 'Autogestión de agenda y pagos para entrenamiento personalizado',
    meta: [
      { label: 'Cliente', value: 'MALDA' },
      { label: 'Servicios', value: 'Full-stack development / UX/UI design / Business automation' },
      { label: 'Categoría', value: 'Landing page / SaaS / Product design' },
      { label: 'Fecha', value: '2025' },
    ],
    gallery: [
      { src: '/03_Sistema_Logo_Blanco_Transparente_Malda.png', alt: 'MALDA' },
    ],
    story: [
      {
        tag: '01',
        title: 'Análisis inicial',
        blocks: [
          {
            type: 'paragraph',
            text: 'El cliente transitaba una fase crítica de escalabilidad de negocio, la transición de un espacio de entrenamiento doméstico y limitado a un local comercial con mayor capacidad. El modelo de negocio se basa en el entrenamiento personalizado en simultáneo (cupos limitados con rutinas individuales), un formato de alta fidelización pero con una logística compleja.',
          },
          {
            type: 'paragraph',
            text: 'Previo a la intervención de la agencia, el 100% de la gestión operativa, comercial y administrativa se centralizaba de manera manual a través de WhatsApp. Esto generaba tres fricciones críticas:',
          },
          {
            type: 'list',
            items: [
              {
                label: 'Caos logístico',
                text: 'mensajes constantes de cancelaciones, cambios de última hora y reprogramaciones cruzadas que saturaban la atención del entrenador.',
              },
              {
                label: 'Incertidumbre de aforo',
                text: 'falta de previsibilidad en tiempo real sobre la cantidad exacta y la identidad de los alumnos que asistirían a cada franja horaria.',
              },
              {
                label: 'Fuga de ingresos y morosidad',
                text: 'dificultad para trackear de forma transparente los aumentos de tarifas, los estados de pago individuales y la previsión del flujo de caja mensual.',
              },
            ],
          },
          {
            type: 'paragraph',
            text: 'Objetivo: focalizar en la organización y la autogestión completa, con el fin de reducir a cero la fricción comunicativa diaria entre el profesional y el alumno, automatizando las reglas de negocio antes de la apertura del nuevo local.',
          },
        ],
      },
      {
        tag: '02',
        title: 'Arquitectura y diseño',
        blocks: [
          {
            type: 'group',
            title: 'Panel de administración backoffice',
            intro: 'Diseñado como el núcleo operativo del negocio para garantizar previsibilidad y control total:',
            items: [
              {
                label: 'Agenda y control',
                text: 'visualización centralizada en formato calendario de las clases actuales, pasadas y futuras. Permite conocer la carga de alumnos por hora y realizar modificaciones manuales (agregar/quitar alumnos, aplicar ausencias).',
              },
              {
                label: 'Master switch (configuración)',
                text: 'panel de control global donde el administrador define la cantidad de clases diarias, duración de las mismas, capacidad máxima global y particular por módulo horario, topes de reserva y mínimos de asistencia semanal requeridos.',
              },
              {
                label: 'Gestión de feriados y fines de semana',
                text: 'interfaz dedicada para anular turnos recurrentes en días festivos (liberando el cupo) y configurar capacidades u horarios específicos para días no habituales (como fines de semana bloqueados por defecto) de forma individual.',
              },
            ],
          },
          {
            type: 'group',
            title: 'Panel de usuario',
            items: [
              {
                label: 'Onboarding y configuración de plan',
                text: 'en el primer inicio de sesión, el sistema obliga al usuario a parametrizar su esquema de asistencia mensual. Esto registra en la base de datos la frecuencia y automatiza el cálculo de su tarifa correspondiente.',
              },
              {
                label: 'Agenda',
                text: 'espacio personalizado para visualizar los horarios fijos asignados y gestionar cancelaciones.',
              },
            ],
          },
          {
            type: 'group',
            title: 'Créditos y vacantes',
            items: [
              {
                label: 'Lógica de compensación',
                text: 'si un usuario cancela una clase, el sistema no altera el dinero a abonar en el mes corriente (evitando cancelaciones malintencionadas de períodos completos). En su lugar, la clase se computa como un "crédito a favor".',
              },
              {
                label: 'Tablero de vacantes dinámico',
                text: 'las clases canceladas o los cupos remanentes de una clase (ej. 4 de 5 cupos ocupados) se reflejan automáticamente en una vista de calendario mensual para toda la comunidad. Cualquier alumno puede reservar esa vacante para recuperar una sesión o sumar un entrenamiento extra.',
              },
            ],
          },
          {
            type: 'group',
            title: 'UX writing y landing page',
            text: 'Dado que MALDA funciona en un local a la calle pero bajo un formato no convencional, se diseñó una landing page informativa que actúa como primer filtro. Explica de forma clara y directa la metodología, la obligatoriedad de la agenda fija y la exclusividad del acceso mediante la app, evitando que el coach pierda tiempo de trabajo explicando el sistema a peatones casuales.',
          },
        ],
      },
      {
        tag: '03',
        title: 'Resultado',
        blocks: [
          {
            type: 'list',
            items: [
              {
                label: 'Eliminación del trabajo administrativo manual',
                text: 'reducción prácticamente a cero del tiempo invertido en responder mensajes de coordinación logística. Toda cancelación, reprogramación y reserva de vacantes quedó en manos de los alumnos de manera autónoma.',
              },
              {
                label: 'Transparencia y control financiero',
                text: 'a través del módulo de gestión de pagos, el administrador obtuvo un balance mensual predictivo. Ahora puede visualizar en tiempo real los ingresos proyectados, los montos percibidos, los saldos pendientes e identificar de forma inmediata a los usuarios morosos.',
              },
              {
                label: 'Optimización de la capacidad',
                text: 'el tablero de vacantes generó un ecosistema colaborativo donde las horas muertas o canceladas se reaprovechan orgánicamente por otros alumnos, maximizando la rentabilidad del espacio por hora sin intervención del staff.',
              },
              {
                label: 'Filtro',
                text: 'la landing page resolvió la fricción del local a la calle, educando al cliente ideal antes de su ingreso al sistema y derivando a los usuarios directamente al flujo de registro y selección de plan en la app.',
              },
            ],
          },
        ],
      },
    ],
  },
];
