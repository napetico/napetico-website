import Navbar from '../../layouts/Navbar/Navbar.js';
import Footer from '../../layouts/Footer/Footer.js';
import { Outlet } from 'react-router-dom';


const Root = () => {

    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
};

export default Root;