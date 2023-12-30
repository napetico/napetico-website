import styles from './Director.module.css'
import OptionsBar from '../../layouts/OptionsBar/OptionsBar';
import PreFoot from '../../layouts/PreFoot/PreFoot';
import Hero from '../../layouts/Hero/Hero';

const Director = () => {
    return(
        <>
        <OptionsBar/>
        <Hero
            header='COO | Director de Proyectos'
            loopText={['Estrategias y Planificación', 'Branding & Marketing', 'Operaciones, Procesos y Recursos', 'Visión & Liderazgo']}
            description='Ayudo a Pymes y emprendedores a idear, construir y optimizar sus negocios a traves de la gestión impecable de sus esfuerzos estrategicos, creativos y operativos.'
            linkData={['Portafolio', 'Proyectos dirigidos', '/project-manager-portfolio']}
            cardProject={true}
            cardImage={['./images/TEST-web-bl.png', 'Reddit Clone Project Cover']}
            cardTag={[true, 'yellow', 'web más reciente']}
            cardInfo={['Biting Lemons', 'Revista Online | Webflow + CMS', '#']}
        />
        <PreFoot 
            image={['https://i.pinimg.com/564x/49/d6/b8/49d6b8215fc4212fe21186efd2315768.jpg', 'Napoleon en el estudio.']}
            tag='Dame un toque'
            title='Háblame de tu gran web.'
            text='¿Inspirado? ¿Interesado? ¿Con dudas? Charlemos! Con un cafecito dejaremos todo claro para que puedas tomar una decision informada. Y, hagas la web o no, seguro que te vas con algunas buenas ideas. Abajo te dejo los datos.'
        />
        </>
    )
}

export default Director;