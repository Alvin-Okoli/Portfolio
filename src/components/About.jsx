import { useState } from "react";

const workExperiences = [
    {
        duration: "May 2025 - present",
        role: "Software Engineer",
        company: "Halofy Africa 🎨",
        description: "Currently working with the Halofy team on a full-stack project that combines my passion for stunning UI/UX, scalable architecture, and optimized databases. This project features a responsive and intuitive frontend built with React and tailwindcss, ensuring a seamless user experience across devices. The backend is powered by Node.js and Express, providing a robust and scalable architecture to handle high traffic and complex data interactions. The database is designed with MongoDB, allowing for efficient data management and retrieval. ",
        responsibilities: [
        "Responsive design for optimal user experience on all devices.",
        "Scalable architecture to handle high traffic and complex data interactions.",
        "Optimized database for efficient data management and retrieval.",
        "Intuitive UI/UX design for enhanced user engagement.",
        "Integration of modern web technologies for a seamless experience.",
        ],
        technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    },
    {
        duration: "2024-present",
        role: "Freelance Web Designer",
        company: "Devin Corp 🪙",
        description: "Freelance web development projects for clients via the Devin platform.",
        responsibilities: [
        "Worked independently on a variety of web development projects for clients, delivering full-stack solutions with a focus on clean code, performance, and user experience.",
        "Built and maintained websites and web applications using modern JavaScript frameworks and libraries, including React, Node.js, and Express.",
        "Collaborated with clients to gather requirements, provide technical consultation, and implement custom features that aligned with their business goals.",
        "Integrated third-party APIs, optimized applications for SEO and speed, and ensured mobile responsiveness across devices.",
        "Managed end-to-end deployment, testing, and debugging, delivering high-quality software on time and within scope.",
        "Gained hands-on experience in freelancing, client communication, and agile project delivery over the course of a year. This has honed my skills in full-stack development, project management, and client relations, preparing me for future challenges in the tech industry. ",
        ],
    },
    ];

const skills = [
        {
            category: "Frontend",
            tools: ["React", "Tailwind CSS"],
        },
        {
            category: "Backend",
            tools: ["Node.js", "Express"],
        },
        {
            category: "Game Development",
            tools: ["Phaser"],
        },
        {
            category: "Database",
            tools: ["MongoDB"],
        },
        {
            category: "Tools",
            tools: ["Git", "GitHub", 'Postman', 'Docker', 'WebSockets', 'RESTful APIs'],
        }
    ];

export default function About(){
    const [clicked, setClicked] = useState(false);

        

    return(
        <div className="px-4 md:px-6 lg:pl-24 lg:pr-48">
            <div className="text-5xl md:text-7xl font-bold my-6 mb-10">About <span className="text-orange-500">Me</span></div>

            <div className="px-">
                <div className="text-2xl md:text-5xl font-bold my-6">Technologies I use:</div>
                <ul className="list-outside list-disc mx-6">
                    {skills.map((skill, index) => (
                        <li key={index}><span className="font-semibold md:text-xl">{skill.category}: </span> {skill.tools.join(', ')} </li>
                    ))}
                </ul>
            </div>

            <div className="text-2xl md:text-5xl font-bold my-6">Experience</div>

            { workExperiences.map((experience, index) =>
                <div key={index} className="border-b-2 py-7 border-gray-500 mb-4 lg:">
                    <div className="my-2 font-semibold md:text-2xl">{experience.duration}</div>
                    <div className="font-semibold md:text-2xl">{experience.role}</div>
                    <div className="font-semibold md:text-2xl">{experience.company}</div>
                    <div className="text-gray-500 my-2 md:text-xl md:my-6">
                        {experience.description}
                        Key features include:
                        <ul className="list-disc ml-6 mt-2">
                            {experience.responsibilities.map((feature, featureIndex) => (
                                <li key={featureIndex}>{feature}</li>
                            ))}
                        </ul>
                    </div>
            </div>
            )}

            <a href="Okoli_Alvin_Resume.pdf" download="Okoli_Alvin_Resume.pdf" className="my-2 hover:text-orange-500 underline text-center">Download Resume</a>

        </div>
    )
}

const skills = [
        {
            category: "Frontend",
            tools: ["React", "Tailwind CSS"],
        },
        {
            category: "Backend",
            tools: ["Node.js", "Express", "TypeScript"],
        },
        {
            category: "Game Development",
            tools: ["Phaser"],
        },
        {
            category: "Database",
            tools: ["MongoDB", "MYSQL"],
        },
        {
            category: "Tools",
            tools: ["Git", "GitHub", 'Postman', 'Docker', 'WebSockets', 'RESTful APIs', "GraphQL"],
        }
    ];
