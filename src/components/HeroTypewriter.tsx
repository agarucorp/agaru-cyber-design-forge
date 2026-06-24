import { useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

const PHRASES_ES = [
  'productos digitales',
  'sitios web',
  'marca e identidad visual',
  'plataformas y sistemas',
  'ecommerce',
] as const;

const PHRASES_EN = [
  'digital products',
  'websites',
  'brand & visual identity',
  'platforms & systems',
  'ecommerce',
] as const;

const TYPE_MS = 55;
const DELETE_MS = 35;
const PAUSE_MS = 2200;

interface HeroTypewriterProps {
  lang?: 'ES' | 'EN';
  className?: string;
}

const TypewriterCursor = () => (
  <span
    className="ml-[1px] inline-block w-[2px] translate-y-[0.06em] animate-pulse bg-[#B794F6] md:w-[3px]"
    style={{ height: '0.85em' }}
    aria-hidden="true"
  />
);

export const HeroTypewriter = ({ lang = 'ES', className = '' }: HeroTypewriterProps) => {
  const phrases = useMemo(
    () => (lang === 'ES' ? [...PHRASES_ES] : [...PHRASES_EN]),
    [lang]
  );
  const lineOne = lang === 'ES' ? 'Diseño personalizado' : 'Custom design';
  const lineTwoPrefix = lang === 'ES' ? 'de ' : 'for ';
  const longestPhrase = phrases.reduce((a, b) => (a.length >= b.length ? a : b), phrases[0]);

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setPhraseIndex(0);
    setDisplayText('');
    setIsDeleting(false);
  }, [lang]);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    if (!isDeleting && displayText === currentPhrase) {
      const pause = setTimeout(() => setIsDeleting(true), PAUSE_MS);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const delay = isDeleting ? DELETE_MS : TYPE_MS;
    const timer = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentPhrase.slice(0, displayText.length - 1)
          : currentPhrase.slice(0, displayText.length + 1)
      );
    }, delay);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, phrases]);

  return (
    <h1
      className={cn(
        'mb-6 w-full min-w-0 max-w-full font-onest text-[clamp(1.375rem,5vw+0.5rem,3.3125rem)] font-normal leading-[1.2] text-white',
        className
      )}
    >
      <span className="block break-words">{lineOne}</span>
      <span className="block break-words">
        {lineTwoPrefix}
        <span
          className="text-[#B794F6]"
          aria-live="polite"
          aria-atomic="true"
        >
          {/* Mobile / tablet: texto fluido con salto de línea natural */}
          <span className="inline md:hidden">
            {displayText}
            <TypewriterCursor />
          </span>

          {/* Desktop: ancho estable para el typewriter */}
          <span className="relative hidden max-w-full md:inline-block">
            <span className="invisible select-none whitespace-nowrap" aria-hidden="true">
              {longestPhrase}
            </span>
            <span className="absolute left-0 top-0 whitespace-nowrap">
              {displayText}
              <TypewriterCursor />
            </span>
          </span>
        </span>
      </span>
    </h1>
  );
};
