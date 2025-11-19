import { Link, useNavigate, useParams } from "react-router-dom"
import Shipping from "../../../components/Shipping"
import { LayoutGrid, Menu } from "lucide-react"
import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { useEffect, useState } from "react";
import SiteLayout from "../../layouts/SiteLayout";
import { Api } from "../../../api/Api";

function Shop() {
    const navigate = useNavigate()
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const fetchProducts = () => {
        const data = Api.get("http://localhost:3000/product/getproduct")
        data.then((res) => {
            setProducts(res?.data.data)
            const unique = [...new Set(res?.data.data.map(p => p.category))];
            setCategories(unique)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleSubmit = (id) => {
        const user = JSON.parse(localStorage.getItem("user"));
        const userId = user?._id;
        const cartResponse = Api.post(`http://localhost:3000/cart/addcart/${id}`, {
            product: id,
            user: userId
        });
        cartResponse.then((res) => {
            console.log(res);
            setTimeout(() => {
                navigate("/shoppingcart")
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    //Calculate Index
    // const indexOfLastItem = currentPage * itemPerPage;
    // const indexOfFirstItem = indexOfLastItem - itemPerPage;
    // const currentItem = products.slice(indexOfFirstItem, indexOfLastItem);
    // const totalPages = products.slice(products.length / itemPerPage);

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
                        </div>
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
                            {products.map((data) => (
                                <div key={data._id} className="space-y-4 p-4">
                                    <button type="button" onClick={() => navigate(`/singleproduct/${data._id}`)} className="w-full">
                                        <img
                                            src={`http://localhost:3000${data.image}`}
                                            alt=""
                                            className="h-80 w-full object-cover"
                                        />
                                        <div className="text-start text-sm mt-2">
                                            <h3 className="">{data.name}</h3>
                                            <div className="flex justify-between items-center">
                                                <p className="font-semibold">${data.price}</p>
                                                <div className="flex items-center gap-1">
                                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke />
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                    <button type="submit" onClick={() => handleSubmit(data._id)} className="w-full text-orange-600 border border-orange-600 rounded-md p-2 mt-2">
                                        Add to cart
                                    </button>
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
                            {/* {[...Array(totalPages)].map((_, i) => (
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
                            </button> */}
                        </div>
                    </div>
                </div>
                <Shipping />
            </div>
        </SiteLayout>
    )
}

export default Shop