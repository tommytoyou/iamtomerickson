export const personalInfo = {
  name: "Tom Erickson",
  credentials: "CAPM",
  headline: "Certified Project Manager & International Communications Consultant",
  tagline:
    "Delivering strategic project management, team development, and cross-cultural solutions from Kampot, Cambodia.",
  location: "Kampot, Cambodia",
  locationNote: "Remote",
  email: "tom.erickson@ku.edu",
  website: "https://iamtomerickson.com",
  bio: {
    short:
      "Recent B.Sc. Project Management graduate from University of Kansas (summa cum laude, 3.91 GPA, December 2025). CAPM certified with PMI Generative AI credentials. Over 15 years experience.",
    extended: [
      "With over 15 years of international experience spanning 20+ countries, I bring a unique perspective to project management and organizational development. My career has taken me from training 120+ judges in Thailand's judicial system to managing remote operations teams of 2,000+ agents across multiple time zones.",
      "Based in Kampot, Cambodia, I specialize in bridging cultural gaps and implementing efficient systems that drive measurable results. My approach combines traditional project management methodologies with cutting-edge AI tools to deliver innovative solutions for complex organizational challenges.",
    ],
  },
  openTo: [
    "Project Management & Systems Integration",
    "Generative AI Adoption & Process Automation",
    "Corporate Training & Leadership Development",
  ],
  stats: [
    { value: "29+", label: "Consulting Projects" },
    { value: "15+", label: "Years Experience" },
    { value: "20+", label: "Countries" },
    { value: "2,000+", label: "Team Members Led" },
  ],
};

export const socialLinks = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/iamtomerickson",
    username: "iamtomerickson",
    icon: "Linkedin",
  },
  {
    platform: "X",
    url: "https://x.com/IamTomErickson",
    username: "@IamTomErickson",
    icon: "Twitter",
  },
  {
    platform: "GitHub",
    url: "https://github.com/tommytoyou",
    username: "tommytoyou",
    icon: "Github",
  },
  {
    platform: "Credly",
    url: "https://credly.com/users/iamtomerickson",
    username: "iamtomerickson",
    icon: "Award",
  },
];

