import React from "react";
import {Button, Grid, Typography,useTheme,useMediaQuery} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ButtonArrow from "./ButtonArrow";
import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";
import {Link} from "react-router-dom";



const useStyles = makeStyles(theme=>({
    learnButton: {
    ...theme.typography.learnButton,
            fontSize:".7rem",
            height:35,
            [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }

    },
    background:{
        backgroundImage:`url(${background})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        height:"60em",
        backgroundAttachment:"fixed",

        width:"100%",
        [theme.breakpoints.down("sm")]:{
            backgroundImage:`url(${mobileBackground})`,
            backgroundAttachment: "inherit"
}


    },
    estimateButton:{
        ...theme.typography.estimate,
        borderRadius:50,
        height:80,
        width:205,
        backgroundColor:theme.palette.common.orange,
        fontSize:"1.5rem",
        marginRight:"5em",
        marginLeft:"1em",
        [theme.breakpoints.down("sm")]:{
            marginRight:0,
            marginLeft:"3em",
        },
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
    }
}));

export default function (props) {
     const classes = useStyles();
     const theme = useTheme();
     const {setValue} = props;
     const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
     return (
         <Grid container className={classes.background} alignItems={"center"}
               justify={matchesSM ? "center":"space-between"}
               direction={matchesSM ? "column":"row"}
         >
             <Grid item style={{marginLeft:"5em",textAlign:matchesSM ? "center" : "inherit"}}>
                 <Grid container direction={"column"}>
                     <Grid item>
                         <Typography variant={"h2"}>
                             Simple Software
                             <br/>
                             Revolutionary Result
                         </Typography>
                         <Typography variant={"subtitle2"} style={{fontSize:"1.25rem"}}>
                             Take Advantage of the 21st century
                         </Typography>

                         <Grid item>
                             <Button component={Link} to={"/revolution"} onClick={()=>{setValue(2);}} variant={"outlined"} className={classes.learnButton}>
                                 <span style={{"marginRight":5}}>Learn more</span>
                                 <ButtonArrow height={10} width={10} fill={theme.palette.common.blue}/>
                             </Button>

                         </Grid>

                     </Grid>
                 </Grid>
             </Grid>
             <Grid item >
                 <Button variant="contained" onClick={()=>{setValue(5);}} component={Link} to={"/estimate"}
                         className={classes.estimateButton}>Free Estimate </Button>
             </Grid>

         </Grid>
     )

}
