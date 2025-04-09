import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { styled } from '@mui/system';
import { Button, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";
const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh",
    display: "flex",
    alignItems: "center",
}));
const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
}));
const Hero = () => {
    return (_jsx(StyledHero, { children: _jsx(Container, { maxWidth: "lg", children: _jsxs(Grid, { container: true, spacing: 4, alignItems: "center", children: [_jsx(Grid, { size: {
                            xs: 12,
                            md: 4
                        }, children: _jsx(StyledImg, { src: Avatar, alt: "Avatar" }) }), _jsxs(Grid, { size: {
                            xs: 12,
                            md: 8
                        }, children: [_jsx(Typography, { color: "primary.contrastText", variant: "h3", textAlign: "center", gutterBottom: true, children: "Gesley de Oliveira Rosa" }), _jsx(Typography, { color: "primary.contrastText", variant: "h5", textAlign: "center", gutterBottom: true, children: "Desenvolvimento de Software" }), _jsxs(Grid, { container: true, spacing: 2, justifyContent: "center", mt: 2, children: [_jsx(Grid, { display: "flex", justifyContent: "center", size: {
                                            xs: 12,
                                            md: 4
                                        }, children: _jsx(Button, { variant: "contained", color: "secondary", startIcon: _jsx(DownloadIcon, {}), children: "Download CV" }) }), _jsx(Grid, { display: "flex", justifyContent: "center", size: {
                                            xs: 12,
                                            md: 4
                                        }, children: _jsx(StyledButton, {}) }), _jsx(Grid, { display: "flex", justifyContent: "center", size: {
                                            xs: 12,
                                            md: 4
                                        }, children: _jsx(Button, { variant: "outlined", color: "primary", startIcon: _jsx(EmailIcon, {}), children: "Meus Contatos" }) })] })] })] }) }) }));
};
export default Hero;
