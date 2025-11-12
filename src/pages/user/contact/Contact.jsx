import { Locate, Mail, Phone } from "lucide-react"
import { Link } from "react-router-dom"
import SiteLayout from "../../layouts/SiteLayout"

function Contact() {
    return (
        <SiteLayout>
            <div className="w-full">
                <div className="relative w-full h-96 overflow-hidden shadow-lg group  ">
                    <img
                        src="https://as1.ftcdn.net/v2/jpg/17/04/32/58/1000_F_1704325805_aLhcj2PTtIt1q8zHJA6lJH0ILMehjxWl.jpg"
                        alt="bag"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0  flex flex-col item-center justify-center text-center text-white overlay">
                        <h1 className="text-4xl">CONTACT US</h1>
                        <div className="flex justify-center items-center gap-2 text-sm mt-5">
                            <Link to={"/"}>
                                HOME
                            </Link> |
                            <p>CONTACT US</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-start gap-4 p-8 md:p-20">
                    <div className="flex flex-col w-full md:w-[50%] text-gray-600 space-y-4">
                        <h1 className="text-3xl text-black font-semibold">CONTACT US</h1>
                        <p>Email, call or complete the form to learn how tasnm can solve your messageing problem</p>
                        <div className="flex items-center gap-2">
                            <Locate size={16} />
                            <p>123 Main Street, Anytown,CA 12345 USA.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone size={16} />
                            <p>(800) 0123 456 789</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={16} />
                            <p>tasnm@gmail.com</p>
                        </div>
                    </div>
                    <div className="w-full md:w-[50%] border rounded-md shadow-2xl space-y-4 p-8">
                        <h1 className="text-xl font-semibold">Get In Touch</h1>
                        <div>
                            <label className="text-sm text-gray-600">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="border border-gray-400 w-full rounded-md outline-none p-2"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-600">Email</label>
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="border border-gray-400 w-full rounded-md outline-none p-2"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-gray-600">Enquiry</label>
                            <input
                                type="text"
                                placeholder="Enter your enquiry"
                                className="border border-gray-400 w-full rounded-md outline-none p-2"
                            />
                        </div>
                        <button className="bg-black p-2 text-white w-full rounded-md">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </SiteLayout>
    )
}

export default Contact