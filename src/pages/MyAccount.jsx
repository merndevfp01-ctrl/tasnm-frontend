import { Link } from "react-router-dom";
import React, { useState } from 'react';

function MyAccount() {
    const [openSection, setOpenSection] = useState(null);

    const handleToggle = (sectionName) => {
        setOpenSection(openSection === sectionName ? null : sectionName);
    };
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
            {/* Accordian */}
            <div className="p-10 md:p-16">
                {/* Accordion Section 1 */}
                <div className="mb-2 border border-gray-200">
                    <button
                        className="w-full text-left text-white p-4 bg-gray-800 focus:outline-none flex justify-between items-center"
                        onClick={() => handleToggle('section1')}
                    >
                        <span className="text-sm">EDIT YOUR ACCOUNT INFORMATION</span>
                        <span>{openSection === 'section1' ? '−' : '+'}</span>
                    </button>
                    {openSection === 'section1' && (
                        <div className="p-8 bg-white">
                            <h1 className="text-sm md:text-lg text-gray-900 font-bold mb-4">
                                MY ACCOUNT INFORMATION
                            </h1>
                            <form>
                                <h3 className="text-sm md:text-lg text-gray-800 font-medium border-b pb-3">
                                    Your Personal Details
                                </h3>
                                <div className=" flex flex-col md:flex-row gap-4 my-4">
                                    <label className="w-full md:w-[15%] md:text-right text-gray-700 mb-0 md:mb-2">
                                        <span className="text-red-600">*</span>
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full md:w-[85%] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                        placeholder="Enter first name"
                                    />
                                </div>
                                <div className="flex flex-col md:flex-row gap-4 mb-4">
                                    <label className="w-full md:w-[15%] md:text-right text-gray-700 mb-0 md:mb-2">
                                        <span className="text-red-600">*</span>
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full md:w-[85%] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                        placeholder="Enter last name"
                                    />
                                </div>
                                <div className="flex flex-col md:flex-row gap-4 mb-4">
                                    <label className="w-full md:w-[15%] md:text-right text-gray-700 mb-0 md:mb-2">
                                        <span className="text-red-600">*</span>
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full md:w-[85%] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                        placeholder="E-mail"
                                    />
                                </div>
                                <div className="flex flex-col md:flex-row gap-4 mb-4">
                                    <label className="w-full md:w-[15%] md:text-right text-gray-700 mb-0 md:mb-2">
                                        <span className="text-red-600">*</span>
                                        Telephone
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full md:w-[85%] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                        placeholder="Telephone"
                                    />
                                </div>
                                <div className="flex flex-col md:flex-row gap-4 mb-4">
                                    <label className="w-full md:w-[15%] md:text-right text-gray-700 mb-0 md:mb-2">
                                        <span className="text-red-600">*</span>
                                        Fax
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full md:w-[85%] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                        placeholder="Fax"
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <button
                                        type="submit"
                                        className="bg-black text-white text-sm font-semibold py-2 px-4"
                                    >
                                        BACK
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-black text-white text-sm font-semibold py-2 px-4"
                                    >
                                        CONTINUE
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>

                {/* Accordion Section 2 */}
                <div className="mb-2 border border-gray-200 ">
                    <button
                        className="w-full text-left text-white p-4 bg-gray-800 focus:outline-none flex justify-between items-center"
                        onClick={() => handleToggle('section2')}
                    >
                        <span className="text-sm">CHANGE YOUR PASSWORD</span>
                        <span>{openSection === 'section2' ? '−' : '+'}</span>
                    </button>
                    {openSection === 'section2' && (
                        <div className="p-8 bg-white">
                            <h1 className="text-sm md:text-lg text-gray-900 font-bold mb-4">
                                CHANGE PASSWORD
                            </h1>
                            <form>
                                <h3 className="text-sm md:text-lg text-gray-800 font-medium border-b pb-3">
                                    Your Password
                                </h3>
                                <div className="flex flex-col md:flex-row items-center gap-4 my-4">
                                    <label className="w-full md:w-[15%] md:text-right text-gray-700 mb-0 md:mb-2">
                                        <span className="text-red-600">*</span>
                                        Password
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full md:w-[85%] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                        placeholder="Pasword"
                                    />
                                </div>
                                <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                                    <label className="w-full md:w-[15%] md:text-right text-gray-700 mb-0 md:mb-2">
                                        <span className="text-red-600">*</span>
                                        Password Confirm
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full md:w-[85%] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                        placeholder="Password Confirm"
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <button
                                        type="submit"
                                        className="bg-black text-white text-sm font-semibold py-2 px-4"
                                    >
                                        BACK
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-black text-white text-sm font-semibold py-2 px-4"
                                    >
                                        CONTINUE
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>

                {/* Accordion Section 3 */}
                <div className="mb-2 border border-gray-200">
                    <button
                        className="w-full text-left  text-white p-4 bg-gray-800 focus:outline-none flex justify-between items-center"
                        onClick={() => handleToggle('section3')}
                    >
                        <span className="text-sm">MODIFY YOUR ADDRESS BOOK ENTRIES</span>
                        <span>{openSection === 'section3' ? '−' : '+'}</span>
                    </button>
                    {openSection === 'section3' && (
                        <div className="p-4 bg-white">
                            <h1 className="text-sm md:text-lg text-gray-900 font-bold mb-4">
                                ADDRESS BOOK ENTRIES
                            </h1>
                            <div className="border flex items-center mb-4">
                                <div className="w-full flex flex-col justify-center items-center border-r p-4">
                                    <p>Farhana hayder (shuvo)</p>
                                    <p>hastech</p>
                                    <p>Road#1 , Block#c</p>
                                    <p>Rampura.</p>
                                    <p>Dhaka</p>
                                    <p>Bangladesh</p>
                                </div>
                                <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm w-full">
                                    <button className="bg-orange-600 hover:bg-black text-white py-2 px-4">
                                        EDIT
                                    </button>
                                    <button className="bg-black hover:bg-orange-600 text-white py-2 px-4">
                                        DELETE
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <button
                                    type="submit"
                                    className="bg-black text-white text-sm font-semibold py-2 px-4"
                                >
                                    BACK
                                </button>
                                <button
                                    type="submit"
                                    className="bg-black text-white text-sm font-semibold py-2 px-4"
                                >
                                    CONTINUE
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Accordion Section 4 */}
                <div className="border border-gray-200 ">
                    <button
                        className="w-full text-left text-white p-4 bg-gray-800 focus:outline-none flex justify-between items-center"
                        onClick={() => handleToggle('section4')}
                    >
                        <span className="text-sm">MODIFY YOUR WISH LIST</span>
                        <span>{openSection === 'section4' ? '−' : '+'}</span>
                    </button>
                    {openSection === 'section4' && (
                        <div className="p-4 bg-white">
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                                        Phone:
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
                                        Address:
                                    </label>
                                    <textarea
                                        id="address"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Enter your address"
                                        rows="3"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Save
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MyAccount