import fox from '../assets/typing-fox.svg';

function Home() {
  return (
    <div className="">
      <div className="flex flex-row justify-between">
        <img src={fox} alt="" className="md:w-1/3 me-0 w-3/4 md:me-20" />
      </div>
    </div>
  );
}

export default Home;
