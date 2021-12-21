import { memo } from 'react';

import Header from '../../components/Header';
import Aside from '../../components/Aside';

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
                    </div>
                    <div className="w-3/4">
                        
                    </div>
                </div>
            </main>
        </>
    );
}
export default memo(Home);