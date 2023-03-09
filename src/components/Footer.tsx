import logo from '../assets/images/logo.svg';
import { menu } from '../components/cardImages';
import { socialMediaIcons } from '../components/cardImages';


export const Footer = () => {
  return (
    <footer className="px-6 mt-16 py-10 bg-Black flex flex-col justify-center items-center lg:px-[10em]">
      <img className="h-8" src={logo} alt="logo" />
      <ul className="text-White text-base font-alata text-center py-5 md:py-10 md:flex md:flex-row md:gap-7">
        {menu.map((m, index) => (
          <li key={index} className="my-3 py-2">
            <a href={m.link}>{m.label}</a>
          </li>
        ))}
      </ul>
      <div className="flex gap-7 pb-8">
        {socialMediaIcons.map((icon, index) => (
          <a href={icon.link}>
            <img className="h-7" src={icon.image} alt="socialmedia" />
          </a>
        ))}
      </div>

      <p className="font-alata text-base text-DarkGray">
        © {new Date().getFullYear()} Loopstudies. All rights reserved
      </p>
    </footer>
  );
};