export const experience = [
  {
    id: 1,
    company: "Parker Dewey",
    role: "Project Manager",
    location: "Remote",
    startDate: "May 2024",
    endDate: "Present",
    isCurrent: true,
    description:
      "Managing micro-internship projects connecting companies with college students for short-term professional assignments.",
    highlights: [
      "Completed 29+ consulting projects across diverse industries",
      "Achieved 7 repeat client engagements through consistent delivery excellence",
      "Specialized in market research, data analysis, and process optimization projects",
      "Maintained 100% on-time delivery rate across all assignments",
    ],
    technologies: ["Jira", "Asana", "Google Workspace", "Power BI", "Airtable"],
  },
  {
    id: 2,
    company: "Deep Space Dynamics",
    role: "Founder & CEO",
    location: "Kampot, Cambodia",
    startDate: "June 2024",
    endDate: "December 2025",
    isCurrent: false,
    description:
      "Founded technology startup focused on innovative solutions in space technology simulation and AI-powered applications.",
    highlights: [
      "Developed SpaceDrone simulation platform for aerospace education",
      "Created Grantentic GenAI application for automated grant writing assistance",
      "Led product development from concept to market-ready solutions",
      "Established partnerships with educational institutions",
    ],
    technologies: ["Python", "React", "Node.js", "OpenAI API", "MongoDB"],
  },
  {
    id: 3,
    company: "Shiftsmart",
    role: "Remote Operations Project Manager",
    location: "Remote",
    startDate: "September 2020",
    endDate: "December 2022",
    isCurrent: false,
    description:
      "Led large-scale remote workforce operations for gig economy platform connecting workers with flexible opportunities.",
    highlights: [
      "Managed distributed team of 2,000+ remote agents across multiple time zones",
      "Reduced onboarding time by 40% through process optimization initiatives",
      "Implemented quality assurance frameworks improving customer satisfaction scores",
      "Coordinated cross-functional teams during rapid scaling periods",
    ],
    technologies: ["Salesforce", "Slack", "Zendesk", "Google Sheets", "Tableau"],
  },
  {
    id: 4,
    company: "U.S. Small Business Administration",
    role: "CARES Act Agent",
    location: "Remote",
    startDate: "March 2020",
    endDate: "September 2020",
    isCurrent: false,
    description:
      "Supported small businesses during COVID-19 pandemic through federal relief programs.",
    highlights: [
      "Processed PPP (Paycheck Protection Program) applications for small businesses",
      "Administered EIDL (Economic Injury Disaster Loan) program support",
      "Provided guidance to business owners navigating federal relief options",
      "Maintained high accuracy standards in application processing",
    ],
    technologies: ["Federal Systems", "CRM", "Microsoft Office"],
  },
  {
    id: 5,
    company: "Tom Erickson Consulting",
    role: "Founder & Principal Consultant",
    location: "International",
    startDate: "January 2008",
    endDate: "February 2020",
    isCurrent: false,
    description:
      "Independent consulting practice specializing in executive training, organizational development, and cross-cultural communication.",
    highlights: [
      "Delivered consulting services across 20+ countries",
      "Trained 120+ judges in Thailand's judicial system on leadership and communication",
      "Developed executive training programs for multinational corporations",
      "Specialized in Asia-Pacific market entry and cross-cultural business strategies",
    ],
    clients: [
      "Thai Judicial System",
      "Multinational Corporations",
      "Government Agencies",
      "Educational Institutions",
    ],
    technologies: ["MS Project", "PowerPoint", "Training Platforms"],
  },
  {
    id: 6,
    company: "Evolution Worldwide",
    role: "Project Manager, Sales & Marketing",
    location: "Hong Kong",
    startDate: "February 2012",
    endDate: "April 2015",
    isCurrent: false,
    description:
      "Managed sales and marketing projects for international business development firm in Hong Kong.",
    highlights: [
      "Led cross-functional project teams for regional marketing campaigns",
      "Coordinated sales initiatives across Asia-Pacific markets",
      "Developed client relationship management strategies",
      "Managed project budgets and resource allocation",
    ],
    technologies: ["CRM Systems", "Marketing Automation", "MS Office"],
  },
  {
    id: 7,
    company: "ASEAN Affairs Media",
    role: "VP Marketing Projects",
    location: "Singapore",
    startDate: "March 2009",
    endDate: "February 2011",
    isCurrent: false,
    description:
      "Led marketing project initiatives for regional media organization covering ASEAN business and political affairs.",
    highlights: [
      "Managed regional event marketing and sponsorship projects",
      "Coordinated media partnerships across Southeast Asian markets",
      "Developed marketing strategies for B2B media products",
      "Led cross-border marketing campaigns",
    ],
    technologies: ["Event Management Systems", "CRM", "Adobe Creative Suite"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Parker Dewey Portfolio",
    category: "Project Management",
    description:
      "Collection of 29+ micro-internship consulting projects spanning market research, data analysis, competitive intelligence, and process optimization.",
    image: "/projects/parker-dewey.jpg",
    highlights: [
      "29+ completed projects",
      "7 repeat client engagements",
      "100% on-time delivery",
    ],
    technologies: ["Jira", "Power BI", "Google Workspace", "Airtable"],
    link: null,
    featured: true,
  },
  {
    id: 2,
    title: "Grantentic GenAI App",
    category: "Software Development",
    description:
      "AI-powered grant writing assistant that helps organizations streamline the grant application process using generative AI technology.",
    image: "/projects/grantentic.jpg",
    highlights: [
      "Generative AI integration",
      "Automated document generation",
      "User-friendly interface",
    ],
    technologies: ["Python", "React", "OpenAI API", "Node.js", "MongoDB"],
    link: null,
    featured: true,
  },
  {
    id: 3,
    title: "TSWI Dashboard",
    category: "Data Analytics",
    description:
      "Interactive business intelligence dashboard for tracking key performance indicators and operational metrics.",
    image: "/projects/tswi-dashboard.jpg",
    highlights: [
      "Real-time data visualization",
      "Custom KPI tracking",
      "Automated reporting",
    ],
    technologies: ["Power BI", "SQL", "Python", "Excel"],
    link: null,
    featured: true,
  },
  {
    id: 4,
    title: "Remote Operations at Scale",
    category: "Operations Management",
    description:
      "Comprehensive system for managing 2,000+ remote agents including onboarding, quality assurance, and performance tracking.",
    image: "/projects/remote-ops.jpg",
    highlights: [
      "2,000+ agents managed",
      "40% faster onboarding",
      "Improved QA scores",
    ],
    technologies: ["Salesforce", "Slack", "Zendesk", "Google Sheets"],
    link: null,
    featured: false,
  },
  {
    id: 5,
    title: "Executive Training Programs",
    category: "Training & Development",
    description:
      "Custom leadership and communication training programs delivered to executives and government officials across 20+ countries.",
    image: "/projects/executive-training.jpg",
    highlights: [
      "120+ judges trained",
      "20+ countries",
      "Custom curriculum development",
    ],
    technologies: ["LMS Platforms", "Video Production", "PowerPoint"],
    link: null,
    featured: false,
  },
  {
    id: 6,
    title: "ASEAN Regional Events",
    category: "Event Management",
    description:
      "Large-scale regional business events and conferences connecting leaders across Southeast Asian markets.",
    image: "/projects/asean-events.jpg",
    highlights: [
      "Multi-country coordination",
      "Sponsor management",
      "500+ attendees per event",
    ],
    technologies: ["Event Platforms", "CRM", "Marketing Automation"],
    link: null,
    featured: false,
  },
];

export const skills = {
  certifications: [
    {
      name: "CAPM",
      fullName: "Certified Associate in Project Management",
      issuer: "Project Management Institute (PMI)",
      credlyUrl: "https://credly.com/users/iamtomerickson",
    },
    {
      name: "PMI Generative AI",
      fullName: "PMI Generative AI Overview for Project Managers",
      issuer: "Project Management Institute (PMI)",
      credlyUrl: "https://credly.com/users/iamtomerickson",
    },
    {
      name: "Software Engineering",
      fullName: "Software Engineering Immersive Certificate",
      issuer: "General Assembly",
      credlyUrl: null,
    },
    {
      name: "CPMAI",
      fullName: "Certified Project Management AI",
      issuer: "CPMAI Organization",
      credlyUrl: "https://credly.com/users/iamtomerickson",
    },
  ],
  technical: [
    "Python",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Power BI",
    "Stata",
    "SQL",
    "Jira",
    "ClickUp",
    "Asana",
    "MS Project",
    "Google Sheets",
    "Airtable",
    "Git/GitHub",
  ],
  methodology: [
    "Agile/Scrum",
    "Waterfall",
    "Kanban",
    "Lean",
    "Risk Management",
    "Stakeholder Management",
    "Process Optimization",
    "Systems Integration",
  ],
  soft: [
    "Public Speaking",
    "Executive Presentation",
    "Corporate Training",
    "Leadership Development",
    "Cross-Cultural Communication",
    "Team Building",
    "Event Management",
    "Strategic Planning",
  ],
};

export const education = [
  {
    id: 1,
    institution: "University of Kansas",
    degree: "Bachelor of Science",
    field: "Project Management",
    location: "Lawrence, KS",
    graduationDate: "December 2025",
    honors: "Summa Cum Laude",
    gpa: "3.91",
    highlights: [
      "Summa Cum Laude honors",
      "Dean's List all semesters",
      "Project Management specialization",
    ],
  },
  {
    id: 2,
    institution: "Lee College",
    degree: "Associate of Science",
    field: "Business Administration",
    location: "Baytown, TX",
    graduationDate: "May 2022",
    honors: "Honors",
    gpa: null,
    highlights: ["Honors graduate", "Business foundation coursework"],
  },
  {
    id: 3,
    institution: "General Assembly",
    degree: "Certificate",
    field: "Software Engineering",
    location: "Remote",
    graduationDate: "April 2021",
    honors: null,
    gpa: null,
    highlights: [
      "Full-stack development",
      "JavaScript, React, Node.js",
      "MongoDB, Express",
    ],
  },
];

export const publications = {
  newsletter: {
    name: "Twenty Minutes with Tom Erickson",
    description:
      "Weekly insights on project management, AI adoption, and international business.",
    status: "Coming Soon",
    signupEnabled: true,
    signupUrl: null,
  },
  categories: {
    books: [],
    caseStudies: [],
    whitePapers: [],
  },
};

export const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const resumeLinks = {
  pdf: "/resume/tom-erickson-resume.pdf",
  docx: "/resume/tom-erickson-resume.docx",
  linkedin: "https://linkedin.com/in/iamtomerickson",
};

export default {
  personalInfo,
  socialLinks,
  experience,
  projects,
  skills,
  education,
  publications,
  navigation,
  resumeLinks,
};
