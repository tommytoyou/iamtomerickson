export const personalInfo = {
  name: "Tom Erickson",
  credentials: "CAPM",
  headline: "Founder & CEO (former) building autonomous deep-space infrastructure | AI-driven space weather intelligence & Lagrange-point PNT/comms networks | Project Management & GenAI Consultant",
  tagline: "I help organizations plan, execute, and deliver high-impact projects at the intersection of technology, aerospace, and AI.",
  location: "Phnom Penh, Cambodia",
  locationNote: "Remote/Global",
  email: "tom@iamtomerickson.com",
  website: "https://iamtomerickson.com",
  companyWebsite: "https://deepspacedynamics.us",
  bio: {
    short: "Recent KU B.Sc. Project Management graduate (Dec 2025, Summa Cum Laude). Former Founder of Deep Space Dynamics (2024-2025). 15+ years scaling initiatives across aerospace, AI, government, and international markets.",
    extended: [
      "Founder, project leader, and strategist with 15+ years scaling technology-driven initiatives across aerospace, AI, government programs, and international markets.",
      "Proven ability to lead distributed organizations and translate frontier technologies into viable platforms.",
      "B.Sc. Project Management from University of Kansas (Summa Cum Laude, Dec 2025). CAPM certified (PMI, 2024)."
    ]
  },
  openTo: [
    "Project Management & Systems Integration",
    "GenAI Adoption & Process Automation",
    "Corporate Training & Leadership Development"
  ],
  stats: [
    { value: "29+", label: "Consulting Projects" },
    { value: "15+", label: "Years Experience" },
    { value: "20+", label: "Countries" },
    { value: "2,000+", label: "Team Members Led" }
  ],
  closingStatement: "Let's build something that matters."
};

export const socialLinks = [
  {
    name: "LinkedIn",
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/iamtomerickson/",
    icon: "Linkedin"
  },
  {
    name: "X/Twitter",
    platform: "X",
    url: "https://x.com/IamTomErickson",
    icon: "Twitter"
  },
  {
    name: "GitHub",
    platform: "GitHub",
    url: "https://github.com/tommytoyou",
    icon: "Github"
  },
  {
    name: "Credly",
    platform: "Credly",
    url: "https://www.credly.com/users/iamtomerickson/",
    icon: "Award"
  }
];

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" }
];

export const experience = [
  {
    id: "parker-dewey",
    title: "Independent Consultant",
    company: "Parker Dewey",
    location: "United States (Remote)",
    dateRange: "May 2024 – Present",
    isCurrent: true,
    description: "Delivered 29+ high-impact consulting projects with 7 repeat engagements across web development, marketing strategy, business operations, and data analytics.",
    categories: {
      webDev: [
        { name: "Wild Roots Garden & Gifts", details: "Full-stack e-commerce (React, Node.js, MongoDB)" },
        { name: "Defiant Meals", details: "Restaurant management platform, 5 consecutive projects" },
        { name: "Easdon Technology Solutions", details: "Order management system" }
      ],
      marketing: [
        { name: "MyLoop", details: "Mobile app GTM strategy, client said 'executing like an industry veteran'" },
        { name: "Ninnescah LLC", details: "Market analysis" },
        { name: "Prairie Computer Services", details: "Digital marketing strategy" }
      ],
      operations: [
        { name: "Healthcare Coalition Partners", details: "3-part consulting engagement, KPI frameworks" },
        { name: "SE Kansas Regional Planning Commission", details: "$2.5M BUILD grant benefit-cost analysis" }
      ]
    }
  },
  {
    id: "deep-space-dynamics",
    title: "Founder & CEO",
    company: "Deep Space Dynamics",
    location: "Sheridan, Wyoming",
    dateRange: "June 2024 – December 2025",
    isCurrent: false,
    description: "Led end-to-end development of the Neuman-class 6U SpaceDrone platform for PNT, Tactical Space Weather Intelligence (TSWI), and deep space communications at Lagrange points.",
    highlights: [
      "TSWI-AI MVP dashboard: 25% faster simulations, AI-driven analytics for autonomous mission planning",
      "Grantentic GenAI app: automated SBIR Phase 1 grant workflows from ideation to submission",
      "Secured partnerships: CYber Intel Solutions (post-quantum encryption), SEQRE (secure comms), The Rad Team (radiation resilience)",
      "SBIR/NSF pitch development for Venus, Earth, Luna, Mars Lagrange points (L4/L5)",
      "Regulatory preparation: ITAR compliance, FCC licensing"
    ]
  },
  {
    id: "shiftsmart",
    title: "Remote Operations Project Manager",
    company: "Shiftsmart",
    location: "Dallas, Texas",
    dateRange: "September 2020 – December 2022",
    isCurrent: false,
    description: "Managed operations for 2,000+ remote polling agents during U.S. federal election cycles.",
    highlights: [
      "Cut onboarding time by 40% through structured training and automated feedback loops",
      "Built stakeholder reporting dashboards in Google Sheets and Airtable"
    ]
  },
  {
    id: "sba",
    title: "CARES Act Agent",
    company: "U.S. Small Business Administration",
    location: "United States",
    dateRange: "March 2020 – September 2020",
    isCurrent: false,
    description: "Processed PPP and EIDL loan applications during COVID-19 pandemic, handling millions in relief funding for small businesses."
  },
  {
    id: "evolution-worldwide",
    title: "Project Manager, Sales & Marketing",
    company: "Evolution Worldwide",
    location: "Hong Kong",
    dateRange: "February 2012 – April 2015",
    isCurrent: false,
    isOlder: true,
    description: "Client liaison for logo design, web development, and product sales. Contributed to $20M+ sales growth. Coordinated cross-functional teams across time zones."
  },
  {
    id: "tom-erickson-consulting",
    title: "Founder & Principal Consultant",
    company: "Tom Erickson Consulting",
    location: "APAC",
    dateRange: "January 2008 – February 2020",
    isCurrent: false,
    isOlder: true,
    description: "International consulting, corporate training, and event management across 20+ countries.",
    highlights: [
      "Trained 120+ judges at Royal Thai Ministry of Justice",
      "Executive development programs for Benchmark Inc. and Genus plc",
      "Mini LLM seminars with Imperial University of Kyushu and Chicago-Kent School of Law"
    ]
  }
];

