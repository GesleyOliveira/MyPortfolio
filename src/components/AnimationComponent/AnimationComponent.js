import { jsx as _jsx } from "react/jsx-runtime";
import { keyframes } from "@emotion/react";
import { styled } from "@mui/system";
import { useEffect, useRef, useState } from "react";
const moveFromLeftToRight = keyframes `
0% {
    transform: translateX(-20vw);
  }
  100% {
    transform: translateX(0);
  }
    `;
const moveFromRightToLeft = keyframes `
0% {
    transform: translateX(20vw);
  }
  100% {
    transform: translateX(0);
  }
    `;
const AnimationComponent = ({ children, moveDirection }) => {
    const componentRef = useRef(null);
    const [startAnimation, setStartAnimation] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setStartAnimation(true);
                    observer.disconnect();
                }
            });
        });
        if (componentRef.current) {
            observer.observe(componentRef.current);
        }
        return () => {
            observer.disconnect();
        };
    }, []);
    const StyledAnimationComponent = styled("div")(({ startAnimation, moveDirection }) => ({
        animation: startAnimation ? `${moveDirection} 1s linear` : "none"
    }));
    return (_jsx(StyledAnimationComponent, { ref: componentRef, startAnimation: startAnimation, moveDirection: moveDirection === "right" ? moveFromLeftToRight : moveFromRightToLeft, children: children }));
};
export default AnimationComponent;
