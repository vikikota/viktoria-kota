import PropTypes from 'prop-types';

function GrowthCard({ image, title, description, process, buttonURL }) {
  return (
    <div className="flex flex-col md:flex-row m-2 mx-auto w-full min-w-[350px] max-w-[1000px] bg-white bg-opacity-40 shadow-lg">
      <div className="justify-start items-center md:w-1/5 hidden md:flex">
        <img src={image} className="h-full object-cover" alt="course thumbnail" />
      </div>
      <div className="flex flex-col p-4 md:w-5/6">
        <div>
          <div className="flex md:flex-col">
            <div className="flex flex-col md:flex-row w-3/4 md:w-full md:items-center md:pb-2">
              <div className="md:w-3/4 font-unica font-bold text-gray-800 text-lg uppercase md:pb-0 hover:text-orange-800">
                <a href={buttonURL} target="_blank" rel="noopener noreferrer">
                  {title}
                </a>
              </div>
              <div className="pb-4 md:pb-0 md:p-0 md:ps-2 md:w-1/4">
                <a href={buttonURL} target="_blank" rel="noopener noreferrer">
                  <button
                    type="button"
                    className="py-0.5 px-2 font-elite text-xs text-white bg-orange-800 shadow-sm hover:scale-105"
                  >
                    CHECK IT OUT
                  </button>
                </a>
              </div>
            </div>
            <div className="justify-center items-center w-1/3 inline-block md:hidden m-2">
              <img src={image} className="object-contain" alt="course thumbnail" />
            </div>
          </div>
          <div className="pb-3">
            <p className="font-unica font-bold uppercase text-gray-800 text-sm">description</p>
            <p className="font-unica uppercase text-gray-800 text-sm">{description}</p>
          </div>
          <div>
            <p className="font-unica font-bold uppercase text-gray-800 text-sm">process - {process}%</p>
            <div className="w-full bg-gray-300 rounded-sm h-2 overflow-hidden mt-2">
              <div className="bg-green-600 h-full" style={{ width: `${process}%`}}>.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

GrowthCard.propTypes = {
  image: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  process: PropTypes.number.isRequired,
  buttonURL: PropTypes.string.isRequired,
};

export default GrowthCard;
