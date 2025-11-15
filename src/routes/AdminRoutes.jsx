import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import Orders from "../pages/admin/orders/Orders";
import Products from "../pages/admin/products/Products";
import AddProduct from "../pages/admin/products/AddProducts";

export default function AdminRoutes(){
    return(
        <Routes>
            <Route path="/admin" element={<Dashboard/>}/>
            <Route path="/admin/orders" element={<Orders/>}/>
            <Route path="/admin/products" element={<Products/>}/>
            <Route path="/admin/add-product" element={<AddProduct/>}/>
            <Route path="/admin/add-product/:id" element={<AddProduct/>}/>
        </Routes>
    )
}