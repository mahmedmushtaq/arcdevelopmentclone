import React from "react";
import { AppBar,Toolbar, makeStyles,Tabs,Tab } from '@material-ui/core/';
import logo from "../../assets/logo.svg";


const useStyles = makeStyles(theme=>({
    toolbarMagin:{
        ...theme.mixins.toolbar,
        marginBottom:"3em"
    },
    logo:{
        height:"7em",
    },
    tabContainer:{
        marginLeft:"auto"
    },
    tab:{
        ...theme.typography.tab,
        marginLeft:"25px",
        minWidth:10,

    }
})
)

export default (props)=>{ //header function
    const classes = useStyles();
    return(
        <React.Fragment>
        <AppBar position="fixed">
           <Toolbar disableGutters>
               <img alt="Company logo" src={logo} className={classes.logo}/>
               <Tabs className={classes.tabContainer}>
                   <Tab className={classes.tab} label="Home"/>
                   <Tab className={classes.tab}  label="Services"/>
                   <Tab className={classes.tab} label="The Resolution"/>
                   <Tab className={classes.tab} label="Contact Us"/>
                   <Tab className={classes.tab} label="About Us"/>

               </Tabs>
                </Toolbar>
        </AppBar>
        <div className={classes.toolbarMagin}></div>
        </React.Fragment>
    );
}