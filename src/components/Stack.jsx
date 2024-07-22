import html from '../assets/stack/html_w.svg';
import css from '../assets/stack/css_w.svg';
import js from '../assets/stack/js_w.svg';
import react from '../assets/stack/react_w.svg';
import postgresql from '../assets/stack/postgresql_w.svg';
import node from '../assets/stack/node_w.svg';
import github from '../assets/stack/github_w.svg';
import git from '../assets/stack/git_w.svg';
import tailwind from '../assets/stack/tailwind_w.svg';
import jira from '../assets/stack/jira_w.svg';
import bootstrap from '../assets/stack/bootstrap_w.svg';
import agile from '../assets/stack/agile_w.svg';
import illustrator from '../assets/stack/illustrator_w.svg';
import photoshop from '../assets/stack/photoshop_w.svg';
import artios from '../assets/stack/artioscad_w.svg';
import lightburn from '../assets/stack/lightburn_w.svg';

function Stack() {
  return (
    <div id="stack">
      <div className="select-none bg-black bg-opacity-80 shadow-md py-8">
        <div className="container flex flex-col md:items-center justify-center mx-auto md:w-4/5">
          <div className="flex justify-center pb-8">
            <p className="font-elite text-xl xs:text-2xl text-white border border-white rounded-sm px-4 pt-2 shadow-sm">
              STACK
            </p>
          </div>
          <div className="flex flex-row flex-wrap justify-center gap-y-3">
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
