import { memo } from "react";
import { Link } from  "react-router-dom";

const Logo = () => {
    return (
        <Link to="/">
            <img src='/logo.svg' className="w-40" alt="Logo Yemek Sepeti" />
        </Link>
    );
}
export default memo(Logo);