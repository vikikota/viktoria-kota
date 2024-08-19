import { v4 as uuidv4 } from 'uuid';
import GrowthCard from './GrowthCard';
import git from '../assets/growth/git.jpg';
import vue from '../assets/growth/vue.jpg';
import figma from '../assets/growth/figma.jpg';
import typo from '../assets/growth/typo.jpg';
import uxDesign from '../assets/growth/ux_design.jpg';

function Growth() {
  const data = [
    {
      id: 5,
      image: typo,
      title: 'Virágvölgyi Péter - A tipográfia mestersége számítógéppel - BOOK',
      description: 'Ez a kézikönyv szinte mindenkihez szól, aki szövegek előállításával foglalkozik.E könyvből elsajátíthatóak az alapok, hogy kulturált tipográfiai formába tudjuk önteni szövegeinket. Ha szeretné tudni, hogy milyen oldalméretet válasszon, hogy mekkorák legyenek a margók, hogy melyik betűtípus alkalmas a szövegnek és melyik a címeknek, akkor segítséget nyújthat ez a könyv, melyben számos olyan ismeret is helyet kapott, ami már a tipográfia magasiskolájának nevezhető.',
      buttonURL: '#',
      process: 19,
    },
    {
      id: 4,
      image: figma,
      title: 'FIGMA MasterClass - Web and mobile app UI/UX design',
      description: 'We get to know Figma in depth, enabling us to confidently use it in UI/UX design planning',
      buttonURL: '#',
      process: 52,
    },
    {
      id: 3,
      image: uxDesign,
      title: 'Pásztor Dávid - UX Design - BOOK',
      description:
        'UX DESIGN. How to design user-friendly and lovable applications? The first UX book in Hungarian. 149 pages, filled with practical examples and illustrations.',
      buttonURL: 'https://uxstudioteam.com/ux-blog/ux-konyv/',
      process: 100,
    },
    {
      id: 2,
      image: vue,
      title: 'Vue - The Complete Guide (incl. Router & Comp. API) - Course',
      description:
        'This comprehensive course covers everything you need to know to master Vue.js, from the fundamentals to advanced concepts like the Composition API, Vue Router, and Vuex. It features over 30 hours of video content, numerous coding exercises, and a final project to test your skills.',
      buttonURL: 'https://www.udemy.com/course/vuejs-2-the-complete-guide/?couponCode=24T7MT72224',
      process: 51,
    },
    {
      id: 1,
      image: git,
      title: 'Git and GitHub MasterClass - Course',
      description:
        'Master the essentials and the tricky bits: rebasing, squashing, stashing, reflogs, blobs, trees, & more!',
      buttonURL: 'https://www.udemy.com/course/git-and-github-bootcamp/?couponCode=24T7MT72224/',
      process: 100,
    },
  ];

  return (
    <div className="container mx-auto">
      <div className=" flex justify-center pb-4 md:pb-0">
        <p className="font-elite font-bold text-xl xs:text-2xl text-gray-800 border-2 border-gray-800 rounded-sm px-4 pt-2 shadow-sm">
          PROFESSIONAL GROWTH
        </p>
      </div>
      <div className=" flex flex-wrap flex-row justify-center items-center md:items-start lg:mt-6 mx-auto relative">
        {data.map((item) => (
          <GrowthCard key={uuidv4()} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Growth;
