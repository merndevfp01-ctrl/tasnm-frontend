import { Trash } from "lucide-react"
import { Link } from "react-router-dom"

function Shoppingcart() {
    return (
        <div className="w-full py-10 px-10 md:px-20 space-y-6">
            <div className="flex items-center gap-2">
                <Link
                to={"/"}
                 className="text-gray-600">
                    Home
                </Link>
                /
                <p>Shopping Cart</p>
            </div>
            <h1 className="text-2xl md:text-4xl font-light">SHOPPING CART</h1>
            <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Products */}
                <div className="w-full md:w-[65%] border rounded-xl space-y-4 p-4">
                    <div className="w-full flex gap-4 border-b pb-4">
                        <img
                            src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/10.jpg"
                            alt=""
                            className="h-24 w-24 object-cover rounded-xl"
                        />
                        <div className="w-full">
                            <div className="w-full flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-semibold">Shirt</h3>
                                    <p className="flex items-center gap-1 text-xs">
                                        <span>Size:</span>
                                        <span className="text-gray-500">Large</span>
                                    </p>
                                    <p className="flex items-center gap-1 text-xs">
                                        <span>Color:</span>
                                        <span className="text-gray-500">Sky Blue</span>
                                    </p>
                                </div>
                                <div>
                                    <Trash className="text-red-600 h-5 w-5" />
                                </div>
                            </div>
                            <div className="w-full flex justify-between items-start">
                                <h3 className="font-semibold">$145</h3>
                                <div className="flex items-center gap-4 bg-gray-200 shadow-md rounded-full py-1 px-3">
                                    <button>-</button>
                                    <p>{1}</p>
                                    <button>+</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Second */}
                    <div className="w-full flex gap-4 border-b pb-4">
                        <img
                            src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/10.jpg"
                            alt=""
                            className="h-24 w-24 object-cover rounded-xl"
                        />
                        <div className="w-full">
                            <div className="w-full flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-semibold">Shirt</h3>
                                    <p className="flex items-center gap-1 text-xs">
                                        <span>Size:</span>
                                        <span className="text-gray-500">Large</span>
                                    </p>
                                    <p className="flex items-center gap-1 text-xs">
                                        <span>Color:</span>
                                        <span className="text-gray-500">Sky Blue</span>
                                    </p>
                                </div>
                                <div>
                                    <Trash className="text-red-600 h-5 w-5" />
                                </div>
                            </div>
                            <div className="w-full flex justify-between items-start">
                                <h3 className="font-bold">$145</h3>
                                <div className="flex items-center gap-4 bg-gray-200 shadow-md rounded-full py-1 px-3">
                                    <button>-</button>
                                    <p>{1}</p>
                                    <button>+</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Third */}
                    <div className="w-full flex gap-4 border-b pb-4">
                        <img
                            src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/10.jpg"
                            alt=""
                            className="h-24 w-24 object-cover rounded-xl"
                        />
                        <div className="w-full">
                            <div className="w-full flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-semibold">Shirt</h3>
                                    <p className="flex items-center gap-1 text-xs">
                                        <span>Size:</span>
                                        <span className="text-gray-500">Large</span>
                                    </p>
                                    <p className="flex items-center gap-1 text-xs">
                                        <span>Color:</span>
                                        <span className="text-gray-500">Sky Blue</span>
                                    </p>
                                </div>
                                <div>
                                    <Trash className="text-red-600 h-5 w-5" />
                                </div>
                            </div>
                            <div className="w-full flex justify-between items-start">
                                <h3 className="font-bold">$145</h3>
                                <div className="flex items-center gap-4 bg-gray-200 shadow-md rounded-full py-1 px-3">
                                    <button>-</button>
                                    <p>{1}</p>
                                    <button>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Order Summary */}
                <div className="w-full md:w-[35%] border rounded-xl space-y-2 p-4">
                    <h1 className="text-lg font-bold mb-4">
                        Order Summary
                    </h1>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center">
                            <p className="text-gray-600">Subtotal</p>
                            <p className="font-semibold">$565</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-gray-600">Discount</p>
                            <p className="font-semibold text-red-600">$110</p>
                        </div>
                        <div className="flex justify-between items-center border-b pb-2">
                            <p className="text-gray-600">Delivery Fee</p>
                            <p className="font-semibold">$15</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-gray-600">Total</p>
                            <p className="font-semibold text-lg">$467</p>
                        </div>
                    </div>
                    <button className="w-full bg-black text-sm text-white py-2">
                        Go to Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Shoppingcart