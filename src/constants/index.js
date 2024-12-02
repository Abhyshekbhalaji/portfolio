import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
 
   horizonModel,
   pitcherModal,
   storeItModal,
    
    threejs,
    Udemy,
    HackerRank,
    Postman,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Skill Seeker",
      icon: web,
    },
    {
      title: "Tech Explorer",
      icon: mobile,
    },
    {
      title: "Next.js Developer ",
      icon: backend,
    },
    {
      title: "Postman API Expert",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
   
  ];
  
  const experiences = [
    {
      title: "Advanced CSS & SASS Responsive Design",
      company_name: "Udemy",
      icon: Udemy,
      iconBg: "#383E56",
      date: "March 2024 - April 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
      link:"https://drive.google.com/file/d/1Yz6pVYQ-wdzk6mKYGNc3_gsRYrQlDaIC/view?usp=drive_link"
    },
    {
      title: "The Complete Javascript Bootcamp",
      company_name: "Udemy",
      icon: Udemy,
      iconBg: "#E6DEDD",
      date: "April 2024-May 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
      link:"https://drive.google.com/file/d/17TvsCirFvkneIiXIEChk06g2h8mziBdx/view?usp=drive_link"
    },
    {
      title: "Front End Developer",
      company_name: "HackerRank",
      icon: HackerRank,
      iconBg: "#383E56",
      date: "Jun 2024-Sept 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
      link:"https://drive.google.com/file/d/1K3t3jexuzfK0N4z0yMFdRJDyHJRKZem7/view?usp=drive_link"
    },
    {
      title: "Students API Expert",
      company_name: "Postman",
      icon: Postman,
      iconBg: "#E6DEDD",
      date: "Nov 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
      link:"https://drive.google.com/file/d/1pjCt_eNjbOq82uEqspsIulKQRql4u5nV/view?usp=drive_link"
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Horizon",
      description:
        "Horizon is a financial SaaS US based platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "appwrite",
          color: "green-text-gradient",
        },
        {
          name: "nextjs",
          color: "pink-text-gradient",
        },
      ],
      image: horizonModel,
      source_code_link: "https://github.com/Abhyshekbhalaji/horizon",
     project_code_link:"https://horizon-9v2u-8xtc8he4s-abhyshekbhalajis-projects.vercel.app/"
    },
    {
      name: "YC Directory",
      description:
        "A  platform where entrepreneurs can submit their startup ideas for virtual pitch competitions, browse other pitches, and gain exposure through a clean minimalistic design for a smooth user experience",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "sanity",
          color: "green-text-gradient",
        },
        {
          name: "nextjs",
          color: "pink-text-gradient",
        },
      ],
      image: pitcherModal,
      source_code_link: "https://github.com/Abhyshekbhalaji/Pitcher_Nextjs",
      project_code_link:"https://pitcher-nextjs.vercel.app/"
    },
    {
      name: "Store It",
      description:
        "A storage management and file sharing platform that lets users effortlessly upload, organize, and share files",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "appwrite",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: storeItModal,
      source_code_link: "https://github.com/Abhyshekbhalaji/store_it",
        project_code_link:"https://store-it-eight-alpha.vercel.app/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };