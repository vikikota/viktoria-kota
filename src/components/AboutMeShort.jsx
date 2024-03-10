import profile from '../assets/profile_bw.png';

function AboutMeShort() {
  return (
    <div className="bg-black bg-opacity-80 container  max-w-full py-8 lg:mt-10 ">
      <div className="flex flex-row justify-center items-center w-4/5 mx-auto">
        <div className="w-20">
          <img src={profile} alt="profile" />
        </div>
        <div className=" font-unica text-md xs:text-xl md:text-xl text-gray-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis pariatur vitae cum dolor sit dignissimos,
          assumenda cupiditate necessitatibus
        </div>
        <button type="button" className="py-2 px-3 font-elite text-white shadow-sm bg-orange-800 hover:scale-105">
          MORE
        </button>
      </div>
    </div>
  );
}

export default AboutMeShort;
