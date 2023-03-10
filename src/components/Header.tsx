import logo from '../assets/images/logo.svg'
import menuIcon from '../assets/images/icon-hamburger.svg'
import {useState} from 'react'
import { MobileMenu } from './MobileMenu'
import { menu } from '../components/cardImages';

export const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const handleClose=()=>{
    setOpenMobileMenu(false)
  }
  const handleOpen =()=>{
    setOpenMobileMenu(true)
  }
  return (
    <header className="max-w-2xl lg:max-w-[70rem]    mx-auto absolute top-0 left-0 right-0 z-10">
      <div className="bg-transparent px-6  mt-10 flex flex-row justify-between items-center">
        <img className="w-64 max-w-[48%] lg:w-40" src={logo} alt="logo" />
        <img
          src={menuIcon}
          className="h-4 sm:h-5 transition ease transform duration-300  lg:hidden "
          alt="menu icon"
          onClick={handleOpen}
        />
        <ul className="relative text-White text-sm font-alata   lg:flex lg:flex-row lg:gap-7 px-8 hidden">
          {menu.map((m, index) => (
            <li
              key={index}
              className="group  my-3 py-2  flex flex-col items-center gap-1"
            >
              <a href={m.link}>{m.label}</a>
              <span className=" group-hover:block absolute top-10 bg-transparent h-[2px] w-0 lg:w-7 group-hover:bg-White transition ease-in-out delay-300 duration-500 group-hover:translate-y-2  "></span>
            </li>
          ))}
        </ul>
      </div>
      {openMobileMenu ? <MobileMenu onClose={handleClose} /> : null}
    </header>
  );
}
