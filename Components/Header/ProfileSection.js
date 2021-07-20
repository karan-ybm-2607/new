import React from 'react'
import { Badge } from '@material-ui/core';
import './ProfileSection.module.css'
import styles from './ProfileSection.module.css'
import { BsFillBellFill } from 'react-icons/bs'
import { GoSearch } from 'react-icons/go'
import { AiOutlineLogout } from 'react-icons/ai'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { ListItemIcon, MenuItem, Menu, Button, IconButton, Avatar, ListItemText } from '@material-ui/core';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
        marginRight: 15
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));
const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: '#000',
            },
        },
    },
}))(MenuItem);

const ProfileSection = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const classes = useStyles();

    return (
        <div className={styles.MainContainer}>
            <div className={styles.utilities}>
                <div>
                    <IconButton>
                        <GoSearch fontSize={20} />
                    </IconButton>
                </div>
                <div>
                    <IconButton>
                        <Badge color="secondary" variant="dot">
                            <BsFillBellFill fontSize={20} />
                        </Badge>
                    </IconButton>
                </div>
            </div>
            <div className={styles.profileContainer}>
                <Button
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    // color="#000"
                    onClick={handleClick}
                >
                    <Avatar className={classes.orange}>K</Avatar> Karan Singh
                </Button>
                <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <StyledMenuItem>
                        <ListItemIcon>
                            {/* <SendIcon fontSize="small" /> */}
                        </ListItemIcon>
                        <ListItemText primary="Sent mail" />
                    </StyledMenuItem>
                    <StyledMenuItem>
                        <ListItemIcon>
                            {/* <DraftsIcon fontSize="small" /> */}
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                    </StyledMenuItem>
                    <StyledMenuItem>
                        <ListItemIcon>
                            <AiOutlineLogout fontSize="25px" />
                        </ListItemIcon>
                        <ListItemText primary="Log Out" />
                    </StyledMenuItem>
                </StyledMenu>

            </div>
        </div>
    )
}

export default ProfileSection
