import * as React from "react"
import { useState, useEffect } from "react"
import { FungCanvas } from "@mellowarpeggiation/fung.js"
import { Helmet } from "react-helmet"

import "../styles/main.scss"

const FungPage = () => {
    const isBrowser = typeof window !== 'undefined';
    if (!isBrowser) {
        return (<></>);
    }

    let [fromColor, setFromColor] = useState("magenta");
    let [toColor, setToColor] = useState("cyan");

    let [width, setWidth] = useState(window.outerWidth);
    let [portrait, setPortrait] = useState(window.outerHeight > window.outerWidth);

    useEffect(() => {
        const onResize = () => {
            setTimeout(function () {
                setPortrait(window.outerHeight > window.outerWidth);
                setWidth(window.outerWidth);
            }, 100);
        };

        window.addEventListener('resize', onResize);
        
        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, []);

    return (
        <main className="container container-fung">
            <Helmet 
                htmlAttributes={{
                    class: 'fung-html',
                }}
            />
            <FungCanvas
                className={"fung-sim"}
                fromColor={fromColor}
                toColor={toColor}
                width={width}
                portrait={portrait}
                agentCount={50000}
            />
            <div className="fung-cover" />
            <h1>FUNG</h1>
            <section>
                <h2>UNLEASH THE LIVING PIXELS</h2>
                <p>
                    Nurture your mesmerizing slime mold and dive into the depths of a radiation-soaked realm,
                    harnessing its energy. Whatever you do, do not stop feeding the FUNG!
                </p>
                <br />

                <div className="block-center">
                    <iframe width="640" height="360" src="https://www.youtube.com/embed/TVEq682MVQ8?si=v38z7mTXsgUku6GS&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                </div>
                <br />
                <p className="block-center">
                    ALL RESOURCES HAVE BEEN DEPLETED<br />
                    THE SKY IS THICK WITH ATOMIC FIRE<br />
                    DWINDLING ELECTRICAL POWER REMAINS<br />
                    OUR LAST HOPE LIES WITH THE FUNG<br />
                </p>
                <br />
                <br />
                <hr />
                <br />

                <h2>EVERY PIXEL IS ALIVE</h2>
                <p>
                    The FUNG is a slime mold cellular automata. Each pixel supports the life of your mold as it grows and consumes.
                    As humanity teeters on the edge of extinction, you must embrace your role as a daring pioneer.
                    Cultivate your unique strain of slimy life, an organic marvel capable of converting toxic remnants into vital energy.
                    Through careful nurturing and strategic decision-making, watch your slime mold grow, mutate, and adapt, unfurling mesmerizing tendrils of vibrant power.
                </p>
                <br />
                <br />

                <h2>KEY FEATURES</h2>
                <ul>
                    <li>Every pixel simulated, life ebbs and flows on the grid</li>
                    <li>Exquisite visual design, inspired by the old-school stylings of Lemmings (1991)</li>
                    <li>Full level editor included</li>
                    <li>Many more types of cellular automata included, including over 100 totalistic rules based on Conway's Game of Life</li>
                    <li>A true indie classic</li>
                </ul>

                <br />
                <br />
                <hr />
                <br />

                <h2>AVAILABLE NOW IN EARLY ACCESS!</h2>
                <div className="block-center">
                    <iframe src="https://store.steampowered.com/widget/2467310/" width="646" height="190"></iframe>
                    <iframe src="https://itch.io/embed/2175815?border_width=0&amp;bg_color=000000&amp;fg_color=ffffff&amp;link_color=00ff00&amp;border_color=000000" width="550" height="165"><a href="https://mellowarpeggiation.itch.io/fung">FUNG by Mellow</a></iframe>

                    <br />
                    <br />
                    <br />
                    <p>COPYRIGHT 2023 - MELLOW PTY LTD ^</p>
                </div>
            </section>
        </main>
    )
}

export default FungPage