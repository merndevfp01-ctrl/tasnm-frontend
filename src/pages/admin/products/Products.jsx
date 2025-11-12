import { ArrowLeft, Pen, Plus, Search, Trash } from "lucide-react";
import AdminLayout from "../../layouts/AdminLayout";

const orders = [
    { orderId: '001', name: 'Shirt', description: 'Slim Fit', category: 'Electronics', price: '$150.00' },
    { orderId: '002', name: 'T-shirt', description: '', category: 'Grosary', price: '$150.00' },
    { orderId: '003', name: 'Jeans', description: '', category: 'Furniture', price: '$150.00' },
    { orderId: '004', name: 'Watchs', description: 'Smart watch', category: 'Kitchen', price: '$150.00' },
    { orderId: '005', name: 'Ring', description: 'Jwellary', category: 'Kids', price: '$150.00' },
    { orderId: '006', name: 'Shoes', description: '', category: 'Shirts', price: '$150.00' },
    { orderId: '007', name: 'Earbuds', description: 'Accessories', category: 'Jacket', price: '$150.00' },
]

export default function Products() {
    return (
        <AdminLayout>
            <div className="min-h-screen w-full bg-gray-50 space-y-6 p-10">
                <div className="w-full flex items-center gap-4 border bg-white shadow-sm p-4">
                    <div className="bg-gray-100 p-2 rounded-full">
                        <ArrowLeft />
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold">Products</h1>
                        <p className="text-xs text-gray-600">Create and manage your orders.</p>
                    </div>
                </div>
                {/* Filters */}
                <div className="flex justify-between items-center border bg-white shadow-sm  p-4">
                    <div className="flex items-center border border-gray-300 px-3 py-2 gap-2 rounded-md">
                        <input type="text" className="w-full text-xs outline-none" placeholder="Search by name" />
                        <Search className="h-4 w-4 text-gray-500" />
                    </div>
                    <div className="flex items-center text-sm gap-4">
                        <button className="flex items-center gap-2 bg-orange-600 text-white rounded-sm shadow-sm p-2">
                            <Plus className="h-4 w-4"/>
                            Create Product
                        </button>
                    </div>
                </div>
                {/* Table */}
                <div className="w-full border bg-white shadow-sm">
                    <div className="flex justify-between items-center border-b py-5 px-10">
                        <h1 className="text-lg font-semibold">Recent Orders</h1>
                    </div>

                    <div className="w-full py-5 px-10">
                        <table className="w-full overflow-x-auto">
                            <thead>
                                <tr className="text-sm">
                                    <th className="text-left h-14">Product Id</th>
                                    <th className="text-left h-14">Name</th>
                                    <th className="text-left h-14">Description</th>
                                    <th className="text-left h-14">Category</th>
                                    <th className="text-left h-14">price</th>
                                    <th className="text-left h-14">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((items) => {
                                    return (
                                        <tr key={items.orderId} className="text-sm text-gray-600 border-t">
                                            <td className="text-left">#{items.orderId}</td>
                                            <td className="text-left h-14">{items.name}</td>
                                            <td className="text-left h-14">{items.description}</td>
                                            <td className="text-left h-14">{items.category}</td>
                                            <td className="text-left h-14">{items.price}</td>
                                            <td className="text-left h-14">
                                                <div>
                                                    <button className="bg-white border border-gray-100 shadow-sm rounded-sm text-xs px-2 py-1 mr-2">
                                                        <Pen size={16} />
                                                    </button>
                                                    <button className="text-red-600 bg-white border border-gray-100 shadow-sm text-xs px-2 py-1">
                                                        <Trash className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}