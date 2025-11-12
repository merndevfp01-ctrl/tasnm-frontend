import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import Orders from "../pages/admin/orders/Orders";
import Products from "../pages/admin/products/Products";

export default function AdminRoutes(){
    return(
        <Routes>
            <Route path="/admin" element={<Dashboard/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/products" element={<Products/>}/>
        </Routes>
    )
}