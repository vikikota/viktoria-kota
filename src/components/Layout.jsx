import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import MenuOpen from '../assets/menu-open.svg';
import MenuClose from '../assets/menu-close.svg';
import Home from '../assets/home-icon.svg';
import Contact from '../assets/contact-icon.svg';
import Typewriter from './Typewriter';

function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const displayText = "Yeees, it's still me.";

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-craft flex flex-col min-h-screen bg-bottom">
      <div className="container mx-auto flex-grow">
        <header className="flex flex-col md:items-center py-5">
          <nav
            className={`menu absolute top-0 right-0 text-right md:relative md:flex md:w-auto font-reenie uppercase ${isOpen ? 'block bg-black bg-opacity-10 min-h-screen py-4 px-4 w-1/10 shadow-lg' : 'hidden'}`}
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
            <NavLink
              to="/"
              href="#home"
              onClick={handleMenuToggle}
              className="flex flex-col items-center mt-4 md:inline-block md:mt-0 md:mr-6 hover:scale-110 text-gray-800 hover:text-orange-700"
            >
              <img src={Home} className={`${isOpen ? 'h-5 w-10 block' : 'hidden'}`} alt="home icon" />
              <p className="text-xl md:text-3xl">HOME</p>
            </NavLink>
            <NavLink
              to="/about"
              href="#about"
              onClick={handleMenuToggle}
              className="flex flex-col items-center mt-4 md:inline-block md:mt-0 md:mr-6 hover:scale-110 text-gray-800 hover:text-orange-700"
            >
              <img src={Home} className={`${isOpen ? 'h-5 w-10 block' : 'hidden'}`} alt="about icon" />
              <p className="text-xl md:text-3xl">ME</p>
            </NavLink>
            <NavLink
              to="/about"
              href="#about"
              onClick={handleMenuToggle}
              className="flex flex-col items-center mt-4 md:inline-block md:mt-0 md:mr-6 hover:scale-110 text-gray-800 hover:text-orange-700"
            >
              <img src={Home} className={`${isOpen ? 'h-5 w-10 block' : 'hidden'}`} alt="skills icon" />
              <p className="text-xl md:text-3xl">SKILLS</p>
            </NavLink>
            <NavLink
              to="/about"
              href="#"
              onClick={handleMenuToggle}
              className="flex flex-col items-center mt-4 md:inline-block md:mt-0 md:mr-0 hover:scale-110 text-gray-800 hover:text-orange-700"
            >
              <img src={Contact} className={`${isOpen ? 'h-8 w-10 block' : 'hidden'}`} alt="contact icon" />
              <p className="text-xl md:text-3xl">CONTACT</p>
            </NavLink>
          </nav>

          <div className="flex flex-row justify-between items-center md:justify-center relative h-8">
            <div>LOGO</div>
            <div onClick={handleMenuToggle} className="md:hidden cursor-pointer" role="button" tabIndex={0}>
              <img
                src={MenuOpen}
                className={`h-10 w-10 ${isOpen ? 'hidden' : 'block hover:scale-110'}`}
                alt="open menu icon"
              />
            </div>
          </div>
        </header>
        <Outlet />
      </div>
      <footer className="container mx-auto min-h-28">
        <div className="flex flex-col items-center md:items-stretch">
          <div className="text-gray-800 mt-3 text-xl font-semibold uppercase">
            <Typewriter text={displayText} />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex mt-6 md:mt-2 space-x-12 md:space-x-14">
              <a
                className="flex justify-start md:justify-start items-center hover:scale-110 cursor-pointer"
                href="https://facebook.com/Babszem/"
                target="_blank"
                aria-label="facebook button"
                rel="noreferrer"
              >
                <svg viewBox="0 0 172.2 169.4" className=" fill-gray-800 hover:fill-orange-800 w-9 h-9 md:w-11">
                  <path
                    d="M164.3,58.2c0,4.5,0,9.1,0,13.6c-0.1,0.6-0.2,1.3-0.3,1.9c-0.2,2.8-0.2,5.5-0.5,8.3c-1.2,10.7,0,21.9-1.3,32.6
	c-0.9,7.2-2.7,26.7-5.4,33.5c-4,10.2-50.2,11.5-56.8,12c-9.2,0.7-18.5,1.3-27.8,1.4c-6.6,0.1-13.2-0.6-19.8-1
	c-2.1-0.1-4.3-0.9-6.4-0.7c-5.2,0.5-9.9-0.7-14.2-3.5c-7.2-4.7-12-11.5-15.4-19.2c-4.4-10-5.9-20.8-6.7-31.6
	c-0.9-12.5,0-24.9,2.4-37.2c2.1-11-0.1-21.9,4.7-32.2C20,29.2,24.2,23,30.3,18.4c7.6-5.7,21.4-8.1,30.7-9.1
	C71.7,8,82.2,8.8,92.8,9.6c11,0.8,21.9,1.6,32.9,1.3c5-0.1,10.1,0.1,15.1,0.8c8.9,1.3,15.1,6.3,18,14.9c2.7,8,4.2,16.2,4.9,24.5
	C164,53.5,164.1,55.8,164.3,58.2z M53.1,91.4c2.7,0,5.3-0.1,7.9,0c2.8,0.2,5.6,0.4,8.3,1c3.4,0.7,4,3,2.1,5.3
	c0.2,1.4,0.4,2.5,0.4,3.7c-0.3,5.6-0.9,11.3-0.9,16.9c0,6.2,0.5,12.4,0.8,18.7c0.1,1.5,0,3.2,0,4.7c9.1-0.8,18.1-1.6,27.2-2.3
	c0-0.6,0-1.2,0-1.7c-0.1-8.5-0.3-16.9-0.2-25.5c0.1-5.2,0.1-10.5,1.6-15.7c0.1-0.4-0.1-0.8-0.3-1.1c-1.2-2.2-0.1-4.1,2.6-4.3
	c2.3-0.1,4.5-0.2,6.8-0.3c2.9-0.1,5.8-0.3,8.5-0.5c0.2-5.9,0.4-11.5,0.5-17.4c-1.1,0.1-2.2,0.3-3.4,0.3c-4.1,0-8.3,0.1-12.4,0
	c-2.6,0-4.1-1.5-3.6-3.6c0.5-1.8,0-3.5-0.2-5.2c-0.2-1.4-0.4-2.9-0.5-4.3c-0.2-2.8,1.2-4.2,4.1-4.5c2.7-0.2,5.4-0.5,8.1-0.5
	c3-0.2,5.9-0.3,9-0.4c-0.7-5.2-1.4-10.5-2.1-15.7c-1.5-0.2-3.1-0.5-4.5-0.5c-12.4-0.6-23.5,2.5-32.9,10.4
	c-5.2,4.3-9.1,9.2-10.3,15.9c-0.4,2.4-1.3,4.7-1.8,7.1c-0.4,2.1-1,2.8-3.2,3c-3.6,0.3-7.1,0.5-10.7,0.8c-0.5,0-1.2,0.5-1.2,0.7
	C52,81.3,52,86.4,53.1,91.4z M145.4,131.5c2.4-4.1,3.5-8.6,4-13.4C148,122.6,146.7,127.1,145.4,131.5z M25.1,55.6
	c-0.2,0-0.4-0.1-0.6-0.1c-1.1,5-2.2,10-3.4,15c0.1,0,0.3,0.1,0.4,0.1C22.7,65.6,23.9,60.6,25.1,55.6z M117.6,97.2
	c0.4,1.5,0.8,3.1,1.2,4.5C120,99.6,119.4,97.2,117.6,97.2z M40.8,130.8c-0.1,0.1-0.3,0.3-0.4,0.4c1.3,1.2,2.7,2.3,4,3.6
	C42.1,131.1,42.1,131.1,40.8,130.8z M59.8,60c1.2,0.1,3.4-2.4,3.9-4.7C62.3,56.9,61,58.5,59.8,60z M55.1,47.3c0.2,0.5,0.4,1,0.5,1.1
	c0.9-0.7,1.7-1.4,2.6-2.3C57.1,46.5,56.1,46.8,55.1,47.3z M63.7,99.7c0,1.4,0,2.7,0,4c0.1,0,0.2,0,0.3,0c0.3-1.3,0.5-2.6,0.8-4
	C64.2,99.7,63.9,99.7,63.7,99.7z"
                  />
                </svg>
              </a>
              <a
                className="flex justify-start md:justify-start items-center hover:scale-110 cursor-pointer"
                href="https://github.com/vikikota"
                target="_blank"
                aria-label="github button"
                rel="noreferrer"
              >
                <svg viewBox="0 0 172.2 169.4" className="fill-gray-800 hover:fill-orange-800 w-9 h-9 md:w-11">
                  <path
                    d="M163.3,99.7c-0.1-9.3-0.8-18.5-1.4-27.8c-0.5-6.6-1.7-52.8-12-56.8c-6.8-2.7-26.3-4.5-33.5-5.4
	c-10.6-1.4-21.9-0.1-32.6-1.3c-2.8-0.3-5.5-0.3-8.3-0.5c-0.6,0-1.3-0.2-1.9-0.3c-4.5,0-9.1,0-13.6,0c-2.3,0.2-4.7,0.4-7,0.6
	c-8.3,0.8-16.6,2.2-24.5,4.9c-8.6,3-13.7,9.1-14.9,18c-0.7,5-0.9,10-0.8,15.1c0.3,11-0.5,22-1.3,32.9c-0.8,10.6-1.6,21.1-0.4,31.7
	c1,9.3,0,24.9,5.7,32.5c4.6,6.2,7.3,9.5,14.2,12.7c9,4.2,18.2,3.7,27.8,5l0,0c-0.1-0.1-0.1-0.2-0.2-0.3c1.6,0.2,3.5,0.3,5.6,0.4
	c1.3-3.5,1.5-14.8,1.6-15.6c-18.7,3-26.5-10.7-34.6-25.1c13.4-2.3,26.7,34.8,39,4.5c-31.6-3.8-38.6-35.3-24.3-59.6
	c1.6-4.6-2.2-18.5,5.8-16.5c6.3,2.1,12.3,7,19,7.2c12.3-3.7,24.5,1.4,36.5,0c5.3-0.5,17-10.9,18.9-2.2c-2.4,20.5,12.7,32,3.3,52.5
	c-3.7,12.9-17.9,17.5-29.3,19.5c3,11,2.9,21.7,2.1,32.9c-0.1,1.2,0.1,2,0.5,2.7c2.7,0,5.5,0.1,8.5,0.2c0.3,0-0.6,0.3-1,0.4
	c9.8-0.9,19.5-2.4,28.7-6.4c7.7-3.4,14.5-8.2,19.2-15.4c2.8-4.3,4-9,3.5-14.2c-0.2-2.1,0.6-4.3,0.7-6.4
	C162.7,112.9,163.4,106.3,163.3,99.7z M32.4,38c2.6,0.6,5.4,2.8,5.2,4.1C35.9,40.8,34.3,39.5,32.4,38z M120,22.6
	c4.7,0.5,9.3,1.6,13.4,4C128.9,25.3,124.5,23.9,120,22.6z M131.9,131.6c-0.1-0.1-0.3-0.3-0.4-0.4c0.3-1.5,0.3-1.5,4.4-3.8
	C134.5,128.8,133.2,130.2,131.9,131.6z"
                  />
                </svg>
              </a>
              <a
                className="flex justify-start md:justify-start items-center hover:scale-110 cursor-pointer"
                href="https://www.linkedin.com/in/viktoria-kota-1b0a382ab/"
                target="_blank"
                aria-label="linkedin button"
                rel="noreferrer"
              >
                <svg viewBox="0 0 154.7 154.7" className="fill-gray-800 hover:fill-orange-800 w-9 h-9 md:w-11">
                  <path
                    d="M6.5,104.8c0-2.3-0.1-4.7,0-7c0.2-5,0.4-10,0.7-15c0.4-4.8,0.9-9.7,1.4-14.5c0.5-4.9,1.2-9.7,1.8-14.6
	c0.6-4.8,1.1-9.5,1.7-14.3c0.3-2.7,0.5-5.4,0.7-8.1c0-0.4-0.1-0.9-0.2-1.2c-1.9-4.3-0.9-9,3-12.3c4.2-3.5,8.7-6.4,14.1-7.7
	c4.2-1,8.5-1.7,12.8-2.6c5.6-1.3,11.3-1.3,17-1.5c5.4-0.2,10.9-0.3,16.3-0.2c5,0.1,9.9,0.4,14.8,0.8c4.7,0.4,9.5,1,14.2,1.7
	c4.6,0.7,9,1.8,13.6,2.6c4.4,0.7,8.3,2.6,12.3,4.4c5.3,2.4,9.5,6.2,12.5,11.1c2,3.3,2.8,7.1,3.3,10.9c0.8,6,0.6,12.1,0.5,18.2
	c-0.1,4.6-0.3,9.3-0.1,13.9c0.3,6.6,0.9,13.2,1.4,19.7c0.4,5.4,0.8,10.8,1.3,16.1c0.5,5.3-0.3,10.6-0.8,15.8
	c-0.5,5.1-2.1,9.6-4.6,13.9c-1.6,2.8-4.1,4.8-6.6,6.9c-4.6,3.7-10.1,4.8-15.7,5.7c-7.7,1.2-15.4,1.7-23.1,1.7
	c-4.7,0-9.4,0.2-14.2,0.1c-5.8-0.1-11.5-0.4-17.3-0.8c-4.7-0.3-9.3-0.8-13.9-1.5c-4.7-0.7-9.4-1.5-14-2.5c-4.3-1-8.4-2.3-12.6-3.4
	c-3.8-1-6.9-3.1-9.9-5.5c-5.7-4.4-8.2-10.7-9.3-17.5c-0.7-4.4-1.1-8.9-1.6-13.3C6.2,104.8,6.3,104.8,6.5,104.8z M119,114.2
	c-0.2-1.8-0.4-3.4-0.6-5.1c-0.4-3.1-1.1-6.2-1.1-9.3c0.1-5.7,0.4-11.4,1.2-17c0.6-4.3-0.5-7.8-2.7-11.4c-2.4-3.9-5.1-7.6-9.1-10.1
	c-2.2-1.4-6.2-1-7.9,0.7c-1.3,1.3-2.6,2.6-3.5,4.1c-1.2,1.9-1.9,4-3,6c-1.1,2.1-3.4,2.5-5.4,1.1c-1.3-0.9-1.5-2.2-1.4-3.7
	c0.2-2.3,0.3-4.6,0.5-6.6c-4.9,1-9.7,1.9-14.7,2.8c-0.1,0.6-0.1,1.4-0.2,2.2c-0.5,4.1-0.2,8.1,0.2,12.2c0.6,5.6,0.6,11.4,0.7,17
	c0.1,4.3-0.1,8.6-0.1,12.9c-0.1,3-0.1,3.2,2.8,3.4c4.8,0.4,9.6,0.6,14.5,0.9c0-0.7,0-1,0-1.2c-0.3-2.2-0.8-4.4-1-6.6
	c-0.5-6-1-12,0.4-18c0.6-2.5,1.3-5.1,2.1-7.5c0.5-1.5,1.2-3,3-3.4c1.9-0.4,4.2,0.8,4.8,3c1.4,4.8,2.9,9.7,3.8,14.6
	c0.7,4,0.4,8.1,0.5,12.2c0,2,0,4.1,0,6.1C108,113.8,113.4,114,119,114.2z M63.4,112.1c0,0,0-0.3,0-0.5c-0.1-3.3-0.2-6.7-0.3-10
	c0-4.9,0.1-9.8,0-14.7c-0.1-6.8-0.6-13.5-2-20.2c-0.2-0.9-0.4-1.2-1.4-1.2c-3.8-0.1-7.6-0.3-11.4-0.3c-0.4,0-1,0.4-1.2,0.8
	c-0.9,2.1-0.7,4.3-0.6,6.6c0.1,5.4-0.1,10.8-0.3,16.2c-0.1,6.1-0.4,12.1-0.4,18.2c0,2.2,0.5,4.3,0.8,6.1
	C52.4,112.7,57.8,112.4,63.4,112.1z M58,54.2c1.2-1.5,2.7-3.4,4-5.3c3.6-5.4,3.1-10-1.6-14.4c-2.3-2.2-5.1-3.6-8.4-2.7
	c-4,1.1-7.1,3.3-8.7,7.5c-1.6,4.3-0.7,9,2.8,11.8c2.3,1.9,5.2,2.4,8.2,2.6C55.4,53.7,56.5,54,58,54.2z M35.4,99.2
	c-0.1,0-0.2,0-0.3,0c-0.2,2.2-0.4,4.4-0.6,6.6c-0.2,1.8,0.4,3,1.7,4C35.9,106.4,35.7,102.8,35.4,99.2z M129,137.4
	c0.1,0.2,0.2,0.3,0.3,0.5c1.3-0.7,2.7-1.4,4-2.1c-0.1-0.2-0.2-0.3-0.3-0.5C131.6,136,130.3,136.7,129,137.4z"
                  />
                </svg>
              </a>
            </div>
            <div className="mt-8 mb-4 md:mt-0 text-center text-sm">© 2024 Viktória Kóta</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
