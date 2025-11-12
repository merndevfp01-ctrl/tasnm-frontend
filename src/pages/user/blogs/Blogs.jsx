import { MessageCircle, Tag, User } from "lucide-react"
import { Link } from "react-router-dom"
import Shipping from "../../../components/Shipping"
import SiteLayout from "../../layouts/SiteLayout"

function Blog() {
    return (
        <SiteLayout>
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
                <div className="flex flex-col md:flex-row justify-center items-start gap-10 p-10 md:p-20">
                    {/* Left Section */}
                    <div className="space-y-8 w-full md:w-[75%]">
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
                    <div className="space-y-8 w-full md:w-[25%]">
                        <div className="flex w-full">
                            <input
                                type="text"
                                placeholder="Search"
                                className="border border-gray-300 p-2 w-full"
                            />
                            <button className="bg-orange-600 text-white py-2 px-4">
                                Search
                            </button>
                        </div>
                        <div>
                            <h1 className="text-xl font-light mb-4">
                                LATEST POST
                            </h1>
                            <div className="flex justify-between items-center border-b pb-4 gap-4">
                                <img
                                    src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/banner/s1.jpg"
                                    alt=""
                                    className="h-28 w-28 object-contain"
                                />
                                <div className="text-sm text-gray-400 space-y-2">
                                    <p>The summer holidays are wonderful. Dressing for them can</p>
                                    <p className="text-orange-600">Dec, 11, 2015</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center border-b py-4 gap-4">
                                <img
                                    src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/banner/s2.jpg"
                                    alt=""
                                    className="h-28 w-28 object-contain"
                                />
                                <div className="text-sm text-gray-500 space-y-2">
                                    <p>The summer holidays are wonderful. Dressing for them can</p>
                                    <p className="text-orange-600">Dec, 11, 2015</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center border-b py-4 gap-4">
                                <img
                                    src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/banner/s3.jpg"
                                    alt=""
                                    className="h-28 w-28 object-contain"
                                />
                                <div className="text-sm text-gray-500 space-y-2">
                                    <p>The summer holidays are wonderful. Dressing for them can</p>
                                    <p className="text-orange-600">Dec, 11, 2015</p>
                                </div>
                            </div>
                        </div>
                        {/* Recent Post */}
                        <div>
                            <h1 className="text-xl font-light mb-4">
                                RECENT POST
                            </h1>
                            <div className="text-gray-500 text-sm">
                                <h3 className=" border-b pb-2 hover:text-orange-600">That most modern</h3>
                                <h3 className=" border-b py-2 hover:text-orange-600">Glance into the future of android</h3>
                                <h3 className=" border-b py-2 hover:text-orange-600">Nullam at tellus vehicula</h3>
                                <h3 className=" border-b py-2 hover:text-orange-600">Summer Classics in Positano</h3>
                                <h3 className=" border-b py-2 hover:text-orange-600">Photography Tips From Wai Su</h3>
                            </div>
                        </div>
                        {/* Recent Comments */}
                        <div>
                            <h1 className="text-xl font-light mb-4">
                                RECENT COMMENTS
                            </h1>
                            <div className="text-gray-500 text-sm">

                            </div>
                        </div>
                        {/* Archives */}
                        <div>
                            <h1 className="text-xl font-light mb-4">
                                ARCHIVES
                            </h1>
                            <div className="text-gray-500 text-sm">
                                <h3 className=" border-b pb-2 hover:text-orange-600">December 2015</h3>
                                <h3 className=" border-b py-2 hover:text-orange-600">November 2015</h3>
                            </div>
                        </div>
                        {/* Categories */}
                        <div>
                            <h1 className="text-xl font-light mb-4">
                                CATEGORIES
                            </h1>
                            <div className="text-gray-500 text-sm">
                                <h3 className=" border-b pb-2 hover:text-orange-600">Consectetur</h3>
                                <h3 className=" border-b py-2 hover:text-orange-600">Fashion</h3>
                                <h3 className=" border-b py-2 hover:text-orange-600">Lorem</h3>
                                <h3 className=" border-b py-2 hover:text-orange-600">Uncategories</h3>
                            </div>
                        </div>
                        {/* Meta */}
                        <div>
                            <h1 className="text-xl font-light mb-4">
                                META
                            </h1>
                            <div className="text-gray-500 text-sm">
                                <h3 className=" border-b pb-2 hover:text-orange-600">Register</h3>
                                <h3 className=" border-b py-2 hover:text-orange-600">Login</h3>
                                <h3 className=" border-b py-2 hover:text-orange-600">Entries RSS</h3>
                                <h3 className=" border-b py-2 hover:text-orange-600">Comments RSS</h3>
                                <h3 className=" border-b py-2 hover:text-orange-600">WordPress.org</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <Shipping />
            </div>
        </SiteLayout>
    )
}

export default Blog