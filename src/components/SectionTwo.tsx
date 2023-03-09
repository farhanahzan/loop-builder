import { Card } from './Card';
import {images} from '../components/cardImages'



export function classNames(...classes: (string | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}


export const SectionTwo = () => {
  var even;
  return (
    <section className="max-w-2xl mx-auto px-6 md:px-0 mt-16 py-10 flex flex-col justify-start items-center">
      <h2 className="text-center text-[2rem] leading-[2rem] tracking-wide   font-josefin text-Black uppercase  pb-12">
        Our Creations
      </h2>
      <div className={classNames('flex flex-col  items-center md:items-end  gap-5 w-full')}>
        {images.map((card, id) => {
          even = id % 2 == 0;
          var odd = id % 2 == 1;
          const classNames = [
            even && 'md:self-start ',
            odd && 'md:self-end',
          ].join(' ');
          return (
            <Card
              classNames={classNames}
              key={id}
              image={card.image}
              label={card.label}
            />
          );
        })}
      </div>
      <button className="text-sm font-alata uppercase  text-Black border-2 border-DarkGray px-8 py-2 my-8 tracking-widest hover:bg-Black hover:text-White hover:border-0">
        See All
      </button>
    </section>
  );
}
