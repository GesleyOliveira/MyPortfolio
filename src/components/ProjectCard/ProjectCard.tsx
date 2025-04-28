import { Grid, Typography, styled } from "@mui/material";
import StyledButton from "../StyledButton/StyledButton";
import { Box } from "@mui/system";

export interface ProjectCardProps {
    title: string;
    subtitle: string;
    srcImg: string;
    description: string
    technologies: string
    websiteURL: string;
    codeURL: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    subtitle,
    srcImg,
    description,
    technologies,
    websiteURL,
    codeURL
}) => {

    const StyledImg = styled("img")(({ theme }) => ({
        width: "100%",
        objectFit: "cover",
        height: "80vw",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center",
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
        height: '100%',             
        display: 'flex',             
        flexDirection: 'column',     
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        }
    }));

    return (
        <StyledCard>
            <Box sx={{ flexShrink: 0, minHeight: 80 }}>
                <Typography variant="h5">
                    {title}
                </Typography>
                <Typography >
                {subtitle}
                </Typography>
            </Box>
            <Box sx={{ flexShrink: 0 }}>
                <StyledImg src={srcImg} />
            </Box>
            <Box>
                <Typography>
                    {description}
                </Typography>
                <Typography fontWeight={600} pt={2}>
                    {technologies}
                </Typography>
                <Grid container spacing={1} pt={2}>
                    <Grid size= {{xs: 6}}>
                        <StyledButton onClick={() => window.open(websiteURL)}>Acessar Aplicação</StyledButton>
                    </Grid>
                    <Grid size= {{xs: 6}}>
                        <StyledButton onClick={() => window.open(codeURL)}>Visualizar Código</StyledButton>
                    </Grid>
                </Grid>
            </Box>
        </StyledCard>
    )
}

export default ProjectCard