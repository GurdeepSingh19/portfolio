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

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img3.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import man from "./assets/images/Testimonials/man.png";
import woman from "./assets/images/Testimonials/woman.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

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
        count: "5+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "80+",
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
        name: "CSS js",
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
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Introduction",
    subtitle: "Overview",
    intro:"I'm Gurdeep Singh, and I'm excited to share a bit about myself with you. I love making websites that people enjoy using. Over the past 5 years, I've gotten pretty good at it, working with stuff like HTML, CSS, JavaScript, React, Liquid, and Shopify. Being a Shopify Partner has taught me a lot about making online stores better for shoppers and businesses alike. Whether it's tweaking how things look, coming up with cool new ideas, or making sure everything works smoothly, I take pride in doing a great job.",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION More than 80",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Incredible service.  As a first time business owner, who had only prior experience with eBay, I really wasn't sure what I was embarking on in opening my own website store.  Shopify sent out a total of 5 website builders and the price and services Alliance was offering meet my requirements.  From my first call and throughout the project to its final days, Alliance has stood with me in making my website store ownership a reality.  If you are looking for an affordable, caring, and knowledgeable company to design your website. Alliance is your solution.”",
        img: man,
        name: "The Atomic Movie Store",
      },
      {
        review:
          "“We neede help fixing some bugs on an existing custom app that w previous developer had built for us. Gurdeep had excellent communication around the project and was both very knowlegeble and prompt at responding to our requests, and also went above and beyond. Highly recommend.”",
        img: woman,
        name: "Hotmilk Lingerie NZ",
      },
      {
        review:
          "“Quick to respond to my request for assistance and efficient at completely the job! Great communication and a pleasure to deal with. Will absolutely use Alliance IT again for any future needs and will definitely be recommending them to fellow small business owners.”",
        img: woman,
        name: "Sunday Seoul Limited",
      },
      {
        review:
          "“Efficient, organized, and thorough. Great agency to work with.”",
        img: man,
        name: "ListBurst",
      },
      {
        review:
          "“quickly identified and corrected the coding issue for us. will be inquiring for more help from Alliance in the future when needed!!”",
        img: man,
        name: "Vette Lights",
      },
      {
        review:
          "“Gurdeep is by far the best developer I have worked with! I started working with him 2 years ago and still counting. He is reliable, always answers quickly, and cares about my projects. He always has something to recommend or an idea for you! 100% recommended! If you are looking for affordable, excellent, and quick service, Gurdeep is your guy!”",
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
    para: "Unlock the gateway to my professional journey! Click the button below to get your hands on my resume and discover the skills and experiences that make me the perfect fit for your team.",
    btnText: "Resume",
  },
  Contact: {
    title: "Contect Me",
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
        icon: BsInstagram,
        link: "https://www.instagram.com/urfav.gurdeep/",
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
