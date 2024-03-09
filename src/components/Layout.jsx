import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import MenuOpen from '../assets/menu-open.svg';
import MenuClose from '../assets/menu-close.svg';
import Home from '../assets/home-icon.svg';
import FBLogo from '../assets/facebook-logo.png';
import contact from '../assets/contact-icon.svg';
import FBLogoHover from '../assets/facebook-logo-hover.png';
import GithubLogo from '../assets/github-logo.png';
import GithubLogoHover from '../assets/github-logo-hover.png';
import LinkedinLogo from '../assets/linkedin-logo.png';
import LinkedinLogoHover from '../assets/linkedin-logo-hover.png';
import Contact from './Contact';
import ResumeDownload from './ResumeDownload';
import ScrollDown from './ScrollDown';
function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickScroll = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-craft flex flex-col bg-bottom">
      <div className="container mx-auto flex flex-col flex-grow-1  justify-between max-w-[1200px] md:w-4/5 min-h-dvh lg:min-h-[700px] ">
        <header className="flex flex-col md:items-center pt-6 md:pt-8">
          <div className="flex flex-row justify-between items-center md:justify-center relative h-8">
            <div className="font-osvald font-bold text-gray-700 text-2xl ">Viktória Kóta</div>
            <div onClick={handleMenuToggle} className="md:hidden cursor-pointer" role="button" tabIndex={0}>
              <img
                src={MenuOpen}
                className={`h-10 w-10 ${isOpen ? 'hidden' : 'block hover:scale-110'}`}
                alt="open menu icon"
              />
            </div>
          </div>
          <nav
            className={`absolute top-0 right-0 text-right md:relative md:flex md:w-auto font-elite  ${isOpen ? 'block bg-black bg-opacity-10 min-h-screen py-4 px-4 w-1/10 shadow-lg' : 'hidden'}`}
          >
            <div className="md:hidden flex justify-center">
              <div
                onClick={handleMenuToggle}
                className={`h-10 w-10 md:absolute cursor-pointer ${isOpen ? 'block z-10' : 'hidden'}`}
                role="button"
                tabIndex={0}
              >
                <img src={MenuClose} className="h-full" alt="close menu icon" />
              </div>
            </div>
            <NavLink
              to="/"
              href="#home"
              onClick={isOpen ? handleMenuToggle : ''}
              className="flex flex-col items-center md:inline-block mt-5 md:mt-0 md:mr-7 hover:scale-110 text-gray-700 hover:text-orange-800"
            >
              <img src={Home} className={`${isOpen ? 'h-5 w-10 block' : 'hidden'}`} alt="home icon" />
              <p className="text-xl md:text-2xl lg:text-3xl">Home</p>
            </NavLink>
            <NavLink
              to="/about"
              href="#about"
              onClick={isOpen ? handleMenuToggle : ''}
              className="flex flex-col items-center md:inline-block mt-5 md:mt-0 md:mr-7 hover:scale-110 text-gray-700 hover:text-orange-800"
            >
              <img src={Home} className={`${isOpen ? 'h-5 w-10 block' : 'hidden'}`} alt="about icon" />
              <p className="text-xl md:text-2xl lg:text-3xl">Me</p>
            </NavLink>
            <NavLink
              to="/about"
              href="#about"
              onClick={isOpen ? handleMenuToggle : ''}
              className="flex flex-col items-center md:inline-block mt-5 md:mt-0 md:mr-7 hover:scale-110 text-gray-700 hover:text-orange-800"
            >
              <img src={Home} className={`${isOpen ? 'h-5 w-10 block' : 'hidden'}`} alt="skills icon" />
              <p className="text-xl md:text-2xl lg:text-3xl">Skills</p>
            </NavLink>
            <NavLink
              to="/works"
              href="#works"
              onClick={isOpen ? handleMenuToggle : ''}
              className="flex flex-col items-center md:inline-block mt-5 md:mt-0 md:mr-7 hover:scale-110 text-gray-700 hover:text-orange-800"
            >
              <img src={Home} className={`${isOpen ? 'h-5 w-10 block' : 'hidden'}`} alt="skills icon" />
              <p className="text-xl md:text-2xl lg:text-3xl">Works</p>
            </NavLink>
            <NavLink
              onClick={
                isOpen
                  ? () => {
                      handleClickScroll();
                      handleMenuToggle();
                    }
                  : handleClickScroll
              }
              className="flex flex-col items-center md:inline-block mt-5 md:mt-0 md:mr-0 hover:scale-110 text-gray-700 hover:text-orange-800"
            >
              <img src={contact} className={`${isOpen ? 'h-8 w-10 block' : 'hidden'}`} alt="contact icon" />
              <p className="text-xl md:text-2xl lg:text-3xl">Contact</p>
            </NavLink>
          </nav>
        </header>
        <Outlet />
        <div className="hidden md:block">
          <ResumeDownload />
        </div>
        <ScrollDown />
      </div>
      <div className="block md:hidden">
        <ResumeDownload />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <footer className="container mx-auto py-4">
        <div className="flex flex-col items-center md:items-stretch">
          <div className="text-gray-800 md:text-md font-osvald font-bold">Yeees, it is still me :)</div>
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="flex mt-3 space-x-4 md:space-x-5">
              <a
                className="relative flex justify-center md:justify-start items-center hover:scale-110 cursor-pointer"
                href="https://facebook.com/Babszem/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={FBLogo}
                  alt="fb logo"
                  className=" transition duration-300 transform w-9 opacity-100 hover:opacity-0"
                />
                <img src={FBLogoHover} alt="fb logo hover" className="w-9 absolute opacity-0 hover:opacity-100" />
              </a>
              <a
                className="relative flex justify-center md:justify-start items-center hover:scale-110 cursor-pointer"
                href="https://github.com/vikikota"
                target="_blank"
                aria-label="github button"
                rel="noreferrer"
              >
                <img
                  src={GithubLogo}
                  alt="github logo"
                  className=" transition duration-300 transform w-9 hover:opacity-0"
                />
                <img
                  src={GithubLogoHover}
                  alt="github logo hover"
                  className="w-9 absolute opacity-0 hover:opacity-100 "
                />
              </a>
              <a
                className="relative flex justify-center md:justify-start items-center hover:scale-110 cursor-pointer"
                href="https://www.linkedin.com/in/viktoria-kota-1b0a382ab/"
                target="_blank"
                aria-label="linkedin button"
                rel="noreferrer"
              >
                <img
                  src={LinkedinLogo}
                  alt="Linkedin logo"
                  className=" transition duration-300 transform w-9 hover:opacity-0"
                />
                <img
                  src={LinkedinLogoHover}
                  alt="Linkedin logo hover"
                  className="w-9 absolute opacity-0 hover:opacity-100"
                />
              </a>
            </div>
            <div className="mt-4 md:mt-0 text-center text-sm font-osvald text-gray-800">© 2024 Viktória Kóta</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
