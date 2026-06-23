import { HeroTypewriter } from './HeroTypewriter';

const Hero = ({ lang = 'ES' }) => {
  return (
    <div
      className="relative w-full min-h-screen overflow-x-clip overflow-y-visible"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="relative z-10 mx-auto w-full min-w-0 max-w-[1000px] px-4 pt-60 pb-8 sm:px-6 md:pt-28 lg:px-8 lg:pt-44 lg:pb-16 xl:pt-52 xl:pb-12 2xl:pt-56 2xl:pb-16">
        <div className="notebook:pt-8">
          <div className="md:pl-2 lg:pl-4">
            <div className="flex w-full min-w-0 flex-col items-start justify-start text-left">
              <HeroTypewriter lang={lang} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
