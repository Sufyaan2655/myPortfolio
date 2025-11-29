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
    title: "Works",
    description: "My professional work experience",
    slug: "works",
    content: {
      html: "<p>Here are some of the companies I've worked with and the roles I've held.</p>",
    },
    metaSeo: {
      title: "Works - Portfolio",
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
  {
    title: "Stacks",
    description: "Technologies and skills I work with",
    slug: "stacks",
    content: {
      html: "<p>Here are the technologies and tools I'm proficient with.</p>",
    },
    metaSeo: {
      title: "Stacks - Portfolio",
      description: "Technologies and skills I work with",
      index: true,
      follow: true,
    },
    isCustomPage: false,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    title: "Contact",
    description: "Get in touch with me",
    slug: "contact",
    content: {
      html: "<p>Feel free to reach out if you'd like to collaborate or have any questions.</p>",
    },
    metaSeo: {
      title: "Contact - Portfolio",
      description: "Get in touch with me",
      index: true,
      follow: true,
    },
    isCustomPage: false,
    updatedAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
  {
    title: "Blog",
    description: "My blog posts and articles",
    slug: "blog",
    content: {
      html: "<p>Read my latest blog posts and articles.</p>",
    },
    metaSeo: {
      title: "Blog - Portfolio",
      description: "My blog posts and articles",
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
  name: "Your Name",
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
    id: "1",
    title: "My Current Project",
    description: "An amazing project I'm currently working on",
    logo: {
      url: "https://via.placeholder.com/64",
      alt: "Current Project",
      width: 64,
      height: 64,
    },
    pricingType: CMSProductPricingTypeEnum.OPEN_SOURCE,
    liveLink: "https://example.com",
    sourceLink: "https://github.com/yourusername/project",
    createdAt: new Date().toISOString(),
  },
  callToActions: [
    {
      title: "View Resume",
      href: "/resume",
      newTab: false,
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
    position: "Senior Developer",
    company: "Tech Company Inc.",
    startYear: "2020",
    endYear: "2023",
    companyUrl: "https://example.com",
  },
  {
    id: "2",
    position: "Full Stack Developer",
    company: "Startup Co.",
    startYear: "2018",
    endYear: "2020",
    companyUrl: "https://example.com",
  },
  {
    id: "3",
    position: "Junior Developer",
    company: "Agency Ltd.",
    startYear: "2016",
    endYear: "2018",
    companyUrl: "https://example.com",
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
  {
    id: "4",
    title: "anpyher one",
    description: "Another great product I've built",
    logo: {
      url: "https://via.placeholder.com/64",
      alt: "Another Product",
      width: 64,
      height: 64,
    },
    pricingType: CMSProductPricingTypeEnum.FREEMIUM,
    liveLink: "https://example.com/another",
    sourceLink: "https://github.com/yourusername/another",
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
          url: "https://cdn.simpleicons.org/react/61DAFB",
          alt: "React",
          width: 64,
          height: 64,
        },
        level: CMSStackSkillLevelEnum.ADVANCED,
      },
      {
        id: "2",
        title: "Vue.js",
        description: "The Progressive JavaScript Framework",
        logo: {
          url: "https://api.iconify.design/simple-icons:vuedotjs.svg?color=%234FC08D",
          alt: "Vue.js",
          width: 64,
          height: 64,
        },
        level: CMSStackSkillLevelEnum.INTERMEDIATE,
      },
      {
        id: "5",
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
        id: "6",
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
    ],
  },
  {
    id: "2",
    title: "Backend",
    items: [
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
    ],
  },
];

// Tech stack mapping from projects (should match ProductCard component)
export const projectTechStacks: Record<string, string[]> = {
  "1": ["Next.js", "React.js", "TypeScript", "Node.js"], // Smart Transit System
  "2": ["React.js", "Next.js", "Firebase", "MySQL", "Prisma", "Node.js"], // Blogify
  "3": ["React.js", "Next.js", "Firebase", "Node.js", "Vercel"], // Inventory Management System
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

