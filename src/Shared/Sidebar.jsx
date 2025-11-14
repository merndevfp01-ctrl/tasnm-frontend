import { LayoutDashboard, LogOut, ShoppingBag, ShoppingCart } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

export default function Sidebar(){
    return (
        <div className="flex h-screen">
            <aside className="group relative flex flex-col p-2 text-black border-r w-16 hover:w-56 transition-all duration-300">
                <div className="flex items-center justify-center py-5 gap-4 text-xl font-bold">
                    <span className="h-8 w-8 bg-orange-600 text-white flex items-center justify-center rounded-md">T</span>
                    <span className="group-hover:block hidden transition-all">Tasnm</span>
                </div>
                <nav className="flex flex-col gap-3 mt-5">
                    <SidebarItem icon={<LayoutDashboard size={18}/>} text="Dashboard" to="/admin"/>
                    <SidebarItem icon={<ShoppingBag size={18}/>} text="Products" to="/admin/products"/>
                    <SidebarItem icon={<ShoppingCart size={18}/>} text="Orders" to="/admin/orders"/>
                </nav>
                <div className="mt-auto px-2">
                    <SidebarItem icon={<LogOut size={18}/>} text="Logout" to="/admin/logout"/>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
                {Outlet}
            </div>
        </div>
    )
}

const SidebarItem = ({ icon, text, to }) => {
    return (
        <Link to={to} className="flex items-center gap-4 p-3 hover:bg-gray-100 text-sm cursor-pointer rounded-md transition-all duration-200">
            <span>{icon}</span>
            <span className="whitespace-nowrap hidden group-hover:block transition-all">{text}</span>
        </Link>
    )
}