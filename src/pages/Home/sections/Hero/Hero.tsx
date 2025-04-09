import { styled } from '@mui/system'; 
import { Button, Typography, Container } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
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
  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid
            size={{
              xs: 12,
              md: 4
            }}>
            <StyledImg src={Avatar} alt="Avatar" />
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 8
            }}>
            <Typography
              color="primary.contrastText"
              variant="h3"
              textAlign="center"
              gutterBottom
            >
              Gesley de Oliveira Rosa
            </Typography>
            <Typography
              color="primary.contrastText"
              variant="h5"
              textAlign="center"
              gutterBottom
            >
              Desenvolvimento de Software
            </Typography>

            <Grid container spacing={2} justifyContent="center" mt={2}>
              <Grid
                display="flex"
                justifyContent="center"
                size={{
                  xs: 12,
                  md: 4
                }}>
                <Button variant="contained" color="secondary" startIcon={<DownloadIcon />}>
                  Download CV
                </Button>
              </Grid>

              <Grid
                display="flex"
                justifyContent="center"
                size={{
                  xs: 12,
                  md: 4
                }}>
                <StyledButton />
              </Grid>

              <Grid
                display="flex"
                justifyContent="center"
                size={{
                  xs: 12,
                  md: 4
                }}>
                <Button variant="outlined" color="primary" startIcon={<EmailIcon />}>
                  Meus Contatos
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
