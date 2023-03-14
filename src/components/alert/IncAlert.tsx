import React from 'react';
import { Alert } from '@mui/material';

// interface props {
//   severity?: string;
//   msg?: string;
// }
export const IncAlert: React.FC<any> = ({ severity, msg }) => {
  return (
    <Alert security={severity} role='alert'>
      {msg}
    </Alert>
  );
};
