import DevWorks from '../components/DevWorks';
import GraphicWorks from '../components/GraphicWorks';
import ScrollDownButton from '../components/ScrollDownButton';

function Works() {
  return (
    <div>
      <div id="dev-works">
        <DevWorks />
        <GraphicWorks />
      </div>
       <ScrollDownButton />
    </div>
  );
}

export default Works;
