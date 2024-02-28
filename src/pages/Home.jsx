import Typewriter from '../components/Typewriter';

function Home() {
  let displayText = 'OH HI MARK!';

  return (
    <>
      <div>
{/*         <img src="../src/assets/viktoria-kota.svg" alt="" className="w-36 display-flex justify-center" />
 */}      </div>
      <div className="flex flex-row justify-between">
        <Typewriter text={displayText} />
{/*         <img src="../src/assets/typing-fox.svg" alt="" className="md:w-1/3 me-0 w-3/4 md:me-20" />
 */}      </div>
    </>
  );
}

export default Home;
