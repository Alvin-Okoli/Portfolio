
export default function About(){

    return(
        <div className="px-2">
            <div className="text-5xl font-bold my-6">About <span className="text-orange-500">Me</span></div>

            <div className="px-4">
                <div className="font-bold">Technologies used:</div>
                <li><span className="font-semibold">Frontend: </span> React & tailwindcss. </li>
                <li><span className="font-semibold">Backend: </span> Node.js and express. </li>
                <li><span className="font-semibold">Game developement: </span> Phaser.</li>
                <li><span className="font-semibold">Database: </span> MongoDB.</li>
            </div>

            {/* <div className="text-2xl font-bold mt-6">Experience</div> */}

            <div className="border-b-2 py-7 border-gray-500 mb-4">
                <div className="my-2 font-semibold">May 2025 - present</div>
                <div className="font-semibold">Software engineer</div>
                <div className="font-semibold">Halofy Africa 🎨</div>
                <div className="text-gray-500 my-2">
                    Currently working with the Halofy team on a full-stack project that combines my passion for stunning UI/UX, scalable architecture, and optimized databases. This project features a responsive and intuitive frontend built with React and tailwindcss, ensuring a seamless user experience across devices. The backend is powered by Node.js and Express, providing a robust and scalable architecture to handle high traffic and complex data interactions. The database is designed with MongoDB, allowing for efficient data management and retrieval.
                    Key features include:
                    <ul className="list-disc ml-6 mt-2">
                        <li>Responsive design for optimal user experience on all devices.</li>
                        <li>Scalable architecture to handle high traffic and complex data interactions.</li>
                        <li>Optimized database for efficient data management and retrieval.</li>
                        <li>Intuitive UI/UX design for enhanced user engagement.</li>
                        <li>Integration of modern web technologies for a seamless experience.</li>
                    </ul>
                </div>
            </div>

            <div className="border-b-2 py-7 border-gray-500 my-4">
                <div className="my-2 font-semibold">2024-present</div>
                <div className="font-semibold">Freelance web designer</div>
                <div className="font-semibold">Devin Corp</div>
                <div className="text-gray-500">
                    I have been a freelancer at Devin:
                    <li>Worked independently on a variety of web development projects for clients via the Devin platform, delivering full-stack solutions with a focus on clean code, performance, and user experience.</li>

                    <li>Built and maintained websites and web applications using modern JavaScript frameworks and libraries, including React, Node.js, and Express.</li>

                    <li>Collaborated with clients to gather requirements, provide technical consultation, and implement custom features that aligned with their business goals.</li>

                    <li>Integrated third-party APIs, optimized applications for SEO and speed, and ensured mobile responsiveness across devices.</li>

                    <li>Managed end-to-end deployment, testing, and debugging, delivering high-quality software on time and within scope.</li>

                    <li>Gained hands-on experience in freelancing, client communication, and agile project delivery over the course of a year.</li>
                </div>
            </div>

            <a href="Okoli_Alvin_Resume.pdf" download="Okoli_Alvin_Resume.pdf" className="my-2 hover:text-orange-500">Download Resume</a>
        </div>
    )
}