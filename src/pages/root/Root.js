import Navbar from "../../layouts/Navbar/Navbar.js";
import Footer from '../../layouts/Footer/Footer.js';
import Link from '../../util/Link/Link.js';

const Root = () => {

    return(
        <>
        <header>
            <Navbar />
        </header>
        <main>
            <p>Esto es la layout de la pagina</p>
            <Link text={'Mi link favorito'} link={'https://www.awwwards.com/'} />
        </main>
        <Footer />
        </>
    )
};

export default Root;