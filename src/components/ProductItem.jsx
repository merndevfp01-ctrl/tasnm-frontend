import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";

export default function ProductItem({item}){ 
    return <>
        <div
            key={item.id}
            className='bg-white rounded-lg shadow-md overflow-hidden border hover:shadow-lg transition-all duration-300' >
            <img
                src={item.image}
                alt={item.name}
                className='w-full h-50% object-cover'
            />
            <div className='space-y-2'>
                <h3 className='text-base font-semibold mt-2'>{item.name}</h3>
                <div className="flex justify-between items-center">
                    <p className="font-bold gap-10">{item.price}</p>
                    <div className="flex items-center gap-1">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke />
                    </div>
                </div>
            </div>
        </div>
        </>
}