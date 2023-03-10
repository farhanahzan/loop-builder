type CardProps = {
  image: string;
  label: string;
  classNames:string
};
export const Card = ({ image, label, classNames }: CardProps) => {
  return (
    <div
      className={
        classNames +
        'group relative max-w-sm md:max-w-[30rem] lg:max-w-[21.5%] h-32 lg:h-[21rem] w-full hover:font-bold  transition-transform ease-linear delay-150 duration-300 '
      }
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="group min-h-full rounded-md bg-cover bg-center lg:bg-top overflow-hidden bg-blend-overlay bg-[#00000069] drop-shadow-[0px_7px_5px_rgba(0,0,0,0.42)]      hover:bg-[#0a0a0a6b] transition-colors ease-in-out delay-150 duration-500 "
      >
        {/* <img className="opacity-60" src={image} alt={label} /> */}
        <div className="  max-h-full max-w-sm md:max-w-[30rem]  h-32 lg:h-[21rem]   group-hover:backdrop-blur-md group-hover:bg-white/30"></div>
      </div>
      <h2 className="absolute bottom-3 left-4  font-josefin text-[1.6rem] leading-7 uppercase tracking-wide text-White w-[7.5rem] md:w-full lg:w-14 z-50  group-hover:drop-shadow-2xl group-hover:shadow-Black transition-none ">
        {label}
      </h2>
    </div>
  );
};
