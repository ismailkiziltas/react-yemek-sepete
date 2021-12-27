import { memo } from "react";
import { AiOutlineSearch } from 'react-icons/ai';

import Style from './style.module.css';

const Search = () => {
    return (
        <div className="flex items-center pl-3">
            <input className={`p-3 w-full h-10 ${Style.searchInput}`} type="text" placeholder="Yemek, mutfak veya restoran arayın." />
            <button type="button" className={`${Style.searchButton} px-3 h-10 bg-yellow-400 text-3xl`}><AiOutlineSearch /></button>
        </div>
    );
}

export default memo(Search);