import * as React from "react"
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import WordCloud from "react-d3-cloud"
// @ts-ignore
import Anagram from 'react-anagram-animation'
// @ts-ignore
import { MDXProvider } from "@mdx-js/react"

// @ts-ignore
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import "../styles/main.scss"
import Header from "../components/header"

// @ts-ignore
import AboutMdx from "../sections/about"
import Projects from "../sections/projects"
import Skills from "../sections/skills"


// markup
const IndexPage = () => {
    const parallax = React.useRef<IParallax>(null!)
    const isBrowser = typeof window !== 'undefined';

    return (
        <main>
            <title>Mᴇʟʟᴏᴡ Aʀᴘᴇɢɢɪᴀᴛɪᴏɴ</title>
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
                <ParallaxLayer className="page" offset={0.9} speed={0.5}>
                    <section>
                        <AboutMdx />
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
                            width={isBrowser && window.innerHeight > window.innerWidth ? 300 : 500}
                            height={isBrowser && window.innerHeight > window.innerWidth ? 500 : 300}
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
                <ParallaxLayer className="background-title" offset={2} speed={0.25}>
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
                </ParallaxLayer>
            </Parallax>
        </main>
    )
}

export default IndexPage
