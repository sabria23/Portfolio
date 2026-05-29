

import projectImg3 from "../assets/images/helseInnApp/HelseRettApp.png";



// Spanish Dice
import spanishHeroImg from "../assets/images/spanishDice/spanish-heroimg.png";
import spanishDotvoting from "../assets/images/spanishDice/spanishDotvoting.png";
import spanishColors from "../assets/images/spanishDice/spanishColors.png";
import spanishDarkmode from "../assets/images/spanishDice/spanishDarkmode.png";
import spanishFont from "../assets/images/spanishDice/spanishFontfamily.png";


// Samfundet
import projectImg4 from "../assets/images/samfundet/samfundetMockup-bk.png";
import samfundetDesign1 from "../assets/images/samfundet/brainstormingSamfundet.png";
import samfundetIdeas1 from "../assets/images/samfundet/moscowSamfundet.png";
import samfundetBrainstorm1 from "../assets/images/samfundet/samfundetMockup-bk.png";

import samfundetSitemap from "../assets/images/samfundet/samfundetSitemap.png";
import samfundetLofi from "../assets/images/samfundet/samfundetLofi.png";
import samfundetMobile from "../assets/images/samfundet/samfundetHifiMobile.png";
import samfundetPc from "../assets/images/samfundet/samfundetHifiPc.png";

import samfundetDashboard from "../assets/images/samfundet/samfundetdashboardVersion.png"
import samfundetArrangment from "../assets/images/samfundet/samfundetArrangementVersion.png"
import samfundetLokal from "../assets/images/samfundet/samfundetlokalVersion.png"

// Blink
import projectImg2 from "../assets/images/blink&FindApp/work-Blink&Find.png";
import blinkDesign1 from "../assets/images/samfundet/brainstormingSamfundet.png";
import blinkIdeas1 from "../assets/images/samfundet/moscowSamfundet.png";
import blinkBrainstorm1 from "../assets/images/samfundet/samfundetMockup-bk.png";

// Telenor
import telenorMockup from "../assets/images/telenor/MockupTelenor.png";
import telenorIdeas1 from "../assets/images/samfundet/moscowSamfundet.png";
import telenorSitemap from "../assets/images/telenor/telenorSitemap.png";
import telenorDotVoting from "../assets/images/telenor/telenorDotVoting.png";
import telenorBrainstorm1 from "../assets/images/samfundet/samfundetMockup-bk.png";
import telenorAffinitymapping from "../assets/images/telenor/telenorAffinitymapping1.png"
import telenorUserFlow from "../assets/images/telenor/telenorbrukerFlyt.png";
import telenorPersonas from "../assets/images/telenor/telenorPersonas.png";
import telenorLofi from "../assets/images/telenor/telenorLofi.png";
import telenorHifi from "../assets/images/telenor/telenorHifi.png";
import telenorSystemArkitektur from "../assets/images/telenor/systemArkitektur.png";


// Platform
import projectImg1 from "../assets/images/studyPlatform/studyPlatform-heroImg.png";
import platformsettings from "../assets/images/studyPlatform/platform-dashboardSettings.png";
import platformDashboard from "../assets/images/studyPlatform/plattform-dashboardFilter.png";
import platformNewStudy from "../assets/images/studyPlatform/plattform-researchNewStudy.png";
import platformUserFlow from "../assets/images/studyPlatform/Platform-PageStructure.png";


// StudyBoost
import studyBoostHeroImg from "../assets/images/studyBoost/StudyBoostHeroImg.png"

// video
import BlinkFindvideo from "../assets/video/Blink-Find.mp4";
import Samfundetvideo from "../assets/video/Samfundet.mp4";

