import React, {useState} from 'react';
import {Grid} from '@material-ui/core';

import Controls from '../form/controls/Controls';
import { Form, useForm } from '../form/useForm';
import { signUp, login } from '../../services/authServices';

const initialFValues = {
  id: null,
  email: '',
  password: '',
  showPassword: false,
  date: new Date(),
};

export default function AuthForm() {
  const {
    values,
    setValues,
    handleChange,
    errors,
    setErrors,
    resetForm,
  } = useForm(initialFValues);
  const [isLogin, handleIsLogin] = useState(true);
  
  const submitHandler = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const data = isLogin ? await login(values) : await signUp(values);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    }
  };
  
  const handleLogin = () => {
    handleIsLogin(!isLogin);
  };
  
  const validate = () => {
    let temp ={};
    
    temp.email = values.email ? "" : "Přihlašovací jméno nemůže být prázdný";
    temp.password = values.password ? "" : "Heslo nemůže být prázdný";
    
    setErrors({
      ...temp
    });
    return Object.values(temp).every(x => x === "");
  };
  
  return (
    <Form onSubmit={submitHandler}>
      <Grid
        container
        direction="column"
      >
        <Grid item xs={12}>
          <Controls.Input
            label="Email"
            value={values.email}
            name="email"
            onChange={handleChange}
            error={errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <Controls.Input
            name="password"
            label="Password"
            type='password'
            onChange={handleChange}
            value={values.password}
            error={errors.password}
          />
        </Grid>
        <Grid item xs={12}>
          <Controls.Button
            text="Submit"
            type="submit"
          />
          <Controls.Button
            onClick={handleLogin}
            text={`Switch to ${isLogin ? 'Sign up' : 'Log in'}`}
          />
        </Grid>
      </Grid>
    </Form>
  )
};
