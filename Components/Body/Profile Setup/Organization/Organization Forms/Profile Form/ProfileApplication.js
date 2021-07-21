import React from 'react'
import { makeStyles, TextField } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {

        '& .MuiFormLabel-root.Mui-focused': {
            color: 'rgba(0, 150, 198, 1)'
        }

    }

}))
const ProfileApplication = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <TextField id="outlined-basic" label="First Name" variant="outlined" className={classes.TextInput} />
            <TextField id="outlined-basic" label="First Name" variant="outlined" className={classes.TextInput} />
        </div>
    )
}

export default ProfileApplication
