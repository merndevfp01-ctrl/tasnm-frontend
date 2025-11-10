import { Facebook, SquareCheckBig } from "lucide-react"
import { FaFacebookF, FaTwitter } from "react-icons/fa6"
import { Link } from "react-router-dom"

function Login() {
    return (
        <div className="w-full">
            {/* Head Section */}
            <div className="relative w-full h-96 overflow-hidden shadow-lg group  ">
                <img
                    src="https://as1.ftcdn.net/v2/jpg/17/04/32/58/1000_F_1704325805_aLhcj2PTtIt1q8zHJA6lJH0ILMehjxWl.jpg"
                    alt="bag"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0  flex flex-col item-center justify-center text-center text-white overlay">
                    <h1 className="text-4xl">LOGIN</h1>
                    <div className="flex justify-center items-center gap-2 text-sm mt-5">
                        <Link to={"/"}>
                            HOME
                        </Link> |
                        <p>LOGIN</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start gap-10 p-5 md:p-20">
                {/* Login */}
                <div className="w-full md:w-[50%] space-y-6">
                    <h1 className="text-lg md:text-xl text-gray-800 border-b pb-2">
                        LOGIN
                    </h1>
                    <p className="text-gray-600">
                        Hello, Welcome your to account
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-full bg-blue-900 text-white flex items-center justify-center text-center gap-2 p-2">
                            <FaFacebookF />
                            <p className="text-sm">Sign In With Facebook</p>
                        </div>
                        <div className="w-full bg-blue-500 text-white flex items-center justify-center text-center gap-2 p-2">
                            <FaTwitter />
                            <p className="text-sm">Sign In With Twitter</p>
                        </div>
                    </div>
                    <div className="text-gray-500">
                        <label>Email Address <span className="text-red-600">*</span></label>
                        <input
                            type="text"
                            className="border h-5 p-5 w-full outline-none"
                        />
                    </div>
                    <div className="text-gray-500">
                        <label>Password <span className="text-red-600">*</span></label>
                        <input
                            type="text"
                            className="border h-5 p-5 w-full outline-none"
                        />
                    </div>
                    {/* Remember */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" />
                            <label>Remember me <span className="text-red-600">*</span></label>
                        </div>
                        <button className="text-orange-600">
                            Forgot Your Password?
                        </button>
                    </div>
                    {/* Login Button */}
                    <button className="bg-gray-200 py-2 px-4 text-sm text-gray-500">
                        LOGIN
                    </button>
                </div>
                {/* New Account */}
                <div className="w-full md:w-[50%] space-y-6">
                    <h1 className="text-lg md:text-xl text-gray-800 border-b pb-2">
                        CREATE A NEW ACCOUNT
                    </h1>
                    <p className="text-gray-600">
                        Hello, Welcome your to account
                    </p>
                    <div className="text-gray-500">
                        <label>Email Address <span className="text-red-600">*</span></label>
                        <input
                            type="text"
                            className="border h-5 p-5 w-full outline-none"
                        />
                    </div>
                    {/* SIGNUP Button */}
                    <button className="bg-gray-200 py-2 px-4 text-sm text-gray-500">
                        SIGNUP
                    </button>
                    <div className="space-y-6 text-gray-500">
                        <h1 className="text-lg md:text-xl text-gray-800">
                            SIGNUP TODAY AND YOU'LL BE ABLE TO:
                        </h1>
                        <div className="flex items-center gap-2">
                            <SquareCheckBig className="h-4 w-4 text-orange-600"/>
                            <p>Speed your way through the checkout.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <SquareCheckBig className="h-4 w-4 text-orange-600"/>
                            <p>Track your orders easily.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <SquareCheckBig className="h-4 w-4 text-orange-600"/>
                            <p>Keep a record of all your purchases.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login