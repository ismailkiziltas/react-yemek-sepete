import { memo } from "react";

const Logo = () => {
    return (
        <div className="flex justify-center">
            <a href="/">
                <img src='/logo.svg' className="w-40" alt="Logo Yemek Sepeti" />
            </a>
        </div>
    );
}
export default memo(Logo);