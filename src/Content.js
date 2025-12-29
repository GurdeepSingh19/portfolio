// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import reactjs from "./assets/images/Skills/react.png";
import html from "./assets/images/Skills/html-5.png";
import css from "./assets/images/Skills/css-3.png"; 
import javascript from "./assets/images/Skills/java-script.png";
import jquery from "./assets/images/Skills/jQurery.png";
import php from "./assets/images/Skills/php.png";
import sql from "./assets/images/Skills/mysql.png";
import shopify from "./assets/images/Skills/shopify.png"
import node from "./assets/images/Skills/node.png"
import vercel from "./assets/images/Skills/vercel.png"
import render from "./assets/images/Skills/render.png"

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/shopify.png";

import project1 from "./assets/images/MyProjects/img1.png";
import project2 from "./assets/images/MyProjects/img2.png";
import project3 from "./assets/images/MyProjects/img3.png";
import project4 from "./assets/images/MyProjects/DSLab.png";
import project5 from "./assets/images/MyProjects/hotmilklingerie.png";
import project6 from "./assets/images/MyProjects/DailyRobust.png";
import project7 from "./assets/images/MyProjects/byorianacollection.png";
import project8 from "./assets/images/MyProjects/SundayRitual.png";
import project9 from "./assets/images/MyProjects/teslabiohealing.png";
import person_project from "./assets/images/MyProjects/person.png";

import man from "./assets/images/Testimonials/man.png";
import woman from "./assets/images/Testimonials/woman.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person.png";
import resume from "./assets/Resume/GurdeepSingh.pdf";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

function getExperienceYears(startYear, startMonth) {
  const startDate = new Date(startYear, startMonth);
  const currentDate = new Date();

  let years = currentDate.getFullYear() - startDate.getFullYear();
  const monthDiff = currentDate.getMonth() - startDate.getMonth();

  if (monthDiff < 0) {
    years--;
  }

  return `${years}+`;
}

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "GURDEEP",
    LastName: "SINGH",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: getExperienceYears(2017, 11),
        text: "Years of Experinse in Web development",
      },
      {
        count: "200+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "HTML",
        para: "Lorem ipsum text  dummy",
        logo: html,
      },
      {
        name: "CSS",
        para: "Lorem ipsum text  dummy",
        logo: css,
      },
      {
        name: "JavaScript",
        para: "Lorem ipsum text  dummy",
        logo: javascript,
      },
      {
        name: "Jquery",
        para: "Lorem ipsum text  dummy",
        logo: jquery,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Shopify",
        para: "Lorem ipsum text  dummy",
        logo: shopify,
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: node,
      },
      {
        name: "PHP",
        para: "Lorem ipsum text  dummy",
        logo: php,
      },
      {
        name: "My SQL",
        para: "Lorem ipsum text  dummy",
        logo: sql,
      },
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      {
        name: "Vercel",
        para: "Lorem ipsum text  dummy",
        logo: vercel,
      },
      {
        name: "Render",
        para: "Lorem ipsum text  dummy",
        logo: render,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Introduction",
    subtitle: "Overview",
    intro:"I'm Gurdeep Singh, and I'm excited to share a bit about myself with you. I love making websites that people enjoy using. Over the past 7 years, I've gotten pretty good at it, working with stuff like HTML, CSS, JavaScript, React, Liquid, and Shopify. Being a Shopify Partner has taught me a lot about making online stores better for shoppers and businesses alike. Whether it's tweaking how things look, coming up with cool new ideas, or making sure everything works smoothly, I take pride in doing a great job.",
    service_content: [
      {
        title: "Frontend Development",
        para: "In the world of web development, I excel at crafting engaging user interfaces using HTML, CSS, and JavaScript. With a knack for enhancing user experiences, I specialize in frameworks like React, along with jQuery and Ajax, to bring websites to life with seamless interactivity and dynamic content.",
        logo: services_logo2,
      },
      {
        title: "Backend Development",
        para: "Behind the scenes, I'm a proficient backend developer, leveraging PHP and MySQL to build robust server-side applications and manage databases efficiently. From handling user authentication to processing data and generating dynamic content, I ensure that the backend of websites operates smoothly and securely.",
        logo: services_logo1,
      },
      {
        title: "Shopiy Expert",
        para: "Unlocking the power of e-commerce is my specialty. As a certified Shopify Expert, I've delved deep into the world of online retail, optimizing storefronts and streamlining the shopping experience. From customizing themes to integrating payment gateways, I've got the tools and expertise to take your Shopify store to the next level.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "DSLab",
        image: project4,
        link:"https://dslaboratories.com/"
      },
      {
        title: "Hotmilk Lingerie",
        image: project5,
        link:"https://www.hotmilklingerie.co.nz/"
      },
      {
        title: "DailyRobust",
        image: project6,
        link:"https://www.dailyrobust.com/"
      },
      {
        title: "By Oriana Collection",
        image: project7,
        link:"https://byorianacollection.com/"
      },
      {
        title: "Sunday Seoul",
        image: project8,
        link:"https://sundayseoul.shop/"
      },
      {
        title: "Tesla BioHealing",
        image: project9,
        link:"https://www.teslabiohealing.com/"
      }
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“We neede help fixing some bugs on an existing custom app that w previous developer had built for us. Gurdeep had excellent communication around the project and was both very knowlegeble and prompt at responding to our requests, and also went above and beyond. Highly recommend.”",
        img: woman,
        name: "Hotmilk Lingerie NZ",
      },
      {
        review:
          "“Efficient, organized, and thorough. Great person to work with.”",
        img: man,
        name: "ListBurst",
      },
      {
        review:
          "“Quick to respond to my request for assistance and efficient at completely the job! Great communication and a pleasure to deal with. Will absolutely reach out to Gurdeep again for any future needs and will definitely be recommending them to fellow small business owners.”",
        img: woman,
        name: "Sunday Seoul Limited",
      },
      {
        review:
          "“quickly identified and corrected the coding issue for us. will be inquiring for more help from gurdeep in the future when needed!!”",
        img: man,
        name: "Vette Lights",
      },
      {
        review:
          "“Gurdeep is by far the best developer I have worked with! I started working with him 2 years ago and still counting. He is reliable, always answers quickly, and cares about my projects. He always has something to recommend or an idea for you! 100% recommended! If you are looking for affordable...”",
        img: man,
        name: "Lovbox Shop",
      },
    ],
  },
  Hireme: {
    title: "Professional ",
    subtitle: "Resume",
    image1: Hireme_person,
    image2: Hireme_person2,
    resume: resume,
    para: "Unlock the gateway to my professional journey! Click the button below to get your hands on my resume and discover the skills and experiences that make me the perfect fit for your team.",
    btnText: "Download Resume",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "gurdeepnz19@gmail.com",
        icon: GrMail,
        link: "mailto:gurdeepnz19@gmail.com",
      },
      {
        text: "+64 22 154 7375",
        icon: MdCall,
        link: "https://wa.me/+64221547375",
      },
      {
        text: "Gurdeep Singh",
        icon: FaLinkedinIn,
        link: "https://www.linkedin.com/in/gurdeep-singhnz/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
};
