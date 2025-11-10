import { useState, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Circle, Headset, Plane, RotateCcw } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import Shipping from "../components/Shipping";
import TabSection from "../components/TabSection";

const slider = [
    {
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: "https://preview.hasthemes.com/tasnm-preview/tasnm/img/testimonial/3.png",
        name: "RAYMONDS MORALES",
        designation: "CHAIRMEN"
    },
    {
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: "https://preview.hasthemes.com/tasnm-preview/tasnm/img/testimonial/2.png",
        name: "JHON DOE",
        designation: "CEO"
    },
    {
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: "https://preview.hasthemes.com/tasnm-preview/tasnm/img/testimonial/3.png",
        name: "TARUN",
        designation: "CHAIRMEN"
    }
]

function Home() {
    const [index, setIndex] = useState(0);
    return (
        <div className="w-full">
             <div className="w-full flex justify-center items-center"
                style={{
                    backgroundImage: "url('src/assets/men.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100vw",
                    height: "65vh"
                }}>
                <div className="flex flex-col justify-center items-center text-white space-y-2 md:ml-64 bg-black/40 backdrop-blur-sm rounded-lg p-6">
                    <p className="text-lg md:text-3xl font-semibold">NEW COLLECTION</p>
                    <p className="text-2xl hidden md:inline md:text-8xl font-medium drop-shadow-lg">MEN’s FASHION</p>
                    <p className="text-2xl hidden md:inline">Save Up To 40% Off</p>
                    <button className="border py-1 px-2 md:py-2 md:px-4 hover:bg-orange-600 bg-orange-500/90 rounded-lg shadow-md transition-all duration-300 hover:scale-105">
                        Shop Now
                    </button>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2 p-8 md:p-20">
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="relative w-80 h-56 overflow-hidden shadow-lg group rounded-xl hover:shadow-2xl transition-all duration-500">
                        <img
                            src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/banner/2.jpg"
                            alt="bag"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white p-4">
                            <h2 className="text-lg font-semibold">DYNAMIC JAZZ</h2>
                            <p className="text-sm">When Jazz starts to chase cars, the whole world stands still.</p>
                        </div>
                    </div>
                    <div className="relative w-80 h-56 overflow-hidden shadow-lg group rounded-xl hover:shadow-2xl transition-all duration-500">
                        <img
                            src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/banner/3.jpg"
                            alt="bag"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white p-4">
                            <h2 className="text-lg font-semibold">DYNAMIC JAZZ</h2>
                            <p className="text-sm">When Jazz starts to chase cars, the whole world stands still.</p>
                        </div>
                    </div>
                </div>
                <div className="relative w-80 h-full overflow-hidden shadow-lg group rounded-xl hover:shadow-2xl transition-all duration-500">
                    <img
                        src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/banner/r6.png"
                        alt="bag"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white p-4">
                        <h2 className="text-lg font-semibold">DYNAMIC JAZZ</h2>
                        <p className="text-sm">When Jazz starts to chase cars, the whole world stands still.</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="relative w-80 h-56 overflow-hidden shadow-lg group rounded-xl hover:shadow-2xl transition-all duration-500">
                        <img
                            src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/banner/4.jpg"
                            alt="bag"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white p-4">
                            <h2 className="text-lg font-semibold">DYNAMIC JAZZ</h2>
                            <p className="text-sm">When Jazz starts to chase cars, the whole world stands still.</p>
                        </div>
                    </div>
                    <div className="relative w-80 h-56 overflow-hidden shadow-lg group rounded-xl hover:shadow-2xl transition-all duration-500">
                        <img
                            src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/banner/5.jpg"
                            alt="bag"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white p-4">
                            <h2 className="text-lg font-semibold">DYNAMIC JAZZ</h2>
                            <p className="text-sm">When Jazz starts to chase cars, the whole world stands still.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature Product */}
            <div className="w-full justify-center items-center pb-20">
                <h1 className="text-2xl text-orange-600 text-center font-bold tracking-wide">
                    FEATURED PRODUCTS
                </h1>
                <TabSection/>
            </div>

            {/* Testimonials */}
            <div className="relative w-full h-full flex flex-col justify-center items-center">
                <img
                    src="https://plus.unsplash.com/premium_photo-1681400279564-729d7fde5f99?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2FsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400"
                    alt=""
                    className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 px-10 md:px-36 py-10 flex flex-col justify-center items-center text-center">
                    <h1 className="flex flex-col gap-1 justify-center items-center text-3xl text-white font-bold">
                        TESTIMONIALS
                        <div className="border-b w-48 bg-white"></div>
                    </h1>
                    <Swiper pagination={true} modules={[Pagination]} className="mySwiper mt-6">
                        {slider.map((data, i) => (
                            <SwiperSlide key={i} className="p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 hover:scale-105 transition-all duration-500">
                                <p className="text-center text-white mt-4 italic">
                                    {data.description}
                                </p>
                                <div className="mt-6 flex flex-col items-center space-y-1 md:space-y-2">
                                    <img
                                        src={data.image}
                                        alt=""
                                        className="w-16 h-16 rounded-full border-2 border-orange-500 shadow-md"
                                    />
                                    <h3 className="text-normal md:text-lg text-white font-bold">{data.name}</h3>
                                    <p className="text-sm text-gray-300">{data.designation}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* New Arrivals */}
            <div className="w-full p-20 bg-gray-50">
                <h1 className="text-orange-600 text-center text-2xl font-semibold mb-4">
                    NEW ARRIVALS
                    <div className="flex items-center justify-center gap-1">
                        <div className="border-b border-orange-600 w-20"></div>
                        <Circle className="h-4 w-4 text-orange-600" />
                        <div className="border-b border-orange-600 w-20"></div>
                    </div>
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
                    <div className="space-y-4 hover:scale-105 transition-all duration-300 shadow-lg rounded-xl overflow-hidden bg-white p-4">
                        <img src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/1.jpg" alt="" className="rounded-md"/>
                        <div>
                            <h3 className="font-semibold">PRODUCT TITLE</h3>
                            <div className="flex justify-between items-center">
                                <p className="font-bold text-orange-600">$52.00</p>
                                <div className="flex items-center gap-1">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 hover:scale-105 transition-all duration-300 shadow-lg rounded-xl overflow-hidden bg-white p-4">
                        <img src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/3.jpg" alt="" className="rounded-md"/>
                        <div>
                            <h3 className="font-semibold">PRODUCT TITLE</h3>
                            <div className="flex justify-between items-center">
                                <p className="font-bold text-orange-600">$52.00</p>
                                <div className="flex items-center gap-1">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 hover:scale-105 transition-all duration-300 shadow-lg rounded-xl overflow-hidden bg-white p-4">
                        <img src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/5.jpg" alt="" className="rounded-md"/>
                        <div>
                            <h3 className="font-semibold">PRODUCT TITLE</h3>
                            <div className="flex justify-between items-center">
                                <p className="font-bold text-orange-600">$52.00</p>
                                <div className="flex items-center gap-1">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 hover:scale-105 transition-all duration-300 shadow-lg rounded-xl overflow-hidden bg-white p-4">
                        <img src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/7.jpg" alt="" className="rounded-md"/>
                        <div>
                            <h3 className="font-semibold">PRODUCT TITLE</h3>
                            <div className="flex justify-between items-center">
                                <p className="font-bold text-orange-600">$52.00</p>
                                <div className="flex items-center gap-1">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* BLOG */}
            <div className="w-full p-20">
                <h1 className="text-orange-600 text-center text-2xl font-semibold mb-8">
                    FROM THE BLOG
                    <div className="flex items-center justify-center gap-1">
                        <div className="border-b border-orange-600 w-20"></div>
                        <Circle className="h-4 w-4 text-orange-600" />
                        <div className="border-b border-orange-600 w-20"></div>
                    </div>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
                    <div className="flex flex-col items-center justify-between bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-all duration-500">
                        <img
                            src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/blog/111.jpg"
                            alt=""
                            className="h-42 w-full mb-2 object-cover hover:scale-110 transition-transform duration-500"
                        />
                        <div className="text-sm text-gray-500 space-y-2 p-4">
                            <h1 className="text-2xl text-black hover:text-orange-600 duration-500 font-semibold">
                                75 OF RALPH LAURENY
                            </h1>
                            <p>in Fashion | Oct 31, 2014 | 0 comment</p>
                            <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. ...</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-all duration-500">
                        <img
                            src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/blog/222.jpg"
                            alt=""
                            className="h-42 w-full mb-2 object-cover hover:scale-110 transition-transform duration-500"
                        />
                        <div className="text-sm text-gray-500 space-y-2 p-4">
                            <h1 className="text-2xl text-black hover:text-orange-600 duration-500 font-semibold">
                                75 OF RALPH LAURENY
                            </h1>
                            <p>in Fashion | Oct 31, 2014 | 0 comment</p>
                            <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. ...</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-all duration-500">
                        <img
                            src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/blog/333.jpg"
                            alt=""
                            className="h-42 w-full mb-2 object-cover hover:scale-110 transition-transform duration-500"
                        />
                        <div className="text-sm text-gray-500 space-y-2 p-4">
                            <h1 className="text-2xl text-black hover:text-orange-600 duration-500 font-semibold">
                                75 OF RALPH LAURENY
                            </h1>
                            <p>in Fashion | Oct 31, 2014 | 0 comment</p>
                            <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. ...</p>
                        </div>
                    </div>
                </div>
            </div>
            <Shipping />
        </div>
    )
}

export default Home;
