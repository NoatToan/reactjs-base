import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import { useFormik } from 'formik';
import LoginValidation from '../LoginValidation';

interface FormProps {
  onSubmit: (data: any) => void;
}
export const Form = ({ onSubmit }: FormProps) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginValidation,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });
  return (
    <Box
      component='form'
      noValidate
      onSubmit={(event: any) => {
        event.preventDefault();
        formik.handleSubmit();
      }}
      sx={{ mt: 1 }}
    >
      <TextField
        margin='normal'
        required
        fullWidth
        id='email'
        label='Email Address'
        name='email'
        autoComplete='email'
        autoFocus
        value={formik.values.email}
        onChange={formik.handleChange}
        role={'email'}
        // Error
        error={!!formik.errors.email}
        helperText={formik.errors.email}
      />
      <TextField
        margin='normal'
        required
        fullWidth
        name='password'
        label='Password'
        type='password'
        id='password'
        autoComplete='current-password'
        value={formik.values.password}
        role={'password'}
        onChange={formik.handleChange}
        // Error
        error={!!formik.errors.password}
        helperText={formik.errors.password}
      />
      <FormControlLabel
        control={<Checkbox value='remember' color='primary' />}
        label='Remember me'
      />
      <Button
        role='submit'
        type='submit'
        fullWidth
        variant='contained'
        sx={{ mt: 3, mb: 2 }}
      >
        Login
      </Button>
    </Box>
  );
};
