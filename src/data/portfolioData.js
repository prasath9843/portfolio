export const personalData = {
  name: "PRASATH S",
  title: "Aspiring AI & ML Engineer | Data Analyst | AWS Basic Learner",
  locationBadge: "📍 Palani / Coimbatore, India • SKCT CSE (AI & ML)",
  location: "Palani / Coimbatore, Tamil Nadu, India",
  email: "prasathsubramani8098@mail.com",
  phone: "+91 8610842517",
  github: "https://github.com/prasath983",
  linkedin: "https://linkedin.com/in/prasath-subramani-257551314",
  leetcode: "https://leetcode.com/u/prasath_116",
  typingSubtitles: [
    "AI & Machine Learning Specialist",
    "Data Analyst & Insights Creator",
    "AWS Basic Learner",
    "IoT & Hardware Automation Developer"
  ],
  objective: "Passionate Computer Science (AI & ML) student specializing in Data Analytics, Python ML, and IoT Automation, while actively learning AWS Cloud Fundamentals (Basic Learner). Dedicated to transforming raw data into actionable insights and building smart automated solutions.",
  aboutBio: "I am a Computer Science Engineering student focused on Artificial Intelligence, Machine Learning, Data Analytics, IoT Hardware Systems, and foundational AWS Cloud concepts at Sri Krishna College of Technology (SKCT). My passion lies in finding hidden patterns in complex datasets, exploring AWS cloud basics, and bridging physical hardware sensors with data analytics pipelines.",
};

export const keyStats = [
  {
    id: "leetcode",
    value: "100+",
    label: "LeetCode Solved",
    sublabel: "Arrays, Strings, Search & Dynamic Logic",
    icon: "Code2",
    color: "from-amber-500 to-yellow-400"
  },
  {
    id: "srm-finalist",
    value: "National Finalist",
    label: "SRM Robotics Challenge",
    sublabel: "Smart Hygiene & Automation Hardware",
    icon: "Trophy",
    color: "from-emerald-400 to-teal-500"
  },
  {
    id: "aws-cloud",
    value: "AWS Learner",
    label: "EC2, S3 & IAM Basics",
    sublabel: "Cloud Fundamentals Learner",
    icon: "Cloud",
    color: "from-cyan-400 to-sky-500"
  },
  {
    id: "data-analytics",
    value: "Data Analytics",
    label: "Python, Pandas & SQL",
    sublabel: "EDA & Insightful Dashboards",
    icon: "BarChart3",
    color: "from-indigo-400 to-purple-500"
  }
];

export const coreValues = [
  {
    title: "Data-Driven Thinking",
    icon: "BarChart2",
    description: "Skilled in cleaning, modeling, and visualizing raw datasets using Python, Pandas, Seaborn, and SQL queries to unearth actionable metrics and key decision drivers.",
    color: "sky"
  },
  {
    title: "Cloud Learner Mindset",
    icon: "CloudRain",
    description: "Enthusiastic about exploring basic AWS cloud concepts (learning S3 storage buckets, EC2 virtual server basics, Lambda serverless concepts, and IAM security policies).",
    color: "amber"
  },
  {
    title: "Curious Explorer",
    icon: "Cpu",
    description: "Eager to bridge the gap between embedded IoT hardware sensors, database storage, and predictive AI analytics for end-to-end smart systems.",
    color: "emerald"
  },
  {
    title: "Team Collaborator",
    icon: "Users",
    description: "Proven track record in national hackathons and robotics team challenges, driving collaborative problem solving under time constraints.",
    color: "indigo"
  }
];

