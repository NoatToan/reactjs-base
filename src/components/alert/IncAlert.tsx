import { Alert } from '@mui/material';
import React, { useContext } from 'react';

interface props {
  severity?: string;
  msg?: string;
}
export const IncAlert: React.FC<any> = ({ severity, msg }) => {
  return (
    <Alert security={severity} role='alert'>
      {msg}
    </Alert>
  );
};
