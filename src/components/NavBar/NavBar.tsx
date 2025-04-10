import { AppBar, MenuItem, Toolbar } from "@mui/material"
import { styled } from '@mui/system';



const NavBar = () => {

    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly",
    }));


    return (
        <>
            <AppBar position="absolute">
                <StyledToolbar>
                    <MenuItem>Sobre</MenuItem>
                    <MenuItem>Habilidades</MenuItem>
                    <MenuItem>Projetos</MenuItem>
                </StyledToolbar>
            </AppBar>
        </>
    );
};

export default NavBar