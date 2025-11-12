import { ChevronRight, Clock, DollarSign, HeartIcon, Lock, Menu, Phone, Search, SearchIcon, ShoppingCart, Trash, User, X } from 'lucide-react'
import react from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PageDropdown from '../components/PagesDropdown';

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
                        to={"/myaccount"}
                        className='flex items-center gap-1 hover:text-gray-300'
                    >
                        <User size={14} />
                        My Account
                    </Link>
                    <Link
                        to={"/shoppingcart"}
                        className='flex items-center gap-1 hover:text-gray-300'
                    >
                        <ShoppingCart size={14} />
                        My Cart
                    </Link>
                    <Link
                        to={"/wishlist"}
                        className='flex items-center gap-1 hover:text-gray-300'
                    >
                        <HeartIcon size={14} />
                        My Whishlist
                    </Link>
                    <Link
                        to={"/checkout"}
                        className='flex items-center gap-1 hover:text-gray-300'
                    >
                        <DollarSign size={14} />
                        Checkout
                    </Link>
                    <Link
                        to={"/login"}
                        className='flex items-center gap-1 hover:text-gray-300'
                    >
                        <Lock size={14} />
                        Login
                    </Link>
                </div>
            </div>
            <nav className={` transition-all duration-500 w-full flex justify-between items-center py-2 px-6 md:px-14
            ${scrolled ? "bg-black shadow-md" : "bg-black"}
                `}>
                <img src="src/assets/logo.png" alt="" className='h-6 w-12 md:h-14 md:w-24 object-contain' />
                <div className='hidden md:flex justify-between items-center gap-10 text-sm text-white'>
                    <Link
                        to={"/"}
                        className='hover:text-orange-600'
                    >
                        HOME
                    </Link>
                    <Link
                        to={"/shop"}
                        className='hover:text-orange-600'
                    >
                        SHOP
                    </Link>
                    {/* <div className='relative group cursor-pointer'>
                        <span className='hover:text-orange-600'>SHOP</span>
                        <PageDropdown/>
                    </div> */}
                    <Link
                        to={"/lookbook"}
                        className='hover:text-orange-600'
                    >
                        LOOKBOOK
                    </Link>
                    <Link
                        to={"/blog"}
                        className='hover:text-orange-600'
                    >
                        BLOG
                    </Link>
                    {/* <Link
                        to={"/"}
                        className='hover:text-gray-300'
                    >
                        PAGES
                    </Link> */}
                    <div className='relative group cursor-pointer'>
                        <span className='hover:text-orange-600'>PAGES</span>
                        <PageDropdown />
                    </div>
                    <Link
                        to={"/about"}
                        className='hover:text-orange-600'
                    >
                        ABOUT
                    </Link>
                    <Link
                        to={"/contact"}
                        className='hover:text-orange-600'
                    >
                        CONTACT
                    </Link>
                    <Link
                        to={"/admin"}
                        className='hover:text-orange-600'
                    >
                        Admin
                    </Link>
                </div>
                <div className='hidden md:flex items-center gap-4 text-white'>
                    <div className='relative group cursor-pointer'>
                        <Search size={18} className='cursor-pointer hover:text-gray-300' />
                        <div className="absolute right-0 top-full hidden group-hover:block duration-500 bg-gray-700 text-gray-800 shadow-lg z-50">
                            <div className='w-full flex items-center text-sm'>
                                <input
                                    type="text"
                                    placeholder='Search products'
                                    className='p-2 bg-gray-700 text-white outline-none'
                                />
                                <div className='bg-gray-900 p-2.5'>
                                    <SearchIcon className='h-4 w-4 text-white' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='relative group cursor-pointer'>
                        <ShoppingCart size={18} className='cursor-pointer hover:text-gray-300' />
                        <div className='absolute right-0 top-full hidden group-hover:block duration-500 bg-white text-gray-800 w-56 shadow-lg z-50'>
                            <div className='w-full border-t border-orange-600 flex flex-col items-center gap-4 text-sm p-4'>
                                <div className='w-full flex items-center gap-2 border-b pb-2'>
                                    <img
                                        src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/10.jpg"
                                        alt=""
                                        className='h-16 w-16 object-cover'
                                    />
                                    <div className='w-full'>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h3 className="font-semibold">Shirt</h3>
                                                <p className="flex items-center gap-1 text-xs">
                                                    <span>Size:</span>
                                                    <span className="text-gray-500">Large</span>
                                                </p>
                                                <p className="flex items-center gap-1 text-xs">
                                                    <span>Color:</span>
                                                    <span className="text-gray-500">Sky Blue</span>
                                                </p>
                                            </div>
                                            <div>
                                                <Trash className="text-red-600 h-3 w-3" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='w-full flex items-center gap-2 border-b pb-2'>
                                    <img
                                        src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/10.jpg"
                                        alt=""
                                        className='h-16 w-16 object-cover rounded-lg'
                                    />
                                    <div className='w-full'>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h3 className="font-semibold">Shirt</h3>
                                                <p className="flex items-center gap-1 text-xs">
                                                    <span>Size:</span>
                                                    <span className="text-gray-500">Large</span>
                                                </p>
                                                <p className="flex items-center gap-1 text-xs">
                                                    <span>Color:</span>
                                                    <span className="text-gray-500">Sky Blue</span>
                                                </p>
                                            </div>
                                            <div>
                                                <Trash className="text-red-600 h-3 w-3" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Total */}
                                <div className='w-full flex justify-between items-center text-gray-600 border-b pb-2'>
                                    <p>total</p>
                                    <p>=$150.00</p>
                                </div>
                                {/* Buttons */}
                                <div className='w-full flex flex-col justify-center items-center space-y-2'>
                                    <button className='flex items-center gap-2 hover:text-orange-600 hover:duration-300'>
                                        go to cart
                                        <ChevronRight className='h-3 w-3'/>
                                    </button>
                                    <button className='w-full bg-black text-white text-center py-2'>
                                        Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

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
                        to={"/shop"}
                        onClick={() => setOpen(false)}
                    >
                        SHOP
                    </Link>
                    <Link
                        to={"/lookbook"}
                        onClick={() => setOpen(false)}
                    >
                        LOOKBOOK
                    </Link>
                    <Link
                        to={"/blog"}
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
                        to={"/about"}
                        onClick={() => setOpen(false)}
                    >
                        ABOUT
                    </Link>
                    <Link
                        to={"/contact"}
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
