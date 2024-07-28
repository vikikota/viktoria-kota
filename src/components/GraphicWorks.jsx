import rightArrow from '../assets/right-arrow.svg';
import portfolio from '../assets/Kota_Viktoria_portfolio.pdf';

function GraphicWorks() {
  return (
    <div>
      <div className="flex justify-center pt-8 md:pt-12">
        <p className="font-elite font-bold text-xl xs:text-2xl text-gray-800 border-2 border-gray-800 rounded-sm px-4 pt-2 shadow-sm">
          GRAPHIC WORKS
        </p>
      </div>
      <div className="flex flex-row justify-center items-center space-x-4 mx-auto mt-10">
        <div className=" font-unica font-bold text-md xs:text-2xl text-gray-800 uppercase">
          open my graphic portfolio
        </div>
        <div className="z-0">
          <img src={rightArrow} alt="right arrow" className="left-right w-9 md:w-12" />
        </div>
        <button type="button" className="py-2 px-3 font-elite text-white shadow-sm bg-orange-800 hover:scale-105">
          <a
            className="relative flex justify-center md:justify-start items-center hover:scale-110 cursor-pointer"
            href={portfolio}
            target="_blank"
            aria-label="portfolio button"
            rel="noreferrer"
          >
            HERE
          </a>
        </button>
      </div>
    </div>
  );
}

export default GraphicWorks;
