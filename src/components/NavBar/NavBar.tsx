import { AppBar, MenuItem } from "@mui/material"
import { styled } from '@mui/system';



const NavBar = () => {

    const StyledToobar = styled("img")(({ theme }) => ({
        display: "flex",
        justifyContent: "space-evenly",
    }));


    return (
        <>
            <AppBar position="absolute">
                <StyledToobar>
                    <MenuItem>Sobre</MenuItem>
                    <MenuItem>Habilidades</MenuItem>
                    <MenuItem>Projetos</MenuItem>
                </StyledToobar>
            </AppBar>
        </>
    )
}

export default NavBar