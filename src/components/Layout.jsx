import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';

/* import LinkedInLogo from '../assets/linkedin-logo.svg';
import FBLogo from '../assets/facebook-logo.svg';
import GithubLogo from '../assets/github-logo.svg'; */

function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-craft flex flex-col min-h-screen bg-bottom">
      <div className="container mx-auto flex-grow">
        <nav className="flex items-center justify-between flex-wrap p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
            <p>logo helye</p>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
            >
              <CgMenuGridR className={`fill-current h-5 w-5 ${isOpen ? 'hidden' : 'block'}`} />
              <IoMdClose className={`fill-current h-5 w-5 ${isOpen ? 'block' : 'hidden'}`} />
            </button>
          </div>
          <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
            <div className="text-sm lg:flex-grow">
              <NavLink to="/" href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                Home
              </NavLink>
              <NavLink to="/about" href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                About
              </NavLink>

              <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                Third Link
              </a>
              <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
                Fourth Link
              </a>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
      <footer>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <div className="font-poiret font-semibold text-gray-800 mt-3 text-xl">
                <p>DO YOU WANT TO KNOW MORE ABOUT ME?</p>
              </div>
              {/*         <div className="flex mt-8 space-x-5">
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
              </div> */}
            </div>
            <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
              <div></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
