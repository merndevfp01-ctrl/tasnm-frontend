import { ChevronRight, Mail, MapPin, Phone, Plane } from "lucide-react"
import { LiaCcVisa } from "react-icons/lia";
import { FaCcPaypal } from "react-icons/fa";
import { LiaCcStripe } from "react-icons/lia";
import { FaCcDiscover } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
function Footer() {
    return (
        <div className="w-full pt-16 bg-[#2a2a2a] text-white">
            <div className="flex flex-col md:flex-row justify-start md:justify-between items-start gap-8 border-b border-gray-600 px-10 md:px-20">
                {/* Contact */}
                <div className="flex flex-col mb-5 w-full">
                    <h3 className="text-lg font-semibold border-b border-gray-600 pb-2">CONTACT US</h3>
                    <div className="space-y-4 mt-4">
                        <div className="flex justify-start items-start gap-4">
                            <MapPin size={16} />
                            <p>
                                My Company, 45 Puffin Street 1245 <br />
                                Poffinville France.
                            </p>
                        </div>
                        <div className="flex justify-start items-start gap-4">
                            <Phone size={16} />
                            <p>
                                +201 (987) 6641 053 <br />
                                +202 (987) 6641 056
                            </p>
                        </div>
                        <div className="flex justify-start items-start gap-4">
                            <Mail size={16} />
                            <p>
                                info@domainname.com <br />
                                company@outlook.com
                            </p>
                        </div>
                    </div>
                </div>
                {/* My Account */}
                <div className="flex flex-col space-y-2 w-full text-sm">
                    <h3 className="text-lg font-semibold border-b border-gray-600 pb-2">MY ACCOUNT</h3>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center hover:text-orange-600 duration-400 border-b border-gray-600 pb-2">
                            <p>My Account</p>
                            <ChevronRight size={14} />
                        </div>
                        <div className="flex justify-between items-center hover:text-orange-600 duration-400 border-b border-gray-600 pb-2">
                            <p>My Whislist</p>
                            <ChevronRight size={14} />
                        </div>
                        <div className="flex justify-between items-center hover:text-orange-600 duration-400 border-b border-gray-600 pb-2">
                            <p>My Order</p>
                            <ChevronRight size={14} />
                        </div>
                        <div className="flex justify-between items-center hover:text-orange-600 duration-400 border-b border-gray-600 pb-2">
                            <p>My Credit Slips</p>
                            <ChevronRight size={14} />
                        </div>
                        <div className="flex justify-between items-center hover:text-orange-600">
                            <p>My Address</p>
                            <ChevronRight size={14} />
                        </div>
                    </div>

                </div>
                {/* Customer Service */}
                <div className="flex flex-col space-y-2 w-full text-sm">
                    <h3 className="text-lg font-semibold border-b border-gray-600 pb-2">CUSTOMER SERVICE</h3>
                    <div className="flex justify-between items-center hover:text-orange-600 duration-400 border-b border-gray-600 pb-2">
                        <p>Contact Us</p>
                        <ChevronRight size={14} />
                    </div>
                    <div className="flex justify-between items-center hover:text-orange-600 duration-400 border-b border-gray-600 pb-2">
                        <p>Return</p>
                        <ChevronRight size={14} />
                    </div>
                    <div className="flex justify-between items-center hover:text-orange-600 duration-400 border-b border-gray-600 pb-2">
                        <p>Brands</p>
                        <ChevronRight size={14} />
                    </div>
                    <div className="flex justify-between items-center hover:text-orange-600 duration-400 border-b border-gray-600 pb-2">
                        <p>Site Map</p>
                        <ChevronRight size={14} />
                    </div>
                    <div className="flex justify-between items-center hover:text-orange-600 ">
                        <p>Gift Voucher</p>
                        <ChevronRight size={14} />
                    </div>
                </div>
                {/* News Letter */}
                <div className="flex flex-col space-y-4 text-sm w-full mb-8">
                    <h3 className="text-lg font-semibold border-b border-gray-600 pb-2">NEWSLETTER</h3>
                    <p className="">Lorem ipsum dolor sit amet, consectetures do adipisicing elit, sed do eiusmod tempores incididunt ut labore</p>
                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Enter your mail"
                            className="border border-gray-600 w-full bg-transparent p-2"
                        />
                        <button className="w-24 text-gray-400 border border-gray-600 bg-transparent hover:bg-orange-600 hover:text-white duration-400 p-2">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-20 py-8">
                <div className="flex items-center gap-4">
                    <LiaCcVisa size={36} />
                    <FaCcPaypal size={30} />
                    <LiaCcStripe size={36} />
                    <FaCcDiscover size={30} />
                </div>
                <div className="flex items-center gap-4">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaGooglePlusG />
                    <FaLinkedinIn />
                    <AiFillInstagram />
                </div>

            </div>
            <div className="flex justify-center items-center bg-black text-white p-4 text-sm">
                <p>© 2016 Devitems. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer