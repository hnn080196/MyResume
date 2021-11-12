import { createTheme } from '@material-ui/core';

const theme = createTheme({
    palette: {
        primary: {
            main: '#172b4d',
        },
        secondary: {
            main: '#fff',
        },
        common: {
            arcPrimary: '#172b4d',
            black: '#000',
            white: '#fff',
        },
        background: {
            default: '#E1F5FE',
        },
    },
    breakpoints: {
        values: {
            md: 992,
        },
    },
});
export default theme;
