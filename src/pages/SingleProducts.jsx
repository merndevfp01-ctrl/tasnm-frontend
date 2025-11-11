import { Plus, Star } from "lucide-react";
import { useState } from "react"
import { Link } from "react-router-dom"

function SingleProduct() {
    const sizes = ['S', 'M', 'L', 'XL']
    const [selectedSize, setSelectedSize] = useState('M');
    return (
        <div className="w-full space-y-4 md:space-y-8 py-10 px-10 md:px-20">
            <div className="flex items-center gap-2">
                <Link
                    to={"/"}
                    className="text-gray-600">
                    Home
                </Link>
                /
                <p>Single Product</p>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-10">
                <img
                    src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/12.jpg"
                    alt=""
                    className=""
                />
                <div className="space-y-5 text-sm text-gray-600">
                    <div className="space-y-2">
                        <h1 className="text-xl md:text-3xl font-semibold text-black">Brown Jacket</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, hic?</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur numquam facere suscipit dignissimos incidunt, corrupti nobis assumenda amet. Aliquam aperiam voluptates natus tenetur sequi rem.</p>
                        <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-yellow-600" />
                            <p className="text-black font-bold">
                                4.9
                                <span className="text-gray-500 font-normal">(225 reviews)</span>
                            </p>
                        </div>
                        <p className="text-xl md:text-2xl text-black font-semibold">$150.00</p>
                    </div>
                    <p className="text-black">Size: {selectedSize}</p>
                    <div className="flex  items-center gap-2">
                        {sizes.map((size) => (
                            <button
                                key={size}
                                className={`px-2.5 py-1 border rounded-sm
              ${selectedSize === size ? 'bg-black text-white border-black' : 'bg-white text-gray-700 border-gray-300'}
              hover:bg-black hover:text-white hover:border-black
              focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50
            `}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                    <button className="flex justify-center items-center rounded-lg gap-2 w-full bg-orange-600 text-white text-center py-2">
                        <Plus size={16} />
                        Add to Cart
                    </button>
                    <button className="w-full text-center text-black rounded-lg border border-black hover:bg-black hover:text-white duration-300 py-2">
                        Buy this item
                    </button>
                </div>
            </div>
        </div >
    )
}

export default SingleProduct