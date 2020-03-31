import React,{useState,useEffect} from "react";
import { AppBar,Toolbar, makeStyles,Tabs,Tab,Button,
    Menu,MenuItem ,useMediaQuery,useTheme,
    SwipeableDrawer,IconButton,List,ListItem,ListItemText
} from '@material-ui/core/';
import MenuIcon from "@material-ui/icons/Menu";


import logo from "../../assets/logo.svg";
import {Link} from "react-router-dom";


const useStyles = makeStyles(theme=>({
    toolbarMagin:{
        ...theme.mixins.toolbar,
        marginBottom:"3em",
        [theme.breakpoints.down("md")]:{
          marginBottom:"2em"
        },
       [theme.breakpoints.down("xs")]:{
          marginBottom:"1.25em"
       }
    },
    logo:{
        height:"8em",
        [theme.breakpoints.down("md")]:{
            height:"7em"
        },
        [theme.breakpoints.down("xs")]:{
            height:"5.5em"
        }
    },
    tabContainer:{
        marginLeft:"auto"
    },
    tab:{
        ...theme.typography.tab,
        marginLeft:"25px",
        minWidth:10,

    },
    logoContainer:{
      padding:0,
      "&:hover":{
          backgroundColor:"transparent"
      }
    },
    button:{
        ...theme.typography.estimate,
        marginLeft:"50px",
        marginRight:"25px",
        borderRadius:"50px",
        height:"45px",
        "&:hover":{
            backgroundColor:theme.palette.secondary.light
        }
    },
    menu:{
        backgroundColor:theme.palette.common.blue,
        color:"white",
    },
    menuItem:{
        ...theme.typography.tab,
        opacity:0.7,
        "&:hover":{
            opacity:1,

        }
    },
    drawerIcon:{
        height:"50px",
        width:"50px"
    },
    drawerIconContainer:{
        marginLeft:"auto",
        "&:hover":{
            backgroundColor:"transparent"
        }
    },
    drawer:{
        backgroundColor:theme.palette.common.blue
    },
    drawerItem:{
        ...theme.typography.tab,
        color:"white",
        opacity:0.7
    },
    drawerItemEstimate:{
        backgroundColor:theme.palette.common.orange
    },
    drawerItemSelected:{
        opacity:1
    }

})
)



export default (props)=>{ //header function
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const {value,setValue,selectedIndex,setSelectedIndex} = props;

    const [openDrawer,setOpenDrawer] = useState(false);

    const [anchorEl,setAnchorEl] = useState(null);
    const [openMenu,setOpenMenu] = useState(false);


    const menuOptions = [
        {id:1,name:"Services",link:"/services",activeIndex:1,selectedIndex:0}
        ,{id:2,name:"Custom software development",link:"/customsoftware",activeIndex:1,selectedIndex:1}
        ,{id:3,name:"IOS/Android app development",link:"/mobileapps",activeIndex:1,selectedIndex:2}
        ,{id:4,name:"Website development",link:"/websites",activeIndex:1,selectedIndex:3}
    ];
    const routes = [
        {id:5,name:"Home",link:"/",activeIndex:0},
        {id:6,name:"Services",link:"/services",activeIndex:1,
            ariaOwns:anchorEl ? "simple-menu":undefined,ariaPopup:anchorEl ? "true":undefined,mouseOver:event=>handleClick(event)},
        {id:7,name:"The Revolution",link:"/revolution",activeIndex:2},
        {id:8,name:"About us",link:"/about",activeIndex:3},
        {id:9,name:"Contact Us",link:"/contact",activeIndex:4},
    ]




    const handleChange = (e,value)=>{
        setValue(value);
    }

    const handleClick =  (e)=>{
        setOpenMenu(true);
        setAnchorEl(e.currentTarget);
    }
    const handleClose = (e)=>{
        setAnchorEl(null);
        setOpenMenu(false);
    }

    useEffect(()=>{
        [...menuOptions,...routes].map(route=>{
            switch(window.location.pathname){
                case `${route.link}`:
                     if(value !== route.activeIndex){
                         setValue(route.activeIndex);
                         if(route.selectedIndex && route.selectedIndex !== selectedIndex){
                             setSelectedIndex(route.selectedIndex);
                         }
                     }
                     break;
                case "/estimate":
                     setValue(5);
                default:
                    break;
            }
        })


    },[value,menuOptions,selectedIndex,routes]);

    const handleChane = (e,value)=>{
        setValue(value);
    }


    const handleMenuItemClick = (e,i)=>{
        handleClose(e);
        setSelectedIndex(i);

    }

    const tabs = (
        <React.Fragment>
            <Tabs
                indicatorColor={"primary"}
                value={value}
                onChange={handleChane}
                className={classes.tabContainer}
            >
                {routes.map((route,index)=>(
                    <Tab key={route.id} className={classes.tab} component={Link} to={route.link}
                    label={route.name} aria-owns={route.ariaOwns} aria-haspopup={route.ariaPopup}
                    onMouseOver={route.mouseOver}/>
                ))}



                <Button variant="contained" component={Link} to={"/estimate"} onClick={()=>setValue(5)}
                        color="secondary" className={classes.button}>Free Estimate</Button>

                <Menu
                    id={"simple-menu"}
                    anchorEl={anchorEl}
                    open={openMenu}
                    onClose={handleClose}
                    MenuListProps={{onMouseLeave:handleClose}}
                    elevation={0}
                    classes={{paper:classes.menu}}
                >
                    {
                        menuOptions.map((options,i)=>(
                            <MenuItem
                                key={options.id}
                                classes={{root:classes.menuItem}}
                                onClick={(e)=>{handleMenuItemClick(e,i);setValue(1)}}
                                component={Link}
                                to={options.link}
                                selected={i===selectedIndex && value === 1}
                            >
                                {options.name}
                            </MenuItem>

                        ))
                    }

                </Menu>
            </Tabs>

        </React.Fragment>
    );

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                onOpen={()=>setOpenDrawer(true)}
                open={openDrawer}
                classes={{paper:classes.drawer}}
                onClose={()=>setOpenDrawer(false)}>

                <List disablePadding>
                    {routes.map((route,index)=>(
                        <ListItem key={route.id} divider button component={Link} to={route.link} onClick={()=>{setOpenDrawer(false);setValue(route.activeIndex)}} selected={value === route.activeIndex}>
                            <ListItemText className={ value === route.activeIndex ?[classes.drawerItem,classes.drawerItemSelected]:classes.drawerItem} disableTypography>{route.name}</ListItemText>
                        </ListItem>
                    ))}




                    <ListItem divider button className={classes.drawerItemEstimate} component={Link} to={"/estimate"} onClick={()=>{setOpenDrawer(false);setValue(5)}} selected={value === 5}>
                        <ListItemText className={ value === 5 ?[classes.drawerItem,classes.drawerItemSelected]:classes.drawerItem} disableTypography>Free Estimate</ListItemText>
                    </ListItem>

                </List>


            </SwipeableDrawer>
            <IconButton onClick={()=>setOpenDrawer(!openDrawer)} className={classes.drawerIconContainer} disableRipple>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </React.Fragment>

    )

    return(
        <React.Fragment>
        <AppBar position="fixed">
           <Toolbar disableGutters>
               <Button disableRipple component={Link} to={"/"} className={classes.logoContainer}
                onClick={()=>setValue(0)}>
               <img alt="Company logo" src={logo} className={classes.logo}/>
               </Button>

               {
                   matches ? drawer : tabs
               }

                </Toolbar>
        </AppBar>
        <div className={classes.toolbarMagin}></div>
        </React.Fragment>
    );
}