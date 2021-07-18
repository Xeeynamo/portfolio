/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false // set to false to use static SVG
};

const greeting = {
  username: "Xeeynamo",
  title: emoji("Welcome to my portfolio 😸"),
  subTitle: emoji(
    "I am Luciano Ciccariello, also well known as Xeeynamo ✌️. I am a software engineer who strongly believe in open source 🌍 and the power of the community 🧑‍💻. Always in search of the next challenge 🏂"
  ),
  //resumeLink: "/",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/xeeynamo",
  linkedin: "https://www.linkedin.com/in/xeeynamo/",
  twitter: "https://twitter.com/xeeynamo",
  youtube: "https://youtube.com/xeeynamo",
  facebook: "https://www.facebook.com/xeeynamo",
  gmail: "portfolio@xee.dev",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "My area of expertise is back-end development with high proficiency of building small but scalable and concurrent services. " +
    "I also worked on the front-end stack, desktop applications, videogame engines, designed programming frameworks, reverse engineered binaries from various platforms. " +
    "I embrace Functional programming, after years of defensive programming using the Object Oriented paradigm. TDD is a must on every project to ensure accuracy and robustness.",
  skills: [
    emoji("⚡ Create fast, scalable and reliable services"),
    emoji("⚡ Architect solutions using Cloud technologies"),
    emoji("⚡ Solve complex problems with efficiency and creativity")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
    {
      skillName: "GCP",
      fontAwesomeClassname: "devicon-googlecloud-plain"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "GH Actions",
      fontAwesomeClassname: "devicon-github-plain"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Golang",
      fontAwesomeClassname: "devicon-go-plain"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "devicon-csharp-plain"
    },
    {
      skillName: "F#",
      fontAwesomeClassname: "devicon-fsharp-plain"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "devicon-cplusplus-plain"
    },
    {
      skillName: ".NET Core",
      fontAwesomeClassname: "devicon-dotnetcore-plain"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "devicon-redis-plain"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "devicon-mongodb-plain"
    },
    {
      skillName: "SQL Server",
      fontAwesomeClassname: "devicon-microsoftsqlserver-plain"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "devicon-git-plain"
    }
  ],
  display: true
};

const educationInfo = {
  display: false,
  schools: [
    // {
    //   schoolName: "Name",
    //   logo: require("./assets/images/logo.png"),
    //   subHeader: "title",
    //   duration: "September 2010 - December 2014",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // }
  ]
};

