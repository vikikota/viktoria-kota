import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import LinkedInLogo from '../assets/linkedin-logo.svg';
import FBLogo from '../assets/facebook-logo.svg';
import GithubLogo from '../assets/github-logo.svg';
import MenuOpen from '../assets/menu-open.svg';
import MenuClose from '../assets/menu-close.svg';
import Typewriter from './Typewriter';

function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const displayText = "Yeeeees, it's still me.";

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-craft flex flex-col min-h-screen bg-bottom">
      <div className="container mx-auto flex-grow">
        <header className="flex flex-col md:items-center py-5">
          <nav
            className={`absolute top-0 right-0 text-right md:relative md:flex md:w-auto font-reenie text-3xl uppercase ${isOpen ? 'block bg-white min-h-screen py-4 px-4 w-1/10' : 'hidden'}`}
          >
            <div className="md:hidden flex justify-center">
              <div
                onClick={handleMenuToggle}
                className={`h-10 w-10 md:absolute cursor-pointer ${isOpen ? 'block z-10' : 'hidden'}`}
                role="button"
                tabIndex={0}
              >
                <img src={MenuClose} className="h-full w-full" alt="close menu icon" />
              </div>
            </div>
            <NavLink to="/" href="#home" className="block mt-4 md:inline-block md:mt-0 md:mr-6">
              Home
            </NavLink>
            <NavLink to="/about" href="#about" className="block mt-4 md:inline-block md:mt-0 md:mr-6">
              About me
            </NavLink>
            <NavLink to="/about" href="#" className="block mt-4 md:inline-block md:mt-0 md:mr-6">
              Skills
            </NavLink>
            <NavLink to="/about" href="#" className="block mt-4 md:inline-block md:mt-0">
              Contact
            </NavLink>
          </nav>

          <div className="flex flex-row justify-between items-center md:justify-center relative h-8">
            <div>LOGO</div>
            <div onClick={handleMenuToggle} className="md:hidden cursor-pointer" role="button" tabIndex={0}>
              <img src={MenuOpen} className={`h-10 w-10 ${isOpen ? 'hidden' : 'block'}`} alt="open menu icon" />
            </div>
          </div>
        </header>
        <Outlet />
      </div>
      <footer>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <div className="text-gray-800 mt-3 text-xl font-semibold uppercase">
                <Typewriter text={displayText} />
              </div>
              <div className="flex mt-8 space-x-5">
                <a
                  className="hover:opacity-75 hover:scale-110 cursor-pointer"
                  href="https://facebook.com/Babszem/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={FBLogo} className="h-11" alt="logo" />
                </a>
                <a
                  className="hover:opacity-75 hover:scale-110  cursor-pointer"
                  href="https://github.com/vikikota"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={GithubLogo} className="h-11" alt="logo" />
                </a>
                <a
                  className="hover:opacity-75 hover:scale-110 cursor-pointer"
                  href="https://www.linkedin.com/in/viktoria-kota-1b0a382ab/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={LinkedInLogo} className="h-11" alt="logo" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
              <div />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
