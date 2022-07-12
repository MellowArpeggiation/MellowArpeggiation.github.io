import * as React from "react"
// @ts-ignore
import AnswersMdx from "../sections/answers"
import ScrollToTop from "../components/scroll-to-top"

const PowershellPage = () => {
    return (
        <main className="container">
            <div id="outlook-signatures">
                <AnswersMdx />
            </div>

            <div className="block-center">
                <a href="/">Go home</a>
            </div>
            <br />

            <ScrollToTop />
        </main>
    )
}

export default PowershellPage
