import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import multipleImages from '../assets/multiple-images-icon.svg';
import leftArrow from '../assets/left-arrow-gallery-icon.svg';
import rightArrow from '../assets/right-arrow-gallery-icon.svg';

function WorkCard({ images, title, description, stack }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="select-none overflow-hidden transition shadow-lg flex flex-col mx-2 max-w-[300px]">
      <div className="flex relative w-full font-semibold text-md md:text-lg text-justify leading-5">
        <img
          src={images[currentImageIndex]}
          className="object-cover"
          alt={`Img ${currentImageIndex + 1}`}
          onClick={() => showModal(currentImageIndex)}
        />
        <div
          onClick={() => showModal(currentImageIndex)}
          className="bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 hover:bg-white opacity-10 cursor-pointer"
          role="button"
          tabIndex={0}
          aria-label="Open modal"
        />
        <div className="absolute top-1/2 left-4" onClick={showPrevImage} role="button" tabIndex={0}>
          <img src={leftArrow} className="w-5 hover:scale-110 cursor-pointer" alt="left arrow icon" />
        </div>
        <div className="absolute top-1/2 right-4" onClick={showNextImage} role="button" tabIndex={0}>
          <img src={rightArrow} className="w-5 hover:scale-110 cursor-pointer" alt="right arrow icon" />
        </div>
        <div className="absolute bg-white bg-opacity-45 rounded-sm p-1 bottom-2 right-2 flex items-center">
          <span className="p-1">{images.length}</span>
          <img src={multipleImages} alt="multiple images icon" className="h-8" />
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 z-80 w-screen h-screen bg-black/70 flex justify-center items-center z-10">
          <div className="max-w-[800px] max-h-[600px] relative">
            <img
              src={images[currentImageIndex]}
              className="object-cover w-full h-full"
              alt={`Img ${currentImageIndex + 1}`}
            />
            <div className="absolute top-1/2 left-4" onClick={showPrevImage} role="button" tabIndex={0}>
              <img src={leftArrow} className="w-5 hover:scale-110 cursor-pointer" alt="left arrow icon" />
            </div>
            <div className="absolute top-1/2 right-4" onClick={showNextImage} role="button" tabIndex={0}>
              <img src={rightArrow} className="w-5 hover:scale-110 cursor-pointer" alt="right arrow icon" />
            </div>
            <button className="absolute top-4 right-4 text-white text-3xl font-bold" onClick={closeModal} type="button">
              ×
            </button>
          </div>
        </div>
      )}
      <div className="bg-white bg-opacity-40 px-6 py-4 mb-auto">
        <span className="font-unica font-bold text-gray-800 text-lg uppercase inline-block hover:text-orange-800">
          {title}
        </span>
        <p className="font-unica uppercase text-gray-600 text-sm">{description}</p>
      </div>
      <div className="flex flex-row justify-center bg-black bg-opacity-80 p-2">
        <span href="#" className="py-1 text-xs font-unica uppercase text-gray-800 mr-1 flex flex-row items-center">
          {stack.map((stackItem) => (
            <img key={uuidv4()} src={stackItem} className="w-11 m-0.5" alt={`Stack ${stackItem}`} />
          ))}
        </span>
      </div>
    </div>
  );
}

WorkCard.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WorkCard;
