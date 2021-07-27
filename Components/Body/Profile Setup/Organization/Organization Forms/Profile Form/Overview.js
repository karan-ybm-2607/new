import React from 'react'
import { IconButton, makeStyles, TextField, Typography } from '@material-ui/core'
import { MdModeEdit } from 'react-icons/md'
const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiFormLabel-root": {
            textTransform: 'capitalize',
            color: '#000',
            backgroundColor: '#fff'
        },
        '& > *': {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            // marginTop: theme.spacing(4),
            marginBottom: theme.spacing(1),
            width: 'calc(50% - 16px)',
            marginTop: 20
        },
        '& .MuiFormLabel-root.Mui-focused': {
            color: 'rgba(0, 150, 198, 1)'
        }

    },
    editDetails: {
        display: 'none'
    },
    TitleHeader: {
        '&:hover svg': {
            display: 'block',
        },
        width: '100%',
        paddingRight: 8,
        paddingLeft: 8,
        margin: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 45
    },
    title: {
        color: 'rgba(37, 39, 51, 1)',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 14,
        display: 'inline-block',
    },
}))
const Overview = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.TitleHeader}>
                <Typography className={classes.title}>Overview</Typography>
                <IconButton><MdModeEdit className={classes.editDetails} fontSize={18} /></IconButton>
            </div>
            <TextField id="outlined-basic" label="Organization Name" variant="outlined" className={classes.TextInput} />
            <TextField id="outlined-basic" label="Company Name" variant="outlined" className={classes.TextInput} />
            <TextField id="outlined-basic" label="Website" variant="outlined" className={classes.TextInput} />
            <TextField id="outlined-basic" label="Domain" variant="outlined" className={classes.TextInput} />

        </div>
    )
}

export default Overview
