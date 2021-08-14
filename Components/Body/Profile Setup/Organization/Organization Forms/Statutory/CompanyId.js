import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { MenuItem, TextField, InputLabel, FormControl, Select } from '@material-ui/core/';
import { createTheme } from '@material-ui/core/styles';
import { THEME_COLOR } from '../../../../../../lib/config';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { ThemeProvider } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // border: '1px solid rgba(0, 0, 0, .125)', 
        "& .MuiFormLabel-root": {
            textTransform: 'capitalize',
            color: THEME_COLOR.Theme_black,
            backgroundColor: THEME_COLOR.Theme_white
        },
        '& > *': {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            // marginTop: theme.spacing(4),
            marginBottom: theme.spacing(1),
            width: 'calc(50% - 16px)',
            marginTop: '20px !important'
        },
        '& .MuiFormLabel-root.Mui-focused': {
            color: THEME_COLOR.Theme_Primary
        }

    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));
const materialTheme = createTheme({
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
const CompanyId = () => {
    const classes = useStyles();
    const [selectedICD, setSelectedICD] = useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange = (date) => {
        setSelectedICD(date);
    };
    return (
        <div className={classes.root}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="grouped-select">Entity type</InputLabel>
                <Select defaultValue="" id="grouped-select">
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Private limited</MenuItem>
                    <MenuItem value={2}>Public limited</MenuItem>
                    <MenuItem value={3}>Limited liability partnership</MenuItem>
                    <MenuItem value={4}>Partnership</MenuItem>
                    <MenuItem value={5}>Sole Proprietorship</MenuItem>
                    <MenuItem value={6}>Nonprofit Organisation</MenuItem>
                    <MenuItem value={7}>others</MenuItem>

                </Select>
            </FormControl>
            <TextField id="outlined-basic" label="CIN" variant="outlined" className={classes.TextInput} />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <ThemeProvider theme={materialTheme} className={classes.root}>
                    <KeyboardDatePicker
                        inputVariant="outlined"
                        disableToolbar
                        variant="inline"
                        format="dd/mm/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date Of Incorporation"
                        value={selectedICD}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </ThemeProvider>
            </MuiPickersUtilsProvider>
            <TextField id="outlined-basic" label="Company PAN" variant="outlined" className={classes.TextInput} />
            <TextField id="outlined-basic" label="Company TAN" variant="outlined" className={classes.TextInput} />
            <TextField id="outlined-basic" label="Company GST" variant="outlined" className={classes.TextInput} />

        </div>
    )
}

export default CompanyId
