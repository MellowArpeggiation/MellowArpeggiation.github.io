
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
    content: HTMLElement,
    date: string,
}

const Projects = [
    {
        content: DriftKingMdx,
        date: '2020 - now',
    },
    {
        content: BarefootBowenMdx,
        date: '2022',
    },
    {
        content: TotemMdx,
        date: '2021',
    },
    {
        content: LoccysChoccysMdx,
        date: '2021',
    },
    {
        content: OkBoomerMdx,
        date: '2019 - 2020',
    },
    {
        content: MortalisMachinaMdx,
        date: '2018 - on hold',
    },
    {
        content: WebForceFiveMdx,
        date: '2016',
    },
    {
        content: MovieJazzMdx,
        date: '2016',
    },
    {
        content: GraduatedMdx,
        date: '2016',
    },
    {
        content: GreentreeMdx,
        date: '2015',
    },
    {
        content: PointourMdx,
        date: '2015',
    },
    {
        content: FlubaMdx,
        date: '2014',
    },
    {
        content: EatElegantMdx,
        date: '2014',
    },
    {
        content: ProtohookMdx,
        date: '2013',
    },
    {
        content: OceaneeringMdx,
        date: '2011',
    },
]

export default Projects
