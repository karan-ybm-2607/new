import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  TextField,
  Select,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  InputLabel,
  FormLabel,
  MenuItem,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Input,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { IoCloudUpload } from "react-icons/io5";
import Edit_Icon from "../../../../Layout/Edit_Icon";
import { API_CONFIG } from "../../../../../lib/API";
import axios from "axios";
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import Styles from "./AddEmployeeForm.module.css";
import { THEME_COLOR, THEME_CONFIG } from "../../../../../lib/config";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import AddIcon from "@material-ui/icons/Add";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import AddAllowance from "../../Salary Tamplete/AddAllowances/AddAllowance";
import Allowancelist from "../../Salary Tamplete/AddAllowances/Allowancelist";

const allowancelist =[
  {id:1, titie:'learn React',done:true},
  {id:2, titie:'learn React language',done:false},
]
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
    "& hr": {
      margin: theme.spacing(0),
     
      border: `2px solid  lightGrey`,
    },

    "& .MuiFormLabel-root": {
      textTransform: "capitalize",
      color: "#000",
      backgroundColor: "#fff",
    },
    "& > section> div>*": {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(1),
    },
    // "& ."
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: THEME_CONFIG.Theme_border_radius,
        borderColor: THEME_COLOR.Theme_Primary,
        borderWidth: THEME_CONFIG.Theme_border_width,
      },
      "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: THEME_COLOR.Theme_Primary,
        borderWidth: THEME_CONFIG.Theme_border_width,
      },
      "&.Mui-focused fieldset": {
        borderColor: THEME_COLOR.Theme_Primary,
        borderWidth: THEME_CONFIG.Theme_border_width,
      },
    },
    "& .HeadingContainer": {
      width: "100%",
    },
  },

  devider: {
    borderTop: "2px solid rgba(54, 55, 64, 0.23)",
    width: "100%",
    display: "block",
    margin: "35px 0",
  },
  formHeading: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 28,
    lineHeight: "35px",
    letterSpacing: 0.3,
    color: THEME_COLOR.Theme_Primary,
  },

  Paper: {
    padding: theme.spacing(1), //grid padding
    color: theme.palette.text.secondary,

     borderTop: `2px solid lightGrey `,

    "&.outerColumn": {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start"
    },

    "&.checklabel": {
      display: "flex",
    }
  },
 
  input: {
    display: "none",
  },
  uploadIconButton: {
    "& svg": {
      marginLeft: "15px",
    },
    "&:hover": {
      backgroundColor: THEME_COLOR.Theme_Primary,
      color: "#F7F8FC",
    },
    backgroundColor: THEME_COLOR.Theme_Primary,
    border: `2px solid ${THEME_COLOR.Theme_Primary}`,
    borderRadius: THEME_CONFIG.Theme_border_radius,
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
    letterSpacing: "0.2px",
    color: "#F7F8FC",
    padding: "5px 25px",
  },
  uploadDoc: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "22px",
    lineHeight: "28px",
    marginBottom: "8px",
    marginLeft: "15px",
    letterSpacing: "0.2px",
    textTransform: "capitalize",
  },

  btnGroup: {
    width: "100%",
    justifyContent: "center",
    marginTop: "40px",
  },
  grpBtn: {
    borderRadius: "12px",
    padding: "10px 15px",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "22px",
    lineHeight: "28px",
    letterSpacing: " 0.2px",
    border: `2px solid ${THEME_COLOR.Theme_Primary}`,
    margin: "10px 25px",
    textTransform: "capitalize",
  },
  btnOutline: {
    "&:hover": {
      backgroundColor: THEME_COLOR.Theme_Primary,
      color: "#fff",
      border: `2px solid ${THEME_COLOR.Theme_Primary}`,
    },
    color: "rgba(0, 0, 0, 1)",
  },
  btnStacked: {
    "&:hover": {
      backgroundColor: "#fff",
      color: "rgba(0, 0, 0, 1)",
      border: `2px solid ${THEME_COLOR.Theme_Primary}`,
    },
    backgroundColor: THEME_COLOR.Theme_Primary,
  },
  RenderData: {
    display: "flex",
    flexWrap: "wrap",
  },
  Render: {
    fontSize: 18,
    width: "100%",
    margin: 0,
  },
  Bold: {
    fontWeight: 600,
  },
  editDetails: {
    display: "none",
    marginRight: 15,
  },
  HeadingContainers: {
    display: "flex",
    justifyContent: "space-between",
    height: 75,
    "&:hover .editBtn": {
      display: "block",
    },
  },
  Mail: {
    color: THEME_COLOR.Theme_Primary,
  },
  inputcheckbox :{
    display:"block"
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

function AddEmployeeForm() {
  const classes = useStyles();

  const [state, setState] = useState([]);
  const [status, setAddallowances] =useState(false)
  const [deduction, setDeduction] =useState(false)
  
  const handleChange = (e) => {
    let data = state;
    data.push(e.target.name);
    setState(data);
    console.log(data);
  };
  
  // const handleDelete = () => {
  //    console.info("You clicked the delete icon.");
  // };

  // console.log(PersonalInfo)

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <section>
          <div className={`HeadingContainer ${classes.HeadingContainers}`}>
            <Typography
              className={classes.formHeading}
              variant="h3"
              gutterBottom
            >
              Salary Structure
            </Typography>
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Team Name"
              variant="outlined"
            />
          </div>

          <div style={{ maxwidth: "100%" }}>
            <Paper elevation={0} className={classes.Paper}>
            
              <Grid
                container
                spacing={3}
                className={classes.outerrow}
                direction="row"
                item
                xs={12}
                style={{ borderBottom: `2px solid lightGrey` }}
              >
                <Grid
                  item
                  xs
                  className={classes.outerColumn}
                  direction="column"
                >
                  <Typography className={classes.subHeading} variant="h4">
                    Allowance
                  </Typography>
                </Grid>

                <Divider orientation="vertical" flexItem />

                <Grid
                  item
                  xs
                  className={classes.outerColumn}
                  direction="column"
                >
                  <Typography className={classes.subHeading} variant="h4">
                    Deduction
                  </Typography>
                </Grid>
              </Grid>
              {/* <Grid container spacing={3} direction="row" item xs={12}>
              <div>
                <Chip
                  avatar={<Avatar>M</Avatar>}
                  label="Deletable primary"
                  onDelete={handleDelete}
                  color="primary"
                  variant="outlined"
                />
              </div> 
              </Grid> */}
              <Grid container spacing={3} direction="row" item xs={12}>
               
                <Grid
                  item
                  xs
                  className={classes.outerColumn}
                  direction="column"
                >
                  <FormControlLabel className={classes.inputcheckbox}
                    control={
                      <Checkbox 
                        onChange={(e) => handleChange(e)}
                        name="Medical Allowance"
                        color="primary"
                      />
                    }
                    label="Medical Allowance "
                  />
                  <FormControlLabel  className={classes.inputcheckbox}
                    control={
                      <Checkbox 
                        onChange={(e) => handleChange(e)}
                        name="House Rent Allowance"
                        color="primary"
                      />
                    }
                    label="House Rent Allowance"
                  />
                  <FormControlLabel className={classes.inputcheckbox}
                    control={
                      <Checkbox
                        onChange={(e) => handleChange(e)}
                        name="Dearness Allowance"
                        color="primary"
                      />
                    }
                    label="Dearness Allowance"
                  />
                  <FormControlLabel className={classes.inputcheckbox}
                    control={
                      <Checkbox
                        onChange={(e) => handleChange(e)}
                        name="Conveyance Allowance"
                        color="primary"
                      />
                    }
                    label="Conveyance Allowance"
                  />

                  <FormControlLabel className={classes.inputcheckbox}
                    control={
                      <Checkbox
                        onChange={(e) => handleChange(e)}
                        name="Special Allowance"
                        color="primary"
                      />
                    }
                    label="Special Allowance"
                  />
                  <FormControlLabel className={classes.inputcheckbox}
                    control={
                      <Checkbox
                        onChange={(e) => handleChange(e)}
                        name="Bonus"
                        color="primary"
                      />
                    }
                    label="Bonus"
                  />
                  <FormControlLabel className={classes.inputcheckbox}
                    control={
                      <Checkbox
                        onChange={(e) => handleChange(e)}
                        name="Medical Reimbursement"
                        color="primary"
                      />
                    }
                    label="Medical Reimbursement"
                  />

                  <FormControlLabel className={classes.inputcheckbox}
                    control={
                      <Checkbox
                        onChange={(e) => handleChange(e)}
                        name="Employee Contribution to PF"
                        color="primary"
                      />
                    }
                    label="Employee Contribution to PF"
                  />
                  <FormControlLabel className={classes.inputcheckbox}
                    control={
                      <Checkbox
                        onChange={(e) => handleChange(e)}
                        name="Leave Travel Allowance"
                        color="primary"
                      />
                    }
                    label="Leave Travel Allowance"
                  />
                  <FormControlLabel className={classes.inputcheckbox}
                    control={
                      <Checkbox
                        onChange={(e) => handleChange(e)}
                        name="Overtime Allowance"
                        color="primary"
                      />
                    }
                    label="Overtime Allowance"
                  />
                  <div>
                    {allowancelist.map((allowance) => <Allowancelist allowances={allowance}/>)}
                    {/* <Allowancelist/> */}
                    <AddIcon  onClick={()=>setAddallowances(!status)} />{
                      status ?<AddAllowance/> :null
                    }
                   
                  </div>
                </Grid>
                    
                <Divider orientation="vertical" flexItem />
                
              
           
                {/* <div>
                <Chip
                  avatar={<Avatar>M</Avatar>}
                  label="Deletable primary"
                  onDelete={handleDelete}
                  color="primary"
                  variant="outlined"
                />
              </div> */}
                <Grid
                  item
                  xs
                  className={classes.outerColumn}
                  direction="column"
                >
                  <FormControlLabel className={classes.inputcheckbox}
                    control={
                      <Checkbox 
                        onChange={(e) => handleChange(e)}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Pension Fund (PF) "
                  />
                  <FormControlLabel className={classes.inputcheckbox}
                    control={
                      <Checkbox
                        checked={state.checkedB}
                        onChange={(e) => handleChange(e)}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Traning Reimbursment "
                  />
                  <FormControlLabel className={classes.inputcheckbox}
                    control={
                      <Checkbox
                        onChange={(e) => handleChange(e)}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Section 80C"
                  />
                  <FormControlLabel className={classes.inputcheckbox}
                    control={
                      <Checkbox
                        onChange={(e) => handleChange(e)}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="HRA Exemption"
                  />

                  <FormControlLabel className={classes.inputcheckbox}
                    control={
                      <Checkbox
                        onChange={(e) => handleChange(e)}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Meal Pass"
                  />

                  <FormControlLabel className={classes.inputcheckbox}
                    control={
                      <Checkbox
                        onChange={(e) => handleChange(e)}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Sukanya Samridhi"
                  />
                  <FormControlLabel className={classes.inputcheckbox}
                    control={
                      <Checkbox
                        onChange={(e) => handleChange(e)}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="PPF"
                  />
                  <FormControlLabel className={classes.inputcheckbox}
                    control={
                      <Checkbox
                        onChange={(e) => handleChange(e)}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Intrastrucure Bonds"
                  />

                  <FormControlLabel className={classes.inputcheckbox}
                    control={
                      <Checkbox
                        onChange={(e) => handleChange(e)}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Provident Fund (PF)"
                  />
                  <FormControlLabel className={classes.inputcheckbox}
                    control={
                      <Checkbox
                        onChange={(e) => handleChange(e)}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Car Reimbursement"
                  />
                  <FormControlLabel className={classes.inputcheckbox}
                    control={
                      <Checkbox
                        onChange={(e) => handleChange(e)}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label="Income Tax"
                  />
                  <div>
                  <AddIcon  onClick={()=>setDeduction(!deduction)} />{
                      deduction?<Input 
                      placeholder="Add Allowance"
                      inputProps={{ "aria-label": "description" }}  /> :null
                    }
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3} direction="row" item xs={12}>
                <Grid
                  item
                  xs
                  className={classes.outerColumn}
                  direction="column"
                >
                  <Typography>
                    Basic Pay :
                    <Input
                      placeholder="CTC"
                      inputProps={{ "aria-label": "description" }}
                    />
                    +
                    <Input
                      placeholder="15%"
                      inputProps={{ "aria-label": "description" }}
                    />
                  </Typography>
                </Grid>

                <Divider orientation="vertical" flexItem />

                <Grid
                  item
                  xs
                  className={classes.outerColumn}
                  direction="column"
                >
                  <Typography>
                    PF :
                    <Input
                      placeholder="Basic Pay"
                      inputProps={{ "aria-label": "description" }}
                    />
                    +
                    <Input
                      placeholder="10%"
                      inputProps={{ "aria-label": "description" }}
                    />
                  </Typography>
                </Grid>
              </Grid>

              <ButtonGroup
                disableElevation
                color="primary"
                className={classes.btnGroup}
              >
                <ButtonGroup
                  variant="outlined"
                  orientation="vertical"
                  color="primary"
                  aria-label="vertical outlined primary button group"
                  style={{ marginRight: 30 }}
                >
                  <Button className={`${classes.grpBtn} ${classes.btnOutline}`}>
                    Save as draft
                  </Button>
                </ButtonGroup>
                <ButtonGroup
                  variant="contained"
                  orientation="vertical"
                  color="primary"
                  aria-label="vertical outlined primary button group"
                >
                  <Button className={`${classes.grpBtn} ${classes.btnStacked}`}>
                    save details
                  </Button>
                </ButtonGroup>
              </ButtonGroup>
            </Paper>
          </div>
        </section>
      </form>
    </div>
  );
}

export default AddEmployeeForm;
