import type { ProjectCaseStudy } from './projects';

type ProjectEn = NonNullable<ProjectCaseStudy['en']>;

export const PROJECTS_EN: Record<string, ProjectEn> = {
  calena: {
    cardDescription: 'System for psychologists and self-managed appointments',
    description:
      'Web app for psychologist management and patient connection. UX/UI design, React frontend, and scalable architecture.',
    meta: [
      { label: 'Client', value: 'Calena' },
      { label: 'Services', value: 'Full-stack development / IA automation / Product design' },
      { label: 'Category', value: 'Healthcare technology / SaaS' },
      { label: 'Date', value: '2025' },
    ],
    story: [
      {
        tag: '01',
        title: 'Initial assessment',
        body: 'The client arrived with solid market validation (60+ interviews) that identified a critical friction in the daily management of mental health professionals: scattered channels for appointments, payments, and the risk of losing clinical records.\n\nThe main product challenge was translating the manual flow simulation (operating as a secretary to understand the business logic) into an automated system. Instead of relying on traditional payment gateways, a custom solution was built for real market behavior: patients pay via bank transfer and send the receipt through WhatsApp. The system processes this 100% autonomously, eliminating administrative burden and manual interaction between patient and professional for payment reconciliation.',
      },
      {
        tag: '02',
        title: 'Architecture & design',
        items: [
          {
            label: 'Data infrastructure & backend',
            text: 'database to ensure integrity of patient session history and payment traceability, meeting privacy requirements for health data.',
          },
          {
            label: 'AI agents',
            text: 'integration of agents for transcription, structuring, and storage of session notes, preventing loss of clinical information and optimizing the professional\'s administrative time.',
          },
          {
            label: 'Admin bot',
            text: 'WhatsApp API integration for file reception and an image/document processing pipeline. The bot analyzes the transfer receipt, validates patient identity, detects the amount, and automatically updates account status in the main system.',
          },
          {
            label: 'Frontend & UX',
            text: 'dual admin interface (psychologist view / patient view for self-managed appointments). Focus on utilitarian, professional, and intuitive design.',
          },
        ],
      },
      {
        tag: '03',
        title: 'Outcome',
        body: 'Transformation of a validated manual process into a functional software platform (SaaS). Iterative development based on real testers allowed moving from a broad solution to a focused product that solves administrative management, clinical data persistence through AI agents, and autonomous payment reconciliation via transfer. Manual receipt validation friction was eliminated, consolidating the technical foundation needed to support the business model.',
      },
    ],
  },
  'tony-ruiz': {
    cardDescription: 'Landing page + ecommerce for a hair salon studio',
    story: [
      {
        tag: '01',
        title: 'Initial assessment',
        blocks: [
          {
            type: 'paragraph',
            text: 'The client, a professional studio specialized in high-end coloring and straightening, initially needed to update their visual identity and build a web presence without a defined strategic scope. The business faced a scalability challenge: consolidating their historic Buenos Aires location and boosting international expansion with a new location in Punta del Este, Uruguay.',
          },
          {
            type: 'paragraph',
            text: 'We intervened to diagnose real needs, transforming a vague aesthetic demand into an evolving digital ecosystem integrating branding, local SEO, and an automated e-commerce sales channel.',
          },
        ],
      },
      {
        tag: '02',
        title: 'Architecture & design',
        blocks: [
          {
            type: 'group',
            title: 'Branding, landing page & local SEO',
            items: [
              {
                label: 'Identity redesign',
                text: 'full logo and visual universe refresh aligned with a sophisticated, clean, and premium aesthetic.',
              },
              {
                label: 'Institutional landing page',
                text: 'clear professional services catalog, brand banner, social/WhatsApp buttons, and accessibility through Google Maps API integration.',
              },
              {
                label: 'Local positioning strategy',
                text: 'keyword optimization and active Google Maps profile management for both locations, plus geolocated ad campaigns to accelerate the Uruguayan market launch.',
              },
            ],
          },
          {
            type: 'group',
            title: 'Product expansion (ecommerce module)',
            items: [
              {
                label: 'Fluid navigation',
                text: 'store design organized by categories and dynamic filters.',
              },
              {
                label: 'Checkout',
                text: 'conversion-focused product pages and a low-friction cart flow.',
              },
              {
                label: 'Payment gateway',
                text: 'Mercado Pago API integration to automate secure transaction processing.',
              },
            ],
          },
        ],
      },
      {
        tag: '03',
        title: 'Outcome',
        blocks: [
          {
            type: 'group',
            title: 'Reputation',
            intro: 'The positioning and review capture strategy validated commercial success at both physical locations:',
            items: [
              { label: 'Buenos Aires location', text: '4.6 ⭐ (192 reviews).' },
              { label: 'Punta del Este location', text: '5.0 ⭐ (123 reviews).' },
            ],
          },
          {
            type: 'group',
            title: 'New 24/7 business unit',
            text: 'The ecommerce module enabled automated product sales. The studio diversified revenue with a secondary source that monetizes inventory independently.',
          },
          {
            type: 'group',
            title: 'Visual identity',
            text: 'The visual redesign repositioned the business, attracting a higher-value client profile.',
          },
        ],
      },
    ],
  },
  frzm: {
    cardDescription: 'Design portfolio',
    story: [
      {
        tag: '01',
        title: 'Initial assessment',
        body: 'Create a memorable portfolio that conveys technical expertise and aesthetic sensibility without sacrificing performance or usability.',
      },
      {
        tag: '02',
        title: 'Architecture & design',
        body: 'We explored a futuristic aesthetic with bold typography and micro-interactions. We implemented animations and 3D effects with a performance focus: lazy loading, asset optimization, and testing across multiple devices.',
      },
      {
        tag: '03',
        title: 'Outcome',
        body: 'A landing page that works as a business card and proof of technical and creative capabilities.',
      },
    ],
  },
  cannlabs: {
    cardDescription: 'Website for yerba mate, stevia, and tea extract producer',
    story: [
      {
        tag: '01',
        title: 'Initial assessment',
        body: 'Communicate production processes, sustainability, and natural extract quality to both B2B and end-consumer audiences.',
      },
      {
        tag: '02',
        title: 'Architecture & design',
        body: 'We organized information in layers: value proposition, process, products, and commercial contact. Organic palette, product photography, and traceability sections that reinforce trust and transparency.',
      },
      {
        tag: '03',
        title: 'Outcome',
        body: 'A site that positions CannLabs as a reference in natural extracts with professional, scalable communication.',
      },
    ],
  },
  maxtech: {
    cardDescription: 'Catalog for industrial supplies importer',
    story: [
      {
        tag: '01',
        title: 'Initial assessment',
        body: 'Digitize an extensive industrial supplies catalog with efficient search and autonomous updates by the client.',
      },
      {
        tag: '02',
        title: 'Architecture & design',
        body: 'We designed dynamic filters, clear product pages, and inquiry flows for technical and commercial decision-makers. We implemented an accessible backend to load products, categories, and specifications without external support.',
      },
      {
        tag: '03',
        title: 'Outcome',
        body: 'A digital commercial tool that speeds up inquiries and reduces friction in online inventory management.',
      },
    ],
  },
  'lp-odontologia': {
    cardDescription:
      'Scheduling and payment management system for a personalized training gym',
    description:
      'Scheduling and payment management system for a personalized training gym.',
    meta: [
      { label: 'Client', value: 'MALDA' },
      { label: 'Services', value: 'Full-stack development / UX/UI design / Business automation' },
      { label: 'Category', value: 'Landing page / SaaS / Product design' },
      { label: 'Date', value: '2025' },
    ],
    story: [
      {
        tag: '01',
        title: 'Initial assessment',
        blocks: [
          {
            type: 'paragraph',
            text: 'The client was going through a critical business scalability phase: transitioning from a limited home training space to a commercial location with greater capacity. The business model is based on simultaneous personalized training (limited spots with individual routines)—high loyalty but complex logistics.',
          },
          {
            type: 'paragraph',
            text: 'Before our intervention, 100% of operational, commercial, and administrative management was centralized manually through WhatsApp. This created three critical frictions:',
          },
          {
            type: 'list',
            items: [
              {
                label: 'Logistical chaos',
                text: 'constant messages about cancellations, last-minute changes, and crossed rescheduling that saturated the trainer\'s attention.',
              },
              {
                label: 'Capacity uncertainty',
                text: 'lack of real-time predictability on the exact number and identity of students attending each time slot.',
              },
              {
                label: 'Revenue leakage & delinquency',
                text: 'difficulty transparently tracking fee increases, individual payment statuses, and monthly cash flow forecasts.',
              },
            ],
          },
          {
            type: 'paragraph',
            text: 'Goal: focus on organization and full self-management to reduce daily communication friction between professional and student to zero, automating business rules before the new location opening.',
          },
        ],
      },
      {
        tag: '02',
        title: 'Architecture & design',
        blocks: [
          {
            type: 'group',
            title: 'Admin backoffice panel',
            intro: 'Designed as the operational core of the business for total predictability and control:',
            items: [
              {
                label: 'Schedule & control',
                text: 'centralized calendar view of current, past, and future classes. Shows student load per hour and allows manual changes (add/remove students, mark absences).',
              },
              {
                label: 'Master switch (configuration)',
                text: 'global control panel where the admin defines daily class count, duration, global and per-slot capacity, booking limits, and required weekly attendance minimums.',
              },
              {
                label: 'Holiday & weekend management',
                text: 'dedicated interface to cancel recurring slots on holidays (freeing spots) and configure specific capacities or schedules for non-standard days (like blocked weekends) individually.',
              },
            ],
          },
          {
            type: 'group',
            title: 'User panel',
            items: [
              {
                label: 'Onboarding & plan setup',
                text: 'on first login, the system requires users to set their monthly attendance scheme. This records frequency in the database and automates fee calculation.',
              },
              {
                label: 'Schedule',
                text: 'personalized space to view assigned fixed time slots and manage cancellations.',
              },
            ],
          },
          {
            type: 'group',
            title: 'Credits & openings',
            items: [
              {
                label: 'Compensation logic',
                text: 'if a user cancels a class, the system does not change the amount due for the current month (preventing malicious full-period cancellations). Instead, the class is recorded as a "credit in favor".',
              },
              {
                label: 'Dynamic openings board',
                text: 'cancelled classes or remaining spots (e.g. 4 of 5 occupied) automatically appear on a monthly calendar view for the whole community. Any student can book an opening to recover a session or add extra training.',
              },
            ],
          },
          {
            type: 'group',
            title: 'UX writing & landing page',
            text: 'Since MALDA operates in a street-level location but under a non-conventional format, an informative landing page was designed as a first filter. It clearly explains the methodology, fixed schedule requirements, and app-only access exclusivity—preventing the coach from losing work time explaining the system to casual walk-ins.',
          },
        ],
      },
      {
        tag: '03',
        title: 'Outcome',
        blocks: [
          {
            type: 'list',
            items: [
              {
                label: 'Elimination of manual admin work',
                text: 'practically zero time spent answering logistical coordination messages. All cancellations, rescheduling, and opening bookings are handled autonomously by students.',
              },
              {
                label: 'Financial transparency & control',
                text: 'through the payment management module, the admin gained a predictive monthly balance. They can now view projected income, received amounts, pending balances, and immediately identify delinquent users.',
              },
              {
                label: 'Capacity optimization',
                text: 'the openings board created a collaborative ecosystem where dead hours or cancellations are organically reused by other students, maximizing hourly space profitability without staff intervention.',
              },
              {
                label: 'Filter',
                text: 'the landing page resolved street-level location friction, educating the ideal client before system entry and directing users straight to registration and plan selection in the app.',
              },
            ],
          },
        ],
      },
    ],
  },
};
