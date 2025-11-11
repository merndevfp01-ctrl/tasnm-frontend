import { Headset, Plane, RotateCcw } from "lucide-react"

function Shipping() {
    return (
        <>
            {/* Shipping Section */}
            < div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 text-sm p-20" >
                <div className="flex flex-col justify-center items-center text-center space-y-3">
                    <div className="border border-black rounded-full p-2 hover:border-orange-600 hover:text-white hover:bg-orange-600 duration-600">
                        <Plane />
                    </div>
                    <h3 className="font-semibold">FREE SHIPPING</h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="flex flex-col justify-center items-center text-center space-y-3">
                    <div className="border border-black rounded-full p-2 hover:border-orange-600 hover:text-white hover:bg-orange-600 duration-600">
                        <Headset className="" />
                    </div>
                    <h3 className="font-semibold">CUSTOMER SUPPORT</h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="flex flex-col justify-center items-center text-center space-y-3">
                    <div className="border border-black rounded-full p-2 hover:border-orange-600 hover:text-white hover:bg-orange-600 duration-600">
                        <RotateCcw />
                    </div>
                    <h3 className="font-semibold">15 DAYS MONEY BACK</h3>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div >
        </>
    )
}

export default Shipping