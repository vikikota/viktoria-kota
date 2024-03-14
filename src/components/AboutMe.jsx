import profile from '../assets/profile_bw.png';
import GithubLogo from '../assets/github-logo.png';
import GithubLogoHover from '../assets/github-logo-hover.png';
import LinkedinLogo from '../assets/linkedin-logo.png';
import LinkedinLogoHover from '../assets/linkedin-logo-hover.png';
import leftArrow from '../assets/left-arrow.svg';
import resume from '../assets/Kóta Viktória CV 2024 02.pdf';
import cvLogo from '../assets/cv-icon.png';
import cvLogoHover from '../assets/cv-icon-hover.png';

function AboutMe() {
  return (
    <div>
      <div className="container select-none flex flex-col md:flex-row justify-start md:justify-center items-center row:items-start md:mt-10 mx-auto">
        <div className="container select-none font-unica font-semibold uppercase text-gray-800 text-md md:text-lg md:mt-4 text-justify leading-5">
          <div className="flex justify-center sm:inline-block sm:float-left">
            <img src={profile} alt="profile" className="w-40 md:w-52 mt-6 mb-2 me-3" />
          </div>
          <p className="pb-2">Hello!</p>
          <p className="pb-2">My name is Viktória Kóta, I am a full stack developer and I live in Budapest.</p>
          <p>
            My original profession is a light industry engineer. In my previous position, I mostly worked with graphics,
            designing both online and offline materials.
          </p>
          <p className="pb-2">
            In addition to being proficient in graphic design software, I am also well-versed in the tools used to bring
            designs to life, such as digital eco solvent and UV printers, CO2 laser machines, and die cutting machines.
          </p>
          <p className="pb-2">
            In 2018, I started my own enterprise, purchased a shop, and created premium custom products using a CO2
            laser. I built my webshop using WordPress, delving into the basics of programming to add a personal design.
          </p>
          <p>
            In 2023, I made the bold decision to sell my enterprise, change careers, and dedicate myself entirely to
            pursuing programming knowledge.
          </p>
          <p className="pb-2">
            As I began to learn programming, I felt that this was the path I had been searching for.
          </p>
          <p>I am all about constantly learning and digging into different parts of coding.</p>
          <div className=" flex flex-row justify-center items-center space-x-4 mx-auto mt-6 mb-6">
            <div className="flex flex-row justify-start">
              <a
                className="relative flex justify-center md:justify-start items-center hover:scale-110 cursor-pointer me-3"
                href="https://github.com/vikikota"
                target="_blank"
                aria-label="github button"
                rel="noreferrer"
              >
                <img
                  src={GithubLogo}
                  alt="github logo"
                  className=" transition duration-300 transform w-9 hover:opacity-0"
                />
                <img
                  src={GithubLogoHover}
                  alt="github logo hover"
                  className="w-9 absolute opacity-0 hover:opacity-100 "
                />
              </a>
              <a
                className="relative flex justify-center md:justify-start items-center hover:scale-110 cursor-pointer me-3"
                href="https://www.linkedin.com/in/viktoria-kota-1b0a382ab/"
                target="_blank"
                aria-label="linkedin button"
                rel="noreferrer"
              >
                <img
                  src={LinkedinLogo}
                  alt="Linkedin logo"
                  className=" transition duration-300 transform w-9 hover:opacity-0"
                />
                <img
                  src={LinkedinLogoHover}
                  alt="Linkedin logo hover"
                  className="w-9 absolute opacity-0 hover:opacity-100"
                />
              </a>
              <a
                className="relative flex justify-center md:justify-start items-center hover:scale-110 cursor-pointer"
                href={resume}
                target="_blank"
                aria-label="cv button"
                rel="noreferrer"
              >
                <img src={cvLogo} alt="cv logo" className=" transition duration-300 transform w-9 hover:opacity-0" />
                <img src={cvLogoHover} alt="cv logo hover" className="w-9 absolute opacity-0 hover:opacity-100" />
              </a>
            </div>
            <div className="z-0">
              <img src={leftArrow} alt="left arrow" className="left-right w-9 md:w-12" />
            </div>

            <div className="font-unica font-bold text-md text-md md:text-xl text-gray-800 uppercase">
              MORE INFORMATION
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
