import { Plus, Star } from "lucide-react";
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import SiteLayout from "../../layouts/SiteLayout";

function SingleProduct() {
    const sizes = ['S', 'M', 'L', 'XL']
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState('M');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:3000/product/getproduct/${id}`)
                const data = await response.json();
                setProduct(data.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProduct();
    }, [id])

    if (!product) {
        return (
            <SiteLayout>
                <div className="p-10">Loading...</div>
            </SiteLayout>
        );
    }
    return (
        <SiteLayout>
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
                        src={`http://localhost:3000${product.image}`}
                        alt=""
                        className="w-full md:w-1/2 h-96 object-cover"
                    />
                    <div className="w-full md:w-[50%] space-y-5 text-sm text-gray-600">
                        <div className="space-y-2">
                            <h1 className="text-xl md:text-3xl font-semibold text-black">{product.name}</h1>
                            <p>{product.description}</p>
                            <div className="flex items-center gap-2">
                                <Star className="h-4 w-4 text-yellow-600" />
                                <p className="text-black font-bold">
                                    4.9
                                    <span className="text-gray-500 font-normal">(225 reviews)</span>
                                </p>
                            </div>
                            <p className="text-xl md:text-2xl text-black font-semibold">${product.price}</p>
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
                        <Link to={"/shoppingcart"} className="flex justify-center items-center rounded-lg gap-2 w-full bg-orange-600 text-white text-center py-2">
                            <Plus size={16} />
                            Add to Cart
                        </Link>
                        <button className="w-full text-center text-black rounded-lg border border-black hover:bg-black hover:text-white duration-300 py-2">
                            Buy this item
                        </button>
                    </div>
                </div>
            </div >
        </SiteLayout>
    )
}

export default SingleProduct