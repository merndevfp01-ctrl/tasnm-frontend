import { Trash } from "lucide-react"
import { Link } from "react-router-dom"
import SiteLayout from "../../layouts/SiteLayout"
import { useEffect, useState } from "react"
import { Api } from "../../../api/Api";

function Shoppingcart() {
    const [cart, setCart] = useState([]);

    // Fetch Product
    const cartData = () => {
        const user = JSON.parse(localStorage.getItem("user"))
        const userId = user._id
        const data = Api.get(`http://localhost:3000/cart/getcart/${userId}`)
        data.then((res) => {
            setCart(res?.data.data)
            console.log("Cart Data:", res?.data.data);

        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
        cartData();
    }, [])

    // Remove single Product
    const handleDelete = (_id) => {
        const response = Api.delete(`http://localhost:3000/cart/removecart/${_id}`)
        response.then((res) => {
            console.log(res, "Cart deleted successfully.")
            cartData()
        }).catch((error) => {
            console.log(error)
        })
    }

    // Increase Quantity
    const increase = (id, productId) => {
        const user = JSON.parse(localStorage.getItem("user"));
        const userId = user?._id;
        const cartResponse = Api.post(`http://localhost:3000/cart/addcart/${id}`, {
            product: productId,
            user: userId,
            qty: 1
        });
        cartResponse.then((res) => {
            console.log(res);
            cartData()
        }).catch((error) => {
            console.log(error)
        })
    }

    //Decrease Quantity
    const decrease = (id, productId) => {
        const user = JSON.parse(localStorage.getItem("user"));
        const userId = user?._id;
        const cartResponse = Api.post(`http://localhost:3000/cart/decreaseQty/${id}`, {
            product: productId,
            user: userId,
            qty: 1
        });
        cartResponse.then((res) => {
            console.log(res);
            cartData()
        }).catch((error) => {
            console.log(error)
            alert("Quantity not less then 0.")
        })
    }

    return (
        <SiteLayout>
            <div className="w-full py-10 px-10 md:px-20 space-y-6">
                <div className="flex items-center gap-2">
                    <Link
                        to={"/"}
                        className="text-gray-600">
                        Home
                    </Link>
                    /
                    <p>Shopping Cart</p>
                </div>
                <h1 className="text-2xl md:text-4xl font-light">SHOPPING CART</h1>
                <div className="flex flex-col md:flex-row items-start gap-6">
                    {/* Products */}
                    <div className="w-full md:w-[65%] border rounded-xl space-y-4 p-4">
                        {cart.length > 0 ?
                            (cart.map((data) => (
                                <div key={data._id} className="w-full flex gap-4 border-b pb-4">
                                    <img
                                        src={`http://localhost:3000${data.product.image}`}
                                        alt=""
                                        className="h-24 w-24 object-cover rounded-xl"
                                    />
                                    <div className="w-full">
                                        <div className="w-full flex justify-between items-start">
                                            <div>
                                                <h3 className="text-lg font-semibold">{data.product.name}</h3>
                                                <p className="flex items-center gap-1 text-xs">
                                                    <span>Size:</span>
                                                    <span className="text-gray-500">{data.product.description}</span>
                                                </p>
                                                <p className="flex items-center gap-1 text-xs">
                                                    <span>qty:</span>
                                                    <span className="text-gray-500 font-semibold">{data.qty}</span>
                                                </p>
                                            </div>
                                            <button onClick={() => handleDelete(data._id)}>
                                                <Trash className="text-red-600 h-5 w-5" />
                                            </button>
                                        </div>
                                        <div className="w-full flex justify-between items-start">
                                            <h3 className="font-semibold">${data.product.price}</h3>
                                            <div className="flex items-center gap-4 bg-gray-200 rounded-lg py-0.5 px-3">
                                                <button onClick={() => decrease(data._id, data.product._id)}>-</button>
                                                <p>{data.qty}</p>
                                                <button onClick={() => increase(data._id, data.product._id)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))) : (
                                <p>No items in cart</p>
                            )
                        }

                    </div>
                    {/* Order Summary */}
                    <div className="w-full md:w-[35%] border rounded-xl space-y-2 p-4">
                        <h1 className="text-lg font-bold mb-4">
                            Order Summary
                        </h1>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between items-center">
                                <p className="text-gray-600">Subtotal</p>
                                <p className="font-semibold">$565</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-gray-600">Discount</p>
                                <p className="font-semibold text-red-600">$110</p>
                            </div>
                            <div className="flex justify-between items-center border-b pb-2">
                                <p className="text-gray-600">Delivery Fee</p>
                                <p className="font-semibold">$15</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-gray-600">Total</p>
                                <p className="font-semibold text-lg">$467</p>
                            </div>
                        </div>
                        <button className="w-full bg-black text-sm text-white py-2">
                            Go to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </SiteLayout>
    )
}

export default Shoppingcart