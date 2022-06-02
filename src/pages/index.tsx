import * as React from "react"
import "../styles/main.scss"
// @ts-ignore
import AboutMdx from "../sections/about"


// markup
const IndexPage = () => {
  return (
    <main>
      <title>Mellow Portfolio</title>
      <h1 className="intro-header">Mellow</h1>
      <AboutMdx />
    </main>
  )
}

export default IndexPage
