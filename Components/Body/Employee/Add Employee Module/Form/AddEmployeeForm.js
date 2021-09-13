import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import DateFnsUtils from '@date-io/date-fns';
import { TextField, Select, FormControlLabel, Radio, RadioGroup, Typography, InputLabel, FormLabel, MenuItem, FormControl, OutlinedInput, InputAdornment, Button, ButtonGroup } from "@material-ui/core";
import { createTheme } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import { IoCloudUpload } from 'react-icons/io5'
import Edit_Icon from '../../../../Layout/Edit_Icon';
import { API_CONFIG } from '../../../../../lib/API';
import axios from 'axios'
import moment from 'moment'
import CurrencyFormat from 'react-currency-format';
import Styles from './AddEmployeeForm.module.css'
import { THEME_COLOR, THEME_CONFIG } from '../../../../../lib/config';
const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiFormLabel-root": {
            textTransform: 'capitalize',
            color: '#000',
            backgroundColor: '#fff'
        },
        '& > section> div>*': {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(1),
            width: 'calc(50% - 16px)',
        },
        // "& ."
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
                borderWidth: THEME_CONFIG.Theme_border_width
            }
        },
        '& .HeadingContainer': {
            width: '100%',
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
        color: THEME_COLOR.Theme_Primary,
    },
    input: {
        display: 'none',
    },
    uploadIconButton: {
        "& svg": {
            marginLeft: '15px'
        },
        "&:hover": {
            backgroundColor: THEME_COLOR.Theme_Primary,
            color: '#F7F8FC',

        },
        backgroundColor: THEME_COLOR.Theme_Primary,
        border: `2px solid ${THEME_COLOR.Theme_Primary}`,
        borderRadius: THEME_CONFIG.Theme_border_radius,
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
        border: `2px solid ${THEME_COLOR.Theme_Primary}`,
        margin: '10px 25px',
        textTransform: 'capitalize',
    },
    btnOutline: {
        "&:hover": {
            backgroundColor: THEME_COLOR.Theme_Primary,
            color: '#fff',
            border: `2px solid ${THEME_COLOR.Theme_Primary}`,

        },
        color: 'rgba(0, 0, 0, 1)'
    },
    btnStacked: {
        "&:hover": {
            backgroundColor: '#fff',
            color: 'rgba(0, 0, 0, 1)',
            border: `2px solid ${THEME_COLOR.Theme_Primary}`,
        },
        backgroundColor: THEME_COLOR.Theme_Primary,
    },
    RenderData: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    Render: {
        fontSize: 18,
        width: '100%',
        margin: 0
    },
    Bold: {
        fontWeight: 600,
    },
    editDetails: {
        display: 'none',
        marginRight: 15
    },
    HeadingContainers: {
        display: 'flex',
        justifyContent: 'space-between',
        height: 75,
        '&:hover .editBtn': {
            display: 'block'
        }
    },
    Mail: {
        color: THEME_COLOR.Theme_Primary
    }
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
const AddEmployeeForm = () => {
    const classes = useStyles();
    const [values, setValues] = useState({
        amount: '',

    });

    const [selectedDob, setSelectedDob] = useState(new Date('2014-08-18T21:11:54'));
    const [selectedDoj, setSelectedDoj] = useState(new Date('2014-08-18T21:11:54'));
    const [Department, setDepartment] = useState('');
    const [Employment, setEmployment] = useState('');
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
    const [PersonalDetails, setPersonalDetails] = useState(false);
    const [EmployementDetails, setEmployementDetails] = useState(false)
    const [PromotionalDetails, setPromotionalDetails] = useState(false)
    const editPersonalDetails = () => setPersonalDetails(!PersonalDetails);
    const editEmployementDetails = () => setEmployementDetails(!EmployementDetails);
    const editPromotionalDetails = () => setPromotionalDetails(!PromotionalDetails);
    // ALL APIS REQUEST
    const [AllResData, setAllResData] = useState({ EmpInfo: null, EmplmntInfo: null })
    const [PersonalInfo, setPersonalInfo] = useState(null)
    const [EmployementInfo, setEmployementInfo] = useState(null)

    useEffect(() => {
        const fetchData = async () => {

            const PersonalEmpInfo = await axios.get(`${API_CONFIG.API_BASE_URL}/Employee/personalInformation`)
                .then((response) => {
                    setPersonalInfo(response.data);
                    // console.log(response.data) 
                }).catch((error) => {
                    setPersonalInfo({})
                })

            const EmpEmployementInfo = await axios.get(`${API_CONFIG.API_BASE_URL}/Employee/Employement`)
                .then((response) => {
                    setEmployementInfo(response.data)
                    console.log('ee-->', response.data)

                }).catch((error) => {
                    setEmployementInfo({})
                })

            setAllResData({ EmpInfo: PersonalEmpInfo?.data, EmplmntInfo: EmpEmployementInfo?.data })
        }
        fetchData();
    }, [])
    if (AllResData.EmpInfo) {
        console.log('data--->', AllResData.EmpInfo, AllResData.EmplmntInfo)
    }

    // console.log(PersonalInfo)
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <section>
                    <div className={`HeadingContainer ${classes.HeadingContainers}`}>
                        <Typography className={classes.formHeading} variant="h3" gutterBottom >
                            Personal details
                        </Typography>
                        <Edit_Icon OnClick={() => editPersonalDetails()} cName={`editBtn ${classes.editDetails}`} />
                    </div>
                    {PersonalDetails ? <>
                        {PersonalInfo.map((data, index) => index == 0 && (

                            <div key={data._id} className={`HeadingContainer ${classes.RenderData}`}>
                                <div>
                                    <p className={classes.Render}><span className={classes.Bold}>First Name: </span>{data?.PersonalInformation?.FirstName}</p>
                                </div>
                                <div>
                                    <p className={classes.Render}><span className={classes.Bold}>Last Name: </span>{data?.PersonalInformation?.LastName}</p>
                                </div>
                                <div>
                                    <p className={classes.Render}><span className={classes.Bold}>Employee ID: </span>{data?.PersonalInformation?.EmployeeID}</p>
                                </div>
                                <div>
                                    <p className={classes.Render}><span className={classes.Bold}>Date of Birth: </span>{moment(data?.PersonalInformation?.DateOfBirth).format('DD-MM-YYYY')}</p>
                                </div>
                                <div>
                                    <p className={classes.Render}><span className={classes.Bold}>Office Email: </span><a className={classes.Mail} href={`mailto:${data?.PersonalInformation?.OfficialEmailAddress}`}>{data?.PersonalInformation?.OfficialEmailAddress}</a></p>
                                </div>
                                <div>
                                    <p className={classes.Render}><span className={classes.Bold}>Email Address: </span><a className={classes.Mail} href={`mailto:${data?.PersonalInformation?.EmailAddress}`}>{data?.PersonalInformation?.EmailAddress}</a></p>
                                </div>
                                <div>
                                    <p className={classes.Render}><span className={classes.Bold}>Communication Address: </span>{data?.PersonalInformation?.CommunicationAddress}</p>
                                </div>
                                <div>
                                    <p className={classes.Render}><span className={classes.Bold}>Permanent Email: </span>{data?.PersonalInformation?.PermanentAddress}</p>
                                </div>
                            </div>
                        ))}

                    </>
                        :
                        <div className={`HeadingContainer`}>
                            <TextField id="outlined-basic" label="First Name" variant="outlined" />
                            <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                            <TextField id="outlined-basic" label="Employee ID" variant="outlined" />
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <ThemeProvider theme={materialTheme} className={classes.root}>
                                    <KeyboardDatePicker
                                        inputVariant="outlined"
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
                        </div>}
                </section>
                <div className={classes.devider}></div>
                <section>
                    <div className={`HeadingContainer ${classes.HeadingContainers}`}>
                        <Typography className={classes.formHeading} variant="h3" gutterBottom>
                            Employment details
                        </Typography>
                        <Edit_Icon OnClick={() => editEmployementDetails()} cName={`editBtn ${classes.editDetails}`} />
                    </div>
                    {EmployementDetails ?
                        <>
                            {EmployementInfo.map((data, index) => index == 1 && (
                                <div key={data._id} className={`HeadingContainer ${classes.RenderData}`}>
                                    <div>
                                        <p className={classes.Render}><span className={classes.Bold}>Department: </span>{data?.EmployeeDetails?.Department}</p>
                                    </div>
                                    <div>
                                        <p className={classes.Render}><span className={classes.Bold}>Date Of Joining: </span>{moment(data?.EmployeeDetails?.DateOfJoining).format('DD-MM-YYYY')}</p>
                                    </div>
                                    <div>
                                        <p className={classes.Render}><span className={classes.Bold}>Employment Type: </span>{data?.EmployeeDetails?.EmployementType}</p>
                                    </div>
                                    <div>
                                        <p className={classes.Render}><span className={classes.Bold}>Employment Status: </span>{data?.EmployeeDetails?.Status}</p>
                                    </div>
                                    <div>
                                        <p className={classes.Render}><span className={classes.Bold}>Employmee CTC: </span>
                                            <CurrencyFormat value={data?.EmployeeDetails?.EmployeeCtc} displayType={'text'} thousandSeparator={true} prefix={'₹'} />
                                        </p>
                                    </div>
                                    <div>
                                        <p className={classes.Render}><span className={classes.Bold}>Salary Structure: </span>{data?.EmployeeDetails?.SalaryStructure}</p>
                                    </div>
                                </div>
                            ))}
                        </>
                        :
                        <div>
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
                                    <MenuItem value={'Marketing'}>Marketing</MenuItem>
                                    <MenuItem value={'Front - End'}>Front End</MenuItem>
                                    <MenuItem value={'Backend'}>Backend</MenuItem>
                                </Select>
                            </FormControl>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <ThemeProvider theme={materialTheme} className={classes.root}>
                                    <KeyboardDatePicker
                                        inputVariant="outlined"
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
                        </div>
                    }
                </section>
                <div className={classes.devider}></div>
                <section>
                    <div className={`HeadingContainer ${classes.HeadingContainers}`}>
                        <Typography className={classes.formHeading} variant="h3" gutterBottom>
                            Promotional details
                        </Typography>
                        <Edit_Icon OnClick={() => editPromotionalDetails()} cName={`editBtn ${classes.editDetails}`} />
                    </div>
                    {PromotionalDetails ?
                        <></>
                        :
                        <div>
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
                                        inputVariant="outlined"
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
                        </div>
                    }
                </section>
                <div className={classes.devider}></div>
                <section>
                    <div className={`HeadingContainer ${classes.HeadingContainers}`}>

                        <Typography className={classes.formHeading} variant="h3" gutterBottom>
                            Bank details
                        </Typography>
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="Account Holder Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Account Number" variant="outlined" />
                        <TextField id="outlined-basic" label="Bank Name" variant="outlined" />
                        <TextField id="outlined-basic" label="IFSC Code" variant="outlined" />
                    </div>
                </section>
                <div className={classes.devider}></div>
                <section>
                    <div className={`HeadingContainer ${classes.HeadingContainers}`}>
                        <Typography className={classes.formHeading} variant="h3" gutterBottom>
                            Experience history
                        </Typography>
                    </div>
                    <div>
                        <TextField id="outlined-basic" label="Organization Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Designation" variant="outlined" />
                        <TextField id="outlined-basic" label="Working Duration" variant="outlined" />
                        <TextField id="outlined-basic" label="CTC" variant="outlined" />
                    </div>
                </section>
                <div className={classes.devider}></div>
                <section>
                    <div className={`HeadingContainer ${classes.HeadingContainers}`}>

                        <Typography className={classes.formHeading} variant="h3" gutterBottom>
                            Biometrics And Documents
                        </Typography>
                    </div>
                    <div>
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
                    </div>
                </section>

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