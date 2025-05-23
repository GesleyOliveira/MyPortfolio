import { Typography, TypographyProps } from "@mui/material";
import { useEffect, useState } from "react";


interface TypewriterProps {
    text: string;
    delay: number;
    variant?: TypographyProps['variant'];
    color?: string;
}


const Typewriter: React.FC<TypewriterProps> = ({ text, delay, variant, color }) => {

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

    return <Typography variant={variant} color={color} textAlign="center"
    sx={{
        whiteSpace: "normal",
        overflow: "hidden",
        lineHeight: 1.4,
        minHeight: "12rem",
        height: { xs: "6rem", md: "7rem" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "700px",
        margin: "0 auto",
        textAlign: "center",
      }}
        >
        {currentText}
    </Typography>;
}

export default Typewriter