import { memo } from 'react';
import { MyAddress, OrderTabs } from "../components"

const Home = () => {
    return (
        <>
            <div className="flex">
                <MyAddress />
                <OrderTabs />
            </div>
        </>
    );
}
export default memo(Home);