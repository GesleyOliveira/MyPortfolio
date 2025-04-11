import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Card, Container, Grid, Typography, styled } from "@mui/material";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
const AboutSection = () => {
    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));
    const skillsSet = [
        "Python", "Java", "Javascript", "Typescript", "React", "MongoDB", "Firebase", "SQL"
    ];
    return (_jsx(_Fragment, { children: _jsxs(Container, { maxWidth: "lg", children: [_jsx(Box, { id: "about", pt: 5, mb: 3, children: _jsx(Typography, { variant: "h2", textAlign: "center", children: "Sobre Mim" }) }), _jsxs(Grid, { container: true, spacing: 2, display: "flex", justifyContent: "center", pb: 3, children: [_jsx(Grid, { size: { xs: 9, md: 2.5 }, children: _jsx(AnimationComponent, { moveDirection: "right", children: _jsxs(StyledCard, { variant: "outlined", children: [_jsx(WorkspacePremiumIcon, {}), _jsx(Typography, { textAlign: "center", fontWeight: 600, children: "Cursando" }), _jsx(Typography, { textAlign: "center", children: "Desenvolvimento de Software" }), _jsx(Typography, { textAlign: "center", fontWeight: 1000, children: "Fatec Votorantim" })] }) }) }), _jsx(Grid, { size: { xs: 9, md: 2.5 }, children: _jsx(AnimationComponent, { moveDirection: "left", children: _jsxs(StyledCard, { variant: "outlined", children: [_jsx(SchoolIcon, {}), _jsx(Typography, { textAlign: "center", fontWeight: 600, children: "Forma\u00E7\u00E3o" }), _jsx(Typography, { textAlign: "center", children: "Engenharia de Produ\u00E7\u00E3o" }), _jsx(Typography, { textAlign: "center", fontWeight: 1000, children: "Universidade de Sorocaba" })] }) }) })] }), _jsx(Box, { pb: 1, children: _jsx(Typography, { children: "Meu nome \u00E9 Gesley de Oliveira Rosa, sou formado em Engenharia de Produ\u00E7\u00E3o pela Universidade de Sorocaba e, atualmente, estou cursando Desenvolvimento de Software Multiplataforma pela Faculdade de Tecnologia de Votorantim. Em minha atual gradua\u00E7\u00E3o, desenvolvi uma aplica\u00E7\u00E3o com o tema \u201CCidades Inteligentes\u201D, para um projeto de Inicia\u00E7\u00E3o Cient\u00EDfica que envolveu a modelagem de dados e exibi\u00E7\u00E3o de informa\u00E7\u00F5es relacionados a meteorologia para acompanhamento de hist\u00F3rico e tomada de decis\u00F5es. Sou uma pessoa proativa, dedicada, organizado e procuro aprender sempre e me desenvolver profissionalmente, comprometido com o meu crescimento profissional." }) }), _jsx("hr", {}), _jsx(Box, { id: "skills", pt: 1, mb: 3, children: _jsx(Typography, { variant: "h3", textAlign: "center", fontWeight: 300, children: "Habilidades em Desenvolvimento" }) }), _jsx(Box, { mb: 5, children: _jsx(Grid, { container: true, spacing: 3, justifyContent: "center", children: skillsSet.map((skill, index) => (_jsx(Grid, { size: { xs: 5, md: 2, lg: 2 }, children: _jsx(StyledCard, { variant: "outlined", children: skill }) }, index))) }) })] }) }));
};
export default AboutSection;
