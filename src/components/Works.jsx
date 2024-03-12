import { v4 as uuidv4 } from 'uuid';
import WorkCard from './WorkCard';
import html from '../assets/stack/html.svg';
import css from '../assets/stack/css.svg';
import js from '../assets/stack/js.svg';
import react from '../assets/stack/react.svg';
import postgresql from '../assets/stack/postgresql.svg';
import node from '../assets/stack/node.svg';
import github from '../assets/stack/github.svg';
import jira from '../assets/stack/jira.svg';
import bootstrap from '../assets/stack/bootstrap.svg';
import agile from '../assets/stack/agile.svg';

function Works() {
  const data = [
    {
      id: 0,
      images: [
        'https://media.geeksforgeeks.org/wp-content/uploads/20240215121528/javare15.png',
        'https://media.geeksforgeeks.org/wp-content/uploads/20240215121204/15re.webp',
        'https://media.geeksforgeeks.org/wp-content/uploads/20240215121356/jsre15.jpg',
      ],
      title: 'Rock, Paper, Scissors, Lizard, Spock',
      description:
        'As part of my studies, I had the incredible opportunity to participate in a group project where we developed a website for an American-style country club. Working within the Scrum framework, with all its ceremonies, was an enlightening experience.',
      stack: [html, css, js],
    },
    {
      id: 1,
      images: [
        'https://media.geeksforgeeks.org/wp-content/uploads/20240215121528/javare15.png',
        'https://media.geeksforgeeks.org/wp-content/uploads/20240215121204/15re.webp',
        'https://media.geeksforgeeks.org/wp-content/uploads/20240215121356/jsre15.jpg',
      ],
      title: 'The Door Club project',
      description:
        'As part of my studies, I had the incredible opportunity to participate in a group project where we developed a website for an American-style country club. Working within the Scrum framework, with all its ceremonies, was an enlightening experience.',
      stack: [bootstrap, react, postgresql, node, github, jira, agile],
    },
    {
      id: 2,
      images: [
        'https://media.geeksforgeeks.org/wp-content/uploads/20240215121528/javare15.png',
        'https://media.geeksforgeeks.org/wp-content/uploads/20240215121204/15re.webp',
        'https://media.geeksforgeeks.org/wp-content/uploads/20240215121356/jsre15.jpg',
      ],
      title: 'The Door Club project',
      description:
        'As part of my studies, I had the incredible opportunity to participate in a group project where we developed a website for an American-style country club. Working within the Scrum framework, with all its ceremonies.',
      stack: [bootstrap, react, postgresql, node, github, jira, agile],
    },
  ];

  return (
    <div className="container flex flex-col flex-wrap md:flex-row justify-start md:justify-center items-center row:items-start lg:mt-10 pb-4 mx-auto relative">
      {data.map((item) => (
        <WorkCard key={uuidv4()} {...item} />
      ))}
    </div>
  );
}

export default Works;
