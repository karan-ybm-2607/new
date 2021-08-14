import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles, TextField } from '@material-ui/core'
import { BiCheck } from 'react-icons/bi'
import { THEME_COLOR, THEME_CONFIG } from '../../../../../../lib/config'

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
            marginTop: 20,
            width: '100%'
        },
        '& .MuiFormLabel-root.Mui-focused': {
            color: THEME_COLOR.Theme_Primary
        }

    },
    ActivationStatus: {
        display: 'flex',
        alignItems: 'center'
    },
    icon: {
        display: 'inline-flex',
        marginRight: 15,
        '& svg': {
            backgroundColor: '#00cc99',
            borderRadius: '50%',
            width: 30,
            height: 30,
            padding: 2
        }
    },
    status: {
        fontWeight: 600,
        fontSize: 18,
    },
    changeActivation: {
        cursor: 'pointer',
        color: THEME_COLOR.Theme_Primary,
        fontWeight: 500,
        textDecoration: 'underline'
    },
    TextInput: {
        '& .MuiFormLabel-root.Mui-focused': {
            color: THEME_COLOR.Theme_Primary
        }, "& .MuiOutlinedInput-root": {
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
                borderWidth: THEME_CONFIG.Theme_border_width
            }
        }

    },
    actDialoge: {
        '& .MuiButton-textPrimary': {
            borderRadius: '12px',
            margin: '10px 10px',
            padding: ' 2px 12px',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '28px',
            letterSpacing: ' 0.2px',
            border: `2px solid ${THEME_COLOR.Theme_Primary}`,
            textTransform: 'capitalize',
        },
        '& .MuiButton-textPrimary:first-child': {
            "&:hover": {
                backgroundColor: THEME_COLOR.Theme_Primary,
                color: '#fff',
                border: `2px solid ${THEME_COLOR.Theme_Primary}`,

            },
            color: THEME_COLOR.Theme_black
        },
        '& .MuiButton-textPrimary:last-child': {
            "&:hover": {
                backgroundColor: '#fff',
                color: 'rgba(0, 0, 0, 1)',
                border: `2px solid ${THEME_COLOR.Theme_Primary}`,
            },
            backgroundColor: THEME_COLOR.Theme_Primary,
            color: THEME_COLOR.Theme_white
        }
    }

}))

const Activation = () => {
    const classes = useStyles();
    const [OpenModel, setOpenModel] = useState(false)
    const handleClickOpen = () => {
        setOpenModel(true);
    };

    const handleClose = () => {
        setOpenModel(false);
    };
    return (
        <div className={classes.root}>
            <div className={classes.ActivationStatus}>
                <div className={classes.icon}><BiCheck fontSize={20} fill={THEME_COLOR.Theme_white} /></div>
                <div className={classes.status}>{"Your produt is activated"}</div>
            </div>
            <TextField
                id="outlined-basic"
                label="Licence key"
                placeholder="XXXXX-XXXXX-XXXXX-XXXXX"
                variant="outlined"
                className={classes.TextInput} />
            <div>
                <Dialog className={classes.actDialoge} open={OpenModel} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Change your product key</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To upgrade your product please provide activation key to acrivate your modules.
                        </DialogContentText>
                        <TextField
                            margin="dense"
                            id="outlined-basic"
                            label="Licence key"
                            placeholder="XXXXX-XXXXX-XXXXX-XXXXX"
                            variant="outlined"
                            className={classes.TextInput}
                            fullWidth />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            change
                        </Button>
                    </DialogActions>
                </Dialog>
                <div class={classes.changeActivation} onClick={handleClickOpen}>
                    {"Change acivation key"}
                </div>
            </div>
        </div>
    )
}

export default Activation
