import { TCMSPage } from "@/types/cms/page";
import { TCMSProfile } from "@/types/cms/profile";
import { TCMSWork } from "@/types/cms/work";
import { TCMSProduct } from "@/types/cms/product";
import { TCMSStack, TCMSStackItem } from "@/types/cms/stack";
import { CMSProductPricingTypeEnum } from "@/types/cms/product";
import { CMSStackSkillLevelEnum } from "@/types/cms/stack";

// Mock Pages Data
export const mockPages: TCMSPage[] = [
  {
    title: "Hello, I'm Sufyaan Mohammed",
    description: "Software Engineer | CS @ City College of New York",
    slug: "home",
    content: {
      html: "<p>Welcome to my portfolio website. I'm a developer passionate about creating amazing web experiences.</p>",
    },
    metaSeo: {
      title: "Home - Portfolio",
      description: "Welcome to my portfolio website",
      index: true,
      follow: true,
    },
    isCustomPage: false,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    title: "Experience",
    description: "My professional work experience",
    slug: "works",
    
    metaSeo: {
      title: "Experience - Portfolio",
      description: "My professional work experience",
      index: true,
      follow: true,
    },
    isCustomPage: false,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    title: "Projects",
    description: "Projects I've built",
    slug: "products",
    content: {
      html: "<p>Check out the projects I've created.</p>",
    },
    metaSeo: {
      title: "Projects - Portfolio",
      description: "Projects I've built",
      index: true,
      follow: true,
    },
    isCustomPage: false,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },

];

