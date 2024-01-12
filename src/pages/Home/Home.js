import styles from './Home.module.css';
import OptionsBar from '../../layouts/OptionsBar/OptionsBar';
import PreFoot from '../../layouts/PreFoot/PreFoot';
import Hero from '../../layouts/Hero/Hero.js';
import BigPhrase from '../../layouts/BigPhrase/BigPhrase.js';
import LinkOnWhite from '../../util/LinkOnWhite/LinkOnWhite.js';
import SectionIntro from '../../util/SectionIntro/SectionIntro.js';
import ProjectCard from '../../cards/ProjectCard/ProjectCard.js';
import DirectoryCard from '../../cards/DirectoryCard/DirectoryCard.js';

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
            cardImage={['./images/napo-main-photo-provisional.jpg', 'Napoleon Bazan profile picture']}
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
                                <ProjectCard
                                    image={['./images/TEST-project-image.jpeg', '']}
                                    href='#'
                                    info='PM for'
                                    title='Putting together a rewarding pre-funding strategy'
                                    client={[true, 'Biting Lemons', 'http://www.bitinglemons.com/']}
                                    clientImage={['./images/TEST-bl-client-image.png', '']}
                                    featTag={[true, 'yellow', 'in progress']}
                                />
                            </div>
                            <div className={styles.projectCardHolder}>
                                <ProjectCard
                                    image={['./images/TEST-flipcards-react-redux.jpg', '']}
                                    href='#'
                                    info='Code for My Portfolio'
                                    title='Project: Flashcards with JS, React, and Redux'
                                    client={[false, '', '']}
                                    clientImage={['', '']}
                                    featTag={[false, '', '']}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='centered-link-holder'>
                    <div className='link-group-holder'>
                        <p className='link-group-tag'>See more projects in</p>
                        <img className='link-group-arrow' src='./images/icons/napo-link-arrow-black.svg' alt=''/>
                        <div className='link-group-wrapper'>
                            <LinkOnWhite text='Management' link='' />
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
                            href='#'
                            featTag={[false, '', '']}
                            info='My collection of diplomas'
                            title='Certifications'
                        />
                    </div>
                    <div className={styles.displayCarousel}>
                        <p className='bold-tag'>n.exploring now</p>
                        <div className={styles.carouselContainer}> 
                        {/* Here goes the card slider */}
                            <div className={styles.projectCardHolder}>
                                <ProjectCard
                                    image={['https://cdn.wallapop.com/images/10420/fi/vg/__/c10420p938693264/i3498517058.jpg?pictureSize=W640', 'The Lean Product Playbook']}
                                    href='#'
                                    info='Dan Olsen'
                                    title='The Lean Product Playbook'
                                    client={[false, '', '']}
                                    clientImage={['', '']}
                                    featTag={[true, 'yellow', 'reading now']}
                                />
                            </div>
                            <div className={styles.projectCardHolder}>
                                <ProjectCard
                                    image={['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLNFRhmPXVXdFgZCPIHI_caiNbIFIA3IeEw&usqp=CAU', 'The Lean Startup']}
                                    href='#'
                                    info='Eric Ries'
                                    title='The Lean Startup'
                                    client={[false, '', '']}
                                    clientImage={['', '']}
                                    featTag={[false, '', '']}
                                />
                            </div>
                            <div className={styles.projectCardHolder}>
                                <ProjectCard
                                    image={['./images/napo-google-pm-certificate.png', '']}
                                    href='#'
                                    info='Coursera + Google'
                                    title='Google Project Management'
                                    client={[false, '', '']}
                                    clientImage={['', '']}
                                    featTag={[true, 'black', 'taking now']}
                                />
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
                            <LinkOnWhite text='Certifications' link='' />
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
                            href='#'
                            featTag={[false, '', '']}
                            info='A bunch of my 1-million-dollars ideas'
                            title='Biz Models Backlog'
                        />
                        <DirectoryCard 
                            image={['./images/dibujo-buho.jpg', '']}
                            href='#'
                            featTag={[false, '', '']}
                            info='The exageration of coloring'
                            title='Pencil Colors Hyperrealism'
                        />
                        <DirectoryCard 
                            image={['https://i.pinimg.com/564x/9d/e5/58/9de558cb5abb551c381b0906db7b964f.jpg', '']}
                            href='#'
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
                                <ProjectCard
                                    image={['https://scontent.falc2-1.fna.fbcdn.net/v/t31.18172-8/22496202_741114852751608_5414144444795781619_o.jpg?stp=dst-jpg_s640x640&_nc_cat=107&ccb=1-7&_nc_sid=c2f564&_nc_ohc=ATO0y4j4ZtsAX9jBc1l&_nc_ht=scontent.falc2-1.fna&oh=00_AfC6NMDf7WMyA14VSlzP6q-vHF1vo0FdjtVZ3QB-8tiN3w&oe=65A3ACD0', '']}
                                    href='#'
                                    info='Pencil Color Hyperrealism'
                                    title='Pineapple in Technicolor: Taken from a Pinterest post'
                                    client={[false, '', '']}
                                    clientImage={['./images/TEST-bl-client-image.png', '']}
                                    featTag={[true, 'black', 'coloring now']}
                                />
                            </div>
                            <div className={styles.projectCardHolder}>
                                <ProjectCard
                                    image={['./images/TEST-flipcards-react-redux.jpg', '']}
                                    href='#'
                                    info='Código para Mi Portafolio'
                                    title='Proyecto: Tarjetas de Estudio con React y Redux'
                                    client={[false, '', '']}
                                    clientImage={['', '']}
                                    featTag={[false, '', '']}
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
                            <LinkOnWhite text='Ideas' link='' />
                            <p className='link-group-inner-text'>,&nbsp;</p>
                            <LinkOnWhite text='Drawings' link='' />
                            <p className='link-group-inner-text'>, o&nbsp;</p>
                            <LinkOnWhite text='Blog Posts' link='' />
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