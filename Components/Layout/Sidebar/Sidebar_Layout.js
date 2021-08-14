import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import React, { useState } from 'react';
import { FaChartPie, FaUserTie } from 'react-icons/fa';
import { IoMdCash } from 'react-icons/io';
import { RiArticleLine } from 'react-icons/ri';
import { TiGroup } from 'react-icons/ti';
import { THEME_COLOR } from '../../../lib/config';
import AddEmployeeModule from '../../../pages/Employee/AddEmployeeModule';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiListItemText-root': {
            color: THEME_COLOR.Theme_light_dark
        },

        width: '100%',
        maxWidth: 360,
        backgroundColor: THEME_COLOR.Theme_secondary,
    },
    navItems: {
        '&.Mui-selected .MuiListItemText-root': {
            color: THEME_COLOR.Theme_light

        },
        '&.Mui-selected .MuiListItemIcon-root svg': {
            fill: THEME_COLOR.Theme_light
        }
    },
    nested: {
        paddingLeft: theme.spacing(4),
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

}));
const Sidebar_Layout = (props) => {
    const classes = useStyles();
    const { SubMenuOpen, hanndleListClick, handleListItemClick, selectedIndex } = props;

    return (

        <div className={classes.root}>

            <List component="nav" aria-label="main mailbox folders">
                <ListItem
                    button
                    selected={selectedIndex === 0}
                    onClick={(event) => hanndleListClick(event, 0)}
                    className={classes.navItems}
                >
                    <ListItemIcon>
                        <FaChartPie fontSize={22} fill={THEME_COLOR.Theme_light_dark} />
                    </ListItemIcon>
                    <ListItemText primary="Overview" />
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                    className={classes.navItems}
                >
                    <ListItemIcon>
                        <IoMdCash fontSize={22} fill={THEME_COLOR.Theme_light_dark} />
                    </ListItemIcon>
                    <ListItemText primary="Salary" />
                    {SubMenuOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={SubMenuOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding >
                        <ListItem button className={`${classes.nested} ${classes.navItems}`} selected={selectedIndex === 1}
                        >
                            <ListItemIcon>
                                <StarBorder fill={THEME_COLOR.Theme_light_dark} />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem
                    button
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                    className={classes.navItems}
                >



                    <ListItemIcon>
                        <TiGroup fontSize={22} fill={THEME_COLOR.Theme_light_dark} />
                    </ListItemIcon>
                    <ListItemText primary="Employee" />
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                    className={classes.navItems}
                >
                    <ListItemIcon>
                        <FaUserTie fontSize={22} fill={THEME_COLOR.Theme_light_dark} />
                    </ListItemIcon>
                    <ListItemText primary="Agent" />
                </ListItem>
                <ListItem
                    button
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}
                    className={classes.navItems}
                >
                    <ListItemIcon>
                        <RiArticleLine fontSize={22} fill={THEME_COLOR.Theme_light_dark} />
                    </ListItemIcon>
                    <ListItemText primary="Article" />
                </ListItem>
            </List>


        </div>

    )
}

export default Sidebar_Layout
