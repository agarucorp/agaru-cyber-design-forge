import type { CaseStudyMeta, CaseStudySection, ProjectCaseStudy } from '@/data/projects';
import { PROJECTS_EN } from '@/data/projects-i18n';

export type Lang = 'ES' | 'EN';

const META_LABEL_EN: Record<string, string> = {
  Cliente: 'Client',
  Servicios: 'Services',
  Categoría: 'Category',
  Fecha: 'Date',
};

const STORY_TITLE_EN: Record<string, string> = {
  'Análisis inicial': 'Initial assessment',
  'Arquitectura y diseño': 'Architecture & design',
  Resultado: 'Outcome',
};

export function getStoredLang(): Lang {
  if (typeof window === 'undefined') return 'ES';
  return localStorage.getItem('agarucorp-lang') === 'EN' ? 'EN' : 'ES';
}

export function storeLang(lang: Lang) {
  localStorage.setItem('agarucorp-lang', lang);
}

export function localizeMeta(meta: CaseStudyMeta[], lang: Lang): CaseStudyMeta[] {
  if (lang === 'ES') return meta;
  return meta.map((item) => ({
    ...item,
    label: META_LABEL_EN[item.label] ?? item.label,
  }));
}

function localizeStorySection(section: CaseStudySection, lang: Lang): CaseStudySection {
  if (lang === 'ES') return section;
  return {
    ...section,
    title: STORY_TITLE_EN[section.title] ?? section.title,
  };
}

export function getLocalizedProject(project: ProjectCaseStudy, lang: Lang): ProjectCaseStudy {
  if (lang === 'ES') return project;

  const en = project.en ?? PROJECTS_EN[project.slug];
  if (!en) {
    return {
      ...project,
      meta: localizeMeta(project.meta, 'EN'),
      story: project.story.map((s) => localizeStorySection(s, 'EN')),
    };
  }

  return {
    ...project,
    cardDescription: en.cardDescription ?? project.cardDescription,
    description: en.description ?? project.description,
    meta: en.meta ?? localizeMeta(project.meta, 'EN'),
    story: en.story ?? project.story.map((s) => localizeStorySection(s, 'EN')),
  };
}

export const UI = {
  services: {
    eyebrow: '// WHAT WE DO',
    title: { ES: 'Servicios', EN: 'Services' },
  },
  projects: {
    eyebrow: '// CASES',
    title: { ES: 'Proyectos', EN: 'Projects' },
    viewCase: { ES: 'Ver caso', EN: 'View case' },
    tapMore: { ES: 'Toca para ver más', EN: 'Tap to see more' },
  },
  caseStudy: {
    notFound: { ES: 'Caso de estudio no encontrado', EN: 'Case study not found' },
    back: { ES: '← Volver', EN: '← Back' },
    projects: { ES: '← Proyectos', EN: '← Projects' },
    caseStudyTitle: { ES: 'Caso de estudio', EN: 'Case study' },
    moreCases: { ES: 'Otros proyectos', EN: 'More projects' },
  },
} as const;

export function t<K extends keyof typeof UI>(
  section: K,
  key: keyof (typeof UI)[K],
  lang: Lang,
): string {
  const value = UI[section][key];
  if (typeof value === 'string') return value;
  return value[lang];
}
