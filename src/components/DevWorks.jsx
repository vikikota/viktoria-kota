import { v4 as uuidv4 } from 'uuid';
import html from '../assets/stack/html_w.svg';
import css from '../assets/stack/css_w.svg';
import js from '../assets/stack/js_w.svg';
import react from '../assets/stack/react_w.svg';
import postgresql from '../assets/stack/postgresql_w.svg';
import node from '../assets/stack/node_w.svg';
import github from '../assets/stack/github_w.svg';
import jira from '../assets/stack/jira_w.svg';
import bootstrap from '../assets/stack/bootstrap_w.svg';
import agile from '../assets/stack/agile_w.svg';
import tailwind from '../assets/stack/tailwind_w.svg';
import hangman1 from '../assets/works/hangman_1.jpg';
import hangman2 from '../assets/works/hangman_2.jpg';
import club1 from '../assets/works/club_1.jpg';
import club2 from '../assets/works/club_2.jpg';
import club3 from '../assets/works/club_3.jpg';
import club4 from '../assets/works/club_4.jpg';
import club5 from '../assets/works/club_5.jpg';
import rpsls1 from '../assets/works/rpsls_1.jpg';
import rpsls2 from '../assets/works/rpsls_2.jpg';
import portfolio1 from '../assets/works/portfolio_1.jpg';
import portfolio2 from '../assets/works/portfolio_2.jpg';
import WorkCard from './WorkCard';

function DevWorks() {
  const data = [
    {
      id: 1,
      images: [portfolio1, portfolio2],
      title: 'My portfolio website',
      description:
        'Expanding my skills, I dedicated my personal portfolio website to learning Tailwind, emphasizing my commitment to user-friendly UX design.',
      buttonText: 'YOU ARE HERE NOW',
      buttonURL: 'https://github.com/vikikota/viktoria-kota',
      stack: [tailwind, react, github],
    },
    {
      id: 2,
      images: [club1, club3, club2, club4, club5],
      title: 'The Door Club project',
      description:
        'I collaborated within a Scrum team to develop a website for an American-style country club. The website allows users to book services, supported by a backend database, and features an admin interface for staff members.',
      buttonText: 'CHECK THE CODE',
      buttonURL: 'https://github.com/vikikota/club-project',
      stack: [bootstrap, react, postgresql, node, jira, agile],
    },
    {
      id: 3,
      images: [hangman1, hangman2],
      title: 'Hangman',
      description:
        'As a mini project, I practiced advanced JavaScript functions and DOM manipulation through developing the game.',
      buttonText: 'TRY IT',
      buttonURL: 'https://vikikota.github.io/hangman/',
      stack: [html, css, js],
    },
   /*  {
      id: 4,
      images: [rpsls1, rpsls2],
      title: 'Rock, Paper, Scissors, Lizard, Spock',
      description:
        'This was my very first project. I used Vanilla JS, CSS, and HTML. The responsiveness is not quite there yet 🙂',
      buttonText: 'TRY IT',
      buttonURL: 'https://vikikota.github.io/rock-paper-scissors-lizard-spock/',
      stack: [html, css, js],
    }, */
  ];

  return (
    <div>
      <div className="flex justify-center items-center pt-8 md:pt-12">
        <p className="font-elite font-bold text-xl xs:text-2xl text-gray-800 border-2 border-gray-800 rounded-sm px-4 pt-2 shadow-sm">
          DEV WORKS
        </p>
      </div>
      <div className=" flex flex-wrap flex-row justify-center items-center lg:mt-6 mx-auto relative">
        {data.map((item) => (
          <WorkCard key={uuidv4()} {...item} />
        ))}
      </div>
    </div>
  );
}

export default DevWorks;
