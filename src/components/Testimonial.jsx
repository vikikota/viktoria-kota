import { useState } from 'react';
import leftArrow from '../assets/left-arrow-gallery-icon-bl.svg';
import rightArrow from '../assets/right-arrow-gallery-icon-bl.svg';
import mouse from '../assets/writing-mouse.png';

function Testimonial() {
  const testimonials = [
    {
      id: 0,
      text: 'Viki was one of the main engines of the self-organization of the Scrum team. After a few weeks, she proactively initiated and ensured the backlog refinement and politely raised conflictual points. Besides these, the team could always be sure that Viki would deliver high-quality work.',
      author: 'Domonkos Ottlik',
      profession: 'Scrum Master',
    },
    {
      id: 1,
      text: `I got to know Viki as a very intelligent, diligent, helpful, and good-humored person. During the project work that concluded our training, we worked together in a group, and I believe that a significant part of the excellent final result achieved by our team was due to Viki's unwavering diligence and precision. She quickly felt at home with new technologies, and we could always turn to her with questions/requests. Through Viki's attitude towards work and her colleagues, she excels in any team.`,
      author: 'Gabriella Kovács',
      profession: 'Full Stack Developer',
    },
  ];
  const [currentTestIndex, setCurrentTestIndex] = useState(0);

  const showPrevText = () => {
    setCurrentTestIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const showNextText = () => {
    setCurrentTestIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="">
      <div className=" flex flex-col justify-center items-center max-w-[1200px] py-7 mx-auto">
        <div className="flex justify-center items-center">
          <div className="flex justify-center basis-1/12" onClick={showPrevText} role="button" tabIndex={0}>
            <img src={leftArrow} className="w-6 hover:scale-110 cursor-pointer" alt="left arrow icon" />
          </div>
          <div className="flex flex-col justify-center items-center basis-2/3 font-unica uppercase">
            <div className="bg-white bg-opacity-60 rounded-sm shadow-md p-2">
              <p className="m-3 text-justify text-gray-800 md:text-lg"> {testimonials[currentTestIndex].text}</p>
            </div>
          </div>
          <div className="flex justify-center basis-1/12" onClick={showNextText} role="button" tabIndex={0}>
            <img src={rightArrow} className="w-6 hover:scale-110 cursor-pointer" alt="right arrow icon" />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center mt-4">
          <div>
            <img src={mouse} alt="writing mouse" className="w-14 md:w-20" />
          </div>
          <div className="flex flex-col justify-center items-center md:flex-row mx-4">
            <p className="text-justify font-elite text-sm md:text-md font-bold text-orange-800 uppercase">
              {testimonials[currentTestIndex].author}
            </p>
            <p className="mx-2">*</p>
            <p className="text-justify font-elite text-gray-800 text-sm md:text-md uppercase">
              {testimonials[currentTestIndex].profession}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
