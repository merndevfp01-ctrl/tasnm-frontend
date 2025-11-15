import { ArrowLeft, Plus } from "lucide-react";
import AdminLayout from "../../layouts/AdminLayout";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddProduct() {
    const { id } = useParams()
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        category: "",
        description: "",
        price: ""
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Fetch Data
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`http://localhost:3000/product/getproduct/${id}`);
                const data = await response.json()
                // setFormData(data.data)
                if (data?.data) {
                    setFormData({
                        name: data.data.name,
                        category: data.data.category,
                        image: data.data.category,
                        description: data.data.description,
                        price: data.data.price
                    })
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        const data = new FormData();
        data.append("name", formData.name);
        data.append("image", formData.image);
        data.append("category", formData.category);
        data.append("description", formData.description);
        data.append("price", formData.price)

        try {
            if (id) {
                const response = await fetch(`http://localhost:3000/product/editproduct/${id}`, {
                    method: "PUT",
                    body: data
                })
                if (response.ok) {
                    toast.success("Product update successfully")
                    setTimeout(() => {
                        navigate("/admin/products")
                    }, 2000)
                }
            } else {
                const response = await fetch("http://localhost:3000/product/createproduct", {
                    method: "POST",
                    body: data
                })
                if (response.ok) {
                    toast.success("Product add successfully")
                    setTimeout(() => {
                        navigate("/admin/products")
                    }, 2000)
                }
            }
        } catch (error) {
            console.log(error)
            toast.dismiss("Failed to add product")
        }
    }
    return (
        <AdminLayout>
            <div className="w-full bg-gray-50 space-y-6 p-10">
                {/* Header */}
                <div className="w-full flex items-center gap-4 border bg-white shadow-sm p-4">
                    <botton onClick={()=> navigate(-1)} className="bg-gray-100 p-2 rounded-full">
                        <ArrowLeft />
                    </botton>
                    <div>
                        <h1 className="text-2xl font-semibold">
                            {id ? "Edit Products" : "Add Products"}
                        </h1>
                        <p className="text-xs text-gray-600">Create and manage your products.</p>
                    </div>
                </div>
                {/* Form */}
                <div className="w-full border bg-white shadow-sm space-y-4 p-4">
                    <h1 className="text-xl font-semibold">Product Details</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-sm gap-4">
                        <div>
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Enter name"
                                value={formData.name}
                                onChange={(e) => {
                                    setFormData({ ...formData, name: e.target.value })
                                }}
                                className="w-full border rounded-lg outline-none p-2" />
                        </div>
                        <div>
                            <label>Image</label>
                            <div>
                                <input
                                    type="file"
                                    onChange={(e) => {
                                        setFormData({ ...formData, image: e.target.files[0] })
                                    }}
                                    className="w-full border rounded-lg text-xs outline-none p-1.5"
                                />
                            </div>
                        </div>
                        <div>
                            <label>Category</label>
                            <select
                                value={formData.category}
                                placeholder="Select category"
                                onChange={(e) => {
                                    setFormData({ ...formData, category: e.target.value })
                                }}
                                className="w-full border rounded-lg outline-none p-2"
                            >
                                <option value="" disabled > Select category</option>
                                <option value="summer">Summner wear</option>
                                <option value="winter">Winter wear</option>
                                <option value="accessories">Accessories</option>
                                <option value="shoes">Shoes</option>
                            </select>
                        </div>
                        <div>
                            <label>Price</label>
                            <input
                                type="number"
                                placeholder="Enter name"
                                value={formData.price}
                                onChange={(e) => {
                                    setFormData({ ...formData, price: e.target.value })
                                }}
                                className="w-full border rounded-lg outline-none p-2" />
                        </div>
                        <div>
                            <label>Description</label>
                            <textarea
                                placeholder="Description"
                                value={formData.description}
                                onChange={(e) => {
                                    setFormData({ ...formData, description: e.target.value })
                                }}
                                className="w-full border rounded-lg outline-none p-2"
                            />
                        </div>
                    </div>
                    <button type="submit" onClick={handleSubmit} className="flex items-center gap-2 text-sm bg-orange-600 hover:bg-orange-500 text-white rounded-md px-3 py-2">
                        <Plus size={14} />
                        {id ? "Edit" : "Add"}
                    </button>
                </div>
            </div>
        </AdminLayout>
    )
}