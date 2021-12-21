import { memo } from 'react';

import ProfileMenu from '../ProfileMenu';


const Aside = () => {
    return (
        <aside className="userMenu">
            <ProfileMenu />
            {/* <Basket /> */}
        </aside>
    );
}

export default memo(Aside);