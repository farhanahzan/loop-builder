
import interactive from '../assets/images/mobile/image-interactive.jpg';
import desktopInteractive from '../assets/images/desktop/image-interactive.jpg';
export const SectionOne = () => {
  return (
    <section className="relative max-w-2xl lg:max-w-[70rem] mx-auto px-6 lg:px-8 mt-16 py-10 lg:py-14 flex flex-col justify-center items-center lg:items-start transition-all ease-in-out delay-150 duration-300 ">
      <img
        className="h-56 md:h-72  lg:hidden transition-all ease-in-out delay-150 duration-700 "
        src={interactive}
        alt="Interactive"
      />
      <img
        className="w-full max-w-[45rem] hidden lg:block transition-all ease-in-out delay-150 duration-300 "
        src={interactive}
        alt="desktopInteractive"
      />
      <div className="bg-[#ffffff] w-full px-3 py-8 lg:absolute lg:-bottom-4 lg:p-20 lg:right-0 lg:max-w-[32.5rem] ">
        <h2 className="text-center text-[2rem] lg:text-[2.6rem] leading-[2rem] lg:leading-[2.8rem]  font-josefin text-Black uppercase  p-2 ">
          The Leader In Interactive VR
        </h2>
        <p className="font-alata text-sm text-DarkGray text-center  tracking-wide   p-2  lg:max-w-xs lg:mx-auto">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some Of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};
