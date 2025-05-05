import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import newWeatherImg from '@/assets/images/newweather.png';
import pomodoroImg from '@/assets/images/pomodoro.png';
import removedor from '@/assets/images/removedor.png';

const Projects: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Projeto New Weather",
            subtitle: "Jan 2023 - Dez 2023",
            srcImg: newWeatherImg,
            description: "Projeto elaborado para exibir informações e notícias do clima-tempo em tempo real. O projeto foi desenvolvido utilizando a API OpenWeatherMap, que fornece dados meteorológicos atualizados.",
            technologies: "Tecnologias: JavaScript, HTML, CSS, Angular, Bootstrap, API OpenWeatherMap",
            websiteURL: "https://gesleyoliveira.github.io/NewWeather/",
            codeURL: "https://github.com/GesleyOliveira/NewWeather",
        },
        {
            title: "Cronomêtro Pomodoro",
            subtitle: "Abril 2025 - Em desenvolvimento",
            srcImg: pomodoroImg,
            description: "Aplicação web desenvolvida para auxiliar estudantes na gestão do tempo durante sessões de estudo, utilizando a técnica Pomodoro. O cronômetro permite organizar períodos de foco e intervalos curtos de descanso, ajudando a aumentar a produtividade e manter a concentração.",
            technologies: "Tecnologias: TypeScript, React.JS, CSS, Vite",
            websiteURL: "https://github.com/GesleyOliveira/cronometroPomodoro",
            codeURL: "https://github.com/",
        },
        {
            title: "Removedor de Fundo de Imagem",
            subtitle: "Maio 2025 - Maio 2025",
            srcImg: removedor,
            description: "Aplicação web desenvolvida para remover o fundo de imagens de forma rápida e eficiente. Este projeto permite remover automaticamente o fundo de imagens usando inteligência artificial, através das bibliotecas rembg, Pillow e uma interface gráfica simples feita com Streamlit.",
            technologies: "Tecnologias: Python, Streamlit, Pillow, rembg, onnxruntime",
            websiteURL: "https://removedorfundo.streamlit.app/",
            codeURL: "https://github.com/GesleyOliveira/removedorFundo",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projetos</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid size={{md:6, xs:12}}  key={index} sx={{ display: 'flex' }}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default Projects