import profile from '../assets/profile_bw.png';

function AboutMe() {
  return (
    <div className="container flex flex-col md:flex-row justify-center items-center lg:mt-10 pb-4 space-x-4">
      <div>
        <img src={profile} alt="profile" className="w-40 md:w-80" />
      </div>
      <div className="font-unica font-semibold uppercase text-gray-800 text-xl text-justify">
        <p className="pb-2">Hello!</p>
        <p className="pb-2">My name is Viktória Kóta and I live in Budapest.</p>
        <p>
          My original profession is a light industry engineer with a specialization in packaging and press technology.
        </p>
        <p>
          My original profession is a light industry engineer with a specialization in packaging and press technology.
        </p>
        <p>
          My original profession is a light industry engineer with a specialization in packaging and press technology.
        </p>
        <p>
          My original profession is a light industry engineer with a specialization in packaging and press technology.
        </p>
        <p>
          My original profession is a light industry engineer with a specialization in packaging and press technology.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