// Image map
const images = {

  blinkFind: {
    design: [blinkDesign1],
    ideas: [blinkIdeas1],
    brainstorm: [blinkBrainstorm1],
  },

  // Spanish
  spanish: {
    colors: {
      src: spanishColors,
      alt: "color template",
      description: "color template"
    },
    fontFamily: {
      src: spanishFont,
      alt: "Font family",
      description: "Font family"
    },
    darkmode: {
      src: spanishDarkmode,
      alt: "Darkmode and lightmode mockup",
      description: "Darkmode and lightmode mockup"
    },
    Dotvoting: {
      src: spanishDotvoting,
      alt: "Dot voting",
      description: "Dot voting"
    },
  },

  // Platform
  platform: {
    dashboardsettings: {
      src: platformsettings,
      alt: "platform filter mockup",
      description: "platform filter"
    },
    dashboard: {
      src: platformDashboard,
      alt: "filter mockup",
      description: "dashboard mockup"
    },
    createNewStudy: {
      src: platformNewStudy,
      alt: "create new study mockup",
      description: "create new study mockup"
    },
    userFlow: {
      src: platformUserFlow,
      alt: "User flow diagram",
      description: "User flow"
    },
  },

  // Telenor
  telenor: {
    mockup: [telenorMockup],
    sketch: [telenorDotVoting, telenorSitemap],
    ideas: [telenorIdeas1],
    brainstorm: [telenorBrainstorm1],

    systemArkitektur: {
      src: telenorSystemArkitektur,
      alt: "SystemArchitecture diagram",
      description: "SystemArchitecture"
    },

    dotVoting: {
      src: telenorDotVoting,
      alt: "Dot voting",
      description: "DotVoting"
    },
    sitemap: {
      src: telenorSitemap,
      alt: "Sitemap diagram",
      description: "Sitemap diagram"
    },
    personas: {
      src: telenorPersonas,
      alt: "Personas",
      description: "Personas"
    },
    lofi: {
      src: telenorLofi,
      alt: "Lofi",
      description: "Lofi"
    },
    hifi: {
      src: telenorHifi,
      alt: "Hifi",
      description: "Hifi"
    },
    userFlow: {
      src: telenorUserFlow,
      alt: "User flow diagram",
      description: "User flow diagram"
    },
    affinityMapping: {
      src: telenorAffinitymapping,
      alt: "Affinity mapping workshop",
      description: "Affinity mapping"
    },
    
  },

  // Samfundet
  samfundet: {
    dashboardversion: {
      src: samfundetDashboard,
      alt: "old and new version dashboard",
      description: "old and new version dashboard"
    },
    arrangmentVersion: {
      src: samfundetArrangment,
      alt: "Arrangment",
      description: "old and new version Arrangment"
    },
    lokal: {
      src: samfundetLokal,
      alt: "old and new version lokal",
      description: "old and new version lokal"
    },
    sketch: {
      src: samfundetDesign1,
      alt: "brainstorming",
      description: "Brainstorming"
    },
    moscow: {
      src: samfundetIdeas1,
      alt: "Moscow",
      description: "Moscow"
    },
  brainstorming: {
      src: samfundetBrainstorm1,
      alt: "BrainStorming",
      description: "Brainstorming"
    },
 
    sitemap: {
        src: samfundetSitemap,
        alt: "Sitemap",
        description: "Sitemap"
    },
      lofi: {
        src: samfundetLofi,
        alt: "lofi",
        description: "lofi"
    },
      hifiMobile: {
        src: samfundetMobile,
        alt: "Hifi mobile",
        description: "Hifi mobile"
    },
      hifiPc: {
        src: samfundetPc,
        alt: "Hifi Pc",
        description: "Hifi Pc"
    } 
  },
};

