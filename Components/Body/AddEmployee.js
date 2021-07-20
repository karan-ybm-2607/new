import React from 'react'
import '@fontsource/roboto';
import { StylesProvider, Typography } from '@material-ui/core';
import styles from './AddEmployee.module.css'
import { makeStyles } from '@material-ui/core/styles';
import AddEmployeeForm from './Form/AddEmployeeForm';

const useStyles = makeStyles({
    moduleTitle: {
        fontStyle: 'normal',
        fontSize: 24,
        fontWeight: 600,
        lineHeight: '30px',
        letterSpacing: 0.3,
        color: '#000',
        textTransform: 'capitalize'
    },
    formHeading: {
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 28,
        lineHeight: '35px',
        letterSpacing: 0.3,
        color: '#0096C6',
    }
});
const AddEmployee = () => {
    const classes = useStyles();

    return (
        <div>
            <Typography className={classes.moduleTitle} variant="h3" gutterBottom>
                Add Employee
            </Typography>

            <div className={styles.formContainer}>

                <AddEmployeeForm />
            </div>
        </div>
    )
}

export default AddEmployee
