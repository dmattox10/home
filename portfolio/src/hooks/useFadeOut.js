
import { useEffect, useState } from "react";
export const useFadeOut = (initial) => {
    const [show, setShow] = useState(initial);
    const [isVisible, setVisible] = useState(show);

    // Update visibility when show changes
    useEffect(() => {
        if (show) setVisible(true);
    }, [show]);

    // When the animation finishes, set visibility to false
    const onAnimationEnd = () => {
        if (!show) setVisible(false);
    };

    const style = { animation: `${show ? "" : "fadeOut"} .8s` };

    // These props go on the fading DOM element
    const fadeProps = {
        style,
        onAnimationEnd
    };

    return [isVisible, setShow, fadeProps];
};