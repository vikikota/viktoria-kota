import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import profile from '../assets/profile.png';

function AboutMeShort({ handleClickScroll }) {
  return (
    <div className="bg-black bg-opacity-80 ">
      <div className="container flex flex-col md:flex-row items-end md:items-center justify-around max-w-[1200px] md:w-4/5 mx-auto md:space-x-6 mt-8 md:mt-0 lg:mt-4 xl:mt-24 py-8">
        <div className="flex flex-row items-center space-x-4">
          <div className="min-w-20 max-w-32 profile">
            <img src={profile} alt="profile" className="" />
          </div>
          <div><div className="font-unica text-sm xs:text-xl text-justify md:text-xl text-gray-200 uppercase">
            <p className="pb-2">Hello! I am Viki, and welcome to my website!</p>
            <p className="pb-2">
              The magic of programming has completely captivated me and has become a part of my life.
            </p>
            <p>
              Previously, I primarily worked with graphics, for which I am grateful as it complements frontend
              development in a useful way.
            </p>
          </div>
           <div className='py-4'>
          <NavLink
            to="/about"
            href="#about"
            onClick={() => handleClickScroll('about-me')}
            className="mt-3 py-2 px-3 font-elite text-white shadow-sm bg-orange-800 hover:scale-105"
          >
            MORE
          </NavLink>
        </div>
          </div>
          
        </div>
       
      </div>
    </div>
  );
}

AboutMeShort.propTypes = {
  handleClickScroll: PropTypes.func.isRequired,
};

export default AboutMeShort;
