import React,{useState,useEffect} from "react";
import { AppBar,Toolbar, makeStyles,Tabs,Tab,Button,Menu,MenuItem } from '@material-ui/core/';
import logo from "../../assets/logo.svg";
import {Link} from "react-router-dom";


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


        height:"45px"
    },
    menu:{
        backgroundColor:theme.palette.common.blue,
        color:"white"
    },
    menuItem:{
        ...theme.typography.tab,
        opacity:0.7,
        "&:hover":{
            opacity:1,

        }
    }

})
)

const menuOptions = [{name:"Services",link:"/services"},{name:"Custom software development",link:"/customsoftware"}
,{name:"Mobile app development",link:"/mobileapps"}
,{name:"Website development",link:"/websites"}
];

export default (props)=>{ //header function
    const classes = useStyles();
    const [value,setValue] = useState(0);
    const [anchorEl,setAnchorEl] = useState(null);
    const [open,setOpen] = useState(false);
    const [selectedIndex,setSelectedIndex] = useState(0);

    const handleChange = (e,value)=>{
        setValue(value);
    }

    const handleClick =  (e)=>{
        setOpen(true);
        setAnchorEl(e.currentTarget);
    }
    const handleClose = (e)=>{
        setAnchorEl(null);
        setOpen(false);
    }

    useEffect(()=>{
        switch(window.location.pathname){
            case "/":
                if(value !== 0){
                    setValue(0);

                }
                break;
            case "/services":
                if(value !== 1){
                    setValue(1);
                    setSelectedIndex(0);
                }
                break;
            case "/customsoftware":
                if(value !== 1){
                    setValue(1);
                    setSelectedIndex(1);
                }
                break;
            case "/mobileapps":
                if(value !== 1){
                    setValue(1);
                    setSelectedIndex(2);
                }
                break;
            case "/websites":
                if(value !== 1){
                    setValue(1);
                    setSelectedIndex(3);
                }
                break;
            case "/revolution":
                if(value !== 2){
                    setValue(2);

                }
                break;
            case "/about":
                if(value !== 3){
                    setValue(3);
                    setSelectedIndex(3);
                }
                break;
            case "/contact":
                if(value !== 4){
                    setValue(4);
                    setSelectedIndex(4);
                }
                break;
            case "/estimate":
                if(value !== 5){
                    setValue(5);
                    setSelectedIndex(5);
                }
                break;
            default:break;
        }

    },[value]);

    const handleChane = (e,value)=>{
        setValue(value);
    }

    const handleMenuItemClick = (e,i)=>{
        handleClose(e);
        setSelectedIndex(i);

    }
    return(
        <React.Fragment>
        <AppBar position="fixed">
           <Toolbar disableGutters>
               <Button disableRipple component={Link} to={"/"} className={classes.logoContainer}
                onClick={()=>setValue(0)}>
               <img alt="Company logo" src={logo} className={classes.logo}/>
               </Button>

               <Tabs
                   indicatorColor={"primary"}
                   value={value}
                   onChange={handleChane}
                   className={classes.tabContainer}
               >
                   <Tab
                       className={classes.tab}
                       component={Link}
                       to={"/"}
                       label="Home"
                   />
                   <Tab
                       aria-owns={anchorEl ? "simple-menu":undefined}
                       aria-haspopup={anchorEl ? "true":undefined}
                       className={classes.tab}
                       onMouseOver={handleClick}
                       component={Link} to={"/services"}
                       label="Services"
                   />
                   <Tab
                       className={classes.tab}
                        component={Link} to={"/revolution"}
                       label="The Revolution"
                   />
                   <Tab
                       className={classes.tab}
                       component={Link}
                       to={"/contact"}
                       label="Contact Us"
                   />
                   <Tab
                       className={classes.tab}
                       component={Link}
                       to={"/about"}
                       label="About Us"
                   />

                   <Button variant="contained" component={Link} to={"/estimate"}
                           color="secondary" className={classes.button}>Free Estimate</Button>

                   <Menu
                       id={"simple-menu"}
                       anchorEl={anchorEl}
                       open={open}
                       onClose={handleClose}
                       MenuListProps={{onMouseLeave:handleClose}}
                       elevation={0}
                       classes={{paper:classes.menu}}
                   >
                       {
                           menuOptions.map((options,i)=>(
                               <MenuItem
                                   key={options}
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
                </Toolbar>
        </AppBar>
        <div className={classes.toolbarMagin}></div>
        </React.Fragment>
    );
}