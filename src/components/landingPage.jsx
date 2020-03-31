import React from "react";
import Lottie from "react-lottie";
import {makeStyles,useTheme} from "@material-ui/core/styles";
import animationData from "../animations/landinganimation/data";
import {Button,Typography,Card,CardContent} from "@material-ui/core"
import Grid from "@material-ui/core/Grid";
import ButtonArrow from "./ui/ButtonArrow";
import CustomSoftwareIcon from "../assets/customSoftware.svg"
import useMediaQuery from "@material-ui/core/useMediaQuery";
import mobileAppIcon from "../assets/mobileIcon.svg"
import websiteIcon  from "../assets/websiteIcon.svg";
import revolutionImage from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";
import CallToAction from "./ui/CallToAction";
import {Link} from "react-router-dom";




const useStyle = makeStyles(theme=>({
    animation:{
        maxWidth:"50em",
        minWidth:"21em",
        marginTop:"2em",
        marginLeft:"10%",
        [theme.breakpoints.down("xs")]:{
            maxWidth:"30em",
}
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
    },
        buttonContainer:{
            marginTop:"1em"
        },
        learnButtonMore:{
           ...theme.typography.learnButton,
            fontSize:"0.9rem",
            height:45,
            width:145,


    },
    mainContainer:{
        marginTop:"5em",
        [theme.breakpoints.down("md")]:{
            marginTop:"3em"
        },
        [theme.breakpoints.down("xs")]:{
            marginTop:"2em"
        }
    },
    heroTextContainer:{
        minWidth:"21.5em",
        marginLeft:"1em",
        [theme.breakpoints.down("xs")]:{
            marginLeft:"0"
    }
    },
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
        marginTop:"12em",
        [theme.breakpoints.down("sm")]:{
            padding:25,
        }
    },
    revolutionBackground:{
        backgroundImage:`url(${revolutionImage})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        height:"100%",

        width:"100%"

    },
    revolutionCard:{
       position:"absolute",
        boxShadow:theme.shadows[10],
        borderRadius:15,
        padding:"10em",
        [theme.breakpoints.down("sm")]:{
           padding:"8em 0",
            borderRadius:0,
            width:"100%"

}
    },
    infoBackground:{
        backgroundImage:`url(${infoBackground})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        height:"100%",

        width:"100%"

    }

}));

export default function (props) {
  const classes = useStyle();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));
  const {setValue,setSelectedIndex} = props;

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return  (
        <Grid container direction={"column"} className={classes.mainContainer}>
            <Grid item>
                <Grid container justify={"flex-end"} alignItems={"center"}>
                    <Grid sm item className={classes.heroTextContainer}>
                        <Typography variant={"h2"} align={"center"}>
                            Bringing west coast technology <br/> to the midwest
                        </Typography>
                        <Grid container justify={"center"} className={classes.buttonContainer}>
                            <Grid item>
                                <Button variant={"contained"} component={Link} onClick={()=>setValue(5)} to={"/estimate"} className={classes.estimateButton}>Free estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button component={Link} to={"/customsoftware"} onClick={()=>{setValue(1); setSelectedIndex(1);}} variant={"outlined"} className={classes.learnButtonMore}>Learn more
                               <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation}>

                        <Lottie options={defaultOptions}
                                height={"100%"}
                                width={"100%"}
                        />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                {/* Sevices container*/}
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
                        <img className={classes.icon} alt={"Custom software icon"} src={CustomSoftwareIcon}/>
                    </Grid>
                </Grid>
            </Grid>




            <Grid item>
                {/* Mobile Apps container*/}
                <Grid container className={classes.serviceContainer}
                      justify={matchesSM ? "center": "flex-end"}>
                    <Grid item style={{"textAlign":matchesSM ? "center":undefined}}>
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
                        <img className={classes.icon} alt={"Mobile App icon"} src={mobileAppIcon}/>
                    </Grid>
                </Grid>
            </Grid>



            <Grid item>
                {/* website container*/}
                <Grid container className={classes.serviceContainer}
                      justify={matchesSM ? "center": undefined}>
                    <Grid item style={{"marginLeft": matchesSM ? 0 : "5em","textAlign":matchesSM ? "center":undefined}}>
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
                    <Grid item>
                        <img className={classes.icon} alt={"Website icon"} src={websiteIcon}/>
                    </Grid>
                </Grid>
            </Grid>


            <Grid item>
                <Grid container alignItems={"center"} justify={"center"} style={{"height":"100em","marginTop":"12em"}}>
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid container direction={"column"} style={{"textAlign":"center"}}>
                                <Grid item>
                                    <Typography variant={"h3"} gutterBottom={true}>
                                        The Revolution
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant={"subtitle1"}>
                                        Visionary insights coupled with cutting edge technology is a recipe for revolution
                                    </Typography>
                                    <Button variant={"outlined"} component={Link} to={"/revolution"} onClick={()=>{setValue(2); }} className={classes.learnButton}>
                                        <span style={{"marginRight":10}}>Learn more</span>
                                        <ButtonArrow height={10} width={10} fill={theme.palette.common.blue}/>
                                    </Button>
                                </Grid>

                            </Grid>
                        </CardContent>

                    </Card>
                    <div className={classes.revolutionBackground}/>

                </Grid>
            </Grid>

            <Grid item>
                <Grid  container style={{"height":"80em"}} alignItems={"center"}  className={classes.infoBackground}>
                    <Grid item container
                          style={{ textAlign: matchesSM? "center":"inherit"}}
                          direction={matchesSM ? "column":"row"}

                    >
                    <Grid item sm style={{"marginLeft":matchesXs ? 0 : matchesSM ? "2em":"5em",marginBottom:matchesXs ? "10em":0}}>
                        <Grid container    direction={"column"}>
                            <Typography variant={"h2"} style={{"color":"white"}}>
                                About Us
                            </Typography>
                            <Typography variant={"subtitle2"}>
                                Let's get personal
                            </Typography>
                            <Grid item>
                                <Button component={Link} to={"about"} variant={"outlined"} onClick={()=>{setValue(3);}} style={{color:"white",borderColor:"white"}} className={classes.learnButton}>
                                    <span style={{"marginRight":10}}>Learn more</span>
                                    <ButtonArrow height={10} width={10} fill={"white"}/>
                                </Button>

                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid item sm style={{"marginRight":matchesSM ? 0:"5em","textAlign":matchesSM ? "center":"right"}}
                   >
                        <Grid container direction={"column"}>
                            <Typography variant={"h2"} style={{"color":"white"}}>
                                Contact Us
                            </Typography>
                            <Typography variant={"subtitle2"}>
                                Say Hello!
                            </Typography>
                            <Grid item>
                                <Button component={Link} to={"contact"} onClick={()=>{setValue(4);}} variant={"outlined"} style={{color:"white",borderColor:"white"}} className={classes.learnButton}>
                                    <span style={{"marginRight":10}}>Learn more</span>
                                    <ButtonArrow height={10} width={10} fill={"white"}/>
                                </Button>

                            </Grid>

                        </Grid>
                    </Grid>
                    </Grid>


                </Grid>
            </Grid>

        {/*    CALL TO ACTION*/}

        <Grid item>
            <CallToAction setValue={setValue}/>
        </Grid>

        </Grid>

    )
}