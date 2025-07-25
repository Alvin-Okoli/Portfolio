
export default function Project(){
    const projects = [
  {
    title: "Shopa",
    description: "A full-stack e-commerce site.",
    longDescription: "Discover our curated selection of products and categories at Shopa. Fast shipping, secure checkout, and top-notch customer service! Showcasing my latest project: a MERN stack e-commerce site!💻 Built with React, Node.js, Express, and MongoDB. Code quality and performance were top priorities.",
    image: "Screenshot 2025-05-05 160356.png",
    link: "https://shopa-delta.vercel.app/",
  },
  {
    title: "Afrolog",
    description: "A full-stack blog that speaks about Africa.",
    longDescription: "A fully functional blog site built using the MERN (MongoDB, Express.js, React.js, Node.js) stack! This blog site showcases my skills in building scalable and efficient web applications using the MERN stack.",
    image: "Screenshot 2025-05-29 203603.png",
    link: "https://mern-blog-one-ruby.vercel.app/",
  },
  {
    title: "Law Firm Website",
    description: "A comprehensive website for law firms, featuring attorney profiles and practice areas.",
    longDescription: "This law firm website is designed to provide a robust online presence for law firms, featuring attorney profiles, practice areas, and a blog for sharing legal insights. Built with a focus on credibility and trust, this website features a clean design, easy navigation, and a responsive layout.",
    image: "Screenshot 2025-07-25 014222.png",
    link: "https://uche-ebrim-co.vercel.app/",
  },
  {
    title: "World Countries API",
    description: "This was a challenge from Frontend Mentors to test the use of API and also the developer's UI/UX skills.",
    longDescription: "This project is a solution to the Frontend Mentor challenge, designed to test API integration and UI/UX skills. It fetches and displays country data from a REST API, featuring RESTful API, image optimization, and theme switch.",
    image: "desktop-preview.jpg",
    link: "https://country-rest-api-black.vercel.app/",
  },
  {
    title: "Fun Pong",
    description: "A fun single 2D arcade pong game.",
    longDescription: "This game is a classic arcade-style game built using Phaser 3. This game features simple yet addictive gameplay, where you try to keep the ball from hitting the bottom corner of the screen, you get 3 lives and each hit of the ball is a point.",
    image: "Screenshot 2025-05-27 153442.png",
    link: "https://fun-pong.vercel.app/",
  }
];

    return(
        <div className="md:px-6 py-6 lg:pl-24 lg:pr-48">
            <div className="text-5xl md:text-7xl font-bold my-6 px-2">
                <div>Recent</div>
                <div className="text-orange-500">Projects</div>
            </div>

            <div>
                {projects.map((project, index) => (
                    <div key={index} className="mx-2 py-4 rounded-2xl my-6 grid grid-cols-3 gap-x-2 hover:bg-gray-100 shadow md:gap-x-5 relative">
                        <a href={project.image} target="_blank">
                            <img src={project.image} alt="" className="max-h-60 cursor-pointer"/>
                        </a>

                        <div className="col-span-2 lg:px-2">
                            <a href={project.link} target="_blank">
                                <div className="font-bold text-xl md:text-2xl">{project.title}</div>
                            </a>

                            <p className="text-gray-700 md:text-xl my-2">{project.description}</p>

                            <p className="text-gray-700 my-2 hidden md:text-xl lg:block"> {project.longDescription}..</p>

                            <a href={project.link} target="_blank">
                                <div className="absolute bottom-1 animate-pulse font-bold hover:underline hover:text-orange-500 cursor-pointer">Click to preview</div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
