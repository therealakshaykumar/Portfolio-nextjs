import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import recibo from "@/public/Recibo.png";
import mwsrc from "@/public/MWSRC.png";
import blog from "@/public/blog.png";
import movie from "@/public/movie.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer",
    company: "EAZY ERP",
    link: "https://www.eazyerp.com/",
    description:
      "Currently working as a Full Stack Web Developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - Present",
  },
  {
    title: "Back-End Developer",
    company: "MOBITECH",
    link: "https://mobitechwireless.in/",
    description:
      "I worked as a back-end developer for 1 years. Learned more about IoT and also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Software Developer",
    company: "LEVELX",
    link:"https://levelx.in/",
    description:
      "I worked as a Software Developer Intern, my stack includes Angular, TypeScript, Tailwind, Express and MongoDB.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Recibo SFA",
    description:
      "Recibo is a powerful Sales Force Automation tool designed for primary and secondary sales, enabling real-time B2B eCommerce for orders and new product launches.",
    tags: ['ExpressJS', 'MySQL', 'GraphQL', 'WorkerThreads'],
    imageUrl: recibo,
    link:'https://recibo.ai/'
  },
  {
    title: "DCON-AG",
    description:
      "DCON AG is an advanced application designed for agricultural use, allowing users to remotely control irrigation systems via the internet.",
    tags: ['Loopback 4', 'MQTT', 'PostgreSQL', 'Firebase' ,'JWT'],
    imageUrl: mwsrc,
    link:'https://web.dconag.com'
  },
  {
    title: "WMC - Wireless Motor Controller",
    description:
      "Innovative IoT controller for irrigation and fertigation, designed to provide efficient and hassle-free farm control from anywhere.",
    tags: ['Loopback 4', 'MQTT', 'MySQL', 'Firebase', 'RabbitMQ'],
    imageUrl: mwsrc,
    link:'https://play.google.com/store/apps/details?id=com.mobitech.mconproject&hl=en_IN&pli=1'
  },
  {
    title: "Film-Flex | Movie DB",
    description:
      "A modern movie database web app, built with Angular and TailwindCSS, it leverages the TMDB API .",
    tags: ['Angular', 'TailwindCSS', 'TMDB API', 'Firebase'],
    imageUrl: movie,
    link:'https://film-flex.web.app/'
  },
  {
    title: "Times Blog",
    description:
      "A modern blogging platform built with Angular and TailwindCSS, featuring real-time content updates using Firebase Realtime Database.",
    tags: ['Angular', 'TailwindCSS', 'Realtime Database', 'Firebase'],
    imageUrl: blog,
    link:'https://times-blog.web.app/'
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "React",
  "Next.js",
  "Angular",
  "Nest.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Squelize",
  "TypeORM",
  "Zustand",
  "GraphQL",
  "Framer Motion",
] as const;
