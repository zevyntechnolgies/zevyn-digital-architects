const createAvatar = (name: string, background: string) => {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${background}" />
          <stop offset="100%" stop-color="#111827" />
        </linearGradient>
      </defs>

      <rect width="400" height="400" rx="40" fill="url(#bg)" />

      <text
        x="200"
        y="220"
        text-anchor="middle"
        dominant-baseline="middle"
        font-family="Inter, Arial, sans-serif"
        font-size="120"
        font-weight="700"
        fill="#ffffff">
        ${initials}
      </text>
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

export const team = [
  {
    id: "Nagaraj-M",
    name: "Nagaraj M",
    role: "Founder & CEO",
    department: "Product",
    employeeId: "ZY001",
    email: "manivasgam15@gmail.com",
    image: "/Nagaraj.jpeg",
    about:
      "Nagaraj turns customer insight into elegant digital products that balance growth, usability, and performance.",
    skills: ["Product Strategy", "UX", "Roadmapping", "Growth"],
    linkedin: "",
    github: "",
    website: "",
  },
  {
    id: "Gobi-s",
    name: "Gobi S",
    role: "Founder & CTO",
    department: "Engineering",
    employeeId: "ZY003",
    email: "gobidreamer@gmail.com",
    image: "/Gobi.jpeg",
    about:
      "Gobi builds fast, polished web experiences with a strong eye for interaction detail and accessibility.",
    skills: ["React", "TypeScript", "Accessibility", "Performance"],
    linkedin: "",
    github: "",
    website: "",
  },
  {
    id: "shyam-i",
    name: "Shyam I",
    role: "Founder & CCO",
    department: "Leadership",
    employeeId: "ZY002",
    email: "shyamhari2204@gmail.com",
    image: "/shyam I.jpeg",
    about:
      "Founder of Zevyn Technologies with a strong focus on AI, product strategy, and secure digital transformation.",
    skills: ["AI Strategy", "Full Stack", "Cyber Security", "Leadership"],
    linkedin: "",
    github: "",
    website: "https://zevyn.tech",//
  },



  {
    id: "Jayasurya-s",
    name: "Jaya Surya S",
    role: "Founder & CPO",
    department: "Engineering",
    employeeId: "ZY005",
    email: "jayasuryasofficail@gmail.com",
    image: "/jaya suriya.jpeg",
    about:
      "Jayasuriya focuses on resilient backend systems, APIs, and cloud architecture that keep products reliable at scale.",
    skills: ["Node.js", "APIs", "Cloud", "Databases"],
    linkedin: "",
    github: "",
    website: "",
  },
  {
    id: "Arun-c",
    name: "Arun C",
    role: "Founder & CMO",
    department: "Design",
    employeeId: "ZY004",
    email: "arunc11122005@gmail.com",
    image: "/Arun .jpeg",
    about:
      "Arun crafts thoughtful, scalable design systems that make complex products feel effortless and intuitive.",
    skills: ["UI/UX", "Design Systems", "Branding", "Motion"],
    linkedin: "",
    github: "",
    website: "",
  },
];
