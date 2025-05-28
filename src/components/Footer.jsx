
export default function Footer() {

    return (
        <footer className="py-4">
            <div className=" bg-gray-700 py-4">
                <img src="dev-vin.png" alt="" className="w-48 mx-auto"/>
                {/* <div className="p-2 text-xl text-orange-500 font-bold">Grafting softwares to life</div> */}
            </div>
            
            <div className="text-2xl my-4 flex justify-center gap-4 md:gap-8">
                <a href="https://github.com/Alvin-Okoli" target="_blank"><img src="github-svgrepo-com.svg" alt="" className="w-8 md:w-12"/></a>
                <a href="www.linkedin.com/in/alvin-okoli-b66a7033a" target="_blank"><img src="linkedin-161-svgrepo-com.svg" alt="" className="w-8 md:w-12"/></a>
                <a href="https://x.com/AlvinOkoli" target="_blank"><img src="xlogo.svg" alt="" className="w-8 md:w-12"/></a>
            </div>
            <div className="container mx-auto text-center">
                <p className="text-sm">&copy;2025 <span className="text-orange-400">Devin</span>. All rights reserved.</p>
            </div>
        </footer>
    );
}