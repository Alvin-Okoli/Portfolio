
export default function Footer() {

    return (
        <footer className="py-4">
            <div className=" bg-gray-700 py-4">
                <img src="dev-vin.png" alt="" className="w-48 mx-auto"/>
                {/* <div className="p-2 text-xl text-orange-500 font-bold">Grafting softwares to life</div> */}
            </div>
            
            <div className="text-2xl my-4 flex justify-center gap-4">
                <img src="message-svgrepo-com.svg" alt="" className="w-8"/>
                <img src="github-svgrepo-com.svg" alt="" className="w-8"/>
                <img src="linkedin-161-svgrepo-com.svg" alt="" className="w-8"/>
                <img src="xlogo.svg" alt="" className="w-8"/>
            </div>
            <div className="container mx-auto text-center">
                <p className="text-sm">©2025 Devin. All rights reserved.</p>
            </div>
        </footer>
    );
}