import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/icons/Checkbox'; 
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles=makeStyles({
    root:{
        '&$checked':{
            color:'#000',
        },
    },
    checked:{},
    wrap:{
        width:"100%",
        display:'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 0,
    },
    label:{
        fontSize:'.8rem',
        fontFamily: `'Dancing Script', cursive`,
        fontFamily: `'Inter', sans-serif`,
    }
})

const CheckBox = ({diet, changeChecked}) => {
    const {checked, label,id} = diet;
  return (
    <div>
        <FormControlLabel
        classes={{
            label:classes.label,
            root:classes.wrap
        }}
        controls={
            <Checkbox
            classes={{
                checked:classes.checked,
                root:classes.root
            }}

            size="small"
            checked={checked}
            onChange={()=>changeChecked(id)}
            />
        }

        label={label}
        />
    </div>
  )
}

export default CheckBox