const project = [

// Bachlelor Thesis
{
    id: "bachelor-thesis",
    title: "Bachelor Thesis - Telenor",
    category: "Fullstack Development",
    image: telenorMockup,
    description:
        `
          Design and development of a shared, web-based knowledge platform for consistent and efficient technical troubleshooting at Telenor. 
          The project explored how self-service solutions and customer support systems can share a common knowledge base to improve trust, consistency, and user experience across channels.
        `,
    tags: [
        "Next.js",
        "PostgreSQL",
        "UX Research",
        "Accessibility",
        "Docker",
    ],

    projectLink: "https://github.com/BachelorTelenor26/bachelor26",
    demo: "https://telenor.jensnic.no/",
    type: "Group",
    role: "Full-stack Developer & UX Designer",
    projectType: "code",
    process: [
    {
        title: "Problem",
        text:
        `
        Telenor identified challenges related to fragmented troubleshooting information across customer self-service and internal support systems. 
        Customers often failed to resolve technical issues independently and contacted support instead, leading to inconsistent guidance, reduced trust, 
        and increased workload for customer service agents.
        `,
    },

    {
        title: "Research",
        text:
            "The project combined qualitative and quantitative research methods, including semi-structured interviews with customer service agents, customer surveys, call-monitoring sessions, and competitor analysis. Findings highlighted issues related to information architecture, technical language, and lack of visual guidance during troubleshooting.",
        images: [
          images.telenor.affinityMapping,
          images.telenor.personas,
        ]
        },
    {
        title: "Key Insight",
        text: [
            "Users struggled to find the right answer quickly", 
            "Iconsistent terminology created confusion", 
            "Support agent used multiple tools daily"
          ]
    },

    {
        title: "Design",
        text:
            "Using the Double Diamond framework, the solution was designed through iterative prototyping, user flows, personas, sitemap development, and accessibility-focused design decisions. Particular focus was placed on clear language, consistent information structures, and seamless escalation from self-service to customer support.",
        images: [
          images.telenor.sitemap,
          images.telenor.userFlow,
          images.telenor.dotVoting,
          images.telenor.lofi,
          images.telenor.hifi,
          
          
        ]
    },

    {
    title: "Development",
    text:
            `
              The platform was implemented as a fullstack web application using Next.js, PostgreSQL, and role-based authentication. 
              Separate customer and agent portals shared a common knowledge base, while CI/CD pipelines, Docker, 
              and accessibility testing ensured maintainability and scalability.
            `,
          images: [
            images.telenor.systemArkitektur,
          ],

      highlights: [
        "Role-based authentication",
        "Shared knowledge base",
        "Accessibility testing"
      ],

      tech: [
        "Next.js",
        "PostgreSQL",
        "Docker"
      ],
    },

    {
        title: "Testing",
        text:
            "The prototype was evaluated through usability testing with both customers and customer service agents. All participants completed their assigned tasks successfully, while findings emphasized the importance of enhanced visual support such as router images, cable illustrations, and indicator light guidance.",
    },

    {
        title: "Result",
        text:
            `
              The final solution introduced a shared knowledge platform with separate customer and agent interfaces, reducing fragmented information and improving consistency in troubleshooting guidance. 
              Usability testing showed that all participants successfully completed their tasks, indicating a clear improvement in user flow and understanding.
            `,
        impact:
          [
            "Faster issue resolution",
            "More consistent answers",
            "Reduced workload for agents",
            "Better experience for customers"
          ],
        
    },
    ],
},

// StudyBoost
{
    id: "studyBoost",
    title: "StudyBoost",
    category: "Development",
    image: studyBoostHeroImg,
    description:
        "StudyBoost platform is coming soon",
    tags: [],
    projectLink: "",
    demo: "",
    role: "Full-stack Developer & UX Designer",
    projectType: "code",
},

// Study platform
{
    id: "study-platform",
    title: "Study Platform",
    category: "Development",
    image: projectImg1,
    description:
        `
        StudyPlatform is a web-based research system designed to support the creation and execution of multimedia comparison studies. 
        It enables researchers to design structured studies using different types of media such as images, videos, audio, and text, 
        and collect participant responses in a controlled and scalable way.
        The platform was developed to address a limitation in existing survey tools, 
        which lack support for advanced comparative research involving multiple artifacts. Instead of focusing only on basic form input, 
        StudyPlatform is built around research workflows where participants actively evaluate and compare content.
        `,
    tags: ["React", "Node", "MongoDB"],
    projectLink: "https://github.com/sabria23/Idg2671-project",
    demo: "https://group4.sustainability.it.ntnu.no/register",
    type: "Group",
    role: "Full-stack Developer & UX Designer",
    projectType: "code",
    process: [
    {
        title: "Problem",
        text:
        `
        Traditional survey tools such as Google Forms and SurveyMonkey are not designed for research scenarios involving rich media comparisons. 
        They provide limited flexibility for study design, lack support for structured artifact evaluation, 
        and offer weak tools for managing research workflows and participant data.
        This creates challenges for researchers who need more advanced control over study structure, 
        data collection, and analysis-ready exports.
        `,
    },

    {
        title: "Solution",
        text:
            `
              StudyPlatform introduces a centralized environment where researchers can:
              Create and manage multiple studies from a single dashboard
              Upload and organize multimedia research artifacts
              Design flexible question formats and rating scales
              Distribute studies through shareable participant links
              Track participation and study progress in real time
              Export structured datasets for analysis
              The system is designed to support the full research lifecycle, from study creation to data collection and export.
            `,
        images: [
          images.platform.dashboard,
          images.platform.dashboardsettings,
          images.platform.createNewStudy,
          
        ]
        },
    {
        title: "Key Insight",
        text: [
          "StudyPlatform introduces a centralized environment where researchers can:",
          "Create and manage multiple studies from a single dashboard",
          "Upload and organize multimedia research artifacts",
          "Design flexible question formats and rating scales",
          "Distribute studies through shareable participant links",
          "Track participation and study progress in real time",
          "Export structured datasets for analysis",
          "The system is designed to support the full research lifecycle, from study creation to data collection and export.",
          ]
    },

    {
        title: "Design",
        text:
            "Using the Double Diamond framework, the solution was designed through iterative prototyping, user flows, personas, sitemap development, and accessibility-focused design decisions. Particular focus was placed on clear language, consistent information structures, and seamless escalation from self-service to customer support.",
        images: [
          images.platform.userFlow,
        ]
    },

    {
        title: "Result",
        text:
            `
              The final system provides researchers with a more flexible and research-oriented alternative to traditional survey tools, 
              enabling structured comparative studies with richer data inputs and improved workflow management.
            `,
        impact:
          [
            "Custom question types (Likert, ranking, open-ended, sliders)",
            "Study dashboard with live overview of responses",
            "Participant tracking and anonymized data handling",
            "Multimedia-based study creation (image, video, text, audio)"
          ],
        
    },
    ],
},


// Spanish poker dice
{
    id: "spanish-poker",
    title: "Spanish poker Dice",
    category: "Development",
    image: spanishHeroImg,
    description:
        `
        This project was developed as part of a full-stack exam assignment at NTNU, 
        where the goal was to build a complete multiplayer web platform for managing and playing a turn-based dice game.
        The system combines real-time gameplay, user authentication, tournament management, 
        and administrative tools, all within a full MERN-stack architecture.
        We continued development from earlier individual assignments and restructured the existing codebase into a scalable, full-stack application.
        `,
    tags: ["React", "Node", "MongoDB", "Web Socket"],
    projectLink: "https://github.com/sabria23/fullstack-2026-oblig1",
    demo: "",
    type: "Group",
    role: "Full-stack Developer & UX Designer",
    projectType: "code",
    process: [

      {
        title: "Design",
        text: `
          Before implementing features, we created quick lo-fi wireframes and hi-fi mockups to visualize key flows such as:
          Game lobby and matchmaking
          Individual game board interaction
          Tournament overview and progression
          User profile and statistics dashboard
          These helped align the team on layout structure, navigation flow, and prioritization of features.
        `,
        images: [
          images.spanish.Dotvoting,
          images.spanish.darkmode,
          images.spanish.fontFamily,
          images.spanish.colors,
          
          
        ]
      },

      {
        title: "Real time system",
        text: `
          A major part of the project was implementing real-time interaction using WebSockets.
          This enabled:
          Live updates of game actions (rolls, holds, bets)
          Synchronized gameplay across multiple players
          Hidden game state logic handled on the backend
          Immediate UI updates without page reloads
          The backend was responsible for all game logic, including dice generation, betting rules, and winner calculation, ensuring fairness and preventing client-side manipulation.
        `,
      },

      {
        title: "Authentication & Security",
        text: [
          "We implemented a full authentication system using:",
          "JWT access & refresh tokens",
          "Password hashing and salting",
          "Email verification flow with time-limited tokens",
          "Role-based access control (user vs admin)",
          "Security considerations were important, especially around game integrity and preventing unauthorized access to game sessions and admin features.",
        ],
      },

      {
        title: "Final result",
        text: [
          "Real-time dice gameplay for 2–5 players",
          "Tournament system with progression and ranking",
          "User authentication and profile management",
          "Admin dashboard for platform control",
          "Responsive UI with game, lobby, and profile views",
        ],
      },
    ],
  },

  // Samfundet
  {
    id: "samfundet",
    title: "UI/UX redesign Samfundet Gjøvik",
    category: "Design",
    image: projectImg4,
    description:
      "Redesigned Samfundet Gjøvik’s website to improve usability, accessibility, and overall visual consistency through UX research, evaluation, and prototyping in Figma.",
    tags: ["Figma", "UI/UX", "Prototyping"],
    projectLink: "https://www.figma.com/file/Q4A3pdFfcKIQ4G0BS9q57u/Samfundet_IDG2200_G12?type=design&node-id=589%3A3125&mode=design&t=pR031aw7QN6K5ZNU-1",
    demo: "https://www.figma.com/proto/Q4A3pdFfcKIQ4G0BS9q57u/Samfundet_IDG2200_G12?page-id=599%3A347&type=design&node-id=599-348&viewport=80%2C345%2C0.04&t=VDErCyZfYwV0WXPv-1&scaling=scale-down&starting-point-node-id=599%3A348&mode=design",
    type: "Group",
    video: Samfundetvideo,
    projectType: "design",
    process: [
      {
        title: "Problem",
        text: [
          "Inconsistent visual design and weak overall identity",
          "Poor accessibility (did not meet WCAG standards)",
          "Confusing structure and navigation",
          "Booking and event flow lacked clarity",
        ],
      },
      {
        title: "Research",
        text: `
          We conducted multiple UX evaluation methods to identify key issues:
          Heuristic evaluation (Nielsen’s usability principles)
          In-person usability testing (3 participants)
          Design evaluation of UI consistency and structure
          Competitor analysis
        `,
          images: [
          images.samfundet.sitemap,
        ],
      },
      

      {
        title: "Key Insight",
        text: [
          "Users struggled to understand site structure",
          "Booking and event flow was unclear",
          "Accessibility issues affected readability and usability",
          "Inconsistent UI elements reduced trust and clarity",
          ]
    },

      {
        title: "MoSCoW",
        text: `
          We used the MoSCoW method to prioritize improvements:
          Must have
          WCAG compliance improvements
          Better content structure
          Improved contrast and color system
          Redesigned contact form
          Should have
          Consistent button styles and UI components
          Improved gallery structure
          Larger clickable areas (better usability)
          Could have
          Improved catering page layout
          Better facility descriptions
          Price calculator for additional services
          Won’t have
          Redesign of Samfundet’s logo (out of scope / not allowed)
        `,
        images: [
          images.samfundet.moscow
        ],
    },

      {
        title: "Design & Prototyping",
        text: `
        We developed a full redesign in Figma:
        Wireframes → High-fidelity prototype
        Desktop & mobile versions
        Consistent design system (typography, colors, components)
        Improved UI patterns and accessibility
        Key improvements:
        Clearer navigation and structure
        More consistent visual language
        Improved booking and contact flow
        Better readability and contrast
        Clickable UI elements instead of small icons/buttons
        `,
        images: [
          images.samfundet.sketch,
          images.samfundet.lofi,
          images.samfundet.hifiMobile,
          images.samfundet.hifiPc,
        ],
      },

      {
        title: "What could be improved",
        text: [
        "Adding dark mode for better user comfort",
        "Improving carousel navigation on desktop",
        "Adding quick “home” navigation option",
        "Enhancing calendar and event interaction features",
        "Potential internal employee portal (out of scope)",
        ],
        images: images.samfundet.ideas,
      },

      {
        title: "Result",
        text: [
        "Improved UX structure",
        "Better accessibility (WCAG considerations)",
        "More consistent UI system",
        "Clearer user flows for booking and events",
        ],
        newversionImage: [
          images.samfundet.dashboardversion,
          images.samfundet.arrangmentVersion,
          images.samfundet.lokal
        ]
      },
    ],
  },

  // BlinkFind
  {
    id: "blink-find",
    title: "Blink & find",
    category: "Design",
    image: projectImg2,
    description:
      "Blink & Find is a multiplayer game where players compete to find hidden objects.",
    tags: ["Figma", "UI/UX", "Game Design"],
    projectLink: "https://www.figma.com/design/...",
    demo: "https://www.figma.com/proto/...",
    type: "Group",
    video: BlinkFindvideo,
    projectType: "design",

    process: [
      {
        title: "Problem",
        text: "Game concept and user flow exploration.",
      },

      {
        title: "Design",
        text: "Wireframes and UI structure.",
        images: images.blinkFind.design,
      },

      {
        title: "Ideas",
        text: "Gameplay ideas and mechanics.",
        images: images.blinkFind.ideas,
      },

      {
        title: "Brainstorming",
        text: "Feature brainstorming and iteration.",
        images: images.blinkFind.brainstorm,
      },
    ],
  },

  {
    id: "helserett.no",
    title: "HelseRett.no",
    category: "Design",
    image: projectImg3,
    description:
      "Designed an accessible website for elder users exploring health tech.",
    tags: ["Figma", "UI/UX", "Accessibility"],
    projectLink: "",
    demo: "",
    type: "Group",
    projectType: "design",
  },
];

export default project;