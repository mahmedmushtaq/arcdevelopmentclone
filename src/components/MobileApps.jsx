import React from "react";
import Lottie from "react-lottie";
import {Link} from "react-router-dom";
import {makeStyles,useTheme} from "@material-ui/core/styles";
import {Grid, Typography, useMediaQuery, Hidden, IconButton} from "@material-ui/core";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import access from "../assets/extendAccess.svg";
import engagement from "../assets/increaseEngagement.svg";
import integrationAnimation from "../animations/integrationAnimation/data";
import swiss from "../assets/swissKnife.svg";
import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles(theme=>({
    heading:{
        maxWidth:"40em",
    },
    arrowContainer:{
        marginTop:"0.5em"
    },
    rowContainer:{
        padding:"0 5em 0 5em",
        [theme.breakpoints.down("sm")]:{
            padding: "0 1.5em 0 1.5em",
        }
    },

}));

export default function MobileApps(props){
    const theme = useTheme();
    const classes = useStyles();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: integrationAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return(
        <Grid container direction={"column"}>
            <Grid
                item
                container
                direction="row"
                justify={matchesMD ? "center" : undefined}
                className={classes.rowContainer}
                style={{ marginTop: matchesXS ? "1em" : "2em" }}
            >
                <Hidden mdDown>
                    <Grid
                        item
                        className={classes.arrowContainer}
                        style={{ marginRight: "1em", marginLeft: "-3.5em" }}
                    >
                        <IconButton
                            style={{ backgroundColor: "transparent" }}
                            component={Link}
                            to="/customsoftware"
                            onClick={() => props.setSelectedIndex(1)}
                        >
                            <img src={backArrow} alt="Back to Services Page" />
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography
                            style={{
                                lineHeight: matchesXS ? 1.1 : null,
                                marginBottom: matchesXS ? "0.5em" : null
                            }}
                            align={matchesMD ? "center" : undefined}
                            variant="h1"
                        >
                            IOS/Android App Development
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            align={matchesMD ? "center" : undefined}
                            variant="body1"
                            paragraph
                        >
                            Mobile apps allow you to take your tools on the go.
                        </Typography>
                        <Typography
                            align={matchesMD ? "center" : undefined}
                            variant="body1"
                            paragraph
                        >
                            Whether you want an app for your customers, employees, or
                            yourself, we can build cross-platform native solutions for any
                            part of your business process. This opens you up to a whole new
                            world of possibilities by taking advantage of phone features like
                            the camera, GPS, push notifications, and more.
                        </Typography>
                        <Typography
                            align={matchesMD ? "center" : undefined}
                            variant="body1"
                            paragraph
                        >
                            Convenience. Connection.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton
                            style={{ backgroundColor: "transparent" }}
                            component={Link}
                            to="/websites"
                            onClick={() => props.setSelectedIndex(3)}
                        >
                            <img
                                src={forwardArrow}
                                alt="Forward to iOS/Android App Development Page"
                            />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
            <Grid
                item
                container
                direction={matchesSM ? "column" : "row"}
                style={{ marginTop: "15em", marginBottom: "15em" }}
                className={classes.rowContainer}
            >

                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography
                            align={matchesSM ? "center" : undefined}
                            variant="h4"
                            gutterBottom
                        >
                            Integration
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            align={matchesSM ? "center" : undefined}
                            variant="body1"
                            paragraph
                        >
                            Our technology enables an innate interconnection between web and
                            mobile applications, putting everything you need right in one
                            convenient place.
                        </Typography>
                        <Typography
                            align={matchesSM ? "center" : undefined}
                            variant="body1"
                            paragraph
                        >
                            This allows you to extend your reach, reinvent interactions, and
                            develop a stronger relationship with your users than ever before.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item md>

                    <Lottie options={defaultOptions} isStopped={true} style={{ maxWidth: "20em" }}/>
                </Grid>

                <Grid item container alignItems={"center"} direction="column" md>
                    <Grid item>
                        <Typography
                            align={matchesSM ? "center" : undefined}
                            variant="h4"
                            gutterBottom
                        >
                            Simultaneous Platform Support
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            align={matchesSM ? "center" : "right"}
                            variant="body1"
                            paragraph
                        >
                            Our cutting-edge development process allows us to create apps for
                            iPhone, Android, and tablets — all at the same time.
                        </Typography>
                        <Typography
                            align={matchesSM ? "center" : "right"}
                            variant="body1"
                            paragraph
                        >
                            This significantly reduces costs and creates a more unified brand
                            experience across all devices.
                        </Typography>

                    </Grid>
                </Grid>

            </Grid>
            <Grid item container className={classes.rowContainer}>


                <Grid item container alignItems={"center"} direction={"column"} md>
                    <Grid item>
                        <Typography variant={"h4"}>
                            Extend Functionality
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={swiss} alt={"Swiss army knife"}/>
                    </Grid>
                </Grid>

                <Grid item container alignItems={"center"} direction={"column"} md
                style={{marginTop: matchesMD ? "10em": 0, marginBottom:matchesMD ? "10em":0}}>
                    <Grid item>
                        <Typography variant={"h4"}>
                            Extend Access
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={access} alt={"Extend Access"} style={{width: matchesXS ? "20em":"28em"}}/>
                    </Grid>
                </Grid>

                <Grid item container alignItems={"center"} direction={"column"} md>
                    <Grid item>
                        <Typography variant={"h4"}>
                            Increase Engagement
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={engagement} alt={"increase engagement"}/>
                    </Grid>
                </Grid>



            </Grid>
            <Grid item>
                <CallToAction setValue={props.setValue}/>
            </Grid>
        </Grid>
    )
}