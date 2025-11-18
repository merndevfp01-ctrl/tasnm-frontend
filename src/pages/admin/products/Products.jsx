import { ArrowLeft, Pen, Plus, RefreshCcw, Search, Trash } from "lucide-react";
import AdminLayout from "../../layouts/AdminLayout";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Tooltip from "../../../components/Tooltip";
import { Api } from "../../../api/Api";
import { toast } from "react-toastify";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const fetchProducts = async () => {
        const data = Api.get("/product/getproductadmin")
        data.then((res) => {
            console.log("res", res)
            setProducts(res?.data.data)
        }).catch((err) => {
            console.log("err", err)
        })
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    let productResponse;
    const handledelete = (_id) => {
        productResponse = Api.put(`/product/deleteproduct/${_id}`)
        productResponse.then((res) => {
            console.log("res", res)
            toast.success("Product deleted successfully.")
            fetchProducts()
        }).catch((error) => {
            console.log(error);
        })
    }

    const handleRestore = (_id) => {
        productResponse = Api.put(`/product/restoreProduct/${_id}`)
        productResponse.then((res) => {
            console.log("res", res)
            toast.success("Product restore successfully.")
            fetchProducts()
        }).catch((error) => {
            console.log(error);
        })
    }

    const filteredItems = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <AdminLayout>
            <div className="min-h-screen w-full bg-gray-50 space-y-6 p-10">
                <div className="w-full flex items-center gap-4 border bg-white shadow-sm p-4">
                    <botton onClick={() => navigate(-1)} className="bg-gray-100 p-2 rounded-full">
                        <ArrowLeft />
                    </botton>
                    <div>
                        <h1 className="text-2xl font-semibold">Products</h1>
                        <p className="text-xs text-gray-600">Create and manage your orders.</p>
                    </div>
                </div>
                {/* Filters */}
                <div className="flex justify-between items-center border bg-white shadow-sm  p-4">
                    <div className="flex items-center border border-gray-300 px-3 py-2 gap-2 rounded-md">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value)
                            }}
                            className="w-full text-xs outline-none"
                            placeholder="Search by name"
                        />
                        <Search className="h-4 w-4 text-gray-500" />
                    </div>
                    <div className="flex items-center text-sm gap-4">
                        <Link to={"/admin/add-product"} className="flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white rounded-md p-2">
                            <Plus className="h-4 w-4" />
                            Create Product
                        </Link>
                    </div>
                </div>
                {/* Table */}
                <div className="w-full border bg-white shadow-sm">
                    <div className="flex justify-between items-center border-b py-5 px-10">
                        <h1 className="text-lg font-semibold">Recent Orders</h1>
                    </div>

                    <div className="w-full py-5 px-10">
                        <table className="w-full border-collapse overflow-x-auto">
                            <thead>
                                <tr className="text-sm">
                                    <th className="text-left h-14">Product Id</th>
                                    <th className="text-left h-14">Name</th>
                                    <th className="text-left h-14">Image</th>
                                    <th className="text-left h-14">Description</th>
                                    <th className="text-left h-14">Category</th>
                                    <th className="text-left h-14">price</th>
                                    <th className="text-left h-14">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredItems.length > 0 ? (
                                    filteredItems.map((items, index) => {
                                        return (
                                            <tr key={items._id} className={`text-sm text-gray-600 border-t ${items.isDeleted ? "bg-red-500 text-white" : "text-gray-600"}`}>
                                                <td className="text-left p-1">#{index + 1}</td>
                                                <td className="text-left truncate max-w-12 h-12 p-1">{items.name}</td>
                                                <td className="text-left h-12 p-1">
                                                    <img src={`http://localhost:3000${items.image}`} alt="" className="h-16 w-14 object-cover rounded-md" />
                                                </td>
                                                <td className="text-left p-1">
                                                    <Tooltip content={items.description}>
                                                        <div className="w-20 truncate whitespace-nowrap overflow-hidden text-ellipsis">
                                                            {items.description}
                                                        </div>
                                                    </Tooltip>
                                                </td>

                                                <td className="text-left h-12 p-1">{items.category}</td>
                                                <td className="text-left h-12 p-1">${items.price}</td>
                                                <td className="text-left h-12 p-1">
                                                    <div className={"flex items-center"}>
                                                        <Link to={`/admin/add-product/${items._id}`} className="bg-white border border-gray-100 text-gray-600 shadow-sm rounded-sm text-xs px-2 py-1 mr-2">
                                                            <Pen size={16} />
                                                        </Link >
                                                        {items.isDeleted ?
                                                            <button
                                                                onClick={() => handleRestore(items._id)}
                                                                className="text-green-600 bg-white border border-gray-100 shadow-sm text-xs px-2 py-1"
                                                            >
                                                                <RefreshCcw className="h-4 w-4" />
                                                            </button> :
                                                            <button
                                                                onClick={() => handledelete(items._id)}
                                                                className="text-red-600 bg-white border border-gray-100 shadow-sm text-xs px-2 py-1"
                                                            >
                                                                <Trash className="h-4 w-4" />
                                                            </button>
                                                        }
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center py-4 text-gray-500">
                                            No products found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}