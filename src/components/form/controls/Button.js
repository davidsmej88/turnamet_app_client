import React from 'react';
import { Button as MuiButton } from '@material-ui/core';

export default function Button(props) {
  const { text, color, size, variant, onClick, ...other } = props;
  
  return (
    <MuiButton
      variant={variant || "contained"}
      color={color || "primary"}
      size={size || "large"}
      onClick={onClick}
      {...other}
    >
      {text}
    </MuiButton>
  )
};
