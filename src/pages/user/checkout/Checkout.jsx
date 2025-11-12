import { Folder } from "lucide-react"
import { Link } from "react-router-dom"
import SiteLayout from "../../layouts/SiteLayout"

function Checkout() {
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
                    <h1 className="text-4xl">CHECKOUT</h1>
                    <div className="flex justify-center items-center gap-2 text-sm mt-5">
                        <Link to={"/"}>
                            HOME
                        </Link> |
                        <p>Checkout</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-8 p-14">
                <div className="flex gap-2 bg-gray-100 border-t-2 border-orange-600 p-4">
                    <Folder className="h-4 w-4 text-blue-400" />
                    <div className="flex items-center text-gray-500 font-semibold text-xs">
                        <p>RETURNING CUSTOMER?</p>
                        <button className="hover:text-orange-600 hover:duration-400">
                            CLICK HERE TO LOGIN
                        </button>
                    </div>
                </div>
                <div className=" text-gray-500 border border-gray-300 rounded-md p-4 space-y-6">
                    <p className="">If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.</p>
                    {/* Form */}
                    <div className="flex items-center gap-14">
                        <div className="w-full">
                            <label className="">Username or email</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 p-2"
                            />
                        </div>
                        <div className="w-full">
                            <label className="">Username or email</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 p-2"
                            />
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className="flex items-center gap-4">
                        <button className="bg-gray-700 text-white text-sm py-1.5 px-6">
                            Login
                        </button>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" />
                            <label className="text-gray-500 text-sm">Remember me</label>
                        </div>
                    </div>
                    {/* Buttons */}
                    <button>
                        Lost your password?
                    </button>
                </div>
                <div className="flex gap-2 bg-gray-100 border-t-2 border-orange-600 p-4">
                    <Folder className="h-4 w-4 text-blue-400" />
                    <div className="flex items-center text-gray-500 font-semibold text-xs">
                        <p>HAVE A COUPON?</p>
                        <button className="hover:text-orange-600 hover:duration-400">
                            CLICK HERE TO ENTER YOUR CODE
                        </button>
                    </div>
                </div>
                <div>
                    <h1 className="text-xl font-light mb-4">
                        SHIPPING ADDRESS
                    </h1>
                </div>
            </div>
        </div>
        </SiteLayout>
    )
}

export default Checkout