// React
import { memo } from "react";

// Styles
import Style from './style.module.css';

// Components
import { Logo, SelectCity, Search } from "../../../components";

const Header = () => {
    return (
        <header className={Style.headerBg}>
            <div className="container mx-auto">
                <div className="flex items-center lg:py-5">
                    <div className="lg:w-1/4">
                        <Logo />
                    </div>
                    <div className="lg:w-1/4">
                        <SelectCity />
                    </div>
                    <div className="lg:w-2/4">
                        <Search/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default memo(Header);