import * as React from "react"

type Props = {
    scrollToTop?: React.MouseEventHandler,
};

const ScrollToTop: React.FunctionComponent<Props> = ({
    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    },
}) => {
    const [scrollClassName, setScrollClassName] = React.useState('scroll-to-top');

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > innerHeight) {
                setScrollClassName('scroll-to-top in');
            } else {
                setScrollClassName('scroll-to-top');
            }
        });
    }, []);

    return <div className={scrollClassName} onClick={scrollToTop}></div>
};

export default ScrollToTop