// Mock Profile Data
export const mockProfile: TCMSProfile = {
  name: "Sufyaan Mohammed",
  position: "Full Stack Developer",
  avatar: {
    url: "https://via.placeholder.com/200",
    alt: "Profile Avatar",
    width: 200,
    height: 200,
  },
  contacts: [
    {
      title: "LinkedIn",
      href: "https://linkedin.com/in/sufyaan-mohammed",
      newTab: true,
      ref: "linkedin",
    },
    {
      title: "GitHub",
      href: "https://github.com/sufyaan2655",
      newTab: true,
      ref: "github",
    },
    {
      title: "Email",
      href: "mailto:sufyaaan2005@gmail.com",
      newTab: false,
      ref: "email",
    },
  ],
  socials: [
    {
      title: "LinkedIn",
      href: "https://linkedin.com/in/sufyaan-mohammed",
      newTab: true,
      ref: "linkedin",
    },
    {
      title: "Email",
      href: "mailto:sufyaaan2005@gmail.com",
      newTab: false,
      ref: "email",
    },
    {
      title: "GitHub",
      href: "https://github.com/sufyaan2655",
      newTab: true,
      ref: "github",
    },
  ],
  stackItems: [
    {
      id: "1",
      title: "React",
      description: "A JavaScript library for building user interfaces",
      logo: {
        url: "https://api.iconify.design/simple-icons:react.svg?color=%2361DAFB",
        alt: "React",
        width: 64,
        height: 64,
      },
      level: CMSStackSkillLevelEnum.ADVANCED,
    },
    {
      id: "2",
      title: "TypeScript",
      description: "Typed JavaScript at any scale",
      logo: {
        url: "https://api.iconify.design/simple-icons:typescript.svg?color=%233178C6",
        alt: "TypeScript",
        width: 64,
        height: 64,
      },
      level: CMSStackSkillLevelEnum.ADVANCED,
    },
    {
      id: "3",
      title: "Node.js",
      description: "JavaScript runtime built on Chrome's V8",
      logo: {
        url: "https://api.iconify.design/simple-icons:nodedotjs.svg?color=%23339933",
        alt: "Node.js",
        width: 64,
        height: 64,
      },
      level: CMSStackSkillLevelEnum.ADVANCED,
    },
    {
      id: "4",
      title: "Next.js",
      description: "The React Framework for Production",
      logo: {
        url: "https://api.iconify.design/logos:nextjs-icon.svg",
        alt: "Next.js",
        width: 64,
        height: 64,
      },
      level: CMSStackSkillLevelEnum.ADVANCED,
    },
    {
      id: "5",
      title: "Tailwind CSS",
      description: "A utility-first CSS framework",
      logo: {
        url: "https://api.iconify.design/simple-icons:tailwindcss.svg?color=%2306B6D4",
        alt: "Tailwind CSS",
        width: 64,
        height: 64,
      },
      level: CMSStackSkillLevelEnum.ADVANCED,
    },
    {
      id: "6",
      title: "Python",
      description: "A high-level programming language",
      logo: {
        url: "https://api.iconify.design/simple-icons:python.svg?color=%233776AB",
        alt: "Python",
        width: 64,
        height: 64,
      },
      level: CMSStackSkillLevelEnum.INTERMEDIATE,
    },
    {
      id: "7",
      title: "PostgreSQL",
      description: "Advanced open source relational database",
      logo: {
        url: "https://api.iconify.design/simple-icons:postgresql.svg?color=%234169E1",
        alt: "PostgreSQL",
        width: 64,
        height: 64,
      },
      level: CMSStackSkillLevelEnum.INTERMEDIATE,
    },
    {
      id: "8",
      title: "MongoDB",
      description: "NoSQL database program",
      logo: {
        url: "https://api.iconify.design/simple-icons:mongodb.svg?color=%2347A248",
        alt: "MongoDB",
        width: 64,
        height: 64,
      },
      level: CMSStackSkillLevelEnum.INTERMEDIATE,
    },
    {
      id: "9",
      title: "Git",
      description: "Distributed version control system",
      logo: {
        url: "https://api.iconify.design/simple-icons:git.svg?color=%23F05032",
        alt: "Git",
        width: 64,
        height: 64,
      },
      level: CMSStackSkillLevelEnum.ADVANCED,
    },
    {
      id: "10",
      title: "Docker",
      description: "Containerization platform",
      logo: {
        url: "https://api.iconify.design/simple-icons:docker.svg?color=%232496ED",
        alt: "Docker",
        width: 64,
        height: 64,
      },
      level: CMSStackSkillLevelEnum.INTERMEDIATE,
    },
    {
      id: "11",
      title: "JavaScript",
      description: "High-level programming language",
      logo: {
        url: "https://api.iconify.design/simple-icons:javascript.svg?color=%23F7DF1E",
        alt: "JavaScript",
        width: 64,
        height: 64,
      },
      level: CMSStackSkillLevelEnum.ADVANCED,
    },
    {
      id: "12",
      title: "HTML5",
      description: "Markup language for web pages",
      logo: {
        url: "https://api.iconify.design/simple-icons:html5.svg?color=%23E34F26",
        alt: "HTML5",
        width: 64,
        height: 64,
      },
      level: CMSStackSkillLevelEnum.ADVANCED,
    },
    {
      id: "13",
      title: "SQL",
      description: "Structured Query Language for databases",
      logo: {
        url: "https://api.iconify.design/simple-icons:mysql.svg?color=%234479A1",
        alt: "SQL",
        width: 64,
        height: 64,
      },
      level: CMSStackSkillLevelEnum.INTERMEDIATE,
    },
    {
      id: "14",
      title: "Java",
      description: "Object-oriented programming language",
      logo: {
        url: "https://api.iconify.design/logos:java.svg",
        alt: "Java",
        width: 64,
        height: 64,
      },
      level: CMSStackSkillLevelEnum.INTERMEDIATE,
    },
  ],
  ongoingProduct: {
    id: "4",
    title: "Parking Ticket Bot",
    description: "An AI-powered tool that analyzes parking tickets using OCR and vision APIs to extract violation details and verify regulations through NYC Open Data APIs. Includes automated notifications and tracking for appeal outcomes.",
    logo: {
      url: "/images/Parking Ticket Bot.png",
      alt: "Parking Ticket Bot",
      width: 192,
      height: 144,
    },
    pricingType: CMSProductPricingTypeEnum.OPEN_SOURCE,
    liveLink: "",
    sourceLink: "",
    createdAt: new Date().toISOString(),
  },
  callToActions: [
    {
      title: "View Resume",
      href: "/files/Sufyaan Mohammed - Resume.pdf",
      newTab: true,
      ref: "resume",
    },
    {
      title: "Github",
      href: "https://github.com/sufyaan2655",
      newTab: true,
      ref: "github",
    },
  ],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

// Mock Works Data
export const mockWorks: TCMSWork[] = [
  {
    id: "1",
    position: "Software Engineering Fellow",
    company: "Headstarter AI",
    startYear: "August 2024",
    endYear: "September 2024",
    companyUrl: "https://headstarter.ai",
    logo: {
      url: "/images/headstarter-ai.png",
      alt: "Headstarter AI",
      width: 48,
      height: 48,
    },
    description: "Shipped 5 production-ready AI apps and APIs using Next.js, OpenAI API, Pinecone, and Stripe. Won 1st place at TikTok Hackathon among 75+ participants.",
    linkedinUrl: "https://www.linkedin.com/company/headstarter-ai",
  },
  {
    id: "2",
    position: "Aladdin Product Intern",
    company: "BlackRock",
    startYear: "July 2024",
    endYear: "August 2024",
    companyUrl: "https://blackrock.com",
    logo: {
      url: "/images/blackrock.png",
      alt: "BlackRock",
      width: 48,
      height: 48,
    },
    description: "Developed and familiarized with Aladdin, focusing on products like Risk Radar to solve financial data challenges. Designed and presented a conceptual Aladdin ecosystem product detailing system functionality and data flows.",
    linkedinUrl: "https://www.linkedin.com/company/blackrock",
  },
  {
    id: "3",
    position: "Technology & Operations Intern",
    company: "BlackRock",
    startYear: "July 2023",
    endYear: "August 2023",
    companyUrl: "https://blackrock.com",
    logo: {
      url: "/images/blackrock.png",
      alt: "BlackRock",
      width: 48,
      height: 48,
    },
    description: "Utilized Aladdin's analytics tools to process and interpret financial data for cross-functional projects. Mapped the Institutional Client Journey by translating business needs into structured workflows.",
    linkedinUrl: "https://www.linkedin.com/company/blackrock",
  },
  {
    id: "4",
    position: "Columbia E.N.G. Research Intern",
    company: "Columbia University",
    startYear: "June 2022",
    endYear: "August 2022",
    companyUrl: "https://www.columbia.edu",
    logo: {
      url: "/images/Columbia.png",
      alt: "Columbia University",
      width: 48,
      height: 48,
    },
    description: "Collaborated with faculty and doctoral candidates on AI/ML applications in Civil and Mechanical Engineering. Developed Python simulations to model stress–strain behavior and predict failure thresholds.",
    linkedinUrl: "https://www.linkedin.com/school/columbia-university",
  },
];

// Mock Products Data
export const mockProducts: TCMSProduct[] = [
  {
    id: "1",
    title: "Smart Transit System",
    description: "A data-driven transit management app that simulates bus and subway networks, analyzes congestion patterns, and visualizes optimized routes using algorithmic models.",
    logo: {
      url: "/images/smart-transit-system.png",
      alt: "Smart Transit System",
      width: 192,
      height: 144,
    },
    pricingType: CMSProductPricingTypeEnum.OPEN_SOURCE,
    liveLink: "",
    sourceLink: "https://github.com/Sufyaan2655/Smart-Transit-System",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Blogify",
    description: "A modern blogging platform that allows users to create, share, and manage their blog content effortlessly. Built with React.js, Next.js, Firebase, and MySQL.",
    logo: {
      url: "/images/blogify.png",
      alt: "Blogify",
      width: 192,
      height: 64,
    },
    pricingType: CMSProductPricingTypeEnum.OPEN_SOURCE,
    liveLink: "",
    sourceLink: "https://github.com/mhmalam/blog-hackathon",
    videoLink: "https://www.youtube.com/watch?v=4vF6VUuJSwk",
    createdAt: new Date().toISOString(),
  },
  {
    id: "4",
    title: "Parking Ticket Bot",
    description: "An AI-powered tool that analyzes parking tickets using OCR and vision APIs to extract violation details and verify regulations through NYC Open Data APIs. Includes automated notifications and tracking for appeal outcomes.",
    logo: {
      url: "/images/Parking Ticket Bot.png",
      alt: "Parking Ticket Bot",
      width: 192,
      height: 144,
    },
    pricingType: CMSProductPricingTypeEnum.OPEN_SOURCE,
    liveLink: "",
    sourceLink: "",
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Inventory Management System",
    description: "A comprehensive inventory management solution featuring real-time stock tracking, streamlined operations, and an intuitive user interface.",
    logo: {
      url: "/images/Inventory Management.png",
      alt: "Inventory Management System",
      width: 64,
      height: 64,
    },
    pricingType: CMSProductPricingTypeEnum.FREEMIUM,
    liveLink: "https://inventory-management-lmvi-git-main-sufyaan-mohammeds-projects.vercel.app?_vercel_share=gbgvj8N6sg63T9sUGEyoPYPcVOtwFqE0",
    sourceLink: "https://github.com/Sufyaan2655/Inventory-Management",
    createdAt: new Date().toISOString(),
  },
];

// Mock Stacks Data
export const mockStacks: TCMSStack[] = [
  {
    id: "1",
    title: "Frontend",
    items: [
      {
        id: "1",
        title: "React",
        description: "A JavaScript library for building user interfaces",
        logo: {
          url: "https://api.iconify.design/simple-icons:react.svg?color=%2361DAFB",
          alt: "React",
          width: 64,
          height: 64,
        },
        level: null,
      },
      {
        id: "2",
        title: "Next.js",
        description: "The React Framework for Production",
        logo: {
          url: "https://api.iconify.design/logos:nextjs-icon.svg",
          alt: "Next.js",
          width: 64,
          height: 64,
        },
        level: null,
      },
      {
        id: "3",
        title: "TypeScript",
        description: "Typed JavaScript at any scale",
        logo: {
          url: "https://api.iconify.design/simple-icons:typescript.svg?color=%233178C6",
          alt: "TypeScript",
          width: 64,
          height: 64,
        },
        level: null,
      },
      {
        id: "4",
        title: "Tailwind CSS",
        description: "A utility-first CSS framework",
        logo: {
          url: "https://api.iconify.design/simple-icons:tailwindcss.svg?color=%2306B6D4",
          alt: "Tailwind CSS",
          width: 64,
          height: 64,
        },
        level: null,
      },
      {
        id: "5",
        title: "JavaScript",
        description: "High-level programming language",
        logo: {
          url: "https://api.iconify.design/simple-icons:javascript.svg?color=%23F7DF1E",
          alt: "JavaScript",
          width: 64,
          height: 64,
        },
        level: null,
      },
      {
        id: "6",
        title: "HTML5",
        description: "Markup language for web pages",
        logo: {
          url: "https://api.iconify.design/simple-icons:html5.svg?color=%23E34F26",
          alt: "HTML5",
          width: 64,
          height: 64,
        },
        level: null,
      },
    ],
  },
  {
    id: "2",
    title: "Backend",
    items: [
      {
        id: "7",
        title: "Node.js",
        description: "JavaScript runtime built on Chrome's V8",
        logo: {
          url: "https://api.iconify.design/simple-icons:nodedotjs.svg?color=%23339933",
          alt: "Node.js",
          width: 64,
          height: 64,
        },
        level: null,
      },
      {
        id: "8",
        title: "Python",
        description: "A high-level programming language",
        logo: {
          url: "https://api.iconify.design/simple-icons:python.svg?color=%233776AB",
          alt: "Python",
          width: 64,
          height: 64,
        },
        level: null,
      },
    ],
  },
  {
    id: "3",
    title: "Database",
    items: [
      {
        id: "9",
        title: "MySQL",
        description: "Open-source relational database management system",
        logo: {
          url: "https://api.iconify.design/simple-icons:mysql.svg?color=%234479A1",
          alt: "MySQL",
          width: 64,
          height: 64,
        },
        level: null,
      },
      {
        id: "10",
        title: "PostgreSQL",
        description: "Advanced open source relational database",
        logo: {
          url: "https://api.iconify.design/simple-icons:postgresql.svg?color=%234169E1",
          alt: "PostgreSQL",
          width: 64,
          height: 64,
        },
        level: null,
      },
      {
        id: "11",
        title: "MongoDB",
        description: "NoSQL database program",
        logo: {
          url: "https://api.iconify.design/simple-icons:mongodb.svg?color=%2347A248",
          alt: "MongoDB",
          width: 64,
          height: 64,
        },
        level: null,
      },
      {
        id: "12",
        title: "Prisma",
        description: "Next-generation ORM for Node.js and TypeScript",
        logo: {
          url: "https://api.iconify.design/simple-icons:prisma.svg?color=%232D3748",
          alt: "Prisma",
          width: 64,
          height: 64,
        },
        level: null,
      },
    ],
  },
  {
    id: "4",
    title: "Tools & Services",
    items: [
      {
        id: "13",
        title: "Firebase",
        description: "Google's mobile and web application development platform",
        logo: {
          url: "https://api.iconify.design/simple-icons:firebase.svg?color=%23FFCA28",
          alt: "Firebase",
          width: 64,
          height: 64,
        },
        level: null,
      },
      {
        id: "14",
        title: "Vercel",
        description: "Cloud platform for frontend developers",
        logo: {
          url: "https://api.iconify.design/simple-icons:vercel.svg?color=%23000000",
          alt: "Vercel",
          width: 64,
          height: 64,
        },
        level: null,
      },
      {
        id: "15",
        title: "OpenAI API",
        description: "OpenAI's API for AI and machine learning services",
        logo: {
          url: "https://api.iconify.design/simple-icons:openai.svg?color=%23412199",
          alt: "OpenAI API",
          width: 64,
          height: 64,
        },
        level: null,
      },
      {
        id: "16",
        title: "Twilio",
        description: "Cloud communications platform for SMS, voice, and messaging",
        logo: {
          url: "https://api.iconify.design/simple-icons:twilio.svg?color=%23F22F46",
          alt: "Twilio",
          width: 64,
          height: 64,
        },
        level: null,
      },
      {
        id: "17",
        title: "Pillow",
        description: "Python Imaging Library for image processing and manipulation",
        logo: {
          url: "https://api.iconify.design/simple-icons:python.svg?color=%233776AB",
          alt: "Pillow",
          width: 64,
          height: 64,
        },
        level: null,
      },
      {
        id: "18",
        title: "pandas",
        description: "Data analysis and manipulation library for Python",
        logo: {
          url: "https://api.iconify.design/simple-icons:pandas.svg?color=%23150458",
          alt: "pandas",
          width: 64,
          height: 64,
        },
        level: null,
      },
      {
        id: "19",
        title: "Git",
        description: "Distributed version control system",
        logo: {
          url: "https://api.iconify.design/simple-icons:git.svg?color=%23F05032",
          alt: "Git",
          width: 64,
          height: 64,
        },
        level: null,
      },
      {
        id: "20",
        title: "Docker",
        description: "Containerization platform",
        logo: {
          url: "https://api.iconify.design/simple-icons:docker.svg?color=%232496ED",
          alt: "Docker",
          width: 64,
          height: 64,
        },
        level: null,
      },
    ],
  },
];

// Tech stack mapping from projects (should match ProductCard component)
export const projectTechStacks: Record<string, string[]> = {
  "1": ["Next.js", "React.js", "TypeScript", "Node.js"], // Smart Transit System
  "2": ["React.js", "Next.js", "Firebase", "MySQL", "Prisma", "Node.js"], // Blogify
  "3": ["React.js", "Next.js", "Firebase", "Node.js", "Vercel"], // Inventory Management System
  "4": ["Python", "OpenAI API", "Twilio", "MySQL"], // Parking Ticket Bot
};

// Tech stack metadata mapping
const techStackMetadata: Record<string, { description: string; iconUrl: string; level: CMSStackSkillLevelEnum }> = {
  "React.js": {
    description: "A JavaScript library for building user interfaces",
    iconUrl: "https://api.iconify.design/simple-icons:react.svg?color=%2361DAFB",
    level: CMSStackSkillLevelEnum.ADVANCED,
  },
  "React": {
    description: "A JavaScript library for building user interfaces",
    iconUrl: "https://api.iconify.design/simple-icons:react.svg?color=%2361DAFB",
    level: CMSStackSkillLevelEnum.ADVANCED,
  },
  "Next.js": {
    description: "The React Framework for Production",
    iconUrl: "https://api.iconify.design/logos:nextjs-icon.svg",
    level: CMSStackSkillLevelEnum.ADVANCED,
  },
  "TypeScript": {
    description: "Typed JavaScript at any scale",
    iconUrl: "https://api.iconify.design/simple-icons:typescript.svg?color=%233178C6",
    level: CMSStackSkillLevelEnum.ADVANCED,
  },
  "Node.js": {
    description: "JavaScript runtime built on Chrome's V8",
    iconUrl: "https://api.iconify.design/simple-icons:nodedotjs.svg?color=%23339933",
    level: CMSStackSkillLevelEnum.ADVANCED,
  },
  "Firebase": {
    description: "Google's mobile and web application development platform",
    iconUrl: "https://api.iconify.design/simple-icons:firebase.svg?color=%23FFCA28",
    level: CMSStackSkillLevelEnum.INTERMEDIATE,
  },
  "MySQL": {
    description: "Open-source relational database management system",
    iconUrl: "https://api.iconify.design/simple-icons:mysql.svg?color=%234479A1",
    level: CMSStackSkillLevelEnum.INTERMEDIATE,
  },
  "Prisma": {
    description: "Next-generation ORM for Node.js and TypeScript",
    iconUrl: "https://api.iconify.design/simple-icons:prisma.svg?color=%232D3748",
    level: CMSStackSkillLevelEnum.INTERMEDIATE,
  },
  "Vue.js": {
    description: "The Progressive JavaScript Framework",
    iconUrl: "https://api.iconify.design/simple-icons:vuedotjs.svg?color=%234FC08D",
    level: CMSStackSkillLevelEnum.INTERMEDIATE,
  },
  "Python": {
    description: "A high-level programming language",
    iconUrl: "https://api.iconify.design/simple-icons:python.svg?color=%233776AB",
    level: CMSStackSkillLevelEnum.INTERMEDIATE,
  },
  "PostgreSQL": {
    description: "Advanced open source relational database",
    iconUrl: "https://api.iconify.design/simple-icons:postgresql.svg?color=%234169E1",
    level: CMSStackSkillLevelEnum.INTERMEDIATE,
  },
  "Vercel": {
    description: "Cloud platform for frontend developers",
    iconUrl: "https://api.iconify.design/simple-icons:vercel.svg?color=%23000000",
    level: CMSStackSkillLevelEnum.INTERMEDIATE,
  },
  "OpenAI API": {
    description: "OpenAI's API for AI and machine learning services",
    iconUrl: "https://api.iconify.design/simple-icons:openai.svg?color=%23412199",
    level: CMSStackSkillLevelEnum.INTERMEDIATE,
  },
  "Twilio": {
    description: "Cloud communications platform for SMS, voice, and messaging",
    iconUrl: "https://api.iconify.design/simple-icons:twilio.svg?color=%23F22F46",
    level: CMSStackSkillLevelEnum.INTERMEDIATE,
  },
};

// Function to get all unique tech stacks from projects
function getAllProjectTechStacks(): string[] {
  const allTechStacks = new Set<string>();
  Object.values(projectTechStacks).forEach((techs) => {
    techs.forEach((tech) => allTechStacks.add(tech));
  });
  return Array.from(allTechStacks);
}

// Function to create stack item from tech name
function createStackItemFromTech(techName: string, id: string): TCMSStackItem | null {
  const metadata = techStackMetadata[techName];
  if (!metadata) {
    // If no metadata found, create a basic entry
    return {
      id,
      title: techName,
      description: `${techName} technology`,
      logo: {
        url: `https://api.iconify.design/simple-icons:${techName.toLowerCase().replace(/\./g, "").replace(/\s+/g, "")}.svg`,
        alt: techName,
        width: 64,
        height: 64,
      },
      level: CMSStackSkillLevelEnum.INTERMEDIATE,
    };
  }

  return {
    id,
    title: techName,
    description: metadata.description,
    logo: {
      url: metadata.iconUrl,
      alt: techName,
      width: 64,
      height: 64,
    },
    level: metadata.level,
  };
}

// Function to merge project tech stacks into profile stackItems
function mergeProjectTechStacksIntoProfile(existingStackItems: TCMSStackItem[]): TCMSStackItem[] {
  const projectTechs = getAllProjectTechStacks();
  const existingTitles = new Set(existingStackItems.map((item) => item.title));
  const newStackItems: TCMSStackItem[] = [];
  let nextId = existingStackItems.length + 1;

  projectTechs.forEach((tech) => {
    // Normalize tech name for comparison
    const normalizedTech = tech.replace(/\.js$/, "").replace(/\./g, "");
    const exists = Array.from(existingTitles).some(
      (title) => title.toLowerCase().replace(/\.js$/, "").replace(/\./g, "") === normalizedTech.toLowerCase()
    );

    if (!exists) {
      const stackItem = createStackItemFromTech(tech, String(nextId++));
      if (stackItem) {
        newStackItems.push(stackItem);
      }
    }
  });

  return [...existingStackItems, ...newStackItems];
}

// Update mockProfile to include tech stacks from projects
mockProfile.stackItems = mergeProjectTechStacksIntoProfile(mockProfile.stackItems);

