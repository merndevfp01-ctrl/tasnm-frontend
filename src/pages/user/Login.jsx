import { Eye } from "lucide-react"

function Login() {
    return (
        <div className="w-full flex justify-center items-center p-10 md:p-0">
            <div className="w-full flex flex-col md:flex-row items-center md:max-w-4xl border ">
                <div className="relative">
                    <img
                        src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/12.jpg"
                        alt=""
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute bottom-5 left-0 text-white right-0 p-10">
                        <h1 className="text-xl md:text-3xl font-bold">Where style meets you..</h1>
                        <p className="">Login to find outfits that defines your presonality</p>
                    </div>
                </div>
                <div className="w-full md:w-[50%] flex flex-col space-y-8 p-5 md:p-10">
                    <div>
                        <h1 className="text-xl md:text-2xl text-gray-800 font-semibold">
                            Welcome back to Tasnm!
                        </h1>
                        <p className="text-sm text-gray-600">Sign in your account</p>
                    </div>
                    <div className="w-full space-y-4">
                        <div className="text-sm text-700 space-y-2">
                            <label >Email</label>
                            <input
                                type="text"
                                placeholder="Enter email"
                                className="border rounded-lg w-full p-2"
                            />
                        </div>
                        <div className="text-sm text-700 space-y-2">
                            <label >Password</label>
                            <div className="border rounded-lg w-full flex justify-between items-center ">
                                <input
                                    type="text"
                                    placeholder="Enter password"
                                    className="w-full p-2 rounded-lg outline-none"
                                />
                                <div className="border-l p-2">
                                    <Eye className="h-4 w-4" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" />
                                <label className="text-gray-800">Remember me</label>
                            </div>
                            <button className="text-gray-500">
                                Forgot Password?
                            </button>
                        </div>
                    </div>
                    <button className="w-full bg-black text-white rounded-lg py-2">
                        Login
                    </button>
                    <button className="text-xs text-gray-600">
                        Don't have any account?
                        <span className="text-blue-500">Register</span>
                    </button>
                </div>

            </div>
        </div>
    )
}
export default Login