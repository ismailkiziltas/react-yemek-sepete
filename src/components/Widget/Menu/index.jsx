import { memo, useState } from 'react';
import Style from './style.module.css';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';

import MenuData from '../../../__mocks__/MenuData';

const Aside = () => {
    const [openProfileMenu, setOpenProfileMenu] = useState(false);

    return (
        <aside>
            <div className="mb-4" onClick={() => setOpenProfileMenu(!openProfileMenu)}>
                <div className="flex justify-around cursor-pointer items-center p-2 bg-gray-100 rounded-md">
                    <img src="/profile-yemek-sepeti.png" className="w-1/6" alt="profilePhoto" />
                    <div className="">
                        <h4 className="text-red-500 font-bold">İsmail Kızıltaş</h4>
                        <h6 className='text-sm'>13.114 Toplam Puan</h6>
                    </div>
                    <i className={`${openProfileMenu ? `${Style.rotateOverArrow}` : `${Style.rotateOutArrow}`}`}><IoIosArrowDown /></i>
                </div>
                <div className={`border  ${openProfileMenu ? `${Style.openMenu}` : `${Style.closeMenu}`}`}>
                    <ul>
                        {MenuData.map((item) => (
                            <li id={item.id}><Link className='block font-bold px-4 py-2' to={item.url}>{item.title}</Link></li>
                        ))}
                        <li><Link className='block font-bold px-4 py-4 text-red-600 bg-gray-100' to="/">ÇIKIŞ YAP</Link></li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default memo(Aside);