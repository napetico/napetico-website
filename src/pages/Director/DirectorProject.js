import styles from "./DirectorProject.module.css";
import OptionsBar from "../../layouts/OptionsBar/OptionsBar";
import PreFoot from "../../layouts/PreFoot/PreFoot";
import SectionIntro from "../../util/SectionIntro/SectionIntro";
import BigPhrase from "../../layouts/BigPhrase/BigPhrase";

const DirectorProject = ({data}) => {
    return(
        <>
        <OptionsBar />
        <section className={styles.introSection}>
            <SectionIntro
                tag='Project Manager & COO'
                header={data.client.name}
                info={data.category}
                clientInfo={[data.client.name, data.url]}
                clientImage={[data.client.image[0], data.client.image[1]]}
                align='project'
            />
            <div className={styles.posterImageBox}>
                <img src={data.mainImages.poster[0]} alt={data.mainImages.poster[1]} />
            </div>
        </section>
        <BigPhrase text={data.client.bio} />
        <PreFoot
            image={['https://i.pinimg.com/564x/49/d6/b8/49d6b8215fc4212fe21186efd2315768.jpg', 'Napoleon en el estudio.']}
            tag='Reach out'
            title='Trying to pull off a project?'
            text="I'd love hearing about it. Sharing visions, commenting business plans, ideating strategies... If you're working on an awesome idea and you want some help, feedback, or maybe a brainstorming session please be my guest. We will make gold out of the conversation. Promise :)"
        />
        </>
    )
}

export default DirectorProject;