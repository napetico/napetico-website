import styles from './Home.module.css';
import OptionsBar from '../../layouts/OptionsBar/OptionsBar';
import PreFoot from '../../layouts/PreFoot/PreFoot';
import Hero from '../../layouts/Hero/Hero.js';
import BigPhrase from '../../layouts/BigPhrase/BigPhrase.js';
import LinkOnWhite from '../../util/LinkOnWhite/LinkOnWhite.js';
import SectionIntro from '../../util/SectionIntro/SectionIntro.js';
import ProjectCard from '../../cards/ProjectCard/ProjectCard.js';
import DirectoryCard from '../../cards/DirectoryCard/DirectoryCard.js';

import PM_PROJECTS from '../../data/PM_PROJECTS.js';
import CODE_PROJECTS from '../../data/CODE_PROJECTS.js';
import WEB_PROJECTS from '../../data/WEB_PROJECTS.js';
import BOOK_LIST from '../../data/BOOK_LIST.js'
import COURSE_LIST from '../../data/COURSE_LIST.js'
import CERTIFICATIONS from '../../data/CERTIFICATIONS.js';

const Home = () => {
    return(
        <>
        <OptionsBar/>
        <Hero 
            header='Napoleón Bazán'
            loopText={['Project Manager', 'Creative Strategist & COO', 'Full Stack Developer', 'Web & Brand Expert',]}
            description="Hey! Welcome to my little corner on the web. Here I keep tidy record of my work, projects, learnings, and ideas worth exploring. Click around, enjoy, and reach out if you feel like talking."
            linkData={['Profile', 'About me', '/under-construction']}
            heroCard={false}
            newTab={false}
            database={null}
            cardImage={['./images/napo-home-image.png', 'Napoleon Bazan profile picture']}
        />
        <BigPhrase text='Navigating my passion to help ideate and build strong businesses and high-performance teams through creative, organizational, and operational excellence.'/>
        {/* WORK */}
        <section className={styles.displayContainer}>
            <div className={styles.displayHolder}>
                <SectionIntro
                    tag='A mini-curriculum'
                    header='Follow my work and my latest projects.'
                    info='I can provide top-level help (and lots of good energy) as:'
                    align='right'
                />
                <div className={styles.displayContent}>
                    <div className={styles.displayDirectory}>
                        <p className='bold-tag'>n.experience</p>
                        <DirectoryCard 
                            image={['./images/napo-pm-directory-image.jpg', 'Illustration of person thinking creatively']}
                            href='/project-manager'
                            featTag={[true, 'black', 'favorite']}
                            info='Since 2007 - Creativity, Strategy, & Operations'
                            title='Project Manager | COO'
                        />
                        <DirectoryCard 
                            image={['https://i.pinimg.com/564x/f8/69/10/f869109f41754f72d38bcb85f0f47a17.jpg', 'Mug with JavaScript logo']}
                            href='/full-stack-developer'
                            featTag={[false, '', '']}
                            info='Since 2023 - Software Engineer'
                            title='Full Stack Developer'
                        />
                        <DirectoryCard 
                            image={['https://i.pinimg.com/564x/f7/04/c4/f704c4a5def121feb30ec1ef159dc31c.jpg', 'Website mockups on mobile screens']}
                            href='/web-designer'
                            featTag={[false, '', '']}
                            info='Since 2018 - Developer and Webflow Expert'
                            title='Web Design & Optimization'
                        />
                    </div>
                    <div className={styles.displayCarousel}>
                        <p className='bold-tag'>n.latest projects</p>
                        <div className={styles.carouselContainer}> 
                        {/* Here goes the card slider */}
                            <div className={styles.projectCardHolder}>
                                <ProjectCard link={true} client={true} card='work' data={PM_PROJECTS[PM_PROJECTS.length -1]}/>
                            </div>
                            {/* <div className={styles.projectCardHolder}>
                                <ProjectCard link={false} client={true} card='work' data={CODE_PROJECTS[CODE_PROJECTS.length -2]}/>
                            </div> */}
                            <div className={styles.projectCardHolder}>
                                <ProjectCard link={true} client={true} card='work' data={WEB_PROJECTS[WEB_PROJECTS.length -1]}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='centered-link-holder'>
                    <div className='link-group-holder'>
                        <p className='link-group-tag'>See more projects in</p>
                        <img className='link-group-arrow' src='./images/icons/napo-link-arrow-black.svg' alt=''/>
                        <div className='link-group-wrapper'>
                            <LinkOnWhite text='Management' link='/project-manager' />
                            <p className='link-group-inner-text'>,&nbsp;</p>
                            <LinkOnWhite text='Programming' link='/full-stack-portfolio' />
                            <p className='link-group-inner-text'>, or&nbsp;</p>
                            <LinkOnWhite text='Webs' link='/web-design-portfolio' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* LEARN */}
        <section className={styles.displayContainer}>
            <div className={styles.displayHolder}>
                <SectionIntro
                    tag='Skills and trainings'
                    header="Keep posted on the things I'm learning."
                    info='The books, videos, courses and ideas I like to fill up my brain with.'
                    align='right'
                />
                <div className={styles.displayContent}>
                    <div className={styles.displayDirectory}>
                        <p className='bold-tag'>n.learnings</p>
                        <DirectoryCard 
                            image={['https://i.pinimg.com/236x/f3/ac/d8/f3acd8ea2d6bd06f8d8198599b967612.jpg', 'Hand holding a book']}
                            href='/reading-list'
                            featTag={[false, '', '']}
                            info='A healthy mix of topics and formats'
                            title='Books, Videos & Podcasts'
                        />
                        <DirectoryCard 
                            image={['https://i.pinimg.com/236x/3d/fd/9a/3dfd9a0750b47e9b5e4f0672031ad7c7.jpg', 'Business event poster']}
                            href='/courses'
                            featTag={[false, '', '']}
                            info='Interesting stuff I signed up for'
                            title='Courses and Workshops'
                        />
                        <DirectoryCard 
                            image={['https://i.pinimg.com/236x/59/8d/d8/598dd8b6b33385c22753fe680b41712e.jpg', 'Diploma photography']}
                            href='/certifications'
                            featTag={[false, '', '']}
                            info='My collection of diplomas'
                            title='Certifications'
                        />
                    </div>
                    <div className={styles.displayCarousel}>
                        <p className='bold-tag'>n.learning now</p>
                        <div className={styles.carouselContainerBooks}> 
                        {/* Here goes the card slider */}
                            <div className={styles.projectCardHolderBooks}>
                                <ProjectCard link={true} client={false} card='book' data={BOOK_LIST[BOOK_LIST.length -1]}/>
                            </div>
                            <div className={styles.projectCardHolderBooks}>
                                <ProjectCard link={true} client={false} card='book' data={BOOK_LIST[BOOK_LIST.length -2]}/>
                            </div>
                            <div className={styles.projectCardHolderBooks}>
                                <ProjectCard link={true} client={false} card='course' data={COURSE_LIST[COURSE_LIST.length -2]}/>
                            </div>
                            <div className={styles.projectCardHolderBooks}>
                                <ProjectCard link={true} client={false} card='cert' data={CERTIFICATIONS[CERTIFICATIONS.length -1]}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='centered-link-holder'>
                    <div className='link-group-holder'>
                        <p className='link-group-tag'>Explore more</p>
                        <img className='link-group-arrow' src='./images/icons/napo-link-arrow-black.svg' alt=''/>
                        <div className='link-group-wrapper'>
                            <LinkOnWhite text='Books' link='/reading-list' />
                            <p className='link-group-inner-text'>,&nbsp;</p>
                            <LinkOnWhite text='Courses' link='/courses' />
                            <p className='link-group-inner-text'>, o&nbsp;</p>
                            <LinkOnWhite text='Certifications' link='/certifications' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* HOBBIES */}
        <section className={styles.displayContainer}>
            <div className={styles.displayHolder}>
                <SectionIntro
                    tag='On my free time'
                    header='Side projects and ideas I have fun with.'
                    info='Random thinking, painting, writing, planning, and more.'
                    align='right'
                />
                <div className={styles.displayContent}>
                    <div className={styles.displayDirectory}>
                        <p className='bold-tag'>n.side projects</p>
                        <DirectoryCard 
                            image={['https://i.pinimg.com/1200x/41/b5/5c/41b55cd126a1e001087df43f28b6943f.jpg', '']}
                            href='/under-construction'
                            featTag={[false, '', '']}
                            info='A bunch of my 1-million-dollars ideas'
                            title='Biz Models Backlog'
                        />
                        <DirectoryCard 
                            image={['./images/dibujo-buho.jpg', '']}
                            href='/under-construction'
                            featTag={[false, '', '']}
                            info='The hyperbole of coloring'
                            title='Pencil Colors Hyperrealism'
                        />
                        <DirectoryCard 
                            image={['https://i.pinimg.com/564x/9d/e5/58/9de558cb5abb551c381b0906db7b964f.jpg', '']}
                            href='/under-construction'
                            featTag={[false, '', '']}
                            info='My preposterous attempt to run a blog'
                            title="Random Napoleon's Log"
                        />
                    </div>
                    <div className={styles.displayCarousel}>
                        <p className='bold-tag'>n.latest news</p>
                        <div className={styles.carouselContainer}> 
                        {/* Here goes the card slider */}
                            <div className={styles.projectCardHolder}>
                                <ProjectCard link={true} client={false} card='hobbie' data={{
                                    path: '/under-construction',
                                    image: ['https://scontent.fmad7-1.fna.fbcdn.net/v/t31.18172-8/22496202_741114852751608_5414144444795781619_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=c2f564&_nc_ohc=M34Y7sBXgtEAX_beqA7&_nc_ht=scontent.fmad7-1.fna&oh=00_AfD6hIbVPGDGCCcQ2ZJd8h6e33sLbgByUmB4kkV9K44Ynw&oe=65DF70D0', 'Color pencil illustration of a pineapple'],
                                    featTag: [true, 'black', 'coloring now'],
                                    snippet: 'Pencil Color Hyperrealism',
                                    title: 'Pineapple in Technicolor: Taken from a Pinterest post',
                                }}
                                />
                            </div>
                            <div className={styles.projectCardHolder}>
                                <ProjectCard link={true} client={false} card='hobbie' data={{
                                    path: '/under-construction',
                                    image: ['https://i.pinimg.com/564x/d6/77/ab/d677abb7b454e0635273df67c53a204a.jpg', 'Lettering that reads Antifragile'],
                                    featTag: [false, '', ''],
                                    snippet: "Article for Napoleon's Log",
                                    title: 'What does it mean to build an antifragile business?',
                                }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='centered-link-holder'>
                    <div className='link-group-holder'>
                        <p className='link-group-tag'>Look further</p>
                        <img className='link-group-arrow' src='./images/icons/napo-link-arrow-black.svg' alt=''/>
                        <div className='link-group-wrapper'>
                            <LinkOnWhite text='Ideas' link='/under-construction' />
                            <p className='link-group-inner-text'>,&nbsp;</p>
                            <LinkOnWhite text='Drawings' link='/under-construction' />
                            <p className='link-group-inner-text'>, o&nbsp;</p>
                            <LinkOnWhite text='Blog Posts' link='/under-construction' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <PreFoot
            image={['https://i.pinimg.com/564x/49/d6/b8/49d6b8215fc4212fe21186efd2315768.jpg', 'Napoleon en el estudio.']}
            tag='Get in touch'
            title="I'll be happy to talk to you."
            text="For business or for fun, creative conversations is something I enjoy very much. If you have a project and you're looking for some help, useful feedback, new strategies, or fresh ideas please let me know. Nothing like a casual brainstorming session over a nice drink."
        />
        </>
    )
}

export default Home;