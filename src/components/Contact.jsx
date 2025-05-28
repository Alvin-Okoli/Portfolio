
export default function Contact() {

    return(
        <div className="px-2 my-6">
            <div className="text-5xl font-bold my-6">Contact</div>
            <div>Are you looking on building something good, let's work together.You could contact me on:</div>

            <div>
                <div className="flex gap-2">
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
                </div>

                <div className="my-2">
                    <label>
                        <div className="font-semibold">Message</div>
                        <textarea className="border-2 border-gray-300 rounded-lg p-2 w-full h-32 my-1" placeholder="Your message here..."></textarea>
                    </label>
                </div>
            </div>

            <button className="w-full bg-orange-500 text-white rounded-xl p-2 my-4">submit</button>
        </div>
    )
}