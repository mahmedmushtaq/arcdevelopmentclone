import React from "react";
import {makeStyles,useTheme} from "@material-ui/core/styles";
import {Grid,Typography,useMediaQuery,Avatar} from "@material-ui/core";
import history from "../assets/history.svg";
import fonder from "../assets/founder.jpg"


const useStyles = makeStyles(theme=>({
    missionStatement:{
        fontStyle:"italic",
        fontWeight:300,
        fontSize:"1.5rem",
        maxWidth:"50em",
        lineHeight:1.4

    },
    rowContainer:{
        padding:"0 5em 0 5em",
        [theme.breakpoints.down("sm")]:{
            padding: "0 1.5em 0 1.5em",
        }
    },
    avatar:{
        height:"15em",
        width:"15em",
        marginBottom:"5em"

    }

}));

export default function About(){
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    return(
        <Grid container direction={"column"}>
            <Grid item
                  className={classes.rowContainer}
                  style={{ marginTop: matchesMD ? "1em" : "2em" }}
            >
                <Typography variant={"h1"} align={matchesMD ? "center" : undefined} >About Us</Typography>

            </Grid>
            <Grid item justify={"center"}   className={classes.rowContainer}
                  style={{ marginTop: "3em" }}>
                <Typography variant={"h4"} align={"center"} className={classes.missionStatement}>

                    Whether it be person to person, business to consumer, or an individual
                    to their interests, technology is meant to bring us closer to what we
                    care about in the best way possible. Arc Development will use that
                    principle to provide fast, modern, inexpensive, and aesthetic software
                    to the Midwest and beyond.
                </Typography>

            </Grid>

            <Grid
                item
                container
                className={classes.rowContainer}
                style={{ marginTop: "10em", marginBottom: "10em" }}
                direction={matchesMD ? "column" : "row"}
                alignItems={matchesMD ? "center" : undefined}
                justify="space-between"
            >

                <Grid item>
                    <Grid
                        item
                        container
                        direction="column"
                        lg
                        style={{ maxWidth: "35em" }}
                        >



                        <Grid item>
                            <Typography
                                align={matchesMD ? "center" : undefined}
                                variant="h4"
                                gutterBottom
                            >
                                History
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="body1"
                                align={matchesMD ? "center" : undefined}
                                paragraph
                                style={{ fontWeight: 700, fontStyle: "italic" }}
                            >
                                We're the new kid on the block
                            </Typography>
                            <Typography
                                variant="body1"
                                align={matchesMD ? "center" : undefined}
                                paragraph
                            >
                                Founded in 2019, we’re ready to get our hands on the world’s
                                business problems.
                            </Typography>
                            <Typography
                                variant="body1"
                                align={matchesMD ? "center" : undefined}
                                paragraph
                            >
                                It all started with one question: Why aren’t all businesses
                                using available technology? There are many different answers to
                                that question: economic barriers, social barriers, educational
                                barriers, and sometimes institutional barriers.
                            </Typography>
                            <Typography
                                variant="body1"
                                align={matchesMD ? "center" : undefined}
                                paragraph
                            >
                                We aim to be a powerful force in overcoming these obstacles.
                                Recent developments in software engineering and computing power,
                                compounded by the proliferation of smart phones, has opened up
                                infinite worlds of possibility. Things that have always been
                                done by hand can now be done digitally and automatically, and
                                completely new methods of interaction are created daily. Taking
                                full advantage of these advancements is the name of the game.
                            </Typography>
                            <Typography
                                variant="body1"
                                align={matchesMD ? "center" : undefined}
                                paragraph
                            >
                                All this change can be a lot to keep up with, and that’s where
                                we come in.
                            </Typography>
                        </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                <Grid item container justify={"center"} lg>
                    <img src={history} alt={"History"}
                         style={{ maxHeight: matchesMD ? 200 : "22em" }}
                    />
                </Grid>
                </Grid>


            </Grid>

            <Grid item container direction={"column"} alignItems={"center"} className={classes.rowContainer}>
                <Grid item>

                    <Typography align="center" variant="h4" gutterBottom>
                        Team
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" paragraph align="center">
                        M Ahmed Mushtaq, Founder
                    </Typography>
                    <Typography variant="body1" paragraph align="center">
                        I started coding when I was 15 years old.
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar
                        alt="founder"
                        src={fonder}
                        className={classes.avatar}
                    />
                </Grid>



            </Grid>




        </Grid>
    )
}