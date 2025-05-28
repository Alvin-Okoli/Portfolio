
export default function Hero() {

  return (
    <div className="md:grid grid-cols-2 md:px-6 md:pt-4">
        <div className="pt-10 px-2 mb-10">
            <div className="mb-2 font-bold">Hello, I'm <span className="text-orange-500">Alvin</span>👋🏾</div>
            <div className="text-5xl mb-3 font-bold"><span className="text-orange-500">Full</span>-Stack 👨🏾‍💻 Developer </div>
            <div className="font-light">Welcome to my space! I got into tech to pursue a career — but now, I'm hooked on building cool stuff. I build stunning websites and scalable backend architecture. Let's build something together.</div>
        </div>

        <div className="h-64 md:h-80 md:w-80 mx-auto rounded-full pt-4 md:pt-10 border border-orange-500 bg-orange-400 shadow-lg">
            <div className=" h-60 md:w-60 md:rounded-full mx-auto bg-[url('/dp1.png')] bg-no-repeat bg-top p-10"></div>
        </div>
    </div>
  );
}