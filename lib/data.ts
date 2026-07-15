import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaNodeJs, FaAngular, FaGitAlt, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiNextdotjs,
  SiNestjs,
  SiTailwindcss,
  SiDrizzle,
  SiSequelize,
  SiGraphql,
  SiFramer,
  SiAnthropic,
  SiGoogle,
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";
import { GiBearFace } from "react-icons/gi";
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
    tags: ['ExpressJS', 'MySQL', 'GraphQL', 'WorkerThreads', 'Claude Code'],
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
    title: "MUVIO | Movie DB",
    description:
      "Muvio is a sleek and modern AI-powered movie search and database application .",
    tags: ['React', 'Zustand', 'Gemini AI', 'TailwindCSS', 'TMDB API', 'Firebase Authentication'],
    imageUrl: movie,
    link:'https://muvio.netlify.app/'
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
  { name: "HTML", icon: React.createElement(FaHtml5), color: "#E34F26" },
  { name: "CSS", icon: React.createElement(FaCss3Alt), color: "#1572B6" },
  { name: "JavaScript", icon: React.createElement(SiJavascript), color: "#F7DF1E" },
  { name: "TypeScript", icon: React.createElement(SiTypescript), color: "#3178C6" },
  { name: "Node.js", icon: React.createElement(FaNodeJs), color: "#339933" },
  { name: "Express.js", icon: React.createElement(SiExpress), color: "#000000" },
  { name: "PostgreSQL", icon: React.createElement(SiPostgresql), color: "#4169E1" },
  { name: "MySQL", icon: React.createElement(SiMysql), color: "#4479A1" },
  { name: "MongoDB", icon: React.createElement(SiMongodb), color: "#47A248" },
  { name: "React", icon: React.createElement(FaReact), color: "#61DAFB" },
  { name: "Next.js", icon: React.createElement(SiNextdotjs), color: "#000000" },
  { name: "Angular", icon: React.createElement(FaAngular), color: "#DD0031" },
  { name: "Nest.js", icon: React.createElement(SiNestjs), color: "#E0234E" },
  { name: "Git", icon: React.createElement(FaGitAlt), color: "#F05032" },
  { name: "Tailwind", icon: React.createElement(SiTailwindcss), color: "#06B6D4" },
  { name: "Drizzle", icon: React.createElement(SiDrizzle), color: "#C5F74F" },
  { name: "Sequelize", icon: React.createElement(SiSequelize), color: "#52B0E7" },
  { name: "TypeORM", icon: React.createElement(TbDatabase), color: "#FE0803" },
  { name: "Zustand", icon: React.createElement(GiBearFace), color: "#433E38" },
  { name: "GraphQL", icon: React.createElement(SiGraphql), color: "#E10098" },
  { name: "Framer Motion", icon: React.createElement(SiFramer), color: "#0055FF" },
  { name: "Claude Code", icon: React.createElement(SiAnthropic), color: "#D97757" },
  { name: "Gemini CLI", icon: React.createElement(SiGoogle), color: "#4285F4" },
] as const;
