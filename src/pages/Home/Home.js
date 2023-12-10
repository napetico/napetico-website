import OptionsBar from '../../layouts/OptionsBar/OptionsBar';
import PreFoot from '../../layouts/PreFoot/PreFoot';
import Hero from '../../layouts/Hero/Hero.js';
import Link from '../../util/Link/Link.js';
import styles from './Home.module.css';

const Home = () => {
    return(
        <>
        <OptionsBar />
        <Hero 
            header='Napoleón Bazán'
            loopText={['Director de Proyectos', 'Programador Full Stack', 'Diseñador Web', 'Estratega Creativo & COO']}
            description='Explorando mi pasión por ayudar a idear y construir negocios y equipos de alto rendimiento a traves del dinamismo creativo, la excelencia operacional y el poder de una visión antifrágil.'
            linkTag='Perfil'
            linkText='Sobre mí'
            href='#'
            card={false}
            data={['./images/napo-main-photo-provisional.jpg', 'Napoleon Bazan profile picture']}
        />
        <PreFoot />
        </>
    )
}

export default Home;