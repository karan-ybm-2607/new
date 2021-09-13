import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import Image from 'next/image';
import React, { useState } from 'react';
import AddEmployeeForm from '../Components/Body/Employee/Add Employee Module/Form/AddEmployeeForm';
import Overview from '../Components/Body/Overview/Overview';
import ProfileSection from '../Components/Header/ProfileSection';
import Sidebar_Layout from '../Components/Sidebar/Sidebar_Layout';
import YBM_LOGO from '../public/Images/YBM-Logo.svg';
import styles from './MainContainer.module.css';
import { THEME_CONFIG, THEME_COLOR } from '../lib/config'
import OrganizationDetails from '../Components/Body/Profile Setup/Organization/Organization Details/OrganizationDetails';
import OrganizationProfile from '../Components/Body/Profile Setup/Organization/OrganizationProfile';
import Allemployees from '../Components/Body/Employee/View Employees/AllEmployees';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: THEME_COLOR.Theme_white
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
        '& .MuiIconButton-label': {
            color: THEME_COLOR.Theme_black
        }
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: THEME_COLOR.Theme_secondary,
        color: THEME_COLOR.Theme_white
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: THEME_COLOR.Theme_secondary,
        color: THEME_COLOR.Theme_white,
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        width: "100%",
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        '& .MuiIconButton-label': {
            color: THEME_COLOR.Theme_white
        }
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        overflowY: 'scroll',
        '&#ModuleContainer': {
            '&::-webkit-scrollbar': {
                width: 12,
                backgroundColor: '#e6e6e6'
            },
            '&::-webkit-scrollbar-track': {
                boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                borderRadius: 10,
                webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: THEME_COLOR.Theme_Primary,
                borderRadius: 10,
                WebkitBoxShadow: 'inset 0 0 6px rgb(0 0 0 / 30%)'
            }
        }
    },

    sidebar: {
        width: "20%",
        backgroundColor: THEME_COLOR.Theme_secondary,
        padding: 10
    },
    DrawerLogo: {
        width: "inherit",
        display: "inline-flex",
        justifyContent: "center",
        height: 100,
        padding: 10
    },

}));``

export default function VerticalTabs(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [SelectedTab, setSelectedTab] = useState('')
    const [SubMenuOpen, setSubMenuOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const SubMunuHandeler = (event, index) => {
        setSubMenuOpen(!SubMenuOpen)
        
    }
    // SIDEBAR FUNCTIONS
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        index == 1 ? setSubMenuOpen(true) : setSubMenuOpen(false)
        console.log('se', event?.target?.innerText)
        setSelectedTab(event?.target?.innerText)
        console.log(index)
    };


    let pageContent = ('')
    switch (SelectedTab) {

        case 'Overview':
            pageContent = (
                <div className="col-10 text-center">
                    <Overview Title="Overview" />
                </div>)
            break;
        case 'Add Employee':
            pageContent = (

                <AddEmployeeForm />
            )
            break;
        case 'Salary Tamplete':
            pageContent = (
                
                <SalaryStructure />
               
            )
            break;
        case 'Employee':
            pageContent = (
                <div className="col-10 text-center">
                    <Allemployees />
                </div>
            )
            break;
        default:
            pageContent = (
                <div className="col-10 text-center">

                    <OrganizationProfile />
                </div>)
    }


    return (

        <div className={`${classes.root} ${styles.rootContainer}`}>

            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <div className={clsx(classes.menuButton, {
                        [classes.hide]: open,
                    })} >
                        <Image src={YBM_LOGO} width={60} height={50} objectFit="contain"
                        />
                    </div>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon fill={THEME_COLOR.Theme_black} />
                    </IconButton>
                    <ProfileSection />
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,

                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <div className={classes.DrawerLogo}>
                        <Image src={YBM_LOGO} width={100} height={50} objectFit="contain" />
                    </div>
                    <IconButton onClick={handleDrawerClose}>

                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Sidebar_Layout SubMunuHandeler={SubMunuHandeler} handleListItemClick={handleListItemClick} SubMenuOpen={SubMenuOpen} selectedIndex={selectedIndex} />
            </Drawer>
            <main className={classes.content} id="ModuleContainer">
                <div className={classes.toolbar} />
                {pageContent}
            </main>

        </div >
    );
}