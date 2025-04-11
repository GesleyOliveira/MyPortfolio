import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
const Projects = () => {
    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
    }));
    const projects = [
        {
            title: "Project Exemple",
            subtitle: "Jul 2023 - Dez 2023",
            srcImg: "/src/assets/images/project-trello.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.",
            technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
            websiteURL: "https://trello.com/",
            codeURL: "https://github.com/",
        },
        {
            title: "Project Exemple",
            subtitle: "Jul 2023 - Dez 2023",
            srcImg: "/src/assets/images/project-financas.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.",
            technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
            websiteURL: "https://trello.com/",
            codeURL: "https://github.com/",
        },
        {
            title: "Project Craze Maze",
            subtitle: "Jul 2019 - May 2019",
            srcImg: "/src/assets/images/project1-craze-maze.gif",
            description: "Game to escape the maze, but not only that. An algorithm has been created that randomly generates a new maze each time the game is started. In this game, the user can use the keyboard keys to move until they find the flag and win the game",
            technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
            websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
            codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
        },
        {
            title: "Project Blotting",
            subtitle: "Jul 2019 - May 2019",
            srcImg: "/src/assets/images/project2-blotting.png",
            description: "Game to escape the maze, but not only that. An algorithm has been created that randomly generates a new maze each time the game is started. In this game, the user can use the keyboard keys to move until they find the flag and win the game",
            technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
            websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
            codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
        },
    ];
    return (_jsx(StyledExperience, { children: _jsxs(Container, { maxWidth: "lg", children: [_jsx(Box, { id: "projects", pt: 5, pb: 3, children: _jsx(Typography, { variant: "h2", textAlign: "center", color: "primary.contrastText", children: "Projetos" }) }), _jsx(Grid, { container: true, spacing: 5, pb: 3, children: projects.map((project, index) => (_jsx(Grid, { size: { md: 6 }, children: _jsx(AnimationComponent, { moveDirection: index % 2 == 0 ? "right" : "left", children: _jsx(ProjectCard, { title: project.title, subtitle: project.subtitle, srcImg: project.srcImg, description: project.description, technologies: project.technologies, websiteURL: project.websiteURL, codeURL: project.codeURL }) }) }, index))) })] }) }));
};
export default Projects;
