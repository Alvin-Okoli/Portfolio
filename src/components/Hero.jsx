
export default function Hero() {

  return (
    <div className="md:grid grid-cols-2 md:px-6 md:pt-4 lg:px-24 relative">
        <div className="pt-10 px-2 mb-10">
            <div className="mb-2 font-bold md:text-lg lg:text-2xl">Hello, I'm <span className="text-orange-500">Alvin</span>👋🏾</div>
            <div className="text-5xl  md:text-7xl mb-3 font-bold lg:text-9xl"><span className="text-orange-500">Full</span>-Stack Developer 👨🏾‍💻</div>
            <div className="font-light md:text-lg lg:text-2xl lg:mt-5">Welcome to my space! I got into tech to pursue a career — but now, I'm hooked on building cool stuffs. I build stunning websites and scalable backend architecture. Let's build something together.</div>
        </div>

        <div className="h-80 w-80 mx-auto rounded-full pt-4 md:pt-10 md:mt-10 md:border md:border-orange-500 md:bg-orange-400 md:shadow-lg lg:h-96 lg:w-96 lg:absolute lg:right-32 lg:pt-12 lg:mt-16">
            <div className=" h-60 w-60 rounded-full mx-auto bg-[url('/dp1.png')] bg-no-repeat bg-top p-10 lg:h-72 lg:w-72"></div>
        </div>
    </div>
  );
}