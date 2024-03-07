import styles from "./DirectorProject.module.css";
import OptionsBar from "../../layouts/OptionsBar/OptionsBar";
import PreFoot from "../../layouts/PreFoot/PreFoot";
import SectionIntro from "../../util/SectionIntro/SectionIntro";
import BigPhrase from "../../layouts/BigPhrase/BigPhrase";
import FeatTag from "../../util/FeatTag/FeatTag";
import Accordion from "../../util/Accordion/Accordion";
import LinkOnWhite from "../../util/LinkOnWhite/LinkOnWhite";
import ToolLabel from "../../util/ToolLabel/ToolLabel";
import StatsTable from "../../util/StatsTable/StatsTable";

const DirectorProject = ({data}) => {

    return(
        <>
        <OptionsBar />
    {/* --- INTRO SECTION --- */}
        <section className={styles.introSection}>
            <SectionIntro
                tag='PM & Ops Manager'
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
    {/* --- BIG PHRASE SECTION --- */}
        <BigPhrase text={data.client.bio} />
    {/* --- OVERVIEW TITLE SECTION --- */}
        <section className={styles.projectsGallery}>
            <SectionIntro
                tag='A summary of the work'
                header='Project overview'
                info="From challenges and hypothesis to solutions and final outcomes. I squezzed it all into these few sections. Wanna dig deeper? Let me know! I'll be happy go into weeds."
                align='center'
            />
        </section>
    {/* --- PROBLEM SUMMARY --- */}
        <section className={styles.briefSection}>
            <div className= {styles.briefText}>
                <div className={styles.tagHolder}>
                    <FeatTag text="challenge" color="yellow"/>
                    <p className={styles.briefTag}>The starting point</p>
                </div>
                <h2 className={styles.briefHeader}>{data.problemBrief.content[0]}</h2>
                <p className={styles.briefInfo}>{data.problemBrief.content[1]}</p>
            </div>
            <div className={styles.briefImageBox}>
                <img className={styles.briefImage} src={data.problemBrief.image[0]} alt={data.problemBrief.image[1]} />
            </div>
        </section>
    {/* --- SOLUTION SUMMARY --- */}
        <section className={styles.briefSectionReverse}>
            <div className={styles.briefImageBox}>
                <img className={styles.briefImage} src={data.solutionBrief.image[0]} alt={data.solutionBrief.image[1]} />
            </div>
            <div className={styles.briefText}>
                <div className={styles.tagHolder}>
                    <FeatTag text="approach" color="yellow"/>
                    <p className={styles.briefTag}>The turning point</p>
                </div>
                <h2 className={styles.briefHeader}>{data.solutionBrief.content[0]}</h2>
                <p className={styles.briefInfo}>{data.solutionBrief.content[1]}</p>
            </div>
        </section>
    {/* --- RESULTS SUMMARY --- */}
        <section className={styles.briefSection}>
            <div className= {styles.briefText}>
                <div className={styles.tagHolder}>
                    <FeatTag text="results" color="yellow"/>
                    <p className={styles.briefTag}>The finish line</p>
                </div>
                <h2 className={styles.briefHeader}>{data.resultsBrief.content[0]}</h2>
                <p className={styles.briefInfo}>{data.resultsBrief.content[1]}</p>
            </div>
            <div className={styles.briefImageBox}>
                <img className={styles.briefImage} src={data.resultsBrief.image[0]} alt={data.resultsBrief.image[1]} />
            </div>
        </section>
    {/* --- HIGHLIGHTS ACCORDEON --- */}
        <section className={styles.highsSection}>
            <div className={styles.highsIntroWrapper}>
                <div className={styles.headerBox}>
                    <p className={styles.sectionTag}>Project highlights</p>
                    <h2 className={styles.sectionHeader}>Key milestones from this great project.</h2>
                </div>
                <div className={styles.highsCard}>
                    <img className={styles.highsCardIcon} src="/images/icons/napo-info-icon.png" alt="" />
                    <p className={styles.highsCardText}>All projects required high-level management of plans, strategies, schedule, budget, risks, progress, metrics, people, documents, and more. In case you don't see them in the highlights, know they happened 😉.</p>
                </div>
            </div>
            <div>
                <p className='bold-tag'>n.accomplishments</p>
                <Accordion type="highs" data={data.highlights}/>
            </div>
        </section>
    {/* --- PHOTOS GALLERY --- */}
        <section className={styles.gallerySection}>
            <SectionIntro
                align='right'
                tag='Photo gallery'
                header='A visual take of the work and results.'
                info="Some images to prove I did work on this thing haha! You'll see photos, designs, documents, and some other media files. Enjoy!"
            />
            <div className={styles.finalDesignGrid}>
                {data.projectImages.map((image, index) => {
                    return <div className={styles.outcomeImageBox} key={index}>
                        <div className={styles.outcomeImage}>
                            <img src={image.image[0]} alt={image.image[1]} />
                        </div>
                        <h3 className={styles.imageTag}>{image.tag}</h3>
                    </div>
                })}
            </div>
        </section>
    {/* --- FINAL STATS & SKILLS --- */}
        <section className={styles.statsSection}>
            <SectionIntro 
                tag='Relevant stats'
                header='Nuggets of data to summarize the job.'
                info="These are some of the key details and skills required to pull this project off. There's also a few screw up. Call me to know more."
                align='right'
            />
            <StatsTable
                labels={data.stats.labels}
                stats={data.stats.captions}
            />
            <div>
                <p className='bold-tag'>n.skills and tools</p>
                <div className={styles.toolsWrapper}>
                    {data.skills.map((item, index) => {
                        return <ToolLabel text={item} key={index}/>
                    })}
                </div>
            </div>
            <div className={styles.retrosWrapper}>
                <div className={styles.winsHolder}>
                    <p className='bold-tag'>n.wins</p>
                    <p className={styles.retrosText}>One thing that worked great was the discovery session. Always get deeper into the synthoms until you discover the root issie. </p>
                </div>
                <div className={styles.lessonsHolder}>
                    <p className='bold-tag'>n.lessons</p>
                    <p className={styles.retrosText}>Valuable lessons of things to improve </p>
                </div>
            </div>
        </section>
    {/* --- GO TO PORTFOLIO PAGE --- */}
        <section className={styles.moreWebsSection}>
                <h2 className={styles.moreWebsText}>Explore more webs</h2>
                <div className='centered-link-holder'>
                    <div className='link-group-holder'>
                        <p className='link-group-tag'>Navigate to</p>
                        <img className='link-group-arrow' src='/images/icons/napo-link-arrow-black.svg' alt=''/>
                        <div className='link-group-wrapper'>
                            <LinkOnWhite text='Web Portfolio' link='/web-design-portfolio' />
                        </div>
                    </div>
                </div>
            </section>
    {/* --- PREFOOTER --- */}
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