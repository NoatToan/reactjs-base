import { Email } from '@mui/icons-material';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAuth: () => {
    return new Promise<any>((resolve) => {
      resolve({
        data: { id: 1, name: 'John' },
        status: 201,
      });
    });
  },

  login: (params: { email: string; password: string }) => {
    return new Promise<any>((resolve) => {
      resolve({
        data: {
          id: 1,
          name: 'John',
          email: params.email,
        },
        status: 201,
      });
    });
  },

  // fn1:
  // fn2:
};
