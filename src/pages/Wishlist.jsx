import { X } from "lucide-react"
import { Link } from "react-router-dom"

function Wishlist() {
    return (
        <div className="w-full">
            <div className="relative w-full h-96 overflow-hidden shadow-lg group">
                <img
                    src="https://as1.ftcdn.net/v2/jpg/17/04/32/58/1000_F_1704325805_aLhcj2PTtIt1q8zHJA6lJH0ILMehjxWl.jpg"
                    alt="bag"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0  flex flex-col item-center justify-center text-center text-white overlay">
                    <h1 className="text-4xl">WISHLIST</h1>
                    <div className="flex justify-center items-center gap-2 text-sm mt-5">
                        <Link to={"/"}>
                            HOME
                        </Link> |
                        <p>Wishlist</p>
                    </div>
                </div>
            </div>
            {/* Table */}
            <div className="p-20">
                <table className="w-full border">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border-r"></th>
                            <th className="text-sm font-light border-r py-4">Images</th>
                            <th className="text-sm font-light border-r py-4">Product Name</th>
                            <th className="text-sm font-light border-r py-4">Unit Price</th>
                            <th className="text-sm font-light border-r py-4">Stock Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b text-center">
                            <td className="p-4 border-r"><X /></td>
                            <td className="p-4 border-r">
                                <img
                                    src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/10.jpg"
                                    alt=""
                                    className="h-28 w-20"
                                />
                            </td>
                            <td className="p-4 border-r">
                                <div className="flex justify-between text-sm text-gray-500 items-center">
                                    <p>VINTAGE SHOE</p>
                                    <button className="border border-gray-400 py-1 px-4 hover:text-white hover:bg-orange-600 hover:duration-500 hover:border-orange-600">
                                        QUICK VIEW
                                    </button>
                                </div>
                            </td>
                            <td className="p-4 border-r">$180.00</td>
                            <td className="p-4 border-r text-green-600">In Stock</td>
                            <td className="p-4 border-r">
                                <button className="border border-gray-400 py-1 px-4 hover:text-white hover:bg-orange-600 hover:duration-500 hover:border-orange-600">
                                    ADD TO CART
                                </button>
                            </td>
                        </tr>
                        <tr className="border-b text-center">
                            <td className="p-4 border-r"><X /></td>
                            <td className="p-4 border-r">
                                <img
                                    src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/10.jpg"
                                    alt=""
                                    className="h-28 w-20"
                                />
                            </td>
                            <td className="p-4 border-r">
                                <div className="flex justify-between text-sm text-gray-500 items-center">
                                    <p>VINTAGE SHOE</p>
                                    <button className="border border-gray-400 py-1 px-4 hover:text-white hover:bg-orange-600 hover:duration-500 hover:border-orange-600">
                                        QUICK VIEW
                                    </button>
                                </div>
                            </td>
                            <td className="p-4 border-r">$180.00</td>
                            <td className="p-4 border-r text-green-600">In Stock</td>
                            <td className="p-4 border-r">
                                <button className="border border-gray-400 py-1 px-4 hover:text-white hover:bg-orange-600 hover:duration-500 hover:border-orange-600">
                                    ADD TO CART
                                </button>
                            </td>
                        </tr>
                        <tr className="border-b text-center">
                            <td className="p-4 border-r"><X /></td>
                            <td className="p-4 border-r">
                                <img
                                    src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/10.jpg"
                                    alt=""
                                    className="h-28 w-20"
                                />
                            </td>
                            <td className="p-4 border-r">
                                <div className="flex justify-between text-sm text-gray-500 items-center">
                                    <p>VINTAGE SHOE</p>
                                    <button className="border border-gray-400 py-1 px-4 hover:text-white hover:bg-orange-600 hover:duration-500 hover:border-orange-600">
                                        QUICK VIEW
                                    </button>
                                </div>
                            </td>
                            <td className="p-4 border-r">$180.00</td>
                            <td className="p-4 border-r text-green-600">In Stock</td>
                            <td className="p-4 border-r">
                                <button className="border border-gray-400 py-1 px-4 hover:text-white hover:bg-orange-600 hover:duration-500 hover:border-orange-600">
                                    ADD TO CART
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-4">
                                <p>SHARE ON:</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Wishlist