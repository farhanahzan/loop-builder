import logo from '../assets/images/logo.svg';
import close from '../assets/images/icon-close.svg';

import { menu } from '../components/cardImages';

type MobileMenuProps={
    onClose:()=>void
}

export const MobileMenu = ({ onClose }: MobileMenuProps) => {
  return (
    <section className="fixed top-0 right-0 left-0  z-50   overflow-x-hidden overflow-y-hidden md:inset-0  md:h-full bg-Black h-screen flex flex-col justify-center items-start px-6">
      <div className="absolute top-0 left-0 right-0 w-full px-6 py-10  flex flex-row justify-between items-center">
        <img className="w-64 max-w-[48%] " src={logo} alt="logo" />
        <img className="h-5" src={close} alt="close" onClick={onClose} />
      </div>
      <ul className="text-White font-josefin text-left text-[1.6rem] uppercase py-10 sm:flex sm:flex-row sm:gap-4">
        {menu.map((m, index) => (
          <li key={index} className="pb-4">
            {m.label}
          </li>
        ))}
      </ul>
    </section>
  );
};
