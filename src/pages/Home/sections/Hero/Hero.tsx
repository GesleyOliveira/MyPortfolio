import { styled, Box } from '@mui/system';
import { Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../../src/theme";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import Typewriter from "../../../../components/Typewriter/Typewriter"
import CV from "../../../../assets/pdfs/Open.pdf"



const Hero: React.FC = () => {


  const StyledImg = styled("img")(({ theme }) => ({
    width: "80%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    position: "relative",
  }));

  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      display: "block",
      padding: "20px",
      paddingTop: "100px",    
      paddingBottom: "40px",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      height: "100vh",
    },
  }));

  const handleDownload = () => {
    console.log("download")
    // Create a link element
    const link = document.createElement('a');
    link.href = CV
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
    const body = 'Olá, Eu vi o seu portfólio...';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  }

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box position="relative" pb={3}>
              <Box position="absolute" width={"150%"} top={-100} right={0}>
                <AnimatedBackground />
              </Box>
              <Box textAlign={"center"}>
                <StyledImg src={Avatar} alt="Avatar" />
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography color="primary.contrastText" variant="h1" pb={2} textAlign="center">
              Gesley de Oliveira Rosa
            </Typography>
            <Typewriter text="Desenvolvedor Full Stack" delay={120} variant="h2" color="primary.contrastText" />
            <Box mt={3}>
              <Grid container spacing={3} display={"flex"} justifyContent="center" >
                <Grid size={{ xs: 10, md: 4 }}>
                  <StyledButton onClick={() => handleDownload()}>
                    <DownloadIcon />
                    <Typography>
                      Download CV
                    </Typography>
                  </StyledButton>
                </Grid>
                <Grid size={{ xs: 10, md: 4 }}>
                  <StyledButton onClick={() => handleEmail()}>
                    <EmailIcon />
                    <Typography>
                      Email
                    </Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
