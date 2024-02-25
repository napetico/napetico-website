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
                tag='Management Project'
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
        <section className={styles.briefSection}>
            <div className= {styles.briefText}>
                <p className={styles.sectionTag}>The starting point</p>
                <h2 className={styles.sectionHeader}>Poor performance and adversion to change.</h2>
                <p className={styles.sectionInfo}>Despite the great improvements Vagabond had made in product quality and kitchen affairs, their operations and customer service were still in the red zone. Management was trying hard to course correct but their efforts were crashing into walls of resistance, confusion and misinformation. Performance was in a downward spiral, taking a toll on sales, cost efficiency, and team morale. Everyone felt like putting off fires all the time and hiding errors that still ended up wearing down their great cooking and exotic flavors. Frustration and reversion to old habits was building up and things were getting closer to a food fight than to a fine solution. Something had to be.</p>
            </div>
            <div className={styles.briefImageBox}>
                <img className={styles.briefImage} src='/images/napo-web-directory-image.jpg' alt='' />
            </div>
        </section>
        <section className={styles.briefSectionReverse}>
            <div className={styles.briefImageBox}>
                <img className={styles.briefImage} src='/images/napo-web-directory-image.jpg' alt='' />
            </div>
            <div className= {styles.briefText}>
                <p className={styles.sectionTag}>The turning point</p>
                <h2 className={styles.sectionHeader}>Pulling rather than pushing.</h2>
                <p className={styles.sectionInfo}>VG started with a problem with employees. They had poor performance and frustared with how things were going on in the company. THere was lots of desimformation and they were not following direction. Everyone seem to be goinf ater a vision the had on their own. THis was affectiong the comoany results. VG was trying hardly to incorporate rules and protocosl but they only found resistance and apathy. THis was algo affection performance in other areas.</p>
            </div>
        </section>
        <section className={styles.briefSection}>
            <div className= {styles.briefText}>
                <p className={styles.sectionTag}>The finish line</p>
                <h2 className={styles.sectionHeader}>Poor performance and scattered information.</h2>
                <p className={styles.sectionInfo}>VG started with a problem with employees. They had poor performance and frustared with how things were going on in the company. THere was lots of desimformation and they were not following direction. Everyone seem to be goinf ater a vision the had on their own. THis was affectiong the comoany results. VG was trying hardly to incorporate rules and protocosl but they only found resistance and apathy. THis was algo affection performance in other areas.</p>
            </div>
            <div className={styles.briefImageBox}>
                <img className={styles.briefImage} src='/images/napo-web-directory-image.jpg' alt='' />
            </div>
        </section>
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