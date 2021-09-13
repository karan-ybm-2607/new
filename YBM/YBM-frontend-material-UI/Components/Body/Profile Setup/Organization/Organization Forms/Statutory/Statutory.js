import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { MdExpandMore } from 'react-icons/md';
import { Styles, THEME_COLOR, THEME_CONFIG } from '../../../../../../lib/config';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import CompanyId from './CompanyId';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        textTransform: 'uppercase',
        color: THEME_COLOR.Theme_secondary,
        fontWeight: '600'
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    searchContainer: {
        width: '100%'
    },
    employeeSearch: {
        '& .MuiInputBase-input': {
            width: 'inherit',
            padding: '18.5px 14px',
            borderWidth: THEME_CONFIG.Theme_border_width,
            borderStyle: 'solid',
            borderColor: THEME_COLOR.Theme_Primary,
            borderRadius: THEME_CONFIG.Theme_border_radius
        },
        width: 'inherit'
    },
    chipContainer: {
        '& > div': {
            marginBottom: 10
        },
        width: '100%'
    }
}));
const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const Statutory = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(0);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<MdExpandMore />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>Company ID</Typography>
                    <Typography className={classes.secondaryHeading}>
                        1 Person added
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CompanyId />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<MdExpandMore />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography className={classes.heading}>Bank Accounts</Typography>
                    <Typography className={classes.secondaryHeading}>
                        1 person added
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    2
                </AccordionDetails>
            </Accordion>

        </div>
    )
}

export default Statutory
