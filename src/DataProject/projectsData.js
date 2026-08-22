import projectImages from "./projectImages";

const projects = [

  
  // TELENOR
  

  {
    id: "bachelor-thesis",
    image: projectImages.covers.telenor,

    tags: [
      "Fullstack",
      "Prototyping",
      "Accessibility",
      "User Research",
      "Responsive Design",
    ],

    projectLink: "https://github.com/BachelorTelenor26/bachelor26",
    demo: "https://telenor.jensnic.no/",

    type: "Group",

    roleKey: "projects.bachelor-thesis.role",

    projectType: "code",

    process: [
      {
        key: "problem",
      },

      {
        key: "research",

        images: [
          projectImages.telenor.affinityMapping,
          projectImages.telenor.personas,
        ],
      },

      {
        key: "keyInsight",
      },

      {
        key: "design",

        images: [
          projectImages.telenor.sitemap,
          projectImages.telenor.userFlow,
          projectImages.telenor.dotVoting,
          projectImages.telenor.lofi,
          projectImages.telenor.hifi,
        ],
      },

      {
        key: "development",

        images: [
          projectImages.telenor.systemArchitecture,
        ],

        highlightsKey:
          "projects.bachelor-thesis.process.development.highlights",

        techKey:
          "projects.bachelor-thesis.process.development.tech",
      },

      {
        key: "testing",
      },

      {
        key: "result",

        impactKey:
          "projects.bachelor-thesis.process.result.impact",
      },
    ],
  },


  
  // STUDY BOOST
  

  {
    id: "studyBoost",
    image: projectImages.covers.studyBoost,

    tags: [],

    projectLink: "",
    demo: "",

    type: "Personal",

    roleKey: "projects.studyBoost.role",

    projectType: "code",

    process: [],
  },


  
  // STUDY PLATFORM
  

  {
    id: "study-platform",
    image: projectImages.covers.studyPlatform,

    tags: [
      "React",
      "Node",
      "MongoDB",
    ],

    projectLink:
      "https://github.com/sabria23/Idg2671-project",

    demo:
      "https://group4.sustainability.it.ntnu.no/register",

    type: "Group",

    roleKey: "projects.study-platform.role",

    projectType: "code",

    process: [
      {
        key: "problem",
      },

      {
        key: "solution",

        images: [
          projectImages.studyPlatform.dashboard,
          projectImages.studyPlatform.dashboardSettings,
          projectImages.studyPlatform.createNewStudy,
        ],
      },

      {
        key: "keyInsight",
      },

      {
        key: "design",

        images: [
          projectImages.studyPlatform.userFlow,
        ],
      },

      {
        key: "result",

        impactKey:
          "projects.study-platform.process.result.impact",
      },
    ],
  },


  
  // SPANISH POKER
  

  {
    id: "spanish-poker",
    image: projectImages.covers.poker,

    tags: [
      "Fullstack",
      "WebSocket",
      "Authentication",
      "Game Design",
    ],

    projectLink:
      "https://github.com/sabria23/fullstack-2026-oblig1",

    demo: "",

    type: "Group",

    roleKey: "projects.spanish-poker.role",

    projectType: "code",

    process: [
      {
        key: "design",

        images: [
          projectImages.spanishPoker.dotVoting,
          projectImages.spanishPoker.darkMode,
          projectImages.spanishPoker.fontFamily,
          projectImages.spanishPoker.colors,
        ],
      },

      {
        key: "realTime",
      },

      {
        key: "authentication",
      },

      {
        key: "finalResult",
      },
    ],
  },


  
  // SAMFUNDET
  

  {
    id: "samfundet",
    image: projectImages.covers.samfundet,

    tags: [
      "Figma",
      "UI/UX",
      "Prototyping",
      "Accessibility",
      "User Research",
      "Responsive Design",
    ],

    projectLink:
      "https://www.figma.com/file/Q4A3pdFfcKIQ4G0BS9q57u/Samfundet_IDG2200_G12",

    demo:
      "https://www.figma.com/proto/Q4A3pdFfcKIQ4G0BS9q57u/Samfundet_IDG2200_G12",

    type: "Group",

    roleKey: "projects.samfundet.role",

    projectType: "design",

    video: projectImages.videos.samfundet,

    process: [
      {
        key: "problem",
      },

      {
        key: "research",

        images: [
          projectImages.samfundet.sitemap,
        ],
      },

      {
        key: "keyInsight",
      },

      {
        key: "moscow",

        images: [
          projectImages.samfundet.moscow,
        ],
      },

      {
        key: "design",

        images: [
          projectImages.samfundet.sketch,
          projectImages.samfundet.lofi,
          projectImages.samfundet.hifiMobile,
          projectImages.samfundet.hifiPc,
        ],
      },

      {
        key: "improvements",
      },

      {
        key: "result",

        newversionImage: [
          projectImages.samfundet.dashboard,
          projectImages.samfundet.arrangement,
          projectImages.samfundet.lokal,
        ],
      },
    ],
  },

// BLINK & FIND

{
  id: "blink-find",
  image: projectImages.covers.blinkFind,

  tags: [
    "Figma",
    "UI/UX",
    "Game Design",
  ],

  projectLink: "",
  demo: "",

  type: "Group",
  roleKey: "projects.blink-find.role",

  projectType: "design",

  video: projectImages.videos.blinkFind,

  process: [
    {
      key: "problem",
    },

    {
      key: "brainstorming",
    },

    {
      key: "ideas",
    },

    {
      key: "userflow",
    },

    {
      key: "wireframes",
    },

    {
      key: "design",
    },

    {
      key: "interaction",
    },
  ],
},

  
  // HELSERETT
  

  {
    id: "helserett",
    image: projectImages.covers.helseRett,

    tags: [
      "Figma",
      "UI/UX",
      "User Research",
      "Accessibility",
      "Prototyping",
      "Usability Testing",
      "Responsive Design",
    ],

    projectLink: "",
    demo: "",

    type: "Group",

    roleKey: "projects.helserett.role",

    projectType: "design",
  },

];

export default projects;