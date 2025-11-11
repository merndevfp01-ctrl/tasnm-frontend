import { Trash, X } from "lucide-react"
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaRegStarHalfStroke, FaStar, FaTwitter } from "react-icons/fa6"
import { Link } from "react-router-dom"

const products = [
    { id: 1, name: 'Classic T-Shirt', price: '$25', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/2.jpg' },
    { id: 2, name: 'Leather Shoes', price: '$80', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/10.jpg' },
    { id: 3, name: 'Stylish Bag', price: '$50', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/14.jpg' },
    { id: 4, name: 'Denim Jacket', price: '$65', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/8.jpg' },
    { id: 5, name: 'Denim Jacket', price: '$65', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/6.jpg' },
    { id: 6, name: 'Classic T-Shirt', price: '$25', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/4.jpg' },
    { id: 7, name: 'Stylish Bag', price: '$50', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/14.jpg' },
    { id: 8, name: 'Denim Jacket', price: '$65', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/8.jpg' },
    { id: 9, name: 'Leather Shoes', price: '$80', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/8.jpg' },
    { id: 10, name: 'Running Sneakers', price: '$60', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/4.jpg' },
    { id: 11, name: 'Stylish Bag', price: '$50', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/14.jpg' },
    { id: 12, name: 'Denim Jacket', price: '$65', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/8.jpg' },
];

function Wishlist() {
    return (
        <div className="w-full py-10 px-10 md:px-20 space-y-4 md:space-y-6">
            <div className="flex items-center gap-2">
                <Link
                    to={"/"}
                    className="text-gray-600">
                    Home
                </Link>
                /
                <p>Wishlist</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                {products.map((data) => (
                    <div className="space-y-4">
                        <img
                            src={data.image}
                            alt=""
                            className=""
                        />
                        <div>
                            <h3 className="">{data.name}</h3>
                            <div className="flex justify-between items-center">
                                <p className="font-semibold">{data.price}</p>
                                <div className="flex items-center gap-1">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke />
                                </div>
                            </div>
                        </div>
                        <button className="w-full text-center text-xs rounded-lg py-2 border text-orange-600">
                            MOVE TO BAG
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Wishlist