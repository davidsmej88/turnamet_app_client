import React from 'react';
import {
  Paper,
  makeStyles,
} from '@material-ui/core';

import AuthForm from '../components/auth/AuthForm';

const useStyle = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  }
}));

const AuthPage = () => {
  const classes = useStyle();
  
  return (
    <Paper className={classes.pageContent}>
      <AuthForm/>
    </Paper>
  );
};

export  default AuthPage;
