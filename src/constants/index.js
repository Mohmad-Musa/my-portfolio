import { t } from "maath/dist/misc-19a3ec46.esm";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    aherobg,
    carhub,
    nike,
    iphone,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full-Stack Developer",
    icon: mobile,
  },
  {
    title: "Bachelor’s degree in Software Engineering",
    icon: backend,
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
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Node.js",
        icon: nodejs,
    },
    
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "git",
        icon: git,
    },

    {
        name: "docker",
        icon: docker,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "Three.js",
        icon: threejs,
    },


];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Octopus",
    icon: starbucks,
    iconBg: "#fff",
    date: "Jan 2022 - Mar 2023",
    points: [
      "Worked with GSAP and Three.js to create dynamic and engaging animations for several agency websites, which enhanced user interaction and visual appeal",
      "Managed large databases and optimized queries for efficient data retrieval and smooth performance.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developed and maintained responsive web applications, ensuring page load times under 3 seconds and optimizing APIs for better data handling, improving response times by 20%.",
    ],
  },

  {
    title: "Full-Stack Developer",
    company_name: "Skyfloyed",
    icon: meta,
    iconBg: "#FFF",
    date: "Apr 2023 - Jan 2025",
    points: [
      "Ensuring smooth performance with page load times under 3 seconds and optimizing APIs for efficient data handling, improving response times by 20-30%.",
      "Working with databases to manage large datasets efficiently and prevent performance bottlenecks.",
      "Collaborating with designers to create intuitive user interfaces and enhance front-end usability and accessibility.",
      "Writing clean, maintainable, and scalable code while following best practices in web development.",
    ],
  },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Award Winning Website",
        description:
        "clone of Zentry award wining website The website is fully responsive and compatible with all browsers, ensuring an optimal user experience across desktops, tablets, and mobile devices.",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "Gsap",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: aherobg,
        source_code_link: "https://mohmad-musa.github.io/Awaard-wining/",
    },
    {
        name: "Iphone 15 Pro",
        description:
            " Introducing an immersive iPhone 15 Pro showcase designed to elevate user experience through stunning 3D models and a visually appealing user interface.allows users to explore the iPhone from every angle.",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "Gsap",
                color: "green-text-gradient",
            },
            {
                name: "Three.js",
                color: "pink-text-gradient",
            },
        ],
        image: iphone,
        source_code_link: "https://mohmad-musa.github.io/Iphone-15-pro/",
    },
    {
        name: "Nike",
        description:
        "the Nike  website is designed to provide an aesthetically pleasing experience for users seeking the latest Nike footwear.Utilizing a clean layout,and enhancing product visibility with friendly-layout",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "Tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: nike,
        source_code_link: "https://mohmad-musa.github.io/Nike-Shop/",
    },
    {
        name: "Car ShowCase",
        description:
        "a virtual showroom designed for car enthusiasts and potential buyers alike. The site features a visually stunning layout, showcasing a diverse range of vehicles. Each listing includes detailed specifications",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "TypeScript",
                color: "green-text-gradient",
            },
            {
                name: "Next.js",
                color: "pink-text-gradient",
            },
        ],
        image: carhub,
        source_code_link: "https://car-showcase-1gjt.vercel.app/",
    },
    {
        name: "Health Monitoring",
        description:
            "web-based platform empowers healthcare professionals by providing real-time access to patient heart rate data. and leverage this critical information to diagnose conditions and develop tailored treatment plans ",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "Mongodb",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/Mohmad-Musa",
    },
  
    {
        name: " Barber Booking ",
        description:
            "designed and implemented a fully functional booking website for barber appointments.The website incorporates three user roles: barber, user, and admin, each with their own set of privileges and features.",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "Restapi",
                color: "green-text-gradient",
            },
            {
                name: "Gsap",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/Mohmad-Musa",
    },
    {
        name: "Estate Dashboard",
        description:
            " Built responsive and browser-compatible webpages using with features as :  User Management, Content Management, Analytics and Reporting ,System Configuration ,Notification Management.",
        tags: [
            {
                name: "Reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "Taillwind",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/Mohmad-Musa",
    },
];

export { services, technologies, experiences, testimonials, projects };