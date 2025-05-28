
export default function Contact() {

    return(
        <div className="px-2 my-6 md:px-6 lg:pl-24 lg:pr-48">
            <div className="text-5xl font-bold my-6">Contact</div>
            <div>Are you looking on building something good, let's work together.You could contact me on:</div>

            <div>
                <div className="grid grid-cols-2 gap-x-5">
                    <div className="my-2">
                        <label>
                        <div className="font-semibold">Name</div>
                        <input type="text" className="border-2 border-gray-300 rounded-lg p-2 w-full my-1" placeholder="Your Name"/>
                    </label>
                    </div>
                    
                    <div className="my-2">
                        <label>
                        <div className="font-semibold">Email</div>
                        <input type="text" className="border-2 border-gray-300 rounded-lg p-2 w-full my-1" placeholder="Your@email.com"/>
                    </label>
                    </div>

                    <div className="my-2">
                        <label>
                        <div className="font-semibold">Phone</div>
                        <input type="text" className="border-2 border-gray-300 rounded-lg p-2 w-full my-1" placeholder="Phone Number"/>
                    </label>
                    </div>
                    
                    <div className="my-2">
                        <label>
                        <div className="font-semibold">Sunject</div>
                        <input type="text" className="border-2 border-gray-300 rounded-lg p-2 w-full my-1" placeholder="Subject"/>
                    </label>
                    </div>
                </div>

                <div className="my-2">
                    <label>
                        <div className="font-semibold">Message</div>
                        <textarea className="border-2 border-gray-300 rounded-lg p-2 w-full  h-32 my-1" placeholder="Your message here..."></textarea>
                    </label>
                </div>
            

                <div className="text-center">
                    <button className="w-full bg-orange-500 text-white md:text-xl lg:text-2xl rounded-4xl p-2 my-4  cursor-pointer hover:bg-orange-400 hover:ext-gray-700">submit</button>
                </div>
            </div>
        </div>
    )
}