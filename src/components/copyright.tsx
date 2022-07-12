import * as React from "react"
import BtnSource from "../components/btn-source"

const Copyright = () => <div className="block-center">
    <p>© George Paton 2016 - {new Date().getFullYear()}</p>
    <div style={{margin: 20}}>
        <BtnSource style={{maxWidth: 400, margin: 'auto'}} href="https://github.com/MellowArpeggiation/MellowArpeggiation.github.io">Source</BtnSource>
    </div>
</div>

export default Copyright
