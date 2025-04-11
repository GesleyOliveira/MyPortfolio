import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { styled, Box } from '@mui/system';
import { Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from 'components/AnimatedBackground/AnimatedBackground';
import Typewriter from "../../../../components/Typewriter/Typewriter";
import CV from "../../../../assets/pdfs/Open.pdf";
const Hero = () => {
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up("xs")]: {
            paddingTop: "100px",
        },
        [theme.breakpoints.up("md")]: {
            paddingTop: "0",
        },
    }));
    const StyledImg = styled("img")(({ theme }) => ({
        width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
    }));
    const handleDownload = () => {
        console.log("download");
        // Create a link element
        const link = document.createElement('a');
        link.href = CV;
        link.download = 'example.pdf'; // Set the download attribute to specify the file name
        // Append the link to the body
        document.body.appendChild(link);
        // Trigger the click event
        link.click();
        // Remove the link from the body
        document.body.removeChild(link);
    };
    const handleEmail = () => {
        const emailAddress = 'example@example.com';
        const subject = 'Subject';
        const body = 'Hello! I saw your portfolio...';
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
    };
    return (_jsx(StyledHero, { children: _jsx(Container, { maxWidth: "lg", children: _jsxs(Grid, { container: true, spacing: 2, children: [_jsx(Grid, { size: {
                            xs: 12,
                            md: 5
                        }, children: _jsxs(Box, { position: "relative", children: [_jsx(Box, { position: "absolute", width: "150%", top: -100, right: 0, children: _jsx(AnimatedBackground, {}) }), _jsx(Box, { position: "relative", textAlign: "center", children: _jsx(StyledImg, { src: Avatar, alt: "Avatar" }) })] }) }), _jsxs(Grid, { size: {
                            xs: 12,
                            md: 7
                        }, children: [_jsx(Typography, { color: "primary.contrastText", variant: "h1", pb: 2, textAlign: "center", children: "Gesley de Oliveira Rosa" }), _jsx(Typewriter, { text: "Desenvolvimento de Software Multiplataforma", delay: 120, variant: "h2", color: "primary.contrastText" }), _jsx(Box, { mt: 3, children: _jsxs(Grid, { container: true, display: "flex", justifyContent: "center", spacing: 3, pt: 3, children: [_jsx(Grid, { display: "flex", justifyContent: "center", size: {
                                                xs: 12,
                                                md: 4
                                            }, children: _jsxs(StyledButton, { onClick: () => handleDownload(), children: [_jsx(DownloadIcon, {}), _jsx(Typography, { children: "Download CV" })] }) }), _jsx(Grid, { display: "flex", justifyContent: "center", size: {
                                                xs: 12,
                                                md: 4
                                            }, children: _jsxs(StyledButton, { onClick: () => handleEmail(), children: [_jsx(EmailIcon, {}), _jsx(Typography, { children: "Email" })] }) })] }) })] })] }) }) }));
};
export default Hero;
