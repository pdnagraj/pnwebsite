import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { getAssetPath } from "./utils";

export type ExperienceData = {
  title: string;
  location: string;
  description: string;
  icon: React.ReactElement;
  logo?: string;
  date: string;
};

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

export const experiencesData: ExperienceData[] = [
  {
    title: "Bachelors of Computer Science",
    location: "UMass Amherst",
    description: "• Earned a Bachelor of Science in Computer Science with a focus on software engineering and algorithms.",
    icon: React.createElement(LuGraduationCap),
    logo: getAssetPath("/logos/Umass-Am-Logo.png"),
    date: "Sept 2016 - May 2020",
  },
  {
    title: "Software Solutions Engineer",
    location: "Aras Corporation",
    description: "• Implemented configurable product lifecycle and workflow solutions for enterprise clients across multiple industries.\n• Aligned technical implementations with client business processes to support operational improvements.",
    icon: React.createElement(CgWorkAlt),
    logo: getAssetPath("/logos/aras_corporation_logo.jpeg"),
    date: "Sept 2020 - Mar 2022",
  },
  {
    title: "Software Engineer",
    location: "Cloudwave Inc.",
    description: "• Supported government clients including the GSA by delivering compliant reporting and data tracking enhancements.\n• Worked within regulated environments to align technical delivery with stakeholder and compliance requirements.",
    icon: React.createElement(CgWorkAlt),
    logo: getAssetPath("/logos/Cloudwave-logo.png"),
    date: "Jul 2022 - Feb 2023",
  },
  {
    title: "Mid-level Software Developer",
    location: "Staples",
    description: "• Partnered with cross-functional teams to design and implement a performance-based incentive system for warehouse operations.\n• Reduced operational errors by 10% and increased productivity by 7% through improved performance tracking.\n• Analyzed operational data to identify bottlenecks and support leadership decision-making.",
    icon: React.createElement(CgWorkAlt),
    logo: getAssetPath("/logos/Staples-Logo.png"),
    date: "Jul 2023 - Mar 2024",
  },
  {
    title: "Co-Founder",
    location: "Yungsten Tech",
    description: "• Helped grow the firm to 5+ high-ticket clients through outbound outreach and requirement gathering.\n• Coordinated 5–7 developers and client stakeholders across concurrent projects to deliver on schedule.\n• Supported internal operations including client communication and billing processes.",
    icon: React.createElement(FaReact),
    logo: getAssetPath("/logos/YT.png"),
    date: "Nov 2022 - Jul 2024",
  },
  {
    title: "Co-Founder",
    location: "Box Byte Digital",
    description: "• Designed and operated a repeatable B2B outbound service, translating client goals into scalable workflows.\n• Improved average lead response rates from 9% to 34% and appointment conversion rates from 3% to 17% across clients.\n• Grew the business to 7+ high-ticket clients and exited through acquisition after stabilizing service operations.",
    icon: React.createElement(CgWorkAlt),
    logo: getAssetPath("/logos/BOX_BYTE_LOGO.png"),
    date: "Jul 2024 - Nov 2025",
  },
  {
    title: "Summer Associate, Consulting",
    location: "Gartner",
    description: "• Supported Fortune 500 healthcare clients through ERP transformation, focusing on program assurance and organizational readiness.\n• Conducted stakeholder interviews and readiness assessments to identify risks and support go-live planning.\n• Contributed to business development by supporting a $1M RPA proposal and automation use-case analysis.",
    icon: React.createElement(CgWorkAlt),
    logo: getAssetPath("/logos/Gartner-Symbol.png"),
    date: "May 2025 - Jul 2025",
  },
  {
    title: "MBA Candidate",
    location: "CMU Tepper",
    description: "• MBA candidate concentrating in Strategy and Business Analytics.\n• Building leadership, analytical, and operational skills through coursework and applied projects.",
    icon: React.createElement(LuGraduationCap),
    logo: getAssetPath("/logos/Tepper-logo.jpg"),
    date: "Aug 2024 - May 2026",
  },
];

export const skillsData = [
  {
    title: "Product and Program Execution",
    skills: [
      "Roadmap and prioritization",
      "Requirements definition and documentation",
      "Cross-functional delivery",
      "Go-live readiness and execution",
      "Risk and issue management",
    ],
  },
  {
    title: "Strategy, Analytics, and Business Operations",
    skills: [
      "Customer and market analysis",
      "KPI design and performance tracking",
      "Process improvement and optimization",
      "Business case development",
      "Data-driven decision making",
    ],
  },
  {
    title: "Stakeholder and Leadership Skills",
    skills: [
      "Stakeholder interviews and alignment",
      "Executive communication",
      "Change management",
      "Team coordination and influence",
      "Ownership and accountability",
    ],
  },
  {
    title: "Operations and Process Management",
    skills: [
      "Process design and standardization",
      "Service delivery optimization",
      "Workflow definition and automation",
      "Performance tracking and reporting",
      "Continuous improvement initiatives",
    ],
  },
  {
    title: "Tools and Technical Foundations",
    skills: [
      "Jira, Confluence, Notion",
      "Microsoft Excel and PowerPoint",
      "Google Workspace",
      "SQL",
      "Python, Java, JavaScript",
    ],
  },
  {
    title: "Industries",
    skills: [
      "Healthcare",
      "Enterprise Software",
      "Government and Public Sector",
      "Retail and Supply Chain",
      "Warehouse and Operations",
      "B2B Services",
    ],
  },
] as const;