import React from 'react'
import { IconButton, makeStyles, TextField, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // border: '1px solid rgba(0, 0, 0, .125)', 
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
            // width: 'calc(50% - 16px)',
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
    addressContainer: {
        width: '100%',
        '& .MuiFormControl-root': {
            width: 'inherit'
        }
    }
}))
const AddressInputForm = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.addressContainer}>
                <TextField id="outlined-basic" label="Address line 1" variant="outlined" className={classes.TextInput} />
            </div>
            <div className={classes.addressContainer}>
                <TextField id="outlined-basic" label="Address line 2" variant="outlined" className={classes.TextInput} />
            </div>
            <TextField id="outlined-basic" label="City" variant="outlined" className={classes.TextInput} />
            <TextField id="outlined-basic" label="State" variant="outlined" className={classes.TextInput} />
            <TextField id="outlined-basic" label="Country" variant="outlined" className={classes.TextInput} />
            <TextField id="outlined-basic" label="Zip code" variant="outlined" className={classes.TextInput} />
        </div>
    )
}

export default AddressInputForm
