import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from "@material-ui/styles";
import DateFnsUtils from '@date-io/date-fns';
import { Select, FormControlLabel, Radio, createMuiTheme, RadioGroup, Typography, InputLabel, FormLabel, MenuItem, FormHelperText, FormControl, OutlinedInput, InputAdornment, Button, ButtonGroup } from "@material-ui/core";
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import { IoCloudUpload } from 'react-icons/io5'
import { styles } from '@material-ui/pickers/views/Calendar/Calendar';
import Styles from './AddEmployeeForm.module.css'

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
    },
    input: {
        display: 'none',
    },
    uploadIconButton: {
        "& svg": {
            marginLeft: '15px'
        },
        "&:hover": {
            backgroundColor: '#0096C6',
            color: '#F7F8FC',

        },
        backgroundColor: '#0096C6',
        border: '2px solid #0096C6',
        borderRadius: '24px',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '20px',
        letterSpacing: '0.2px',
        color: '#F7F8FC',
        padding: '5px 25px'
    },
    uploadDoc: {
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '22px',
        lineHeight: '28px',
        marginBottom: '8px',
        marginLeft: '15px',
        letterSpacing: '0.2px',
        textTransform: 'capitalize',
    },
    btnGroup: {
        width: '100%',
        justifyContent: 'center',
        marginTop: '40px',
    },
    grpBtn: {
        borderRadius: '12px',
        padding: '10px 15px',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '22px',
        lineHeight: '28px',
        letterSpacing: ' 0.2px',
        border: '2px solid #0096C6',
        margin: '10px 25px',
        textTransform: 'capitalize',
    },
    btnOutline: {
        "&:hover": {
            backgroundColor: '#0096c6',
            color: '#fff',
            border: '2px solid #0096C6',

        },
        color: 'rgba(0, 0, 0, 1)'
    },
    btnStacked: {
        "&:hover": {
            backgroundColor: '#fff',
            color: 'rgba(0, 0, 0, 1)',
            border: '2px solid #0096C6',
        },
        backgroundColor: '#0096c6'
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
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const [selectedDob, setSelectedDob] = React.useState(new Date('2014-08-18T21:11:54'));
    const [selectedDoj, setSelectedDoj] = React.useState(new Date('2014-08-18T21:11:54'));
    const [Department, setDepartment] = React.useState('');
    const [Employment, setEmployment] = React.useState('');
    const [salaryStr, setsalaryStr] = useState('')
    const handleChange = (prop) => (event) => {
        setDepartment(event.target.value);
        setEmployment(event.target.value);
        setValues({ ...values, [prop]: event.target.value });

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
            <TextField id="outlined-basic" type="email" label="Email address" variant="outlined" />
            <TextField id="outlined-basic" type="email" label="official email address" variant="outlined" />
            <TextField
                id="outlined-multiline-static"
                label="Present address"
                multiline
                rows={4}
                variant="outlined"
            />
            <TextField
                id="outlined-multiline-static"
                label="permanent address"
                multiline
                rows={4}
                variant="outlined"
            />

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
            <FormControl variant="outlined" className={classes.formControl}>
                <FormLabel component="legend">Status</FormLabel>
                <RadioGroup row aria-label="position" name="position">
                    <FormControlLabel value="" control={<Radio color="primary" />} label="Active" />
                    <FormControlLabel value="" control={<Radio color="primary" />} label="Not Active" />
                    <FormControlLabel value="" control={<Radio color="primary" />} label="Hold" />
                    <FormControlLabel value="" control={<Radio color="primary" />} label="Terminated" />
                </RadioGroup>
            </FormControl>
            <FormControl className={classes.margin} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Employee CTC</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.amount}
                    onChange={handleChange('amount')}
                    startAdornment={<InputAdornment position="start">&#x20B9;</InputAdornment>}
                    labelWidth={60}
                />
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Salary Structure</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={salaryStr}
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

            <div className={classes.devider}></div>
            <Typography className={classes.formHeading} variant="h3" gutterBottom>
                Promotional details
            </Typography>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Promted from</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={salaryStr}
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
                        label="Date Of Promotion"
                        value={selectedDoj}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </ThemeProvider>
            </MuiPickersUtilsProvider>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Promted to</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={salaryStr}
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
            <FormControl className={classes.margin} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Current CTC</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.amount}
                    onChange={handleChange('amount')}
                    startAdornment={<InputAdornment position="start">&#x20B9;</InputAdornment>}
                    labelWidth={60}
                />
            </FormControl>
            <div className={classes.devider}></div>
            <Typography className={classes.formHeading} variant="h3" gutterBottom>
                Bank details
            </Typography>
            <TextField id="outlined-basic" label="Account Holder Name" variant="outlined" />
            <TextField id="outlined-basic" label="Account Number" variant="outlined" />
            <TextField id="outlined-basic" label="Bank Name" variant="outlined" />
            <TextField id="outlined-basic" label="IFSC Code" variant="outlined" />
            <div className={classes.devider}></div>
            <Typography className={classes.formHeading} variant="h3" gutterBottom>
                Experience history
            </Typography>
            <TextField id="outlined-basic" label="Organization Name" variant="outlined" />
            <TextField id="outlined-basic" label="Designation" variant="outlined" />
            <TextField id="outlined-basic" label="Working Duration" variant="outlined" />
            <TextField id="outlined-basic" label="CTC" variant="outlined" />
            <div className={classes.devider}></div>
            <Typography className={classes.formHeading} variant="h3" gutterBottom>
                Biometrics And Documents
            </Typography>
            <FormControl variant="outlined" className={classes.formControl}>
                <FormLabel component="legend" component="h3" className={classes.uploadDoc}>Photo</FormLabel>
                <input accept="image/*,pdf" className={classes.input} id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                    <Button color="primary" aria-label="upload picture" component="span" className={classes.uploadIconButton}>
                        Upload <IoCloudUpload fontSize={25} />
                    </Button>
                </label>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
                <FormLabel component="legend" component="h3" className={classes.uploadDoc}>Aadhar card</FormLabel>
                <input accept="image/*,pdf" className={classes.input} id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                    <Button color="primary" aria-label="upload picture" component="span" className={classes.uploadIconButton}>
                        Upload <IoCloudUpload fontSize={25} />
                    </Button>
                </label>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
                <FormLabel component="legend" component="h3" className={classes.uploadDoc}>PAN card</FormLabel>
                <input accept="image/*,pdf" className={classes.input} id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                    <Button color="primary" aria-label="upload picture" component="span" className={classes.uploadIconButton}>
                        Upload <IoCloudUpload fontSize={25} />
                    </Button>
                </label>
            </FormControl>


        </form>
        <ButtonGroup disableElevation color="primary" className={classes.btnGroup}>
            <ButtonGroup
                variant="outlined"
                orientation="vertical"
                color="primary"
                aria-label="vertical outlined primary button group"
                style={{ marginRight: 30 }}
            >
                <Button className={`${classes.grpBtn} ${classes.btnOutline}`}>Save as draft</Button>
            </ButtonGroup>
            <ButtonGroup
                variant="contained"
                orientation="vertical"
                color="primary"
                aria-label="vertical outlined primary button group"
            >
                <Button className={`${classes.grpBtn} ${classes.btnStacked}`}>save details</Button>

            </ButtonGroup>        </ButtonGroup>
    </div>

    )
}

export default AddEmployeeForm