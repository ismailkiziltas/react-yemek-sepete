// React
import { memo } from "react";

// Styles
import Style from './style.module.css';

// Components
import Logo from '../Logo';
import SelectionNav from "../SelectionNav";
import Search from "../Search";

const Header = () => {
    return (
        <header className={Style.headerBg}>
            <div className="container mx-auto">
                <div className="flex items-center py-5">
                    <div className="w-1/4">
                        <Logo />
                    </div>
                    <div className="w-1/4">
                        <SelectionNav/>
                    </div>
                    <div className="w-2/4">
                        <Search/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default memo(Header);