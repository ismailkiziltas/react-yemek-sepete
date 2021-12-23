import { memo } from 'react';

import Header from '../../components/Header';
import Aside from '../../components/Aside';
import Wallet from '../../components/Wallet';
import Basket from '../../components/Basket';

const Home = () => {
    return (
        <>
            <header className="Home">
                <Header />
            </header>
            <main>
                <div className="container">
                    <div className="w-1/4">
                        <Aside />
                        <Wallet/>
                        <Basket />
                    </div>
                    <div className="w-3/4">
                        
                    </div>
                </div>
            </main>
        </>
    );
}
export default memo(Home);