import profile from '../assets/profile_bw.png';

function AboutMe() {
  return (
    <div className="container flex flex-col md:flex-row justify-start md:justify-center items-center row:items-start md:mt-10 pb-4">
      <div className="font-unica font-semibold uppercase text-gray-800 text-md md:text-lg text-justify leading-5">
        <div className="flex justify-center sm:inline-block sm:float-left">
          <img src={profile} alt="profile" className="w-40 md:w-52 mt-8 md:mt-0 mb-4 md:mb-0 md:me-2" />
        </div>
        <p className="pb-">Hello!</p>
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
          In 2018, I started my own enterprise, purchased a shop, and created premium custom products using a CO2 laser.
          I built my webshop using WordPress, delving into the basics of programming to add a personal design.
        </p>
        <p>
          In 2023, I made the bold decision to sell my enterprise, change careers, and dedicate myself entirely to
          pursuing programming knowledge.
        </p>
        <p className="pb-2">As I began to learn programming, I felt that this was the path I had been searching for.</p>
        <p>I am all about constantly learning and digging into different parts of coding.</p>
      </div>
    </div>
  );
}

export default AboutMe;
