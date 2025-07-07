import { BACKEND_SKILLS, FRONTEND_SKILLS } from './tech-skills';

export const PROJECT_CATEGORY = {
  ALL: 'all',
  FULL_STACK: 'full-stack',
  BLOCKCHAIN: 'blockchain',
};

export const TABS = [
  {
    label: 'All',
    value: PROJECT_CATEGORY.ALL,
    icon: 'fluent:tab-desktop-20-regular',
  },
  {
    label: 'Full Stack',
    value: PROJECT_CATEGORY.FULL_STACK,
    icon: 'bx:code-block',
  },
  {
    label: 'Blockchain',
    value: PROJECT_CATEGORY.BLOCKCHAIN,
    icon: 'eos-icons:blockchain',
  }
];

const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);

export const PROJECTS = [
  {
    imgSrc: '/assets/images/opsec.png',
    title: 'Opsec',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Blockchain (bitcoin, ethereum, solana, etc)'),
      getSkillByLabel(BACKEND_SKILLS, 'Python'),
    ],
    description: 'Opsec is decentralized app. Secure, Safe and with industry leading technology and support',
    repoLink: 'https://github.com/',
    sourceLink: 'https://',
    category: [PROJECT_CATEGORY.BLOCKCHAIN],
  },
  {
    imgSrc: '/assets/images/digi.png',
    title: 'DigiPro',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Nestjs'),
    ],
    description: 'This project is mortgage broker site that has two portals - customer portal and broker portal. Integration DocuSign service. Integration third party API(vonage api) to implement video meeting page.',
    repoLink: 'https://github.com/',
    sourceLink: 'https://app.digipro.ai/',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: '/assets/images/tmra.png',
    title: 'Donation Saas Platform',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Material UI (mui)'),
      getSkillByLabel(BACKEND_SKILLS, 'Graphql'),
      getSkillByLabel(BACKEND_SKILLS, 'Nestjs'),
    ],
    description:
      'Providing a collective and measured response for those who have suffered and lost everything through natural disasters, calamities, conflict or other misfortunes . It had been built with highly customizable using Next Js, Nestjs, MUI, Mongodb, Graphql.',
    repoLink: 'https://github.com/dannydev123/tmra',
    sourceLink: 'https://tmra.io',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: '/assets/images/sandwich.png',
    title: 'Sandwich Neo',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Blockchain (bitcoin, ethereum, solana, etc)'),
    ],
    description: 'Sandwich Neo is a completely re-built version of Sandwich. A one-stop-shop with all tools you will ever need to invest, launch, trade, manage assets and earn. 10+ blockchains at the start. ',
    repoLink: 'https://github.com/dannydev123/sandwitch-app',
    sourceLink: 'https://beta.sandwich.network',
    category: [PROJECT_CATEGORY.BLOCKCHAIN],
  },
  {
    imgSrc: '/assets/images/footy-1.png',
    title: 'Social Football Betting Website',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Vue'),      
      getSkillByLabel(BACKEND_SKILLS, 'Express (Node.js Framework)'),
      getSkillByLabel(BACKEND_SKILLS, 'Nestjs'),
      getSkillByLabel(BACKEND_SKILLS, 'Mongodb'),
    ],
    description:
      'Footy Amigo™ helps thousands of football bettors and traders make smarter and well informed data-driven betting decisions on a daily basis. It built by Nuxt(Vue), Node, Express, Mongodb',
    repoLink: 'https://github.com/dannydev123/footyamigo',
    sourceLink: 'https://footyamigo.com',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: '/assets/images/kmg.png',
    title: 'KMG Betting',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),      
      getSkillByLabel(BACKEND_SKILLS, 'Blockchain (bitcoin, ethereum, solana, etc)'),
    ],
    description: 'This is sports betting website which is built by using Next, Java, Ethereum, Payment gateways etc',
    repoLink: 'https://github.com/dannydev123/kmg-front',
    sourceLink: 'https://www.dpuat.com/#/',
    category: [PROJECT_CATEGORY.BLOCKCHAIN],
  },
  {
    imgSrc: '/assets/images/cotom.png',
    title: 'Management System',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),      
      {
        label: 'Java',
        icon: 'logos:java',
      },
      getSkillByLabel(BACKEND_SKILLS, 'MySQL'),
    ],
    description:
      'This is software company management system and built with Next, Laravel, Mysql, MUI, Tailwindcss',
    repoLink: 'https://github.com/dannydev123/cotom',
    sourceLink: 'https://stg.cotom.cloud',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: '/assets/images/longstory.png',
    title: 'Long Story Short',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Django'),
    ],
    description: 'Long Story Short is a private shopping club with membership dues of $1,000 per month. Our goal is to advance luxury retail in the way that is most likely to benefit consumers, unconstrained by a need to generate ecommerce profit margins.',
    repoLink: 'https://github.com/dannydev123/longstory',
    sourceLink: 'https://longstory.sh',
    category: [PROJECT_CATEGORY.FULL_STACK],
  },
  {
    imgSrc: '/assets/images/symbiogenesis.png',
    title: 'SYMBIOGENESIS',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Next.js'),      
      getSkillByLabel(BACKEND_SKILLS, 'Nestjs'),
      getSkillByLabel(BACKEND_SKILLS, 'Blockchain (bitcoin, ethereum, solana, etc)'),
    ],
    description: 'A completely new form of NFT-based entertainment, where 10,000 collectible artworks meet real game utility.',
    repoLink: 'https://github.com/dannydev123/symbiogenesis',
    sourceLink: 'https://symbiogenesis.app/',
    category: [PROJECT_CATEGORY.BLOCKCHAIN],
  },
];
