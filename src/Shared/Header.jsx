import { Clock, DollarSign, HeartIcon, Lock, Menu, Phone, Search, ShoppingCart, User, X } from 'lucide-react'
import react from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);
    return (
        <div className='w-full fixed top-0 left-0 z-50'>
            <div className='h-14 w-full hidden  md:flex justify-between items-center border-b border-white/20 py-2 px-14 text-white text-sm bg-black'>
                <div className='flex items-center gap-1'>
                    <Phone size={14} /> (+880) 1910 000251 | <Clock size={14} /> Mon-fri : 9:00-19:00
                </div>
                <div className='flex gap-4'>
                    <Link
                        to={"/"}
                        className='flex items-center gap-1 hover:text-gray-300'
                    >
                        <User size={14} />
                        My Account
                    </Link>
                    <Link
                        to={"/"}
                        className='flex items-center gap-1 hover:text-gray-300'
                    >
                        <ShoppingCart size={14} />
                        My Cart
                    </Link>
                    <Link
                        to={"/"}
                        className='flex items-center gap-1 hover:text-gray-300'
                    >
                        <HeartIcon size={14} />
                        My Whishlist
                    </Link>
                    <Link
                        to={"/"}
                        className='flex items-center gap-1 hover:text-gray-300'
                    >
                        <DollarSign size={14} />
                        Checkout
                    </Link>
                    <Link
                        to={"/"}
                        className='flex items-center gap-1 hover:text-gray-300'
                    >
                        <Lock size={14} />
                        Login
                    </Link>
                </div>
            </div>
            <nav className={` transition-all duration-500 w-full flex justify-between items-center py-2 px-6 md:px-14
            ${scrolled ? "bg-black shadow-md" : "bg-black/80"}
                `}>
                <img src="src/assets/logo.png" alt="" className='h-6 w-12 md:h-14 md:w-24 object-contain' />
                <div className='hidden md:flex justify-between items-center gap-10 text-white'>
                    <Link
                        to={"/"}
                        className='hover:text-gray-300'
                    >
                        HOME
                    </Link>
                    <Link
                        to={"/"}
                        className='hover:text-gray-300'
                    >
                        SHOP
                    </Link>
                    <Link
                        to={"/"}
                        className='hover:text-gray-300'
                    >
                        LOOKBOOK
                    </Link>
                    <Link
                        to={"/blog"}
                        className='hover:text-gray-300'
                    >
                        BLOG
                    </Link>
                    <Link
                        to={"/"}
                        className='hover:text-gray-300'
                    >
                        PAGES
                    </Link>
                    <Link
                        to={"/about"}
                        className='hover:text-gray-300'
                    >
                        ABOUT
                    </Link>
                    <Link
                        to={"/contact"}
                        className='hover:text-gray-300'
                    >
                        CONTACT
                    </Link>
                </div>
                <div className='hidden md:flex items-center gap-4 text-white'>
                    <Search size={18} className='cursor-pointer hover:text-gray-300' />
                    |
                    <ShoppingCart size={18} className='cursor-pointer hover:text-gray-300' />
                </div>

                {/*Mobile Menu Button */}
                <button
                    className='md:hidden text-white focus:outline-none'
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/*Mobile Dropdown menu */}
            <div className={`md:hidden bg-white shadow-md transition-all duration-300 ease-in-out overflow-hidden ${open ? "max-h-96" : "max-h-0"}`}>
                <div className='flex flex-col space-y-3 px-6 py-4 text-black'>
                    <Link
                        to={"/"}
                        onClick={() => setOpen(false)}
                    >
                        HOME
                    </Link>
                    <Link
                        to={"/"}
                        onClick={() => setOpen(false)}
                    >
                        SHOP
                    </Link>
                    <Link
                        to={"/"}
                        onClick={() => setOpen(false)}
                    >
                        LOOKBOOK
                    </Link>
                    <Link
                        to={"/"}
                        onClick={() => setOpen(false)}
                    >
                        BLOG
                    </Link>
                    <Link
                        to={"/"}
                        onClick={() => setOpen(false)}
                    >
                        PAGES
                    </Link>
                    <Link
                        to={"/"}
                        onClick={() => setOpen(false)}
                    >
                        ABOUT
                    </Link>
                    <Link
                        to={"/"}
                        onClick={() => setOpen(false)}
                    >
                        CONTACT
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
