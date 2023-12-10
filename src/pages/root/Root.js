import Navbar from '../../layouts/Navbar/Navbar.js';
import Footer from '../../layouts/Footer/Footer.js';
import Home from '../Home/Home.js'


const Root = () => {

    return(
        <>
        <header>
            <Navbar />
        </header>
        <main>
            <Home />
        </main>
        <Footer />
        </>
    )
};

export default Root;