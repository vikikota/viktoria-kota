import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function GrowthCard({ images, title, description, buttonURL }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

 
  return (
    <div className="select-none shadow-lg flex flex-row m-2 max-w-[1000px]">
      <div className="flex relative font-semibold text-md md:text-lg text-justify max-w-30">
        <img src={images[currentImageIndex]} className="object-cover" alt={`Img ${currentImageIndex + 1}`} />
      </div>
      <div className="flex  flex-col justify-between bg-white bg-opacity-40 p-4">
        <div>
          <a href={buttonURL} target="_blank" rel="noopener noreferrer">
            <span className="font-unica font-bold text-gray-800 text-lg uppercase inline-block hover:text-orange-800 leading-5">
              {title}
            </span> <span>  <a href={buttonURL} target="_blank" rel="noopener noreferrer" className='font-unica font-thin text-orange-800'>
      
              CHECK IT OUT
        
          </a></span>
            <p className="font-unica uppercase text-gray-700 text-sm text-justify py-2">{description}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

GrowthCard.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonURL: PropTypes.string.isRequired,
};

export default GrowthCard;
