import { createTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: blue[900]
        },
        secondary: {
            main: "#000000"
        },
        error: {
            main: red.A400
        }
    }
});

export default theme;