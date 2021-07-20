import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from "@material-ui/styles";
import DateFnsUtils from '@date-io/date-fns';
import { createMuiTheme, Typography } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { styles } from '@material-ui/pickers/views/Calendar/Calendar';
import Styles from './AddEmployeeForm.module.css'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(1),
            width: 'calc(50% - 16px)',
        },
        // "& ."
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
    devider: {
        borderTop: '2px solid rgba(54, 55, 64, 0.23)',
        width: '100%',
        display: 'block',
        margin: '35px 0',
    },
    formHeading: {
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 28,
        lineHeight: '35px',
        letterSpacing: 0.3,
        color: '#0096C6',
    }
}));
const materialTheme = createMuiTheme({
    overrides: {
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: "#8bc34a",
            },
        },
        MuiPickersCalendarHeader: {
            switchHeader: {
                backgroundColor: "white",
                color: "#1b5e20",
            },
        },
    },
});
const AddEmployeeForm = () => {
    const classes = useStyles();
    const [selectedDob, setSelectedDob] = React.useState(new Date('2014-08-18T21:11:54'));
    const [selectedDoj, setSelectedDoj] = React.useState(new Date('2014-08-18T21:11:54'));
    const [Department, setDepartment] = React.useState('');
    const [Employment, setEmployment] = React.useState('');

    const handleChange = (event) => {
        setDepartment(event.target.value);
        setEmployment(event.target.value);
    };
    const handleDateChange = (date) => {
        setSelectedDob(date);
        setSelectedDoj(date);
    };
    return (<div>
        <Typography className={classes.formHeading} variant="h3" gutterBottom>
            Personal details
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">

            <TextField id="outlined-basic" label="First Name" variant="outlined" />
            <TextField id="outlined-basic" label="Last Name" variant="outlined" />
            <TextField id="outlined-basic" label="Employee ID" variant="outlined" />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <ThemeProvider theme={materialTheme} className={classes.root}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/mm/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date Of Birth"
                        value={selectedDob}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </ThemeProvider>
            </MuiPickersUtilsProvider>
            <div className={classes.devider}></div>
            <Typography className={classes.formHeading} variant="h3" gutterBottom>
                Employment details
            </Typography>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Department</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={Department}
                    onChange={handleChange}
                    label="Department"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <ThemeProvider theme={materialTheme} className={classes.root}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="dd/mm/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date Of Joining"
                        value={selectedDoj}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </ThemeProvider>
            </MuiPickersUtilsProvider>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Employment Type</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={Employment}
                    onChange={handleChange}
                    label="Department"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </form>

    </div>

    )
}

export default AddEmployeeForm