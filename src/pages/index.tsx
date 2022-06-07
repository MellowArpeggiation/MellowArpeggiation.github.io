import * as React from "react"
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import WordCloud from "react-d3-cloud"
// @ts-ignore
import Anagram from 'react-anagram-animation'

import "../styles/main.scss"
import Header from "../components/header"
import Project from "../components/project"
// @ts-ignore
import AboutMdx from "../sections/about"
// @ts-ignore
import DKMdx from "../sections/games/drift-king"
// @ts-ignore
import OKMdx from "../sections/games/ok-boomer"
import Skills from "../sections/skills"


// markup
const IndexPage = () => {
    const parallax = React.useRef<IParallax>(null!)

    return (
        <main>
            <title>Mᴇʟʟᴏᴡ Aʀᴘᴇɢɢɪᴀᴛɪᴏɴ</title>
            <Parallax ref={parallax} pages={4}>

                {/* Title area */}
                <ParallaxLayer className="page" speed={1}>
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
                                waitToStart: 8000,
                            }}
                        />
                    </div>
                </ParallaxLayer>

                {/* About section */}
                <ParallaxLayer offset={0.99} speed={0.3}>
                    <div className="background-parallelogram"></div>
                </ParallaxLayer>
                <ParallaxLayer className="background-title" offset={0.99} speed={0.35}>
                    <div className="up-down">
                        About
                    </div>
                </ParallaxLayer>
                <ParallaxLayer className="page" offset={0.9} speed={0.5}>
                    <section>
                        <AboutMdx />
                    </section>
                </ParallaxLayer>

                {/* Project section */}
                <ParallaxLayer className="background-title" offset={1.6} speed={0.25}>
                    <div className="up-down">
                        Project
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1.7} speed={0.5}>
                    <div className="project-timeline"></div>
                    <Project side="left">
                        <DKMdx />
                    </Project>
                    <Project side="right">
                        <OKMdx />
                    </Project>
                </ParallaxLayer>

                {/* Skills section */}
                <ParallaxLayer offset={2.2} speed={0.3}>
                    <div className="background-parallelogram"></div>
                </ParallaxLayer>
                <ParallaxLayer className="background-title" offset={2.2} speed={0.25}>
                    <div className="up-down">
                        Skills
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={2.2} speed={0.5}>
                    <WordCloud
                        data={Skills}
                        height={300}
                        font={"Milletun"}
                        fill={() => Math.random() > 0.5 ? 'cyan' : 'magenta'}
                        rotate={() => 0}
                    />
                </ParallaxLayer>
            </Parallax>
        </main>
    )
}

export default IndexPage
