import profile from '../assets/profile_bw.png';

function AboutMeShort() {
  return (
    <div className="bg-black bg-opacity-80 shadow-md">
      <div className="container flex flex-col md:flex-row items-end md:items-center justify-around max-w-[1200px] md:w-4/5 mx-auto md:space-x-4 mt-8 md:mt-0 lg:mt-4 xl:mt-24 py-8">
        <div className="flex flex-row items-center space-x-4">
          <div className="min-w-20 max-w-24">
            <img src={profile} alt="profile" className="" />
          </div>
          <div className="font-unica text-sm xs:text-xl text-justify md:text-xl text-gray-200">
            <p className="pb-2">Hello! I am Viki, and welcome to my website!</p>
            <p className="pb-2">
              The magic of programming has completely captivated me and has become a part of my life.
            </p>
            <p>
              Previously, I primarily worked with graphics, for which I'm grateful as it complements frontend
              development in a useful way
            </p>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="mt-3 py-2 px-3 font-elite text-white shadow-sm bg-orange-800 hover:scale-105"
          >
            MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutMeShort;
