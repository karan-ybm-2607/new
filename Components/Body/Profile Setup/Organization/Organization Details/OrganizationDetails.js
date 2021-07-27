import React, { useState } from 'react'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { THEME_COLOR } from '../../../../../lib/config';
import Overview from '../Organization Forms/Profile Form/Overview';
import Addresses from '../Organization Forms/Address Form/Addresses';
import Administrator from '../Organization Forms/Admin/Administrator';
import Statutory from '../Organization Forms/Statutory/Statutory';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
        "& .MuiAppBar-colorDefault": {
            boxShadow: 'none',
            backgroundColor: THEME_COLOR.Theme_Primary,
            color: THEME_COLOR.Theme_light,
            paddingLeft: 1,
            paddingRight: 1,
            paddingBottom: 1,
        },
        "& Mui-selected": {
            color: THEME_COLOR.Theme_white
        },
        "& .PrivateTabIndicator-colorPrimary-11": {
            backgroundColor: THEME_COLOR.Theme_white
        }
    },
}));

const OrganizationDetails = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor={THEME_COLOR.Theme_Primary}
                    variant="fullWidth"
                    scrollButtons="auto"

                >
                    <Tab label="Overview" {...a11yProps(0)} />
                    <Tab label="Address" {...a11yProps(1)} />
                    <Tab label="Admin" {...a11yProps(2)} />
                    <Tab label="Statutory" {...a11yProps(3)} />

                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Overview />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Addresses />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <Administrator />
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <Statutory />
                </TabPanel>
            </SwipeableViews>
        </div>
    );

}

export default OrganizationDetails
