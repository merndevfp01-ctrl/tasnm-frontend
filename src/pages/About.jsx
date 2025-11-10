import { Link } from "react-router-dom"
import Shipping from "../components/Shipping"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const clients = [
    {
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: "https://preview.hasthemes.com/tasnm-preview/tasnm/img/testimonial/3.png",
        name: "MONICA",
        designation: "Web Developer"
    },
    {
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: "https://preview.hasthemes.com/tasnm-preview/tasnm/img/testimonial/2.png",
        name: "ROSE",
        designation: "Market Researcher"
    },
    {
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: "https://preview.hasthemes.com/tasnm-preview/tasnm/img/testimonial/3.png",
        name: "TERESA",
        designation: "Programmer"
    }
]

function About() {
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
                    <h1 className="text-4xl">ABOUT US</h1>
                    <div className="flex justify-center items-center gap-2 text-sm mt-5">
                        <Link to={"/"}>
                            HOME
                        </Link> |
                        <p>ABOUT US</p>
                    </div>
                </div>
            </div>
            {/* About */}
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start p-8 md:p-20 gap-10">
                <img
                    src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/about/team30.jpg"
                    alt=""
                    className="h-full w-full md:w-[50%]"
                />
                <div className="space-y-4">
                    <h1 className="text-xl md:text-4xl flex items-center gap-3">
                        ABOUT
                        <span className="text-orange-600 border-b border-orange-600">TASNM</span>
                    </h1>
                    <p className="text-gray-500">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.Donec pede justo, fringilla vel,<br />
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes
                    </p>
                    <div className="space-y-4 text-sm text-gray-400 p-4">
                        <p>We love products that work perfectly and look beautiful. </p>
                        <p>We create base on a deeply analysis of your project.</p>
                        <p>We are create design with really high quality standards.</p>
                    </div>
                    <button className="border border-orange-600 hover:bg-orange-600 text-sm text-gray-500 hover:text-white hover:duration-500 p-2">
                        LEARN MORE
                    </button>
                </div>
            </div>
            {/* Clients */}
            <div className="flex flex-col justify-center items-center text-center px-8 md:px-20">
                <div className="flex flex-col text-center">
                    <h3 className="text-xl md:text-3xl">
                        WHAT CLIENTS <span className="text-orange-600 border-b border-orange-600">SAYS</span>
                    </h3>
                    <p className="text-gray-500 mt-4">Lorem ipsum scelerisque molestie id molestie magna ante etiam</p>
                </div>
                <Swiper pagination={true} modules={[Navigation]} className="mySwiper mt-6">
                    {clients.map((data, i) => (
                        <SwiperSlide
                            key={i}
                            className="p-6 flex flex-col justify-center items-center bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 hover:scale-105 transition-all duration-500"
                        >
                            <div className="flex justify-center items-center w-full">
                                <img
                                    src={data.image}
                                    alt=""
                                    className="w-16 h-16 rounded-full border-2 border-orange-500 shadow-md mx-auto"
                                />
                            </div>
                            <div className="mt-6 flex flex-col items-center space-y-1 md:space-y-2">
                                <p className="text-center text-black mt-4 italic">
                                    {data.description}
                                </p>
                                <h3 className="text-normal md:text-lg text-black font-bold">{data.name}</h3>
                                <p className="text-sm text-black">--{data.designation}--</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
            {/* Creattive Member */}
            <div className="flex flex-col justify-center items-center text-center p-8 md:p-20">
                <div className="flex flex-col text-center">
                    <h3 className="text-3xl">
                        OUR CREATIVE <span className="text-orange-600 border-b border-orange-600">MEMBER</span>
                    </h3>
                    <p className="text-gray-500 mt-4">Our skill is really high quality and standard for build your project.</p>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
                    <div className="flex flex-col justify-center items-center space-y-4">
                        <div className="relative  overflow-hidden group">
                            <img
                                src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/about/member1.jpg"
                                width={500}
                                height={400}
                                alt=""
                                className="object-cover"
                            />

                            <div className="absolute bottom-0 right-0 left-0  flex items-center text-center justify-center hover:bg-[#009C4A]/40">
                                <div className=" text-white p-4 rounded-md opacity-0 translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                    <h2 className="text-[20px] font-bold">
                                        Jennifer Lawrence
                                    </h2>
                                    <p className="">CEO FOUNDER</p>
                                </div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum</p>
                        <div className="flex items-center gap-4">
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <FaFacebookF color="#FFFFFF" />
                            </div>
                            <div className="bg-blue-400 p-2 rounded-lg">
                                <FaTwitter color="#FFFFFF" />
                            </div>
                            <div className="bg-orange-600 p-2 rounded-lg">
                                <FaGooglePlusG color="#FFFFFF" />
                            </div>
                            <div className="bg-[#337ab7] p-2 rounded-lg">
                                <FaLinkedinIn color="#FFFFFF" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-4">
                        <div className="relative  overflow-hidden group">
                            <img
                                src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/about/member2.jpg"
                                width={500}
                                height={400}
                                alt=""
                                className="object-cover"
                            />

                            <div className="absolute bottom-0 right-0 left-0  flex items-center text-center justify-center hover:bg-[#009C4A]/40">
                                <div className=" text-white p-4 rounded-md opacity-0 translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                    <h2 className="text-[20px] font-bold">
                                        Martin Jerry
                                    </h2>
                                    <p className="">CEO FOUNDER</p>
                                </div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum</p>
                        <div className="flex items-center gap-4">
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <FaFacebookF color="#FFFFFF" />
                            </div>
                            <div className="bg-blue-400 p-2 rounded-lg">
                                <FaTwitter color="#FFFFFF" />
                            </div>
                            <div className="bg-orange-600 p-2 rounded-lg">
                                <FaGooglePlusG color="#FFFFFF" />
                            </div>
                            <div className="bg-[#337ab7] p-2 rounded-lg">
                                <FaLinkedinIn color="#FFFFFF" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-4">
                        <div className="relative  overflow-hidden group">
                            <img
                                src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/about/member3.jpg"
                                width={500}
                                height={400}
                                alt=""
                                className="object-cover"
                            />

                            <div className="absolute bottom-0 right-0 left-0  flex items-center text-center justify-center hover:bg-[#009C4A]/40">
                                <div className=" text-white p-4 rounded-md opacity-0 translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                    <h2 className="text-[20px] font-bold">
                                        Denny Louis
                                    </h2>
                                    <p className="">CEO FOUNDER</p>
                                </div>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum</p>
                        <div className="flex items-center gap-4">
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <FaFacebookF color="#FFFFFF" />
                            </div>
                            <div className="bg-blue-400 p-2 rounded-lg">
                                <FaTwitter color="#FFFFFF" />
                            </div>
                            <div className="bg-orange-600 p-2 rounded-lg">
                                <FaGooglePlusG color="#FFFFFF" />
                            </div>
                            <div className="bg-[#337ab7] p-2 rounded-lg">
                                <FaLinkedinIn color="#FFFFFF" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-4">
                        <div className="relative  overflow-hidden group">
                            <img
                                src="https://preview.hasthemes.com/tasnm-preview/tasnm/img/about/member4.jpg"
                                width={500}
                                height={400}
                                alt=""
                                className="object-cover"
                            />

                            <div className="absolute bottom-0 right-0 left-0  flex items-center text-center justify-center hover:bg-[#009C4A]/40">
                                <div className=" text-white p-4 rounded-md opacity-0 translate-y-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                    <h2 className="text-[20px] font-bold">
                                        Michal Jhonson
                                    </h2>
                                    <p className="">CEO FOUNDER</p>
                                </div>
                            </div>
                        </div>                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer condimentum</p>
                        <div className="flex items-center gap-4">
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <FaFacebookF color="#FFFFFF" />
                            </div>
                            <div className="bg-blue-400 p-2 rounded-lg">
                                <FaTwitter color="#FFFFFF" />
                            </div>
                            <div className="bg-orange-600 p-2 rounded-lg">
                                <FaGooglePlusG color="#FFFFFF" />
                            </div>
                            <div className="bg-[#337ab7] p-2 rounded-lg">
                                <FaLinkedinIn color="#FFFFFF" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sign Up */}
            <div className="flex flex-col justify-center items-center text-center px-8 md:px-20 pb-20">
                <h1 className="text-xl md:text-2xl font-light mb-4">SIGN UP FOR NEWSLETTER</h1>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <input
                        type="text"
                        placeholder="Search"
                        className="border border-orange-600 w-56 md:w-96 px-4 py-2"
                    />
                    <button className="text-white bg-orange-600 hover:bg-orange-700 px-5 py-2">
                        Sign Up
                    </button>
                </div>
            </div>
            <Shipping />
        </div>
    )
}
export default About