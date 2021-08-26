import React from 'react'
import { InputBase } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import { Styles, THEME_COLOR, THEME_CONFIG } from '../../../../../../lib/config';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
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
            borderRadius: THEME_COLOR.Theme_border_radius
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

const AdminInput = () => {
    const classes = useStyles();
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    return (
        <div className={classes.chipContainer}>
            <div>
                <Chip label="Karan Singh"
                    variant="outlined"
                    color="primary"
                    onClick={handleClick}
                    onDelete={handleDelete}
                    avatar={<Avatar>K</Avatar>} />
            </div>
            <div className={classes.searchContainer}>
                <InputBase
                    placeholder="search employee"
                    inputProps={{ 'aria-label': 'search employee' }}
                    className={classes.employeeSearch}
                    variant="outlined"
                />
            </div>
        </div>
    )
}

export default AdminInput
