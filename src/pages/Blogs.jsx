import { MessageCircle, Tag, User } from "lucide-react"
import { Link } from "react-router-dom"

function Blog() {
    return (
        <div className="w-full">
            <div className="relative w-full h-96 overflow-hidden shadow-lg group  ">
                <img
                    src="https://as1.ftcdn.net/v2/jpg/17/04/32/58/1000_F_1704325805_aLhcj2PTtIt1q8zHJA6lJH0ILMehjxWl.jpg"
                    alt="bag"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0  flex flex-col item-center justify-center text-center text-white overlay">
                    <h1 className="text-4xl">BLOG</h1>
                    <div className="flex justify-center items-center gap-2 text-sm mt-5">
                        <Link to={"/"}>
                            HOME
                        </Link> |
                        <p>BLOG</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-start gap-10 p-20">
                {/* Left Section */}
                <div className="space-y-8 w-[70%]">
                    <div className="flex flex-col items-start text-gray-500 space-y-4">
                        <img src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/banner/12.jpg" alt="" />
                        <h3>Take Interior Design to a New Level</h3>
                        <div className="flex items-center text-sm  gap-4">
                            <div className="flex items-center italic-text gap-2">
                                <User size={14} />
                                <p>By Admin</p>
                            </div>
                            <div className="flex items-center italic-text gap-2">
                                <Tag size={14} />
                                <p>Consectetur</p>
                            </div>
                            <div className="flex items-center italic-text gap-2">
                                <MessageCircle size={16} />
                                <p>0 Comment</p>
                            </div>
                        </div>
                        <p className="text-sm">Aenean id tellus justo elit, sit amet sodales purus vulputate non. Nullam lorem eros, posuere nec sodales at, aliquet. Ut luctus justo elit, sit amet sodales purus vulputate non. Nullam lorem eros, posuere nec sodales at, aliquet gravida dui. Aenean id tellus in libero porta ultricies. Donec viverra interdum...</p>
                        <button className="border border-gray-400 text-sm text-gray-500 py-2 px-4">
                            READ MORE
                        </button>
                    </div>
                    <div className="flex flex-col items-start text-gray-500 space-y-4 ">
                        <img src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/banner/13.jpg" alt="" />
                        <h3>Take Interior Design to a New Level</h3>
                        <div className="flex items-center text-sm  gap-4">
                            <div className="flex items-center italic-text gap-2">
                                <User size={14} />
                                <p>By Admin</p>
                            </div>
                            <div className="flex items-center italic-text gap-2">
                                <Tag size={14} />
                                <p>Consectetur</p>
                            </div>
                            <div className="flex items-center italic-text gap-2">
                                <MessageCircle size={16} />
                                <p>0 Comment</p>
                            </div>
                        </div>
                        <p className="text-sm">Aenean id tellus justo elit, sit amet sodales purus vulputate non. Nullam lorem eros, posuere nec sodales at, aliquet. Ut luctus justo elit, sit amet sodales purus vulputate non. Nullam lorem eros, posuere nec sodales at, aliquet gravida dui. Aenean id tellus in libero porta ultricies. Donec viverra interdum...</p>
                        <button className="border border-gray-400 text-sm text-gray-500 py-2 px-4">
                            READ MORE
                        </button>
                    </div>
                    <div className="flex flex-col items-start text-gray-500 space-y-4">
                        <img src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/banner/14.jpg" alt="" />
                        <h3>Take Interior Design to a New Level</h3>
                        <div className="flex items-center text-sm  gap-4">
                            <div className="flex items-center italic-text gap-2">
                                <User size={14} />
                                <p>By Admin</p>
                            </div>
                            <div className="flex items-center italic-text gap-2">
                                <Tag size={14} />
                                <p>Consectetur</p>
                            </div>
                            <div className="flex items-center italic-text gap-2">
                                <MessageCircle size={16} />
                                <p>0 Comment</p>
                            </div>
                        </div>
                        <p className="text-sm">Aenean id tellus justo elit, sit amet sodales purus vulputate non. Nullam lorem eros, posuere nec sodales at, aliquet. Ut luctus justo elit, sit amet sodales purus vulputate non. Nullam lorem eros, posuere nec sodales at, aliquet gravida dui. Aenean id tellus in libero porta ultricies. Donec viverra interdum...</p>
                        <button className="border border-gray-400 text-sm text-gray-500 py-2 px-4">
                            READ MORE
                        </button>
                    </div>
                </div>
                {/* Right Section */}
                <div className="space-y-8">
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border border-gray-300 p-2"
                        />
                        <button className="bg-orange-600 text-white py-2 px-4">
                            Search
                        </button>
                    </div>
                    <div>
                        <h1 className="text-xl font-light">LATEST POST</h1>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog