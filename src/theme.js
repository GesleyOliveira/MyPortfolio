import { createTheme, responsiveFontSizes } from '@mui/material/styles';
let theme = createTheme({
    palette: {
        primary: {
            main: '#232323',
            light: '#3c3c3c', // opcional, mais claro que o main
            dark: '#0c0c0c', // opcional, mais escuro que o main
            contrastText: '#ffffff', // texto branco para bom contraste
        },
        secondary: {
            main: '#4f8e3e',
            light: '#72b362', // opcional
            dark: '#366528', // opcional
            contrastText: '#ffffff',
        },
    },
    typography: {
        fontFamily: "Helvetica Neue"
    }
});
theme = responsiveFontSizes(theme);
export default theme;
