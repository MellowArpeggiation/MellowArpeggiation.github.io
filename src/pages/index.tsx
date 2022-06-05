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
            <Parallax ref={parallax} pages={2}>
                <ParallaxLayer speed={1}>
                    <Header title="Mellow" />
                </ParallaxLayer>
                <ParallaxLayer offset={1}>
                    <AboutMdx />
                </ParallaxLayer>
            </Parallax>
        </main>
    )
}

export default IndexPage
