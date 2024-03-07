import styles from './Home.module.css';
import OptionsBar from '../../layouts/OptionsBar/OptionsBar';
import PreFoot from '../../layouts/PreFoot/PreFoot';
import Hero from '../../layouts/Hero/Hero.js';
import BigPhrase from '../../layouts/BigPhrase/BigPhrase.js';
import LinkOnWhite from '../../util/LinkOnWhite/LinkOnWhite.js';
import SectionIntro from '../../util/SectionIntro/SectionIntro.js';
import ProjectCard from '../../cards/ProjectCard/ProjectCard.js';
import DirectoryCard from '../../cards/DirectoryCard/DirectoryCard.js';
import { Link } from 'react-router-dom';
import scrollToTop from '../../util/ScrollToTop.js';
import FeatTag from '../../util/FeatTag/FeatTag.js';

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
            loopText={['Project & Operations Manager', 'Creative Strategist', 'Full Stack Developer', 'Web & Brand Expert',]}
            description="Hey! Welcome to my little corner on the web. Here I keep tidy record of my work, projects, learnings, and ideas worth exploring. Click around, enjoy, and reach out if you feel like talking."
            linkData={['Profile', 'About me', '/under-construction']}
            heroCard={false}
            newTab={false}
            database={null}
            cardImage={['./images/napo-profile-image.png', 'Napoleon Bazan profile picture']}
        />
        <BigPhrase text="Quick heads-up: This is all me navigating my passion to help ideate and build strong businesses and high-performance teams through creative, organizational, and operational excellence. Plus, me again sharing random hobbies just for fun. Good? Let's start with..."/>
        {/* ----- PROJECT MANAGER SECTION ----- */}
        <section className={styles.displayContainer}>
            <div className={styles.displayHolder}>
                <SectionIntro
                    tag="My main focus"
                    header='Being the best project manager I can be.'
                    info='You can follow my Project & Operations Management work, style, and latest projects in this section. Hit the card to open my profile.'
                    align='right'
                />
                <div className={styles.displayContent}>
                    <div className={styles.displayDirectory}>
                        <p className='bold-tag'>n.main expertise</p>
                        <div className={styles.carouselContainer}>
                            <div className={styles.managerCard}>
                                <Link className={styles.cardImageHolder} to='/project-manager' onClick={scrollToTop}>
                                    <img className={styles.cardImage} src='/images/napo-pm-home-card.png' alt='' />
                                    <div className={styles.cardImageOverlay}></div>
                                </Link>
                                <div className={styles.cardInfoHolder}>
                                    <div className={styles.directoryCard}>
                                        <Link className={styles.dirCardCircle} to='/project-manager' onClick={scrollToTop}>
                                            <img className={styles.dirCardImage} src='./images/napo-pm-directory-image.jpg' alt='Illustration of person thinking creatively' />
                                        </Link>
                                        <div className={styles.dirCardInfoBox}>
                                            <div className={styles.dirCardTextWrap}>
                                                <p className={styles.dirCardText}>Since 2007 - Creativity, Strategy, & Operations</p>
                                                <FeatTag color='yellow' text='top expert'/>
                                            </div>
                                            <Link className={styles.dirCardTitleLink} to='/project-manager' onClick={scrollToTop}>
                                                <h3 className='h3-card-title-22'>Project & Ops Manager</h3>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={styles.cardLinksWrapper}>
                                        <div className={styles.categoryBox}>
                                            <img className={styles.icon} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png' alt='Google Logo' />
                                            <p className={styles.categoryTag}>Google Professional Certification</p>
                                        </div>
                                        <Link className={styles.linkGroupHolder} to='/project-manager' onClick={scrollToTop}>
                                            <p className={styles.linkGroupTag}>Open CV</p>
                                            <img className={styles.linkGroupArrow} src='./images/icons/napo-link-arrow-black.svg' alt='' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.displayCarousel}>
                        <p className='bold-tag'>n.latest projects</p>
                        <div className={styles.carouselContainer}> 
                        {/* Here goes the card slider */}
                            <div className={styles.projectCardHolder}>
                                <ProjectCard link={true} client={true} card='work' data={PM_PROJECTS[PM_PROJECTS.length -1]}/>
                            </div>
                            <div className={styles.projectCardHolder}>
                                <ProjectCard link={true} client={true} card='work' data={PM_PROJECTS[PM_PROJECTS.length -2]}/>
                            </div>
                        {/* Here goes the card slider */}
                        </div>
                    </div>
                </div>
                <div className='centered-link-holder'>
                    <div className='link-group-holder'>
                        <p className='link-group-tag'>See more of my</p>
                        <img className='link-group-arrow' src='./images/icons/napo-link-arrow-black.svg' alt=''/>
                        <div className='link-group-wrapper'>
                            <LinkOnWhite text='Resume' link='/project-manager' />
                            <p className='link-group-inner-text'>,&nbsp;</p>
                            <LinkOnWhite text='Projects' link='/project-manager-portfolio' />
                            <p className='link-group-inner-text'>, or&nbsp;</p>
                            <LinkOnWhite text='Certifications' link='/certifications' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* ----- COMPLEMENTARY WORK SECTION ----- */}
        <section className={styles.displayContainer}>
            <div className={styles.displayHolder}>
                <SectionIntro
                    tag='Some side skills'
                    header='Brands, webs, code, marketing... I gotcha.'
                    info="Here's some of the complementary -and very diverse- expertise I can bring to your projects. Happy to help with any ot them."
                    align='right'
                />
                <div className={styles.displayContent}>
                    <div className={styles.displayDirectory}>
                        <p className='bold-tag'>n.experience</p>
                        <DirectoryCard 
                            image={['https://i.pinimg.com/236x/5f/2e/30/5f2e30a47d8efa2efda8f921861e13df.jpg', 'Illustration of person thinking creatively']}
                            href='https://supervillanos.webflow.io/'
                            featTag={[true, 'black', 'favorite']}
                            info='Since 2017 - Strategist & Creative Director'
                            title='Brand Strategy & Design'
                        />
                        <DirectoryCard 
                            image={['https://i.pinimg.com/564x/f7/04/c4/f704c4a5def121feb30ec1ef159dc31c.jpg', 'Website mockups on mobile screens']}
                            href='/web-designer'
                            featTag={[false, '', '']}
                            info='Since 2018 - Developer and Webflow Expert'
                            title='Web Design & Optimization'
                        />
                        <DirectoryCard 
                            image={['https://i.pinimg.com/564x/f8/69/10/f869109f41754f72d38bcb85f0f47a17.jpg', 'Mug with JavaScript logo']}
                            href='/full-stack-developer'
                            featTag={[false, '', '']}
                            info='Since 2023 - Software Engineer'
                            title='Full Stack Developer'
                        />
                    </div>
                    <div className={styles.displayCarousel}>
                        <p className='bold-tag'>n.latest projects</p>
                        <div className={styles.carouselContainer}> 
                        {/* Here goes the card slider */}
                            <div className={styles.projectCardHolder}>
                                <ProjectCard link={false} client={true} card='work' data={CODE_PROJECTS[CODE_PROJECTS.length -1]}/>
                            </div>
                            <div className={styles.projectCardHolder}>
                                <ProjectCard link={true} client={true} card='work' data={WEB_PROJECTS[WEB_PROJECTS.length -1]}/>
                            </div>
                        {/* Here goes the card slider */}
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
        {/* ----- LEARNINGS SECTION ----- */}
        <section className={styles.displayContainer}>
            <div className={styles.displayHolder}>
                <SectionIntro
                    tag='Body of knowledge'
                    header="Keep posted on the things I'm learning."
                    info='These are some of the books, videos, courses, and ideas I like to fill up my brain with. Look around, maybe you find somethig useful.'
                    align='right'
                />
                <div className={styles.displayContent}>
                    <div className={styles.displayDirectory}>
                        <p className='bold-tag'>n.wisdom collection</p>
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
                        {/* Here goes the card slider */}
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
                            <p className='link-group-inner-text'>, or&nbsp;</p>
                            <LinkOnWhite text='Certifications' link='/certifications' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* ----- HOBBIES SECTION ----- */}
        <section className={styles.displayContainer}>
            <div className={styles.displayHolder}>
                <SectionIntro
                    tag='On my free time'
                    header='Side projects and ideas I have fun with.'
                    info="And finally, these are some of the by-products of my random thinking, painting, writing, planning, and fooling around. Ha! "
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
                        {/* Here goes the card slider */}
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
                            <p className='link-group-inner-text'>, or&nbsp;</p>
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