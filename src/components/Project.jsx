
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
        <div className="px-4 md:px-6 py-6 lg:pl-24 lg:pr-48">
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


const projectPage = [
  {
    title: "Shopa",
    description: "A sleek MERN e-commerce site with fast checkout, secure login, and clean UI for modern shopping.",
    longDescription: "Shopa is a modern e-commerce web application built with the MERN stack that delivers a seamless shopping experience. From browsing curated products to completing secure checkouts, Shopa showcases clean UI design, efficient data management, and scalable backend architecture. The platform emphasizes performance and security, ensuring fast load times, smooth user flows, and safe transactions for buyers.",
    keyFeatures: 
      [
        'Product Browsing & Categories — Explore products by type, price, or popularity.', 
        'Cart & Checkout System — Full e-commerce flow from cart to order confirmation.', 
        'User Authentication — Secure signup/login with JWT or OAuth.', 
        'Order Tracking & Management — Manage orders and monitor shipping status.',
        'Optimized Performance — Built with attention to code quality and speed.',
        ''
    ],
    techStack: {
      Frontend: ['React', 'Tailwind CSS'],
      Backend: ['Node.js', 'Express.js'],
      Database: ['MongoDB'],
      Authentication: ['JWT', 'OAuth 2.0', 'Bcrypt']
    },
    image: "Screenshot 2025-05-05 160356.png",
    link: "https://shopa-delta.vercel.app/",
  },

  {
    title: "Afrolog",
    description: "A full-stack African-inspired blog built with the MERN stack — scalable, fast, and content-rich.",
    longDescription: "Afrolog is a full-stack blog platform dedicated to sharing stories, culture, and perspectives about Africa. Built using the MERN stack (MongoDB, Express.js, React, Node.js), it features a dynamic and responsive interface that allows users to explore, read, and engage with articles seamlessly. This project highlights my ability to build scalable and efficient full-stack applications, manage data-rich content, and implement clean UI/UX designs for a smooth reading experience.",
    keyFeatures: 
      [
        '📝 Full CRUD Blog System — Create, read, update, and delete posts easily.', 
        '🌍 Africa-Centered Content — Focused on topics that celebrate and explore the continent.', 
        'Category & Tag Filtering — Browse posts by category or topic.', 
        'Secure Admin Dashboard — Manage posts, users, and comments..',
        'Fast & Responsive UI — Optimized React frontend for smooth navigation.'
    ],
    techStack: {
      Frontend: ['React', 'React Router', 'Tailwind CSS'],
      Backend: ['Node.js', 'Express.js'],
      Database: ['MongoDB'],
      Authentication: ['JWT']
    },
    image: "Screenshot 2025-05-29 203603.png",
    link: "https://mern-blog-one-ruby.vercel.app/",
  },

  {
    title: "Cheta Auhentication App",
    description: "A secure MERN authentication app with OAuth login and OTP-based password resets.",
    longDescription: "Cheta is a full-featured authentication system built using the MERN stack (MongoDB, Express.js, React, Node.js). It provides a secure and modern login experience that supports both traditional email/password login and OAuth-based authentication (e.g., Google, GitHub, etc.). To enhance account recovery, Authify integrates OTP (One-Time Password) functionality for password reset, ensuring users can safely regain access to their accounts. The app demonstrates best practices in user security, including hashed passwords, token-based sessions, and rate-limited OTP verification.",
    keyFeatures: 
      [
        '🔐 Email & Password Authentication — Secure signup and login flow with JWT or session tokens.', 
        '🌐 OAuth Integration — Seamless login using external providers (e.g., Google).', 
        '📱 OTP-based Password Reset — Send verification codes via email for safe password recovery.', 
        '🧰 MERN Stack Architecture — End-to-end implementation using MongoDB, Express, React, and Node.js.',
        '🧑‍💻 Scalable Backend Design — Modular routes and controllers for easy integration into larger projects'
    ],
    techStack: {
      Frontend: ['React', 'Tailwind CSS'],
      Backend: ['Node.js', 'Express.js'],
      Database: ['MongoDB'],
      Authentication: ['JWT', 'OAuth 2.0', 'OTP', 'Bcrypt']
    },
      image: "chetaimg.png",
      link: "https://cheta-nine.vercel.app/",
  },

  {
    title: 'MindMentor — AI Chat App for Life, Discipline & Growth',
    description: 'An AI chat coach that helps users build discipline, focus, and personal growth through conversation.',
    longDescription: "MindMentor is an AI-powered chat application designed to help users improve their mindset, discipline, and personal growth. Using advanced conversational AI, the app provides personalized coaching, daily motivation, and actionable advice to help users stay consistent and focused. Built with a modern tech stack and clean UI, MindMentor demonstrates the integration of AI-driven interactions into real-world web applications.",
  keyFeatures:
    [
      'AI Coaching Chat — Engage with an intelligent coach that guides you on life, discipline, and success.',
      'Real-Time Messaging — Smooth and interactive chat interface.',
      'Daily Motivation & Tracking — Get reminders and track growth progress.',
      'Customizable Personality Modes — Choose between strict, friendly, or motivational coaching styles.',
      'Secure Conversations — End-to-end message security for user privacy.'
    ],
  techStack: 
    {
      Frontend: ['React', 'Tailwind CSS'],
      Backend: ['Node.js', 'Express.js'],
      Database: ['MongoDB'],
      AIIntegration: ['OpenAI API']
    },
    image: "desktop-preview.jpg",
    link: "https://country-rest-api-black.vercel.app/",
  },

  {
    title: "World Countries API",
    description: "This was a challenge from Frontend Mentors to test the use of API and also the developer's UI/UX skills.",
    longDescription: "The World Countries API project was built as part of a Frontend Mentor challenge to test API integration skills and UI/UX design proficiency. It allows users to explore data about countries worldwide — including population, region, capital, and flags — through a clean and interactive interface. The project demonstrates strong frontend development, data fetching, and responsive design practices using modern tools.",
    keyFeatures: 
      [
        'REST API Integration — Fetch and display live country data.', 
        'Search & Filter — Quickly find countries by name or region.', 
        'Dark/Light Mode — Clean UI with theme switching for accessibility.', 
        'Responsive Design — Works smoothly across all device sizes.'
    ],
    techStack: {
      Frontend: ['React', 'Axios', 'Tailwind CSS'],
      APISource: ['REST Countries API']
    },
    image: "desktop-preview.jpg",
    link: "https://country-rest-api-black.vercel.app/",
  },

  {
    title: 'Lib Queue — GraphQL Library with Queuing',
  Description: 'GraphQueue is a lightweight GraphQL library that introduces built-in queuing and task scheduling to handle async operations efficiently. It ensures that queries and mutations are processed in sequence or batch — improving reliability and performance in data-heavy systems. This project highlights advanced backend engineering concepts such as GraphQL schema design, queue management, and asynchronous job execution, showcasing backend architecture expertise.',
  keyFeatures:
    [
    'GraphQL Query Queuing — Ensures ordered and reliable execution.',
    'Async Task Handling — Optimized for long-running or delayed jobs.',
    'Custom Middleware Support — Extendable for caching, logging, and validation.',
    'Lightweight Integration — Plug directly into Node.js GraphQL servers.'
    ],
 techStack:
  {
    Core: ['Node.js', 'GraphQL'],
  Queueing: ['BullMQ '],
  Integration: ['Express / Apollo Server,']
  },
    image: "graphqueueimg.png",
    link: "https://www.npmjs.com/package/graphqueue",
  },
  
  {
    title: 'Maitask — Role-Based Task Management App',

  Description: 'Maitask is a role-based access control (RBAC) task management application built to streamline team productivity and collaboration. It allows organizations to assign roles, manage permissions, and track progress across teams in real-time. With features like role-based dashboards, task prioritization, and secure user management, Maitask demonstrates best practices in building scalable, secure, and collaborative full-stack applications.',
  keyFeatures:
    [
      'RBAC System — Assign roles (Admin, Manager, User) with fine-grained permissions.',
      'Task Creation & Tracking — Manage projects efficiently with task statuses and deadlines.',
      'Team Collaboration — Share tasks, update progress, and monitor performance.',
      'Secure Authentication — Role-protected routes and actions.'
    ],
  techStack:
    {
      Frontend: ['React', 'Tailwind CSS', 'React Router'],
      Backend: ['Node.js', 'Express.js'],
      Database: ['MYSQL'],
      Authentication: ['JWT', 'Role-based middleware']
    },
    image: "maitaskimg.png",
    link: "",
  }
];