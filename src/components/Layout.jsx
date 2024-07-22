import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MenuOpen from '../assets/menu-open.svg';
import MenuClose from '../assets/menu-close.svg';
import Home from '../assets/home-icon.svg';
import Me from '../assets/me-icon.svg';
import Skills from '../assets/skills-icon.svg';
import Works from '../assets/works-icon.svg';
import ContactIcon from '../assets/contact-icon.svg';
import Logo from '../assets/logo.png';
import FBLogo from '../assets/facebook-logo-hover.png';
import GithubLogo from '../assets/github-logo-hover.png';
import LinkedinLogo from '../assets/linkedin-logo-hover.png';
import cvLogo from '../assets/cv-icon-hover.png';
import stillMe from '../assets/still_me.png';
import Contact from './Contact';
import ResumeDownload from './ResumeDownload';
import Stack from './Stack';
import AboutMeShort from './AboutMeShort';
import ScrollDown from './ScrollDown';
import resume from '../assets/Kóta-Viktória-CV-EN.pdf';
import Testimonial from './Testimonial';

function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutMe, setIsAboutMe] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleAboutPathChange = async () => {
      const isAbout = location.pathname.includes('works') || location.pathname.includes('about') ;
      setIsAboutMe(isAbout);
    };

    handleAboutPathChange();
  }, [location]);

  const handleClickScroll = (id) => {
    setTimeout(() => {
      const scrollElement = document.querySelector(`#${id}`);
      if (scrollElement) {
        scrollElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-craft flex flex-col bg-bottom bg-cover">
      <div className="mx-auto flex flex-col items-center justify-between xl:max-w-[1200px] 2xl:max-w-[1400px] min-h-dvh">
        <header className="container flex flex-col md:items-center pt-6 md:pt-10">
          <div className="flex flex-row justify-between items-center md:justify-center relative h-12">
            <NavLink to="/" href="#home" onClick={() => setIsAboutMe(false)}>
              <div>
                <img src={Logo} alt="logo" className="h-9 md:h-12" />
              </div>
            </NavLink>
            <div onClick={handleMenuToggle} className="md:hidden cursor-pointer" role="button" tabIndex={0}>
              <img
                src={MenuOpen}
                className={`h-10 w-10 ${isOpen ? 'hidden' : 'block hover:scale-110'}`}
                alt="open menu icon"
              />
            </div>
          </div>
          <nav
            className={` top-0 right-0 text-right md:relative md:flex md:w-auto font-unica  ${isOpen ? 'block bg-gray-800 bg-opacity-80 min-h-screen py-4 px-4 w-1/10 shadow-lg fixed z-50' : 'hidden'}`}
          >
            <div className="md:hidden flex justify-center">
              <div
                onClick={handleMenuToggle}
                className={`h-10 w-10 md:absolute cursor-pointer ${isOpen ? 'block z-30' : 'hidden'}`}
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
              className="flex flex-col items-center md:inline-block mt-8 md:mt-0 md:me-10 hover:scale-110 text-gray-800 hover:text-gray-900"
            >
              <img src={Home} className={`${isOpen ? 'w-10 block' : 'hidden'}`} alt="home icon" />
              <p className="text-lg md:text-2xl text-white md:text-gray-800 md:hover:text-gray-800 md:font-semibold cursor-pointer">
                Home
              </p>
            </NavLink>
            <NavLink
              to="/about"
              href="#about"
              onClick={
                isOpen
                  ? () => {
                      handleClickScroll('about-me');
                      handleMenuToggle();
                    }
                  : () => handleClickScroll('about-me')
              }
              className="flex flex-col items-center md:inline-block mt-4 md:mt-0 md:me-10 hover:scale-110 text-gray-800 hover:text-gray-900"
            >
              <img src={Me} className={`${isOpen ? 'w-10 block' : 'hidden'}`} alt="about icon" />
              <p className="text-lg md:text-2xl text-white md:text-gray-800 md:hover:text-gray-800 md:font-semibold">
                Me
              </p>
            </NavLink>
            <NavLink
              to="/about"
              href="#about"
              onClick={
                isOpen
                  ? () => {
                      handleClickScroll('growth');
                      handleMenuToggle();
                    }
                  : () => handleClickScroll('growth')
              }
              className="flex flex-col items-center md:inline-block mt-4 md:mt-0 md:me-10 hover:scale-110 text-gray-800 hover:text-gray-900"
            >
              <img src={Works} className={`${isOpen ? 'w-9 block' : 'hidden'}`} alt="growth icon" />
              <p className="text-lg md:text-2xl text-white md:text-gray-800 md:hover:text-gray-800 md:font-semibold">
                Growth
              </p>
            </NavLink>
            <NavLink
              to="/about"
              href="#about"
              onClick={
                isOpen
                  ? () => {
                      handleClickScroll('skills');
                      handleMenuToggle();
                    }
                  : () => handleClickScroll('skills')
              }
              className="flex flex-col items-center md:inline-block mt-4 md:mt-0 md:me-10 hover:scale-110 text-gray-800 hover:text-gray-900"
            >
              <img src={Skills} className={`${isOpen ? 'w-8 block' : 'hidden'}`} alt="skills icon" />
              <p className="text-lg md:text-2xl text-white md:text-gray-800 md:hover:text-gray-800 md:font-semibold">
                Skills
              </p>
            </NavLink>
            <NavLink
              to="/works"
              href="#works"
              onClick={
                isOpen
                  ? () => {
                      handleClickScroll('works');
                      handleMenuToggle();
                    }
                  : () => handleClickScroll('works')
              }
              className="flex flex-col items-center md:inline-block mt-4 md:mt-0 md:me-10 hover:scale-110 text-gray-800 hover:text-gray-900"
            >
              <img src={Works} className={`${isOpen ? 'w-9 block' : 'hidden'}`} alt="skills icon" />
              <p className="text-lg md:text-2xl text-white md:text-gray-800 md:hover:text-gray-800 md:font-semibold">
                Works
              </p>
            </NavLink>
            <NavLink
              onClick={
                isOpen
                  ? () => {
                      handleMenuToggle();
                      handleClickScroll('contact');
                    }
                  : () => handleClickScroll('contact')
              }
              className="flex flex-col items-center md:inline-block mt-4 md:mt-0 md:mr-0 hover:scale-110 text-gray-800 hover:text-gray-900"
            >
              <img src={ContactIcon} className={`${isOpen ? 'w-9 block' : 'hidden'}`} alt="contact icon" />
              <p className="text-lg md:text-2xl text-white md:text-gray-800 md:hover:text-gray-800 md:font-semibold">
                Contact
              </p>
            </NavLink>
          </nav>
        </header>
        <Outlet />
        <div id="resume2" className="hidden my-4 md:flex">
          <ResumeDownload />
        </div>
        <ScrollDown />
      </div>
      <div id="resume" className="flex md:hidden my-6 w-4/5 mx-auto">
        <ResumeDownload />
      </div>
      {!isAboutMe && (
        <div id="about-short">
          <AboutMeShort handleClickScroll={handleClickScroll} className=" w-4/5 mx-auto" />
        </div>
      )}
      {isAboutMe && (
        <div id="skills">
          <Stack className="w-4/5 mx-auto" />
        </div>
      )}
      <div className="">
        <Testimonial />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <footer className="bg-orange-900 bg-opacity-25">
      <div className='container max-w-[1400px] mx-auto py-4'>
        <div className="flex flex-col items-center md:items-stretch">
          <div className="text-gray-800 md:text-md font-unica font-bold uppercase">
          <img
                  src={stillMe}
                  alt="embossed label"
                  className=" h-8 sm:h-9"
                />
          </div>
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="flex mt-3 space-x-4 md:space-x-4">
              <a
                className="relative flex justify-center md:justify-start items-center hover:scale-110 cursor-pointer"
                href="https://facebook.com/Babszem/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={FBLogo}
                  alt="fb logo"
                  className="w-9 hover:scale-110"
                />
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
                  className="w-9 hover:scale-110"
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
                  className="w-9 hover:scale-110"
                />
              </a>
              <a
                className="relative flex justify-center md:justify-start items-center hover:scale-110 cursor-pointer"
                href={resume}
                target="_blank"
                aria-label="cv button"
                rel="noreferrer"
              >
                <img src={cvLogo} alt="cv logo" className="w-9 hover:scale-110" />
              </a>
            </div>
            <div className="mt-4 md:mt-0 text-center md:text-lg font-bold font-unica text-gray-800 uppercase">© 2024 Viktória Kóta</div>
          </div>
        </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
