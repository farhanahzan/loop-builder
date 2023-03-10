import React from 'react';

function HeroSection() {
  return (
    <section className="mx-auto bg-hero-image lg:bg-desktop-hero-image  h-[40rem] bg-cover bg-no-repeat bg-top md:bg-center bg-blend-darken  bg-[#0000006b] transition-all ease-in-out delay-150 duration-300  ">
      <div className="lg:max-w-[70rem] mx-auto flex flex-col justify-center items-center lg:items-start  px-6 py-10">
        <div className="max-w-[39rem]  mt-52  border-2 border-White w-full  p-6  lg:p-10  transition-all ease-in-out delay-150 duration-300 ">
          <h1 className="table-caption lg:block text-[2em] sm1:text-[2.75rem] lg:text-[3.8rem] leading-[1em] tracking-wide   font-josefin text-White uppercase transition-all ease-in-out delay-150 duration-300 ">
            Immersive Experiences that deliver
          </h1>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
