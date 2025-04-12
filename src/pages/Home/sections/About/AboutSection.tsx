import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";


const AboutSection: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        height: "100%",
        flexDirection: "column",
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    const skillsSet = [
        "Python", "Java", "Javascript", "Typescript", "React", "MongoDB", "Firebase", "SQL"
    ]

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center" >Sobre Mim</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid size={{ xs: 9, md: 3 }}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Cursando</Typography>
                                <Typography textAlign="center">Desenvolvimento de Software</Typography>
                                <Typography textAlign="center" fontWeight={1000}>Fatec Votorantim</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid size={{ xs: 9, md: 3 }}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Formação</Typography>
                                <Typography textAlign="center">Engenharia de Produção</Typography>
                                <Typography textAlign="center"fontWeight={1000}>Universidade de Sorocaba</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                        Em minha atual graduação, desenvolvi uma aplicação com o tema “Cidades Inteligentes”, para um projeto de Iniciação Científica que envolveu a modelagem de dados e exibição de informações relacionados a meteorologia para acompanhamento de histórico e tomada de decisões.

                        Sou uma pessoa proativa, dedicada, organizado e procuro aprender sempre e me desenvolver profissionalmente, comprometido com o meu crescimento profissional.  
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Habilidades em Desenvolvimento</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid key={index} size={{ xs: 5, md: 2, lg: 2 }}>
                                <StyledCard variant="outlined">
                                    {skill}
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default AboutSection