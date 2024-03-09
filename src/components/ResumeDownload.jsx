import rightArrow from '../assets/right-arrow.svg';

function ResumeDownload() {
  return (
    <div className=" bg-white bg-opacity-50 flex flex-row justify-evenly items-center mt-12 p-5 lg:mt-20shadow-md">
      <div className="font-">DOWNLOAD MY RESUME</div>
      <div>
        <img src={rightArrow} alt="right arrow" className="h-2" />
      </div>
      <div>
        <button className="py-2 px-3 font-elite text-white shadow-sm bg-orange-800 hover:scale-105">CLICK HERE</button>
      </div>
    </div>
  );
}

export default ResumeDownload;
