import React from "react";

import {makeStyles,useTheme} from "@material-ui/core/styles";

import {Button,Typography} from "@material-ui/core"
import Grid from "@material-ui/core/Grid";
import ButtonArrow from "./ui/ButtonArrow";
import CustomSoftwareIcon from "../assets/customSoftware.svg"
import useMediaQuery from "@material-ui/core/useMediaQuery";
import mobileAppIcon from "../assets/mobileIcon.svg"
import websiteIcon  from "../assets/websiteIcon.svg";


import {Link} from "react-router-dom";




const useStyle = makeStyles(theme=>({




    specialText:{
           color:theme.palette.common.orange,
           fontFamily:"Pacifico"
       },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize:".7rem",
        height:35,
         [theme.breakpoints.down("sm")]: {
             marginBottom: "2em"
         }

},
    subtitle:{
        marginBottom:"1em"
    },
    icon:{

        marginLeft:"2em",
        [theme.breakpoints.down("xs")]:{
            marginLeft:0
        }
    },
    serviceContainer:{
        marginTop:"5em",
        [theme.breakpoints.down("sm")]:{
            padding:25,
        }
    },




}));

export default function (props) {
  const classes = useStyle();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));
  const {setValue,setSelectedIndex} = props;


    return  (
        <Grid container direction={"column"} className={classes.mainContainer}>

           <Grid item>
                    <Typography gutterBottom variant="h1" style={{"textAlign": matchesSM ? "center":"inherit", marginLeft:matchesSM ? 0 : "5em",marginTop:matchesSM ? ".5em":"1em"}}>Services</Typography>
                        </Grid>


            <Grid item>
                {/* Sevices container*/}






            <Grid item>
                {/* Mobile Apps container*/}
                <Grid container className={classes.serviceContainer}
                      justify={matchesSM ? "center": "flex-end"}>
                    <Grid item style={{"textAlign":matchesSM ? "center":undefined,width:matchesSM ? undefined : "35em"}}>
                        <Typography variant={"h4"}>IOS/Android App Development</Typography>
                        <Typography variant={"subtitle1"} className={classes.subtitle}>
                            Extend functionality. Extend Access. Increase Engagement
                        </Typography>
                        <Typography variant={"subtitle1"}>
                            Integerate your web experience or create a standalone app
                            {matchesSM ? null : <br/>}
                                with either mobile platform

                        </Typography>
                        <Button variant={"outlined"} onClick={()=>{setValue(1); setSelectedIndex(2);}} component={Link} to={"/mobileapps"} className={classes.learnButton}>
                            <span style={{"marginRight":10}}>Learn more</span>
                            <ButtonArrow height={10} width={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item style={{"marginRight": matchesSM ? 0 : "5em"}}>
                        <img className={classes.icon} alt={"Mobile App icon"} src={mobileAppIcon} width={"250em"}/>
                    </Grid>
                </Grid>
            </Grid>

              <Grid container className={classes.serviceContainer}
                            justify={matchesSM ? "center": undefined}>
                                <Grid item style={{"marginLeft": matchesSM ? 0 : "5em","textAlign":matchesSM ? "center":undefined}}>
                                   <Typography variant={"h4"}>Custom Software Development</Typography>
                                   <Typography variant={"subtitle1"} className={classes.subtitle}>
                                       Save Energy. Save Time. Save Money
                                   </Typography>
                                   <Typography variant={"subtitle1"}>Complete digital solution from investigation to{""}
                                   <span className={classes.specialText}> Celebration</span>
                                   </Typography>
                                    <Button component={Link} to={"/customsoftware"} onClick={()=>{setValue(1); setSelectedIndex(1);}} variant={"outlined"} className={classes.learnButton}>
                                        <span style={{"marginRight":10}}>Learn more</span>
                                        <ButtonArrow height={10} width={10} fill={theme.palette.common.blue}/>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <img className={classes.icon} alt={"Custom software icon"} src={CustomSoftwareIcon}
                                  />
                                </Grid>
                            </Grid>
                        </Grid>



            <Grid item>
                {/* website container*/}
                <Grid container className={classes.serviceContainer}
                      justify={matchesSM ? "center": "flex-end"}>
                    <Grid item style={{"marginLeft": matchesSM ? 0 : "5em","textAlign":matchesSM ? "center":undefined,width:matchesSM ? undefined : "35em"}}>
                        <Typography variant={"h4"}>Website Development</Typography>
                        <Typography variant={"subtitle1"} className={classes.subtitle}>
                            Reach more. Discover more. Sell More
                        </Typography>
                        <Typography variant={"subtitle1"}>Complete digital solution from investigation to{""}
                            <span className={classes.specialText}> Celebration</span>
                        </Typography>
                        <Button variant={"outlined"} component={Link} onClick={()=>{setValue(1); setSelectedIndex(3);}} to={"/websites"} className={classes.learnButton}>
                            <span style={{"marginRight":10}}>Learn more</span>
                            <ButtonArrow height={10} width={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item style={{"marginRight": matchesSM ? 0 : "5em"}} >
                        <img className={classes.icon} alt={"Website icon"} src={websiteIcon}   width="250em"/>
                    </Grid>
                </Grid>
            </Grid>








        </Grid>

    )
}