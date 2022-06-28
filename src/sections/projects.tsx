import { FunctionComponent } from "react"

// @ts-ignore
import DriftKingMdx from "../sections/games/drift-king"
// @ts-ignore
import BarefootBowenMdx from "../sections/games/barefoot-bowen"
// @ts-ignore
import TotemMdx from "../sections/games/totem"
// @ts-ignore
import LoccysChoccysMdx from "../sections/games/loccys-choccys"
// @ts-ignore
import OkBoomerMdx from "../sections/games/ok-boomer"
// @ts-ignore
import MortalisMachinaMdx from "../sections/games/mortalis-machina"
// @ts-ignore
import MovieJazzMdx from "../sections/projects/moviejazz"
// @ts-ignore
import GreentreeMdx from "../sections/projects/gt-redesign"
// @ts-ignore
import OceaneeringMdx from "../sections/projects/oceaneering"
// @ts-ignore
import WebForceFiveMdx from "../sections/projects/webforcefive"
// @ts-ignore
import GraduatedMdx from "../sections/bachelor/graduated"
// @ts-ignore
import EatElegantMdx from "../sections/bachelor/eat-elegant"
// @ts-ignore
import FlubaMdx from "../sections/bachelor/fluba"
// @ts-ignore
import PointourMdx from "../sections/bachelor/pointour"
// @ts-ignore
import ProtohookMdx from "../sections/bachelor/protohook"

type Project = {
    content: FunctionComponent,
    date: string,
    color: string,
}

const personalColor = 'magenta'
const uniColor = 'yellow'
const workColor = 'red'

const Projects: Project[] = [
    {
        content: DriftKingMdx,
        date: '2020 - now',
        color: personalColor,
    },
    {
        content: BarefootBowenMdx,
        date: '2022',
        color: personalColor,
    },
    {
        content: TotemMdx,
        date: '2021',
        color: personalColor,
    },
    {
        content: LoccysChoccysMdx,
        date: '2021',
        color: personalColor,
    },
    {
        content: OkBoomerMdx,
        date: '2019 - 2020',
        color: personalColor,
    },
    {
        content: MortalisMachinaMdx,
        date: '2018 - on hold',
        color: personalColor,
    },
    {
        content: WebForceFiveMdx,
        date: '2016',
        color: workColor,
    },
    {
        content: MovieJazzMdx,
        date: '2016',
        color: workColor,
    },
    {
        content: GraduatedMdx,
        date: '2016',
        color: uniColor,
    },
    {
        content: GreentreeMdx,
        date: '2015',
        color: workColor,
    },
    {
        content: PointourMdx,
        date: '2015',
        color: uniColor,
    },
    {
        content: FlubaMdx,
        date: '2014',
        color: uniColor,
    },
    {
        content: EatElegantMdx,
        date: '2014',
        color: uniColor,
    },
    {
        content: ProtohookMdx,
        date: '2013',
        color: uniColor,
    },
    {
        content: OceaneeringMdx,
        date: '2011',
        color: workColor,
    },
]

export default Projects
