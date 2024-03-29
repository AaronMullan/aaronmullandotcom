import notifizor from '../assets/notifizor.png';
import node from '../assets/node.png';
import html from '../assets/html.png';
import opensource from '../assets/opensource.png';
import javascript from '../assets/javascript.png';
import jest from '../assets/jest.png';
import audio from '../assets/audio.png';
import sprinklr from '../assets/sprinklr.png';
import thisOne from '../assets/this.png';
import table from '../assets/table.png';
import diskard from '../assets/diskard.png';
import gitInsight from '../assets/gitinsight.png';

const cardData = [
  {
    title: 'Git Insight',
    text: 'Site demonstrating use of Github API via GraphQL to display user data.',
    link: 'https://github-viewer-nine.vercel.app/',
    image: gitInsight,
    linkText: 'site',
    secondaryLink: 'https://github.com/AaronMullan/github-viewer',
  },
  {
    title: 'Diskârd',
    text: 'Site for boutique garbage collection service built with React / Next.js.',
    link: 'https://diskard.vercel.app/',
    image: diskard,
    linkText: 'site',
    secondaryLink: 'https://github.com/AaronMullan/diskard',
  },
  {
    title: 'Tables',
    text: 'Responsive React Table Component with semantically correct html and many options.',
    link: 'https://table-showcase.netlify.app/',
    image: table,
    linkText: 'site',
    secondaryLink: 'https://github.com/AaronMullan/tables',
  },
  {
    title: 'Sprinklr',
    text: 'One of 5 developers who built features for this marketing website using Typescript / GraphQL.',
    link: 'https://www.sprinklr.com/',
    image: sprinklr,
    linkText: 'site',
  },
  {
    title: 'Audio',
    text: 'Personal Site made with Gatsby/Contentful/GraphQL.',
    image: audio,
    link: 'https://aaron-mullan-audio.netlify.app/',
    secondaryLink: 'https://github.com/AaronMullan/aaronmullanaudio',
  },
  {
    title: 'This Site',
    text: 'Personal Site built with React Bootstrap, then re-built without Bootstrap.',
    image: thisOne,
    secondaryLink: 'https://github.com/AaronMullan/aaronmullandotcom',
    secondaryLinkText: 'code',
  },
  {
    title: 'Notifizor',
    text: 'Simple notifications app integrating with the New York Times API.',
    link: 'https://notifizor.herokuapp.com/',
    image: notifizor,
    linkText: 'site',
    secondaryLink: 'https://github.com/AaronMullan/notifizor',
  },
  {
    title: 'Covid Tracking Project',
    text: 'Contributor to this project using Gatsby, D3 for data visualization for Covid tracking.',
    link: 'https://covidtracking.com/',
    image: opensource,
    secondaryLink: 'https://github.com/COVID19Tracking/website',
  },

  {
    title: 'Godzilla Paper Scissors',
    text: 'HTML and some Vanilla Javascript for ASCII art game.',
    link: 'https://aaronmullan.github.io/rockpaper/',
    image: html,
    secondaryLink: 'https://github.com/AaronMullan/rockpaper',
  },
  {
    title: 'Whatever Synth',
    text: 'Collaborative use of Web Audio API to make a browser-based synthesizer.',
    link: 'https://whateversynth.netlify.app/',
    image: javascript,
    secondaryLink: 'https://github.com/whateverSynth/whateverSynth-frontend',
  },
  {
    title: 'MultCo Jail Data',
    text: 'Web Scraping, Mongo DB and Express routes for a public API.',
    link: 'https://mult-co-jail-data.netlify.app/developers',
    image: node,
    secondaryLink:
      'https://github.com/MultCoJailData/MultCo-jail-data-BE/tree/dev/lib',
  },
  {
    title: 'Jest',
    text: 'Jest coverage on database routes and models.',
    image: jest,
    link: 'https://github.com/AaronMullan/record-database/tree/master/lib/models',
    linkText: 'models',
    secondaryLink:
      'https://github.com/AaronMullan/record-database/tree/master/__tests__',
    secondaryLinkText: 'routes',
  },
];

export default cardData;
