import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";

export default function ProductItem({products}){ 
    return <>
        <div
            key={products.id}
            className='bg-white rounded-lg shadow-md overflow-hidden border hover:shadow-lg transition-all duration-300' >
            <img
                src={products.image}
                alt={products.name}
                className='w-full h-50% object-cover'
            />
            <div className='space-y-2'>
                <h3 className='text-base font-semibold mt-2'>{products.name}</h3>
                <div className="flex justify-between items-center">
                    <p className="font-bold gap-10">{products.price}</p>
                    <div className="flex items-center gap-1">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke />
                    </div>
                </div>
            </div>
        </div>
        </>
}