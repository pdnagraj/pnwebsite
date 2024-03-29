import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelors of Computer Science",
    location: "University Of Massachusetts Amherst",
    description:
      "Completed my Bachelors of Computer Science in May 2020",
    icon: React.createElement(LuGraduationCap),
    date: "Sept 2016 - May 2020",
  },
  {
    title: "Software Solutions Engineer",
    location: "Aras Corporation",
    description:
      "Extensively engaged with the PLM software, Aras Innovator, specializing in developing, testing and customizing the product.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2020 - March 2022",
  },
  {
    title: "Software Engineer",
    location: "Cloudwave Inc.",
    description:
      "Developed and tested solutions for our main client GSA (General Services Administration",
    icon: React.createElement(CgWorkAlt),
    date: "July 2022 - February 2023",
  },
  {
    title: "Mid-level Software Developer",
    location: "Staples",
    description:
      "Collaborated on the development of the Pay-For-Performance (PFP) system to incentivize warehouse workers based on order productivity, including bulk and picking",
    icon: React.createElement(CgWorkAlt),
    date: "July 2023 - March 2024",
  },
  {
    title: "Co-Founder",
    location: "Yungsten Tech",
    description:
      "Founded in collaboration with my co-founder, Yungsten Tech is a specialized software development company with a forte in architecting full-stack applications. Our portfolio spans across Web3, Blockchain, and large-scale projects, showcasing our versatility and commitment to cutting-edge technology.",
    icon: React.createElement(FaReact),
    date: "November 2022 - present",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "SQL",
  "Java",
  "Python",
  "C",
  "C#",
  "C++",
  "JSON",
  "Django",
  "Maven",
  "Selenium",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Vue.js",
  "Android Studio",
  "Kotlin",
  "Eclipse"

] as const;