// import images
import kuzan1 from "./assets/images/Me/Kuzan1.png";
import zoro2 from "./assets/images/Me/Zoro2.png";
import zoro3 from "./assets/images/Me/zoro3.jpg";
import zoro1 from "./assets/images/Me/Zoro1.png";
import figma from "./assets/images/Skills/figma.png";
import spring from "./assets/images/Skills/spring.jpg";
import mysql from "./assets/images/Skills/mysql.png";
import sqlserver from "./assets/images/Skills/sqlserver.jpg";
import github from "./assets/images/Skills/github.jpg";
import mongodb from "./assets/images/Skills/mongodb.jpg";
import docker from "./assets/images/Skills/docker.png";
import spring_security from "./assets/images/Skills/spring-security.jpg";
import java from "./assets/images/Skills/java.png";
import hibernate from "./assets/images/Skills/hibernate.png";

import reactjs from "./assets/images/Skills/react.png";
// import mysql from "./assets/images/Skills/mysql.png";
// import sqlserver from "./assets/images/Skills/sqlserver.jpg";
// import github from "./assets/images/Skills/github.jpg";
// import mongodb from "./assets/images/Skills/mongodb.jpg";
// import docker from "./assets/images/Skills/docker.png";
// import spring_security from "./assets/images/Skills/spring-security.jpg";
// import java from "./assets/images/Skills/java.png";
// import hibernate from "./assets/images/Skills/hibernate.png";

import google_solution_challange from "./assets/images/Certificate/google-solution-challange.png";
import toeic from "./assets/images/Certificate/toeic.png";
import services_logo3 from "./assets/images/Certificate/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import hackathon from "./assets/images/Activities/hackathon.jpg";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
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
    firstName: "VO MINH",
    LastName: "HIEU",
    btnText: "Hire Me",
    image: zoro1,
  },
  skills: {
      title: "Technical Skills",
      skills_content: [
        // Backend Skills
        { name: "Java", logo: java, classification: "Backend" },
        { name: "Spring Boot", spring: null, classification: "Backend" },
        { name: "Spring Security", logo: spring_security, classification: "Backend" },
        { name: "MySQL", logo: mysql, classification: "Backend" },
        { name: "MSSQL", logo: sqlserver, classification: "Backend" },
        { name: "MongoDB", logo: mongodb, classification: "Backend" },
        { name: "Hibernate", logo: hibernate, classification: "Backend" },
        { name: "Docker", logo: docker, classification: "Backend" },
        // { name: "AWS", logo: null, classification: "Backend" },
        // { name: "JUnit", logo: null, classification: "Backend" },
  
        // Frontend Skills
        { name: "HTML5", logo: null, classification: "Frontend" },
        { name: "CSS3", logo: null, classification: "Frontend" },
        { name: "JavaScript", logo: null, classification: "Frontend" },
        { name: "TypeScript", logo: null, classification: "Frontend" },
        { name: "React", logo: reactjs, classification: "Frontend" },
        { name: "Redux", logo: null, classification: "Frontend" },
        { name: "Bootstrap5", logo: null, classification: "Frontend" },
        { name: "jQuery", logo: null, classification: "Frontend" },
        { name: "Tailwind CSS", logo: null, classification: "Frontend" },
        { name: "Material-UI", logo: null, classification: "Frontend" },
        { name: "Chakra UI", logo: null, classification: "Frontend" },
  
        // Version Control
        { name: "GitHub", logo: github, classification: "Version Control" },
  
        // IDEs
        { name: "IntelliJ IDEA", logo: null, classification: "IDE" },
        { name: "VS Code", logo: null, classification: "IDE" },
        { name: "Eclipse", logo: null, classification: "IDE" },
  
        // Other
        { name: "Scrum", logo: null, classification: "Other" },
        { name: "JIRA", logo: null, classification: "Other" }
      ],
    icon: MdArrowForward,
  },
  certificate: {
    title: "Certificate",
    subtitle: "",
    certificate_content: [
      {
        title: "Google Solution Challange",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: google_solution_challange,
      },
      {
        title: "Toeic",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: toeic,
      },
      // {
      //   title: "PhotoShop Editing",
      //   para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
      //   logo: services_logo3,
      // },
    ],
  },
  Projects: {
    title: "Personal Projects",
    subtitle: "",
    image: zoro2,
    project_content: [
      {
        title: "Movie Ticket Booking Website",
        image: project1,
      },
      {
        title: "Hotel Booking",
        image: project2,
      },
      {
        title: "Human Resource",
        image: project3,
      },
    ],
  },
  Activities: {
    title: "Activities",
    subtitle: "",
    activities_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: google_solution_challange,
        name: "Google Solution Challange",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: hackathon,
        name: "Hackathon",
      },
      // {
      //   review:
      //     "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
      //   img: avatar3,
      //   name: "Johnny",
      // },
      // {
      //   review:
      //     "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
      //   img: avatar4,
      //   name: "ROBBIN",
      // },
    ],
  },
  Hireme: {
    title: "Curriculum Vitae",
    subtitle: "",
    para: "This is my CV, please download it to see more directly",
    btnText: "Download CV",
  },
};
