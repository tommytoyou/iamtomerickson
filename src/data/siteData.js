export const personalInfo = {
  name: "Tom Erickson",
  credentials: "CAPM",
  headline: "Agentic AI Developer and Technical PM | SBIR Automation · Space Weather Intelligence | DARPA Connect | Open to Gulf Contracts",
  tagline: "Building production AI systems and leading technical projects across aerospace, government programs, and international markets. Based in Siem Reap, Cambodia.",
  location: "Siem Reap, Cambodia",
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
    { value: "37+", label: "Upwork Engagements" },
    { value: "15+", label: "Years Experience" },
    { value: "15+", label: "Clients" },
    { value: "67%", label: "Repeat Rate" }
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
    id: "erickson-space-systems",
    title: "Founder & Agentic AI Developer",
    company: "Erickson Space Systems",
    location: "Remote / Siem Reap, Cambodia",
    dateRange: "2025 – Present",
    isCurrent: true,
    highlights: [
      "Built and launched TSWI (tswi.us) from scratch in under three months: a real-time space weather intelligence platform ingesting live NOAA and NASA data, running ML-based solar flare forecasts with two-hour prediction horizons, and rendering satellite positions on an interactive 3D CesiumJS globe. Now in private beta with defense and commercial space weather customers.",
      "Built and launched Grantentic (grantentic.us) in parallel: an AI-powered SBIR Phase I grant writing platform that compresses 16 to 24 hours of specialized grant work into 3 to 5 hours using a Claude API agentic generate, critique, and refine pipeline. Integrated Stripe payments, 7-point automated quality validation, and agency-specific compliance for NSF, DoD, and NASA.",
      "Designed and shipped both production applications solo without outside development help, covering full stack architecture, API integration, authentication, payments, and deployment."
    ]
  },
  {
    id: "parker-dewey",
    title: "Project Manager | Independent Consultant",
    company: "Parker Dewey",
    location: "Remote",
    dateRange: "May 2024 – Present",
    isCurrent: true,
    highlights: [
      "Completed 30+ consulting engagements across 15 companies with a 67% repeat client rate, operating in fixed-scope rapid-delivery models across web development, operations strategy, analytics, and go-to-market execution.",
      "Delivered full-stack web platforms for six repeat clients including Defiant Meals (6 projects), Wild Roots (4 projects), Elevate Heating and Cooling (2 projects), Agricultural Engineering Associates (2 projects), The Bourbon County Monitor (2 projects), and Southeast Kansas Regional Planning Commission (2 projects).",
      "Supported a $2.5M federal BUILD grant application through benefit-cost analysis and documentation, directly contributing to a regional infrastructure funding bid.",
      "Designed governance dashboards, KPI frameworks, and decision-support models used by executive stakeholders at nonprofits and healthcare coalitions across Kansas."
    ]
  },
  {
    id: "dpin-foundation",
    title: "Project Management Consultant",
    company: "DPIN Foundation",
    location: "Remote / Kampot, Cambodia",
    dateRange: "Aug 2025 – Dec 2025",
    isCurrent: false,
    highlights: [
      "Advanced organizational PM maturity from Level 2 to Level 3 across 7 regional hubs in Southeast Asia and the Middle East through OPM3 assessment and a custom Agile-blockchain hybrid methodology.",
      "Built a Combined Governance Dashboard with 32 KPIs aligned to PMI standards and ISO 9001, integrating financial planning, QA, risk management, and performance tracking into a single executive view.",
      "Delivered a 2026-2027 strategic innovation roadmap projecting 30:1 ROI through automation, targeting $100K+ annual cost savings and 30% reduction in manual effort."
    ]
  },
  {
    id: "deep-space-dynamics",
    title: "Founder & CEO",
    company: "Deep Space Dynamics",
    location: "Sheridan, Wyoming (Remote)",
    dateRange: "Jun 2024 – Dec 2025",
    isCurrent: false,
    highlights: [
      "Led end-to-end development of the Neuman-class 6U SpaceDrone, a scalable platform designed for PNT, tactical space weather intelligence, and deep-space communications across Venus, Earth, Luna, and Mars Lagrange points.",
      "Secured technical partnerships with firms specializing in post-quantum encryption, secure comms, radiation resilience, and AI-driven space autonomy.",
      "Reduced simulation timelines by 25% in Agile sprints through AI-driven analytics integration on the TSWI MVP dashboard built during this period."
    ]
  },
  {
    id: "shiftsmart",
    title: "Remote Operations Project Manager",
    company: "ShiftSmart",
    location: "Dallas, Texas (Remote)",
    dateRange: "Sep 2020 – Dec 2022",
    isCurrent: false,
    isOlder: true,
    highlights: [
      "Cut onboarding time for 2,000+ remote polling agents by 40% by redesigning structured training and implementing automated feedback loops during U.S. federal election cycles.",
      "Built stakeholder reporting dashboards in Google Sheets and Airtable that gave leadership real-time visibility into agent performance across multiple concurrent deployments."
    ]
  },
  {
    id: "sba",
    title: "CARES Act Agent",
    company: "U.S. Small Business Administration",
    location: "Remote",
    dateRange: "Mar 2020 – Sep 2020",
    isCurrent: false,
    isOlder: true,
    highlights: [
      "Processed high-volume PPP and EIDL applications during the COVID-19 national emergency, helping small businesses access critical federal relief funding under strict SBA compliance standards."
    ]
  },
  {
    id: "evolution-worldwide",
    title: "Sales & Marketing Project Manager",
    company: "Evolution Worldwide",
    location: "Hong Kong (Remote)",
    dateRange: "Feb 2012 – Apr 2015",
    isCurrent: false,
    isOlder: true,
    highlights: [
      "Drove $20M in sales over two years through Agile transformation of the sales pipeline and CRM systems, increasing wholesale transactions 37% from 2013 to 2014.",
      "Delivered BI dashboards enabling data-informed executive decision making across 3 APAC regions."
    ]
  },
  {
    id: "tom-erickson-consulting",
    title: "Founder & Principal Consultant",
    company: "Tom Erickson Consulting",
    location: "APAC",
    dateRange: "Jan 2008 – Feb 2020",
    isCurrent: false,
    isOlder: true,
    highlights: [
      "Trained 120+ judges at the Royal Thai Ministry of Justice in public speaking, business communication, and legal English, measurably improving courtroom communication standards.",
      "Designed and delivered year-long leadership development programs for mid-level and senior executives at Benchmark Inc. and Genus plc across 20+ countries.",
      "Facilitated international Mini-LLM seminars in partnership with Imperial University of Kyushu and Chicago-Kent School of Law, expanding legal education access across Southeast Asia."
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
    tags: ["CubeSat", "PNT", "Deep Space", "Aerospace"],
    image: "/images/projects/spacedrone.jpg"
  },
  {
    id: "tswi-dashboard",
    title: "TSWI-AI Dashboard",
    company: "Deep Space Dynamics",
    category: "AI/Space",
    description: "Real-time Tactical Space Weather Intelligence platform with AI-driven analytics, 25% faster simulations, and autonomous mission planning capabilities.",
    tags: ["AI", "Dashboard", "Space Weather", "Real-time"],
    url: "https://tswi.us",
    image: "/images/projects/tswi.jpg"
  },
  {
    id: "grantentic",
    title: "Grantentic GenAI",
    company: "Deep Space Dynamics",
    category: "GenAI/SaaS",
    description: "AI-powered application automating SBIR Phase 1 grant workflows from ideation to submission.",
    tags: ["GenAI", "SaaS", "Grant Writing", "Automation"],
    url: "https://www.grantentic.us/",
    image: "/images/projects/grantentic.jpg"
  },
  {
    id: "wild-roots",
    title: "Wild Roots E-commerce",
    company: "Parker Dewey",
    category: "Web Dev",
    description: "Full-stack e-commerce application with React frontend, Node.js backend, MongoDB database, secure authentication, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "E-commerce"],
    image: "/images/projects/wildroots.jpg"
  },
  {
    id: "defiant-meals",
    title: "Defiant Meals Platform",
    company: "Parker Dewey",
    category: "Web Dev",
    description: "Restaurant management and ordering system. Delivered across 5 consecutive projects with repeat client.",
    tags: ["Full-Stack", "Restaurant Tech", "Repeat Client"],
    image: "/images/projects/defiant-meals.jpg"
  },
  {
    id: "myloop-gtm",
    title: "MyLoop GTM Strategy",
    company: "Parker Dewey",
    category: "Marketing",
    description: "Mobile app launch strategy including market research, user personas, and cross-channel campaigns. Client feedback: 'executing like an industry veteran.'",
    tags: ["GTM", "Mobile App", "Marketing Strategy"],
    image: "/images/projects/myloop.jpg"
  },
  {
    id: "build-grant",
    title: "BUILD Grant Analysis",
    company: "Parker Dewey",
    category: "Consulting",
    description: "$2.5M grant application support with comprehensive benefit-cost analysis for Southeast Kansas Regional Planning Commission.",
    tags: ["Grant Analysis", "Government", "Economic Development"],
    image: "/images/projects/build-grant.jpg"
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
