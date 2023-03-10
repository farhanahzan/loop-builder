import logo from '../assets/images/logo.svg';
import { menu } from '../components/cardImages';
import { socialMediaIcons } from '../components/cardImages';

export const Footer = () => {
  return (
    <footer className="  mt-16 py-10 lg:py-16 lg:pb-24 bg-Black lg:mt-36">
      <div className=" px-6 lg:px-10 lg:max-w-[70rem] mx-auto flex flex-col lg:flex-row  items-center lg:items-end lg:justify-between ">
        <div>
          <img className="h-8 mx-auto lg:ml-0" src={logo} alt="logo" />
          <ul className="text-White text-base font-alata text-center py-5 md:py-10 lg:pb-0 lg:pt-16 md:flex md:flex-row md:gap-7">
            {menu.map((m, index) => (
              <li
                key={index}
                className="group relative my-3 py-2  flex flex-col items-center gap-1 lg:my-0 lg:py-0"
              >
                <a href={m.link}>{m.label}</a>
                <span className=" group-hover:block absolute top-6 bg-transparent h-[2px] w-0 lg:w-7 group-hover:bg-White transition ease-in-out delay-300 duration-500 group-hover:translate-y-2 "></span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex gap-7 pb-8 justify-center lg:justify-end ">
            {socialMediaIcons.map((icon, index) => (
              <a href={icon.link} className="group  relative flex flex-col items-center gap-1 ">
                <img className="h-7" src={icon.image} alt="socialmedia" />
                <span className=" group-hover:block absolute top-7 bg-transparent h-[2px] w-0 lg:w-3 group-hover:bg-White transition ease-in-out delay-300 duration-500 group-hover:translate-y-2 "></span>
              </a>
            ))}
          </div>

          <p className="font-alata text-base text-DarkGray">
            © {new Date().getFullYear()} Loopstudies. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
