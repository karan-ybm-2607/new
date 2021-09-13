import React,{useState} from 'react';
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
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";

const Allowancelist = ({allowances}) => {
    const [state, setState] = React.useState({
        checkedA: true,
        
      });
    
   console.log(allowances)
    return (
        <div>
            <FormControlLabel 
                    control={
                      <Checkbox 
                        checked={state.checkedA}
                        // onChange={(e) => handleChange(e)}
                         name={allowances.titie}
                        color="primary"
                      />
                    }
                    label={allowances.titie}
                  />
           
           
        </div>
    )
}

export default Allowancelist
