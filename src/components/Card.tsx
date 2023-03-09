type CardProps = {
  image: string;
  label: string;
  classNames:string
};
export const Card = ({ image, label, classNames }: CardProps) => {
  return (
    <div
      className={classNames+(
        'group relative max-w-sm md:max-w-[30rem]  h-32 w-full hover:font-semibold '
      )}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="min-h-full rounded-md bg-cover bg-center overflow-hidden bg-blend-overlay bg-[#00000069] drop-shadow-[0px_7px_5px_rgba(0,0,0,0.42)]    hover:filter-none group-hover:blur-sm hover:bg-[#0a0a0a6b] "
      >
        {/* <img className="opacity-60" src={image} alt={label} /> */}
      </div>
      <h2 className="absolute bottom-3 left-4  font-josefin text-[1.6rem] leading-7 uppercase tracking-wide text-White w-[7.5rem] md:w-full z-50   group-hover:drop-shadow-2xl group-hover:shadow-Black ">
        {label}
      </h2>
    </div>
  );
};
