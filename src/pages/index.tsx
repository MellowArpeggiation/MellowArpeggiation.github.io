import * as React from "react"
import "../styles/main.scss"
import Header from "../components/header"
// @ts-ignore
import AboutMdx from "../sections/about"


// markup
const IndexPage = () => {
    return (
        <main>
            <title>Mellow Portfolio</title>
            <Header title="Mellow" />
            <AboutMdx />
        </main>
    )
}

export default IndexPage
