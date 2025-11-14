import { Link } from "react-router-dom"
import Shipping from "../../../components/Shipping"
import { ArrowRight, LayoutGrid, Menu, Search } from "lucide-react"
import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { useEffect, useState } from "react";
import SiteLayout from "../../layouts/SiteLayout";

// const products = [
//     { id: 1, name: 'Classic T-Shirt', price: '$25', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/2.jpg' },
//     { id: 2, name: 'Leather Shoes', price: '$80', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/10.jpg' },
//     { id: 3, name: 'Stylish Bag', price: '$50', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/14.jpg' },
//     { id: 4, name: 'Denim Jacket', price: '$65', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/8.jpg' },
//     { id: 5, name: 'Denim Jacket', price: '$65', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/6.jpg' },
//     { id: 6, name: 'Classic T-Shirt', price: '$25', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/4.jpg' },
//     { id: 7, name: 'Stylish Bag', price: '$50', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/14.jpg' },
//     { id: 8, name: 'Denim Jacket', price: '$65', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/8.jpg' },
//     { id: 9, name: 'Leather Shoes', price: '$80', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/8.jpg' },
//     { id: 10, name: 'Running Sneakers', price: '$60', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/4.jpg' },
//     { id: 11, name: 'Stylish Bag', price: '$50', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/14.jpg' },
//     { id: 12, name: 'Denim Jacket', price: '$65', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/8.jpg' },
// ];


