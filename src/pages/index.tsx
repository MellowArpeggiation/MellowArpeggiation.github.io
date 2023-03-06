import * as React from "react"
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
// @ts-ignore
import WordCloud from "react-d3-cloud"
// @ts-ignore
import DocumentMeta from 'react-document-meta';
// @ts-ignore
import Anagram from 'react-anagram-animation'

// @ts-ignore
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import "../styles/main.scss"
import Header from "../components/header"
import Copyright from "../components/copyright"

// @ts-ignore
import AboutMdx from "../sections/about"
import Projects from "../sections/projects"
import Skills from "../sections/skills"
import Links from "../sections/links"


// markup
const IndexPage = () => {
    const parallax = React.useRef<IParallax>(null!);
    const isBrowser = typeof window !== 'undefined';
    const isPortrait = isBrowser && window.innerHeight > window.innerWidth;

    const [dimensions, setDimensions] = React.useState(getWordCloudDimensions(isPortrait));

    // We can't really set page size dynamically, so we do a weird hack to force it, yeah it's messy and bad for performance,
    // but the alternative is cutting off content or ending up with a massive dead area at the bottom of the page.
    let resizeTimeout: any;
    resizeTimeout = setTimeout(() => {
        setParallaxHeight(parallax.current);
        resizeTimeout = null;
    }, 98);

    React.useEffect(() => {
        window.addEventListener("resize", () => {
            const isPortrait = window.innerHeight > window.innerWidth;
            setDimensions(getWordCloudDimensions(isPortrait));

            if (resizeTimeout) clearTimeout(resizeTimeout);

            resizeTimeout = setTimeout(() => {
                setParallaxHeight(parallax.current);
                resizeTimeout = null;
            }, 98);
        });
    }, []);

    return (
        <main>
            <DocumentMeta
                title={'Mᴇʟʟᴏᴡ Aʀᴘᴇɢɢɪᴀᴛɪᴏɴ'}
                description={'Mellow Arpeggiation, also known as George William Paton. A Game Developer, Musician, and Director of Mellow Pty Ltd. Located in Melbourne, Victoria. George is developing indie games with a taste for the functional, minimal, and heartwarming.'}
            />
            <Parallax
                ref={parallax}
                pages={8}
                className={'parallax-container'}
                innerStyle={{ backgroundColor: 'black' }}
            >

                {/* Title area */}
                <ParallaxLayer className="page" speed={1}>
                    <div className="load-spinner"></div>
                    <Header title="Mellow" />
                    <div className="scroll-indicator"></div>
                </ParallaxLayer>
                <ParallaxLayer className="page" offset={0.15} speed={1.1}>
                    <div className="anagram-container">
                        <span className="text-small">&lt;by&gt;</span>
                        <Anagram
                            words={['mellow arpeggiation', 'george william paton']}
                            animationOptions={{
                                randomStartMin: 0,
                                randomStartMax: 1000,
                                randomReverseMin: 6000,
                                randomReverseMax: 7000,
                                loopAnimation: 12000,
                                waitToStart: 7000,
                                transitionDuration: 1600,
                                timingFunction: 'cubic-bezier(.5, 0, .2, 1.1)',
                            }}
                        />
                    </div>
                </ParallaxLayer>

                {/* About section */}
                <ParallaxLayer className="background-title" offset={0.99} speed={0.35}>
                    <div className="up-down" aria-hidden="true">
                        About
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={0.9} speed={0.3}>
                    <div className="background-parallelogram"></div>
                </ParallaxLayer>
                <ParallaxLayer className="page" offset={0.99} speed={0.5}>
                    <section>
                        <AboutMdx />
                    </section>
                    <section>
                        <h2>Links</h2>
                        <ul>
                            {Links.map((link, i) => {
                                return <li key={i}><a href={link.href}>{link.title}</a>&nbsp;&nbsp;&nbsp;&ndash;&nbsp;&nbsp;&nbsp;{link.description}</li>
                            })}
                        </ul>
                    </section>
                </ParallaxLayer>

                {/* Skills section */}
                <ParallaxLayer className="background-title" offset={1.5} speed={0.25}>
                    <div className="up-down text-right" aria-hidden="true">
                        Skills
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1.4} speed={0.5}>
                    <div className="background-parallelogram background-parallelogram-alt"></div>
                </ParallaxLayer>
                <ParallaxLayer offset={1.6} speed={0.4}>
                    <div style={{maxWidth: 1200, margin: 'auto'}}>
                        <WordCloud
                            data={Skills}
                            width={dimensions[0]}
                            height={dimensions[1]}
                            font="Milletun"
                            fill={() => Math.random() > 0.5 ? 'cyan' : 'magenta'}
                            padding={4}
                            rotate={() => 0}
                        />
                    </div>
                </ParallaxLayer>

                {/* Project section */}
                <ParallaxLayer offset={2.4}>
                    <div className="background-hatch"></div>
                </ParallaxLayer>
                <ParallaxLayer className="background-title" offset={2.2} speed={0.25}>
                    <div className="up-down" aria-hidden="true">
                        Projects
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={2.4} speed={0.5}>
                    <VerticalTimeline lineColor={'linear-gradient(180deg, transparent, cyan 64px, cyan 95%, transparent)'}>
                        {Projects.map((project, i) => {
                            return <VerticalTimelineElement
                                key={i}
                                contentStyle={{ background: '#111' }}
                                contentArrowStyle={{ borderRight: '8px solid #111' }}
                                date={project.date}
                                iconStyle={{ background: 'cyan', boxShadow: 'none' }}
                            >
                                <project.content />
                            </VerticalTimelineElement>
                        })}
                    </VerticalTimeline>
                    <Copyright />
                </ParallaxLayer>
            </Parallax>
        </main>
    )
}

const getWordCloudDimensions = (isPortrait: boolean) => [isPortrait ? 350 : 500, isPortrait ? 500 : 300];

const setParallaxHeight = (parallax: IParallax) => {
    if (!parallax) return;

    const content = parallax.content.current;

    // 2.4 is the current offset of the last parallax element
    // 1280 is the breakpoint at which the root em size increases
    // Everything else is a magic number based on the internal implementation of react-spring,
    // so beware, here be dragons
    const parallaxTopOffset = (2.4 + 0.2) * window.innerHeight;
    const lastContainerHeight = content.lastChild.scrollHeight * 0.8;
    const fixedOffset = window.innerWidth < 1280 ? -600 : -1000;

    content.style.height = (parallaxTopOffset + lastContainerHeight + fixedOffset) + 'px';
}

export default IndexPage
