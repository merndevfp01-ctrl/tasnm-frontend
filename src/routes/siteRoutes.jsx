import { Routes, Route } from "react-router-dom"
import Home from "../pages/user/home/Home"
import Contact from "../pages/user/contact/Contact"
import Blog from "../pages/user/blogs/Blogs"
import Lookbook from "../pages/user/lookbook/Lookbook"
import Login from "../pages/user/Login"
import Checkout from "../pages/user/checkout/Checkout"
import Wishlist from "../pages/user/whislist/Wishlist"
import MyAccount from "../pages/user/myaccount/MyAccount"
import SingleProduct from "../pages/user/singleproducts/SingleProducts"
import Shoppingcart from "../pages/user/shoppingcart/Shoppingcart"
import Shop from "../pages/user/shop/Shop"
import About from "../pages/user/about/About"
import Register from "../pages/register/register"

function IndexRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/lookbook" element={<Lookbook />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/shoppingcart" element={<Shoppingcart />} />
        </Routes>
    )

}

export default IndexRoutes