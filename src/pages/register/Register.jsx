import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await fetch("https://tasnm-backend.vercel.app/auth/register", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                const data = response.json()
                setTimeout(() => {
                    navigate('/login')
                }, 1200);
            }
        } catch (error) {
            console.log(error)
            alert("Something went wrong")
        }
    }
    return (
        <div className="w-full flex justify-center items-center p-10">
            <div className="w-full md:w-[30%] border shadow-sm p-6 space-y-4">
                <div className="text-center">
                    <h1 className="text-xl md:text-2xl font-semibold">Registration</h1>
                    <p className="text-xs text-gray-600">Let's create an account</p>
                </div>
                <div className="text-sm space-y-2">
                    <div>
                        <label>Username</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => {
                                setFormData({...formData, name: e.target.value})
                            }}
                            placeholder="Enter username"
                            className="w-full border rounded-lg outline-none p-2" />
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="text"
                            value={formData.email}
                            onChange={(e) => {
                                setFormData({...formData, email: e.target.value})
                            }}
                            placeholder="Enter username"
                            className="w-full border rounded-lg outline-none p-2" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="text"
                            value={formData.password}
                            onChange={(e)=>{
                                setFormData({...formData, password: e.target.value})
                            }}
                            placeholder="Enter username"
                            className="w-full border rounded-lg outline-none p-2" />
                    </div>
                </div>
                <button type="submit" onClick={handleSubmit} className="w-full text-sm bg-black text-white rounded-lg p-2">
                    {loading ? "Regiter.." : "Register"}
                </button>
                <div className="text-sm flex justify-center items-center gap-1">
                    <p>Already have an account?</p>
                    <Link to={"/login"} className="text-orange-600">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    )
}