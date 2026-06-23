/** Bump al reemplazar public/herodesktop.png para evitar caché del navegador */
const HERO_DESKTOP_IMAGE_VERSION = '20260623';

export const HERO_DESKTOP_IMAGE_SRC = `/herodesktop.png?v=${HERO_DESKTOP_IMAGE_VERSION}`;
export const HERO_DESKTOP_WIDTH = 1440;
export const HERO_DESKTOP_HEIGHT = 815;
export const HERO_DESKTOP_ASPECT = `${HERO_DESKTOP_WIDTH} / ${HERO_DESKTOP_HEIGHT}`;

export const HeroDesktopImage = () => {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-0 hidden w-full lg:block">
      <div
        className="relative w-full overflow-hidden bg-black"
        style={{ aspectRatio: HERO_DESKTOP_ASPECT }}
      >
        <img
          src={HERO_DESKTOP_IMAGE_SRC}
          alt=""
          aria-hidden
          fetchPriority="high"
          decoding="async"
          width={HERO_DESKTOP_WIDTH}
          height={HERO_DESKTOP_HEIGHT}
          className="block h-full w-full"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-black/30"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/90 to-transparent"
          aria-hidden
        />
      </div>
    </div>
  );
};