export const projects = [
  {
    id: "neuman-spacedrone",
    title: "Neuman-class SpaceDrone",
    company: "Deep Space Dynamics",
    category: "Space Tech",
    description: "6U CubeSat platform designed for PNT, space weather intelligence, and deep space communications at Venus, Earth, Luna, and Mars Lagrange points (L4/L5).",
    tags: ["CubeSat", "PNT", "Deep Space", "Aerospace"]
  },
  {
    id: "tswi-dashboard",
    title: "TSWI-AI Dashboard",
    company: "Deep Space Dynamics",
    category: "AI/Space",
    description: "Real-time Tactical Space Weather Intelligence platform with AI-driven analytics, 25% faster simulations, and autonomous mission planning capabilities.",
    tags: ["AI", "Dashboard", "Space Weather", "Real-time"]
  },
  {
    id: "grantentic",
    title: "Grantentic GenAI",
    company: "Deep Space Dynamics",
    category: "GenAI/SaaS",
    description: "AI-powered application automating SBIR Phase 1 grant workflows from ideation to submission.",
    tags: ["GenAI", "SaaS", "Grant Writing", "Automation"]
  },
  {
    id: "wild-roots",
    title: "Wild Roots E-commerce",
    company: "Parker Dewey",
    category: "Web Dev",
    description: "Full-stack e-commerce application with React frontend, Node.js backend, MongoDB database, secure authentication, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "E-commerce"]
  },
  {
    id: "defiant-meals",
    title: "Defiant Meals Platform",
    company: "Parker Dewey",
    category: "Web Dev",
    description: "Restaurant management and ordering system. Delivered across 5 consecutive projects with repeat client.",
    tags: ["Full-Stack", "Restaurant Tech", "Repeat Client"]
  },
  {
    id: "myloop-gtm",
    title: "MyLoop GTM Strategy",
    company: "Parker Dewey",
    category: "Marketing",
    description: "Mobile app launch strategy including market research, user personas, and cross-channel campaigns. Client feedback: 'executing like an industry veteran.'",
    tags: ["GTM", "Mobile App", "Marketing Strategy"]
  },
  {
    id: "build-grant",
    title: "BUILD Grant Analysis",
    company: "Parker Dewey",
    category: "Consulting",
    description: "$2.5M grant application support with comprehensive benefit-cost analysis for Southeast Kansas Regional Planning Commission.",
    tags: ["Grant Analysis", "Government", "Economic Development"]
  }
];

export const skills = {
  categories: [
    { name: "Market Analysis", icon: "chart" },
    { name: "Competitive Intelligence", icon: "search" },
    { name: "Program Development", icon: "layers" },
    { name: "Full-Stack Development", icon: "code", details: "React, Node.js, MongoDB, JavaScript" },
    { name: "Quantitative Analysis", icon: "calculator", details: "Power BI, Python, Stata" },
    { name: "Methodologies", icon: "clipboard", details: "Agile, Scrum, EVM, Waterfall" },
    { name: "GenAI", icon: "sparkles", details: "Prompt Engineering, CPMAI, Data Landscape" }
  ],
  technical: ["Python", "JavaScript", "React", "Node.js", "MongoDB", "Express", "Power BI", "Stata", "SQL", "Git/GitHub"],
  tools: ["Jira", "ClickUp", "Asana", "MS Project", "Google Sheets", "Airtable"],
  soft: ["Public Speaking", "Executive Presentation", "Corporate Training", "Cross-Cultural Communication"]
};

export const certifications = [
  { name: "CAPM", fullName: "Certified Associate in Project Management", issuer: "PMI", year: "2024" },
  { name: "PMI GenAI", fullName: "Prompt Engineering for Project Managers", issuer: "PMI", year: "2025" },
  { name: "CPMAI", fullName: "Cognitive Project Management in AI", issuer: "PMI", year: "2024" },
  { name: "Data Landscape", fullName: "Data Landscape of GenAI for PMs", issuer: "PMI", year: "2024" },
  { name: "Space Mission", fullName: "Process and Lifetime of a Space Mission", issuer: "Certificate", year: "2024" },
  { name: "Memory Trainer", fullName: "Certified Memory Trainer", issuer: "Certificate", year: "" },
  { name: "Toastmasters ACS", fullName: "Advanced Communicator Silver", issuer: "Toastmasters International", year: "" }
];

export const education = [
  { degree: "B.Sc.", field: "Project Management", school: "University of Kansas", year: "Dec 2025", honors: "Summa Cum Laude" },
  { degree: "A.S.", field: "Business", school: "Lee College", year: "May 2022", honors: "Cum Laude" },
  { degree: "Certificate", field: "Software Engineering", school: "General Assembly", year: "Apr 2021", honors: null }
];

export const affiliations = ["DARPA Connect", "PMI", "Toastmasters International (leadership roles)", "Registered Lobbyist (2025)"];

export const languages = [
  { name: "English", level: "Native" },
  { name: "French", level: "Elementary" },
  { name: "Thai", level: "Elementary" },
  { name: "Spanish", level: "Elementary" }
];

export default {
  personalInfo,
  socialLinks,
  navigation,
  experience,
  projects,
  skills,
  certifications,
  education,
  affiliations,
  languages
};
