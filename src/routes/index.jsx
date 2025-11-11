import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Blog from "../pages/Blogs"
import Lookbook from "../pages/Lookbook"
import Login from "../pages/Login"
import Checkout from "../pages/Checkout"
import Wishlist from "../pages/Wishlist"
import MyAccount from "../pages/MyAccount"
import SingleProduct from "../pages/SingleProducts"
import Shoppingcart from "../pages/Shoppingcart"
import Shop from "../pages/Shop"

function IndexRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/lookbook" element={<Lookbook/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/wishlist" element={<Wishlist/>}/>
            <Route path="/myaccount" element={<MyAccount/>}/>
            <Route path="/singleproduct" element={<SingleProduct/>}/>
            <Route path="/shoppingcart" element={<Shoppingcart/>}/>
            <Route path="/shop" element={<Shop/>}/>
        </Routes>
    )

}

export default IndexRoutes