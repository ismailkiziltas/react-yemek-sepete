import { useState } from 'react';
import { memo } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import Style from './style.module.css';


const ProfileMenu = () => {
    const [openProfileMenu, setOpenProfileMenu] = useState(false);

    return (
        <div className="mt-4 mb-4" onClick={() => setOpenProfileMenu(!openProfileMenu)}>
            <div className="flex justify-around cursor-pointer items-center p-2 bg-gray-100 rounded-md">
                <img src="/profile-yemek-sepeti.png" className="w-1/6" alt="profilePhoto" />
                <div className="">
                    <h4 className="text-red-500 font-bold">İsmail Kızıltaş</h4>
                    <h6 className='text-sm'>13.114 Toplam Puan</h6>
                </div>
                <i className={`${openProfileMenu ? `${Style.rotateOverArrow}`:`${Style.rotateOutArrow}`}`}><IoIosArrowDown /></i>
            </div>
            <div className={`border  ${openProfileMenu ? `${Style.openMenu}` : `${Style.closeMenu}`}`}>
                <ul>
                    <li><a className='block font-bold px-4 py-2' href="#">Bildirimlerim</a></li>
                    <li><a className='block font-bold px-4 py-2' href="#">Profilim</a></li>
                    <li><a className='block font-bold px-4 py-2' href="#">Siparişlerim</a></li>
                    <li><a className='block font-bold px-4 py-2' href="#">Favorilerim</a></li>
                    <li><a className='block font-bold px-4 py-2' href="#">Adreslerim</a></li>
                    <li><a className='block font-bold px-4 py-2' href="#">Bilgilerim</a></li>
                    <li><a className='block font-bold px-4 py-4 text-red-600 bg-gray-100' href="#">ÇIKIŞ YAP</a></li>
                </ul>
            </div>
        </div>
    );
}

export default memo(ProfileMenu);
