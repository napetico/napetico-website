import Navbar from '../../layouts/Navbar/Navbar.js';
import Footer from '../../layouts/Footer/Footer.js';
import PreFoot from '../../layouts/PreFoot/PreFoot.js';
import OptionsBar from '../../layouts/OptionsBar/OptionsBar.js';


const Root = () => {

    return(
        <>
        <header>
            <Navbar />
            <OptionsBar />
        </header>
        <main>
            <p>Esto es la layout de la pagina</p>
            <PreFoot />
        </main>
        <Footer />
        </>
    )
};

export default Root;