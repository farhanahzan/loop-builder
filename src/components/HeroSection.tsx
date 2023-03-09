import React from 'react';

function HeroSection() {
  return (
    <section className="mx-auto bg-hero-image lg:bg-desktop-hero-image  h-[40rem] bg-cover bg-no-repeat bg-top md:bg-center bg-blend-darken  bg-[#0000006b] flex flex-col justify-center items-center lg:items-start px-6 py-10">
      <div className="max-w-[39rem]  mt-16  border-2 border-White w-full  p-6  lg:p-10 lg:mx-[10em]  ">
        <h1 className="table-caption lg:block text-[2em] sm:text-[2.75rem] lg:text-[3.8rem] leading-[1em] tracking-wide   font-josefin text-White uppercase">
          Immersive Experiences that deliver
        </h1>
      </div>
    </section>
  );
}

export default HeroSection;
