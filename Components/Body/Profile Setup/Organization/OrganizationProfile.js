import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Typography, Button, Grid } from '@material-ui/core';
import { deepOrange, green } from '@material-ui/core/colors';
import { IoCamera } from 'react-icons/io5'
import OrganizationDetails from './Organization Details/OrganizationDetails';
import { Styles, THEME_COLOR, THEME_CONFIG } from '../../../../lib/config';
import { FaLinkedinIn } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'
import { FiInstagram } from 'react-icons/fi'
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderRadius: THEME_CONFIG.Theme_border_radius,
                borderColor: THEME_COLOR.Theme_Primary,
                borderWidth: THEME_CONFIG.Theme_border_width
            }, "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: THEME_COLOR.Theme_Primary,
                borderWidth: THEME_CONFIG.Theme_border_width
            },
            "&.Mui-focused fieldset": {
                borderColor: THEME_COLOR.Theme_Primary,
                borderWidth: THEME_CONFIG.Theme_border_width,
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
        textTransform: 'capitalize',
        marginBottom: 25
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
    },
    SocialShare: {
        textAlign: 'center'
    },
    socialContainer: {
        marginTop: 40,
        marginBottom: 40
    },
    socialIconContainer: {
        backgroundColor: THEME_COLOR.Theme_secondary,
        borderRadius: '50%',
        padding: 8,
        width: 40,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)'
    },
    socialIcon: {
        color: THEME_COLOR.Theme_white,

    }
}));

const OrganizationProfile = () => {
    const classes = useStyles();

    return (
        <div>

            <div className={classes.root}>
                <Grid container spacing={1} direction="row" justifyContent="flex-start" alignItems="stretch">
                    <Grid item xs={2} className={classes.ProfileImage} justifyContent="center">
                        <Typography className={classes.moduleTitle} variant="h3" gutterBottom>
                            Profile
                        </Typography>
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
                        <div className={classes.socialContainer}>
                            <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
                                <Grid item xs={4} className={classes.SocialShare}>
                                    <div className={classes.socialIconContainer}>
                                        <FaLinkedinIn fontSize={20} className={classes.socialIcon} />
                                    </div>
                                </Grid>
                                <Grid item xs={4} className={classes.SocialShare}>
                                    <div className={classes.socialIconContainer}>
                                        <ImFacebook fontSize={20} className={classes.socialIcon} />
                                    </div>
                                </Grid>
                                <Grid item xs={4} className={classes.SocialShare}>
                                    <div className={classes.socialIconContainer}>
                                        <FiInstagram fontSize={20} className={classes.socialIcon} />
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={10}>
                        <OrganizationDetails />
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}

export default OrganizationProfile
