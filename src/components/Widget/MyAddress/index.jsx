import { memo } from 'react';
import { Link } from 'react-router-dom';

import { MdLocationOn } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';

const MyAddress = () => {
    return (
        <>
            <div className="bg-gray-100 rounded-md p-1">
                <div className="w-full h-48 bg-white border border-2 p-2">
                    <div className="flex items-center mb-5">
                        <MdLocationOn className='inline text-xl' /> <Link to='#' className='text-sm'>Kayıtlı adreslerim </Link>
                    </div>
                    <ul>
                        <li className='flex items-center'>
                            <AiFillHome className='text-3xl text-red-500' />
                            <div className="px-2">
                                <Link to="#">
                                    <strong className='block text-xs'>Ev Adresim</strong>
                                    <span className='text-xs'>(Kocaeli - Gebze)</span>
                                </Link>
                            </div>
                        </li>
                        <li className='flex items-center'>
                            <AiFillHome className='text-3xl text-gray-300' />
                            <div className="px-2">
                                <strong className='block text-xs'>İş Adresim</strong>
                                <span className='text-xs'>(İstanbul - Levent)</span>
                            </div>
                        </li>
                    </ul>

                </div>
                <Link to="#" className='text-red-600 text-sm underline underline-offset-1 block m-2'>Yeni adres ekle</Link>
            </div>
        </>

    );
};

export default memo(MyAddress);