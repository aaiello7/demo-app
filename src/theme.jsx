import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type:"dark",
        primary: {
            light: "#ffbb93",
            main: "#ff8a65",
            dark: "#c75b39"
        },
        // primary: {
        //     light: "#616161",
        //     main: "#8e8e8e",
        //     dark: "#373737"
        // },
        // secondary: {
        //     light: "#ffa06d",
        //     main: "#ff6e40",
        //     dark: "#c53d13"
        // },
        secondary: {
            light: "#263238",
            main: "#4f5b62",
            dark: "#000a12"
        },

        
    },

});

export default theme;