import React, { useState } from 'react'
import ProductItem from './ProductItem'

const products = [
    { id: 1, name: 'Classic T-Shirt', price: '$25', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/2.jpg' },
    { id: 2, name: 'Leather Shoes', price: '$80', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/10.jpg' },
    { id: 3, name: 'Stylish Bag', price: '$50', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/14.jpg' },
    { id: 4, name: 'Denim Jacket', price: '$65', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/8.jpg' },
    { id: 5, name: 'Denim Jacket', price: '$65', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/6.jpg' },
    { id: 6, name: 'Classic T-Shirt', price: '$25', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/4.jpg' },
    { id: 7, name: 'Stylish Bag', price: '$50', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/14.jpg' },
    { id: 8, name: 'Denim Jacket', price: '$65', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/8.jpg' },
    { id: 9, name: 'Leather Shoes', price: '$80', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/8.jpg' },
    { id: 10, name: 'Running Sneakers', price: '$60', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/4.jpg' },
    { id: 11, name: 'Stylish Bag', price: '$50', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/14.jpg' },
    { id: 12, name: 'Denim Jacket', price: '$65', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/8.jpg' },
    { id: 13, name: 'Stylish Bag', price: '$50', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/2.jpg' },
    { id: 14, name: 'Travel Backpack', price: '$75', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/8.jpg' },
    { id: 15, name: 'Stylish Bag', price: '$50', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/14.jpg' },
    { id: 16, name: 'Denim Jacket', price: '$65', image: 'https://preview.hasthemes.com/tasnm-preview/tasnm/img/products/8.jpg' }
];

const tabs = [
    { name: 'ALL SHOP', value: 'allshop' },
    { name: 'CLOTHING', value: 'clothing' },
    { name: 'SHOES', value: 'shoes' },
    { name: 'BAGS', value: 'bags' }
]

const TabSection = () => {
    const [activeTab, setActiveTab] = useState('allshop')

    return (
        <div className='w-full max-w-6xl mx-auto p-4'>
            {/* Tabs Header */}
            <div className='flex flex-wrap justify-center border rounded-md bg-background overflow-hidden'>
                {tabs.map(tab => (
                    <button
                        key={tab.value}
                        onClick={() => setActiveTab(tab.value)}
                        className={`flex-1 sm:flex-none text-sm font-medium px-4 py-2 border-r rounded-lg last:border-none transition-all duration-300
              ${activeTab === tab.value
                                ? 'bg-orange-600 text-white shadow-inner'
                                : 'bg-transparent text-gray-600 hover:bg-orange-50 hover:text-orange-600'
                            }`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

            {/* Tabs Content */}
            <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {/* {products[activeTab].map((item) => (
                    <ProductItem item={item} />
                ))} */}
            </div>
        </div>
    )
}

export default TabSection
