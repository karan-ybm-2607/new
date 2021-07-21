import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Typography, Button, Grid } from '@material-ui/core';
import { deepOrange, green } from '@material-ui/core/colors';
import { IoCamera } from 'react-icons/io5'
import ProfileApplication from './Organization Forms/Profile Form/ProfileApplication';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderRadius: "24px",
                borderColor: "#0096C6",
                borderWidth: "2px"
            }, "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#0096c6",
                borderWidth: "2px"
            },
            "&.Mui-focused fieldset": {
                borderColor: "#0096c6",
                borderWidth: "2px"
            }
        }

    },
    input: {
        display: 'none',
    },
    square: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
        width: 100,
        height: 100
    },
    rounded: {
        color: '#fff',
        backgroundColor: green[500],
    },
    moduleTitle: {
        fontStyle: 'normal',
        fontSize: 24,
        fontWeight: 600,
        lineHeight: '30px',
        letterSpacing: 0.3,
        color: '#000',
        textTransform: 'capitalize'
    },
    ProfileImage: {
        borderRight: '1px solid rgba(54, 55, 64, 0.23);'
    },
    uploadProfile: {
        '& svg': {
            marginRight: 15,
        },
        '& .MuiButton-outlined': {
            backgroundColor: 'rgba(54, 55, 64, 0.23)',
            color: '#252525'
        },
        '& .MuiButton-label': {
            fontSize: 12,
        },
        display: 'flex',
        justifyContent: 'center',
        marginTop: 15
    }
}));

const OrganizationProfile = () => {
    const classes = useStyles();

    return (
        <div>
            <Typography className={classes.moduleTitle} variant="h3" gutterBottom>
                Profile
            </Typography>
            <div className={classes.root}>
                <Grid container spacing={3} direction="row" justifyContent="flex-start" alignItems="stretch">
                    <Grid item xs={3} className={classes.ProfileImage} justifyContent="center">
                        <Avatar variant="square" className={classes.square} style={{ margin: 'auto' }}>
                            Y B M
                        </Avatar>
                        <div className={classes.uploadProfile}>
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="outlined" component="span">
                                    <IoCamera fontSize={18} /> Upload
                                </Button>
                            </label>
                        </div>
                    </Grid>
                    <Grid item xs={9}>
                        <ProfileApplication />
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}

export default OrganizationProfile
