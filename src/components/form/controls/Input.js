import React from 'react';
import { TextField } from '@material-ui/core';

export default function Input(props) {
  const { label, name, value, onChange, type='text', error=null } = props;
  
  return (
    <TextField
      variant="outlined"
      type={type}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      {...(error && {error:true, helperText:error})}
    />
  )
};
