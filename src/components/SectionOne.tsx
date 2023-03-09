import interactive from '../assets/images/mobile/image-interactive.jpg';

export const SectionOne = () => {
  return (
    <section className="max-w-2xl mx-auto px-6 mt-16 py-10 flex flex-col justify-center items-center  ">
      <img className="h-56 md:h-72" src={interactive} alt="Interactive" />
      <div className="px-3 py-8">
        <h2 className="text-center text-[2rem] leading-[2rem]  font-josefin text-Black uppercase  p-2 ">
          The Leader In Interactive VR
        </h2>
        <p className="font-alata text-sm text-DarkGray text-center  tracking-wide   p-2">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some Of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};
