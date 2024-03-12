import html from '../assets/stack/html.svg';
import css from '../assets/stack/css.svg';
import js from '../assets/stack/js.svg';
import react from '../assets/stack/react.svg';
import postgresql from '../assets/stack/postgresql.svg';
import node from '../assets/stack/node.svg';
import github from '../assets/stack/github.svg';
import git from '../assets/stack/git.svg';
import tailwind from '../assets/stack/tailwind.svg';
import jira from '../assets/stack/jira.svg';
import bootstrap from '../assets/stack/bootstrap.svg';
import agile from '../assets/stack/agile.svg';
import illustrator from '../assets/stack/illustrator.svg';
import photoshop from '../assets/stack/photoshop.svg';
import artios from '../assets/stack/artioscad.svg';
import lightburn from '../assets/stack/lightburn.svg';

function Stack() {
  return (
    <div id="stack">
      <div className="select-none bg-black bg-opacity-80 shadow-md py-5">
        <div className="container flex flex-col md:items-center justify-center mx-auto md:w-4/5">
          <div>
            <p className="font-elite text-center text-xl xs:text-2xl text-gray-200 py-2">MY STACK</p>
          </div>
          <div className="flex flex-row flex-wrap justify-center">
            <div>
              <img src={html} alt="html logo" className="w-12 md:w-20 m-2 md:m-3" />
            </div>
            <div>
              <img src={css} alt="css logo" className="w-12 md:w-20 m-2 md:m-3" />
            </div>
            <div>
              <img src={js} alt="js logo" className="w-12 md:w-20 m-2 md:m-3" />
            </div>
            <div>
              <img src={react} alt="react logo" className="w-12 md:w-20 m-2 md:m-3" />
            </div>
            <div>
              <img src={node} alt="node logo" className="w-12 md:w-20 m-2 md:m-3" />
            </div>
            <div>
              <img src={postgresql} alt="postgresql logo" className="w-12 md:w-20 m-2 md:m-3" />
            </div>
            <div>
              <img src={github} alt="github logo" className="w-12 md:w-20 m-2 md:m-3" />
            </div>
            <div>
              <img src={git} alt="git logo" className="w-12 md:w-20 m-2 md:m-3" />
            </div>
            <div>
              <img src={bootstrap} alt="bootstrap logo" className="w-12 md:w-20 m-2 md:m-3" />
            </div>
            <div>
              <img src={tailwind} alt="tailwind logo" className="w-12 md:w-20 m-2 md:m-3" />
            </div>
            <div>
              <img src={jira} alt="jira logo" className="w-12 md:w-20 m-2 md:m-3" />
            </div>
            <div>
              <img src={agile} alt="agile logo" className="w-12 md:w-20 m-2 md:m-3" />
            </div>
            <div>
              <img src={illustrator} alt="illustrator logo" className="w-12 md:w-20 m-2 md:m-3" />
            </div>
            <div>
              <img src={photoshop} alt="photoshop logo" className="w-12 md:w-20 m-2 md:m-3" />
            </div>
            <div>
              <img src={artios} alt="artios logo" className="w-12 md:w-20 m-2 md:m-3" />
            </div>
            <div>
              <img src={lightburn} alt="lightburn logo" className="w-12 md:w-20 m-2 md:m-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stack;
