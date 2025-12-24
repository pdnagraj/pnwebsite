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
    name: "Education",
    hash: "#education",
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

export const educationData: ExperienceData[] = [
  {
    title: "Bachelor of Science in Computer Science",
    location: "University of Massachusetts Amherst",
    description: "• Built a strong foundation in software engineering, data structures, algorithms, and systems design.\n• Applied technical skills through team-based projects and real-world problem solving.\n• Developed analytical thinking and technical rigor that later supported work in consulting and operations.",
    icon: React.createElement(LuGraduationCap),
    logo: getAssetPath("/logos/Umass-Am-Logo.png"),
    date: "Sept 2016 - May 2020",
  },
  {
    title: "Masters of Business Administration",
    location: "Tepper School of Business at CMU",
    description: "• MBA candidate concentrating in Strategy, Business Analytics, and AI in Business.\n• Building advanced skills in problem structuring, data-driven decision-making, and operational strategy.\n• Applying classroom learning through consulting-style projects, leadership development, and real-world case work.",
    icon: React.createElement(LuGraduationCap),
    logo: getAssetPath("/logos/Tepper-logo.jpg"),
    date: "Aug 2024 - May 2026",
  },
];

export const experiencesData: ExperienceData[] = [
  {
    title: "Software Solutions Engineer",
    location: "Aras Corp.",
    description: "• Implemented configurable product lifecycle management (PLM) and workflow solutions for enterprise clients across aerospace, automotive, and technology sectors.\n• Translated business process requirements into scalable technical configurations, improving operational efficiency.\n• Partnered with client stakeholders to align system capabilities with process improvement and change initiatives.",
    icon: React.createElement(CgWorkAlt),
    logo: getAssetPath("/logos/aras_corporation_logo.jpeg"),
    date: "Sept 2020 - Mar 2022",
  },
  {
    title: "Software Engineer",
    location: "Cloudwave Inc.",
    description: "• Delivered compliant reporting and data-tracking enhancements for government clients, including the GSA.\n• Operated within highly regulated environments, ensuring alignment with security, compliance, and audit requirements.\n• Collaborated with cross-functional stakeholders to translate regulatory needs into technical solutions.",
    icon: React.createElement(CgWorkAlt),
    logo: getAssetPath("/logos/Cloudwave-logo.png"),
    date: "Jul 2022 - Feb 2023",
  },
  {
    title: "Mid-level Software Developer",
    location: "Staples",
    description: "• Partnered with Operations, Engineering, and Warehouse teams to redesign a performance-based incentive system.\n• Improved productivity tracking and accountability, reducing operational errors by 10% and increasing productivity by 7%.\n• Analyzed operational data to identify bottlenecks and support leadership decision-making, contributing to ~$10M in annual cost savings.",
    icon: React.createElement(CgWorkAlt),
    logo: getAssetPath("/logos/Staples-Logo.png"),
    date: "Jul 2023 - Mar 2024",
  },
  {
    title: "Co-Founder",
    location: "Yungsten Tech",
    description: "• Co-founded a software consulting firm delivering custom, end-to-end technical solutions for business clients.\n• Led client discovery, requirements gathering, and solution scoping across multiple engagements.\n• Coordinated 5–7 developers and client stakeholders across concurrent projects to deliver on time and within scope.\n• Drove outbound outreach and client management, growing the firm to 5+ high-ticket clients.",
    icon: React.createElement(FaReact),
    logo: getAssetPath("/logos/YT.png"),
    date: "Nov 2022 - Jul 2024",
  },
  {
    title: "Summer Associate, Consulting",
    location: "Gartner",
    description: "• Supported Fortune 500 healthcare clients through ERP transformation initiatives, focusing on readiness, risk mitigation, and program assurance.\n• Conducted stakeholder interviews and cross-functional assessments across HR, IT, and Operations to identify go-live risks.\n• Developed business cases and automation use-case analyses, contributing to a $1M RPA opportunity.\n• Worked closely with senior consultants and partners to deliver structured insights and client-ready recommendations.",
    icon: React.createElement(CgWorkAlt),
    logo: getAssetPath("/logos/Gartner-Symbol.png"),
    date: "May 2025 - Jul 2025",
  },
  {
    title: "Co-Founder",
    location: "Box Byte Digital",
    description: "• Designed and operated a repeatable B2B outbound growth system, translating client goals into scalable workflows.\n• Increased average lead response rates from 9% to 34% and appointment conversion rates from 3% to 17%.\n• Built CRM pipelines, automated follow-ups, and standardized delivery processes to ensure consistent outcomes.\n• Scaled the business to 7+ high-ticket clients and exited through acquisition after stabilizing operations.",
    icon: React.createElement(CgWorkAlt),
    logo: getAssetPath("/logos/BOX_BYTE_LOGO.png"),
    date: "Jul 2024 - Nov 2025",
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
    title: "Industry Experience",
    skills: [
      "Enterprise Software and Technology Services",
      "B2B Services and Professional Services",
      "Retail, Supply Chain, and Warehouse Operations",
      "Government and Public Sector",
      "Healthcare Systems and Payers",
    ],
  },
] as const;