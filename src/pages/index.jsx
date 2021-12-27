import { memo } from 'react';
import { MyAddress } from "../components"

const Home = () => {
    return (
        <>
           <MyAddress />
        </>
    );
}
export default memo(Home);