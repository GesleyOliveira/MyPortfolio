import { styled } from "@mui/system";
import { Button, Typography, Container } from "@mui/material";
import Grid from '@mui/material/Grid';
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

const StyledHero = styled("div")(() => ({
  backgroundColor: "black",
  height: "100vh",
}));

const StyledImg = styled("img")(() => ({
  width: "100%",
  borderRadius: "50%",
}));

const Hero = () => {
  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <StyledImg src={Avatar} />
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography color="primary" variant="h1" textAlign="center">Gesley de Oliveira Rosa</Typography>
            <Typography color="primary" variant="h2" textAlign="center">Desenvolvimento de Software</Typography>
            <Grid container display={{ xs: "flex"}} justifyContent="center">
              <Grid size={{ xs: 12, md: 4 }} display={{ xs: "flex"}} justifyContent="center">
                <Button>
                  <DownloadIcon />
                  Download CV
                </Button>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }} display={{ xs: "flex" }} justifyContent="center">
                <Button>
                  <EmailIcon />
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
