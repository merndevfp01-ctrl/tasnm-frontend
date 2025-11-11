import { Link } from "react-router-dom"

function PageDropdown() {
    return (
        <div className="absolute left-0 top-full hidden group-hover:block duration-500 bg-white text-gray-800 shadow-lg w-56 z-50">
            <div className="flex flex-col py-2 text-sm">
                <Link to={"/about"} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">About</Link>
                <Link to={"/blog"} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Blog</Link>
                <Link to={"/blog"} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Blog Details</Link>
                <Link to={"/checkout"} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Checkout</Link>
                <Link to={"/contact"} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Contact</Link>
                <Link to={"/login"} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Login</Link>
                <Link to={"/myaccount"} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">My Account</Link>
                <Link to={"/shop"} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Shop</Link>
                <Link to={"/shop"} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Shop List</Link>
                <Link to={"/shoppingcart"} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Shopping-cart</Link>
                <Link to={"/singleproduct"} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Single Product</Link>
                <Link to={"/wishlist"} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Wishlist</Link>
            </div>
        </div>
    )
}

export default PageDropdown