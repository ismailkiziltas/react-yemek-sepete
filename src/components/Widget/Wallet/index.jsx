import { memo } from "react";
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Wallet = () => {
    return (
        <>
            <div className="mb-4 flex justify-between border rounded cursor-pointer rounded-1 p-2">
                <img src='/wallet.svg' alt="img-wallet" className="w-20"/>
                <div>
                    <div className="flex  items-center mr-2">
                        <span className="text-red-600 font-bold text-sm">50,00 TL</span>
                        <i className="text-xl text-gray-600"><MdOutlineKeyboardArrowRight /></i>
                    </div>
                </div>
            </div>
        </>
    );
};


export default memo(Wallet);