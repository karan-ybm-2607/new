import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import { MdExpandMore } from 'react-icons/md';
import { THEME_COLOR } from '../../../../../../lib/config';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import AddressInputForm from './AddressInputForm';

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

const Addresses = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState('panel1');

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
                    <Typography className={classes.heading}>Registered office</Typography>
                    <Typography className={classes.secondaryHeading}>
                        1 Address registered
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <AddressInputForm />
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<MdExpandMore />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography className={classes.heading}>CORPORATE OFFICE</Typography>
                    <Typography className={classes.secondaryHeading}>
                        1 Address registered
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <AddressInputForm />

                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<MdExpandMore />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography className={classes.heading}>Custom address</Typography>
                    <Typography className={classes.secondaryHeading}>
                        No Address registered
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <AddressInputForm />

                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Addresses
