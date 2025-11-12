import { ArrowLeft, Box, DollarSign, Search, ShoppingCart, UsersRound } from "lucide-react";
import AdminLayout from "../../layouts/AdminLayout";

const productList = [
    { orderId: '001', date: '2024-06-01', customer: 'John Doe', category: 'Electronics', status: 'Completed', items: 3, total: '$150.00' },
    { orderId: '002', date: '2024-06-01', customer: 'John Doe', category: 'Electronics', status: 'Completed', items: 3, total: '$150.00' },
    { orderId: '003', date: '2024-06-01', customer: 'John Doe', category: 'Electronics', status: 'Completed', items: 3, total: '$150.00' },
    { orderId: '004', date: '2024-06-01', customer: 'John Doe', category: 'Electronics', status: 'Completed', items: 3, total: '$150.00' },
    { orderId: '005', date: '2024-06-01', customer: 'John Doe', category: 'Electronics', status: 'Completed', items: 3, total: '$150.00' },
    { orderId: '006', date: '2024-06-01', customer: 'John Doe', category: 'Electronics', status: 'Completed', items: 3, total: '$150.00' },
    { orderId: '007', date: '2024-06-01', customer: 'John Doe', category: 'Electronics', status: 'Completed', items: 3, total: '$150.00' },
]

export default function Dashboard() {
    return (
        <AdminLayout>
            <div className="min-h-screen w-full bg-gray-50 space-y-6 p-10">
                <div className="w-full flex items-center gap-4 border bg-white shadow-sm p-4">
                    <div className="bg-gray-100 p-2 rounded-full">
                        <ArrowLeft />
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold">Dashboard</h1>
                        <p className="text-xs text-gray-600">Manage you business details.</p>
                    </div>
                </div>
                {/* cards */}
                <div className="flex justify-between items-center gap-10">
                    <div className="w-full flex justify-between items-center border bg-white shadow-sm p-3">
                        <div className="space-y-1">
                            <p className="text-sm text-gray-800">Total Sales</p>
                            <h1 className="text-xl font-bold">$10400.00</h1>
                        </div>
                        <div className="bg-yellow-600/10 p-2 rounded-full">
                            <ShoppingCart className="h-4 w-4" />
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-center border bg-white shadow-sm p-3">
                        <div className="space-y-1">
                            <p className="text-sm text-gray-800">New Customers</p>
                            <h1 className="text-xl font-bold">79</h1>
                        </div>
                        <div className="bg-yellow-600/10 p-2 rounded-full">
                            <UsersRound className="h-4 w-4" />
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-center border bg-white shadow-sm p-3">
                        <div className="space-y-1">
                            <p className="text-sm text-gray-800">Product Sold</p>
                            <h1 className="text-xl font-bold">1040.00</h1>
                        </div>
                        <div className="bg-green-600/10 p-2 rounded-full">
                            <Box className="h-4 w-4" />
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-center border bg-white shadow-sm p-3">
                        <div className="space-y-1">
                            <p className="text-sm text-gray-800">Total Revenue</p>
                            <h1 className="text-xl font-bold">$10400.00</h1>
                        </div>
                        <div className="border p-2 rounded-full">
                            <DollarSign className="h-4 w-4" />
                        </div>
                    </div>
                </div>
                {/* Table */}
                <div className="w-full border bg-white shadow-sm">
                    <div className="flex justify-between items-center border-b py-5 px-10">
                        <h1 className="text-lg font-semibold">Recent Orders</h1>
                        <div>
                            <div className="flex items-center border border-gray-300 px-3 py-2 gap-2 rounded-md">
                                <input type="text" className="w-full text-xs outline-none" placeholder="Search by name"/>
                                <Search className="h-4 w-4 text-gray-500"/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="w-full py-5 px-10">
                        <table className="w-full">
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
                                {productList.map((items) => {
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