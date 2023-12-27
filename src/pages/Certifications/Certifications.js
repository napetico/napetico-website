import styles from './Certifications.module.css';
import OptionsBar from '../../layouts/OptionsBar/OptionsBar';
import PreFoot from '../../layouts/PreFoot/PreFoot';
import SectionIntro from '../../util/SectionIntro/SectionIntro';
import CERTIFICATIONS from '../../data/CERTIFICATIONS';
import CertificationCard from '../../cards/CertificationCard/CertificationCard';
import LinkOnWhite from '../../util/LinkOnWhite/LinkOnWhite';

const Certifications = () => {

    const allCertifications = CERTIFICATIONS.slice().reverse();

    return(
        <>
        <OptionsBar />
        <section className={styles.galleryContainer}>
            <SectionIntro 
                tag='Habilidades con comprobante'
                header='Certificaciones.'
                info='Una lista de los títulos, comprobantes de participación y premios de consolación que he obtenido desde la escuela hasta hoy.'
                align='right'
            />
            <div className={styles.galleryHolder}>
                {allCertifications.map((cert, index) => {
                    return <CertificationCard data={cert.certificationCardData} key={index}/>
                })}
            </div>
        </section>
        <section className={styles.backHomeSection}>
            <div className='centered-link-holder'>
                <div className='link-group-holder'>
                    <p className='link-group-tag'>Volver a</p>
                    <img className='link-group-arrow' src='./images/napo-link-arrow-black.svg' alt=''/>
                    <div className='link-group-wrapper'>
                        <LinkOnWhite text='Página de Inicio' link='/' />
                    </div>
                </div>
            </div>
        </section>
        <PreFoot
            image={['https://i.pinimg.com/564x/49/d6/b8/49d6b8215fc4212fe21186efd2315768.jpg', 'Napoleon en el estudio.']}
            tag='Dame un toque'
            title='¿Me falta algún certificado'
            text='Sin presiones. Me gusta compartir ideas, comentar estrategias y ampliar perspectivas. Si tienes un proyecto y quieres ayuda, opinión, o simplemente un sesion de ideas, dame un toque y hablamos lo que quieras con unas cervezas, un café, o un vinito.'
        />
        </>
    )
}

export default Certifications;