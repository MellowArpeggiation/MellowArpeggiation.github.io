import * as React from "react"
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import "../styles/main.scss"
import Header from "../components/header"
// @ts-ignore
import AboutMdx from "../sections/about"


// markup
const IndexPage = () => {
    const parallax = React.useRef<IParallax>(null!)

    return (
        <main>
            <title>Mellow Portfolio</title>
            <Parallax ref={parallax} pages={3}>
                <ParallaxLayer className="page" speed={1}>
                    <Header title="Mellow" />
                    <div className="scroll-indicator"></div>
                </ParallaxLayer>
                <ParallaxLayer className="background-title" offset={0.9} speed={0.25}>
                    <div className="up-down">
                        ABOUT
                    </div>
                </ParallaxLayer>
                <ParallaxLayer className="page" offset={0.9} speed={0.5}>
                    <section>
                        <AboutMdx />
                    </section>
                </ParallaxLayer>
            </Parallax>
        </main>
    )
}

export default IndexPage