function Shop() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 9;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:3000/product/getproduct")
                const data = await response.json();
                setProducts(data.data)
                
                const unique = [...new Set(data.data.map(p => p.category))];
                setCategories(unique)
                console.log("Categories", categories)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts();

    }, []);

    //Calculate Index
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItem = products.slice(indexOfFirstItem, indexOfLastItem);
    //Total Pages
    const totalPages = products.slice(products.length / itemPerPage);

    return (
        <SiteLayout>
            <div className="w-full space-y-6 p-10 md:p-16">
                <div className="flex items-center gap-2">
                    <Link
                        to={"/"}
                        className="text-gray-600">
                        Home
                    </Link>
                    /
                    <p>Shop</p>
                </div>
                <h1 className="text-2xl md:text-4xl font-light">SHOP</h1>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row justify-center items-start gap-10 ">
                    {/* Right Section */}
                    <div className="space-y-8 w-full md:w-[25%]">
                        <div>
                            <h1 className="text-xl font-light mb-4">
                                SHOP BY
                            </h1>
                            {/* Categories */}
                            <div className="space-y-2">
                                <h3 className="text-gray-500">
                                    CATEGORIES
                                </h3>
                                <div className="space-y-2 text-gray-500 text-sm">
                                    {categories.map((data, index) => 
                                        <div key={index} className="flex items-center text-gray-400 gap-2">
                                            <input type="checkbox" className="border border-gray-500 h-3 w-3" />
                                            <p className="text-gray-600">{data}</p>
                                            <p>(10)</p>
                                        </div>
                                    )}

                                    {/* <div className="flex items-center text-gray-400 gap-2">
                                        <input type="checkbox" className="border border-gray-500 h-3 w-3" />
                                        <p className="text-gray-600">Jewelry</p>
                                        <p>(10)</p>
                                    </div>
                                    <div className="flex items-center text-gray-400 gap-2">
                                        <input type="checkbox" className="border border-gray-500 h-3 w-3" />
                                        <p className="text-gray-600">Men</p>
                                        <p>(10)</p>
                                    </div>
                                    <div className="flex items-center text-gray-400 gap-2">
                                        <input type="checkbox" className="border border-gray-500 h-3 w-3" />
                                        <p className="text-gray-600">Watches</p>
                                        <p>(10)</p>
                                    </div>
                                    <div className="flex items-center text-gray-400 gap-2">
                                        <input type="checkbox" className="border border-gray-500 h-3 w-3" />
                                        <p className="text-gray-600">Women</p>
                                        <p>(10)</p>
                                    </div> */}
                                </div>
                            </div>
                            {/* Our Brands */}
                            <div className="space-y-2 mt-4">
                                <h3 className="text-gray-500">
                                    OUR BRANDS
                                </h3>
                                <div className="space-y-2 text-gray-500 text-sm">
                                    <div className="flex items-center text-gray-400 gap-2">
                                        <input type="checkbox" className="border border-gray-500 h-3 w-3" />
                                        <p className="text-gray-600">Nike</p>
                                        <p>(10)</p>
                                    </div>
                                    <div className="flex items-center text-gray-400 gap-2">
                                        <input type="checkbox" className="border border-gray-500 h-3 w-3" />
                                        <p className="text-gray-600">Religion</p>
                                        <p>(10)</p>
                                    </div>
                                    <div className="flex items-center text-gray-400 gap-2">
                                        <input type="checkbox" className="border border-gray-500 h-3 w-3" />
                                        <p className="text-gray-600">Diesel</p>
                                        <p>(10)</p>
                                    </div>
                                    <div className="flex items-center text-gray-400 gap-2">
                                        <input type="checkbox" className="border border-gray-500 h-3 w-3" />
                                        <p className="text-gray-600">Monki</p>
                                        <p>(10)</p>
                                    </div>
                                </div>
                            </div>
                            {/* Choose Price */}
                            {/* <div className="space-y-2 mt-4">
                                <h3 className="text-gray-500">
                                    CHOOSE PRICE
                                </h3>
                                <div className="space-y-2 text-gray-500 text-sm">
                                    <input type="range" className="w-full range accent-orange-600" />
                                    <div className="flex justify-between items-center">
                                        <input
                                            type="text"
                                            className="w-24 text-center border border-gray-300 rounded-full py-1 px-4 outline-none"
                                            value={"$ 40"}
                                        />
                                        <input
                                            type="text"
                                            className="w-24 text-center border border-gray-300 rounded-full py-1 px-4 outline-none"
                                            value={"$ 40"}
                                        />
                                        <div className="bg-gray-300 p-2 rounded-full">
                                            <Search className="h-3 w-3 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* Choose Color */}
                            {/* <div className="space-y-2 mt-4">
                                <h3 className="text-gray-500">
                                    CHOOSE COLOR
                                </h3>
                                <div className="space-y-2 text-gray-500 text-sm">
                                    <div className="flex items-center text-gray-400 gap-2">
                                        <input type="checkbox" className="border border-gray-500 h-3 w-3" />
                                        <p className="text-gray-600">Black</p>
                                        <p>(1)</p>
                                    </div>
                                    <div className="flex items-center text-gray-400 gap-2">
                                        <input type="checkbox" className="border border-gray-500 h-3 w-3" />
                                        <p className="text-gray-600">Orange</p>
                                        <p>(1)</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        {/* Compare Products */}
                        {/* <div className="text-sm">
                            <h1 className="text-xl font-light mb-4">
                                COMPARE PRODUCTS
                            </h1>
                            <p>No products to compare</p>
                            <div className="flex justify-between items-center">
                                <button>CLEAR ALL</button>
                                <button className="border p-2 text-400">COMPARE</button>
                            </div>
                        </div> */}
                        {/* Community pool */}
                        {/* <div className="text-sm">
                            <h1 className="text-xl font-light mb-4">
                                COMMUNITY POOLS
                            </h1>
                            <div className="space-y-2 text-gray-500 text-sm">
                                <div className="flex items-center text-gray-400 gap-2">
                                    <input type="checkbox" className="border border-gray-500 h-3 w-3" />
                                    <p className="text-gray-600">Black</p>
                                    <p>(1)</p>
                                </div>
                                <div className="flex items-center text-gray-400 gap-2">
                                    <input type="checkbox" className="border border-gray-500 h-3 w-3" />
                                    <p className="text-gray-600">Orange</p>
                                    <p>(1)</p>
                                </div>
                            </div>
                        </div> */}
                        {/* Best Seller */}
                        {/* <div>
                            <h1 className="text-xl font-light mb-4">
                                BEST SELLER
                            </h1>
                            <div className="flex items-center border-b pb-4 gap-4">
                                <img
                                    src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/banner/s1.jpg"
                                    alt=""
                                    className="h-28 w-28 object-contain"
                                />
                                <div className="text-gray-800 space-y-2">
                                    <p className="hover:text-orange-600">Lambskin Shoe</p>
                                    <p>$180.00</p>
                                </div>
                            </div>
                            <div className="flex items-center border-b py-4 gap-4">
                                <img
                                    src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/banner/s2.jpg"
                                    alt=""
                                    className="h-28 w-28 object-contain"
                                />
                                <div className="text-gray-800 space-y-2">
                                    <p className="hover:text-orange-600">Luxury Leather Bag</p>
                                    <p>$170.00</p>
                                </div>
                            </div>
                            <div className="flex items-center border-b py-4 gap-4">
                                <img
                                    src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/banner/s3.jpg"
                                    alt=""
                                    className="h-28 w-28 object-contain"
                                />
                                <div className="text-gray-800 space-y-2">
                                    <p className="hover:text-orange-600">Vintage Glasses</p>
                                    <p>$170.00</p>
                                </div>
                            </div>
                        </div> */}
                        {/* Image Section */}
                        <div className="relative  overflow-hidden group">
                            <img
                                src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/4.jpg"
                                width={500}
                                height={400}
                                alt=""
                                className="object-cover"
                            />
                            <div className="absolute bottom-5 right-4 left-4 bg-white/70 flex flex-col items-center text-center justify-center py-12 px-4">
                                <p className="font-light">MEN'S FASHION</p>
                                <p className="text-xl font-light mt-2">MID SEASON SALE</p>
                                <button className="border-t border-gray-600 text-sm text-gray-500 mt-4 pt-1">
                                    SHOP NOW
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Left Section */}
                    <div className="space-y-8 w-full md:w-[75%]">
                        {/* Filter Section */}
                        <div className="flex items-center gap-2 text-sm text-gray-500 border-b pb-2">
                            <p>View as:</p>
                            <div className="flex items-center gap-2">
                                <LayoutGrid className="h-4 w-4 text-orange-600" />
                                <Menu className="h-4 w-4" />
                            </div>
                        </div>
                        {/* Products */}
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 border-b pb-4">
                            {currentItem.map((data) => (
                                <div className="space-y-4 p-4">
                                    <img
                                        src={`http://localhost:3000${data.image}`}
                                        alt=""
                                        className="h-80 w-full"
                                    />
                                    <div className="text-sm">
                                        <h3 className="">{data.name}</h3>
                                        <div className="flex justify-between items-center">
                                            <p className="font-semibold">${data.price}</p>
                                            <div className="flex items-center gap-1">
                                                <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke />
                                            </div>
                                        </div>
                                        <button className="w-full text-orange-600 border border-orange-600 rounded-md p-2 mt-2">
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Pagination Buttons */}
                        <div className="flex justify-end gap-1 mt-4">
                            {/* <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-3 py-1 bg-gray-200 rounded"
                        >
                            Prev
                        </button> */}

                            {/* Page numbers */}
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`px-2 py-1    ${currentPage === i + 1 ? "bg-orange-600 text-white" : "bg-gray-200"}`}
                                >
                                    {i + 1}
                                </button>
                            ))}

                            <button
                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className=""
                            >
                                <ArrowRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
                <Shipping />
            </div>
        </SiteLayout>
    )
}

export default Shop