export const skillCategories = [
  {
    id: "data-ml",
    title: "Data Analytics & Machine Learning",
    icon: "Brain",
    accent: "sky",
    skills: [
      { name: "Python (Pandas, NumPy)", level: 90, tag: "Advanced" },
      { name: "MySQL / Query Optimization", level: 85, tag: "Proficient" },
      { name: "Exploratory Data Analysis (EDA)", level: 88, tag: "Advanced" },
      { name: "Data Cleaning & Preprocessing", level: 90, tag: "Advanced" },
      { name: "Matplotlib & Seaborn Visualization", level: 85, tag: "Proficient" },
      { name: "Predictive ML Fundamentals", level: 80, tag: "Intermediate" }
    ]
  },
  {
    id: "aws-devops",
    title: "AWS Cloud Fundamentals (Basic Learner)",
    icon: "Cloud",
    accent: "amber",
    skills: [
      { name: "AWS EC2 (Basic Server Hosting)", level: 65, tag: "Learner" },
      { name: "AWS S3 (Basic Cloud Storage)", level: 70, tag: "Basic" },
      { name: "AWS Lambda (Basic Serverless Concepts)", level: 60, tag: "Learner" },
      { name: "AWS IAM (Basic Roles & Policies)", level: 65, tag: "Basic" },
      { name: "AWS Cloud Basics & Fundamentals", level: 70, tag: "Learner" }
    ]
  },
  {
    id: "software-eng",
    title: "Programming & Software Engineering",
    icon: "Code",
    accent: "emerald",
    skills: [
      { name: "Python (Intermediate Core)", level: 88, tag: "Advanced" },
      { name: "Java (Core & OOP Concepts)", level: 75, tag: "Intermediate" },
      { name: "C++ (Data Structures & Logic)", level: 78, tag: "Intermediate" },
      { name: "HTML5 & CSS3 Layouts", level: 82, tag: "Proficient" },
      { name: "Git & GitHub Version Control", level: 88, tag: "Advanced" }
    ]
  },
  {
    id: "hardware-iot",
    title: "Hardware & IoT Devices",
    icon: "Radio",
    accent: "purple",
    skills: [
      { name: "ESP8266 Wi-Fi Microcontroller", level: 92, tag: "Advanced" },
      { name: "Gas & Environmental Sensors", level: 88, tag: "Proficient" },
      { name: "Ultrasonic Distance Sensors", level: 90, tag: "Advanced" },
      { name: "Temperature & Humidity Sensors", level: 85, tag: "Proficient" },
      { name: "4-Channel Relay Actuation", level: 88, tag: "Proficient" },
      { name: "C++ Embedded Hardware Logic", level: 82, tag: "Proficient" }
    ]
  }
];

export const projects = [
  {
    id: "smart-sanitization",
    title: "Smart Sanitization System using IoT",
    category: "IoT & Hardware",
    badge: "🏆 SRM National Robotics Challenge Finalist",
    badgeColor: "amber",
    description: "Built an automated health and hygiene system that detects human presence and poor ambient air quality, triggering real-time sanitization relay modules for public and workplace safety.",
    longDescription: "Engineered during the SRM National Robotics Challenge, this IoT solution combines an ESP8266 microchip with ultrasonic distance sensors and MQ gas sensors. When human presence or toxic gas threshold is detected, the system triggers 4-channel relay modules to spray mist sanitizers while sending telemetry logs.",
    techStack: ["ESP8266", "Gas Sensors", "Ultrasonic Sensors", "4-Channel Relay", "C++ Embedded"],
    githubUrl: "https://github.com/prasath983",
    metrics: [
      { label: "Recognition", value: "National Finalist" },
      { label: "Response Time", value: "< 200 ms" },
      { label: "Actuation", value: "Automated Relays" }
    ],
    iconName: "ShieldAlert"
  },
  {
    id: "eda-insights-dashboard",
    title: "Exploratory Data Analysis & Customer Insights Dashboard",
    category: "AI & Data",
    badge: "📊 Data Analytics & SQL",
    badgeColor: "sky",
    description: "Analyzed complex datasets using Python Pandas and MySQL to clean missing values, identify key business trends, and construct visual reports for performance metrics.",
    longDescription: "Performed end-to-end data analytics pipeline including raw data cleaning, outlier removal, correlation matrix analysis, and SQL query optimization. Generated rich statistical visualizations with Seaborn and Matplotlib to present actionable customer behavior insights.",
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn", "MySQL", "Jupyter"],
    githubUrl: "https://github.com/prasath983",
    metrics: [
      { label: "Data Quality", value: "99.8% Cleaned" },
      { label: "Queries", value: "Optimized SQL" },
      { label: "Visuals", value: "15+ Interactive Plots" }
    ],
    iconName: "BarChart3"
  },
  {
    id: "iot-smart-monitoring",
    title: "IoT Environmental & Remote Sensor Monitoring Hub",
    category: "IoT & Hardware",
    badge: "📡 Embedded Sensor IoT",
    badgeColor: "emerald",
    description: "Engineered a wireless hardware monitoring hub using ESP8266 microcontrollers to remotely measure environmental sensor telemetry and automate relay switches.",
    longDescription: "Integrated ESP8266 microcontrollers with Wi-Fi network protocols and local data logging. Enabled real-time remote device switching via interactive web control dashboard while streaming sensor telemetry for analytical reporting.",
    techStack: ["ESP8266", "Gas & Temp Sensors", "4-Channel Relay", "Wi-Fi API", "C++ Embedded"],
    githubUrl: "https://github.com/prasath983",
    metrics: [
      { label: "Telemetry", value: "Real-Time Sensor" },
      { label: "Control", value: "Wireless Relay" },
      { label: "Hardware", value: "ESP8266 Wi-Fi" }
    ],
    iconName: "Zap"
  },
  {
    id: "leetcode-portfolio",
    title: "LeetCode Algorithmic Problem Solving Portfolio",
    category: "AI & Data",
    badge: "⚡ 100+ Problems Solved",
    badgeColor: "amber",
    description: "Solved over 100 competitive algorithmic challenges focusing on arrays, strings, dynamic logic, trees, and search optimization techniques.",
    longDescription: "Demonstrates consistent problem-solving discipline and computer science fundamentals. Solutions written in Python and C++ emphasizing optimal time complexity O(N) and memory space efficiency.",
    techStack: ["Python", "C++", "Data Structures", "Algorithms", "Optimization"],
    liveUrl: "https://leetcode.com/u/prasath_116",
    githubUrl: "https://github.com/prasath983",
    metrics: [
      { label: "Problems", value: "100+ Solved" },
      { label: "Handle", value: "@prasath_116" },
      { label: "Topics", value: "DSA Core" }
    ],
    iconName: "Terminal"
  }
];

