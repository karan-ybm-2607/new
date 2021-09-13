import React, { useState } from "react";
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

const AddAllowance = () => {
  const [inputdata, setinputData] = useState([]);
  function getInputData(e) {
    setinputData(e.target.value);

    console.log(e.target.value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    alert(inputdata)
  }
  return (
    <>
    
      <Input
        placeholder="Add Allowance"
        inputProps={{ "aria-label": "description" }}
        name="allowance"
        value={inputdata}
        onChange={(e) => setinputData(e.target.value)} onSubmit={handleSubmit}
        style={{ width: "60%", borderBottomColor: "1px solid lightgrey" }}
      />
     
    </>
  );
};

export default AddAllowance;
