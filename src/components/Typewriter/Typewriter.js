import { jsx as _jsx } from "react/jsx-runtime";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
const Typewriter = ({ text, delay, variant, color }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);
    return _jsx(Typography, { variant: variant, color: color, textAlign: "center", sx: {
            whiteSpace: "normal",
            overflow: "hidden",
            minHeight: "4.5rem",
            maxWidth: "700px",
            margin: "0 auto",
        }, children: currentText });
};
export default Typewriter;
