import React from 'react';
import {
  Grid,
  OutlinedInput,
  InputLabel,
  FormControl,
  IconButton,
  InputAdornment,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import Controls from '../form/controls/Controls';
import { useForm, Form } from '../form/useForm';

const initialFValues = {
  id: null,
  loginName: '',
  password: '',
  showPassword: false,
  date: new Date(),
};

export default function AuthForm() {
  const {
    values,
    setValues,
    handleChange
  } = useForm(initialFValues);
  
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  return (
    <Form>
      <Grid
        container
        direction="column"
      >
        <Grid item xs={12}>
          <Controls.Input
            label="Login name"
            value={values.loginName}
            name="loginName"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              label="Password"
              type={values.showPassword ? 'text' : 'password'}
              onChange={handleChange}
              value={values.password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Controls.DatePicker
            label="DatePicker"
            value={values.date}
            name="date"
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </Form>
  )
};
