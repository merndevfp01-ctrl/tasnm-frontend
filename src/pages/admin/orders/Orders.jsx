import { ArrowLeft, Search } from "lucide-react";
import AdminLayout from "../../layouts/AdminLayout";
import { useNavigate } from "react-router-dom";

const orders = [
    { orderId: '001', date: '2024-06-01', customer: 'John Doe', category: 'Electronics', status: 'Completed', items: 3, total: '$150.00' },
    { orderId: '002', date: '2024-06-01', customer: 'John Doe', category: 'Grosary', status: 'Completed', items: 1, total: '$150.00' },
    { orderId: '003', date: '2024-06-02', customer: 'John Doe', category: 'Furniture', status: 'Completed', items: 1, total: '$150.00' },
    { orderId: '004', date: '2024-06-02', customer: 'John Doe', category: 'Kitchen', status: 'Completed', items: 2, total: '$150.00' },
    { orderId: '005', date: '2024-07-03', customer: 'John Doe', category: 'Kids', status: 'Completed', items: 1, total: '$150.00' },
    { orderId: '006', date: '2024-07-03', customer: 'John Doe', category: 'Shirts', status: 'Completed', items: 4, total: '$150.00' },
    { orderId: '007', date: '2024-07-04', customer: 'John Doe', category: 'Jacket', status: 'Completed', items: 1, total: '$150.00' },
]

export default function Orders() {
    const navigate = useNavigate();
    return (
        <AdminLayout>
            <div className="min-h-screen w-full bg-gray-50 space-y-6 p-10">
                <div className="w-full flex items-center gap-4 border bg-white shadow-sm p-4">
                    <botton onClick={()=> navigate(-1)} className="bg-gray-100 p-2 rounded-full">
                        <ArrowLeft />
                    </botton>
                    <div>
                        <h1 className="text-2xl font-semibold">Orders</h1>
                        <p className="text-xs text-gray-600">Track and manage your orders.</p>
                    </div>
                </div>
                {/* Filters */}
                <div className="flex justify-between items-center border bg-white shadow-sm  p-4">
                    <div className="flex items-center border border-gray-300 px-3 py-2 gap-2 rounded-md">
                        <input type="text" className="w-full text-xs outline-none" placeholder="Search by name" />
                        <Search className="h-4 w-4 text-gray-500" />
                    </div>
                    <div className="flex items-center text-xs gap-4">
                        <button className="border bg-white hover:bg-gray-50 shadow-sm p-2">Completed</button>
                        <button className="border bg-white hover:bg-gray-50 shadow-sm p-2">Pending</button>
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
                                    <th className="text-left h-14">Order Id</th>
                                    <th className="text-left h-14">Date</th>
                                    <th className="text-left h-14">Customer</th>
                                    <th className="text-left h-14">Category</th>
                                    <th className="text-left h-14">Status</th>
                                    <th className="text-left h-14">Items</th>
                                    <th className="text-left h-14">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((items) => {
                                    return (
                                        <tr key={items.orderId} className="text-sm text-gray-600 border-t">
                                            <td className="text-left">#{items.orderId}</td>
                                            <td className="text-left h-14">{items.date}</td>
                                            <td className="text-left h-14">{items.customer}</td>
                                            <td className="text-left h-14">{items.category}</td>
                                            <td className="text-left h-14">
                                                <p className="w-20 text-center text-xs border border-green-600 text-green-600 rounded-xl px-1">
                                                    {items.status}
                                                </p>
                                            </td>
                                            <td className="text-left h-14">{items.items}</td>
                                            <td className="text-left h-14">{items.total}</td>
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