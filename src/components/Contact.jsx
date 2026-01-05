import { useState } from "react";

export default function Contact() {
    const contactFormFields = [
        {
            label: "Name",
            type: "text",
            placeholder: "Your Name",
        },
        {
            label: "Email",
            type: "email",
            placeholder: "Your@email.com",
        },
        {
            label: "Phone",
            type: "tel",
            placeholder: "Phone Number",
        },
        {
            label: "Subject",
            type: "text",
            placeholder: "Subject",
        },
    ];

    const [info, setInfo] = useState("");

    async function copyToClipboard(text) {
            try {
                await navigator.clipboard.writeText(text);
                setInfo("Copied to clipboard! 🎉");
                setTimeout(() => {
                    setInfo("");
                }, 2000);
            }
            catch (err) {
                console.error('Failed to copy: ', err);
                setInfo("Failed to copy! 😢");
                setTimeout(() => {
                    setInfo("");
                }, 2000);
            }
        }

    return(
        <div className="px-4 my-6 md:px-6 lg:pl-24 lg:pr-48 lg:mt-30 relative">
            <div className='absolute bottom-[-20px] left-1/5 font-bold text-2xl text-black'>{info}</div>
            <div className="text-5xl font-bold my-6">Contact</div>
            <div>Are you looking on building something good, let's work together. You could contact me:</div>

            <div>
                <div className="grid grid-cols-2 gap-x-5">
                    {contactFormFields.map((field, index) => (
                        <div key={index} className="my-2">
                            <label>
                                <div className="font-semibold">{field.label}</div>
                                <input 
                                type={field.type} 
                                className="border-2 border-gray-300 rounded-lg p-2 w-full my-1" 
                                placeholder={field.placeholder}/>
                            </label>
                        </div>
                    ))}
                    
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

                <div className="grid lg:grid-cols-2 gap-x-14">
                    <div className='px-4 py-6 lg:my-10 md:px-20 flex justify-between items-center bg-gray-100  lg:h-24'>
                        <div>
                            <div className='mb-2 text-black text-2xl font-semibold'>Call now</div>
                            <div className='text-sm'>Copy to Clipboard</div>
                        </div>
                        <div onClick={()=>copyToClipboard('08159039608')} className='text-2xl'>📋</div>
                    </div>

                    <div className='px-4 py-6 my-4 lg:my-10 md:px-20 flex justify-between items-center bg-gray-100  lg:h-24'>
                        <div>
                            <div className='mb-2 text-black text-2xl font-semibold'>Whatsap</div>
                            <div className='text-sm'>Chat with us</div>
                        </div>
                        <a 
                            href='https://wa.me/2348059083740' 
                            className='bg-green-500 p-4 px-6 rounded text-xl text-white font-semibold'
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            chat
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}