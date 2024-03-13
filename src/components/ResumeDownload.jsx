import rightArrow from '../assets/right-arrow.svg';
import resume from '../assets/Kóta Viktória CV 2024 02.pdf';

function ResumeDownload() {
  return (
    <div className=" flex flex-row justify-center items-center space-x-4 mx-auto">
      <div className=" font-unica font-bold text-md xs:text-xl  text-gray-800 uppercase">download my cv</div>
      <div className="z-0">
        <img src={rightArrow} alt="right arrow" className="left-right w-9 md:w-12" />
      </div>
      <button type="button" className="py-2 px-3 font-elite text-white shadow-sm bg-orange-800 hover:scale-105">
        <a href={resume} download="Kóta Viktória CV 2024 02.pdf">
          HERE
        </a>
      </button>
    </div>
  );
}

export default ResumeDownload;
