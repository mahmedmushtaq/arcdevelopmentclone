import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = "#0B72B9";
const arcOrange = "#ffba60";

export default createMuiTheme({
    palette:{
        common:{
           blue:`${arcBlue}`,
           orange:`${arcOrange}`
        },
        primary:{
           main:`${arcBlue}`
        },
        secondary:{
           main:`${arcOrange}`
        },

    },
    typography:{
       tab:{
         fontFamily:"Raleway",
         textTransform:"none",
         fontWeight:700,
         fontSize:"1rem",
       },
        estimate:{
            fontSize:"1rem",
            textTransform:"none",
            fontFamily:"Pacifico",
            color:"white",
        }
    }
    
});