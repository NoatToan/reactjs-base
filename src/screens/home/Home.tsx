import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useUser } from '../../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export const Home = (props: any) => {
  const { enqueueSnackbar } = useSnackbar();
  const { userState } = useUser();
  const navigator = useNavigate();

  useEffect(() => {
    if (!userState?.user) {
      enqueueSnackbar('Unauthorized', { variant: 'error' });

      navigator('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth='sm'>
      <Box sx={{ my: 4 }}>
        <Typography variant='h4' component='h1' gutterBottom>
          Welcome {userState?.user?.email}
        </Typography>
        <Copyright />
      </Box>
    </Container>
  );
};
