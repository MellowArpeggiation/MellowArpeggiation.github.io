import * as React from "react"
// @ts-ignore
import SignaturesMdx from "../sections/powershell/outlook-signatures"
// @ts-ignore
import SharepointMdx from "../sections/powershell/fix-sharepoint"
import ScrollToTop from "../components/scroll-to-top"

import "../styles/prism-funky.scss"

const PowershellPage = () => {
    return (
        <main className="container">
            <section>
                <div className="block-center">
                    <h1>Useful Powershell scripts</h1>
                </div>

                <h3>Table of contents</h3>
                <ul>
                    <li><a href="#outlook-signatures">Autogenerate Outlook signatures</a></li>
                    <li><a href="#fix-sharepoint">Repair Sharepoint apps after theme change</a></li>
                </ul>
                <br />

                <div id="outlook-signatures">
                    <SignaturesMdx />
                    <hr />
                </div>

                <div id="fix-sharepoint">
                    <SharepointMdx />
                    <br />
                </div>
            </section>

            <div className="block-center">
                <a href="/">Go home</a>
            </div>
            <br />

            <ScrollToTop />
        </main>
    )
}

export default PowershellPage
