import zoro2 from "./assets/images/Me/Zoro2.png";
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
import html5 from "./assets/images/Skills/html5.jpg";
import jquery from "./assets/images/Skills/jquery.png";
import js from "./assets/images/Skills/js.jpg";
import material_ui from "./assets/images/Skills/material-ui.png";
import redux from "./assets/images/Skills/redux.png";
import tailwind from "./assets/images/Skills/tailwind.png";
import vscode from "./assets/images/Skills/vscode.jpg";
import charka from "./assets/images/Skills/charka-ui.png";
import bootstrap5 from "./assets/images/Skills/bootstrap5.webp";
import css3 from "./assets/images/Skills/css.jpg";
import intelliJ from "./assets/images/Skills/intelliJ.png";
import eclipse from "./assets/images/Skills/eclipse.jpg";
import google_solution_challange from "./assets/images/Certificate/google-solution-challange.png";
import toeic from "./assets/images/Certificate/toeic.png";
import hackathon from "./assets/images/Activities/hackathon.jpg";
import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";

//icon
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
        { name: "Spring Boot", logo: spring, classification: "Backend" },
        { name: "Spring Security", logo: spring_security, classification: "Backend" },
        { name: "MySQL", logo: mysql, classification: "Backend" },
        { name: "MSSQL", logo: sqlserver, classification: "Backend" },
        { name: "MongoDB", logo: mongodb, classification: "Backend" },
        { name: "Hibernate", logo: hibernate, classification: "Backend" },
        { name: "Docker", logo: docker, classification: "Backend" },
        // { name: "AWS", logo: null, classification: "Backend" },
        // { name: "JUnit", logo: null, classification: "Backend" },
  
        // Frontend Skills
        { name: "HTML5", logo: html5, classification: "Frontend" },
        { name: "CSS3", logo: css3, classification: "Frontend" },
        { name: "JavaScript", logo: js, classification: "Frontend" },
        { name: "React", logo: reactjs, classification: "Frontend" },
        { name: "Redux", logo: redux, classification: "Frontend" },
        { name: "Bootstrap5", logo: bootstrap5, classification: "Frontend" },
        { name: "jQuery", logo: jquery, classification: "Frontend" },
        { name: "Figma", logo: figma, classification: "Frontend" },
        { name: "Tailwind CSS", logo: tailwind, classification: "Frontend" },
        { name: "Material-UI", logo: material_ui, classification: "Frontend" },
        { name: "Chakra UI", logo: charka, classification: "Frontend" },
  
        // Version Control
        { name: "GitHub", logo: github, classification: "Version Control" },
  
        // IDEs
        { name: "IntelliJ IDEA", logo: intelliJ, classification: "IDE" },
        { name: "VS Code", logo: vscode, classification: "IDE" },
        { name: "Eclipse", logo: eclipse, classification: "IDE" },
  
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
