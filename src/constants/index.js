import {
    backend,
    architect,
    quant,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    angular,
    spring,
    nodejs,
    mongodb,
    git,
    spark,
    docker,
    gs,
    monash,
    photobook,
    carrent,
    jobit,
    tripguide,
    tgb,
    experius,
    softwaremill,
    tacton,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Full-Stack Engineer",
        icon: web,
    },
    {
        title: "DevOps Engineer",
        icon: backend,
    },
    {
        title: "Software Engineer",
        icon: quant,
    },
    {
        title: "Software Architect",
        icon: architect,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Spring Boot",
        icon: spring,
    },
    {
        name: "Angular",
        icon: angular,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Apache Spark",
        icon: spark,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Senior Full-stack engineer",
        company_name: "SoftwareMill",
        icon: softwaremill,
        iconBg: "#383E56",
        date: "07/2021 - 04/2023",
        points: [
            "Main skills: LangChain, Ruby on Rails, Django, DynamoDB, Azure, Angular, NextJS",
            "Used React native-Router to turn the application into Single Page Application and utilized Axios, mobx, Lodash, and Nextjs.",
            "Team lead and mentor with extensive Agile experience",
            "Worked in designing and configuration of the Azure environment and migrated legacy applications to the Azure cloud platform.",
            "Implemented Jenkins pipeline for continuous deployments and installed and configured Jenkins CI/CD pipelines.",
            "Implemented Angular, Bootstrap, LESS, and many JQuery plugins wrapped in Angular directives.",
            "Implemented various features using Ruby on Rails, including product search functionality, user authentication and payment processing",
        ],
    },
    {
        title: "Full-stack developer",
        company_name: "Experius",
        icon: experius,
        iconBg: "#E6DEDD",
        date: "10/2019 - 06/2021",
        points: [
            "Main Skills: Blockchain, Flask, Spring, PostgreSQL, DynamoDB, Azure, Svelte, GatsbyJS",
            "Developed front-end applications using ReactJS, Flux, NodeJS and Docker and Built Spring based Java and Scala services to support",
            "Enterprise Web application.",
            "Developed user interface using JSP with JavaBeans, JSTL and Custom Tag Libraries, JS, CSS, JQuery, Node.js, Angular Js, and HTML to speed the application.",
            "Developed the backend that became the foundation for the intersection between Web3 and FinTech.",
            "Building proof-of-concepts on fast automation coding platforms like Gatsby with Azure and integrating with several AI modules",
            "Built a private blockchain using Hyperledger Fabric 1.0 that enhanced data security and reduced risk exposure by 93%.",
            "Participated in 16 decentralized social media web applications development using React, CSS, Bootstrap, and web3.js / Ethers for integrating Ethereum.",
        ],
    },
    {
        title: "Front-end developer",
        company_name: "Tacton",
        icon: tacton,
        iconBg: "#383E56",
        date: "11/2017 - 08/2019",
        points: [
            "Main Skills: NextJS, NuxtJS, React Native, Tailwind CSS",
            "Partnered with a team of 5 developers to create 14 e-commerce websites using NestJS and NodeJS in the first month on the job.",
            "Developed Single Pages Application using HTML5, CSS3, Bootstrap, React Async Await, Nextjs, GraphQl, NodeJS, Socket, Tailwind CSS.",
            "Created a responsive and mobile application using React, React Native and NuxtJS. Extensive use of native device APIs and latest UI Kits.",
            "Developed the unit testing scripts using JEST for testing the React components using Enzyme and react test renderer.",
        ],
    },
    {
        title: "Back-end developer",
        company_name: "TBG Digital,",
        icon: tgb,
        iconBg: "#E6DEDD",
        date: "05/2015 - 10/2017",
        points: [
            "Main Skills: ExpressJS, NestJS, Laravel, MongoDB, Redis, AWS",
            "Designed the Backend-API using mongoose with express framework. Connected to the Mongo database using Mongoose.",
            "Enhanced existing REST services using NodeJs, ExpressJS and Mongoose modules.",
            "Architected a solution for migrating legacy project to the Laravel framework.",
            "Proactively identified opportunities to leverage Redis for improved data search functions and an increase in product performance.",
        ],
    },
];

const introduction = [
    "7+ years of experience in developing enterprise, distributed web and mobile applications",
    "Extensive experience in developing various web and mobile based applications using <b>Node.JS</b>, <b>Python</b>, <b>PHP</b>, <b>Java<bb> and <b>Ruby</b>.",
    "Proficient in developing User Interface (UI) applications and professional web applications using <b>React</b> (<b>React Native</b>), <b>Vue</b>, <b>Angular</b> and <b>Svelte</b>.",
    "Good oral and written communication skills, and able to work in a team environment. Highly motivated, enthusiastic, quick learner and dependable.",
];
("I'm a software engineer at Goldman Sachs with experience in developing and maintaining portfolio management platforms and implementing agile project management methods. I'm proficient in Java, Spring Boot, Angular, SQL and noSQL databases, and cloud computing. I possess strong analytical, technical and problem-solving skills. I'm also a Summa Cum Laude with Honours and Dean’s List recipient from Monash University.");

const testimonials = [
    {
        testimonial:
            "Murtaza goes out of his way to ensure that the work he produces is nothing less that perfect. He is a highly motivated individual who actively looks for more responsibilities.",
        name: "Leonardy Huang",
        designation: "AVP (Engineering)",
        company: "Photobook Worldwide",
        image: "https://media.licdn.com/dms/image/C5103AQFdWmF1JZo0Vw/profile-displayphoto-shrink_800_800/0/1542128636444?e=1689811200&v=beta&t=ZfGeUJP8jrZCubDbSZEkDuAPE3toTbBxSizLXQd9lj0",
    },
    {
        testimonial:
            "Murtaza is motivated, hardworking, and constantly shows strong desire to learn new and challenging technologies. He is a fast learner and a team player.",
        name: "Dr Chong Chun Yong",
        designation: "Senior Lecturer",
        company: "Monash University",
        image: "https://media.licdn.com/dms/image/C5603AQFWqoLliUIasA/profile-displayphoto-shrink_800_800/0/1643274057880?e=1689811200&v=beta&t=7PIx3yrg81ZbxC2b5VLbSvfR51A3iaKhgWntq3LM7FY",
    },
    {
        testimonial:
            "Murtaza willingly takes initiative and is a natural leader which truly makes him stand out from the crowd. He is always there to help his team and has great communication skills.",
        name: "Anonymous",
        designation: "VP",
        company: "Goldman Sachs",
        image: "https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export {
    services,
    technologies,
    experiences,
    testimonials,
    projects,
    introduction,
};
