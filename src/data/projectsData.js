import projectImg1 from "../assets/studyPlatformLogin.png";
import projectImg2 from "../assets/work-Blink&Find.png";
import projectImg3 from "../assets/HelseRettApp.png";
import projectImg4 from "../assets/samfundet.png";

const project = [
        {
            id: "study-platform",
            title: "Study Platform",
            category: "Development",
            image: projectImg1,
            description: "Study platform is a group project where we focused on developing a web platform designed to support researchers in creating, managing and conducting research studies.",
            tags: ["React", "node", "MongoDB" ],
            projectLink: "https://github.com/sabria23/Idg2671-project",
            demo: "https://group4.sustainability.it.ntnu.no/register", 
            type: "Group",
            role: "Full-stack Developer & UX Designer",
            projectType: "code",
        },
        {
            id: "samfundet",
            title: "Samfundet",
            category: "Design",
            image: projectImg4,
            description: "Redesigned Samfundet Gjøvik's website to improve accessibility and usability. Delivered a responsive hi-fi prototype in Figma for desktop and mobile, supported by research and heuristic evaluation.",
            tags: ["Figma", "UI/UX", "Prototyping", "Accessibility", "User Research", "Responsive Design"],
            projectLink: "https://www.figma.com/design/Q4A3pdFfcKIQ4G0BS9q57u/Samfundet_IDG2200_G12?node-id=389-1386&t=SBav7QZuYPTK0ddI-1",
            demo: "https://www.figma.com/proto/Q4A3pdFfcKIQ4G0BS9q57u/Samfundet_IDG2200_G12?page-id=389%3A1386&node-id=779-3539&viewport=262%2C421%2C0.44&t=bOSrmf3ARU1JJQrq-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=779%3A3539", 
            type: "Group",
            role: "UX designer & Accessibility ",
            projectType: "design",
        },
        {
            id: "blink-find",
            title: "Blink & find",
            category: "Design",
            image: projectImg2,
            description: "Blink & Find is a multiplayer game where players compete to find item in the picture within a time limit. The game is designed to be engaging and fun, encouraging quick observation and attention to detail.",
            tags: ["Figma", "UI/UX", "Prototyping", "Game Design", "Multiplayer"],
            projectLink:"https://www.figma.com/design/NUpEvcJgyjEgIVAiSI5GGD/multiplayer-oblig5?node-id=115-96&t=HDrfGPkcMju9Wa2m-1", 
            demo: "https://www.figma.com/proto/NUpEvcJgyjEgIVAiSI5GGD/multiplayer-oblig5?page-id=0%3A1&node-id=267-2499&viewport=1509%2C-307%2C0.16&t=kIveqipEDD2VNBtI-1&scaling=contain&content-scaling=fixed&starting-point-node-id=267%3A2499&show-proto-sidebar=1",
            type: "Group",
            role: "UI/UX designer - responsible for wireframes, user flows, interactive prototype and visual design in Figma",
            projectType: "design",
        },
        {
            id: "helserett.no",
            title: "HelseRett.no",
            category: "Design",
            image: projectImg3,
            description: "Designed an accessible website to help elder users explore health technologies, focusing on ease of navigation and user friendly design.",
            tags: ["Figma", "UI/UX", "Prototyping", "User Testing", "Accessibility"],
            projectLink: "https://www.figma.com/design/wnAhuDbjtefDq2BLhcFFFC/Nettside-til-Helseinn?node-id=17-472&t=0I34E1aZMWKZUFLq-1",
            demo: "https://www.figma.com/proto/wnAhuDbjtefDq2BLhcFFFC/Nettside-til-Helseinn?page-id=17%3A472&node-id=435-4165&starting-point-node-id=435%3A4165&t=en2b0fUCeHbY08l6-1", 
            type: "Group",
            role: "UI/UX designer - responsible for user research, prototyping, creating component and designing accessible, easy-to-navigate interface for elder users",
            projectType: "design",
        },
    ];

export default project;