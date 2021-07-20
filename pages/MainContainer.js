import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Container, Tab, Typography, Box } from '@material-ui/core';
import styles from './MainContainer.module.css'
import { FaChartPie, FaUserTie } from 'react-icons/fa'
import { IoMdCash, IoIosPeople } from 'react-icons/io'
import { AiFillSetting } from 'react-icons/ai'
import { RiArticleFill } from 'react-icons/ri'
import YBMLogo from '../public/Images/YBM-Logo.svg'
import Image from 'next/image'
import Header from '../Components/Header/Header';
import AddEmployee from '../Components/Body/Employee/Add Employee Module/AddEmployee';
import Allemployees from '../Components/Body/Employee/View Employees/AllEmployees';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
    },
    tabs: {
        backgroundColor: "rgba(54, 55, 64, 1)",
        color: "rgba(164, 166, 179, 1)",
        width: '20%'
    },
    tabPanelStyle: {
        overflowY: 'scroll',
        height: 'calc(100% - 70px)'
    }
}));

export default function VerticalTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <div className={`${classes.root} ${styles.rootContainer}`}>
            <Container className={styles.containerPadding} maxWidth="xl">
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs"
                    className={classes.tabs}
                >
                    <div className={styles.softLogo}>
                        <Image src={YBMLogo}></Image>
                    </div>
                    <Tab label="Overview" icon={<FaChartPie />} {...a11yProps(0)} className={styles.tabOption} />
                    <Tab label="Salary" icon={<IoMdCash />} {...a11yProps(1)} className={styles.tabOption} />
                    <Tab label="Employee" icon={<IoIosPeople />} {...a11yProps(2)} className={styles.tabOption} />
                    <Tab label="Agents" icon={<FaUserTie />} {...a11yProps(3)} className={styles.tabOption} />
                    <Tab label="Articles" icon={<RiArticleFill />} {...a11yProps(4)} className={styles.tabOption} />
                    <Tab label="Settings" icon={<AiFillSetting />} {...a11yProps(5)} className={styles.tabOption} />
                </Tabs>
                <div className={styles.viewContainer}>
                    <div><Header /></div>
                    <TabPanel value={value} index={0}>
                        Item One 1
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2} id={styles.tabPanel} className={classes.tabPanelStyle}>
                        {/* <AddEmployee /> */}
                        <Allemployees />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        Item Four
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        Item Five
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        Item Six
                    </TabPanel>
                </div>
            </Container>
            <style jsx>
                {`
               .MuiTab-textColorInherit.Mui-selected {
                    color: rgba(221, 226, 255, 1);
                    background-color: rgba(159, 162, 180, 1);
                    opacity: 0.08;
                }
                `}
            </style>
        </div >
    );
}