// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import R from './assets/tech_logo/R.png';
import sql from './assets/tech_logo/sql.png';
import EJS from './assets/tech_logo/EJS.png';
import restapi from './assets/tech_logo/restapi.png';
import Jupyternotebook from './assets/tech_logo/Jupyternotebook.png';
import workbench from './assets/tech_logo/workbench.jpg';
import rstudio from './assets/tech_logo/rstudio.png';
import mongoose from './assets/tech_logo/mongoose.png';
import powerbi from './assets/tech_logo/powerbi.png';
import excel from './assets/tech_logo/excel.png';
import jira from './assets/tech_logo/jira.png';
import npm from './assets/tech_logo/npm.png';

// Experience Section Logo's
import SofwareEngineer from './assets/company_logo/SofwareEngineer.png';

// Education Section Logo's
import cbselogo from './assets/education_logo/cbse_logo.png';
import bseblogo from './assets/education_logo/bseb_logo.png';
import nitslogo from './assets/education_logo/nits_logo.png';

// Project Section Logo's
import HomePage from './assets/work_logo/HomePage.png';
import Yoga from './assets/work_logo/Yoga.png';
import portfolio from './assets/work_logo/portfolio.png';
import irs from './assets/work_logo/irs.png';






export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Mongoose', logo: mongoose },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'EJS', logo: EJS },
      { name: 'REST APIs', logo: restapi },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'SQL', logo: sql },
      { name: 'R', logo: R },

    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Jupyter Notebook', logo: Jupyternotebook },
      { name: 'MySQL Workbench', logo: workbench },
      { name: 'RStudio', logo: rstudio },
      { name: 'figma', logo: figmaLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'npm', logo: npm },
      { name: 'jira', logo: jira },
      { name: 'excel', logo: excel },
      { name: 'powerbi', logo: powerbi },
    ],
  },
];

export const experiences = [

  {
    id: 0,
    img: SofwareEngineer,

    role: "Technical Lead & Full-Stack Developer (Primary Frontend)",
    company: "Independent Consultant",
    date: "June 2024 - Present",
    desc: "Developed a comprehensive CA web ecosystem including admin, customer, and employee portals. Implemented backend integration using REST APIs, ExpressJS, Axios, and MongoDB/Mongoose for real-time data management. Ensured clean code architecture, performed API testing with Postman, and contributed to tech stack improvements for scalability and efficiency.",
    skills: [
      "JavaScript",
      "ReactJS",
      "Redux",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "Axios",
      "Postman",
      "npm",
      "Git/GitHub",
      "EJS"
    ],
  },

  {
    id: 1,
    img: SofwareEngineer,

    role: "Technical Lead & Full-Stack Developer (Primary Frontend)",
    company: "Independent Consultant",
    date: "June 2024 - Present",
    desc: "Built the official website (www.fluxeducare.in) using ReactJS, NextJS, and Tailwind CSS to deliver a responsive, high-performance user experience across devices. Converted Figma designs into pixel-perfect UIs and optimized frontend performance using Chrome DevTools and Lighthouse.",
    skills: [
      "JavaScript",
      "ReactJS",
      "NextJS",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Redux",
      "React Router",
      "EJS",
      "Figma",
      "Chrome DevTools",
      "Lighthouse",
      "npm",
      "Git/GitHub"
    ],
  },


];

export const education = [

  {
    id: 0,
    img: nitslogo,
    school: "National Institute of Technology, Silchar",
    date: "July 2020 - June 2024",
    grade: "7.04 CGPA",
    desc: "I completed my Bachelor's degree in Computer Science and Engineering from NIT Silchar. During my academic journey, I built a strong foundation in core computer science subjects such as Data Structures and Algorithms, Operating Systems, DBMS, and Computer Networks. I also explored practical domains like Web Development, Mobile App Development, and AI/ML, working on real-world projects that bridged theory with application. My time at NIT Silchar significantly shaped my problem-solving mindset and software engineering skills.",
    degree: "Bachelor of Technology - B.Tech (Computer Science and Engineering)"
  },

  {
    id: 1,
    img: bseblogo,
    school: "Sir Ganesh Dutt Memorial College, Patna",
    date: "July 2018 - June 2020",
    grade: "1st Division",
    desc: "I completed my Class 12 education in the Science stream (Physics, Chemistry, Mathematics) under the BSEB board. My academic journey during this time helped build a strong analytical foundation and fueled my interest in engineering and technology.",
    degree: "Intermediate (XII) – PCM, BSEB Board"
  },

  {
    id: 2,
    img: cbselogo,
    school: "SR Public School, Patna",
    date: "July 2008 - June 2018",
    grade: "1st Division",
    desc: "I completed my Class 10th education from SR Public School, Patna, under the CBSE board, with a focus on Science and Computer Applications. This phase laid the foundation for my interest in technology and computing.",
    degree: "Matriculation (X) – Science with Computer, CBSE Board"
  }];

export const projects = [
  {
    id: 0,
    title: "Movie Explorer App",
    description:
      "🎬 Movie Explorer is a sleek React application that allows users to search and explore movies effortlessly. Leveraging the OMDb and YouTube APIs, it provides live search, filters, sorting, trailer modals, favorites, and a fully responsive UI with smooth UX.",
    image: HomePage,
    tags: [
      "React JS",
      "React Hooks",
      "Context API",
      "React Router",
      "OMDb API",
      "YouTube API",
      "LocalStorage",
      "Debounce",
      "CSS Modules",
      "Flexbox",
      "CSS Grid",
      "HTML5",
      "JavaScript"
    ],
    github: "https://github.com/Harsh31750/movie-explorer-react",
    webapp: "https://movie-explorer-react-pied.vercel.app/",
  },

  {
    id: 1,
    title: " Real-Time Lightweight Application for Yoga Posture Recognition and Self-Correction",
    description:
      "A real-time posture recognition and correction system using computer vision and lightweight deep learning. Designed to guide users through six yoga asanas with instant feedback, improving accuracy and safety. Built with React, Python, Flask, MediaPipe, and CNN for classification, it delivers responsive corrections via webcam-based pose estimation.",
    image: Yoga,
    tags: ["React JS", "Python", "Flask", "MediaPipe", "CNN", "k-NN", "Socket.IO", "Bootstrap"],
    github: "https://github.com/Harsh31750/Real-Time-Lightweight-Application-for-Yoga-Posture-Recognition-and-Self-Correction.git",
    webapp: "https://vercel.app/",
  },

  {
    id: 3,
    title: "Personal Portfolio Website",
    description:
      "A sleek and modern portfolio website built with React.js to showcase my skills, experience, and projects as a Software Engineer. It features a responsive design, dynamic project rendering, and smooth navigation to present my technical profile, resume, and achievements effectively.",
    image: portfolio,
    tags: ["React JS", "HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com",
    webapp: "https://vercel.app/",
  },

  {
    id: 4,
    title: "Intelligent Retention System (IRS)",
    description:
      "A complete end-to-end project for user retention, churn prediction, CLV estimation, and personalized intervention recommendations. Designed for food delivery / e-commerce platforms to analyze user behavior, predict churn, calculate CLV, and generate tailored interventions to maximize retention and revenue.",
    image: irs,
    tags: ["Python", "Flask", "Streamlit", "scikit-learn", "Pandas", "NumPy", "Joblib", "Matplotlib", "Seaborn", "Machine Learning", "REST APIs", "SQL", "MySQL", "Power BI", "Excel", "Git / GitHub", "Postman"],
    github: "https://github.com/Harsh31750/intelligent-retention-system.git",
    webapp: "https://vercel.app/",
  }

];  