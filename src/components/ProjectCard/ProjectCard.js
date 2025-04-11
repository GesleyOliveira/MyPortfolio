import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Grid, Typography, styled } from "@mui/material";
import StyledButton from "../StyledButton/StyledButton";
const ProjectCard = ({ title, subtitle, srcImg, description, technologies, websiteURL, codeURL }) => {
    const StyledImg = styled("img")(({ theme }) => ({
        width: "100%",
        objectFit: "contain",
        height: "80vw",
        padding: "10px 0",
        [theme.breakpoints.up('md')]: {
            height: "45vh",
        },
    }));
    const StyledCard = styled("div")(({ theme }) => ({
        borderRadius: "3px",
        border: `0.5px solid  ${theme.palette.primary.contrastText}`,
        backgroundColor: "transparent",
        color: theme.palette.primary.contrastText,
        padding: "20px",
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        }
    }));
    return (_jsxs(StyledCard, { children: [_jsx(Typography, { variant: "h5", children: title }), _jsx(Typography, { children: subtitle }), _jsx(StyledImg, { src: srcImg }), _jsx(Typography, { children: description }), _jsx(Typography, { fontWeight: 600, pt: 2, children: technologies }), _jsxs(Grid, { container: true, spacing: 1, pt: 2, children: [_jsx(Grid, { size: { xs: 6 }, children: _jsx(StyledButton, { onClick: () => window.open(websiteURL), children: "View Project" }) }), _jsx(Grid, { size: { xs: 6 }, children: _jsx(StyledButton, { onClick: () => window.open(codeURL), children: "View Code" }) })] })] }));
};
export default ProjectCard;