export const educationAndRoadmap = [
  {
    title: "B.E. Computer Science & Engineering (AI & ML)",
    institution: "Sri Krishna College of Technology (SKCT), Coimbatore",
    period: "2022 – Present",
    type: "Education",
    badge: "Current Degree",
    description: "Specializing in Artificial Intelligence, Machine Learning algorithms, Data Structures, Database Systems, and Cloud Architectures.",
    highlights: [
      "Specialized coursework in AI algorithms and Data Analysis",
      "Active team participant in technical hackathons & robotics competitions",
      "Hands-on lab work in Python, C++, MySQL, and Hardware IoT integration"
    ]
  },
  {
    title: "National Finalist - SRM Robotics & Automation Challenge",
    institution: "SRM University, Chennai",
    period: "2024 – 2025",
    type: "Achievement",
    badge: "🏆 National Award",
    description: "Shortlisted among national top teams for designing and building an automated Smart Sanitization Hardware Solution.",
    highlights: [
      "Designed embedded sensor array with real-time actuation logic",
      "Presented working hardware prototype to industry judges",
      "Demonstrated rapid fault detection and low-cost sensor integration"
    ]
  },
  {
    title: "AWS Cloud Fundamentals (Basic Learner Roadmap)",
    institution: "AWS Academy & Self-Directed Projects",
    period: "2024 – Present",
    type: "Certification",
    badge: "Cloud Learning Path",
    description: "Self-directed learning path covering fundamental AWS services including EC2 instances, S3 bucket storage, and IAM user access management.",
    highlights: [
      "Exploring foundational cloud computing and static storage configuration",
      "Understanding basic IAM security roles and permission policies",
      "Studying cloud database management and serverless compute concepts"
    ]
  },
  {
    title: "Selenium Web Automation & Testing Workshop",
    institution: "Sri Eshwar College of Engineering, Coimbatore",
    period: "Workshop Certification",
    type: "Workshop",
    badge: "Web Automation",
    description: "Hands-on training session covering web automation, DOM element selectors, script execution, and automated testing workflows.",
    highlights: [
      "Automated web browser interactions and test scripts",
      "Learned Selenium WebDriver API and UI test suites"
    ]
  }
];
