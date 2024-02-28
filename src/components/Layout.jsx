import { Outlet } from 'react-router-dom';
/* import LinkedInLogo from '../assets/linkedin-logo.svg';
import FBLogo from '../assets/facebook-logo.svg';
import GithubLogo from '../assets/github-logo.svg'; */

function Layout() {
  return (
    <div className="bg-craft flex flex-col min-h-screen bg-bottom">
      <div className="container mx-auto flex-grow">
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
