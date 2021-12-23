import { memo } from 'react';
import { BsFillBasket2Fill } from 'react-icons/bs';

const Basket = () => {
    return (
        <>
            <div className="border">
                <div className="bg-pink-600 font-bold text-white p-2">
                    YEMEK SEPETİM
                </div>
                <div className="bg-gray-100 py-2 pl-4 text-xs">
                    Kocaeli (Gebze)
                </div>
                <div className="flex items-center p-2">
                    <BsFillBasket2Fill className='text-gray-200 text-5xl' />
                    <span className='font-bold text-xs ml-4'>Sepetiniz henüz boş.</span>
                </div>
            </div>
        </>
    )
}

export default memo(Basket); 