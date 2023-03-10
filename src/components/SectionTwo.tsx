import { useState, useEffect } from 'react';

import { Card } from './Card';
import { mobileImages } from '../components/cardImages';
import { desktopImages } from '../components/cardImages';

export function classNames(...classes: (string | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export const SectionTwo = () => {
  var even;
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  console.log(windowSize[0]);
  return (
    <section className="max-w-2xl lg:max-w-[70rem] mx-auto px-6 md:px-0 mt-16 py-10 flex flex-col justify-start items-center transition-all ease-in-out delay-150 duration-300 ">
      <div className="pb-12 lg:pb-4 lg:px-8 lg:w-full lg:flex flex-row items-center justify-between ">
        <h2 className="text-center text-[2rem] leading-[2rem] tracking-wide   font-josefin text-Black uppercase ">
          Our Creations
        </h2>

        <button className="text-sm font-alata uppercase  text-Black border-2 border-DarkGray px-8 py-2 my-8 tracking-widest hover:bg-Black hover:text-White hover:border-Black hidden lg:block transition-all ease-in-out delay-150 duration-700 hover:animate-pulse">
          See All
        </button>
      </div>
      <div
        className={classNames(
          'flex flex-col lg:flex-row  items-center md:items-end lg:justify-center lg:flex-wrap  gap-5 lg:gap-8 w-full   '
        )}
      >
        {(windowSize[0] > 1024 ? desktopImages : mobileImages).map(
          (card, id) => {
            even = id % 2 == 0;
            var odd = id % 2 == 1;
            const classNames = [
              even && 'md:self-start lg:self-center',
              odd && 'md:self-end lg:self-center',
            ].join(' ');
            return (
              <Card
                classNames={classNames}
                key={id}
                image={card.image}
                label={card.label}
              />
            );
          }
        )}
      </div>
      <button className="text-sm font-alata uppercase  text-Black border-2 border-DarkGray px-8 py-2 my-8 tracking-widest hover:bg-Black hover:text-White hover:border-Black lg:hidden transition-all ease-out ">
        See All
      </button>
    </section>
  );
};
