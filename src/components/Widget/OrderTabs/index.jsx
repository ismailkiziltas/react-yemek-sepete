import { memo } from 'react';
import { BsFillCalendar2DateFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { MdFastfood, MdOutlineSupervisedUserCircle } from 'react-icons/md';

const OrderTabs = () => {
    return (
        <div className="w-3/4 border border-1 p-2 bg-gray-100 ml-4">
            <div className="bg-white h-60">
                <ul className='flex'>
                    <li className='w-full'><button type='button' className='border border-1 w-full py-5 px-2 text-md font-bold rounded-t-lg mr-2 bg-white'><BsFillCalendar2DateFill className='inline mr-2' /> Siparişlerim</button></li>
                    <li className='w-full'><button type='button' className='border border-1 w-full py-5 px-2 text-md font-bold rounded-t-lg mr-2 bg-gray-100'><AiFillStar className='inline mr-2' /> Favorilerim</button></li>
                    <li className='w-full'><button type='button' className='border border-1 w-full py-5 px-2 text-md font-bold rounded-t-lg mr-2 bg-gray-100'><MdFastfood className='inline mr-2' /> Yeni Restoranlar</button></li>
                    <li className='w-full'><button type='button' className='border border-1 w-full py-5 px-2 text-md font-bold rounded-t-lg mr-2 bg-gray-100'><MdOutlineSupervisedUserCircle className='inline mr-2' /> Süper Restoranlar</button></li>
                </ul>
            </div>
            <a href="#" className='text-red-600 block underline'>Daha fazlasını görüntüle</a>
        </div>
    );
}
export default memo(OrderTabs);