const techStack = {
  viewSkillBars: false,
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "200%"
    },
    {
      Stack: "Programming",
      progressPercentage: "-50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

const workExperiences = {
  display: true,
  title: "Last relevant experiences",
  experience: [
    {
      role: "Senior Software Engineer",
      company: "7digital",
      companylogo: require("./assets/images/experience/7digital.png"),
      date: "Nov 2019 – Present",
      companydesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: []
    },
    {
      role: "Software Developer",
      company: "Comparison Technologies",
      companylogo: require("./assets/images/experience/comparisontech.jpg"),
      date: "Oct 2018 – Oct 2019",
      companydesc:
        "Providing online and offline comparison solutions for business and consumers",
      desc: "I worked along with the architect of the whole infrastructure to migrate from Rackspace to AWS. My biggest achievements are to successfully automate the creation of whole environments using CloudFormation, move a website to production using EC2, CloudFront and Octopus, helping to set-up IAM policies, tight the security through service gateways and private load balancers using CIDR notation. I presented a prototype of a new website using React and Typescript, chosen to be used a future reference for the current website running on production. I am always up to technical discussions, new technologies and sharing knowledge through short talk sessions.",
      descBullets: [
        "Test Driven Development",
        "Pair programming to 99% of the code",
        "AWS, Lambda serverless RESTful services (.Net, NodeJS, Golang)",
        "Windows stack based (C#, ASP.NET MVC, .NET Core)",
        "Greenfield project using .NET Core with C# and React with TypeScript",
        "Self-development using bleeding edge technologies to create prototypes",
        "Automation using TeamCity as CI/CI, Octopus to deploy and PowerShell to build and test"
      ]
    },
    {
      role: ".NET Software Engineer",
      company: "SafeToNet",
      companylogo: require("./assets/images/experience/safetonet.png"),
      date: "Feb 2018 – Sep 2018",
      companydesc:
        "Informed safeguarding and children protection on the internet",
      desc: "I was responsible to rewrite the whole architecture from the monolithic WCF to a micro-services architecture using .NET Core, Docker and Microsoft Azure services. This massively improved the speed of the development, directly communicating with Android, iOS and QA teams.",
      descBullets: [
        "Architectural re-design of back-end RESTful services",
        "Communication with the other development divisions and to the business analyst",
        "Code reviewing and quality checking",
        "Introduction of tests to ensure reliability and robustness"
      ]
    },
    {
      role: "Co-founder",
      company: "United Lines Studio",
      companylogo: require("./assets/images/experience/uls.png"),
      date: "Feb 2016 – Oct 2018",
      desc: "A small start-up from four active members working remotely to the acclaimed game Swords of Calengal, as part-time project. The game uses the multi-platform built-in engine XeEngine, also created by me. The game received multiple awards during its active development.",
      descBullets: [
        "Team management and priority scheduling using Trello",
        "Game design and gameplay development",
        "Multi-platform support (PC, UWP, Xbox One, PS4)",
        "Continuous integration using AppVeyor as CI/CD",
        "State-machine A.I. for MOBs and NPCs",
        "HUD/menu design and implementation",
        "Collision detection and physics development",
        "Engine and tools development in C++"
      ]
    },
    {
      role: ".NET Web Developer",
      company: "Edilportale SPA",
      companylogo: require("./assets/images/experience/edilportale.png"),
      date: "Apr 2017 – Dec 2017",
      companydesc: "",
      desc: "",
      descBullets: [
        "Maintenance of public web and private administration portals using ASP.NET MVC",
        "Usage of ElasticSearch, usage and profiling for Microsoft SQL Server",
        "Engineered and developed the back-end and front-end of a newsletter editor used by the editorial staff",
        "Porting of data and web pages from Microsoft SQL to ElasticSearch",
        "Engineer and developer the back-end and front-end of a task scheduler client for internal use"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "nearcons SNC",
      companylogo: require("./assets/images/experience/nearcons.png"),
      date: "June 2016 – Dec 2016",
      desc: "I worked on .Net Framework's RESTful services publishing on Windows machines. I built the entire login system using Facebook and Google API, a tokenizer and a framework to query and update data in a MySQL database. The RESTful API is consumed by Android (Android SDK with Java 1.8 and Android API 21) and iOS (Xcode 7 using Swift 2.2 and Xcode 8 with Swift 3.0) devices, both developed using their respective native development environment. I was responsible to build the UI too."
    }
    // {
    //   role: "Developer",
    //   company: "Kimera SRL",
    //   companylogo: require("./assets/images/experience/kimera.png"),
    //   date: "Oct 2015 – May 2016",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true
};

// Some big projects you have worked on
const bigProjects = {
  display: true,
  title: "Big Projects",
  subtitle: "THE MOST OUTSTANDING PERSONAL PROJECTS AND PUBBLICATIONS",
  projects: [
    {
      image: require("./assets/images/projects/openkh.png"),
      projectName: "OpenKH",
      projectDesc:
        "Centralize all the technical knowledge of the 'Kingdom Hearts' game series in one place, providing documentation, tools, code libraries, and the foundation for modding the commercial games.",
      footerLink: [
        {
          name: "Homepage",
          url: "https://openkh.dev"
        },
        {
          name: "Source code",
          url: "https://github.com/Xeeynamo/OpenKh"
        }
      ]
    },
    {
      image: require("./assets/images/projects/kingdomsaveeditor.png"),
      projectName: "Kingdom Save Editor",
      projectDesc: "General purpose videogame save editor.",
      footerLink: [
        {
          name: "Homepage",
          url: "https://kingdomsaveeditor.xee.dev"
        },
        {
          name: "Source code",
          url: "https://github.com/Xeeynamo/KingdomSaveEditor"
        }
      ]
    },
    {
      image: require("./assets/images/projects/xeengine.png"),
      projectName: "Xe.BinaryMapper",
      projectDesc:
        "NuGet package that de/serialize a binary stream into a class. Similar to Google ProtoBuf, but aims to be simpler and to read well-structured binary data. It is used mostly to reverse-engineer binary files. The library has been downloaded more than 5000 times.",
      footerLink: [
        {
          name: "Homepage",
          url: "hhttps://www.nuget.org/packages/Xe.BinaryMapper/"
        },
        {
          name: "Source code",
          url: "https://github.com/Xeeynamo/Xe.BinaryMapper"
        }
      ]
    },
    {
      image: require("./assets/images/projects/soc.png"),
      projectName: "Swords of Calengal",
      projectDesc:
        "A 2D action-rpg inspired to old-school games of SNES era, but developed using modern technologies and game mechanics.",
      footerLink: [
        {
          name: "Homepage",
          url: "https://unitedlinesstudio.com"
        },
        {
          name: "Video",
          url: "https://youtu.be/q8Ka9LjGZ64"
        }
      ]
    },
    {
      image: require("./assets/images/projects/xeengine.png"),
      projectName: "XeEngine",
      projectDesc:
        "Open-source framework to create multi-platform video games. Currently used for Swords of Calengal.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/XeEngine"
        }
      ]
    },
    {
      image: require("./assets/images/projects/sonicmania.png"),
      projectName: "RSDK Animation Editor",
      projectDesc:
        "Animation editor for Sonic Mania, Sonic CD, Sonic 1 and Sonic 2's Cristian Whitehead remakes. The tool is widely used by the Sonic modding community.",
      footerLink: [
        {
          name: "Source code",
          url: "https://github.com/Xeeynamo/RSDK"
        }
      ]
    },
    {
      image: require("./assets/images/projects/unity3d.png"),
      projectName: "Twist of Fate",
      projectDesc:
        "An Unity3D platform game in 2D that was developed for an University exam. Assets from Konami's Castlevania series was used.",
      footerLink: [
        {
          name: "Source code",
          url: "https://github.com/Xeeynamo/Twist-of-Fate"
        }
      ]
    },
    {
      image: require("./assets/images/projects/sonic1.png"),
      projectName: "RE: Sonic the Hedgehog",
      projectDesc:
        "Re-creation of a modern engine for the games Sonic the Hedgehog 1 and 2 using enhanced graphics.",
      footerLink: [
        {
          name: "Source code",
          url: "https://github.com/Xeeynamo/RESonic"
        }
      ]
    },
    {
      image: require("./assets/images/projects/megamanx-logo.png"),
      projectName: "MegaED X",
      projectDesc:
        "A level editor for the Super Nintendo games Mega Man X1 and Mega Man X2.",
      footerLink: [
        {
          name: "Source code",
          url: "https://github.com/Xeeynamo/MegaEdX"
        }
      ]
    }
  ]
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Swords of Calengal wins as best game of Modena Nerd 2017",
      subtitle:
        "During the event Modena Nerd 2017, the indie game awards evaluated the best game of the week and the popular jury voted the best game that they played to the event. Swords of Calengal get the second place with the indie game awards and the first place from the popular jury!",
      image: require("./assets/images/awards/modenanerd17.jpg"),
      footerLink: [
        {
          name: "Article",
          url: "http://www.modenanerd.it/indie/"
        },
        {
          name: "Interview #1",
          url: "https://garagebandgamers.com/interview-with-luciano-ciccariello"
        },
        {
          name: "Interview #2",
          url: "http://ilovevg.it/2017/10/milan-games-week-2017-la-compagnia-delle-indie/"
        }
      ]
    },
    {
      title:
        "Swords of Calengal wins as best technical game of Svilupparty 2017",
      subtitle:
        "During the event Svilupparty 2017 some anonymous reviewers tried Swords of Calengal, asking about the team and the used technologies. The detailed talks about Luciano Ciccariello's XeEngine praised the quality and the effort of the result, rewarding the game as best technical game of the event.",
      image: require("./assets/images/awards/svilupparty17.jpg"),
      footerLink: [
        {
          name: "Article",
          url: "http://leganerd.com/2017/10/05/10-migliori-indie-dalla-milan-games-week-2017/"
        },
        {
          name: "Presentation video",
          url: "https://youtu.be/LlLC43MDWXo"
        }
      ]
    },

    {
      title: "Biliko wins as best game of Microsoft Imagine Cup Italy 2016",
      subtitle:
        "During Microsoft Imagine Cup Italy 2016, between 40 people and 10 projects, the Biliko wins as best game. Biliko was a mobile game developed by 4 young people with Luciano Ciccariello as main developer.",
      image: require("./assets/images/awards/imaginecup16.jpg"),
      footerLink: [
        {
          name: "Article",
          url: "http://ischool.startupitalia.eu/news/52891-20160321-microsoft-imagine-cup-2016-italia"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  display: false,
  title: "Blogs",
  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",

  blogs: [
    {
      url: "/",
      title: "Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    }
  ]
};

// Talks Sections
const talkSection = {
  display: false,
  title: "TALKS",
  subtitle: emoji("Lorem ipsum dolor sit amet, consectetur adipiscing elit"),

  talks: [
    {
      title: "Title",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      slides_url: "/",
      event_url: "/"
    }
  ]
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "portfolio@xee.dev"
};

// Twitter Section
const twitterDetails = {
  userName: "xeeynamo", //Replace "twitter" with your twitter username without @
  display: false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
