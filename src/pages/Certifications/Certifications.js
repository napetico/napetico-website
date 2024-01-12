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
                tag='Skills that I can prove'
                header='Certifications List.'
                info='A wrap-up of the oficial diplomas, certified participations, and consolation prizes that I have achieved from school to today.'
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
                    <p className='link-group-tag'>Go back to</p>
                    <img className='link-group-arrow' src='./images/icons/napo-link-arrow-black.svg' alt=''/>
                    <div className='link-group-wrapper'>
                        <LinkOnWhite text='Home Page' link='/' />
                    </div>
                </div>
            </div>
        </section>
        <PreFoot
            image={['https://i.pinimg.com/564x/49/d6/b8/49d6b8215fc4212fe21186efd2315768.jpg', 'Napoleon en el estudio.']}
            tag='Reach out'
            title='Any certification to suggest?'
            text="I'm all ears. It's always a good idea to get certfied in new skills and interesting specializations. Plus, it will look great in my LinkeIn page haha!"
        />
        </>
    )
}

export default Certifications;